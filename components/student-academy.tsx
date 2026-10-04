"use client";

import React, { useEffect, useMemo, useState } from "react";

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

type FoundationProgress = {
  completedLessonIds: string[];
  xp: number;
  streak: number;
  lastStudyDate: string | null;
  lessonScores: Record<string, number>;
};

type Props = {
  onBack?: () => void;
};

/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "menejerlik-foundation-progress-v3";

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

    if (!raw) return DEFAULT_PROGRESS;

    const parsed = JSON.parse(raw);

    return {
      completedLessonIds: Array.isArray(parsed.completedLessonIds)
        ? parsed.completedLessonIds
        : [],
      xp: Number(parsed.xp) || 0,
      streak: Number(parsed.streak) || 0,
      lastStudyDate: parsed.lastStudyDate ?? null,
      lessonScores: parsed.lessonScores ?? {},
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(progress: FoundationProgress) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress),
  );
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak(progress: FoundationProgress) {
  const today = todayKey();

  if (progress.lastStudyDate === today) {
    return progress;
  }

  if (!progress.lastStudyDate) {
    return {
      ...progress,
      streak: 1,
      lastStudyDate: today,
    };
  }

  const previous = new Date(progress.lastStudyDate);
  const current = new Date(today);

  const diff =
    Math.round(
      (current.getTime() - previous.getTime()) /
        (1000 * 60 * 60 * 24),
    );

  return {
    ...progress,
    streak: diff === 1 ? progress.streak + 1 : 1,
    lastStudyDate: today,
  };
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
};

/* =========================================================
   GLOBAL STYLES
========================================================= */

const styles = `
.sa-root {
  min-height: 100vh;
  background:
    radial-gradient(circle at 10% 0%, rgba(59,130,246,.16), transparent 30%),
    radial-gradient(circle at 90% 10%, rgba(139,92,246,.14), transparent 28%),
    linear-gradient(180deg, #07111f 0%, #0a1424 45%, #07101c 100%);
  color: #f8fafc;
  padding: 18px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.sa-container {
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
}

.sa-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.sa-back {
  border: 1px solid rgba(255,255,255,.1);
  background: rgba(255,255,255,.06);
  color: white;
  border-radius: 14px;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
}

.sa-brand {
  font-size: 13px;
  color: #94a3b8;
  letter-spacing: .08em;
  text-transform: uppercase;
  font-weight: 700;
}

.sa-hero {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 28px;
  padding: 28px;
  background:
    linear-gradient(135deg, rgba(30,64,175,.8), rgba(79,70,229,.72)),
    #172554;
  box-shadow: 0 25px 70px rgba(0,0,0,.25);
  margin-bottom: 18px;
}

.sa-hero::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  right: -80px;
  top: -90px;
  border-radius: 50%;
  background: rgba(255,255,255,.08);
}

.sa-kicker {
  position: relative;
  z-index: 1;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #bfdbfe;
}

.sa-title {
  position: relative;
  z-index: 1;
  margin: 7px 0;
  font-size: clamp(28px, 5vw, 46px);
  line-height: 1.02;
  font-weight: 900;
}

.sa-subtitle {
  position: relative;
  z-index: 1;
  max-width: 680px;
  color: #dbeafe;
  line-height: 1.6;
  margin: 0;
}

.sa-grid {
  display: grid;
  gap: 14px;
}

.sa-grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.sa-grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.sa-grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.sa-stat {
  border: 1px solid rgba(255,255,255,.09);
  background: rgba(255,255,255,.055);
  border-radius: 20px;
  padding: 17px;
  backdrop-filter: blur(16px);
}

.sa-stat-icon {
  font-size: 22px;
}

.sa-stat-value {
  font-size: 25px;
  font-weight: 900;
  margin-top: 5px;
}

.sa-stat-label {
  color: #94a3b8;
  font-size: 12px;
  margin-top: 3px;
}

.sa-section {
  margin-top: 24px;
}

.sa-section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 10px;
  margin-bottom: 12px;
}

.sa-section-title {
  font-size: 19px;
  font-weight: 900;
}

.sa-section-caption {
  color: #64748b;
  font-size: 12px;
}

.sa-card {
  border: 1px solid rgba(255,255,255,.09);
  background: rgba(255,255,255,.045);
  border-radius: 22px;
  padding: 18px;
  transition: .2s ease;
}

.sa-card:hover {
  transform: translateY(-2px);
  border-color: rgba(147,197,253,.25);
  background: rgba(255,255,255,.065);
}

.sa-track {
  cursor: pointer;
}

.sa-track-icon {
  font-size: 30px;
  margin-bottom: 10px;
}

.sa-track-title {
  font-size: 17px;
  font-weight: 850;
}

.sa-track-desc {
  color: #94a3b8;
  line-height: 1.5;
  font-size: 13px;
  margin-top: 5px;
}

.sa-track-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  color: #cbd5e1;
  font-size: 12px;
}

.sa-progress {
  height: 7px;
  background: rgba(255,255,255,.08);
  border-radius: 99px;
  overflow: hidden;
  margin-top: 10px;
}

.sa-progress > div {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #38bdf8, #818cf8);
}

.sa-level {
  cursor: pointer;
  position: relative;
}

.sa-level-active {
  border-color: rgba(96,165,250,.55);
  background: linear-gradient(145deg, rgba(30,64,175,.35), rgba(79,70,229,.18));
}

.sa-level-lock {
  opacity: .58;
}

.sa-level-number {
  color: #60a5fa;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .08em;
}

.sa-level-name {
  font-size: 18px;
  font-weight: 900;
  margin-top: 5px;
}

.sa-level-meta {
  color: #94a3b8;
  font-size: 12px;
  margin-top: 6px;
}

.sa-lesson-list {
  display: grid;
  gap: 10px;
}

.sa-lesson {
  display: grid;
  grid-template-columns: 45px 1fr auto;
  gap: 13px;
  align-items: center;
  padding: 15px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.04);
  border-radius: 19px;
  cursor: pointer;
}

.sa-lesson.locked {
  opacity: .48;
  cursor: default;
}

.sa-lesson.done {
  border-color: rgba(34,197,94,.3);
}

.sa-lesson-number {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(59,130,246,.14);
  color: #93c5fd;
  font-weight: 900;
}

.sa-lesson.done .sa-lesson-number {
  background: rgba(34,197,94,.16);
  color: #86efac;
}

.sa-lesson-title {
  font-weight: 850;
}

.sa-lesson-subtitle {
  color: #94a3b8;
  font-size: 12px;
  margin-top: 3px;
}

.sa-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border-radius: 999px;
  padding: 6px 9px;
  font-size: 11px;
  font-weight: 800;
  background: rgba(255,255,255,.07);
  color: #cbd5e1;
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

.sa-lesson-screen {
  max-width: 900px;
  margin: 0 auto;
}

.sa-lesson-hero {
  border-radius: 28px;
  padding: 25px;
  background:
    linear-gradient(135deg, rgba(14,116,144,.7), rgba(67,56,202,.75));
  border: 1px solid rgba(255,255,255,.1);
  margin-bottom: 15px;
}

.sa-lesson-top {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: start;
}

.sa-lesson-big-title {
  font-size: clamp(27px, 5vw, 42px);
  font-weight: 950;
  margin: 6px 0;
}

.sa-lesson-desc {
  color: #dbeafe;
  line-height: 1.6;
}

.sa-tabs {
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding: 5px 0 10px;
  margin-bottom: 12px;
}

.sa-tab {
  white-space: nowrap;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.05);
  color: #cbd5e1;
  border-radius: 12px;
  padding: 9px 12px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 750;
}

.sa-tab.active {
  background: #2563eb;
  color: white;
  border-color: #60a5fa;
}

.sa-content-card {
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.045);
  border-radius: 23px;
  padding: 20px;
  margin-bottom: 12px;
}

.sa-content-title {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 14px;
}

.sa-example {
  border-left: 3px solid #60a5fa;
  background: rgba(59,130,246,.07);
  padding: 12px 14px;
  border-radius: 0 13px 13px 0;
  margin: 8px 0;
  line-height: 1.5;
}

.sa-word-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 9px;
}

.sa-word {
  padding: 13px;
  border-radius: 15px;
  background: rgba(255,255,255,.055);
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
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  color: white;
  font-weight: 900;
  cursor: pointer;
  font-size: 14px;
}

.sa-action.secondary {
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.1);
}

.sa-action.success {
  background: linear-gradient(135deg, #059669, #16a34a);
}

.sa-test-question {
  font-size: 20px;
  font-weight: 850;
  line-height: 1.45;
  margin-bottom: 18px;
}

.sa-options {
  display: grid;
  gap: 9px;
}

.sa-option {
  text-align: left;
  border: 1px solid rgba(255,255,255,.09);
  background: rgba(255,255,255,.045);
  color: #e2e8f0;
  border-radius: 15px;
  padding: 14px;
  cursor: pointer;
  font-weight: 650;
}

.sa-option:hover {
  border-color: rgba(96,165,250,.4);
  background: rgba(59,130,246,.08);
}

.sa-result {
  text-align: center;
  padding: 35px 20px;
}

.sa-result-icon {
  font-size: 64px;
}

.sa-result-score {
  font-size: 54px;
  font-weight: 950;
  margin: 8px 0;
}

.sa-xp {
  display: inline-flex;
  padding: 8px 13px;
  border-radius: 999px;
  background: rgba(234,179,8,.12);
  color: #fde68a;
  font-weight: 900;
}

@media (max-width: 760px) {
  .sa-root {
    padding: 12px;
  }

  .sa-grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sa-grid-3 {
    grid-template-columns: 1fr;
  }

  .sa-grid-2 {
    grid-template-columns: 1fr;
  }

  .sa-hero {
    padding: 22px;
    border-radius: 23px;
  }

  .sa-word-grid {
    grid-template-columns: 1fr;
  }

  .sa-lesson {
    grid-template-columns: 42px 1fr;
  }

  .sa-lesson > .sa-badge {
    grid-column: 2;
    justify-self: start;
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
    description: "Hayotiy vaziyatlar, grafiklar, mantiq va savodxonlik.",
    progress: 0,
    meta: "7 yo‘nalish",
  },
  {
    id: "english" as TrackId,
    icon: "🇬🇧",
    title: "English Academy",
    description: "Foundationdan C2 gacha bosqichma-bosqich ingliz tili.",
    progress: 0,
    meta: "7 level",
  },
  {
    id: "math" as TrackId,
    icon: "📐",
    title: "Matematika",
    description: "Hisoblash, algebra, geometriya va masalalar.",
    progress: 0,
    meta: "Level-based",
  },
  {
    id: "science" as TrackId,
    icon: "🔬",
    title: "Fanlar",
    description: "Tabiiy fanlar va ilmiy fikrlash.",
    progress: 0,
    meta: "Science Lab",
  },
  {
    id: "logic" as TrackId,
    icon: "🧠",
    title: "Mantiq",
    description: "Analitik fikrlash, pattern va muammo yechish.",
    progress: 0,
    meta: "Logic Arena",
  },
  {
    id: "president" as TrackId,
    icon: "🏫",
    title: "Prezident maktabi",
    description: "Tanlov va imtihon formatidagi topshiriqlar.",
    progress: 0,
    meta: "Challenge",
  },
  {
    id: "olympiad" as TrackId,
    icon: "🏆",
    title: "Olimpiada",
    description: "Yuqori darajadagi masalalar va musobaqa tayyorgarligi.",
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
    description: "30 dars • Grammar • Vocabulary • Speaking",
    active: true,
  },
  {
    id: "pre-a1" as EnglishLevelId,
    number: "02",
    title: "Pre-A1",
    subtitle: "First communication",
    description: "30 dars • Everyday English",
    active: false,
  },
  {
    id: "elementary" as EnglishLevelId,
    number: "03",
    title: "A1 Elementary",
    subtitle: "Basic communication",
    description: "Grammar • Reading • Speaking",
    active: false,
  },
  {
    id: "pre-intermediate" as EnglishLevelId,
    number: "04",
    title: "A2 Pre-Intermediate",
    subtitle: "More confidence",
    description: "Real-life communication",
    active: false,
  },
  {
    id: "intermediate" as EnglishLevelId,
    number: "05",
    title: "B1 Intermediate",
    subtitle: "Independent English",
    description: "Fluency foundation",
    active: false,
  },
  {
    id: "upper-intermediate" as EnglishLevelId,
    number: "06",
    title: "B2 Upper-Intermediate",
    subtitle: "Advanced communication",
    description: "Complex English",
    active: false,
  },
  {
    id: "advanced" as EnglishLevelId,
    number: "07",
    title: "C1–C2",
    subtitle: "Mastery",
    description: "Academic & professional English",
    active: false,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function StudentAcademy({
  onBack,
}: Props) {
  const [screen, setScreen] = useState<Screen>("academy");
  const [track, setTrack] = useState<TrackId>("english");
  const [progress, setProgress] =
    useState<FoundationProgress>(DEFAULT_PROGRESS);
  const [selectedLessonId, setSelectedLessonId] =
    useState<string>("foundation-01");

  const [testAnswers, setTestAnswers] =
    useState<Record<number, string>>({});
  const [testIndex, setTestIndex] = useState(0);
  const [testScore, setTestScore] = useState<number | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const foundationProgress = useMemo(
    () =>
      calculateFoundationProgress(
        progress.completedLessonIds,
      ),
    [progress.completedLessonIds],
  );

  const currentLesson = getFoundationLesson(
    selectedLessonId,
  );

  const nextLesson = currentLesson
    ? getNextFoundationLesson(currentLesson.id)
    : undefined;

  const openTrack = (id: TrackId) => {
    setTrack(id);

    if (id === "english") {
      setScreen("english");
      return;
    }

    setScreen("academy");
  };

  const openFoundation = () => {
    const firstIncomplete =
      FOUNDATION_LESSONS.find(
        (lesson) =>
          !progress.completedLessonIds.includes(lesson.id) &&
          isFoundationLessonUnlocked(
            lesson.number,
            progress.completedLessonIds,
          ),
      ) ?? FOUNDATION_LESSONS[0];

    setSelectedLessonId(firstIncomplete.id);
    setScreen("foundation");
  };

  const openLesson = (lessonId: string) => {
    const selected = getFoundationLesson(lessonId);

    if (!selected) return;

    const unlocked = isFoundationLessonUnlocked(
      selected.number,
      progress.completedLessonIds,
    );

    if (!unlocked) return;

    setSelectedLessonId(lessonId);
    setScreen("lesson");
  };

  const beginTest = () => {
    setTestAnswers({});
    setTestIndex(0);
    setTestScore(null);
    setScreen("test");
  };

  const submitTest = () => {
    if (!currentLesson) return;

    const questions =
      (currentLesson as any).meta?.test ?? [];

    let correct = 0;

    questions.forEach(
      (
        question: {
          answer: string;
        },
        index: number,
      ) => {
        if (
          testAnswers[index] === question.answer
        ) {
          correct += 1;
        }
      },
    );

    const score = calculateFoundationScore(
      correct,
      questions.length,
    );

    setTestScore(score);

    const passed = isFoundationPassed(
      correct,
      questions.length,
    );

    let updated = updateStreak(progress);

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
          [currentLesson.id]: Math.max(
            score,
            updated.lessonScores[currentLesson.id] ?? 0,
          ),
        },
        xp:
          updated.xp +
          (alreadyCompleted
            ? Math.round(
                calculateFoundationXP(score) * 0.3,
              )
            : calculateFoundationXP(score)),
      };
    } else {
      updated = {
        ...updated,
        lessonScores: {
          ...updated.lessonScores,
          [currentLesson.id]: Math.max(
            score,
            updated.lessonScores[currentLesson.id] ?? 0,
          ),
        },
      };
    }

    setProgress(updated);
    setScreen("result");
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
              <div>
                <div className="sa-brand">
                  NATIONAL EDUCATION PLATFORM
                </div>
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
                Mantiq, matematika, PISA, ingliz tili va
                olimpiada yo‘nalishlarini bir platformada
                bosqichma-bosqich egalla.
              </p>
            </section>

            <section className="sa-grid sa-grid-4">
              <div className="sa-stat">
                <div className="sa-stat-icon">🎓</div>
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
                  XP
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
                  🎯
                </div>
                <div className="sa-stat-value">
                  {foundationProgress}%
                </div>
                <div className="sa-stat-label">
                  Foundation
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
              </div>

              <div className="sa-grid sa-grid-2">
                {tracks.map((item) => (
                  <div
                    key={item.id}
                    className="sa-card sa-track"
                    onClick={() => openTrack(item.id)}
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
                ))}
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
                onClick={() => setScreen("academy")}
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
                English. Bosqichma-bosqich.
              </h1>

              <p className="sa-subtitle">
                Foundationdan C2 gacha. Har bir level
                oldingisiga tayanadi. Darsni o‘rganing,
                mashq qiling, testdan o‘ting va keyingi
                bosqichni oching.
              </p>
            </section>

            <section className="sa-grid sa-grid-4">
              <div className="sa-stat">
                <div className="sa-stat-icon">📖</div>
                <div className="sa-stat-value">
                  30
                </div>
                <div className="sa-stat-label">
                  Foundation lessons
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">📝</div>
                <div className="sa-stat-value">
                  15
                </div>
                <div className="sa-stat-label">
                  Test / lesson
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">🎯</div>
                <div className="sa-stat-value">
                  70%
                </div>
                <div className="sa-stat-label">
                  Passing score
                </div>
              </div>

              <div className="sa-stat">
                <div className="sa-stat-icon">⭐</div>
                <div className="sa-stat-value">
                  {progress.xp}
                </div>
                <div className="sa-stat-label">
                  Total XP
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
                    Foundation → C2
                  </div>
                </div>
              </div>

              <div className="sa-grid sa-grid-2">
                {englishLevels.map((level) => (
                  <div
                    key={level.id}
                    className={[
                      "sa-card",
                      "sa-level",
                      level.id === "foundation"
                        ? "sa-level-active"
                        : "sa-level-lock",
                    ].join(" ")}
                    onClick={() => {
                      if (
                        level.id === "foundation"
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
                ))}
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
                FOUNDATION
              </div>
            </div>

            <section className="sa-hero">
              <div className="sa-kicker">
                LEVEL 01
              </div>

              <h1 className="sa-title">
                Foundation English
              </h1>

              <p className="sa-subtitle">
                30 ta dars. Har bir darsda yangi
                vocabulary, grammar, speaking, reading,
                writing, practice va test.
              </p>

              <div
                style={{
                  marginTop: 20,
                  maxWidth: 500,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
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
                  {progress.completedLessonIds.length}
                  /30 completed
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
                          if (unlocked) {
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
                                ).padStart(2, "0")
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
    const meta = (currentLesson as any).meta ?? {};

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
            </section>

            <LessonContent
              lesson={currentLesson}
              meta={meta}
              onStartTest={beginTest}
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
      (currentLesson as any).meta?.test ?? [];

    const question = questions[testIndex];

    if (!question) {
      return null;
    }

    const selected =
      testAnswers[testIndex];

    const isLast =
      testIndex === questions.length - 1;

    return (
      <>
        <style>{styles}</style>

        <main className="sa-root">
          <div className="sa-lesson-screen">

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
                {testIndex + 1}/{questions.length}
              </span>
            </div>

            <div className="sa-content-card">
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: 12,
                  color: "#94a3b8",
                  fontSize: 12,
                }}
              >
                <span>
                  FOUNDATION TEST
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
            </div>

            <div className="sa-content-card">
              <div className="sa-test-question">
                {question.question}
              </div>

              <div className="sa-options">
                {question.options.map(
                  (
                    option: string,
                    index: number,
                  ) => (
                    <button
                      key={option}
                      className="sa-option"
                      onClick={() =>
                        setTestAnswers(
                          (old) => ({
                            ...old,
                            [testIndex]:
                              option,
                          }),
                        )
                      }
                      style={{
                        borderColor:
                          selected === option
                            ? "#60a5fa"
                            : undefined,
                        background:
                          selected === option
                            ? "rgba(37,99,235,.18)"
                            : undefined,
                      }}
                    >
                      <span
                        style={{
                          display:
                            "inline-grid",
                          placeItems:
                            "center",
                          width: 28,
                          height: 28,
                          borderRadius: 9,
                          background:
                            "rgba(255,255,255,.07)",
                          marginRight: 9,
                        }}
                      >
                        {String.fromCharCode(
                          65 + index,
                        )}
                      </span>

                      {option}
                    </button>
                  ),
                )}
              </div>
            </div>

            <button
              className="sa-action"
              disabled={!selected}
              style={{
                opacity: selected ? 1 : 0.45,
              }}
              onClick={() => {
                if (!selected) return;

                if (isLast) {
                  submitTest();
                } else {
                  setTestIndex(
                    (value) => value + 1,
                  );
                }
              }}
            >
              {isLast
                ? "Finish Test →"
                : "Next Question →"}
            </button>
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
      calculateFoundationXP(testScore);

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
                  color: "#94a3b8",
                  fontWeight: 800,
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
                  lineHeight: 1.6,
                }}
              >
                {passed
                  ? "Ajoyib! Siz keyingi Foundation darsini ochdingiz."
                  : "Keyingi darsni ochish uchun kamida 70% natija kerak."}
              </p>

              <div className="sa-xp">
                ⭐ +{earnedXP} XP
              </div>

              {passed && nextLesson ? (
                <div
                  style={{
                    marginTop: 22,
                  }}
                >
                  <div
                    style={{
                      color: "#86efac",
                      fontWeight: 900,
                      marginBottom: 10,
                    }}
                  >
                    🔓 NEXT LESSON UNLOCKED
                  </div>

                  <div
                    className="sa-card"
                    style={{
                      textAlign: "left",
                      marginBottom: 12,
                    }}
                  >
                    <strong>
                      {nextLesson.number}.{" "}
                      {nextLesson.title}
                    </strong>

                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: 12,
                        marginTop: 4,
                      }}
                    >
                      {nextLesson.subtitle}
                    </div>
                  </div>

                  <button
                    className="sa-action success"
                    onClick={() => {
                      setSelectedLessonId(
                        nextLesson.id,
                      );
                      setScreen("lesson");
                    }}
                  >
                    Continue Learning →
                  </button>
                </div>
              ) : passed ? (
                <button
                  className="sa-action success"
                  style={{
                    marginTop: 20,
                  }}
                  onClick={() =>
                    setScreen("foundation")
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
                    setTestAnswers({});
                    setTestIndex(0);
                    setTestScore(null);
                    setScreen("test");
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
                  setScreen("foundation")
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
  onStartTest,
}: {
  lesson: any;
  meta: any;
  onStartTest: () => void;
}) {
  const [tab, setTab] =
    useState<
      | "learn"
      | "words"
      | "grammar"
      | "speak"
      | "practice"
      | "reading"
      | "writing"
    >("learn");

  return (
    <>
      <div className="sa-tabs">
        <button
          className={`sa-tab ${
            tab === "learn"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("learn")}
        >
          📖 Learn
        </button>

        <button
          className={`sa-tab ${
            tab === "words"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("words")}
        >
          📚 Vocabulary
        </button>

        <button
          className={`sa-tab ${
            tab === "grammar"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("grammar")}
        >
          🧠 Grammar
        </button>

        <button
          className={`sa-tab ${
            tab === "speak"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("speak")}
        >
          🗣️ Speak
        </button>

        <button
          className={`sa-tab ${
            tab === "practice"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("practice")}
        >
          🧩 Practice
        </button>

        <button
          className={`sa-tab ${
            tab === "reading"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("reading")}
        >
          📖 Reading
        </button>

        <button
          className={`sa-tab ${
            tab === "writing"
              ? "active"
              : ""
          }`}
          onClick={() => setTab("writing")}
        >
          ✍️ Writing
        </button>
      </div>

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
              }}
            >
              Bugungi maqsad — mavzuni tushunish,
              yangi so‘zlarni o‘zlashtirish va
              ingliz tilida mustaqil gap tuzishga
              yaqinlashish.
            </p>
          </div>

          <div className="sa-content-card">
            <div className="sa-content-title">
              💡 Key Concepts
            </div>

            {lesson.grammar?.map(
              (grammar: any) => (
                <div
                  key={grammar.id}
                  className="sa-example"
                >
                  <strong>
                    {grammar.title}
                  </strong>

                  <div
                    style={{
                      color: "#94a3b8",
                      marginTop: 5,
                    }}
                  >
                    {grammar.explanation}
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="sa-content-card">
            <div className="sa-content-title">
              ✨ Examples
            </div>

            {(meta.examples ?? []).map(
              (example: string) => (
                <div
                  className="sa-example"
                  key={example}
                >
                  {example}
                </div>
              ),
            )}
          </div>
        </>
      )}

      {tab === "words" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            📚 New Vocabulary
          </div>

          <div className="sa-word-grid">
            {(lesson.vocabulary ?? []).map(
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
                      color: "#cbd5e1",
                      marginTop: 7,
                      fontSize: 13,
                    }}
                  >
                    {word.meaning}
                  </div>

                  <div
                    style={{
                      color: "#94a3b8",
                      marginTop: 7,
                      fontSize: 12,
                    }}
                  >
                    {word.example}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      )}

      {tab === "grammar" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            🧠 Grammar Lab
          </div>

          {(lesson.grammar ?? []).map(
            (grammar: any) => (
              <div
                className="sa-card"
                style={{
                  marginBottom: 10,
                }}
                key={grammar.id}
              >
                <strong>
                  {grammar.title}
                </strong>

                {grammar.formula && (
                  <div
                    style={{
                      marginTop: 10,
                      padding: 12,
                      borderRadius: 12,
                      background:
                        "rgba(59,130,246,.1)",
                      color: "#93c5fd",
                      fontWeight: 800,
                    }}
                  >
                    {grammar.formula}
                  </div>
                )}

                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: 1.6,
                  }}
                >
                  {grammar.explanation}
                </p>

                {(grammar.examples ?? []).map(
                  (example: string) => (
                    <div
                      className="sa-example"
                      key={example}
                    >
                      {example}
                    </div>
                  ),
                )}
              </div>
            ),
          )}
        </div>
      )}

      {tab === "speak" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            🗣️ Real English Dialogue
          </div>

          <div className="sa-dialogue">
            {(meta.dialogue ?? []).map(
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
              style={{
                color: "#94a3b8",
                lineHeight: 1.6,
              }}
            >
              Dialogni ovoz chiqarib o‘qing.
              Keyin o‘zingizni ikkinchi suhbatdosh
              o‘rniga qo‘yib, javoblarni mustaqil
              ayting.
            </p>
          </div>
        </div>
      )}

      {tab === "practice" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            🧩 Practice Arena
          </div>

          {(meta.practice ?? []).map(
            (
              item: any,
              index: number,
            ) => (
              <div
                className="sa-card"
                key={`${item.question}-${index}`}
                style={{
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    color: "#60a5fa",
                    fontSize: 11,
                    fontWeight: 900,
                    marginBottom: 7,
                  }}
                >
                  TASK {index + 1}
                </div>

                <strong>
                  {item.question}
                </strong>

                {item.options?.length > 0 && (
                  <div
                    style={{
                      marginTop: 10,
                      display: "grid",
                      gap: 6,
                    }}
                  >
                    {item.options.map(
                      (option: string) => (
                        <div
                          key={option}
                          style={{
                            padding: 9,
                            borderRadius: 10,
                            background:
                              "rgba(255,255,255,.05)",
                            color: "#cbd5e1",
                          }}
                        >
                          {option}
                        </div>
                      ),
                    )}
                  </div>
                )}

                <details
                  style={{
                    marginTop: 10,
                    color: "#86efac",
                  }}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: 800,
                    }}
                  >
                    Show answer
                  </summary>

                  <div
                    style={{
                      marginTop: 7,
                    }}
                  >
                    {item.answer}
                  </div>
                </details>
              </div>
            ),
          )}
        </div>
      )}

      {tab === "reading" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            📖 Reading Lab
          </div>

          <h3>
            {lesson.reading?.title}
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.9,
              fontSize: 15,
            }}
          >
            {lesson.reading?.text}
          </p>

          {lesson.reading?.questions?.map(
            (question: any) => (
              <div
                className="sa-example"
                key={question.id}
              >
                <strong>
                  {question.question}
                </strong>
              </div>
            ),
          )}
        </div>
      )}

      {tab === "writing" && (
        <div className="sa-content-card">
          <div className="sa-content-title">
            ✍️ Writing Mission
          </div>

          {(lesson.writing?.tasks ?? []).map(
            (task: any, index: number) => (
              <div
                className="sa-card"
                key={task.id}
                style={{
                  marginBottom: 10,
                }}
              >
                <span className="sa-badge blue">
                  TASK {index + 1}
                </span>

                <p
                  style={{
                    lineHeight: 1.6,
                    color: "#cbd5e1",
                  }}
                >
                  {task.instruction}
                </p>

                <textarea
                  placeholder="Write your answer here..."
                  style={{
                    width: "100%",
                    minHeight: 100,
                    resize: "vertical",
                    borderRadius: 13,
                    border:
                      "1px solid rgba(255,255,255,.1)",
                    background:
                      "rgba(0,0,0,.15)",
                    color: "white",
                    padding: 12,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ),
          )}
        </div>
      )}

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
          style={{
            color: "#94a3b8",
            lineHeight: 1.6,
          }}
        >
          Barcha bo‘limlarni ko‘rib chiqqaningizdan
          keyin 15 savollik testni ishlang.
          Keyingi darsni ochish uchun kamida
          <strong style={{ color: "#facc15" }}>
            {" "}70%
          </strong>
          {" "}kerak.
        </p>

        <button
          className="sa-action"
          onClick={onStartTest}
        >
          📝 Start 15-Question Test →
        </button>
      </div>
    </>
  );
}
