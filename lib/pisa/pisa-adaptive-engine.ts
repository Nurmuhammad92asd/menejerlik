/* =========================================================
 * PISA ACADEMY
 * ADAPTIVE ENGINE
 * Menejerlik by Nurmuhammad
 *
 * PISA-inspired adaptive learning engine.
 *
 * PRINCIPLE:
 *   Correct   → difficulty increases
 *   Incorrect → difficulty decreases
 *   Stable performance → difficulty stays
 *
 * IMPORTANT:
 * This is a learning/adaptive engine.
 * It is NOT an official OECD/PISA scoring algorithm.
 * ========================================================= */

import {
  PISAQuestion,
  PISAAnswerRecord,
  PISADifficulty,
  PISADomain,
  PISAAdaptiveState,
  PISAAdaptiveConfig,
  PISARoutingDirection,
  DEFAULT_PISA_ADAPTIVE_CONFIG,
  PISA_DEFAULT_START_DIFFICULTY,
  PISA_MIN_DIFFICULTY,
  PISA_MAX_DIFFICULTY,
  clampPISADifficulty,
  updatePISAAdaptiveState,
  selectPISAQuestions,
} from './pisa-types'

/* =========================================================
   1. ENGINE TYPES
========================================================= */

export interface PISAAdaptiveEngineState {
  sessionId: string

  studentId: string

  domain?: PISADomain

  adaptive: PISAAdaptiveState

  answeredQuestionIds: string[]

  currentQuestionId?: string

  startedAt: string

  updatedAt: string

  finished: boolean
}

export interface PISANextQuestionRequest {
  questions: PISAQuestion[]

  state: PISAAdaptiveEngineState

  domain?: PISADomain

  skill?: string

  count?: number
}

export interface PISANextQuestionResult {
  questions: PISAQuestion[]

  difficulty: PISADifficulty

  reason:
    | 'initial'
    | 'increase'
    | 'decrease'
    | 'stay'
    | 'fallback'
}

/* =========================================================
   2. ENGINE RESULT
========================================================= */

export interface PISAAdaptiveAnswerResult {
  state: PISAAdaptiveEngineState

  previousDifficulty: PISADifficulty

  nextDifficulty: PISADifficulty

  direction: PISARoutingDirection

  answer: PISAAnswerRecord
}

/* =========================================================
   3. DEFAULT ENGINE RULES
========================================================= */

export const PISA_ENGINE_CONFIG: PISAAdaptiveConfig = {
  ...DEFAULT_PISA_ADAPTIVE_CONFIG,

  /**
   * Two consecutive correct answers
   * move the learner upward.
   */
  correctStreakToIncrease: 2,

  /**
   * One incorrect answer moves the learner
   * one level down.
   *
   * This gives the system immediate recovery.
   */
  incorrectStreakToDecrease: 1,

  /**
   * Never jump more than one level.
   */
  maxUpStep: 1,

  maxDownStep: 1,

  minDifficulty: PISA_MIN_DIFFICULTY,

  maxDifficulty: PISA_MAX_DIFFICULTY,
}

/* =========================================================
   4. CREATE ENGINE
========================================================= */

export function createPISAAdaptiveEngine(
  studentId: string,
  sessionId: string,
  domain?: PISADomain,
  startingDifficulty: PISADifficulty =
    PISA_DEFAULT_START_DIFFICULTY
): PISAAdaptiveEngineState {
  const now =
    new Date().toISOString()

  return {
    sessionId,

    studentId,

    domain,

    adaptive: {
      currentDifficulty:
        startingDifficulty,

      highestDifficulty:
        startingDifficulty,

      lowestDifficulty:
        startingDifficulty,

      consecutiveCorrect: 0,

      consecutiveIncorrect: 0,

      totalAnswered: 0,

      totalCorrect: 0,

      totalIncorrect: 0,

      routingHistory: [],
    },

    answeredQuestionIds: [],

    currentQuestionId: undefined,

    startedAt: now,

    updatedAt: now,

    finished: false,
  }
}

/* =========================================================
   5. GET CURRENT DIFFICULTY
========================================================= */

export function getCurrentPISADifficulty(
  state: PISAAdaptiveEngineState
): PISADifficulty {
  return state.adaptive.currentDifficulty
}

/* =========================================================
   6. GET NEXT QUESTION
========================================================= */

export function getNextPISAQuestion(
  request: PISANextQuestionRequest
): PISANextQuestionResult {
  const {
    questions,
    state,
    domain,
    skill,
    count = 1,
  } = request

  const difficulty =
    state.adaptive.currentDifficulty

  const selected =
    selectPISAQuestions(
      questions,
      {
        difficulty,

        domain:
          domain ??
          state.domain,

        skill,

        excludeQuestionIds:
          state.answeredQuestionIds,

        limit: count,
      }
    )

  /**
   * Normal adaptive route.
   */
  if (selected.length > 0) {
    return {
      questions: selected,

      difficulty,

      reason:
        state.adaptive.totalAnswered === 0
          ? 'initial'
          : getLastRoutingReason(state),
    }
  }

  /**
   * If there is no question at the exact
   * difficulty, search nearby levels.
   */
  const fallback =
    findFallbackQuestions(
      questions,
      state,
      domain,
      skill,
      count
    )

  return {
    questions: fallback.questions,

    difficulty:
      fallback.difficulty,

    reason: 'fallback',
  }
}

/* =========================================================
   7. ANSWER QUESTION
========================================================= */

export function submitPISAAnswer(
  state: PISAAdaptiveEngineState,
  answer: PISAAnswerRecord,
  config: PISAAdaptiveConfig =
    PISA_ENGINE_CONFIG
): PISAAdaptiveAnswerResult {
  const previousDifficulty =
    state.adaptive.currentDifficulty

  /**
   * Update adaptive state.
   */
  const updatedAdaptive =
    updatePISAAdaptiveState(
      state.adaptive,
      answer,
      config
    )

  const nextDifficulty =
    updatedAdaptive.currentDifficulty

  const direction: PISARoutingDirection =
    nextDifficulty >
    previousDifficulty
      ? 'up'
      : nextDifficulty <
          previousDifficulty
        ? 'down'
        : 'stay'

  const updatedState:
    PISAAdaptiveEngineState = {
      ...state,

      adaptive:
        updatedAdaptive,

      answeredQuestionIds:
        state.answeredQuestionIds.includes(
          answer.questionId
        )
          ? state.answeredQuestionIds
          : [
              ...state.answeredQuestionIds,
              answer.questionId,
            ],

      currentQuestionId:
        undefined,

      updatedAt:
        new Date().toISOString(),
    }

  return {
    state: updatedState,

    previousDifficulty,

    nextDifficulty,

    direction,

    answer,
  }
}

/* =========================================================
   8. ROUTING REASON
========================================================= */

function getLastRoutingReason(
  state: PISAAdaptiveEngineState
):
  | 'initial'
  | 'increase'
  | 'decrease'
  | 'stay'
  | 'fallback' {
  const history =
    state.adaptive.routingHistory

  if (!history.length) {
    return 'initial'
  }

  const last =
    history[history.length - 1]

  if (last.direction === 'up') {
    return 'increase'
  }

  if (last.direction === 'down') {
    return 'decrease'
  }

  return 'stay'
}

/* =========================================================
   9. FALLBACK QUESTION SEARCH
========================================================= */

function findFallbackQuestions(
  questions: PISAQuestion[],
  state: PISAAdaptiveEngineState,
  domain?: PISADomain,
  skill?: string,
  count = 1
): {
  questions: PISAQuestion[]
  difficulty: PISADifficulty
} {
  const target =
    state.adaptive.currentDifficulty

  const excluded =
    new Set(
      state.answeredQuestionIds
    )

  /**
   * Search order:
   *
   * target
   * target - 1
   * target + 1
   * target - 2
   * target + 2
   *
   * This keeps the adaptive experience
   * close to the learner's estimated level.
   */
  const candidateDifficulties =
    buildDifficultySearchOrder(
      target
    )

  for (
    const difficulty of
    candidateDifficulties
  ) {
    const candidates =
      questions.filter(
        (question) => {
          if (
            !question.adaptiveEligible
          ) {
            return false
          }

          if (
            question.difficulty !==
            difficulty
          ) {
            return false
          }

          if (
            domain &&
            question.domain !== domain
          ) {
            return false
          }

          if (
            skill &&
            question.skill !== skill
          ) {
            return false
          }

          if (
            excluded.has(question.id)
          ) {
            return false
          }

          return true
        }
      )

    if (candidates.length > 0) {
      return {
        questions:
          shuffle(candidates)
            .slice(0, count),

        difficulty,
      }
    }
  }

  /**
   * Last resort:
   * any unused adaptive question.
   */
  const finalFallback =
    questions.filter(
      (question) =>
        question.adaptiveEligible &&
        !excluded.has(question.id) &&
        (!domain ||
          question.domain === domain)
    )

  return {
    questions:
      shuffle(finalFallback)
        .slice(0, count),

    difficulty:
      finalFallback.length > 0
        ? finalFallback[0].difficulty
        : target,
  }
}

/* =========================================================
   10. BUILD SEARCH ORDER
========================================================= */

function buildDifficultySearchOrder(
  target: PISADifficulty
): PISADifficulty[] {
  const result: PISADifficulty[] = []

  for (
    let distance = 0;
    distance <= 7;
    distance++
  ) {
    const lower =
      target - distance

    const upper =
      target + distance

    if (
      lower >= PISA_MIN_DIFFICULTY &&
      !result.includes(
        lower as PISADifficulty
      )
    ) {
      result.push(
        lower as PISADifficulty
      )
    }

    if (
      upper <= PISA_MAX_DIFFICULTY &&
      !result.includes(
        upper as PISADifficulty
      )
    ) {
      result.push(
        upper as PISADifficulty
      )
    }
  }

  return result
}

/* =========================================================
   11. SHUFFLE
========================================================= */

function shuffle<T>(
  items: T[]
): T[] {
  return [...items].sort(
    () => Math.random() - 0.5
  )
}

/* =========================================================
   12. SHOULD INCREASE?
========================================================= */

export function shouldIncreasePISADifficulty(
  state: PISAAdaptiveEngineState
): boolean {
  return (
    state.adaptive
      .consecutiveCorrect >=
    PISA_ENGINE_CONFIG
      .correctStreakToIncrease
  )
}

/* =========================================================
   13. SHOULD DECREASE?
========================================================= */

export function shouldDecreasePISADifficulty(
  state: PISAAdaptiveEngineState
): boolean {
  return (
    state.adaptive
      .consecutiveIncorrect >=
    PISA_ENGINE_CONFIG
      .incorrectStreakToDecrease
  )
}

/* =========================================================
   14. CAN MOVE UP?
========================================================= */

export function canIncreasePISADifficulty(
  state: PISAAdaptiveEngineState
): boolean {
  return (
    state.adaptive.currentDifficulty <
    PISA_MAX_DIFFICULTY
  )
}

/* =========================================================
   15. CAN MOVE DOWN?
========================================================= */

export function canDecreasePISADifficulty(
  state: PISAAdaptiveEngineState
): boolean {
  return (
    state.adaptive.currentDifficulty >
    PISA_MIN_DIFFICULTY
  )
}

/* =========================================================
   16. ADAPTIVE STATUS
========================================================= */

export type PISAAdaptiveStatus =
  | 'starting'
  | 'improving'
  | 'declining'
  | 'stable'
  | 'mastery'

export function getPISAAdaptiveStatus(
  state: PISAAdaptiveEngineState
): PISAAdaptiveStatus {
  const {
    currentDifficulty,
    consecutiveCorrect,
    consecutiveIncorrect,
    totalAnswered,
  } = state.adaptive

  if (
    totalAnswered === 0
  ) {
    return 'starting'
  }

  if (
    currentDifficulty >= 8 &&
    consecutiveCorrect >= 2
  ) {
    return 'mastery'
  }

  if (
    consecutiveCorrect > 0 &&
    consecutiveCorrect >=
      consecutiveIncorrect
  ) {
    return 'improving'
  }

  if (
    consecutiveIncorrect > 0
  ) {
    return 'declining'
  }

  return 'stable'
}

/* =========================================================
   17. PROGRESS SUMMARY
========================================================= */

export interface PISAAdaptiveSummary {
  currentDifficulty: PISADifficulty

  highestDifficulty: PISADifficulty

  lowestDifficulty: PISADifficulty

  answered: number

  correct: number

  incorrect: number

  accuracy: number

  status: PISAAdaptiveStatus

  direction:
    | 'up'
    | 'down'
    | 'stable'
}

/* =========================================================
   18. CREATE SUMMARY
========================================================= */

export function getPISAAdaptiveSummary(
  state: PISAAdaptiveEngineState
): PISAAdaptiveSummary {
  const adaptive =
    state.adaptive

  const accuracy =
    adaptive.totalAnswered === 0
      ? 0
      : Math.round(
          (adaptive.totalCorrect /
            adaptive.totalAnswered) *
            100
        )

  const history =
    adaptive.routingHistory

  const last =
    history.length
      ? history[history.length - 1]
      : undefined

  return {
    currentDifficulty:
      adaptive.currentDifficulty,

    highestDifficulty:
      adaptive.highestDifficulty,

    lowestDifficulty:
      adaptive.lowestDifficulty,

    answered:
      adaptive.totalAnswered,

    correct:
      adaptive.totalCorrect,

    incorrect:
      adaptive.totalIncorrect,

    accuracy,

    status:
      getPISAAdaptiveStatus(
        state
      ),

    direction:
      last?.direction === 'up'
        ? 'up'
        : last?.direction === 'down'
          ? 'down'
          : 'stable',
  }
}

/* =========================================================
   19. RESET ENGINE
========================================================= */

export function resetPISAAdaptiveEngine(
  state: PISAAdaptiveEngineState,
  difficulty: PISADifficulty =
    PISA_DEFAULT_START_DIFFICULTY
): PISAAdaptiveEngineState {
  const now =
    new Date().toISOString()

  return {
    ...state,

    adaptive: {
      currentDifficulty:
        clampPISADifficulty(
          difficulty
        ),

      highestDifficulty:
        clampPISADifficulty(
          difficulty
        ),

      lowestDifficulty:
        clampPISADifficulty(
          difficulty
        ),

      consecutiveCorrect: 0,

      consecutiveIncorrect: 0,

      totalAnswered: 0,

      totalCorrect: 0,

      totalIncorrect: 0,

      routingHistory: [],
    },

    answeredQuestionIds: [],

    currentQuestionId:
      undefined,

    startedAt: now,

    updatedAt: now,

    finished: false,
  }
}

/* =========================================================
   20. FINISH TEST
========================================================= */

export function finishPISAAdaptiveEngine(
  state: PISAAdaptiveEngineState
): PISAAdaptiveEngineState {
  return {
    ...state,

    finished: true,

    updatedAt:
      new Date().toISOString(),
  }
}

/* =========================================================
   21. ENGINE DEBUG SNAPSHOT
========================================================= */

export interface PISAAdaptiveDebugSnapshot {
  studentId: string

  sessionId: string

  currentDifficulty: number

  highestDifficulty: number

  lowestDifficulty: number

  correctStreak: number

  incorrectStreak: number

  totalAnswered: number

  totalCorrect: number

  totalIncorrect: number

  status: PISAAdaptiveStatus

  lastRouting?: {
    from: number
    to: number
    direction: PISARoutingDirection
    reason: string
  }
}

export function getPISAAdaptiveDebugSnapshot(
  state: PISAAdaptiveEngineState
): PISAAdaptiveDebugSnapshot {
  const history =
    state.adaptive.routingHistory

  const last =
    history.length
      ? history[history.length - 1]
      : undefined

  return {
    studentId:
      state.studentId,

    sessionId:
      state.sessionId,

    currentDifficulty:
      state.adaptive.currentDifficulty,

    highestDifficulty:
      state.adaptive.highestDifficulty,

    lowestDifficulty:
      state.adaptive.lowestDifficulty,

    correctStreak:
      state.adaptive.consecutiveCorrect,

    incorrectStreak:
      state.adaptive.consecutiveIncorrect,

    totalAnswered:
      state.adaptive.totalAnswered,

    totalCorrect:
      state.adaptive.totalCorrect,

    totalIncorrect:
      state.adaptive.totalIncorrect,

    status:
      getPISAAdaptiveStatus(
        state
      ),

    lastRouting: last
      ? {
          from:
            last.fromDifficulty,

          to:
            last.toDifficulty,

          direction:
            last.direction,

          reason:
            last.reason,
        }
      : undefined,
  }
}
