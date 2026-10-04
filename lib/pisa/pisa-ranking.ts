/* =========================================================
 * PISA INTERNATIONAL RANKING ENGINE
 * Menejerlik by Nurmuhammad
 *
 * Platform-level ranking system
 *
 * IMPORTANT:
 * These rankings are internal platform rankings.
 * They are NOT official OECD/PISA rankings.
 * ========================================================= */

import type {
  PISADomain,
} from "./pisa-types";

import type {
  PISAScore,
  PISADomainScore,
} from "./pisa-scoring";

/* =========================================================
   1. TYPES
========================================================= */

export type PIRankingScope =
  | "global"
  | "school"
  | "grade"
  | "class"
  | "domain";

export type PIRankingMetric =
  | "overall"
  | "mathematics"
  | "reading"
  | "science"
  | "problem-solving";

export interface PISAStudentRankingInput {
  studentId: string;

  studentName: string;

  /**
   * Optional academic information.
   */
  schoolId?: string;

  schoolName?: string;

  grade?: string;

  className?: string;

  /**
   * Assessment result.
   */
  score: PISAScore;

  /**
   * Optional ranking score.
   *
   * If omitted, overallScore is used.
   */
  rankingScore?: number;

  /**
   * Timestamp of assessment.
   */
  completedAt?: string;
}

export interface PISARankingEntry {
  rank: number;

  studentId: string;

  studentName: string;

  score: number;

  proficiencyLevel: number;

  percentile?: number;

  change?: number;

  schoolName?: string;

  grade?: string;

  className?: string;

  status: PISAScore["status"];

  badge:
    | "legend"
    | "elite"
    | "advanced"
    | "strong"
    | "rising"
    | "developing";
}

export interface PISARankingTable {
  metric: PIRankingMetric;

  scope: PIRankingScope;

  generatedAt: string;

  totalParticipants: number;

  entries: PISARankingEntry[];

  currentStudent?: PISARankingEntry;

  averageScore: number;

  highestScore: number;

  lowestScore: number;
}

export interface PISAStudentRankingProfile {
  studentId: string;

  studentName: string;

  overallRank: number;

  overallScore: number;

  percentile: number;

  domainRanks: Record<
    string,
    number
  >;

  domainScores: Record<
    string,
    number
  >;

  strongestDomain:
    | PISADomain
    | null;

  weakestDomain:
    | PISADomain
    | null;

  rankingBadge:
    | "legend"
    | "elite"
    | "advanced"
    | "strong"
    | "rising"
    | "developing";
}

/* =========================================================
   2. CONFIG
========================================================= */

export const PISA_RANKING_CONFIG = {
  topPercent: {
    legend: 1,
    elite: 5,
    advanced: 15,
    strong: 30,
    rising: 60,
  },

  minimumScoreForRanking: 0,

  maximumEntries: 100,

  metrics: [
    "overall",
    "mathematics",
    "reading",
    "science",
    "problem-solving",
  ] as const,
};

/* =========================================================
   3. UTILITIES
========================================================= */

function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(
    Math.max(value, min),
    max
  );
}

function round(
  value: number,
  decimals = 1
): number {
  const multiplier =
    Math.pow(10, decimals);

  return (
    Math.round(
      value * multiplier
    ) / multiplier
  );
}

/* =========================================================
   4. DOMAIN SCORE
========================================================= */

function getDomainScore(
  score: PISAScore,
  domain: PISADomain
): number {
  const domainScore =
    score.domainScores.find(
      (item) =>
        item.domain === domain
    );

  return (
    domainScore?.performanceScore ??
    0
  );
}

/* =========================================================
   5. METRIC SCORE
========================================================= */

export function getPISARankingMetricScore(
  score: PISAScore,
  metric: PIRankingMetric
): number {
  switch (metric) {
    case "overall":
      return score.overallScore;

    case "mathematics":
      return getDomainScore(
        score,
        "mathematics"
      );

    case "reading":
      return getDomainScore(
        score,
        "reading"
      );

    case "science":
      return getDomainScore(
        score,
        "science"
      );

    case "problem-solving":
      return getDomainScore(
        score,
        "problem-solving"
      );

    default:
      return 0;
  }
}

/* =========================================================
   6. RANKING BADGE
========================================================= */

export function getPISARankingBadge(
  percentile: number
): PISARankingEntry["badge"] {
  if (
    percentile >=
    100 -
      PISA_RANKING_CONFIG.topPercent
        .legend
  ) {
    return "legend";
  }

  if (
    percentile >=
    100 -
      PISA_RANKING_CONFIG.topPercent
        .elite
  ) {
    return "elite";
  }

  if (
    percentile >=
    100 -
      PISA_RANKING_CONFIG.topPercent
        .advanced
  ) {
    return "advanced";
  }

  if (
    percentile >=
    100 -
      PISA_RANKING_CONFIG.topPercent
        .strong
  ) {
    return "strong";
  }

  if (
    percentile >=
    100 -
      PISA_RANKING_CONFIG.topPercent
        .rising
  ) {
    return "rising";
  }

  return "developing";
}

/* =========================================================
   7. PERCENTILE
========================================================= */

export function calculatePISARankingPercentile(
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

  const equal =
    populationScores.filter(
      (value) =>
        value === score
    ).length;

  /**
   * Midrank percentile:
   * learners with exactly the same score
   * share the middle of their rank range.
   */
  const percentile =
    (
      (
        below +
        equal * 0.5
      ) /
      populationScores.length
    ) *
    100;

  return round(
    clamp(
      percentile,
      0,
      100
    ),
    1
  );
}

/* =========================================================
   8. SORT PARTICIPANTS
========================================================= */

function sortParticipants(
  participants: PISAStudentRankingInput[],
  metric: PIRankingMetric
): PISAStudentRankingInput[] {
  return [
    ...participants,
  ].sort(
    (a, b) => {
      const scoreA =
        getPISARankingMetricScore(
          a.score,
          metric
        );

      const scoreB =
        getPISARankingMetricScore(
          b.score,
          metric
        );

      /**
       * Primary:
       * higher score wins.
       */
      if (
        scoreB !== scoreA
      ) {
        return (
          scoreB - scoreA
        );
      }

      /**
       * Secondary:
       * higher proficiency wins.
       */
      if (
        b.score
          .estimatedProficiencyLevel !==
        a.score
          .estimatedProficiencyLevel
      ) {
        return (
          b.score
            .estimatedProficiencyLevel -
          a.score
            .estimatedProficiencyLevel
        );
      }

      /**
       * Tertiary:
       * higher accuracy wins.
       */
      if (
        b.score.accuracy !==
        a.score.accuracy
      ) {
        return (
          b.score.accuracy -
          a.score.accuracy
        );
      }

      /**
       * Final:
       * more answered questions wins.
       */
      return (
        b.score
          .answeredQuestions -
        a.score
          .answeredQuestions
      );
    }
  );
}

/* =========================================================
   9. BUILD RANKING
========================================================= */

export function buildPISARanking(
  participants: PISAStudentRankingInput[],
  metric: PIRankingMetric = "overall",
  scope: PIRankingScope = "global",
  currentStudentId?: string
): PISARankingTable {
  const validParticipants =
    participants.filter(
      (participant) =>
        getPISARankingMetricScore(
          participant.score,
          metric
        ) >=
        PISA_RANKING_CONFIG
          .minimumScoreForRanking
    );

  const sorted =
    sortParticipants(
      validParticipants,
      metric
    );

  const scores =
    sorted.map(
      (participant) =>
        getPISARankingMetricScore(
          participant.score,
          metric
        )
    );

  const averageScore =
    scores.length
      ? round(
          scores.reduce(
            (
              sum,
              value
            ) =>
              sum + value,
            0
          ) /
            scores.length,
          1
        )
      : 0;

  const highestScore =
    scores.length
      ? Math.max(...scores)
      : 0;

  const lowestScore =
    scores.length
      ? Math.min(...scores)
      : 0;

  const entries =
    sorted
      .slice(
        0,
        PISA_RANKING_CONFIG
          .maximumEntries
      )
      .map(
        (
          participant,
          index
        ) => {
          const score =
            getPISARankingMetricScore(
              participant.score,
              metric
            );

          const percentile =
            calculatePISARankingPercentile(
              score,
              scores
            );

          return {
            rank:
              index + 1,

            studentId:
              participant.studentId,

            studentName:
              participant.studentName,

            score:
              round(score, 1),

            proficiencyLevel:
              participant.score
                .estimatedProficiencyLevel,

            percentile,

            schoolName:
              participant.schoolName,

            grade:
              participant.grade,

            className:
              participant.className,

            status:
              participant.score.status,

            badge:
              getPISARankingBadge(
                percentile
              ),
          };
        }
      );

  const currentStudent =
    currentStudentId
      ? entries.find(
          (entry) =>
            entry.studentId ===
            currentStudentId
        )
      : undefined;

  return {
    metric,

    scope,

    generatedAt:
      new Date().toISOString(),

    totalParticipants:
      sorted.length,

    entries,

    currentStudent,

    averageScore,

    highestScore,

    lowestScore,
  };
}

/* =========================================================
   10. SCHOOL RANKING
========================================================= */

export function buildPISASchoolRanking(
  participants: PISAStudentRankingInput[],
  metric: PIRankingMetric = "overall"
): Array<{
  rank: number;
  schoolId: string;
  schoolName: string;
  students: number;
  averageScore: number;
  highestScore: number;
}> {
  const groups =
    new Map<
      string,
      PISAStudentRankingInput[]
    >();

  for (
    const participant of participants
  ) {
    const schoolId =
      participant.schoolId ??
      "unknown";

    const existing =
      groups.get(schoolId) ??
      [];

    existing.push(
      participant
    );

    groups.set(
      schoolId,
      existing
    );
  }

  const schools =
    Array.from(
      groups.entries()
    )
      .map(
        ([
          schoolId,
          students,
        ]) => {
          const scores =
            students.map(
              (student) =>
                getPISARankingMetricScore(
                  student.score,
                  metric
                )
            );

          const averageScore =
            scores.length
              ? round(
                  scores.reduce(
                    (
                      sum,
                      value
                    ) =>
                      sum + value,
                    0
                  ) /
                    scores.length,
                  1
                )
              : 0;

          return {
            rank: 0,

            schoolId,

            schoolName:
              students[0]
                ?.schoolName ??
              "Unknown School",

            students:
              students.length,

            averageScore,

            highestScore:
              scores.length
                ? Math.max(
                    ...scores
                  )
                : 0,
          };
        }
      )
      .sort(
        (a, b) =>
          b.averageScore -
          a.averageScore
      );

  return schools.map(
    (
      school,
      index
    ) => ({
      ...school,
      rank:
        index + 1,
    })
  );
}

/* =========================================================
   11. GRADE RANKING
========================================================= */

export function buildPISAGradeRanking(
  participants: PISAStudentRankingInput[],
  metric: PIRankingMetric = "overall"
): Array<{
  rank: number;
  grade: string;
  students: number;
  averageScore: number;
}> {
  const groups =
    new Map<
      string,
      PISAStudentRankingInput[]
    >();

  for (
    const participant of participants
  ) {
    if (!participant.grade) {
      continue;
    }

    const existing =
      groups.get(
        participant.grade
      ) ?? [];

    existing.push(
      participant
    );

    groups.set(
      participant.grade,
      existing
    );
  }

  return Array.from(
    groups.entries()
  )
    .map(
      ([
        grade,
        students,
      ]) => {
        const scores =
          students.map(
            (student) =>
              getPISARankingMetricScore(
                student.score,
                metric
              )
          );

        const averageScore =
          scores.length
            ? round(
                scores.reduce(
                  (
                    sum,
                    value
                  ) =>
                    sum + value,
                  0
                ) /
                  scores.length,
                1
              )
            : 0;

        return {
          rank: 0,

          grade,

          students:
            students.length,

          averageScore,
        };
      }
    )
    .sort(
      (a, b) =>
        b.averageScore -
        a.averageScore
    )
    .map(
      (
        item,
        index
      ) => ({
        ...item,
        rank:
          index + 1,
      })
    );
}

/* =========================================================
   12. CLASS RANKING
========================================================= */

export function buildPISAClassRanking(
  participants: PISAStudentRankingInput[],
  metric: PIRankingMetric = "overall"
): Array<{
  rank: number;
  schoolName: string;
  className: string;
  students: number;
  averageScore: number;
}> {
  const groups =
    new Map<
      string,
      PISAStudentRankingInput[]
    >();

  for (
    const participant of participants
  ) {
    if (
      !participant.className
    ) {
      continue;
    }

    const key =
      `${
        participant.schoolId ??
        participant.schoolName ??
        "school"
      }::${participant.className}`;

    const existing =
      groups.get(key) ??
      [];

    existing.push(
      participant
    );

    groups.set(
      key,
      existing
    );
  }

  return Array.from(
    groups.values()
  )
    .map(
      (students) => {
        const scores =
          students.map(
            (student) =>
              getPISARankingMetricScore(
                student.score,
                metric
              )
          );

        const averageScore =
          scores.length
            ? round(
                scores.reduce(
                  (
                    sum,
                    value
                  ) =>
                    sum + value,
                  0
                ) /
                  scores.length,
                1
              )
            : 0;

        return {
          rank: 0,

          schoolName:
            students[0]
              ?.schoolName ??
            "Unknown School",

          className:
            students[0]
              ?.className ??
            "Unknown Class",

          students:
            students.length,

          averageScore,
        };
      }
    )
    .sort(
      (a, b) =>
        b.averageScore -
        a.averageScore
    )
    .map(
      (
        item,
        index
      ) => ({
        ...item,
        rank:
          index + 1,
      })
    );
}

/* =========================================================
   13. DOMAIN RANKINGS
========================================================= */

export function buildPISADomainRankings(
  participants: PISAStudentRankingInput[]
): Record<
  PISADomain,
  PISARankingTable
> {
  const domains: PISADomain[] = [
    "mathematics",
    "reading",
    "science",
    "problem-solving",
  ];

  return {
    mathematics:
      buildPISARanking(
        participants,
        "mathematics",
        "domain"
      ),

    reading:
      buildPISARanking(
        participants,
        "reading",
        "domain"
      ),

    science:
      buildPISARanking(
        participants,
        "science",
        "domain"
      ),

    "problem-solving":
      buildPISARanking(
        participants,
        "problem-solving",
        "domain"
      ),
  };
}

/* =========================================================
   14. STUDENT RANKING PROFILE
========================================================= */

export function buildPISAStudentRankingProfile(
  student: PISAStudentRankingInput,
  participants: PISAStudentRankingInput[]
): PISAStudentRankingProfile {
  const overallRanking =
    buildPISARanking(
      participants,
      "overall",
      "global",
      student.studentId
    );

  const domainRankings =
    buildPISADomainRankings(
      participants
    );

  const domainRanks =
    {} as Record<
      string,
      number
    >;

  const domainScores =
    {} as Record<
      string,
      number
    >;

  const domains: PISADomain[] = [
    "mathematics",
    "reading",
    "science",
    "problem-solving",
  ];

  for (
    const domain of domains
  ) {
    const ranking =
      domainRankings[
        domain
      ];

    const entry =
      ranking.entries.find(
        (item) =>
          item.studentId ===
          student.studentId
      );

    domainRanks[domain] =
      entry?.rank ?? 0;

    domainScores[domain] =
      entry?.score ?? 0;
  }

  const sortedDomains =
    [...domains].sort(
      (a, b) =>
        (
          domainScores[b] ??
          0
        ) -
        (
          domainScores[a] ??
          0
        )
    );

  const overallEntry =
    overallRanking.entries.find(
      (entry) =>
        entry.studentId ===
        student.studentId
    );

  return {
    studentId:
      student.studentId,

    studentName:
      student.studentName,

    overallRank:
      overallEntry?.rank ?? 0,

    overallScore:
      student.score.overallScore,

    percentile:
      overallEntry?.percentile ??
      0,

    domainRanks,

    domainScores,

    strongestDomain:
      sortedDomains[0] ??
      null,

    weakestDomain:
      sortedDomains[
        sortedDomains.length - 1
      ] ??
      null,

    rankingBadge:
      overallEntry?.badge ??
      "developing",
  };
}

/* =========================================================
   15. RANKING CHANGE
========================================================= */

export function calculateRankingChange(
  previousRank: number | undefined,
  currentRank: number
): number {
  if (
    previousRank === undefined
  ) {
    return 0;
  }

  return (
    previousRank -
    currentRank
  );
}

/* =========================================================
   16. RANKING MESSAGE
========================================================= */

export function getPISARankingMessage(
  rank: number,
  totalParticipants: number
): string {
  if (
    totalParticipants <= 0
  ) {
    return "Ranking is being prepared.";
  }

  const percentile =
    (
      1 -
      (
        rank - 1
      ) /
        totalParticipants
    ) *
    100;

  if (
    percentile >= 99
  ) {
    return "Legendary performance — you are among the platform's very strongest learners.";
  }

  if (
    percentile >= 95
  ) {
    return "Elite performance — you are competing at an exceptional level.";
  }

  if (
    percentile >= 85
  ) {
    return "Advanced performance — you are ahead of most learners.";
  }

  if (
    percentile >= 70
  ) {
    return "Strong progress — your performance is moving in the right direction.";
  }

  if (
    percentile >= 40
  ) {
    return "You are developing steadily. Targeted practice can move you higher.";
  }

  return "Your learning journey is just beginning. Consistent practice is the fastest path upward.";
}

/* =========================================================
   17. DASHBOARD SNAPSHOT
========================================================= */

export interface PISARankingDashboard {
  overall: PISARankingTable;

  mathematics: PISARankingTable;

  reading: PISARankingTable;

  science: PISARankingTable;

  problemSolving: PISARankingTable;

  schools: ReturnType<
    typeof buildPISASchoolRanking
  >;

  grades: ReturnType<
    typeof buildPISAGradeRanking
  >;

  classes: ReturnType<
    typeof buildPISAClassRanking
  >;
}

export function buildPISARankingDashboard(
  participants: PISAStudentRankingInput[]
): PISARankingDashboard {
  return {
    overall:
      buildPISARanking(
        participants,
        "overall",
        "global"
      ),

    mathematics:
      buildPISARanking(
        participants,
        "mathematics",
        "domain"
      ),

    reading:
      buildPISARanking(
        participants,
        "reading",
        "domain"
      ),

    science:
      buildPISARanking(
        participants,
        "science",
        "domain"
      ),

    problemSolving:
      buildPISARanking(
        participants,
        "problem-solving",
        "domain"
      ),

    schools:
      buildPISASchoolRanking(
        participants
      ),

    grades:
      buildPISAGradeRanking(
        participants
      ),

    classes:
      buildPISAClassRanking(
        participants
      ),
  };
}

/* =========================================================
   18. EXPORT API
========================================================= */

export const PISA_RANKING = {
  getMetricScore:
    getPISARankingMetricScore,

  getBadge:
    getPISARankingBadge,

  calculatePercentile:
    calculatePISARankingPercentile,

  build:
    buildPISARanking,

  buildSchools:
    buildPISASchoolRanking,

  buildGrades:
    buildPISAGradeRanking,

  buildClasses:
    buildPISAClassRanking,

  buildDomains:
    buildPISADomainRankings,

  buildStudentProfile:
    buildPISAStudentRankingProfile,

  buildDashboard:
    buildPISARankingDashboard,

  calculateRankChange:
    calculateRankingChange,

  getMessage:
    getPISARankingMessage,
};

export default PISA_RANKING;
