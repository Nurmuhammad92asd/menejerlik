/* =========================================================
 * PISA ACADEMY
 * Core Type System
 * Menejerlik by Nurmuhammad
 *
 * PISA-inspired adaptive learning architecture
 *
 * IMPORTANT:
 * This system is designed for training and learning.
 * It is NOT an official OECD/PISA scoring implementation.
 * ========================================================= */

/* =========================================================
   1. CORE ENUMS
========================================================= */

/**
 * PISA learning domains.
 */
export type PISADomain =
  | 'mathematics'
  | 'reading'
  | 'science'
  | 'problem-solving'

/**
 * Adaptive difficulty.
 *
 * 1 = entry
 * 8 = advanced
 */
export type PISADifficulty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

/**
 * General difficulty labels for UI.
 */
export type PISADifficultyLabel =
  | 'starter'
  | 'easy'
  | 'developing'
  | 'medium'
  | 'upper-medium'
  | 'hard'
  | 'advanced'
  | 'master'

/**
 * Mathematical content areas inspired by PISA frameworks.
 */
export type PISAMathematicsContent =
  | 'quantity'
  | 'change-and-relationships'
  | 'space-and-shape'
  | 'uncertainty-and-data'

/**
 * Mathematical reasoning processes.
 */
export type PISAMathematicalProcess =
  | 'formulate'
  | 'employ'
  | 'interpret'
  | 'evaluate'
  | 'reason'

/**
 * Reading processes.
 */
export type PISAReadingProcess =
  | 'locate-information'
  | 'understand'
  | 'integrate'
  | 'infer'
  | 'evaluate'
  | 'reflect'

/**
 * Science competencies.
 */
export type PISAScienceCompetency =
  | 'explain-phenomena'
  | 'evaluate-and-design-enquiry'
  | 'interpret-data-and-evidence'

/**
 * Real-life context.
 */
export type PISAContext =
  | 'personal'
  | 'school'
  | 'work'
  | 'societal'
  | 'global'
  | 'scientific'
  | 'environmental'
  | 'digital'

/**
 * Item response formats.
 */
export type PISAQuestionType =
  | 'single-choice'
  | 'multiple-choice'
  | 'true-false'
  | 'numeric'
  | 'short-answer'
  | 'open-response'
  | 'drag-drop'
  | 'matching'
  | 'ordering'

/**
 * Stimulus types.
 */
export type PISAStimulusType =
  | 'text'
  | 'table'
  | 'chart'
  | 'graph'
  | 'image'
  | 'map'
  | 'diagram'
  | 'mixed'

/**
 * Adaptive routing direction.
 */
export type PISARoutingDirection =
  | 'up'
  | 'down'
  | 'stay'

/* =========================================================
   2. DIFFICULTY
========================================================= */

export interface PISADifficultyProfile {
  level: PISADifficulty

  label: PISADifficultyLabel

  /**
   * Approximate cognitive demand.
   * 0–100 is an internal learning-system scale.
   */
  cognitiveDemand: number

  /**
   * Internal XP reward.
   */
  xp: number

  /**
   * Approximate expected solving time in seconds.
   */
  expectedTimeSeconds: number
}

export const PISA_DIFFICULTY_PROFILES: Record<
  PISADifficulty,
  PISADifficultyProfile
> = {
  1: {
    level: 1,
    label: 'starter',
    cognitiveDemand: 15,
    xp: 10,
    expectedTimeSeconds: 45,
  },

  2: {
    level: 2,
    label: 'easy',
    cognitiveDemand: 25,
    xp: 15,
    expectedTimeSeconds: 60,
  },

  3: {
    level: 3,
    label: 'developing',
    cognitiveDemand: 35,
    xp: 20,
    expectedTimeSeconds: 75,
  },

  4: {
    level: 4,
    label: 'medium',
    cognitiveDemand: 48,
    xp: 25,
    expectedTimeSeconds: 90,
  },

  5: {
    level: 5,
    label: 'upper-medium',
    cognitiveDemand: 60,
    xp: 35,
    expectedTimeSeconds: 120,
  },

  6: {
    level: 6,
    label: 'hard',
    cognitiveDemand: 72,
    xp: 45,
    expectedTimeSeconds: 150,
  },

  7: {
    level: 7,
    label: 'advanced',
    cognitiveDemand: 85,
    xp: 60,
    expectedTimeSeconds: 180,
  },

  8: {
    level: 8,
    label: 'master',
    cognitiveDemand: 95,
    xp: 80,
    expectedTimeSeconds: 240,
  },
}

/* =========================================================
   3. QUESTION CONTENT
========================================================= */

export interface PISAOption {
  id: string
  text: string

  /**
   * Optional explanation for this particular choice.
   */
  explanation?: string
}

export interface PISAStimulus {
  type: PISAStimulusType

  title?: string

  /**
   * Main text or instruction.
   */
  text?: string

  /**
   * Optional structured data.
   */
  data?: unknown

  /**
   * Image/chart URL if required by the UI.
   */
  mediaUrl?: string

  /**
   * Accessible description.
   */
  altText?: string
}

export interface PISATableColumn {
  id: string
  label: string
}

export interface PISATableRow {
  id: string
  values: Array<string | number>
}

export interface PISATableData {
  columns: PISATableColumn[]
  rows: PISATableRow[]
}

export interface PISAChartPoint {
  label: string
  value: number
}

export interface PISAChartData {
  type: 'bar' | 'line' | 'pie' | 'scatter'
  title?: string
  xLabel?: string
  yLabel?: string
  points: PISAChartPoint[]
}

/* =========================================================
   4. QUESTION
========================================================= */

export interface PISAQuestion {
  /**
   * Globally unique question ID.
   */
  id: string

  /**
   * Question version.
   */
  version: number

  /**
   * Main PISA domain.
   */
  domain: PISADomain

  /**
   * Difficulty 1–8.
   */
  difficulty: PISADifficulty

  /**
   * Optional topic/category.
   */
  topic: string

  /**
   * Real-world context.
   */
  context: PISAContext

  /**
   * Question response format.
   */
  type: PISAQuestionType

  /**
   * Main stimulus.
   */
  stimulus?: PISAStimulus

  /**
   * Optional table.
   */
  table?: PISATableData

  /**
   * Optional chart.
   */
  chart?: PISAChartData

  /**
   * Question text.
   */
  question: string

  /**
   * Answer choices.
   */
  options?: PISAOption[]

  /**
   * Correct answer.
   *
   * For multiple answers, use an array.
   */
  correctAnswer: string | string[] | number

  /**
   * Explanation shown after answering.
   */
  explanation: string

  /**
   * Why this item is educationally important.
   */
  learningObjective: string

  /**
   * Main skill being trained.
   */
  skill: string

  /**
   * Optional secondary skills.
   */
  secondarySkills?: string[]

  /**
   * Mathematical metadata.
   */
  mathematics?: {
    contentArea: PISAMathematicsContent
    process: PISAMathematicalProcess
  }

  /**
   * Reading metadata.
   */
  reading?: {
    process: PISAReadingProcess
  }

  /**
   * Science metadata.
   */
  science?: {
    competency: PISAScienceCompetency
  }

  /**
   * Estimated time.
   */
  estimatedTimeSeconds: number

  /**
   * Internal XP.
   */
  xp: number

  /**
   * Tags for filtering and adaptive selection.
   */
  tags: string[]

  /**
   * Whether the question is suitable for adaptive testing.
   */
  adaptiveEligible: boolean
}

/* =========================================================
   5. ANSWER RECORD
========================================================= */

export interface PISAAnswerRecord {
  questionId: string

  difficulty: PISADifficulty

  selectedAnswer: string | string[] | number

  correct: boolean

  /**
   * Time spent in seconds.
   */
  responseTimeSeconds: number

  /**
   * Timestamp.
   */
  answeredAt: string

  /**
   * Optional skill information.
   */
  domain: PISADomain

  skill: string
}

/* =========================================================
   6. ADAPTIVE STATE
========================================================= */

export interface PISAAdaptiveState {
  /**
   * Current estimated difficulty.
   */
  currentDifficulty: PISADifficulty

  /**
   * Highest difficulty reached.
   */
  highestDifficulty: PISADifficulty

  /**
   * Lowest difficulty reached.
   */
  lowestDifficulty: PISADifficulty

  /**
   * Number of consecutive correct answers.
   */
  consecutiveCorrect: number

  /**
   * Number of consecutive incorrect answers.
   */
  consecutiveIncorrect: number

  /**
   * Total answers.
   */
  totalAnswered: number

  /**
   * Correct answers.
   */
  totalCorrect: number

  /**
   * Incorrect answers.
   */
  totalIncorrect: number

  /**
   * Adaptive movement history.
   */
  routingHistory: PISARoutingEvent[]
}

/* =========================================================
   7. ADAPTIVE ROUTING
========================================================= */

export interface PISARoutingEvent {
  questionId: string

  fromDifficulty: PISADifficulty

  toDifficulty: PISADifficulty

  direction: PISARoutingDirection

  reason:
    | 'correct'
    | 'incorrect'
    | 'streak'
    | 'stability'
    | 'boundary'

  timestamp: string
}

/* =========================================================
   8. DOMAIN PERFORMANCE
========================================================= */

export interface PISADomainPerformance {
  domain: PISADomain

  attempted: number

  correct: number

  incorrect: number

  accuracy: number

  averageDifficulty: number

  highestDifficulty: PISADifficulty

  estimatedLevel: number
}

/* =========================================================
   9. SKILL PERFORMANCE
========================================================= */

export interface PISASkillPerformance {
  skill: string

  domain: PISADomain

  attempted: number

  correct: number

  accuracy: number

  averageDifficulty: number

  confidence: number

  status:
    | 'new'
    | 'developing'
    | 'stable'
    | 'strong'
    | 'mastered'
}

/* =========================================================
   10. STUDENT PISA PROFILE
========================================================= */

export interface PISAStudentProfile {
  studentId: string

  totalQuestions: number

  totalCorrect: number

  totalIncorrect: number

  accuracy: number

  currentAdaptiveLevel: number

  highestDifficultyReached: PISADifficulty

  domainPerformance: PISADomainPerformance[]

  skillPerformance: PISASkillPerformance[]

  strengths: string[]

  weaknesses: string[]

  recommendedSkills: string[]

  recommendedDifficulty: PISADifficulty

  totalXP: number

  streak: number

  updatedAt: string
}

/* =========================================================
   11. TEST SESSION
========================================================= */

export interface PISATestConfig {
  /**
   * Number of questions.
   */
  questionCount: number

  /**
   * Starting difficulty.
   */
  startingDifficulty: PISADifficulty

  /**
   * Minimum difficulty.
   */
  minDifficulty: PISADifficulty

  /**
   * Maximum difficulty.
   */
  maxDifficulty: PISADifficulty

  /**
   * Whether adaptive routing is enabled.
   */
  adaptive: boolean

  /**
   * Optional domains.
   */
  domains: PISADomain[]

  /**
   * Optional time limit.
   */
  timeLimitMinutes?: number
}

export interface PISATestSession {
  id: string

  studentId: string

  startedAt: string

  finishedAt?: string

  status: 'not-started' | 'active' | 'completed' | 'abandoned'

  config: PISATestConfig

  adaptive: PISAAdaptiveState

  answers: PISAAnswerRecord[]

  currentQuestionId?: string

  score?: PISAScore

  profile?: PISAStudentProfile
}

/* =========================================================
   12. SCORING
========================================================= */

/**
 * Internal training score.
 *
 * This is NOT an official PISA score.
 */
export interface PISAScore {
  rawCorrect: number

  totalQuestions: number

  accuracy: number

  weightedScore: number

  estimatedLevel: number

  highestDifficulty: PISADifficulty

  xpEarned: number
}

/* =========================================================
   13. MASTERY
========================================================= */

export interface PISAMastery {
  skill: string

  domain: PISADomain

  level: number

  accuracy: number

  confidence: number

  attempts: number

  mastered: boolean

  nextDifficulty: PISADifficulty
}

/* =========================================================
   14. ACHIEVEMENTS
========================================================= */

export type PISAAchievementId =
  | 'first-test'
  | 'first-perfect'
  | 'level-3'
  | 'level-5'
  | 'level-7'
  | 'level-8'
  | 'data-detective'
  | 'math-thinker'
  | 'reading-master'
  | 'science-explorer'
  | 'problem-solver'
  | 'seven-day-streak'
  | 'hundred-questions'
  | 'adaptive-master'

export interface PISAAchievement {
  id: PISAAchievementId

  title: string

  description: string

  icon: string

  xp: number

  unlocked: boolean

  unlockedAt?: string
}

/* =========================================================
   15. PROGRESS
========================================================= */

export interface PISAProgress {
  studentId: string

  totalXP: number

  totalQuestions: number

  totalCorrect: number

  totalTests: number

  completedTests: number

  currentLevel: number

  highestDifficulty: PISADifficulty

  streak: number

  lastStudyDate?: string

  achievements: PISAAchievement[]

  recentSessions: string[]
}

/* =========================================================
   16. RECOMMENDATION ENGINE
========================================================= */

export interface PISARecommendation {
  id: string

  type:
    | 'question'
    | 'skill'
    | 'domain'
    | 'review'
    | 'challenge'

  title: string

  description: string

  domain: PISADomain

  difficulty: PISADifficulty

  skill: string

  priority: number

  reason:
    | 'weak-skill'
    | 'low-accuracy'
    | 'stability'
    | 'ready-for-harder'
    | 'review'
    | 'challenge'
}

/* =========================================================
   17. ADAPTIVE ENGINE SETTINGS
========================================================= */

export interface PISAAdaptiveConfig {
  /**
   * Number of consecutive correct answers
   * required before increasing difficulty.
   */
  correctStreakToIncrease: number

  /**
   * Number of consecutive incorrect answers
   * required before decreasing difficulty.
   */
  incorrectStreakToDecrease: number

  /**
   * Maximum difficulty jump per question.
   */
  maxUpStep: number

  /**
   * Maximum downward step.
   */
  maxDownStep: number

  /**
   * Minimum allowed difficulty.
   */
  minDifficulty: PISADifficulty

  /**
   * Maximum allowed difficulty.
   */
  maxDifficulty: PISADifficulty
}

export const DEFAULT_PISA_ADAPTIVE_CONFIG: PISAAdaptiveConfig = {
  correctStreakToIncrease: 2,

  incorrectStreakToDecrease: 1,

  maxUpStep: 1,

  maxDownStep: 1,

  minDifficulty: 1,

  maxDifficulty: 8,
}

/* =========================================================
   18. CONSTANTS
========================================================= */

export const PISA_MIN_DIFFICULTY: PISADifficulty = 1

export const PISA_MAX_DIFFICULTY: PISADifficulty = 8

export const PISA_DEFAULT_START_DIFFICULTY: PISADifficulty = 4

export const PISA_DEFAULT_QUESTION_COUNT = 20

export const PISA_DEFAULT_TIME_LIMIT_MINUTES = 40

export const PISA_PASS_PERCENT = 70

export const PISA_MASTER_LEVEL = 8

export const PISA_DEFAULT_XP = 10

/* =========================================================
   19. TYPE GUARDS
========================================================= */

export function isPISADifficulty(
  value: number
): value is PISADifficulty {
  return (
    Number.isInteger(value) &&
    value >= PISA_MIN_DIFFICULTY &&
    value <= PISA_MAX_DIFFICULTY
  )
}

export function isPISADomain(
  value: string
): value is PISADomain {
  return [
    'mathematics',
    'reading',
    'science',
    'problem-solving',
  ].includes(value)
}

/* =========================================================
   20. DIFFICULTY HELPERS
========================================================= */

export function getPISADifficultyLabel(
  difficulty: PISADifficulty
): PISADifficultyLabel {
  return PISA_DIFFICULTY_PROFILES[difficulty].label
}

export function clampPISADifficulty(
  value: number
): PISADifficulty {
  const rounded = Math.round(value)

  if (rounded <= 1) return 1
  if (rounded >= 8) return 8

  return rounded as PISADifficulty
}

/* =========================================================
   21. ADAPTIVE ROUTING HELPERS
========================================================= */

export function getNextPISADifficulty(
  current: PISADifficulty,
  correct: boolean,
  config: PISAAdaptiveConfig = DEFAULT_PISA_ADAPTIVE_CONFIG
): PISADifficulty {
  if (correct) {
    return clampPISADifficulty(
      Math.min(
        current + config.maxUpStep,
        config.maxDifficulty
      )
    )
  }

  return clampPISADifficulty(
    Math.max(
      current - config.maxDownStep,
      config.minDifficulty
    )
  )
}

/* =========================================================
   22. ACCURACY
========================================================= */

export function calculatePISAAccuracy(
  correct: number,
  total: number
): number {
  if (total <= 0) return 0

  return Math.round((correct / total) * 100)
}

/* =========================================================
   23. ESTIMATED LEVEL
========================================================= */

export function calculatePISAEstimatedLevel(
  answers: PISAAnswerRecord[]
): number {
  if (!answers.length) {
    return PISA_DEFAULT_START_DIFFICULTY
  }

  let weightedTotal = 0
  let weightTotal = 0

  for (const answer of answers) {
    const weight = answer.correct ? 1.2 : 1

    weightedTotal += answer.difficulty * weight
    weightTotal += weight
  }

  if (weightTotal === 0) {
    return PISA_DEFAULT_START_DIFFICULTY
  }

  return Number(
    (weightedTotal / weightTotal).toFixed(1)
  )
}

/* =========================================================
   24. XP
========================================================= */

export function calculatePISAXP(
  question: PISAQuestion,
  correct: boolean
): number {
  if (!correct) {
    return Math.max(2, Math.floor(question.xp * 0.25))
  }

  return question.xp
}

/* =========================================================
   25. EMPTY ADAPTIVE STATE
========================================================= */

export function createPISAAdaptiveState(
  startingDifficulty: PISADifficulty = PISA_DEFAULT_START_DIFFICULTY
): PISAAdaptiveState {
  return {
    currentDifficulty: startingDifficulty,

    highestDifficulty: startingDifficulty,

    lowestDifficulty: startingDifficulty,

    consecutiveCorrect: 0,

    consecutiveIncorrect: 0,

    totalAnswered: 0,

    totalCorrect: 0,

    totalIncorrect: 0,

    routingHistory: [],
  }
}

/* =========================================================
   26. UPDATE ADAPTIVE STATE
========================================================= */

export function updatePISAAdaptiveState(
  state: PISAAdaptiveState,
  answer: PISAAnswerRecord,
  config: PISAAdaptiveConfig = DEFAULT_PISA_ADAPTIVE_CONFIG
): PISAAdaptiveState {
  const current = state.currentDifficulty

  let nextDifficulty = current

  let consecutiveCorrect = state.consecutiveCorrect

  let consecutiveIncorrect = state.consecutiveIncorrect

  if (answer.correct) {
    consecutiveCorrect += 1
    consecutiveIncorrect = 0

    if (
      consecutiveCorrect >=
      config.correctStreakToIncrease
    ) {
      nextDifficulty = clampPISADifficulty(
        Math.min(
          current + config.maxUpStep,
          config.maxDifficulty
        )
      )

      consecutiveCorrect = 0
    }
  } else {
    consecutiveIncorrect += 1
    consecutiveCorrect = 0

    if (
      consecutiveIncorrect >=
      config.incorrectStreakToDecrease
    ) {
      nextDifficulty = clampPISADifficulty(
        Math.max(
          current - config.maxDownStep,
          config.minDifficulty
        )
      )

      consecutiveIncorrect = 0
    }
  }

  const direction: PISARoutingDirection =
    nextDifficulty > current
      ? 'up'
      : nextDifficulty < current
        ? 'down'
        : 'stay'

  const reason: PISARoutingEvent['reason'] =
    direction === 'up'
      ? 'streak'
      : direction === 'down'
        ? 'incorrect'
        : 'stability'

  const routingEvent: PISARoutingEvent = {
    questionId: answer.questionId,

    fromDifficulty: current,

    toDifficulty: nextDifficulty,

    direction,

    reason,

    timestamp: new Date().toISOString(),
  }

  const totalAnswered =
    state.totalAnswered + 1

  const totalCorrect =
    state.totalCorrect +
    (answer.correct ? 1 : 0)

  const totalIncorrect =
    state.totalIncorrect +
    (answer.correct ? 0 : 1)

  return {
    currentDifficulty: nextDifficulty,

    highestDifficulty:
      Math.max(
        state.highestDifficulty,
        nextDifficulty
      ) as PISADifficulty,

    lowestDifficulty:
      Math.min(
        state.lowestDifficulty,
        nextDifficulty
      ) as PISADifficulty,

    consecutiveCorrect,

    consecutiveIncorrect,

    totalAnswered,

    totalCorrect,

    totalIncorrect,

    routingHistory: [
      ...state.routingHistory,
      routingEvent,
    ],
  }
}

/* =========================================================
   27. QUESTION SELECTION
========================================================= */

export interface PISAQuestionSelectionOptions {
  difficulty: PISADifficulty

  domain?: PISADomain

  skill?: string

  excludeQuestionIds?: string[]

  limit?: number
}

export function selectPISAQuestions(
  questions: PISAQuestion[],
  options: PISAQuestionSelectionOptions
): PISAQuestion[] {
  const {
    difficulty,
    domain,
    skill,
    excludeQuestionIds = [],
    limit = 1,
  } = options

  const excluded = new Set(
    excludeQuestionIds
  )

  const filtered = questions.filter(
    (question) => {
      if (!question.adaptiveEligible) {
        return false
      }

      if (
        question.difficulty !== difficulty
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

  /**
   * Randomize without requiring external libraries.
   */
  return [...filtered]
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
}

/* =========================================================
   28. DOMAIN PERFORMANCE
========================================================= */

export function calculatePISADomainPerformance(
  answers: PISAAnswerRecord[]
): PISADomainPerformance[] {
  const domains: PISADomain[] = [
    'mathematics',
    'reading',
    'science',
    'problem-solving',
  ]

  return domains.map((domain) => {
    const domainAnswers =
      answers.filter(
        (answer) =>
          answer.domain === domain
      )

    const attempted =
      domainAnswers.length

    const correct =
      domainAnswers.filter(
        (answer) => answer.correct
      ).length

    const incorrect =
      attempted - correct

    const accuracy =
      calculatePISAAccuracy(
        correct,
        attempted
      )

    const averageDifficulty =
      attempted === 0
        ? 0
        : Number(
            (
              domainAnswers.reduce(
                (sum, answer) =>
                  sum + answer.difficulty,
                0
              ) / attempted
            ).toFixed(1)
          )

    const highestDifficulty =
      attempted === 0
        ? 1
        : Math.max(
            ...domainAnswers.map(
              (answer) =>
                answer.difficulty
            )
          ) as PISADifficulty

    return {
      domain,

      attempted,

      correct,

      incorrect,

      accuracy,

      averageDifficulty,

      highestDifficulty,

      estimatedLevel:
        averageDifficulty,
    }
  })
}

/* =========================================================
   29. SESSION RESULT
========================================================= */

export function calculatePISAScore(
  session: PISATestSession
): PISAScore {
  const answers = session.answers

  const totalQuestions =
    answers.length

  const rawCorrect =
    answers.filter(
      (answer) => answer.correct
    ).length

  const accuracy =
    calculatePISAAccuracy(
      rawCorrect,
      totalQuestions
    )

  const weightedScore =
    totalQuestions === 0
      ? 0
      : Number(
          (
            answers.reduce(
              (sum, answer) =>
                sum +
                answer.difficulty *
                  (answer.correct
                    ? 1
                    : 0),
              0
            ) /
            totalQuestions
          ).toFixed(2)
        )

  const estimatedLevel =
    calculatePISAEstimatedLevel(
      answers
    )

  const highestDifficulty =
    answers.length === 0
      ? session.adaptive.highestDifficulty
      : Math.max(
          ...answers.map(
            (answer) =>
              answer.difficulty
          )
        ) as PISADifficulty

  const xpEarned =
    answers.reduce(
      (sum, answer) =>
        sum +
        (answer.correct
          ? Math.max(
              5,
              answer.difficulty * 10
            )
          : 2),
      0
    )

  return {
    rawCorrect,

    totalQuestions,

    accuracy,

    weightedScore,

    estimatedLevel,

    highestDifficulty,

    xpEarned,
  }
}
