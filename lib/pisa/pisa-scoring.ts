/* =========================================================
 * PISA INTERNATIONAL ASSESSMENT ENGINE
 * Menejerlik by Nurmuhammad
 *
 * PISA Framework-Based Adaptive Scoring System
 *
 * IMPORTANT:
 * This is an original platform scoring model inspired by
 * international assessment principles. It is NOT an official
 * OECD/PISA score calculator.
 * ========================================================= */

import type {
  PISAQuestion,
  PISADomain,
  PISADifficulty,
} from "./pisa-types";

/* =========================================================
   1. CORE TYPES
========================================================= */

export type PISAScoreBand =
  | "emerging"
  | "developing"
  | "proficient"
  | "strong"
  | "advanced"
  | "mastery";

export type PISAPerformanceStatus =
  | "needs-support"
  | "developing"
  | "on-track"
  | "strong"
  | "advanced"
  | "mastery";

export type PISAProcess =
  | "formulate"
  | "employ"
  | "interpret-evaluate"
  | "reasoning";

export interface PISAAnswerInput {
  questionId: string;

  /**
   * Whether the learner answered correctly.
   */
  isCorrect: boolean;

  /**
   * Response time in seconds.
   */
  responseTimeSeconds?: number;

  /**
   * Optional selected answer.
   */
  selectedAnswer?: string;

  /**
   * Optional confidence reported by learner.
   * 0–100.
   */
  confidence?: number;
}

export interface PISAScoringQuestion extends PISAQuestion {
  /**
   * Optional process metadata.
   * We intentionally allow this because different
   * question banks may provide different process fields.
   */
  process?: string;

  /**
   * Optional subskill.
   */
  subskill?: string;
}

export interface PISAQuestionScore {
  questionId: string;

  domain: PISADomain;

  difficulty: PISADifficulty;

  isCorrect: boolean;

  basePoints: number;

  difficultyWeight: number;

  earnedPoints: number;

  responseTimeSeconds: number | null;

  timeEfficiency: number;

  performanceContribution: number;
}

export interface PISADomainScore {
  domain: PISADomain;

  questions: number;

  answered: number;

  correct: number;

  incorrect: number;

  accuracy: number;

  weightedAccuracy: number;

  averageDifficulty: number;

  difficultyScore: number;

  consistency: number;

  speedScore: number;

  performanceScore: number;

  level: number;

  band: PISAScoreBand;

  status: PISAPerformanceStatus;
}

export interface PISASkillScore {
  skill: string;

  questions: number;

  answered: number;

  correct: number;

  accuracy: number;

  performanceScore: number;

  level: number;

  status: PISAPerformanceStatus;
}

export interface PISAProcessScore {
  process: string;

  questions: number;

  answered: number;

  correct: number;

  accuracy: number;

  performanceScore: number;

  level: number;
}

export interface PISAScore {
  overallScore: number;

  accuracy: number;

  weightedAccuracy: number;

  difficultyScore: number;

  consistencyScore: number;

  speedScore: number;

  adaptiveLevel: number;

  estimatedProficiencyLevel: number;

  band: PISAScoreBand;

  status: PISAPerformanceStatus;

  totalQuestions: number;

  answeredQuestions: number;

  correctAnswers: number;

  incorrectAnswers: number;

  questionScores: PISAQuestionScore[];

  domainScores: PISADomainScore[];

  skillScores: PISASkillScore[];

  processScores: PISAProcessScore[];

  strengths: string[];

  weaknesses: string[];

  recommendations: string[];

  generatedAt: string;
}

/* =========================================================
   2. CONFIGURATION
========================================================= */

export const PISA_SCORING_CONFIG = {
  minScore: 0,
  maxScore: 100,

  minDifficulty: 1,
  maxDifficulty: 8,

  defaultDifficulty: 4,

  /**
   * Weight distribution.
   *
   * Accuracy:
   * 45%
   *
   * Difficulty:
   * 25%
   *
   * Consistency:
   * 15%
   *
   * Speed:
   * 15%
   */
  weights: {
    accuracy: 0.45,
    difficulty: 0.25,
    consistency: 0.15,
    speed: 0.15,
  },

  /**
   * Performance bands.
   */
  bands: {
    emerging: {
      min: 0,
      max: 39,
      level: 1,
    },

    developing: {
      min: 40,
      max: 54,
      level: 2,
    },

    proficient: {
      min: 55,
      max: 69,
      level: 3,
    },

    strong: {
      min: 70,
      max: 79,
      level: 4,
    },

    advanced: {
      min: 80,
      max: 89,
      level: 5,
    },

    mastery: {
      min: 90,
      max: 100,
      level: 6,
    },
  },

  /**
   * Response-time benchmark.
   *
   * This is NOT used to punish thoughtful learners.
   * It provides only a limited efficiency signal.
   */
  responseTime: {
    veryFastMultiplier: 0.85,
    fastMultiplier: 1,
    normalMultiplier: 1.15,
    slowMultiplier: 1.5,
  },

  minimumQuestionsForStrongInference: 10,
} as const;

/* =========================================================
   3. BASIC UTILITIES
========================================================= */

function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(Math.max(value, min), max);
}

function round(
  value: number,
  decimals = 1
): number {
  const multiplier = Math.pow(10, decimals);

  return Math.round(value * multiplier) / multiplier;
}

function safePercentage(
  numerator: number,
  denominator: number
): number {
  if (!denominator || denominator <= 0) {
    return 0;
  }

  return clamp(
    (numerator / denominator) * 100,
    0,
    100
  );
}

/* =========================================================
   4. DIFFICULTY WEIGHT
========================================================= */

/**
 * Difficulty does not simply mean:
 *
 * level 8 = 8 points
 *
 * Instead we normalize the difficulty into a 0–100
 * contribution.
 */
export function getPISADifficultyWeight(
  difficulty: number
): number {
  const normalized =
    (difficulty - PISA_SCORING_CONFIG.minDifficulty) /
    (
      PISA_SCORING_CONFIG.maxDifficulty -
      PISA_SCORING_CONFIG.minDifficulty
    );

  return round(
    clamp(normalized, 0, 1) * 100,
    1
  );
}

/**
 * Converts difficulty into a multiplier.
 *
 * Easy questions receive a lower contribution.
 * Difficult questions receive a higher contribution.
 */
export function getPISADifficultyMultiplier(
  difficulty: number
): number {
  const normalized =
    clamp(
      difficulty,
      PISA_SCORING_CONFIG.minDifficulty,
      PISA_SCORING_CONFIG.maxDifficulty
    );

  return round(
    0.7 +
      (
        (normalized - 1) /
        7
      ) *
        0.8,
    3
  );
}

/* =========================================================
   5. RESPONSE-TIME ANALYSIS
========================================================= */

export function calculatePISATimeEfficiency(
  responseTimeSeconds: number | undefined,
  estimatedTimeSeconds: number | undefined
): number {
  if (
    !responseTimeSeconds ||
    responseTimeSeconds <= 0 ||
    !estimatedTimeSeconds ||
    estimatedTimeSeconds <= 0
  ) {
    return 70;
  }

  const ratio =
    responseTimeSeconds /
    estimatedTimeSeconds;

  if (ratio <= 0.85) {
    return 100;
  }

  if (ratio <= 1.15) {
    return 95;
  }

  if (ratio <= 1.5) {
    return 85;
  }

  if (ratio <= 2) {
    return 70;
  }

  if (ratio <= 3) {
    return 55;
  }

  return 40;
}

/* =========================================================
   6. QUESTION SCORE
========================================================= */

export function calculatePISAQuestionScore(
  question: PISAScoringQuestion,
  answer: PISAAnswerInput
): PISAQuestionScore {
  const difficultyWeight =
    getPISADifficultyWeight(
      question.difficulty
    );

  const difficultyMultiplier =
    getPISADifficultyMultiplier(
      question.difficulty
    );

  const estimatedTime =
    question.estimatedTimeSeconds;

  const timeEfficiency =
    calculatePISATimeEfficiency(
      answer.responseTimeSeconds,
      estimatedTime
    );

  const basePoints = answer.isCorrect
    ? 100
    : 0;

  const earnedPoints =
    answer.isCorrect
      ? round(
          basePoints *
            difficultyMultiplier,
          1
        )
      : 0;

  const performanceContribution =
    answer.isCorrect
      ? round(
          (
            60 +
            difficultyWeight * 0.4
          ) *
            difficultyMultiplier,
          1
        )
      : 0;

  return {
    questionId: question.id,

    domain: question.domain,

    difficulty:
      question.difficulty,

    isCorrect:
      answer.isCorrect,

    basePoints,

    difficultyWeight,

    earnedPoints,

    responseTimeSeconds:
      answer.responseTimeSeconds ??
      null,

    timeEfficiency,

    performanceContribution:
      clamp(
        performanceContribution,
        0,
        100
      ),
  };
}

/* =========================================================
   7. ACCURACY
========================================================= */

export function calculatePISAAccuracy(
  answers: PISAAnswerInput[]
): number {
  const answered =
    answers.filter(Boolean);

  if (!answered.length) {
    return 0;
  }

  const correct =
    answered.filter(
      (answer) => answer.isCorrect
    ).length;

  return round(
    safePercentage(
      correct,
      answered.length
    ),
    1
  );
}

/* =========================================================
   8. WEIGHTED ACCURACY
========================================================= */

/**
 * Difficult questions contribute more than easy questions.
 */
export function calculatePISAWeightedAccuracy(
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[]
): number {
  let weightedCorrect = 0;
  let weightedTotal = 0;

  for (const answer of answers) {
    const question =
      questions.find(
        (item) =>
          item.id === answer.questionId
      );

    if (!question) {
      continue;
    }

    const multiplier =
      getPISADifficultyMultiplier(
        question.difficulty
      );

    weightedTotal += multiplier;

    if (answer.isCorrect) {
      weightedCorrect += multiplier;
    }
  }

  if (!weightedTotal) {
    return 0;
  }

  return round(
    safePercentage(
      weightedCorrect,
      weightedTotal
    ),
    1
  );
}

/* =========================================================
   9. CONSISTENCY
========================================================= */

/**
 * Measures whether the learner's performance is stable.
 *
 * High:
 *  ✓ correct
 *  ✓ correct
 *  ✓ correct
 *
 * Low:
 *  ✓ correct
 *  ✗ incorrect
 *  ✓ correct
 *  ✗ incorrect
 */
export function calculatePISAConsistency(
  answers: PISAAnswerInput[]
): number {
  if (answers.length <= 1) {
    return 70;
  }

  let transitions = 0;

  for (let i = 1; i < answers.length; i++) {
    if (
      answers[i].isCorrect !==
      answers[i - 1].isCorrect
    ) {
      transitions++;
    }
  }

  const instability =
    transitions /
    (answers.length - 1);

  return round(
    clamp(
      100 - instability * 50,
      0,
      100
    ),
    1
  );
}

/* =========================================================
   10. SPEED SCORE
========================================================= */

export function calculatePISASpeedScore(
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[]
): number {
  const efficiencies: number[] = [];

  for (const answer of answers) {
    const question =
      questions.find(
        (item) =>
          item.id === answer.questionId
      );

    if (!question) {
      continue;
    }

    efficiencies.push(
      calculatePISATimeEfficiency(
        answer.responseTimeSeconds,
        question.estimatedTimeSeconds
      )
    );
  }

  if (!efficiencies.length) {
    return 70;
  }

  const average =
    efficiencies.reduce(
      (sum, value) =>
        sum + value,
      0
    ) /
    efficiencies.length;

  return round(
    clamp(average, 0, 100),
    1
  );
}

/* =========================================================
   11. DIFFICULTY PERFORMANCE
========================================================= */

export function calculatePISADifficultyScore(
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[]
): number {
  let earned = 0;
  let possible = 0;

  for (const answer of answers) {
    const question =
      questions.find(
        (item) =>
          item.id === answer.questionId
      );

    if (!question) {
      continue;
    }

    const weight =
      getPISADifficultyWeight(
        question.difficulty
      );

    possible += 100;

    if (answer.isCorrect) {
      earned += weight;
    }
  }

  if (!possible) {
    return 0;
  }

  return round(
    clamp(
      (earned / possible) * 100,
      0,
      100
    ),
    1
  );
}

/* =========================================================
   12. ESTIMATED PROFICIENCY LEVEL
========================================================= */

/**
 * Internal platform proficiency.
 *
 * This is NOT the official OECD PISA proficiency scale.
 *
 * It gives the platform a stable 1–8 learner level.
 */
export function calculatePISAProficiencyLevel(
  score: number,
  adaptiveLevel?: number
): number {
  const normalizedScore =
    clamp(score, 0, 100);

  let level: number;

  if (normalizedScore < 20) {
    level = 1;
  } else if (normalizedScore < 35) {
    level = 2;
  } else if (normalizedScore < 50) {
    level = 3;
  } else if (normalizedScore < 62) {
    level = 4;
  } else if (normalizedScore < 72) {
    level = 5;
  } else if (normalizedScore < 82) {
    level = 6;
  } else if (normalizedScore < 92) {
    level = 7;
  } else {
    level = 8;
  }

  /**
   * Adaptive engine evidence can slightly
   * influence the estimate.
   */
  if (
    typeof adaptiveLevel === "number"
  ) {
    const safeAdaptive =
      clamp(
        Math.round(
          adaptiveLevel
        ),
        1,
        8
      );

    const blended =
      level * 0.7 +
      safeAdaptive * 0.3;

    level = clamp(
      Math.round(blended),
      1,
      8
    );
  }

  return level;
}

/* =========================================================
   13. SCORE BAND
========================================================= */

export function getPISAScoreBand(
  score: number
): PISAScoreBand {
  if (score < 40) {
    return "emerging";
  }

  if (score < 55) {
    return "developing";
  }

  if (score < 70) {
    return "proficient";
  }

  if (score < 80) {
    return "strong";
  }

  if (score < 90) {
    return "advanced";
  }

  return "mastery";
}

/* =========================================================
   14. PERFORMANCE STATUS
========================================================= */

export function getPISAPerformanceStatus(
  score: number
): PISAPerformanceStatus {
  if (score < 40) {
    return "needs-support";
  }

  if (score < 55) {
    return "developing";
  }

  if (score < 70) {
    return "on-track";
  }

  if (score < 80) {
    return "strong";
  }

  if (score < 90) {
    return "advanced";
  }

  return "mastery";
}

/* =========================================================
   15. DOMAIN SCORING
========================================================= */

export function calculatePISADomainScore(
  domain: PISADomain,
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[]
): PISADomainScore {
  const domainQuestions =
    questions.filter(
      (question) =>
        question.domain === domain
    );

  const domainAnswers =
    answers.filter(
      (answer) =>
        domainQuestions.some(
          (question) =>
            question.id ===
            answer.questionId
        )
    );

  const correct =
    domainAnswers.filter(
      (answer) =>
        answer.isCorrect
    ).length;

  const incorrect =
    domainAnswers.length -
    correct;

  const accuracy =
    calculatePISAAccuracy(
      domainAnswers
    );

  const weightedAccuracy =
    calculatePISAWeightedAccuracy(
      domainQuestions,
      domainAnswers
    );

  const difficultyScore =
    calculatePISADifficultyScore(
      domainQuestions,
      domainAnswers
    );

  const consistency =
    calculatePISAConsistency(
      domainAnswers
    );

  const speedScore =
    calculatePISASpeedScore(
      domainQuestions,
      domainAnswers
    );

  const performanceScore =
    round(
      accuracy *
        PISA_SCORING_CONFIG.weights.accuracy +

      weightedAccuracy *
        0.15 +

      difficultyScore *
        PISA_SCORING_CONFIG.weights.difficulty +

      consistency *
        PISA_SCORING_CONFIG.weights.consistency +

      speedScore *
        PISA_SCORING_CONFIG.weights.speed,
      1
    );

  const answered =
    domainAnswers.length;

  const averageDifficulty =
    answered
      ? round(
          domainAnswers.reduce(
            (sum, answer) => {
              const question =
                domainQuestions.find(
                  (item) =>
                    item.id ===
                    answer.questionId
                );

              return (
                sum +
                (question?.difficulty ?? 0)
              );
            },
            0
          ) / answered,
          2
        )
      : 0;

  const level =
    calculatePISAProficiencyLevel(
      performanceScore
    );

  return {
    domain,

    questions:
      domainQuestions.length,

    answered,

    correct,

    incorrect,

    accuracy,

    weightedAccuracy,

    averageDifficulty,

    difficultyScore,

    consistency,

    speedScore,

    performanceScore,

    level,

    band:
      getPISAScoreBand(
        performanceScore
      ),

    status:
      getPISAPerformanceStatus(
        performanceScore
      ),
  };
}

/* =========================================================
   16. SKILL SCORING
========================================================= */

export function calculatePISASkillScores(
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[]
): PISASkillScore[] {
  const skills = Array.from(
    new Set(
      questions
        .map(
          (question) =>
            question.skill
        )
        .filter(Boolean)
    )
  );

  return skills.map(
    (skill) => {
      const skillQuestions =
        questions.filter(
          (question) =>
            question.skill ===
            skill
        );

      const skillAnswers =
        answers.filter(
          (answer) =>
            skillQuestions.some(
              (question) =>
                question.id ===
                answer.questionId
            )
        );

      const correct =
        skillAnswers.filter(
          (answer) =>
            answer.isCorrect
        ).length;

      const accuracy =
        calculatePISAAccuracy(
          skillAnswers
        );

      const performanceScore =
        round(
          accuracy * 0.75 +
          calculatePISAWeightedAccuracy(
            skillQuestions,
            skillAnswers
          ) *
            0.25,
          1
        );

      return {
        skill,

        questions:
          skillQuestions.length,

        answered:
          skillAnswers.length,

        correct,

        accuracy,

        performanceScore,

        level:
          calculatePISAProficiencyLevel(
            performanceScore
          ),

        status:
          getPISAPerformanceStatus(
            performanceScore
          ),
      };
    }
  );
}

/* =========================================================
   17. PROCESS SCORING
========================================================= */

function normalizeProcess(
  question: PISAScoringQuestion
): string | null {
  if (question.process) {
    return question.process;
  }

  /**
   * Mathematics metadata.
   */
  const mathematics =
    question.mathematics as
      | {
          process?: string;
        }
      | undefined;

  if (
    mathematics?.process
  ) {
    return mathematics.process;
  }

  /**
   * Reading metadata.
   */
  const reading =
    question.reading as
      | {
          process?: string;
        }
      | undefined;

  if (reading?.process) {
    return reading.process;
  }

  return null;
}

export function calculatePISAProcessScores(
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[]
): PISAProcessScore[] {
  const processMap =
    new Map<
      string,
      PISAScoringQuestion[]
    >();

  for (const question of questions) {
    const process =
      normalizeProcess(
        question
      );

    if (!process) {
      continue;
    }

    const existing =
      processMap.get(process) ??
      [];

    existing.push(question);

    processMap.set(
      process,
      existing
    );
  }

  return Array.from(
    processMap.entries()
  ).map(
    ([process, processQuestions]) => {
      const processAnswers =
        answers.filter(
          (answer) =>
            processQuestions.some(
              (question) =>
                question.id ===
                answer.questionId
            )
        );

      const correct =
        processAnswers.filter(
          (answer) =>
            answer.isCorrect
        ).length;

      const accuracy =
        calculatePISAAccuracy(
          processAnswers
        );

      const performanceScore =
        round(
          accuracy * 0.8 +
          calculatePISAWeightedAccuracy(
            processQuestions,
            processAnswers
          ) *
            0.2,
          1
        );

      return {
        process,

        questions:
          processQuestions.length,

        answered:
          processAnswers.length,

        correct,

        accuracy,

        performanceScore,

        level:
          calculatePISAProficiencyLevel(
            performanceScore
          ),
      };
    }
  );
}

/* =========================================================
   18. STRENGTH DETECTION
========================================================= */

export function detectPISAStrengths(
  skillScores: PISASkillScore[],
  domainScores: PISADomainScore[]
): string[] {
  const strengths: string[] = [];

  for (const skill of skillScores) {
    if (
      skill.performanceScore >= 80
    ) {
      strengths.push(
        skill.skill
      );
    }
  }

  for (const domain of domainScores) {
    if (
      domain.performanceScore >= 80
    ) {
      strengths.push(
        domain.domain
      );
    }
  }

  return Array.from(
    new Set(strengths)
  ).slice(0, 5);
}

/* =========================================================
   19. WEAKNESS DETECTION
========================================================= */

export function detectPISAWeaknesses(
  skillScores: PISASkillScore[],
  domainScores: PISADomainScore[]
): string[] {
  const weaknesses: string[] = [];

  for (const skill of skillScores) {
    if (
      skill.performanceScore < 60
    ) {
      weaknesses.push(
        skill.skill
      );
    }
  }

  for (const domain of domainScores) {
    if (
      domain.performanceScore < 60
    ) {
      weaknesses.push(
        domain.domain
      );
    }
  }

  return Array.from(
    new Set(weaknesses)
  ).slice(0, 5);
}

/* =========================================================
   20. AI-STYLE RECOMMENDATION ENGINE
========================================================= */

export function generatePISARecommendations(
  strengths: string[],
  weaknesses: string[],
  domainScores: PISADomainScore[]
): string[] {
  const recommendations: string[] = [];

  for (
    const weakness of weaknesses
  ) {
    recommendations.push(
      `Improve ${weakness} through targeted practice.`
    );
  }

  const weakestDomain =
    [...domainScores]
      .sort(
        (a, b) =>
          a.performanceScore -
          b.performanceScore
      )[0];

  if (
    weakestDomain
  ) {
    recommendations.push(
      `Prioritize ${weakestDomain.domain} before moving to a higher adaptive level.`
    );
  }

  if (
    strengths.length
  ) {
    recommendations.push(
      `Use your strengths to solve more complex cross-domain problems.`
    );
  }

  if (
    recommendations.length === 0
  ) {
    recommendations.push(
      "Continue adaptive practice to build a stable performance profile."
    );
  }

  return recommendations.slice(
    0,
    5
  );
}

/* =========================================================
   21. OVERALL SCORE
========================================================= */

export function calculatePISAOverallScore(
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[],
  adaptiveLevel?: number
): PISAScore {
  const questionScores =
    answers
      .map(
        (answer) => {
          const question =
            questions.find(
              (item) =>
                item.id ===
                answer.questionId
            );

          if (!question) {
            return null;
          }

          return calculatePISAQuestionScore(
            question,
            answer
          );
        }
      )
      .filter(
        (
          item
        ): item is PISAQuestionScore =>
          item !== null
      );

  const totalQuestions =
    questions.length;

  const answeredQuestions =
    answers.length;

  const correctAnswers =
    answers.filter(
      (answer) =>
        answer.isCorrect
    ).length;

  const incorrectAnswers =
    answeredQuestions -
    correctAnswers;

  const accuracy =
    calculatePISAAccuracy(
      answers
    );

  const weightedAccuracy =
    calculatePISAWeightedAccuracy(
      questions,
      answers
    );

  const difficultyScore =
    calculatePISADifficultyScore(
      questions,
      answers
    );

  const consistencyScore =
    calculatePISAConsistency(
      answers
    );

  const speedScore =
    calculatePISASpeedScore(
      questions,
      answers
    );

  /*
   * Final internal platform score.
   *
   * 45% Accuracy
   * 25% Difficulty
   * 15% Consistency
   * 15% Speed
   *
   * Weighted accuracy is blended into accuracy so that
   * difficult questions matter more without completely
   * dominating the score.
   */

  const blendedAccuracy =
    accuracy * 0.65 +
    weightedAccuracy * 0.35;

  const overallScore =
    round(
      blendedAccuracy *
        PISA_SCORING_CONFIG.weights.accuracy +

      difficultyScore *
        PISA_SCORING_CONFIG.weights.difficulty +

      consistencyScore *
        PISA_SCORING_CONFIG.weights.consistency +

      speedScore *
        PISA_SCORING_CONFIG.weights.speed,
      1
    );

  const domainNames: PISADomain[] = [
    "mathematics",
    "reading",
    "science",
    "problem-solving",
  ];

  const domainScores =
    domainNames
      .map(
        (domain) =>
          calculatePISADomainScore(
            domain,
            questions,
            answers
          )
      )
      .filter(
        (score) =>
          score.questions > 0
      );

  const skillScores =
    calculatePISASkillScores(
      questions,
      answers
    );

  const processScores =
    calculatePISAProcessScores(
      questions,
      answers
    );

  const strengths =
    detectPISAStrengths(
      skillScores,
      domainScores
    );

  const weaknesses =
    detectPISAWeaknesses(
      skillScores,
      domainScores
    );

  const recommendations =
    generatePISARecommendations(
      strengths,
      weaknesses,
      domainScores
    );

  const estimatedProficiencyLevel =
    calculatePISAProficiencyLevel(
      overallScore,
      adaptiveLevel
    );

  return {
    overallScore,

    accuracy,

    weightedAccuracy,

    difficultyScore,

    consistencyScore,

    speedScore,

    adaptiveLevel:
      adaptiveLevel ??
      PISA_SCORING_CONFIG.defaultDifficulty,

    estimatedProficiencyLevel,

    band:
      getPISAScoreBand(
        overallScore
      ),

    status:
      getPISAPerformanceStatus(
        overallScore
      ),

    totalQuestions,

    answeredQuestions,

    correctAnswers,

    incorrectAnswers,

    questionScores,

    domainScores,

    skillScores,

    processScores,

    strengths,

    weaknesses,

    recommendations,

    generatedAt:
      new Date().toISOString(),
  };
}

/* =========================================================
   22. QUICK SCORE
========================================================= */

export function calculatePISAQuickScore(
  questions: PISAScoringQuestion[],
  answers: PISAAnswerInput[],
  adaptiveLevel?: number
): number {
  return calculatePISAOverallScore(
    questions,
    answers,
    adaptiveLevel
  ).overallScore;
}

/* =========================================================
   23. RANKING SCORE
========================================================= */

/**
 * Ranking score is deliberately separate from assessment score.
 *
 * This prevents a leaderboard from pretending to be an
 * official PISA score.
 */
export function calculatePISARankingScore(
  score: PISAScore
): number {
  const completionBonus =
    score.totalQuestions > 0
      ? Math.min(
          5,
          (
            score.answeredQuestions /
            score.totalQuestions
          ) * 5
        )
      : 0;

  const masteryBonus =
    score.estimatedProficiencyLevel >= 7
      ? 3
      : score.estimatedProficiencyLevel >= 5
        ? 1.5
        : 0;

  const rankingScore =
    score.overallScore +
    completionBonus +
    masteryBonus;

  return round(
    clamp(
      rankingScore,
      0,
      100
    ),
    1
  );
}

/* =========================================================
   24. PERCENTILE ESTIMATION
========================================================= */

/**
 * Given a list of ranking scores, estimate the learner's
 * relative percentile inside the platform.
 *
 * This is NOT a national or OECD percentile.
 */
export function calculatePlatformPercentile(
  score: number,
  populationScores: number[]
): number {
  if (
    populationScores.length === 0
  ) {
    return 50;
  }

  const below =
    populationScores.filter(
      (value) =>
        value < score
    ).length;

  const percentile =
    (
      below /
      populationScores.length
    ) *
    100;

  return round(
    clamp(
      percentile,
      0,
      99
    ),
    1
  );
}

/* =========================================================
   25. DOMAIN RANKING
========================================================= */

export function getPISADomainRanking(
  score: PISAScore
): Array<{
  domain: PISADomain;
  score: number;
  rank: number;
}> {
  return [
    ...score.domainScores,
  ]
    .sort(
      (a, b) =>
        b.performanceScore -
        a.performanceScore
    )
    .map(
      (
        domain,
        index
      ) => ({
        domain:
          domain.domain,

        score:
          domain.performanceScore,

        rank:
          index + 1,
      })
    );
}

/* =========================================================
   26. SKILL RANKING
========================================================= */

export function getPISASkillRanking(
  score: PISAScore
): Array<{
  skill: string;
  score: number;
  rank: number;
}> {
  return [
    ...score.skillScores,
  ]
    .sort(
      (a, b) =>
        b.performanceScore -
        a.performanceScore
    )
    .map(
      (
        skill,
        index
      ) => ({
        skill:
          skill.skill,

        score:
          skill.performanceScore,

        rank:
          index + 1,
      })
    );
}

/* =========================================================
   27. REPORT SUMMARY
========================================================= */

export interface PISAReportSummary {
  headline: string;

  overallScore: number;

  proficiencyLevel: number;

  band: PISAScoreBand;

  status: PISAPerformanceStatus;

  strongestArea: string | null;

  weakestArea: string | null;

  nextFocus: string | null;
}

export function createPISAReportSummary(
  score: PISAScore
): PISAReportSummary {
  const strongest =
    [...score.domainScores]
      .sort(
        (a, b) =>
          b.performanceScore -
          a.performanceScore
      )[0];

  const weakest =
    [...score.domainScores]
      .sort(
        (a, b) =>
          a.performanceScore -
          b.performanceScore
      )[0];

  let headline =
    "Adaptive assessment completed.";

  if (
    score.overallScore >= 90
  ) {
    headline =
      "Exceptional performance. The learner demonstrates mastery-level performance.";
  } else if (
    score.overallScore >= 80
  ) {
    headline =
      "Advanced performance. The learner is ready for more challenging tasks.";
  } else if (
    score.overallScore >= 70
  ) {
    headline =
      "Strong performance. The learner is progressing confidently.";
  } else if (
    score.overallScore >= 55
  ) {
    headline =
      "Developing proficiency. Targeted practice can accelerate progress.";
  } else {
    headline =
      "Foundation stage. Focused practice is recommended before increasing difficulty.";
  }

  return {
    headline,

    overallScore:
      score.overallScore,

    proficiencyLevel:
      score.estimatedProficiencyLevel,

    band:
      score.band,

    status:
      score.status,

    strongestArea:
      strongest?.domain ??
      null,

    weakestArea:
      weakest?.domain ??
      null,

    nextFocus:
      score.recommendations[0] ??
      null,
  };
}

/* =========================================================
   28. EMPTY SCORE
========================================================= */

export function createEmptyPISAScore(): PISAScore {
  return {
    overallScore: 0,

    accuracy: 0,

    weightedAccuracy: 0,

    difficultyScore: 0,

    consistencyScore: 0,

    speedScore: 0,

    adaptiveLevel:
      PISA_SCORING_CONFIG.defaultDifficulty,

    estimatedProficiencyLevel: 1,

    band: "emerging",

    status: "needs-support",

    totalQuestions: 0,

    answeredQuestions: 0,

    correctAnswers: 0,

    incorrectAnswers: 0,

    questionScores: [],

    domainScores: [],

    skillScores: [],

    processScores: [],

    strengths: [],

    weaknesses: [],

    recommendations: [
      "Complete the first adaptive assessment to build your performance profile.",
    ],

    generatedAt:
      new Date().toISOString(),
  };
}

/* =========================================================
   29. EXPORT HELPERS
========================================================= */

export const PISA_SCORING = {
  calculateQuestion:
    calculatePISAQuestionScore,

  calculateAccuracy:
    calculatePISAAccuracy,

  calculateWeightedAccuracy:
    calculatePISAWeightedAccuracy,

  calculateConsistency:
    calculatePISAConsistency,

  calculateSpeed:
    calculatePISASpeedScore,

  calculateDifficulty:
    calculatePISADifficultyScore,

  calculateDomain:
    calculatePISADomainScore,

  calculateSkills:
    calculatePISASkillScores,

  calculateProcesses:
    calculatePISAProcessScores,

  calculateOverall:
    calculatePISAOverallScore,

  calculateRanking:
    calculatePISARankingScore,

  calculatePercentile:
    calculatePlatformPercentile,

  createReport:
    createPISAReportSummary,
};

export default PISA_SCORING;
