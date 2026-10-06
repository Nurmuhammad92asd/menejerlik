/* =========================================================
 * MENEJERLIK BY NURMUHAMMAD
 * QUIZ DATA CORE
 *
 * M4 LEGACY ADAPTER
 * ========================================================= */

/*
 * MUHIM:
 *
 * M4 fayllarining exportlari bir xil formatda emas.
 *
 * m4t1.ts -> M4T1
 * m4t2.ts -> M4T2
 * m4t3.ts -> m4t3Questions + m4t3AnswerKey
 * m4t4.ts -> m4t4
 *
 * Shu sababli ularni to'g'ridan-to'g'ri bir xil import
 * sifatida ishlatmaymiz.
 */

import { M4T1 } from "./data/m4t1";
import { M4T2 } from "./data/m4t2";
import {
  m4t3Questions,
  m4t3AnswerKey,
} from "./data/m4t3";
import { m4t4 } from "./data/m4t4";

/* =========================================================
 * TYPES
 * ========================================================= */

type UnknownRecord = Record<string, unknown>;

export type LevelKey =
  | "easy"
  | "medium"
  | "hard"
  | "case";

export const LEVEL_KEYS: readonly LevelKey[] = [
  "easy",
  "medium",
  "hard",
  "case",
] as const;

export const REQUIRED_LEVEL_COUNTS: Record<LevelKey, number> = {
  easy: 30,
  medium: 30,
  hard: 30,
  case: 10,
};

export const FULL_TOPIC_QUESTION_COUNT = 100;

export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  level: LevelKey;
  topicId: string;
}

export interface TopicLevels {
  easy: Question[];
  medium: Question[];
  hard: Question[];
  case: Question[];
}

export interface TopicMaterials {
  description?: string;
  objectives?: string[];
  sources?: string[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  levels: TopicLevels;
  materials?: TopicMaterials;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface TopicHealth {
  id: string;
  title: string;
  total: number;
  easy: number;
  medium: number;
  hard: number;
  case: number;
  invalid: number;
  complete: boolean;
}

export interface ModuleHealth {
  id: string;
  title: string;
  topics: number;
  questions: number;
  invalid: number;
  complete: boolean;
}

export const EMPTY_LEVELS: TopicLevels = {
  easy: [],
  medium: [],
  hard: [],
  case: [],
};

/* =========================================================
 * GENERAL HELPERS
 * ========================================================= */

function isRecord(value: unknown): value is UnknownRecord {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value.trim() : fallback;
}

function asNumber(value: unknown, fallback = -1): number {
  return typeof value === "number" && Number.isFinite(value)
    ? value
    : fallback;
}

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value.map((item) => String(item ?? "").trim());
}

function normalizeAnswer(
  raw: UnknownRecord,
  answerKeyValue: unknown,
): number {
  const candidates = [
    raw.answer,
    raw.correctAnswer,
    raw.correct,
    answerKeyValue,
  ];

  for (const candidate of candidates) {
    const number = asNumber(candidate);

    if (number >= 0) {
      return number;
    }
  }

  return -1;
}

function normalizeLevel(value: unknown): LevelKey | null {
  if (typeof value !== "string") return null;

  const normalized = value.toLowerCase().trim();

  if (
    normalized === "easy" ||
    normalized === "oson" ||
    normalized === "basic"
  ) {
    return "easy";
  }

  if (
    normalized === "medium" ||
    normalized === "orta"
  ) {
    return "medium";
  }

  if (
    normalized === "hard" ||
    normalized === "qiyin"
  ) {
    return "hard";
  }

  if (
    normalized === "case" ||
    normalized === "situational" ||
    normalized === "vaziyatli"
  ) {
    return "case";
  }

  return null;
}

/* =========================================================
 * QUESTION NORMALIZER
 * ========================================================= */

function normalizeQuestion(
  rawValue: unknown,
  index: number,
  topicId: string,
  answerKey?: readonly unknown[],
  forcedLevel?: LevelKey,
): Question | null {
  if (!isRecord(rawValue)) {
    return null;
  }

  const question =
    asString(rawValue.question) ||
    asString(rawValue.text) ||
    asString(rawValue.title);

  const options =
    asStringArray(rawValue.options).length > 0
      ? asStringArray(rawValue.options)
      : asStringArray(rawValue.answers);

  if (!question || options.length === 0) {
    return null;
  }

  const answer = normalizeAnswer(
    rawValue,
    answerKey?.[index],
  );

  const level =
    forcedLevel ??
    normalizeLevel(rawValue.level) ??
    normalizeLevel(rawValue.difficulty) ??
    normalizeLevel(rawValue.type) ??
    "easy";

  const explanation =
    asString(rawValue.explanation) ||
    asString(rawValue.explain) ||
    "Javob kalitiga muvofiq to‘g‘ri javob.";

  const id =
    asString(rawValue.id) ||
    `${topicId}q${String(index + 1).padStart(2, "0")}`;

  return {
    id,
    question,
    options,
    answer,
    explanation,
    level,
    topicId,
  };
}

/* =========================================================
 * LEGACY MODULE NORMALIZER
 * ========================================================= */

interface LegacyModule {
  id?: unknown;
  title?: unknown;
  description?: unknown;
  questions?: unknown;
  answerKey?: unknown;
}

function getLegacyQuestions(
  module: unknown,
): unknown[] {
  if (!isRecord(module)) return [];

  if (Array.isArray(module.questions)) {
    return module.questions;
  }

  if (Array.isArray(module.items)) {
    return module.items;
  }

  return [];
}

function getLegacyAnswerKey(
  module: unknown,
): readonly unknown[] {
  if (!isRecord(module)) return [];

  if (Array.isArray(module.answerKey)) {
    return module.answerKey;
  }

  return [];
}

/* =========================================================
 * LEGACY -> LEVELS
 * ========================================================= */

function legacyModuleToLevels(
  moduleValue: unknown,
  topicId: string,
): TopicLevels {
  const questions = getLegacyQuestions(moduleValue);
  const answerKey = getLegacyAnswerKey(moduleValue);

  const levels: TopicLevels = {
    easy: [],
    medium: [],
    hard: [],
    case: [],
  };

  /*
   * Agar savolning o'zida level ko'rsatilgan bo'lsa,
   * avval shu ma'lumot ishlatiladi.
   */
  const explicitLevels = questions.some(
    (item) =>
      isRecord(item) &&
      (
        normalizeLevel(item.level) !== null ||
        normalizeLevel(item.difficulty) !== null ||
        normalizeLevel(item.type) !== null
      ),
  );

  if (explicitLevels) {
    questions.forEach((raw, index) => {
      const normalized = normalizeQuestion(
        raw,
        index,
        topicId,
        answerKey,
      );

      if (!normalized) return;

      levels[normalized.level].push(normalized);
    });

    return levels;
  }

  /*
   * 100 ta savolli eski format:
   *
   * 1-30   easy
   * 31-60  medium
   * 61-90  hard
   * 91-100 case
   */
  if (questions.length >= 100) {
    questions.forEach((raw, index) => {
      let level: LevelKey;

      if (index < 30) {
        level = "easy";
      } else if (index < 60) {
        level = "medium";
      } else if (index < 90) {
        level = "hard";
      } else {
        level = "case";
      }

      const normalized = normalizeQuestion(
        raw,
        index,
        topicId,
        answerKey,
        level,
      );

      if (normalized) {
        levels[level].push(normalized);
      }
    });

    return levels;
  }

  /*
   * M4 legacy format:
   *
   * 1-30   oddiy/asosiy
   * 31-40  vaziyatli
   * 41-45  murakkab vaziyatli
   *
   * Shuning uchun:
   *
   * 0-29 -> easy
   * 30-39 -> case
   * 40+ -> hard
   *
   * Medium hozircha bo'sh.
   */
  if (questions.length === 45) {
    questions.forEach((raw, index) => {
      let level: LevelKey;

      if (index < 30) {
        level = "easy";
      } else if (index < 40) {
        level = "case";
      } else {
        level = "hard";
      }

      const normalized = normalizeQuestion(
        raw,
        index,
        topicId,
        answerKey,
        level,
      );

      if (normalized) {
        levels[level].push(normalized);
      }
    });

    return levels;
  }

  /*
   * Boshqa legacy formatlar uchun xavfsiz fallback.
   */
  questions.forEach((raw, index) => {
    const normalized = normalizeQuestion(
      raw,
      index,
      topicId,
      answerKey,
    );

    if (!normalized) return;

    levels[normalized.level].push(normalized);
  });

  return levels;
}

/* =========================================================
 * M4 DATA
 * ========================================================= */

/*
 * M4T1
 */
const M4T1_LEVELS = legacyModuleToLevels(
  M4T1,
  "m4t1",
);

/*
 * M4T2
 */
const M4T2_LEVELS = legacyModuleToLevels(
  M4T2,
  "m4t2",
);

/*
 * M4T3
 *
 * Bu faylda tayyor module object export yo'q.
 * Savollar va answerKey alohida export qilingan.
 */
const M4T3_LEGACY = {
  id: "m4t3",
  title:
    "Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarning yuritilishi",
  description:
    "Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarni yuritish.",
  questions: m4t3Questions,
  answerKey: m4t3AnswerKey,
};

const M4T3_LEVELS = legacyModuleToLevels(
  M4T3_LEGACY,
  "m4t3",
);

/*
 * M4T4
 */
const M4T4_LEVELS = legacyModuleToLevels(
  m4t4,
  "m4t4",
);

/* =========================================================
 * M4 TOPICS
 * ========================================================= */

const M4_TOPICS: Topic[] = [
  {
    id: "m4t1",
    title: "Inson resurslarini boshqarish strategiyasi",
    description:
      "Inson resurslarini strategik boshqarish, xodimlar salohiyatini rivojlantirish va samarali boshqaruv.",
    levels: M4T1_LEVELS,
  },

  {
    id: "m4t2",
    title:
      "Ta’lim muassasalarida mehnat munosabatlari va mehnat qonunchiligi",
    description:
      "Ta’lim muassasalarida mehnat munosabatlari, xodimlarning huquq va majburiyatlari hamda mehnat qonunchiligi.",
    levels: M4T2_LEVELS,
  },

  {
    id: "m4t3",
    title:
      "Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarning yuritilishi",
    description:
      "Ta’lim tizimida kadrlarga oid hujjatlarni yuritish, rasmiylashtirish va nazorat qilish.",
    levels: M4T3_LEVELS,
  },

  {
    id: "m4t4",
    title:
      "Inson resurslari faoliyatini baholash",
    description:
      "Xodimlar faoliyatini baholash, monitoring, samaradorlik ko‘rsatkichlari va rivojlanish mexanizmlari.",
    levels: M4T4_LEVELS,
  },
];

/* =========================================================
 * VALIDATION
 * ========================================================= */

export function validateQuestion(
  question: Question,
): boolean {
  if (!question.id) return false;
  if (!question.topicId) return false;
  if (!question.question) return false;
  if (!Array.isArray(question.options)) return false;
  if (question.options.length < 2) return false;

  if (
    question.answer < 0 ||
    question.answer >= question.options.length
  ) {
    return false;
  }

  if (!question.explanation) return false;

  return true;
}

export function getInvalidQuestions(
  questions: readonly Question[],
): Question[] {
  return questions.filter(
    (question) => !validateQuestion(question),
  );
}

/* =========================================================
 * TOPIC HELPERS
 * ========================================================= */

export function getTopicQuestions(
  topic: Topic,
): Question[] {
  return [
    ...topic.levels.easy,
    ...topic.levels.medium,
    ...topic.levels.hard,
    ...topic.levels.case,
  ];
}

export function getLevelQuestions(
  topic: Topic,
  level: LevelKey,
): Question[] {
  return topic.levels[level] ?? [];
}

export function getTopicQuestionCount(
  topic: Topic,
): number {
  return getTopicQuestions(topic).length;
}

export function getTopicLevelCounts(
  topic: Topic,
): Record<LevelKey, number> {
  return {
    easy: topic.levels.easy.length,
    medium: topic.levels.medium.length,
    hard: topic.levels.hard.length,
    case: topic.levels.case.length,
  };
}

export function hasTopicQuestions(
  topic: Topic,
): boolean {
  return getTopicQuestionCount(topic) > 0;
}

export function hasLevelQuestions(
  topic: Topic,
  level: LevelKey,
): boolean {
  return getLevelQuestions(topic, level).length > 0;
}

export function isTopicComplete(
  topic: Topic,
): boolean {
  return (
    topic.levels.easy.length >= 30 &&
    topic.levels.medium.length >= 30 &&
    topic.levels.hard.length >= 30 &&
    topic.levels.case.length >= 10
  );
}

export function getTopicCompletionPercent(
  topic: Topic,
): number {
  const count = getTopicQuestionCount(topic);

  return Math.min(
    100,
    Math.round(
      (count / FULL_TOPIC_QUESTION_COUNT) * 100,
    ),
  );
}

/* =========================================================
 * M4 DIAGNOSTICS
 * ========================================================= */

export function getModule4Status() {
  return M4_TOPICS.map((topic) => ({
    id: topic.id,
    title: topic.title,
    total: getTopicQuestionCount(topic),
    easy: topic.levels.easy.length,
    medium: topic.levels.medium.length,
    hard: topic.levels.hard.length,
    case: topic.levels.case.length,
  }));
}

/*
 * Development vaqtida terminal/browser console orqali
 * M4 holatini ko'rish mumkin.
 */
export function getM4QuestionCount(): number {
  return M4_TOPICS.reduce(
    (sum, topic) => sum + getTopicQuestionCount(topic),
    0,
  );
}

/* =========================================================
 * IMPORTANT
 *
 * Quyidagi M4_TOPICS'ni sizning mavjud CATEGORIES
 * registry'ingizga qo'shish kerak.
 *
 * Agar eski quiz-data.ts'da CATEGORIES allaqachon mavjud
 * bo'lsa, 4-MODUL entry'sini quyidagi bilan almashtiring.
 * ========================================================= */

export const M4_CATEGORY: Category = {
  id: "module4",
  title:
    "4-MODUL. Inson resurslarini boshqarish",
  description:
    "Inson resurslarini boshqarish, mehnat munosabatlari, kadrlarga oid hujjatlar va xodimlar faoliyatini baholash.",
  topics: M4_TOPICS,
};

/* =========================================================
 * DEBUG SAFETY
 * ========================================================= */

export function assertM4Data(): void {
  const status = getModule4Status();

  for (const topic of status) {
    if (topic.total === 0) {
      throw new Error(
        `[QUIZ DATA] ${topic.id} bo'sh. M4 data importini tekshiring.`,
      );
    }
  }
}

/* =========================================================
 * DEFAULT
 * ========================================================= */

export default M4_CATEGORY;
