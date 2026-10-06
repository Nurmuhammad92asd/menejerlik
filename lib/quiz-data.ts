/* =========================================================
 * MENEJERLIK BY NURMUHAMMAD
 * QUIZ DATA CORE
 *
 * FINAL UNIFIED QUIZ REGISTRY
 *
 * MODULES:
 *   M1  -> 6 topics
 *   M2  -> 5 topics
 *   M3  -> 3 topics
 *   M4  -> 4 topics / legacy adapter
 *   M5  -> 2 topics
 *   M6  -> 3 topics
 *   M7  -> 2 topics
 *   M8  -> 3 topics
 *   M9  -> 3 topics
 *   M10 -> 4 topics
 *   MATEMATIKA -> 1 topic
 *
 * IMPORTANT:
 * This file is the central registry.
 * Do not duplicate quiz registry logic elsewhere.
 * ========================================================= */


/* =========================================================
 * DATA IMPORTS
 * ========================================================= */

/* -------------------------
 * MODULE 1
 * ------------------------- */

import { M1T1_LEVELS } from "./data/m1t1";
import { M1T2_LEVELS } from "./data/m1t2";
import { M1T3_LEVELS } from "./data/m1t3";
import { M1T4_LEVELS } from "./data/m1t4";
import { M1T5_LEVELS } from "./data/m1t5";
import { M1T6_LEVELS } from "./data/m1t6";


/* -------------------------
 * MODULE 2
 * ------------------------- */

import { M2T1_LEVELS } from "./data/m2t1";
import { M2T2_LEVELS } from "./data/m2t2";
import { M2T3_LEVELS } from "./data/m2t3";
import { M2T4_LEVELS } from "./data/m2t4";
import { M2T5_LEVELS } from "./data/m2t5";


/* -------------------------
 * MODULE 3
 * ------------------------- */

import { M3T1_LEVELS } from "./data/m3t1";
import { M3T2_LEVELS } from "./data/m3t2";
import { M3T3_LEVELS } from "./data/m3t3";


/* -------------------------
 * MODULE 4
 *
 * LEGACY FORMAT
 * ------------------------- */

import { M4T1 } from "./data/m4t1";
import { M4T2 } from "./data/m4t2";

import {
  m4t3Questions,
  m4t3AnswerKey,
} from "./data/m4t3";

import { m4t4 } from "./data/m4t4";


/* -------------------------
 * MATHEMATICS
 * ------------------------- */

import { MATH_ATTESTATION_LEVELS } from "./data/math-attestation";


/* =========================================================
 * TYPES
 * ========================================================= */

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


export const REQUIRED_LEVEL_COUNTS: Record<
  LevelKey,
  number
> = {
  easy: 30,
  medium: 30,
  hard: 30,
  case: 10,
};


export const FULL_TOPIC_QUESTION_COUNT = 100;


/* =========================================================
 * QUESTION
 * ========================================================= */

export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  level: LevelKey;
  topicId: string;
}


/* =========================================================
 * TOPIC LEVELS
 * ========================================================= */

export interface TopicLevels {
  easy: Question[];
  medium: Question[];
  hard: Question[];
  case: Question[];
}


/* =========================================================
 * MATERIALS
 * ========================================================= */

export interface TopicMaterials {
  description?: string;
  objectives?: string[];
  sources?: string[];
}


/* =========================================================
 * TOPIC
 * ========================================================= */

export interface Topic {
  id: string;
  title: string;
  description: string;
  levels: TopicLevels;
  materials?: TopicMaterials;
}


/* =========================================================
 * CATEGORY / MODULE
 * ========================================================= */

export interface Category {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}


/* =========================================================
 * HEALTH TYPES
 * ========================================================= */

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


/* =========================================================
 * EMPTY LEVELS
 * ========================================================= */

export const EMPTY_LEVELS: TopicLevels = {
  easy: [],
  medium: [],
  hard: [],
  case: [],
};


/* =========================================================
 * INTERNAL HELPERS
 * ========================================================= */

type UnknownRecord = Record<string, unknown>;


function isRecord(
  value: unknown,
): value is UnknownRecord {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}


function asString(
  value: unknown,
  fallback = "",
): string {
  return typeof value === "string"
    ? value.trim()
    : fallback;
}


function asNumber(
  value: unknown,
  fallback = -1,
): number {
  return typeof value === "number" &&
    Number.isFinite(value)
    ? value
    : fallback;
}


function asStringArray(
  value: unknown,
): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((item) =>
    String(item ?? "").trim(),
  );
}


/* =========================================================
 * LEVEL NORMALIZER
 * ========================================================= */

function normalizeLevel(
  value: unknown,
): LevelKey | null {
  if (typeof value !== "string") {
    return null;
  }

  const valueNormalized =
    value.toLowerCase().trim();

  switch (valueNormalized) {
    case "easy":
    case "oson":
    case "basic":
      return "easy";

    case "medium":
    case "orta":
      return "medium";

    case "hard":
    case "qiyin":
      return "hard";

    case "case":
    case "situational":
    case "vaziyatli":
      return "case";

    default:
      return null;
  }
}


/* =========================================================
 * ANSWER NORMALIZER
 * ========================================================= */

function normalizeAnswer(
  raw: UnknownRecord,
  answerKeyValue?: unknown,
): number {

  const candidates = [
    raw.answer,
    raw.correctAnswer,
    raw.correct,
    answerKeyValue,
  ];

  for (const candidate of candidates) {

    const value = asNumber(candidate);

    if (value >= 0) {
      return value;
    }
  }

  return -1;
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


  const directOptions =
    asStringArray(rawValue.options);


  const alternativeOptions =
    asStringArray(rawValue.answers);


  const options =
    directOptions.length > 0
      ? directOptions
      : alternativeOptions;


  if (!question) {
    return null;
  }


  if (options.length < 2) {
    return null;
  }


  const answer = normalizeAnswer(
    rawValue,
    answerKey?.[index],
  );


  const detectedLevel =
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
    level: detectedLevel,
    topicId,
  };
}


/* =========================================================
 * LEGACY MODULE TYPES
 * ========================================================= */

interface LegacyModule {
  id?: unknown;
  title?: unknown;
  description?: unknown;

  questions?: unknown;
  answerKey?: unknown;

  items?: unknown;
}


/* =========================================================
 * LEGACY QUESTIONS
 * ========================================================= */

function getLegacyQuestions(
  moduleValue: unknown,
): unknown[] {

  if (!isRecord(moduleValue)) {
    return [];
  }


  if (Array.isArray(moduleValue.questions)) {
    return moduleValue.questions;
  }


  if (Array.isArray(moduleValue.items)) {
    return moduleValue.items;
  }


  return [];
}


/* =========================================================
 * LEGACY ANSWER KEY
 * ========================================================= */

function getLegacyAnswerKey(
  moduleValue: unknown,
): readonly unknown[] {

  if (!isRecord(moduleValue)) {
    return [];
  }


  if (Array.isArray(moduleValue.answerKey)) {
    return moduleValue.answerKey;
  }


  return [];
}


/* =========================================================
 * LEGACY -> STANDARD LEVELS
 *
 * SUPPORTED:
 *
 * 100 questions:
 *   30 easy
 *   30 medium
 *   30 hard
 *   10 case
 *
 * 45 questions:
 *   30 easy
 *   10 case
 *    5 hard
 *
 * Explicit level metadata has priority.
 * ========================================================= */

function legacyModuleToLevels(
  moduleValue: unknown,
  topicId: string,
): TopicLevels {

  const questions =
    getLegacyQuestions(moduleValue);

  const answerKey =
    getLegacyAnswerKey(moduleValue);


  const levels: TopicLevels = {
    easy: [],
    medium: [],
    hard: [],
    case: [],
  };


  if (questions.length === 0) {
    return levels;
  }


  /* -----------------------------------------
   * Explicit level metadata
   * ----------------------------------------- */

  const hasExplicitLevels =
    questions.some((item) => {

      if (!isRecord(item)) {
        return false;
      }

      return (
        normalizeLevel(item.level) !== null ||
        normalizeLevel(item.difficulty) !== null ||
        normalizeLevel(item.type) !== null
      );
    });


  if (hasExplicitLevels) {

    questions.forEach(
      (raw, index) => {

        const normalized =
          normalizeQuestion(
            raw,
            index,
            topicId,
            answerKey,
          );


        if (!normalized) {
          return;
        }


        levels[normalized.level].push(
          normalized,
        );
      },
    );


    return levels;
  }


  /* -----------------------------------------
   * 100 QUESTION FORMAT
   * ----------------------------------------- */

  if (questions.length >= 100) {

    questions.forEach(
      (raw, index) => {

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


        const normalized =
          normalizeQuestion(
            raw,
            index,
            topicId,
            answerKey,
            level,
          );


        if (normalized) {
          levels[level].push(
            normalized,
          );
        }
      },
    );


    return levels;
  }


  /* -----------------------------------------
   * 45 QUESTION M4 FORMAT
   *
   * 01-30 basic
   * 31-40 situational
   * 41-45 complex
   * ----------------------------------------- */

  if (questions.length === 45) {

    questions.forEach(
      (raw, index) => {

        let level: LevelKey;

        if (index < 30) {
          level = "easy";
        } else if (index < 40) {
          level = "case";
        } else {
          level = "hard";
        }


        const normalized =
          normalizeQuestion(
            raw,
            index,
            topicId,
            answerKey,
            level,
          );


        if (normalized) {
          levels[level].push(
            normalized,
          );
        }
      },
    );


    return levels;
  }


  /* -----------------------------------------
   * GENERAL FALLBACK
   * ----------------------------------------- */

  questions.forEach(
    (raw, index) => {

      const normalized =
        normalizeQuestion(
          raw,
          index,
          topicId,
          answerKey,
        );


      if (!normalized) {
        return;
      }


      levels[normalized.level].push(
        normalized,
      );
    },
  );


  return levels;
}


/* =========================================================
 * MODULE 1
 * ========================================================= */

export const MODULE_1: Category = {

  id: "m1",

  title:
    "1-MODUL. Ta’lim tashkilotini boshqarish",

  description:
    "Ta’lim tashkilotini samarali boshqarish, strategik rejalashtirish va rahbarlik faoliyati.",

  topics: [

    {
      id: "m1t1",
      title:
        "Umumiy ta’lim muassasasini boshqarish",
      description:
        "Umumiy ta’lim muassasasini boshqarishning zamonaviy tamoyillari va mexanizmlari.",
      levels: M1T1_LEVELS,
    },

    {
      id: "m1t2",
      title:
        "Strategik menejment",
      description:
        "Strategik maqsadlarni belgilash, rejalashtirish va ta’lim tashkilotini rivojlantirish.",
      levels: M1T2_LEVELS,
    },

    {
      id: "m1t3",
      title:
        "Boshqaruv psixologiyasi",
      description:
        "Rahbarlik psixologiyasi, jamoa bilan ishlash va samarali kommunikatsiya.",
      levels: M1T3_LEVELS,
    },

    {
      id: "m1t4",
      title:
        "Korrupsiyaviy xavf-xatarlarni oldini olish",
      description:
        "Korrupsiyaga qarshi kurashish, xavflarni aniqlash va oldini olish.",
      levels: M1T4_LEVELS,
    },

    {
      id: "m1t5",
      title:
        "Boshqaruv qarorlari",
      description:
        "Boshqaruv qarorlarini ishlab chiqish, qabul qilish va ijrosini nazorat qilish.",
      levels: M1T5_LEVELS,
    },

    {
      id: "m1t6",
      title:
        "Maktab imijini shakllantirish",
      description:
        "Ta’lim tashkilotining ijobiy imiji, jamoatchilik bilan aloqalar va PR.",
      levels: M1T6_LEVELS,
    },

  ],
};


/* =========================================================
 * MODULE 2
 * ========================================================= */

export const MODULE_2: Category = {

  id: "m2",

  title:
    "2-MODUL. Ta’lim sifatini boshqarish",

  description:
    "Ta’lim sifati, o‘quvchi natijalari, monitoring, baholash va bola farovonligini boshqarish.",

  topics: [

    {
      id: "m2t1",
      title:
        "Ta’lim sifatini boshqarish",
      description:
        "Ta’lim sifatini ta’minlash, boshqarish va rivojlantirish mexanizmlari.",
      levels: M2T1_LEVELS,
    },

    {
      id: "m2t2",
      title:
        "O‘quvchi natijalarini rivojlantirish",
      description:
        "O‘quvchilarning ta’lim natijalarini yaxshilash va individual rivojlanishini ta’minlash.",
      levels: M2T2_LEVELS,
    },

    {
      id: "m2t3",
      title:
        "Yoshlarni kasb-hunarga yo‘naltirish",
      description:
        "O‘quvchilarni kasb tanlashga tayyorlash va mehnat bozoriga yo‘naltirish.",
      levels: M2T3_LEVELS,
    },

    {
      id: "m2t4",
      title:
        "Ta’lim sifatini baholash va monitoring",
      description:
        "Ta’lim sifatini baholash, ma’lumotlarni tahlil qilish va monitoring.",
      levels: M2T4_LEVELS,
    },

    {
      id: "m2t5",
      title:
        "Bola xavfsizligi va farovonligini ta’minlash",
      description:
        "Bola xavfsizligi, farovonligi, himoyasi va sog‘lom ta’lim muhitini ta’minlash.",
      levels: M2T5_LEVELS,
    },

  ],
};


/* =========================================================
 * MODULE 3
 * ========================================================= */

export const MODULE_3: Category = {

  id: "m3",

  title:
    "3-MODUL. Rahbar kompetensiyasi va pedagoglar salohiyati",

  description:
    "Zamonaviy rahbar kompetensiyasi, shaxsiy samaradorlik va pedagog xodimlarni rivojlantirish.",

  topics: [

    {
      id: "m3t1",
      title:
        "Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi",
      description:
        "Zamonaviy rahbarning kompetensiyalari, boshqaruv ko‘nikmalari va liderlik xususiyatlari.",
      levels: M3T1_LEVELS,
    },

    {
      id: "m3t2",
      title:
        "Rahbarning boshqaruv va shaxsiy samaradorligini rivojlantirish",
      description:
        "Rahbarning vaqtni boshqarishi, shaxsiy samaradorligi va boshqaruv natijadorligini oshirish.",
      levels: M3T2_LEVELS,
    },

    {
      id: "m3t3",
      title:
        "Pedagog xodimlarni kasbiy rivojlantirish va ish samaradorligini oshirish",
      description:
        "Pedagoglarning kasbiy rivojlanishi, kompetensiyalarini oshirish, faoliyat samaradorligini baholash, individual rivojlanish, mentorlik, metodik hamkorlik va maktabning pedagogik salohiyatini kuchaytirish.",
      levels: M3T3_LEVELS,
    },

  ],
};


/* =========================================================
 * MODULE 4
 *
 * REAL LEGACY DATA
 * ========================================================= */


/* -------------------------
 * M4T1
 * ------------------------- */

const M4T1_LEVELS: TopicLevels =
  legacyModuleToLevels(
    M4T1,
    "m4t1",
  );


/* -------------------------
 * M4T2
 * ------------------------- */

const M4T2_LEVELS: TopicLevels =
  legacyModuleToLevels(
    M4T2,
    "m4t2",
  );


/* -------------------------
 * M4T3
 *
 * No module object.
 * Questions + answerKey only.
 * ------------------------- */

const M4T3_LEGACY: LegacyModule = {

  id: "m4t3",

  title:
    "Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarning yuritilishi",

  description:
    "Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarni yuritish.",

  questions:
    m4t3Questions,

  answerKey:
    m4t3AnswerKey,
};


const M4T3_LEVELS: TopicLevels =
  legacyModuleToLevels(
    M4T3_LEGACY,
    "m4t3",
  );


/* -------------------------
 * M4T4
 * ------------------------- */

const M4T4_LEVELS: TopicLevels =
  legacyModuleToLevels(
    m4t4,
    "m4t4",
  );


/* =========================================================
 * MODULE 4
 * ========================================================= */

export const MODULE_4: Category = {

  id: "m4",

  title:
    "4-MODUL. Inson resurslarini boshqarish",

  description:
    "Inson resurslarini boshqarish, mehnat munosabatlari, kadrlarga oid hujjatlar va xodimlar faoliyatini baholash.",

  topics: [

    {
      id: "m4t1",
      title:
        "Inson resurslarini boshqarish strategiyasi",
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

  ],
};


/* =========================================================
 * MODULES 5-10
 *
 * Hozircha data bo'lmagan topiclar.
 * Registry saqlanadi.
 * Keyinchalik shu topiclarning LEVELS'i
 * markaziy registryga ulanishi mumkin.
 * ========================================================= */

export const MODULE_5: Category = {

  id: "m5",

  title:
    "5-MODUL. Ta’lim tashkilotida hamkorlik va kommunikatsiya",

  description:
    "Ta’lim tashkilotida ichki va tashqi hamkorlik, kommunikatsiya va manfaatdor tomonlar bilan ishlash.",

  topics: [

    {
      id: "m5t1",
      title:
        "Hamkorlik va kommunikatsiya",
      description:
        "Ta’lim tashkilotida samarali hamkorlik va kommunikatsiyani tashkil etish.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m5t2",
      title:
        "Ota-onalar va jamoatchilik bilan hamkorlik",
      description:
        "Ota-onalar, mahalla va jamoatchilik bilan samarali hamkorlik.",
      levels: EMPTY_LEVELS,
    },

  ],
};


export const MODULE_6: Category = {

  id: "m6",

  title:
    "6-MODUL. Innovatsion boshqaruv",

  description:
    "Ta’lim tashkilotida innovatsiyalar, raqamli texnologiyalar va rivojlanish loyihalarini boshqarish.",

  topics: [

    {
      id: "m6t1",
      title:
        "Innovatsion boshqaruv",
      description:
        "Innovatsion g‘oyalarni boshqarish va amaliyotga joriy etish.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m6t2",
      title:
        "Raqamli transformatsiya",
      description:
        "Ta’lim tashkilotini raqamlashtirish va ma’lumotlardan samarali foydalanish.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m6t3",
      title:
        "Rivojlanish loyihalarini boshqarish",
      description:
        "Ta’lim tashkilotini rivojlantirish loyihalarini rejalashtirish va amalga oshirish.",
      levels: EMPTY_LEVELS,
    },

  ],
};


export const MODULE_7: Category = {

  id: "m7",

  title:
    "7-MODUL. Ma’lumotlarga asoslangan boshqaruv",

  description:
    "Ma’lumotlarni yig‘ish, tahlil qilish va boshqaruv qarorlarida foydalanish.",

  topics: [

    {
      id: "m7t1",
      title:
        "Ma’lumotlarga asoslangan boshqaruv",
      description:
        "Ma’lumotlar asosida muammolarni aniqlash va qaror qabul qilish.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m7t2",
      title:
        "Monitoring va tahlil",
      description:
        "Ta’lim jarayonlari monitoringi va natijalarni tahlil qilish.",
      levels: EMPTY_LEVELS,
    },

  ],
};


export const MODULE_8: Category = {

  id: "m8",

  title:
    "8-MODUL. Maktab rivojlanishini strategik boshqarish",

  description:
    "Maktab rivojlanish strategiyasi, maqsadlar va natijadorlikni boshqarish.",

  topics: [

    {
      id: "m8t1",
      title:
        "Maktab rivojlanish strategiyasi",
      description:
        "Maktabni rivojlantirish strategiyasini ishlab chiqish.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m8t2",
      title:
        "Maqsad va natijadorlik",
      description:
        "Strategik maqsadlar va natijadorlik ko‘rsatkichlarini belgilash.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m8t3",
      title:
        "Strategik monitoring",
      description:
        "Rivojlanish strategiyasi ijrosini monitoring qilish.",
      levels: EMPTY_LEVELS,
    },

  ],
};


export const MODULE_9: Category = {

  id: "m9",

  title:
    "9-MODUL. Ta’lim tashkilotida sifat va samaradorlik",

  description:
    "Ta’lim jarayonlari samaradorligini oshirish va sifatni uzluksiz takomillashtirish.",

  topics: [

    {
      id: "m9t1",
      title:
        "Sifatni boshqarish",
      description:
        "Ta’lim sifatini tizimli boshqarish.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m9t2",
      title:
        "Samaradorlikni baholash",
      description:
        "Ta’lim tashkiloti faoliyati samaradorligini baholash.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m9t3",
      title:
        "Uzluksiz takomillashtirish",
      description:
        "Ta’lim jarayonlarini doimiy takomillashtirish mexanizmlari.",
      levels: EMPTY_LEVELS,
    },

  ],
};


export const MODULE_10: Category = {

  id: "m10",

  title:
    "10-MODUL. Zamonaviy ta’lim boshqaruvi",

  description:
    "Zamonaviy ta’lim boshqaruvi, liderlik va kelajak kompetensiyalari.",

  topics: [

    {
      id: "m10t1",
      title:
        "Zamonaviy ta’lim boshqaruvi",
      description:
        "Zamonaviy ta’lim boshqaruvi tamoyillari.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m10t2",
      title:
        "Ta’lim liderligi",
      description:
        "Ta’lim liderligi va jamoani rivojlantirish.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m10t3",
      title:
        "Kelajak kompetensiyalari",
      description:
        "Rahbar va pedagoglar uchun kelajak kompetensiyalari.",
      levels: EMPTY_LEVELS,
    },

    {
      id: "m10t4",
      title:
        "Ta’lim boshqaruvida ilg‘or tajribalar",
      description:
        "Ilg‘or xalqaro tajribalarni ta’lim boshqaruviga tatbiq etish.",
      levels: EMPTY_LEVELS,
    },

  ],
};


/* =========================================================
 * MATEMATIKA
 *
 * Direktorlar uchun 10 moduldan alohida saqlanadi.
 * ========================================================= */

export const MATEMATIKA: Category = {

  id: "matematika",

  title:
    "Matematika",

  description:
    "Matematika bo‘yicha attestatsiya va test materiallari.",

  topics: [

    {
      id: "math-attestation",
      title:
        "Matematika attestatsiyasi",
      description:
        "Matematika bo‘yicha attestatsiya testlari.",
      levels: MATH_ATTESTATION_LEVELS,
    },

  ],
};


/* =========================================================
 * CENTRAL CATEGORY REGISTRY
 * ========================================================= */

export const CATEGORIES: Category[] = [

  MODULE_1,
  MODULE_2,
  MODULE_3,
  MODULE_4,
  MODULE_5,
  MODULE_6,
  MODULE_7,
  MODULE_8,
  MODULE_9,
  MODULE_10,

  MATEMATIKA,
];


/* =========================================================
 * PRESCHOOL
 * ========================================================= */

export const PRESCHOOL_CATEGORIES: Category[] = [];


/* =========================================================
 * MODULE / TOPIC IDS
 * ========================================================= */

export const MODULE_IDS = CATEGORIES
  .map((category) => category.id);


export const TOPIC_IDS = CATEGORIES
  .flatMap((category) =>
    category.topics.map(
      (topic) => topic.id,
    ),
  );


export const TOTAL_MODULES =
  CATEGORIES.length;


export const TOTAL_TOPICS =
  CATEGORIES.reduce(
    (sum, category) =>
      sum + category.topics.length,
    0,
  );


/* =========================================================
 * TOPIC ACCESS
 * ========================================================= */

export function getModuleById(
  moduleId: string,
): Category | undefined {

  return CATEGORIES.find(
    (category) =>
      category.id === moduleId,
  );
}


export function getTopicById(
  topicId: string,
): Topic | undefined {

  for (const category of CATEGORIES) {

    const topic =
      category.topics.find(
        (item) =>
          item.id === topicId,
      );

    if (topic) {
      return topic;
    }
  }

  return undefined;
}


export function getModuleTopics(
  moduleId: string,
): Topic[] {

  return (
    getModuleById(moduleId)
      ?.topics ?? []
  );
}


/* =========================================================
 * QUESTION ACCESS
 * ========================================================= */

export function getTopicQuestions(
  topicOrId: Topic | string,
): Question[] {

  const topic =
    typeof topicOrId === "string"
      ? getTopicById(topicOrId)
      : topicOrId;


  if (!topic) {
    return [];
  }


  return [
    ...topic.levels.easy,
    ...topic.levels.medium,
    ...topic.levels.hard,
    ...topic.levels.case,
  ];
}


export function getLevelQuestions(
  topicOrId: Topic | string,
  level: LevelKey,
): Question[] {

  const topic =
    typeof topicOrId === "string"
      ? getTopicById(topicOrId)
      : topicOrId;


  if (!topic) {
    return [];
  }


  return topic.levels[level] ?? [];
}


export function getModuleQuestions(
  moduleId: string,
): Question[] {

  return getModuleTopics(moduleId)
    .flatMap(
      (topic) =>
        getTopicQuestions(topic),
    );
}


export function getQuestionById(
  questionId: string,
): Question | undefined {

  for (const category of CATEGORIES) {

    for (const topic of category.topics) {

      const question =
        getTopicQuestions(topic)
          .find(
            (item) =>
              item.id === questionId,
          );

      if (question) {
        return question;
      }
    }
  }


  return undefined;
}


/* =========================================================
 * COUNTS
 * ========================================================= */

export function getTopicLevelCounts(
  topicOrId: Topic | string,
): Record<LevelKey, number> {

  const topic =
    typeof topicOrId === "string"
      ? getTopicById(topicOrId)
      : topicOrId;


  if (!topic) {
    return {
      easy: 0,
      medium: 0,
      hard: 0,
      case: 0,
    };
  }


  return {
    easy: topic.levels.easy.length,
    medium: topic.levels.medium.length,
    hard: topic.levels.hard.length,
    case: topic.levels.case.length,
  };
}


export function getTopicQuestionCount(
  topicOrId: Topic | string,
): number {

  return getTopicQuestions(
    topicOrId,
  ).length;
}


export function getModuleTopicCount(
  moduleId: string,
): number {

  return getModuleTopics(
    moduleId,
  ).length;
}


export function getModuleQuestionCount(
  moduleId: string,
): number {

  return getModuleQuestions(
    moduleId,
  ).length;
}


export function hasTopicQuestions(
  topicOrId: Topic | string,
): boolean {

  return (
    getTopicQuestionCount(
      topicOrId,
    ) > 0
  );
}


export function hasLevelQuestions(
  topicOrId: Topic | string,
  level: LevelKey,
): boolean {

  return (
    getLevelQuestions(
      topicOrId,
      level,
    ).length > 0
  );
}


/* =========================================================
 * COMPLETION
 * ========================================================= */

export function isTopicComplete(
  topicOrId: Topic | string,
): boolean {

  const topic =
    typeof topicOrId === "string"
      ? getTopicById(topicOrId)
      : topicOrId;


  if (!topic) {
    return false;
  }


  return (
    topic.levels.easy.length >= 30 &&
    topic.levels.medium.length >= 30 &&
    topic.levels.hard.length >= 30 &&
    topic.levels.case.length >= 10
  );
}


export function getTopicCompletionPercent(
  topicOrId: Topic | string,
): number {

  const total =
    getTopicQuestionCount(
      topicOrId,
    );


  return Math.min(
    100,
    Math.round(
      (total /
        FULL_TOPIC_QUESTION_COUNT) *
        100,
    ),
  );
}


/* =========================================================
 * GLOBAL QUESTION COUNTS
 * ========================================================= */

export const TOTAL_QUESTIONS =
  CATEGORIES.reduce(
    (sum, category) =>
      sum +
      category.topics.reduce(
        (topicSum, topic) =>
          topicSum +
          getTopicQuestionCount(
            topic,
          ),
        0,
      ),
    0,
  );


export const TOTAL_EASY_QUESTIONS =
  CATEGORIES.reduce(
    (sum, category) =>
      sum +
      category.topics.reduce(
        (topicSum, topic) =>
          topicSum +
          topic.levels.easy.length,
        0,
      ),
    0,
  );


export const TOTAL_MEDIUM_QUESTIONS =
  CATEGORIES.reduce(
    (sum, category) =>
      sum +
      category.topics.reduce(
        (topicSum, topic) =>
          topicSum +
          topic.levels.medium.length,
        0,
      ),
    0,
  );


export const TOTAL_HARD_QUESTIONS =
  CATEGORIES.reduce(
    (sum, category) =>
      sum +
      category.topics.reduce(
        (topicSum, topic) =>
          topicSum +
          topic.levels.hard.length,
        0,
      ),
    0,
  );


export const TOTAL_CASE_QUESTIONS =
  CATEGORIES.reduce(
    (sum, category) =>
      sum +
      category.topics.reduce(
        (topicSum, topic) =>
          topicSum +
          topic.levels.case.length,
        0,
      ),
    0,
  );


/* =========================================================
 * SHUFFLE
 * ========================================================= */

export function shuffleQuestions<
  T extends Question,
>(
  questions: readonly T[],
): T[] {

  const result = [
    ...questions,
  ];


  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
          (i + 1),
      );


    [
      result[i],
      result[j],
    ] = [
      result[j],
      result[i],
    ];
  }


  return result;
}


/* =========================================================
 * RANDOM QUESTIONS
 * ========================================================= */

export function getRandomQuestions(
  questions: readonly Question[],
  count: number,
): Question[] {

  if (count <= 0) {
    return [];
  }


  if (
    questions.length <= count
  ) {
    return shuffleQuestions(
      questions,
    );
  }


  return shuffleQuestions(
    questions,
  ).slice(0, count);
}


/* =========================================================
 * RANDOM LEVEL
 * ========================================================= */

export function getRandomLevelQuestions(
  topicOrId: Topic | string,
  level: LevelKey,
  count: number,
): Question[] {

  return getRandomQuestions(
    getLevelQuestions(
      topicOrId,
      level,
    ),
    count,
  );
}


/* =========================================================
 * RANDOM TOPIC
 * ========================================================= */

export function getRandomTopicQuestions(
  topicOrId: Topic | string,
  count: number,
): Question[] {

  return getRandomQuestions(
    getTopicQuestions(
      topicOrId,
    ),
    count,
  );
}


/* =========================================================
 * MIXED
 * ========================================================= */

export const MIXED_ID = "mixed";

export const MIXED_COUNT = 100;


export const MIXED_QUESTIONS: Question[] =
  shuffleQuestions(
    CATEGORIES
      .flatMap(
        (category) =>
          category.topics,
      )
      .flatMap(
        (topic) =>
          getTopicQuestions(topic),
      ),
  ).slice(
    0,
    MIXED_COUNT,
  );


export function getRandomMixedQuestions(
  count = 25,
): Question[] {

  return getRandomQuestions(
    MIXED_QUESTIONS,
    count,
  );
}


/* =========================================================
 * BALANCED MIXED
 *
 * Level bo'yicha imkon qadar teng taqsimlaydi.
 * ========================================================= */

export function getBalancedMixedQuestions(
  count = 25,
): Question[] {

  if (count <= 0) {
    return [];
  }


  const pools: Record<
    LevelKey,
    Question[]
  > = {

    easy: shuffleQuestions(
      CATEGORIES
        .flatMap(
          (category) =>
            category.topics,
        )
        .flatMap(
          (topic) =>
            topic.levels.easy,
        ),
    ),

    medium: shuffleQuestions(
      CATEGORIES
        .flatMap(
          (category) =>
            category.topics,
        )
        .flatMap(
          (topic) =>
            topic.levels.medium,
        ),
    ),

    hard: shuffleQuestions(
      CATEGORIES
        .flatMap(
          (category) =>
            category.topics,
        )
        .flatMap(
          (topic) =>
            topic.levels.hard,
        ),
    ),

    case: shuffleQuestions(
      CATEGORIES
        .flatMap(
          (category) =>
            category.topics,
        )
        .flatMap(
          (topic) =>
            topic.levels.case,
        ),
    ),
  };


  const result: Question[] = [];


  /*
   * 25 ta uchun taxminiy:
   *
   * easy   6
   * medium 6
   * hard   6
   * case   7
   *
   * Agar pool yetmasa boshqa leveldan to'ldiradi.
   */

  const base =
    Math.floor(
      count / LEVEL_KEYS.length,
    );


  let remainder =
    count %
    LEVEL_KEYS.length;


  for (
    const level of LEVEL_KEYS
  ) {

    let take = base;

    if (remainder > 0) {
      take += 1;
      remainder -= 1;
    }


    result.push(
      ...pools[level].slice(
        0,
        take,
      ),
    );
  }


  if (result.length < count) {

    const usedIds =
      new Set(
        result.map(
          (question) =>
            question.id,
        ),
      );


    const fallback =
      shuffleQuestions(
        MIXED_QUESTIONS,
      );


    for (
      const question of fallback
    ) {

      if (
        result.length >= count
      ) {
        break;
      }


      if (
        !usedIds.has(
          question.id,
        )
      ) {

        usedIds.add(
          question.id,
        );

        result.push(
          question,
        );
      }
    }
  }


  return shuffleQuestions(
    result,
  ).slice(0, count);
}


/* =========================================================
 * DUPLICATES
 * ========================================================= */

export function getDuplicateQuestionIds(): string[] {

  const counter =
    new Map<
      string,
      number
    >();


  for (
    const category of CATEGORIES
  ) {

    for (
      const topic of category.topics
    ) {

      for (
        const question of
        getTopicQuestions(topic)
      ) {

        counter.set(
          question.id,
          (
            counter.get(
              question.id,
            ) ?? 0
          ) + 1,
        );
      }
    }
  }


  return [
    ...counter.entries(),
  ]
    .filter(
      ([, count]) =>
        count > 1,
    )
    .map(
      ([id]) => id,
    );
}


/* =========================================================
 * ALL QUESTION IDS
 * ========================================================= */

export function getAllQuestionIds(): string[] {

  return CATEGORIES
    .flatMap(
      (category) =>
        category.topics,
    )
    .flatMap(
      (topic) =>
        getTopicQuestions(topic),
    )
    .map(
      (question) =>
        question.id,
    );
}


/* =========================================================
 * INVALID QUESTIONS
 * ========================================================= */

export function validateQuestion(
  question: Question,
): boolean {

  if (!question.id) {
    return false;
  }


  if (!question.topicId) {
    return false;
  }


  if (!question.question) {
    return false;
  }


  if (
    !Array.isArray(
      question.options,
    )
  ) {
    return false;
  }


  if (
    question.options.length < 2
  ) {
    return false;
  }


  if (
    question.answer < 0 ||
    question.answer >=
      question.options.length
  ) {
    return false;
  }


  if (!question.explanation) {
    return false;
  }


  return true;
}


export function getInvalidQuestions(
  questions: readonly Question[],
): Question[] {

  return questions.filter(
    (question) =>
      !validateQuestion(
        question,
      ),
  );
}


export function getTopicInvalidQuestions(
  topicOrId: Topic | string,
): Question[] {

  return getInvalidQuestions(
    getTopicQuestions(
      topicOrId,
    ),
  );
}


/* =========================================================
 * TOPIC HEALTH
 * ========================================================= */

export function getTopicHealth(
  topicOrId: Topic | string,
): TopicHealth {

  const topic =
    typeof topicOrId === "string"
      ? getTopicById(topicOrId)
      : topicOrId;


  if (!topic) {

    return {
      id:
        typeof topicOrId === "string"
          ? topicOrId
          : "unknown",

      title: "Unknown",

      total: 0,

      easy: 0,
      medium: 0,
      hard: 0,
      case: 0,

      invalid: 0,

      complete: false,
    };
  }


  const counts =
    getTopicLevelCounts(
      topic,
    );


  const invalid =
    getTopicInvalidQuestions(
      topic,
    ).length;


  return {

    id: topic.id,

    title: topic.title,

    total:
      getTopicQuestionCount(
        topic,
      ),

    easy:
      counts.easy,

    medium:
      counts.medium,

    hard:
      counts.hard,

    case:
      counts.case,

    invalid,

    complete:
      isTopicComplete(
        topic,
      ),
  };
}


/* =========================================================
 * MODULE HEALTH
 * ========================================================= */

export function getModuleHealth(
  moduleId: string,
): ModuleHealth {

  const module =
    getModuleById(
      moduleId,
    );


  if (!module) {

    return {
      id: moduleId,
      title: "Unknown",
      topics: 0,
      questions: 0,
      invalid: 0,
      complete: false,
    };
  }


  const questions =
    getModuleQuestions(
      moduleId,
    );


  const invalid =
    getInvalidQuestions(
      questions,
    ).length;


  return {

    id: module.id,

    title: module.title,

    topics:
      module.topics.length,

    questions:
      questions.length,

    invalid,

    complete:
      module.topics.every(
        (topic) =>
          isTopicComplete(
            topic,
          ),
      ),
  };
}


/* =========================================================
 * DATA HEALTH
 * ========================================================= */

export function getDataHealth() {

  return CATEGORIES.map(
    (category) => ({
      id: category.id,

      title:
        category.title,

      topics:
        category.topics.map(
          (topic) =>
            getTopicHealth(
              topic,
            ),
        ),
    }),
  );
}


/* =========================================================
 * QUIZ SYSTEM STATUS
 * ========================================================= */

export function getQuizSystemStatus() {

  const duplicateIds =
    getDuplicateQuestionIds();


  const invalidQuestions =
    getInvalidQuestions(
      CATEGORIES
        .flatMap(
          (category) =>
            category.topics,
        )
        .flatMap(
          (topic) =>
            getTopicQuestions(
              topic,
            ),
        ),
    );


  const modules =
    CATEGORIES.map(
      (category) =>
        getModuleHealth(
          category.id,
        ),
    );


  return {

    healthy:
      duplicateIds.length === 0 &&
      invalidQuestions.length === 0,

    modules,

    totalModules:
      TOTAL_MODULES,

    totalTopics:
      TOTAL_TOPICS,

    totalQuestions:
      TOTAL_QUESTIONS,

    easy:
      TOTAL_EASY_QUESTIONS,

    medium:
      TOTAL_MEDIUM_QUESTIONS,

    hard:
      TOTAL_HARD_QUESTIONS,

    case:
      TOTAL_CASE_QUESTIONS,

    duplicateQuestionIds:
      duplicateIds,

    invalidQuestions:
      invalidQuestions.length,
  };
}


/* =========================================================
 * MODULE 3 STATUS
 * ========================================================= */

export function getModule3Status() {

  const module =
    getModuleById(
      "m3",
    );


  if (!module) {
    return [];
  }


  return module.topics.map(
    (topic) =>
      getTopicHealth(
        topic,
      ),
  );
}


/* =========================================================
 * MODULE 4 STATUS
 *
 * M4 aynan shu yerda nazorat qilinadi.
 * ========================================================= */

export function getModule4Status() {

  const module =
    getModuleById(
      "m4",
    );


  if (!module) {
    return [];
  }


  return module.topics.map(
    (topic) => ({

      id:
        topic.id,

      title:
        topic.title,

      total:
        getTopicQuestionCount(
          topic,
        ),

      easy:
        topic.levels.easy.length,

      medium:
        topic.levels.medium.length,

      hard:
        topic.levels.hard.length,

      case:
        topic.levels.case.length,

      invalid:
        getTopicInvalidQuestions(
          topic,
        ).length,
    }),
  );
}


/* =========================================================
 * MATEMATIKA STATUS
 * ========================================================= */

export function getMatematikaStatus() {

  const module =
    getModuleById(
      "matematika",
    );


  if (!module) {
    return [];
  }


  return module.topics.map(
    (topic) =>
      getTopicHealth(
        topic,
      ),
  );
}


/* =========================================================
 * FULL DIAGNOSTICS
 * ========================================================= */

export function getQuizDataDiagnostics() {

  const duplicateIds =
    getDuplicateQuestionIds();


  const allQuestions =
    CATEGORIES
      .flatMap(
        (category) =>
          category.topics,
      )
      .flatMap(
        (topic) =>
          getTopicQuestions(
            topic,
          ),
      );


  const invalid =
    getInvalidQuestions(
      allQuestions,
    );


  return {

    timestamp:
      new Date().toISOString(),

    registry: {

      modules:
        TOTAL_MODULES,

      topics:
        TOTAL_TOPICS,

      questions:
        TOTAL_QUESTIONS,
    },


    levels: {

      easy:
        TOTAL_EASY_QUESTIONS,

      medium:
        TOTAL_MEDIUM_QUESTIONS,

      hard:
        TOTAL_HARD_QUESTIONS,

      case:
        TOTAL_CASE_QUESTIONS,
    },


    duplicates:
      duplicateIds,

    invalidCount:
      invalid.length,

    invalidQuestionIds:
      invalid.map(
        (question) =>
          question.id,
      ),


    module4:
      getModule4Status(),


    mathematics:
      getMatematikaStatus(),

    healthy:
      duplicateIds.length === 0 &&
      invalid.length === 0,
  };
}


/* =========================================================
 * M4 DATA ASSERTION
 *
 * Build/runtime uchun throw qilmaymiz.
 * Faqat status qaytaradigan architecture ishlatiladi.
 * ========================================================= */

export function assertM4Data(): boolean {

  const statuses =
    getModule4Status();


  return (
    statuses.length === 4 &&
    statuses.every(
      (topic) =>
        topic.total > 0,
      ),
  );
}


/* =========================================================
 * FINAL EXPORT
 * ========================================================= */

export default CATEGORIES;
