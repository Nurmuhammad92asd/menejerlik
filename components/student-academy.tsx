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
