"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  FOUNDATION_LESSONS,
  calculateFoundationProgress,
  calculateFoundationScore,
  calculateFoundationXP,
  getFoundationLesson,
  getNextFoundationLesson,
  isFoundationLessonUnlocked,
  isFoundationPassed,
} from "@/lib/english/foundation-data";

/* =========================================================
   TYPES
========================================================= */

type TrackId =
  | "pisa"
  | "english"
  | "math"
  | "science"
  | "logic"
  | "president"
  | "olympiad";

type EnglishLevelId =
  | "foundation"
  | "pre-a1"
  | "elementary"
  | "pre-intermediate"
  | "intermediate"
  | "upper-intermediate"
  | "advanced";

type Screen =
  | "academy"
  | "english"
  | "foundation"
  | "lesson"
  | "test"
  | "result";

type LessonTab =
  | "learn"
  | "words"
  | "grammar"
  | "speak"
  | "practice"
  | "reading"
  | "writing";

type FoundationProgress = {
  completedLessonIds: string[];
  xp: number;
  streak: number;
  lastStudyDate: string | null;
  lessonScores: Record<string, number>;
};

type QuestionType =
  | "choose"
  | "fill"
  | "build"
  | "correct"
  | "translate"
  | "match"
  | "reading"
  | "dialogue";

type TestQuestion = {
  type?: QuestionType;
  question: string;
  options?: string[];
  answer: string;
  explanation?: string;
  passage?: string;
};

type Props = {
  onBack?: () => void;
  onPisa?: () => void;
};

const STORAGE_KEY = "menejerlik-foundation-progress-v4";
const PASS_PERCENT = 70;
const TEST_SIZE = 15;

const DEFAULT_PROGRESS: FoundationProgress = {
  completedLessonIds: [],
  xp: 0,
  streak: 0,
  lastStudyDate: null,
  lessonScores: {},
};

/* =========================================================
   STORAGE AND HELPERS
========================================================= */

function loadProgress(): FoundationProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;

  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ??
      localStorage.getItem("menejerlik-foundation-progress-v3");

    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);

    return {
      completedLessonIds: Array.isArray(parsed.completedLessonIds)
        ? parsed.completedLessonIds
        : [],
      xp: Number(parsed.xp) || 0,
      streak: Number(parsed.streak) || 0,
      lastStudyDate: parsed.lastStudyDate ?? null,
      lessonScores:
        parsed.lessonScores && typeof parsed.lessonScores === "object"
          ? parsed.lessonScores
          : {},
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(progress: FoundationProgress) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage may be disabled by the browser.
  }
}

function todayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(now.getDate()).padStart(2, "0")}`;
}

function updateStreak(progress: FoundationProgress): FoundationProgress {
  const today = todayKey();
  if (progress.lastStudyDate === today) return progress;

  if (!progress.lastStudyDate) {
    return { ...progress, streak: 1, lastStudyDate: today };
  }

  const previous = new Date(`${progress.lastStudyDate}T00:00:00`);
  const current = new Date(`${today}T00:00:00`);
  const diff = Math.round(
    (current.getTime() - previous.getTime()) / (1000 * 60 * 60 * 24),
  );

  return {
    ...progress,
    streak: diff === 1 ? progress.streak + 1 : 1,
    lastStudyDate: today,
  };
}

function safePercentage(value: number) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function normalizeAnswer(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ");
}
function getQuestionType(question: TestQuestion): QuestionType {
  if (question.type) return question.type;
  return question.options?.length ? "choose" : "fill";
}

function getQuestionLabel(type: QuestionType) {
  const labels: Record<QuestionType, string> = {
    choose: "Variantni tanlang",
    fill: "Bo‘sh joyni to‘ldiring",
    build: "Gap tuzing",
    correct: "Xatoni tuzating",
    translate: "Tarjima qiling",
    match: "Mos javobni tanlang",
    reading: "Matnni tushunish",
    dialogue: "Dialogni davom ettiring",
  };
  return labels[type];
}

const icons = {
  arrow: "→",
  back: "←",
  check: "✓",
  lock: "🔒",
  star: "⭐",
  fire: "🔥",
};

const tracks: {
  id: TrackId;
  icon: string;
  title: string;
  description: string;
  meta: string;
}[] = [
  {
    id: "pisa",
    icon: "🌍",
    title: "PISA",
    description: "Hayotiy vaziyatlar, grafiklar, mantiq va savodxonlik.",
    meta: "Adaptive Assessment",
  },
  {
    id: "english",
    icon: "🇬🇧",
    title: "English Academy",
    description: "Foundationdan C2 gacha bosqichma-bosqich ingliz tili.",
    meta: "7 Level",
  },
  {
    id: "math",
    icon: "➗",
    title: "Matematika",
    description: "Mantiqiy fikrlash va matematik savodxonlik.",
    meta: "Practice",
  },
  {
    id: "science",
    icon: "🔬",
    title: "Tabiiy fanlar",
    description: "Ilmiy tushunchalar va hayotiy tajribalar.",
    meta: "Explore",
  },
  {
    id: "logic",
    icon: "🧠",
    title: "Mantiq",
    description: "Tahlil, qonuniyat va muammoli vaziyatlar.",
    meta: "Brain Training",
  },
  {
    id: "president",
    icon: "🏛️",
    title: "Prezident maktabi",
    description: "Tanqidiy fikrlash va murakkab topshiriqlar.",
    meta: "Preparation",
  },
  {
    id: "olympiad",
    icon: "🏆",
    title: "Olimpiada",
    description: "Iqtidorli o‘quvchilar uchun murakkab masalalar.",
    meta: "Challenge",
  },
];

const levels: {
  id: EnglishLevelId;
  title: string;
  subtitle: string;
  description: string;
}[] = [
  {
    id: "foundation",
    title: "Foundation",
    subtitle: "Boshlang‘ich tayyorgarlik",
    description: "Ingliz tilining eng asosiy tushunchalari.",
  },
  {
    id: "pre-a1",
    title: "Pre-A1",
    subtitle: "Starter",
    description: "Salomlashish, harflar va sodda so‘zlar.",
  },
  {
    id: "elementary",
    title: "A1 — Elementary",
    subtitle: "Beginner",
    description: "Kundalik so‘zlar va oddiy gaplar.",
  },
  {
    id: "pre-intermediate",
    title: "A2 — Pre-Intermediate",
    subtitle: "Basic",
    description: "Kundalik muloqot va sodda matnlar.",
  },
  {
    id: "intermediate",
    title: "B1 — Intermediate",
    subtitle: "Independent",
    description: "Mustaqil fikr bildirish va tushunish.",
  },
  {
    id: "upper-intermediate",
    title: "B2 — Upper-Intermediate",
    subtitle: "Confident",
    description: "Murakkabroq matnlar va erkin muloqot.",
  },
  {
    id: "advanced",
    title: "C1/C2 — Advanced",
    subtitle: "Proficient",
    description: "Yuqori darajadagi til ko‘nikmalari.",
  },
];

function getLessonQuestions(lessonId: string): TestQuestion[] {
  const lesson = getFoundationLesson(lessonId);
  if (!lesson) return [];

  const rawQuestions = (lesson as any).questions;
  if (!Array.isArray(rawQuestions)) return [];

  return rawQuestions as TestQuestion[];
}
function getQuestionType(question: TestQuestion): QuestionType {
  if (question.type) return question.type;
  return question.options?.length ? "choose" : "fill";
}

function getQuestionLabel(type: QuestionType) {
  const labels: Record<QuestionType, string> = {
    choose: "Variantni tanlang",
    fill: "Bo‘sh joyni to‘ldiring",
    build: "Gap tuzing",
    correct: "Xatoni tuzating",
    translate: "Tarjima qiling",
    match: "Mos javobni tanlang",
    reading: "Matnni tushunish",
    dialogue: "Dialogni davom ettiring",
  };
  return labels[type];
}

const icons = {
  arrow: "→",
  back: "←",
  check: "✓",
  lock: "🔒",
  star: "⭐",
  fire: "🔥",
};

const tracks: {
  id: TrackId;
  icon: string;
  title: string;
  description: string;
  meta: string;
}[] = [
  {
    id: "pisa",
    icon: "🌍",
    title: "PISA",
    description: "Hayotiy vaziyatlar, grafiklar, mantiq va savodxonlik.",
    meta: "Adaptive Assessment",
  },
  {
    id: "english",
    icon: "🇬🇧",
    title: "English Academy",
    description: "Foundationdan C2 gacha bosqichma-bosqich ingliz tili.",
    meta: "7 Level",
  },
  {
    id: "math",
    icon: "📐",
    title: "Matematika",
    description: "Hisoblash, algebra, geometriya va real masalalar.",
    meta: "Level Based",
  },
  {
    id: "science",
    icon: "🔬",
    title: "Fanlar",
    description: "Tabiiy fanlar va ilmiy fikrlash.",
    meta: "Science Lab",
  },
  {
    id: "logic",
    icon: "🧠",
    title: "Mantiq",
    description: "Analitik fikrlash, pattern va muammo yechish.",
    meta: "Logic Arena",
  },
  {
    id: "president",
    icon: "🏫",
    title: "Prezident maktabi",
    description: "Tanlov va imtihon formatidagi topshiriqlar.",
    meta: "Challenge",
  },
  {
    id: "olympiad",
    icon: "🏆",
    title: "Olimpiada",
    description: "Yuqori darajadagi masalalar va musobaqa tayyorgarligi.",
    meta: "Advanced",
  },
];

const englishLevels: {
  id: EnglishLevelId;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}[] = [
  {
    id: "foundation",
    number: "01",
    title: "Foundation",
    subtitle: "Start strong",
    description: "30 dars • Grammar • Vocabulary • Speaking",
  },
  {
    id: "pre-a1",
    number: "02",
    title: "Pre-A1",
    subtitle: "First communication",
    description: "30 dars • Everyday English",
  },
  {
    id: "elementary",
    number: "03",
    title: "A1 Elementary",
    subtitle: "Basic communication",
    description: "Grammar • Reading • Speaking",
  },
  {
    id: "pre-intermediate",
    number: "04",
    title: "A2 Pre-Intermediate",
    subtitle: "More confidence",
    description: "Real-life communication",
  },
    function finishPractice() {
    if (!currentLesson) return;

    const practice = (currentMeta.practice ?? []) as TestQuestion[];
    if (!practice.length) return;

    const correct = practice.filter((question, index) => {
      const given = normalizeAnswer(practiceAnswers[index] ?? "");
      const expected = normalizeAnswer(question.answer);
      return given !== "" && given === expected;
    }).length;

    const score = calculateFoundationScore(correct, practice.length);

    if (score >= PASS_PERCENT) {
      setProgress((old) => {
        const updated = updateStreak(old);
        return {
          ...updated,
          xp: updated.xp + Math.round(calculateFoundationXP(score) * 0.25),
        };
      });
    }
  }
