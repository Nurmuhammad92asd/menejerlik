"use client";

import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FOUNDATION_COURSE,
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

type TestQuestion = {
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
};

type Props = {
  onBack?: () => void;
};

/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY =
  "menejerlik-foundation-progress-v4";

const DEFAULT_PROGRESS: FoundationProgress = {
  completedLessonIds: [],
  xp: 0,
  streak: 0,
  lastStudyDate: null,
  lessonScores: {},
};

/* =========================================================
   HELPERS
========================================================= */

function loadProgress(): FoundationProgress {
  if (typeof window === "undefined") {
    return DEFAULT_PROGRESS;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      /*
       * Migration from previous version.
       */
      const oldRaw = localStorage.getItem(
        "menejerlik-foundation-progress-v3",
      );

      if (!oldRaw) {
        return DEFAULT_PROGRESS;
      }

      const old = JSON.parse(oldRaw);

      return {
        completedLessonIds:
          Array.isArray(old.completedLessonIds)
            ? old.completedLessonIds
            : [],
        xp: Number(old.xp) || 0,
        streak: Number(old.streak) || 0,
        lastStudyDate:
          old.lastStudyDate ?? null,
        lessonScores:
          old.lessonScores ?? {},
      };
    }

    const parsed = JSON.parse(raw);

    return {
      completedLessonIds:
        Array.isArray(parsed.completedLessonIds)
          ? parsed.completedLessonIds
          : [],
      xp: Number(parsed.xp) || 0,
      streak: Number(parsed.streak) || 0,
      lastStudyDate:
        parsed.lastStudyDate ?? null,
      lessonScores:
        parsed.lessonScores ?? {},
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(
  progress: FoundationProgress,
) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress),
    );
  } catch {
    // Ignore localStorage errors.
  }
}

function todayKey() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(
    now.getMonth() + 1,
  ).padStart(2, "0");
  const day = String(
    now.getDate(),
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function updateStreak(
  progress: FoundationProgress,
) {
  const today = todayKey();

  if (
    progress.lastStudyDate === today
  ) {
    return progress;
  }

  if (!progress.lastStudyDate) {
    return {
      ...progress,
      streak: 1,
      lastStudyDate: today,
    };
  }

  const previous = new Date(
    `${progress.lastStudyDate}T00:00:00`,
  );

  const current = new Date(
    `${today}T00:00:00`,
  );

  const diff = Math.round(
    (current.getTime() -
      previous.getTime()) /
      (1000 * 60 * 60 * 24),
  );

  return {
    ...progress,
    streak:
      diff === 1
        ? progress.streak + 1
        : 1,
    lastStudyDate: today,
  };
}

function safePercentage(
  value: number,
) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(
    0,
    Math.min(100, Math.round(value)),
  );
}

/* =========================================================
   ICONS
========================================================= */

const icons = {
  arrow: "→",
  back: "←",
  check: "✓",
  lock: "🔒",
  star: "⭐",
  fire: "🔥",
  brain: "🧠",
  book: "📚",
  speak: "🗣️",
  grammar: "🧩",
  test: "📝",
  trophy: "🏆",
  target: "🎯",
  rocket: "🚀",
  lightning: "⚡",
  chart: "📊",
  medal: "🏅",
  globe: "🌍",
  writing: "✍️",
};

/* =========================================================
   GLOBAL STYLES
========================================================= */

const styles = `
.sa-root {
  min-height: 100vh;
  background:
    radial-gradient(
      circle at 8% 0%,
      rgba(59,130,246,.18),
      transparent 28%
    ),
    radial-gradient(
      circle at 92% 8%,
      rgba(124,58,237,.18),
      transparent 30%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(14,165,233,.08),
      transparent 35%
    ),
    linear-gradient(
      180deg,
      #050b16 0%,
      #07111f 48%,
      #040a13 100%
    );
  color: #f8fafc;
  padding: 18px;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.sa-container {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}

.sa-lesson-screen {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.sa-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.sa-brand {
  font-size: 12px;
  color: #94a3b8;
  letter-spacing: .1em;
  text-transform: uppercase;
  font-weight: 800;
}

.sa-back {
  border: 1px solid rgba(255,255,255,.1);
  background: rgba(255,255,255,.055);
  color: white;
  border-radius: 14px;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 750;
  transition: .2s ease;
}

.sa-back:hover {
  background: rgba(255,255,255,.1);
  transform: translateY(-1px);
}

.sa-hero {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 30px;
  padding: 30px;
  background:
    linear-gradient(
      135deg,
      rgba(30,64,175,.9),
      rgba(79,70,229,.8)
    );
  box-shadow:
    0 25px 80px rgba(0,0,0,.28),
    inset 0 1px 0 rgba(255,255,255,.08);
  margin-bottom: 18px;
}

.sa-hero::before {
  content: "";
  position: absolute;
  width: 340px;
  height: 340px;
  right: -130px;
  top: -170px;
  border-radius: 50%;
  background: rgba(255,255,255,.07);
}

.sa-hero::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  left: -100px;
  bottom: -120px;
  border-radius: 50%;
  background: rgba(255,255,255,.045);
}

.sa-kicker {
  position: relative;
  z-index: 1;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: #bfdbfe;
}

.sa-title {
  position: relative;
  z-index: 1;
  margin: 8px 0;
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1.02;
  font-weight: 950;
  letter-spacing: -.035em;
}

.sa-subtitle {
  position: relative;
  z-index: 1;
  max-width: 700px;
  color: #dbeafe;
  line-height: 1.7;
  margin: 0;
  font-size: 14px;
}

.sa-hero-actions {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 22px;
}

.sa-grid {
  display: grid;
  gap: 14px;
}

.sa-grid-4 {
  grid-template-columns:
    repeat(4, minmax(0, 1fr));
}

.sa-grid-3 {
  grid-template-columns:
    repeat(3, minmax(0, 1fr));
}

.sa-grid-2 {
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
}

.sa-stat {
  border: 1px solid rgba(255,255,255,.085);
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.065),
      rgba(255,255,255,.025)
    );
  border-radius: 21px;
  padding: 17px;
  backdrop-filter: blur(18px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.035);
}

.sa-stat-icon {
  font-size: 22px;
}

.sa-stat-value {
  font-size: 25px;
  font-weight: 950;
  margin-top: 5px;
}

.sa-stat-label {
  color: #94a3b8;
  font-size: 11px;
  margin-top: 3px;
}

.sa-section {
  margin-top: 26px;
}

.sa-section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 10px;
  margin-bottom: 13px;
}

.sa-section-title {
  font-size: 20px;
  font-weight: 950;
}

.sa-section-caption {
  color: #64748b;
  font-size: 12px;
  margin-top: 3px;
}

.sa-card {
  border: 1px solid rgba(255,255,255,.085);
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.055),
      rgba(255,255,255,.025)
    );
  border-radius: 22px;
  padding: 18px;
  transition: .2s ease;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.025);
}

.sa-card:hover {
  transform: translateY(-2px);
  border-color: rgba(147,197,253,.25);
}

.sa-track {
  cursor: pointer;
  min-height: 175px;
}

.sa-track-icon {
  font-size: 31px;
  margin-bottom: 10px;
}

.sa-track-title {
  font-size: 17px;
  font-weight: 900;
}

.sa-track-desc {
  color: #94a3b8;
  line-height: 1.55;
  font-size: 13px;
  margin-top: 5px;
}

.sa-track-footer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 16px;
  color: #cbd5e1;
  font-size: 12px;
}

.sa-progress {
  height: 7px;
  background: rgba(255,255,255,.08);
  border-radius: 99px;
  overflow: hidden;
  margin-top: 11px;
}

.sa-progress > div {
  height: 100%;
  border-radius: inherit;
  background:
    linear-gradient(
      90deg,
      #38bdf8,
      #6366f1
    );
  transition: width .45s ease;
}

.sa-level {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.sa-level-active {
  border-color: rgba(96,165,250,.55);
  background:
    linear-gradient(
      145deg,
      rgba(30,64,175,.38),
      rgba(79,70,229,.17)
    );
}

.sa-level-lock {
  opacity: .58;
}

.sa-level-number {
  color: #60a5fa;
  font-size: 11px;
  font-weight: 950;
  letter-spacing: .09em;
}

.sa-level-name {
  font-size: 18px;
  font-weight: 950;
  margin-top: 5px;
}

.sa-level-meta {
  color: #94a3b8;
  font-size: 12px;
  margin-top: 6px;
}

.sa-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 850;
  background: rgba(255,255,255,.07);
  color: #cbd5e1;
  white-space: nowrap;
}

.sa-badge.green {
  background: rgba(34,197,94,.12);
  color: #86efac;
}

.sa-badge.blue {
  background: rgba(59,130,246,.12);
  color: #93c5fd;
}

.sa-badge.gold {
  background: rgba(234,179,8,.12);
  color: #fde68a;
}

.sa-badge.red {
  background: rgba(239,68,68,.12);
  color: #fca5a5;
}

.sa-lesson-list {
  display: grid;
  gap: 10px;
}

.sa-lesson {
  display: grid;
  grid-template-columns:
    46px 1fr auto;
  gap: 13px;
  align-items: center;
  padding: 15px;
  border: 1px solid rgba(255,255,255,.075);
  background: rgba(255,255,255,.035);
  border-radius: 19px;
  cursor: pointer;
  transition: .2s ease;
}

.sa-lesson:hover {
  transform: translateX(2px);
  border-color: rgba(96,165,250,.3);
}

.sa-lesson.locked {
  opacity: .46;
  cursor: default;
}

.sa-lesson.locked:hover {
  transform: none;
}

.sa-lesson.done {
  border-color: rgba(34,197,94,.28);
}

.sa-lesson-number {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(59,130,246,.14);
  color: #93c5fd;
  font-weight: 950;
}

.sa-lesson.done .sa-lesson-number {
  background: rgba(34,197,94,.16);
  color: #86efac;
}

.sa-lesson-title {
  font-weight: 900;
}

.sa-lesson-subtitle {
  color: #94a3b8;
  font-size: 12px;
  margin-top: 3px;
}

.sa-lesson-hero {
  border-radius: 28px;
  padding: 26px;
  background:
    linear-gradient(
      135deg,
      rgba(14,116,144,.75),
      rgba(67,56,202,.82)
    );
  border: 1px solid rgba(255,255,255,.1);
  margin-bottom: 15px;
  box-shadow:
    0 20px 60px rgba(0,0,0,.22);
}

.sa-lesson-top {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: start;
}

.sa-lesson-big-title {
  font-size: clamp(27px, 5vw, 43px);
  font-weight: 950;
  margin: 7px 0;
  letter-spacing: -.03em;
}

.sa-lesson-desc {
  color: #dbeafe;
  line-height: 1.6;
}

.sa-tabs {
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding: 4px 0 11px;
  margin-bottom: 12px;
  scrollbar-width: none;
}

.sa-tabs::-webkit-scrollbar {
  display: none;
}

.sa-tab {
  white-space: nowrap;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.045);
  color: #cbd5e1;
  border-radius: 13px;
  padding: 9px 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  transition: .2s ease;
}

.sa-tab:hover {
  background: rgba(255,255,255,.08);
}

.sa-tab.active {
  background: #2563eb;
  color: white;
  border-color: #60a5fa;
}

.sa-content-card {
  border: 1px solid rgba(255,255,255,.08);
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.05),
      rgba(255,255,255,.025)
    );
  border-radius: 23px;
  padding: 20px;
  margin-bottom: 12px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.025);
}

.sa-content-title {
  font-size: 18px;
  font-weight: 950;
  margin-bottom: 14px;
}

.sa-example {
  border-left: 3px solid #60a5fa;
  background: rgba(59,130,246,.065);
  padding: 12px 14px;
  border-radius: 0 13px 13px 0;
  margin: 8px 0;
  line-height: 1.55;
}

.sa-word-grid {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
  gap: 9px;
}

.sa-word {
  padding: 14px;
  border-radius: 15px;
  background: rgba(255,255,255,.045);
  border: 1px solid rgba(255,255,255,.07);
}

.sa-word strong {
  display: block;
  font-size: 15px;
}

.sa-word span {
  color: #94a3b8;
  font-size: 12px;
}

.sa-dialogue {
  display: grid;
  gap: 9px;
}

.sa-bubble {
  max-width: 82%;
  padding: 12px 14px;
  border-radius: 17px;
  background: rgba(255,255,255,.065);
  line-height: 1.5;
}

.sa-bubble:nth-child(even) {
  margin-left: auto;
  background: rgba(59,130,246,.16);
}

.sa-bubble-label {
  color: #60a5fa;
  font-size: 10px;
  font-weight: 900;
  margin-bottom: 3px;
  text-transform: uppercase;
}

.sa-action {
  width: 100%;
  border: 0;
  border-radius: 17px;
  padding: 15px 18px;
  background:
    linear-gradient(
      135deg,
      #2563eb,
      #4f46e5
    );
  color: white;
  font-weight: 900;
  cursor: pointer;
  font-size: 14px;
  transition: .2s ease;
  box-shadow:
    0 10px 30px rgba(37,99,235,.15);
}

.sa-action:hover:not(:disabled) {
  transform: translateY(-1px);
  filter: brightness(1.08);
}

.sa-action:disabled {
  cursor: not-allowed;
}

.sa-action.secondary {
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
  box-shadow: none;
}

.sa-action.success {
  background:
    linear-gradient(
      135deg,
      #059669,
      #16a34a
    );
}

.sa-test-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(5,11,22,.82);
  padding: 8px 0;
}

.sa-test-question {
  font-size: 21px;
  font-weight: 900;
  line-height: 1.48;
  margin-bottom: 19px;
}

.sa-options {
  display: grid;
  gap: 9px;
}

.sa-option {
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: left;
  border: 1px solid rgba(255,255,255,.09);
  background: rgba(255,255,255,.045);
  color: #e2e8f0;
  border-radius: 16px;
  padding: 14px;
  cursor: pointer;
  font-weight: 650;
  line-height: 1.45;
  transition: .18s ease;
}

.sa-option:hover {
  border-color: rgba(96,165,250,.4);
  background: rgba(59,130,246,.08);
}

.sa-option.selected {
  border-color: #60a5fa;
  background: rgba(37,99,235,.18);
}

.sa-option-letter {
  flex: 0 0 auto;
  display: inline-grid;
  place-items: center;
  width: 29px;
  height: 29px;
  border-radius: 9px;
  background: rgba(255,255,255,.07);
  margin-right: 10px;
  font-size: 12px;
  font-weight: 900;
}

.sa-test-nav {
  display: flex;
  gap: 9px;
  margin-top: 12px;
}

.sa-test-nav > button {
  flex: 1;
}

.sa-question-dots {
  display: flex;
  gap: 5px;
  overflow-x: auto;
  padding: 5px 0;
  margin-top: 10px;
}

.sa-question-dot {
  flex: 0 0 auto;
  width: 24px;
  height: 6px;
  border-radius: 99px;
  background: rgba(255,255,255,.09);
}

.sa-question-dot.active {
  background: #60a5fa;
}

.sa-question-dot.done {
  background: #22c55e;
}

.sa-result {
  text-align: center;
  padding: 38px 20px;
}

.sa-result-icon {
  font-size: 65px;
}

.sa-result-score {
  font-size: 56px;
  font-weight: 950;
  margin: 8px 0;
  letter-spacing: -.04em;
}

.sa-xp {
  display: inline-flex;
  padding: 8px 13px;
  border-radius: 999px;
  background: rgba(234,179,8,.12);
  color: #fde68a;
  font-weight: 900;
}

.sa-result-grid {
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0,1fr));
  gap: 9px;
  margin: 22px 0;
}

.sa-result-stat {
  padding: 13px;
  border-radius: 15px;
  background: rgba(255,255,255,.045);
  border: 1px solid rgba(255,255,255,.07);
}

.sa-result-stat strong {
  display: block;
  font-size: 21px;
}

.sa-result-stat span {
  color: #94a3b8;
  font-size: 11px;
}

.sa-feature-grid {
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0,1fr));
  gap: 10px;
}

.sa-feature {
  padding: 15px;
  border-radius: 18px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.07);
}

.sa-feature-icon {
  font-size: 23px;
}

.sa-feature-title {
  margin-top: 8px;
  font-weight: 900;
}

.sa-feature-text {
  margin-top: 4px;
  color: #94a3b8;
  font-size: 12px;
  line-height: 1.5;
}

.sa-callout {
  border: 1px solid rgba(96,165,250,.18);
  background:
    linear-gradient(
      135deg,
      rgba(37,99,235,.09),
      rgba(124,58,237,.08)
    );
  border-radius: 20px;
  padding: 16px;
}

.sa-empty {
  padding: 30px 15px;
  text-align: center;
  color: #94a3b8;
}

.sa-writing {
  width: 100%;
  min-height: 120px;
  resize: vertical;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.1);
  background: rgba(0,0,0,.18);
  color: white;
  padding: 13px;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
}

.sa-writing:focus {
  border-color: rgba(96,165,250,.5);
}

.sa-practice-answer {
  margin-top: 10px;
  color: #86efac;
  line-height: 1.5;
}

.sa-small {
  color: #94a3b8;
  font-size: 12px;
  line-height: 1.55;
}

.sa-divider {
  height: 1px;
  background: rgba(255,255,255,.07);
  margin: 16px 0;
}

@media (max-width: 820px) {
  .sa-grid-4 {
    grid-template-columns:
      repeat(2, minmax(0,1fr));
  }

  .sa-grid-3 {
    grid-template-columns: 1fr;
  }

  .sa-feature-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .sa-root {
    padding: 11px;
  }

  .sa-hero {
    padding: 22px;
    border-radius: 24px;
  }

  .sa-grid-2 {
    grid-template-columns: 1fr;
  }

  .sa-word-grid {
    grid-template-columns: 1fr;
  }

  .sa-lesson {
    grid-template-columns:
      43px 1fr;
  }

  .sa-lesson > .sa-badge {
    grid-column: 2;
    justify-self: start;
  }

  .sa-result-grid {
    grid-template-columns:
      1fr;
  }

  .sa-lesson-big-title {
    font-size: 31px;
  }

  .sa-test-question {
    font-size: 18px;
  }
}
`;

/* =========================================================
   TRACK DATA
========================================================= */

const tracks = [
  {
    id: "pisa" as TrackId,
    icon: "🌍",
    title: "PISA",
    description:
      "Hayotiy vaziyatlar, grafiklar, mantiq va savodxonlik.",
    progress: 0,
    meta: "Adaptive Assessment",
  },
  {
    id: "english" as TrackId,
    icon: "🇬🇧",
    title: "English Academy",
    description:
      "Foundationdan C2 gacha bosqichma-bosqich ingliz tili.",
    progress: 0,
    meta: "7 Level",
  },
  {
    id: "math" as TrackId,
    icon: "📐",
    title: "Matematika",
    description:
      "Hisoblash, algebra, geometriya va real masalalar.",
    progress: 0,
    meta: "Level Based",
  },
  {
    id: "science" as TrackId,
    icon: "🔬",
    title: "Fanlar",
    description:
      "Tabiiy fanlar va ilmiy fikrlash.",
    progress: 0,
    meta: "Science Lab",
  },
  {
    id: "logic" as TrackId,
    icon: "🧠",
    title: "Mantiq",
    description:
      "Analitik fikrlash, pattern va muammo yechish.",
    progress: 0,
    meta: "Logic Arena",
  },
  {
    id: "president" as TrackId,
    icon: "🏫",
    title: "Prezident maktabi",
    description:
      "Tanlov va imtihon formatidagi topshiriqlar.",
    progress: 0,
    meta: "Challenge",
  },
  {
    id: "olympiad" as TrackId,
    icon: "🏆",
    title: "Olimpiada",
    description:
      "Yuqori darajadagi masalalar va musobaqa tayyorgarligi.",
    progress: 0,
    meta: "Advanced",
  },
];

/* =========================================================
   ENGLISH LEVELS
========================================================= */

const englishLevels = [
  {
    id: "foundation" as EnglishLevelId,
    number: "01",
    title: "Foundation",
    subtitle: "Start strong",
    description:
      "30 dars • Grammar • Vocabulary • Speaking",
    active: true,
  },
  {
    id: "pre-a1" as EnglishLevelId,
    number: "02",
    title: "Pre-A1",
    subtitle: "First communication",
    description:
      "30 dars • Everyday English",
    active: false,
  },
  {
    id: "elementary" as EnglishLevelId,
    number: "03",
    title: "A1 Elementary",
    subtitle: "Basic communication",
    description:
      "Grammar • Reading • Speaking",
    active: false,
  },
  {
    id: "pre-intermediate" as EnglishLevelId,
    number: "04",
    title: "A2 Pre-Intermediate",
    subtitle: "More confidence",
    description:
      "Real-life communication",
    active: false,
  },
  {
    id: "intermediate" as EnglishLevelId,
    number: "05",
    title: "B1 Intermediate",
    subtitle: "Independent English",
    description:
      "Fluency foundation",
    active: false,
  },
  {
    id: "upper-intermediate" as EnglishLevelId,
    number: "06",
    title: "B2 Upper-Intermediate",
    subtitle: "Advanced communication",
    description:
      "Complex English",
    active: false,
  },
  {
    id: "advanced" as EnglishLevelId,
    number: "07",
    title: "C1–C2",
    subtitle: "Mastery",
    description:
      "Academic & professional English",
    active: false,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function StudentAcademy({
  onBack,
}: Props) {
  const [screen, setScreen] =
    useState<Screen>("academy");

  const [track, setTrack] =
    useState<TrackId>("english");

  const [progress, setProgress] =
    useState<FoundationProgress>(
      DEFAULT_PROGRESS,
    );

  const [
    selectedLessonId,
    setSelectedLessonId,
  ] = useState<string>(
    "foundation-01",
  );

  const [
    testAnswers,
    setTestAnswers,
  ] = useState<Record<number, string>>(
    {},
  );

  const [testIndex, setTestIndex] =
    useState(0);

  const [testScore, setTestScore] =
    useState<number | null>(null);

  const [testCorrect, setTestCorrect] =
    useState(0);

  const [testStartedAt, setTestStartedAt] =
    useState<number | null>(null);

  const [
    practiceAnswers,
    setPracticeAnswers,
  ] = useState<Record<number, string>>(
    {},
  );

  /* =======================================================
     LOAD / SAVE
  ======================================================= */

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  /* =======================================================
     DERIVED DATA
  ======================================================= */

  const foundationProgress = useMemo(
    () =>
      safePercentage(
        calculateFoundationProgress(
          progress.completedLessonIds,
        ),
      ),
    [progress.completedLessonIds],
  );

  const currentLesson =
    getFoundationLesson(
      selectedLessonId,
    );

  const nextLesson = currentLesson
    ? getNextFoundationLesson(
        currentLesson.id,
      )
    : undefined;

  const currentLessonQuestions =
    ((currentLesson as any)?.meta
      ?.test ?? []) as TestQuestion[];

  const courseTotal =
    FOUNDATION_LESSONS.length;

  const completedCount =
    progress.completedLessonIds.length;

  const foundationComplete =
    completedCount >= courseTotal;

  const averageScore = useMemo(() => {
    const values = Object.values(
      progress.lessonScores,
    );

    if (!values.length) return 0;

    return safePercentage(
      values.reduce(
        (sum, value) =>
          sum + Number(value || 0),
        0,
      ) / values.length,
    );
  }, [progress.lessonScores]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const openTrack = (
    id: TrackId,
  ) => {
    setTrack(id);

    if (id === "english") {
      setScreen("english");
      return;
    }

    /*
     * Other academies are intentionally
     * kept inside the Student Academy
     * architecture and can be connected
     * to their dedicated components later.
     */
    setScreen("academy");
  };

  const openFoundation = () => {
    const firstIncomplete =
      FOUNDATION_LESSONS.find(
        (lesson) =>
          !progress.completedLessonIds.includes(
            lesson.id,
          ) &&
          isFoundationLessonUnlocked(
            lesson.number,
            progress.completedLessonIds,
          ),
      ) ??
      FOUNDATION_LESSONS[0];

    if (!firstIncomplete) return;

    setSelectedLessonId(
      firstIncomplete.id,
    );

    setScreen("foundation");
  };

  const openLesson = (
    lessonId: string,
  ) => {
    const selected =
      getFoundationLesson(lessonId);

    if (!selected) return;

    const unlocked =
      isFoundationLessonUnlocked(
        selected.number,
        progress.completedLessonIds,
      );

    if (!unlocked) return;

    setSelectedLessonId(
      lessonId,
    );

    setPracticeAnswers({});
    setTestAnswers({});
    setTestIndex(0);
    setTestScore(null);

    setScreen("lesson");
  };

  /* =======================================================
     TEST
  ======================================================= */

  const beginTest = () => {
    if (!currentLesson) return;

    const questions =
      ((currentLesson as any).meta
        ?.test ?? []) as TestQuestion[];

    if (!questions.length) {
      return;
    }

    setTestAnswers({});
    setTestIndex(0);
    setTestScore(null);
    setTestCorrect(0);
    setTestStartedAt(Date.now());

    setScreen("test");
  };

  const submitTest = () => {
    if (!currentLesson) return;

    const questions =
      ((currentLesson as any).meta
        ?.test ?? []) as TestQuestion[];

    if (!questions.length) return;

    let correct = 0;

    questions.forEach(
      (
        question,
        index,
      ) => {
        if (
          testAnswers[index] ===
          question.answer
        ) {
          correct += 1;
        }
      },
    );

    const score =
      calculateFoundationScore(
        correct,
        questions.length,
      );

    const passed =
      isFoundationPassed(
        correct,
        questions.length,
      );

    setTestCorrect(correct);
    setTestScore(score);

    let updated =
      updateStreak(progress);

    const previousBest =
      updated.lessonScores[
        currentLesson.id
      ] ?? 0;

    const bestScore = Math.max(
      score,
      previousBest,
    );

    if (passed) {
      const alreadyCompleted =
        updated.completedLessonIds.includes(
          currentLesson.id,
        );

      updated = {
        ...updated,

        completedLessonIds:
          alreadyCompleted
            ? updated.completedLessonIds
            : [
                ...updated.completedLessonIds,
                currentLesson.id,
              ],

        lessonScores: {
          ...updated.lessonScores,
          [currentLesson.id]:
            bestScore,
        },

        xp:
          updated.xp +
          (alreadyCompleted
            ? Math.round(
                calculateFoundationXP(
                  score,
                ) * 0.3,
              )
            : calculateFoundationXP(
                score,
              )),
      };
    } else {
      updated = {
        ...updated,

        lessonScores: {
          ...updated.lessonScores,
          [currentLesson.id]:
            bestScore,
        },
      };
    }

    setProgress(updated);
    setScreen("result");
  };

  const answerQuestion = (
    option: string,
  ) => {
    setTestAnswers(
      (old) => ({
        ...old,
        [testIndex]: option,
      }),
    );
  };

  const goNextQuestion = () => {
    if (
      testIndex <
      currentLessonQuestions.length - 1
    ) {
      setTestIndex(
        (value) => value + 1,
      );
    } else {
      submitTest();
    }
  };

  /* =======================================================
     ACADEMY HOME
  ======================================================= */

  if (screen === "academy") {
    return (
      <>
        <style>{styles}</style>

        <main className="sa-root">
          <div className="sa-container">

            <div className="sa-topbar">
              <div className="sa-brand">
                NATIONAL EDUCATION PLATFORM
              </div>

              {onBack && (
                <button
                  className="sa-back"
                  onClick={onBack}
                >
                  {icons.back} Bosh sahifa
                </button>
              )}
            </div>

            <section className="sa-hero">
              <div className="sa-kicker">
                STUDENT ACADEMY
              </div>

              <h1 className="sa-title">
                Bilimni kuchga aylantir.
              </h1>

              <p className="sa-subtitle">
                Mantiq, matematika, PISA,
                ingliz tili, Prezident maktabi
                va olimpiada tayyorgarligini
                yagona ta'lim ekotizimida
                bosqichma-bosqich egalla.
              </p>

              <div className="sa-hero-actions">
                <button
                  className="sa-action"
                  style={{
                    width: "auto",
                    minWidth: 210,
                  }}
                  onClick={() =>
                    openTrack("english")
                  }
                >
                  🇬🇧 English Academy →
                </button>

                <button
                  className="sa-action secondary"
                  style={{
                    width: "auto",
                  }}
                  onClick={() =>
                    openFoundation()
                  }
                >
                  📚 Continue Learning
                </button>
              </div>
            </section>

            <section className="sa-grid sa-grid-4">
              <div className="sa-stat">
                <div className="sa-stat-icon">
                  🎓
                </div>

                <div className="sa-stat-value">
                  {tracks.length}
                </div>

                <div className="sa-stat-label">
                  Akademiya yo‘nalishi
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">
                  {icons.star}
                </div>

                <div className="sa-stat-value">
                  {progress.xp}
                </div>

                <div className="sa-stat-label">
                  Total XP
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">
                  {icons.fire}
                </div>

                <div className="sa-stat-value">
                  {progress.streak}
                </div>

                <div className="sa-stat-label">
                  Kunlik streak
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">
                  📈
                </div>

                <div className="sa-stat-value">
                  {foundationProgress}%
                </div>

                <div className="sa-stat-label">
                  Foundation progress
                </div>
              </div>
            </section>

            <section className="sa-section">
              <div className="sa-section-head">
                <div>
                  <div className="sa-section-title">
                    O‘quvchi yo‘nalishlari
                  </div>

                  <div className="sa-section-caption">
                    O‘zingizga mos yo‘nalishni tanlang
                  </div>
                </div>

                <span className="sa-badge blue">
                  {completedCount}/{courseTotal}
                  {" "}Foundation
                </span>
              </div>

              <div className="sa-grid sa-grid-2">
                {tracks.map(
                  (item) => (
                    <div
                      key={item.id}
                      className="sa-card sa-track"
                      onClick={() =>
                        openTrack(item.id)
                      }
                    >
                      <div className="sa-track-icon">
                        {item.icon}
                      </div>

                      <div className="sa-track-title">
                        {item.title}
                      </div>

                      <div className="sa-track-desc">
                        {item.description}
                      </div>

                      <div className="sa-progress">
                        <div
                          style={{
                            width: `${item.progress}%`,
                          }}
                        />
                      </div>

                      <div className="sa-track-footer">
                        <span>
                          {item.meta}
                        </span>

                        <span>
                          Boshlash {icons.arrow}
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </section>

            <section className="sa-section">
              <div className="sa-section-head">
                <div>
                  <div className="sa-section-title">
                    Ta'lim tizimi
                  </div>

                  <div className="sa-section-caption">
                    Natija faqat test bilan emas,
                    ko‘nikma bilan o‘lchanadi
                  </div>
                </div>
              </div>

              <div className="sa-feature-grid">
                <Feature
                  icon="📖"
                  title="Learn"
                  text="Avval tushunish, keyin amalda qo‘llash."
                />

                <Feature
                  icon="🧠"
                  title="Practice"
                  text="Ko‘nikmani takroriy mashqlar orqali mustahkamlash."
                />

                <Feature
                  icon="🎯"
                  title="Assessment"
                  text="Test orqali real o‘zlashtirish darajasini aniqlash."
                />
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  /* =======================================================
     ENGLISH ACADEMY
  ======================================================= */

  if (screen === "english") {
    return (
      <>
        <style>{styles}</style>

        <main className="sa-root">
          <div className="sa-container">

            <div className="sa-topbar">
              <button
                className="sa-back"
                onClick={() =>
                  setScreen("academy")
                }
              >
                {icons.back} Akademiya
              </button>

              <div className="sa-brand">
                ENGLISH ACADEMY
              </div>
            </div>

            <section className="sa-hero">
              <div className="sa-kicker">
                ENGLISH LEARNING SYSTEM
              </div>

              <h1 className="sa-title">
                English.
                <br />
                Bosqichma-bosqich.
              </h1>

              <p className="sa-subtitle">
                Foundationdan C2 gacha.
                Har bir bosqich oldingisiga
                tayanadi. Darsni o‘rganing,
                mashq qiling, testdan o‘ting
                va keyingi bosqichni oching.
              </p>

              <div className="sa-hero-actions">
                <button
                  className="sa-action"
                  style={{
                    width: "auto",
                  }}
                  onClick={
                    openFoundation
                  }
                >
                  🚀 Continue Foundation →
                </button>
              </div>
            </section>

            <section className="sa-grid sa-grid-4">
              <div className="sa-stat">
                <div className="sa-stat-icon">
                  📖
                </div>

                <div className="sa-stat-value">
                  30
                </div>

                <div className="sa-stat-label">
                  Foundation lessons
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">
                  📝
                </div>

                <div className="sa-stat-value">
                  15
                </div>

                <div className="sa-stat-label">
                  Test / lesson
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">
                  🎯
                </div>

                <div className="sa-stat-value">
                  70%
                </div>

                <div className="sa-stat-label">
                  Passing score
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">
                  📊
                </div>

                <div className="sa-stat-value">
                  {averageScore}%
                </div>

                <div className="sa-stat-label">
                  Average score
                </div>
              </div>
            </section>

            <section className="sa-section">
              <div className="sa-section-head">
                <div>
                  <div className="sa-section-title">
                    English Roadmap
                  </div>

                  <div className="sa-section-caption">
                    Foundation → Pre-A1 → A1 →
                    A2 → B1 → B2 → C1/C2
                  </div>
                </div>
              </div>

              <div className="sa-grid sa-grid-2">
                {englishLevels.map(
                  (level) => (
                    <div
                      key={level.id}
                      className={[
                        "sa-card",
                        "sa-level",
                        level.id ===
                        "foundation"
                          ? "sa-level-active"
                          : "sa-level-lock",
                      ].join(" ")}
                      onClick={() => {
                        if (
                          level.id ===
                          "foundation"
                        ) {
                          openFoundation();
                        }
                      }}
                    >
                      <div className="sa-level-number">
                        LEVEL {level.number}
                      </div>

                      <div className="sa-level-name">
                        {level.title}
                      </div>

                      <div className="sa-level-meta">
                        {level.subtitle}
                      </div>

                      <div
                        style={{
                          marginTop: 13,
                          color: "#94a3b8",
                          fontSize: 12,
                          lineHeight: 1.5,
                        }}
                      >
                        {level.description}
                      </div>

                      <div
                        style={{
                          marginTop: 14,
                        }}
                      >
                        {level.id ===
                        "foundation" ? (
                          <span className="sa-badge green">
                            ✓ Ochiq
                          </span>
                        ) : (
                          <span className="sa-badge">
                            🔒 Tez orada
                          </span>
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  /* =======================================================
     FOUNDATION ROADMAP
  ======================================================= */

  if (screen === "foundation") {
    return (
      <>
        <style>{styles}</style>

        <main className="sa-root">
          <div className="sa-container">

            <div className="sa-topbar">
              <button
                className="sa-back"
                onClick={() =>
                  setScreen("english")
                }
              >
                {icons.back} English
              </button>

              <div className="sa-brand">
                FOUNDATION • LEVEL 01
              </div>
            </div>

            <section className="sa-hero">
              <div className="sa-kicker">
                ENGLISH FOUNDATION
              </div>

              <h1 className="sa-title">
                Strong English Starts Here.
              </h1>

              <p className="sa-subtitle">
                30 ta ketma-ket dars.
                Har bir darsda vocabulary,
                grammar, speaking, reading,
                writing, practice va
                yakuniy test mavjud.
              </p>

              <div
                style={{
                  marginTop: 22,
                  maxWidth: 560,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    gap: 10,
                    fontSize: 12,
                    color: "#dbeafe",
                  }}
                >
                  <span>
                    Course progress
                  </span>

                  <strong>
                    {foundationProgress}%
                  </strong>
                </div>

                <div className="sa-progress">
                  <div
                    style={{
                      width: `${foundationProgress}%`,
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 7,
                  marginTop: 15,
                }}
              >
                <span className="sa-badge">
                  📚 {completedCount}/
                  {courseTotal} lessons
                </span>

                <span className="sa-badge">
                  ⭐ {progress.xp} XP
                </span>

                <span className="sa-badge">
                  🔥 {progress.streak} streak
                </span>
              </div>
            </section>

            <section className="sa-section">
              <div className="sa-section-head">
                <div>
                  <div className="sa-section-title">
                    Your Learning Path
                  </div>

                  <div className="sa-section-caption">
                    Har bir dars oldingisidan keyin ochiladi
                  </div>
                </div>

                <span className="sa-badge blue">
                  {completedCount}/
                  {courseTotal}
                </span>
              </div>

              <div className="sa-lesson-list">
                {FOUNDATION_LESSONS.map(
                  (lessonItem) => {
                    const completed =
                      progress.completedLessonIds.includes(
                        lessonItem.id,
                      );

                    const unlocked =
                      isFoundationLessonUnlocked(
                        lessonItem.number,
                        progress.completedLessonIds,
                      );

                    const score =
                      progress.lessonScores[
                        lessonItem.id
                      ];

                    return (
                      <div
                        key={lessonItem.id}
                        className={[
                          "sa-lesson",
                          !unlocked
                            ? "locked"
                            : "",
                          completed
                            ? "done"
                            : "",
                        ].join(" ")}
                        onClick={() => {
                          if (
                            unlocked
                          ) {
                            openLesson(
                              lessonItem.id,
                            );
                          }
                        }}
                      >
                        <div className="sa-lesson-number">
                          {completed
                            ? icons.check
                            : unlocked
                              ? String(
                                  lessonItem.number,
                                ).padStart(
                                  2,
                                  "0",
                                )
                              : icons.lock}
                        </div>

                        <div>
                          <div className="sa-lesson-title">
                            {lessonItem.title}
                          </div>

                          <div className="sa-lesson-subtitle">
                            {lessonItem.subtitle}
                          </div>
                        </div>

                        <div>
                          {completed ? (
                            <span className="sa-badge green">
                              ✓ {score ?? 0}%
                            </span>
                          ) : unlocked ? (
                            <span className="sa-badge blue">
                              Start →
                            </span>
                          ) : (
                            <span className="sa-badge">
                              🔒 Locked
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </section>

            <section className="sa-section">
              <div className="sa-callout">
                <strong>
                  🎯 Learning rule
                </strong>

                <div
                  className="sa-small"
                  style={{
                    marginTop: 6,
                  }}
                >
                  Darsni o‘rganing → mashq qiling
                  → test topshiring → 70% yoki
                  undan yuqori natija oling →
                  keyingi darsni oching.
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  /* =======================================================
     LESSON
  ======================================================= */

  if (
    screen === "lesson" &&
    currentLesson
  ) {
    const meta =
      (currentLesson as any).meta ??
      {};

    return (
      <>
        <style>{styles}</style>

        <main className="sa-root">
          <div className="sa-lesson-screen">

            <div className="sa-topbar">
              <button
                className="sa-back"
                onClick={() =>
                  setScreen("foundation")
                }
              >
                {icons.back} Lessons
              </button>

              <span className="sa-badge gold">
                {icons.star} +100 XP
              </span>
            </div>

            <section className="sa-lesson-hero">
              <div className="sa-level-number">
                LESSON{" "}
                {String(
                  currentLesson.number,
                ).padStart(2, "0")}
              </div>

              <h1 className="sa-lesson-big-title">
                {currentLesson.title}
              </h1>

              <p className="sa-lesson-desc">
                {currentLesson.subtitle}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 7,
                  marginTop: 14,
                }}
              >
                <span className="sa-badge">
                  📖 Learn
                </span>

                <span className="sa-badge">
                  📚 Vocabulary
                </span>

                <span className="sa-badge">
                  🧠 Grammar
                </span>

                <span className="sa-badge">
                  🗣 Speaking
                </span>

                <span className="sa-badge">
                  📝 Assessment
                </span>
              </div>
            </section>

            <LessonContent
              lesson={currentLesson}
              meta={meta}
              practiceAnswers={
                practiceAnswers
              }
              setPracticeAnswers={
                setPracticeAnswers
              }
              onStartTest={
                beginTest
              }
            />
          </div>
        </main>
      </>
    );
  }

  /* =======================================================
     TEST
  ======================================================= */

  if (
    screen === "test" &&
    currentLesson
  ) {
    const questions =
      currentLessonQuestions;

    const question =
      questions[testIndex];

    if (!question) {
      return null;
    }

    const selected =
      testAnswers[testIndex];

    const isLast =
      testIndex ===
      questions.length - 1;

    const answeredCount =
      Object.keys(
        testAnswers,
      ).length;

    return (
      <>
        <style>{styles}</style>

        <main className="sa-root">
          <div className="sa-lesson-screen">

            <div className="sa-test-header">
              <div className="sa-topbar">
                <button
                  className="sa-back"
                  onClick={() =>
                    setScreen("lesson")
                  }
                >
                  {icons.back} Lesson
                </button>

                <span className="sa-badge blue">
                  {testIndex + 1}/
                  {questions.length}
                </span>
              </div>
            </div>

            <div className="sa-content-card">
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  gap: 10,
                  marginBottom: 10,
                  color: "#94a3b8",
                  fontSize: 12,
                }}
              >
                <span>
                  FOUNDATION ASSESSMENT
                </span>

                <span>
                  🎯 70% required
                </span>
              </div>

              <div className="sa-progress">
                <div
                  style={{
                    width: `${
                      ((testIndex + 1) /
                        questions.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <div className="sa-question-dots">
                {questions.map(
                  (_, index) => (
                    <div
                      key={index}
                      className={[
                        "sa-question-dot",
                        index ===
                        testIndex
                          ? "active"
                          : "",
                        testAnswers[
                          index
                        ]
                          ? "done"
                          : "",
                      ].join(" ")}
                    />
                  ),
                )}
              </div>

              <div
                className="sa-small"
                style={{
                  marginTop: 8,
                }}
              >
                {answeredCount}/
                {questions.length}
                {" "}savolga javob berildi
              </div>
            </div>

            <div className="sa-content-card">
              <div className="sa-test-question">
                {question.question}
              </div>

              <div className="sa-options">
                {question.options.map(
                  (
                    option,
                    index,
                  ) => (
                    <button
                      key={`${option}-${index}`}
                      className={[
                        "sa-option",
                        selected ===
                        option
                          ? "selected"
                          : "",
                      ].join(" ")}
                      onClick={() =>
                        answerQuestion(
                          option,
                        )
                      }
                    >
                      <span className="sa-option-letter">
                        {String.fromCharCode(
                          65 + index,
                        )}
                      </span>

                      <span>
                        {option}
                      </span>
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="sa-test-nav">
              <button
                className="sa-action secondary"
                disabled={
                  testIndex === 0
                }
                style={{
                  opacity:
                    testIndex === 0
                      ? 0.4
                      : 1,
                }}
                onClick={() =>
                  setTestIndex(
                    (value) =>
                      Math.max(
                        0,
                        value - 1,
                      ),
                  )
                }
              >
                ← Previous
              </button>

              <button
                className="sa-action"
                disabled={!selected}
                style={{
                  opacity: selected
                    ? 1
                    : 0.45,
                }}
                onClick={
                  goNextQuestion
                }
              >
                {isLast
                  ? "Finish Test ✓"
                  : "Next Question →"}
              </button>
            </div>

            <div
              className="sa-small"
              style={{
                textAlign: "center",
                marginTop: 13,
              }}
            >
              💡 Har bir savolga eng yaxshi
              javobni tanlang.
            </div>
          </div>
        </main>
      </>
    );
  }

  /* =======================================================
     RESULT
  ======================================================= */

  if (
    screen === "result" &&
    currentLesson &&
    testScore !== null
  ) {
    const passed =
      testScore >= 70;

    const earnedXP =
      calculateFoundationXP(
        testScore,
      );

    return (
      <>
        <style>{styles}</style>

        <main className="sa-root">
          <div className="sa-lesson-screen">

            <div className="sa-content-card sa-result">

              <div className="sa-result-icon">
                {passed
                  ? "🎉"
                  : "🔄"}
              </div>

              <div
                style={{
                  color: passed
                    ? "#86efac"
                    : "#fbbf24",
                  fontWeight: 900,
                  letterSpacing: ".06em",
                  fontSize: 12,
                }}
              >
                {passed
                  ? "LESSON PASSED"
                  : "KEEP PRACTICING"}
              </div>

              <div className="sa-result-score">
                {testScore}%
              </div>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.65,
                  maxWidth: 560,
                  margin:
                    "0 auto",
                }}
              >
                {passed
                  ? "Ajoyib! Siz ushbu darsni muvaffaqiyatli yakunladingiz va keyingi darsni ochdingiz."
                  : "Keyingi darsni ochish uchun kamida 70% natija kerak. Mashqlarni yana bir bor ko‘rib chiqing."}
              </p>

              <div
                className="sa-result-grid"
              >
                <div className="sa-result-stat">
                  <strong>
                    {testCorrect}
                  </strong>

                  <span>
                    To‘g‘ri javob
                  </span>
                </div>

                <div className="sa-result-stat">
                  <strong>
                    {currentLessonQuestions.length -
                      testCorrect}
                  </strong>

                  <span>
                    Xato javob
                  </span>
                </div>

                <div className="sa-result-stat">
                  <strong>
                    {earnedXP}
                  </strong>

                  <span>
                    XP
                  </span>
                </div>
              </div>

              <div className="sa-xp">
                ⭐ +{earnedXP} XP
              </div>

              {passed &&
              nextLesson ? (
                <div
                  style={{
                    marginTop: 24,
                  }}
                >
                  <div
                    style={{
                      color: "#86efac",
                      fontWeight: 950,
                      marginBottom: 10,
                    }}
                  >
                    🔓 NEXT LESSON UNLOCKED
                  </div>

                  <div
                    className="sa-card"
                    style={{
                      textAlign:
                        "left",
                      marginBottom: 12,
                    }}
                  >
                    <strong>
                      {nextLesson.number}.
                      {" "}
                      {nextLesson.title}
                    </strong>

                    <div
                      style={{
                        color:
                          "#94a3b8",
                        fontSize: 12,
                        marginTop: 5,
                      }}
                    >
                      {
                        nextLesson.subtitle
                      }
                    </div>
                  </div>

                  <button
                    className="sa-action success"
                    onClick={() => {
                      setSelectedLessonId(
                        nextLesson.id,
                      );

                      setTestAnswers(
                        {},
                      );

                      setTestIndex(
                        0,
                      );

                      setTestScore(
                        null,
                      );

                      setScreen(
                        "lesson",
                      );
                    }}
                  >
                    Continue Learning →
                  </button>
                </div>
              ) : passed &&
                foundationComplete ? (
                <button
                  className="sa-action success"
                  style={{
                    marginTop: 20,
                  }}
                  onClick={() =>
                    setScreen(
                      "foundation",
                    )
                  }
                >
                  🏆 Foundation Complete
                </button>
              ) : (
                <button
                  className="sa-action"
                  style={{
                    marginTop: 20,
                  }}
                  onClick={() => {
                    setTestAnswers(
                      {},
                    );

                    setTestIndex(
                      0,
                    );

                    setTestScore(
                      null,
                    );

                    setTestCorrect(
                      0,
                    );

                    setTestStartedAt(
                      Date.now(),
                    );

                    setScreen(
                      "test",
                    );
                  }}
                >
                  🔄 Try Again
                </button>
              )}

              <button
                className="sa-action secondary"
                style={{
                  marginTop: 9,
                }}
                onClick={() =>
                  setScreen(
                    "foundation",
                  )
                }
              >
                ← Back to Lessons
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return null;
}

/* =========================================================
   LESSON CONTENT
========================================================= */

function LessonContent({
  lesson,
  meta,
  practiceAnswers,
  setPracticeAnswers,
  onStartTest,
}: {
  lesson: any;
  meta: any;
  practiceAnswers: Record<
    number,
    string
  >;
  setPracticeAnswers: React.Dispatch<
    React.SetStateAction<
      Record<number, string>
    >
  >;
  onStartTest: () => void;
}) {
  const [tab, setTab] =
    useState<LessonTab>("learn");

  const vocabulary =
    lesson.vocabulary ?? [];

  const grammar =
    lesson.grammar ?? [];

  const dialogue =
    meta.dialogue ?? [];

  const practice =
    meta.practice ?? [];

  const reading =
    lesson.reading ?? {};

  const writing =
    lesson.writing ?? {};

  return (
    <>
      <div className="sa-tabs">
        <Tab
          active={tab === "learn"}
          onClick={() =>
            setTab("learn")
          }
          label="📖 Learn"
        />

        <Tab
          active={tab === "words"}
          onClick={() =>
            setTab("words")
          }
          label="📚 Vocabulary"
        />

        <Tab
          active={tab === "grammar"}
          onClick={() =>
            setTab("grammar")
          }
          label="🧠 Grammar"
        />

        <Tab
          active={tab === "speak"}
          onClick={() =>
            setTab("speak")
          }
          label="🗣 Speak"
        />

        <Tab
          active={tab === "practice"}
          onClick={() =>
            setTab("practice")
          }
          label="🧩 Practice"
        />

        <Tab
          active={tab === "reading"}
          onClick={() =>
            setTab("reading")
          }
          label="📖 Reading"
        />

        <Tab
          active={tab === "writing"}
          onClick={() =>
            setTab("writing")
          }
          label="✍️ Writing"
        />
      </div>

      {/* =====================================================
          LEARN
      ===================================================== */}

      {tab === "learn" && (
        <>
          <div className="sa-content-card">
            <div className="sa-content-title">
              🎯 Today's Mission
            </div>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Bugungi maqsad — mavzuni
              tushunish, yangi so‘zlarni
              o‘zlashtirish va ingliz
              tilida mustaqil gap tuzishga
              yaqinlashish.
            </p>
          </div>

          <div className="sa-content-card">
            <div className="sa-content-title">
              💡 Key Concepts
            </div>

            {grammar.length ? (
              grammar.map(
                (item: any) => (
                  <div
                    key={item.id}
                    className="sa-example"
                  >
                    <strong>
                      {item.title}
                    </strong>

                    <div
                      style={{
                        color:
                          "#94a3b8",
                        marginTop: 5,
                      }}
                    >
                      {item.explanation}
                    </div>
                  </div>
                ),
              )
            ) : (
              <div className="sa-empty">
                Ushbu dars uchun
                qo‘shimcha konseptlar
                tayyorlanmoqda.
              </div>
            )}
          </div>

          <div className="sa-content-card">
            <div className="sa-content-title">
              ✨ Examples
            </div>

            {(meta.examples ??
              []).length ? (
              (meta.examples ?? []).map(
                (
                  example: string,
                  index: number,
                ) => (
                  <div
                    className="sa-example"
                    key={`${example}-${index}`}
                  >
                    {example}
                  </div>
                ),
              )
            ) : (
              <div className="sa-empty">
                Examples tez orada
                qo‘shiladi.
              </div>
            )}
          </div>

          <div className="sa-content-card">
            <div className="sa-content-title">
              🚀 Learning Strategy
            </div>

            <div className="sa-feature-grid">
              <Feature
                icon="1️⃣"
                title="Understand"
                text="Avval qoidani tushuning."
              />

              <Feature
                icon="2️⃣"
                title="Practice"
                text="Keyin mashqlarni bajaring."
              />

              <Feature
                icon="3️⃣"
                title="Produce"
                text="Oxirida o‘zingiz gap tuzing."
              />
            </div>
          </div>
        </>
      )}

      {/* =====================================================
          VOCABULARY
      ===================================================== */}

      {tab === "words" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            📚 New Vocabulary
          </div>

          {vocabulary.length ? (
            <div className="sa-word-grid">
              {vocabulary.map(
                (word: any) => (
                  <div
                    className="sa-word"
                    key={word.id}
                  >
                    <strong>
                      {word.word}
                    </strong>

                    {word.phonetic && (
                      <span>
                        {word.phonetic}
                      </span>
                    )}

                    <div
                      style={{
                        color:
                          "#cbd5e1",
                        marginTop: 7,
                        fontSize: 13,
                      }}
                    >
                      {word.meaning}
                    </div>

                    {word.example && (
                      <div
                        style={{
                          color:
                            "#94a3b8",
                          marginTop: 7,
                          fontSize: 12,
                          lineHeight: 1.5,
                        }}
                      >
                        {word.example}
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          ) : (
            <div className="sa-empty">
              Vocabulary mavjud emas.
            </div>
          )}
        </div>
      )}

      {/* =====================================================
          GRAMMAR
      ===================================================== */}

      {tab === "grammar" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            🧠 Grammar Lab
          </div>

          {grammar.length ? (
            grammar.map(
              (item: any) => (
                <div
                  className="sa-card"
                  style={{
                    marginBottom: 10,
                  }}
                  key={item.id}
                >
                  <strong>
                    {item.title}
                  </strong>

                  {item.formula && (
                    <div
                      style={{
                        marginTop: 10,
                        padding: 12,
                        borderRadius: 12,
                        background:
                          "rgba(59,130,246,.1)",
                        color:
                          "#93c5fd",
                        fontWeight: 850,
                      }}
                    >
                      {item.formula}
                    </div>
                  )}

                  <p
                    style={{
                      color:
                        "#94a3b8",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.explanation}
                  </p>

                  {(item.examples ??
                    []).map(
                    (
                      example: string,
                      index: number,
                    ) => (
                      <div
                        className="sa-example"
                        key={`${example}-${index}`}
                      >
                        {example}
                      </div>
                    ),
                  )}
                </div>
              ),
            )
          ) : (
            <div className="sa-empty">
              Grammar Lab ma'lumotlari
              mavjud emas.
            </div>
          )}
        </div>
      )}

      {/* =====================================================
          SPEAKING
      ===================================================== */}

      {tab === "speak" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            🗣️ Real English Dialogue
          </div>

          {dialogue.length ? (
            <div className="sa-dialogue">
              {dialogue.map(
                (
                  line: {
                    speaker: string;
                    text: string;
                  },
                  index: number,
                ) => (
                  <div
                    className="sa-bubble"
                    key={`${line.speaker}-${index}`}
                  >
                    <div className="sa-bubble-label">
                      {line.speaker}
                    </div>

                    {line.text}
                  </div>
                ),
              )}
            </div>
          ) : (
            <div className="sa-empty">
              Dialogue mavjud emas.
            </div>
          )}

          <div
            className="sa-card"
            style={{
              marginTop: 15,
            }}
          >
            <strong>
              🎙 Speaking Mission
            </strong>

            <p
              className="sa-small"
              style={{
                marginBottom: 0,
                marginTop: 8,
              }}
            >
              Dialogni ovoz chiqarib
              o‘qing. Keyin o‘zingizni
              ikkinchi suhbatdosh o‘rniga
              qo‘yib, javoblarni
              mustaqil ayting.
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          PRACTICE
      ===================================================== */}

      {tab === "practice" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            🧩 Practice Arena
          </div>

          {practice.length ? (
            practice.map(
              (
                item: any,
                index: number,
              ) => {
                const selected =
                  practiceAnswers[
                    index
                  ];

                return (
                  <div
                    className="sa-card"
                    key={`${item.question}-${index}`}
                    style={{
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        color:
                          "#60a5fa",
                        fontSize: 11,
                        fontWeight: 950,
                        marginBottom: 7,
                      }}
                    >
                      TASK{" "}
                      {index + 1}
                    </div>

                    <strong>
                      {item.question}
                    </strong>

                    {item.options?.length >
                      0 && (
                      <div
                        style={{
                          marginTop: 10,
                          display:
                            "grid",
                          gap: 6,
                        }}
                      >
                        {item.options.map(
                          (
                            option: string,
                          ) => (
                            <button
                              key={
                                option
                              }
                              type="button"
                              onClick={() =>
                                setPracticeAnswers(
                                  (
                                    old,
                                  ) => ({
                                    ...old,
                                    [index]:
                                      option,
                                  }),
                                )
                              }
                              style={{
                                textAlign:
                                  "left",
                                padding:
                                  10,
                                borderRadius:
                                  10,
                                border:
                                  "1px solid rgba(255,255,255,.07)",
                                background:
                                  selected ===
                                  option
                                    ? "rgba(37,99,235,.18)"
                                    : "rgba(255,255,255,.05)",
                                color:
                                  "#cbd5e1",
                                cursor:
                                  "pointer",
                              }}
                            >
                              {option}
                            </button>
                          ),
                        )}
                      </div>
                    )}

                    {selected && (
                      <div
                        className="sa-practice-answer"
                      >
                        {selected ===
                        item.answer
                          ? "✓ To‘g‘ri javob."
                          : "↻ Javobingizni tekshiring va qoidani qayta ko‘ring."}
                      </div>
                    )}

                    <details
                      style={{
                        marginTop: 10,
                        color:
                          "#86efac",
                      }}
                    >
                      <summary
                        style={{
                          cursor:
                            "pointer",
                          fontWeight:
                            800,
                        }}
                      >
                        Show explanation
                      </summary>

                      <div
                        style={{
                          marginTop: 7,
                          color:
                            "#94a3b8",
                          lineHeight:
                            1.5,
                        }}
                      >
                        {item.answer}
                      </div>
                    </details>
                  </div>
                );
              },
            )
          ) : (
            <div className="sa-empty">
              Practice Arena ma'lumotlari
              mavjud emas.
            </div>
          )}
        </div>
      )}

      {/* =====================================================
          READING
      ===================================================== */}

      {tab === "reading" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            📖 Reading Lab
          </div>

          {reading.title && (
            <h3>
              {reading.title}
            </h3>
          )}

          {reading.text ? (
            <p
              style={{
                color:
                  "#cbd5e1",
                lineHeight: 1.9,
                fontSize: 15,
              }}
            >
              {reading.text}
            </p>
          ) : (
            <div className="sa-empty">
              Reading passage mavjud
              emas.
            </div>
          )}

          {(reading.questions ??
            []).map(
            (question: any) => (
              <div
                className="sa-example"
                key={question.id}
              >
                <strong>
                  {question.question}
                </strong>

                {question.options?.length >
                  0 && (
                  <div
                    style={{
                      marginTop: 8,
                      color:
                        "#94a3b8",
                    }}
                  >
                    {question.options.join(
                      " • ",
                    )}
                  </div>
                )}
              </div>
            ),
          )}
        </div>
      )}

      {/* =====================================================
          WRITING
      ===================================================== */}

      {tab === "writing" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            ✍️ Writing Mission
          </div>

          {(writing.tasks ??
            []).length ? (
            (writing.tasks ?? []).map(
              (
                task: any,
                index: number,
              ) => (
                <div
                  className="sa-card"
                  key={task.id}
                  style={{
                    marginBottom: 10,
                  }}
                >
                  <span className="sa-badge blue">
                    TASK{" "}
                    {index + 1}
                  </span>

                  <p
                    style={{
                      lineHeight: 1.6,
                      color:
                        "#cbd5e1",
                    }}
                  >
                    {
                      task.instruction
                    }
                  </p>

                  <textarea
                    className="sa-writing"
                    placeholder="Write your answer here..."
                  />
                </div>
              ),
            )
          ) : (
            <div className="sa-empty">
              Writing topshiriqlari
              mavjud emas.
            </div>
          )}
        </div>
      )}

      {/* =====================================================
          FINAL ASSESSMENT
      ===================================================== */}

      <div
        className="sa-content-card"
        style={{
          marginTop: 15,
        }}
      >
        <div className="sa-content-title">
          🏆 Ready for the Challenge?
        </div>

        <p
          className="sa-small"
          style={{
            fontSize: 13,
          }}
        >
          Barcha bo‘limlarni o‘rganib
          chiqqaningizdan keyin yakuniy
          testni ishlang. Natijangiz
          kamida 70% bo‘lsa, keyingi
          dars ochiladi.
        </p>

        <div
          className="sa-divider"
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 7,
            marginBottom: 13,
          }}
        >
          <span className="sa-badge">
            📖 Learn
          </span>

          <span className="sa-badge">
            📚 Vocabulary
          </span>

          <span className="sa-badge">
            🧠 Grammar
          </span>

          <span className="sa-badge">
            🗣 Speaking
          </span>

          <span className="sa-badge">
            🧩 Practice
          </span>

          <span className="sa-badge">
            📖 Reading
          </span>

          <span className="sa-badge">
            ✍️ Writing
          </span>
        </div>

        <button
          className="sa-action"
          onClick={
            onStartTest
          }
        >
          📝 Start 15-Question Test →
        </button>
      </div>
    </>
  );
}

/* =========================================================
   TAB
========================================================= */

function Tab({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      className={[
        "sa-tab",
        active ? "active" : "",
      ].join(" ")}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

/* =========================================================
   FEATURE
========================================================= */

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="sa-feature">
      <div className="sa-feature-icon">
        {icon}
      </div>

      <div className="sa-feature-title">
        {title}
      </div>

      <div className="sa-feature-text">
        {text}
      </div>
    </div>
  );
}
