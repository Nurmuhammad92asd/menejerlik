/* =========================================================
 * 🇬🇧 MENEJERLIK BY NURMUHAMMAD
 * ENGLISH ACADEMY — CORE TYPES
 * =========================================================
 *
 * Bu fayl English Academy'ning markaziy TypeScript
 * type/interface tizimi.
 *
 * ARXITEKTURA:
 *
 * English Academy
 *   └── Level
 *        └── Course
 *             └── Lesson
 *                  ├── Vocabulary
 *                  ├── Grammar
 *                  ├── Explanation
 *                  ├── Examples
 *                  ├── Activities
 *                  ├── Speaking
 *                  └── Test
 *
 * Darslar ketma-ket ochiladi.
 * Har bir dars foydalanuvchining progressi bilan bog'lanadi.
 * ========================================================= */

/* =========================================================
   🎓 LEVELS
========================================================= */

export type EnglishLevelId =
  | 'foundation'
  | 'elementary'
  | 'pre-intermediate'
  | 'intermediate'
  | 'upper-intermediate'
  | 'advanced'

export type EnglishLevelStatus =
  | 'locked'
  | 'available'
  | 'in-progress'
  | 'completed'

/* =========================================================
   📚 COURSE
========================================================= */

export interface EnglishCourse {
  id: string
  level: EnglishLevelId
  title: string
  shortTitle: string
  description: string

  emoji: string
  coverImage?: string

  lessonCount: number
  estimatedMinutes: number

  status: EnglishLevelStatus

  color?: string

  /** Kursdagi asosiy maqsadlar */
  goals: string[]

  /** CEFR darajasi */
  cefr?: string
}

/* =========================================================
   📖 LESSON
========================================================= */

export type LessonStatus =
  | 'locked'
  | 'available'
  | 'in-progress'
  | 'completed'

export interface EnglishLesson {
  id: string

  courseId: string
  lessonNumber: number

  title: string
  subtitle?: string

  emoji: string

  description: string

  status: LessonStatus

  estimatedMinutes: number

  /** Darsning asosiy maqsadi */
  objectives: string[]

  /** Dars bo'yicha mavzular */
  topics: string[]

  /** Vocabulary */
  vocabulary: EnglishVocabulary[]

  /** Grammar */
  grammar?: EnglishGrammar

  /** Darsni tushuntirish bloklari */
  explanations: EnglishExplanation[]

  /** Misollar */
  examples: EnglishExample[]

  /** Interaktiv mashqlar */
  activities: EnglishActivity[]

  /** Speaking */
  speaking?: EnglishSpeaking

  /** Yakuniy test */
  test: EnglishLessonTest

  /** Mukofot */
  rewards: EnglishLessonReward

  /** Keyingi dars ID */
  nextLessonId?: string

  /** Oldingi dars ID */
  previousLessonId?: string
}

/* =========================================================
   🧠 VOCABULARY
========================================================= */

export type WordCategory =
  | 'greeting'
  | 'person'
  | 'family'
  | 'school'
  | 'home'
  | 'food'
  | 'animal'
  | 'color'
  | 'number'
  | 'time'
  | 'weather'
  | 'clothes'
  | 'body'
  | 'emotion'
  | 'place'
  | 'action'
  | 'daily-life'
  | 'general'

export interface EnglishVocabulary {
  id: string

  word: string

  /** O'zbekcha ma'nosi */
  translation: string

  /** Talaffuz */
  pronunciation?: string

  /** Audio URL */
  audioUrl?: string

  /** Rasm */
  imageUrl?: string

  emoji?: string

  category: WordCategory

  partOfSpeech?: PartOfSpeech

  example?: string

  exampleTranslation?: string

  /** So'zning muhimligi */
  importance?: 'normal' | 'important' | 'core'
}

/* =========================================================
   🔤 PART OF SPEECH
========================================================= */

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'preposition'
  | 'conjunction'
  | 'interjection'
  | 'determiner'
  | 'phrase'

/* =========================================================
   🧩 GRAMMAR
========================================================= */

export interface EnglishGrammar {
  id: string

  title: string

  shortRule: string

  explanation: string

  formula?: string

  examples: EnglishGrammarExample[]

  commonMistakes?: string[]

  tips?: string[]
}

export interface EnglishGrammarExample {
  english: string
  uzbek: string

  highlight?: string
}

/* =========================================================
   💡 EXPLANATION
========================================================= */

export type ExplanationType =
  | 'intro'
  | 'concept'
  | 'rule'
  | 'tip'
  | 'warning'
  | 'memory'
  | 'culture'
  | 'summary'

export interface EnglishExplanation {
  id: string

  type: ExplanationType

  title: string

  content: string

  emoji?: string

  imageUrl?: string

  /** Muhim so'zlarni ajratish */
  highlights?: string[]
}

/* =========================================================
   ✍️ EXAMPLES
========================================================= */

export interface EnglishExample {
  id: string

  english: string

  uzbek: string

  audioUrl?: string

  imageUrl?: string

  emoji?: string

  /** Misoldagi asosiy grammatik qism */
  highlight?: string

  difficulty?: 'easy' | 'medium' | 'hard'
}

/* =========================================================
   🎮 INTERACTIVE ACTIVITIES
========================================================= */

export type EnglishActivityType =
  | 'multiple-choice'
  | 'true-false'
  | 'matching'
  | 'word-order'
  | 'fill-gap'
  | 'image-choice'
  | 'translate'
  | 'listen-choice'
  | 'listen-type'
  | 'flashcard'
  | 'memory'
  | 'sentence-builder'

export interface EnglishActivity {
  id: string

  type: EnglishActivityType

  title: string

  instruction: string

  points: number

  difficulty: 'easy' | 'medium' | 'hard'

  question: string

  /** Rasm */
  imageUrl?: string

  emoji?: string

  /** Audio */
  audioUrl?: string

  options?: EnglishActivityOption[]

  /** Matching uchun */
  pairs?: EnglishMatchPair[]

  /** Word order uchun */
  words?: string[]

  /** Fill gap uchun */
  sentence?: string

  /** To'g'ri javob */
  correctAnswer: string | string[]

  explanation?: string

  hint?: string
}

export interface EnglishActivityOption {
  id: string

  text: string

  imageUrl?: string

  emoji?: string
}

export interface EnglishMatchPair {
  left: string
  right: string

  leftImageUrl?: string
  rightImageUrl?: string
}

/* =========================================================
   🗣️ SPEAKING
========================================================= */

export type SpeakingMode =
  | 'listen-repeat'
  | 'read-aloud'
  | 'conversation'
  | 'pronunciation'

export interface EnglishSpeaking {
  id: string

  title: string

  instruction: string

  mode: SpeakingMode

  phrase: string

  translation?: string

  audioUrl?: string

  imageUrl?: string

  emoji?: string

  repetitions?: number

  targetWords?: string[]
}

/* =========================================================
   📝 LESSON TEST
========================================================= */

export interface EnglishLessonTest {
  id: string

  title: string

  description?: string

  questionCount: number

  passingScore: number

  maxScore: number

  timeLimitMinutes?: number

  questions: EnglishTestQuestion[]
}

/* =========================================================
   ❓ TEST QUESTIONS
========================================================= */

export type EnglishTestQuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'multiple-select'
  | 'fill-gap'
  | 'translation'
  | 'reading'
  | 'listening'

export interface EnglishTestQuestion {
  id: string

  type: EnglishTestQuestionType

  question: string

  points: number

  options?: EnglishTestOption[]

  correctAnswer: string | string[]

  explanation: string

  hint?: string

  imageUrl?: string

  audioUrl?: string

  passage?: string

  emoji?: string
}

export interface EnglishTestOption {
  id: string

  text: string

  emoji?: string

  imageUrl?: string
}

/* =========================================================
   🏆 REWARDS
========================================================= */

export interface EnglishLessonReward {
  xp: number

  bonusXp?: number

  stars: number

  badgeId?: string

  badgeTitle?: string

  unlockNextLesson: boolean
}

/* =========================================================
   👤 STUDENT PROGRESS
========================================================= */

export interface EnglishStudentProgress {
  userId: string

  currentLevel: EnglishLevelId

  currentCourseId?: string

  currentLessonId?: string

  completedLessons: string[]

  unlockedLessons: string[]

  completedCourses: string[]

  /** Umumiy XP */
  totalXp: number

  /** Ketma-ket o'qish kunlari */
  streak: number

  longestStreak: number

  /** Oxirgi faoliyat */
  lastActivityAt?: string

  /** Badge'lar */
  badges: string[]

  /** Vocabulary progress */
  learnedWords: string[]

  /** Speaking progress */
  speakingCompleted: string[]

  /** Test statistikasi */
  testsCompleted: number

  testsPassed: number

  averageScore: number
}

/* =========================================================
   📊 LESSON PROGRESS
========================================================= */

export interface EnglishLessonProgress {
  lessonId: string

  userId: string

  status: LessonStatus

  /** Darsni o'qish progressi */
  readingCompleted: boolean

  /** Mashqlar */
  activitiesCompleted: string[]

  /** Speaking */
  speakingCompleted: boolean

  /** Test */
  testStarted: boolean
  testCompleted: boolean
  testPassed: boolean

  score?: number

  correctAnswers?: number
  totalQuestions?: number

  attempts: number

  xpEarned: number

  startedAt?: string
  completedAt?: string
}

/* =========================================================
   📝 TEST SESSION
========================================================= */

export interface EnglishTestSession {
  id: string

  userId: string

  lessonId: string

  startedAt: string

  finishedAt?: string

  currentQuestion: number

  answers: EnglishAnswer[]

  score: number

  correctAnswers: number

  totalQuestions: number

  passed: boolean

  completed: boolean
}

export interface EnglishAnswer {
  questionId: string

  answer: string | string[]

  correct: boolean

  points: number

  answeredAt: string
}

/* =========================================================
   🔥 STREAK
========================================================= */

export interface EnglishStreak {
  current: number

  longest: number

  lastActiveDate?: string

  isActiveToday: boolean

  nextMilestone?: number
}

/* =========================================================
   🏅 BADGES
========================================================= */

export type EnglishBadgeCategory =
  | 'learning'
  | 'streak'
  | 'vocabulary'
  | 'grammar'
  | 'speaking'
  | 'testing'
  | 'special'

export interface EnglishBadge {
  id: string

  title: string

  description: string

  emoji: string

  category: EnglishBadgeCategory

  xpReward: number

  requirement: string

  unlocked: boolean

  unlockedAt?: string
}

/* =========================================================
   ⭐ XP EVENTS
========================================================= */

export type EnglishXpEventType =
  | 'lesson-complete'
  | 'activity-complete'
  | 'test-pass'
  | 'perfect-test'
  | 'streak'
  | 'badge'
  | 'daily-goal'
  | 'bonus'

export interface EnglishXpEvent {
  id: string

  type: EnglishXpEventType

  amount: number

  title: string

  description?: string

  createdAt: string
}

/* =========================================================
   🎯 DAILY GOAL
========================================================= */

export interface EnglishDailyGoal {
  targetXp: number

  earnedXp: number

  targetLessons: number

  completedLessons: number

  targetMinutes: number

  completedMinutes: number

  completed: boolean

  date: string
}

/* =========================================================
   🧭 ACADEMY DASHBOARD
========================================================= */

export interface EnglishAcademyDashboard {
  level: EnglishLevelId

  levelTitle: string

  levelProgress: number

  currentLesson?: EnglishLesson

  nextLesson?: EnglishLesson

  totalLessons: number

  completedLessons: number

  totalXp: number

  streak: EnglishStreak

  dailyGoal: EnglishDailyGoal

  badges: EnglishBadge[]

  recentTests: EnglishTestResult[]
}

/* =========================================================
   📈 TEST RESULT
========================================================= */

export interface EnglishTestResult {
  id: string

  lessonId: string

  userId: string

  score: number

  maxScore: number

  percentage: number

  correctAnswers: number

  totalQuestions: number

  passed: boolean

  attemptNumber: number

  completedAt: string
}

/* =========================================================
   🔓 LESSON UNLOCK SYSTEM
========================================================= */

export interface EnglishUnlockRule {
  lessonId: string

  requiresLessonId?: string

  requiresPassedTest?: boolean

  minimumScore?: number

  requiresActivities?: boolean

  minimumActivityCompletion?: number

  requiresSpeaking?: boolean
}

/* =========================================================
   🎮 GAME RESULT
========================================================= */

export interface EnglishGameResult {
  activityId: string

  score: number

  maxScore: number

  correct: boolean

  attempts: number

  completedAt: string

  xpEarned: number
}

/* =========================================================
   🎨 UI THEME
========================================================= */

export type EnglishTheme =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'yellow'

export interface EnglishLessonTheme {
  theme: EnglishTheme

  emoji: string

  gradient: string

  accent: string
}

/* =========================================================
   🔊 MEDIA
========================================================= */

export interface EnglishMedia {
  type: 'image' | 'audio' | 'video'

  url: string

  title?: string

  alt?: string

  duration?: number
}

/* =========================================================
   🧠 LEARNING SESSION
========================================================= */

export interface EnglishLearningSession {
  userId: string

  lessonId: string

  startedAt: string

  currentSection:
    | 'welcome'
    | 'vocabulary'
    | 'grammar'
    | 'examples'
    | 'activities'
    | 'speaking'
    | 'test'
    | 'result'

  completedSections: string[]

  xpEarned: number

  finished: boolean
}

/* =========================================================
   📱 NAVIGATION
========================================================= */

export type EnglishScreen =
  | 'academy'
  | 'courses'
  | 'lessons'
  | 'lesson'
  | 'activity'
  | 'speaking'
  | 'test'
  | 'result'
  | 'progress'
  | 'badges'

/* =========================================================
   🛠️ HELPERS
========================================================= */

/**
 * Dars o'tilgan hisoblanishi uchun minimal test foizi.
 */
export const ENGLISH_PASS_PERCENT = 70

/**
 * Foundation kursidagi standart darslar soni.
 */
export const FOUNDATION_LESSON_COUNT = 30

/**
 * Standart dars testidagi savollar soni.
 */
export const DEFAULT_ENGLISH_TEST_QUESTIONS = 10

/**
 * Standart dars davomiyligi.
 */
export const DEFAULT_LESSON_MINUTES = 12

/**
 * Bitta dars uchun standart XP.
 */
export const DEFAULT_LESSON_XP = 100

/**
 * Mukammal test uchun bonus XP.
 */
export const PERFECT_TEST_BONUS_XP = 50

/**
 * Kunlik minimal XP maqsadi.
 */
export const DEFAULT_DAILY_XP_GOAL = 100

/* =========================================================
   🧮 UTILITY TYPES
========================================================= */

export type EnglishId = string

export type EnglishScore = number

export type EnglishPercentage = number

export type EnglishXp = number

export type EnglishMinutes = number

/* =========================================================
   🧱 TYPE GUARDS
========================================================= */

/**
 * Lesson haqiqatan ham o'tilganmi?
 */
export function isLessonCompleted(
  progress: EnglishLessonProgress,
): boolean {
  return (
    progress.status === 'completed' &&
    progress.testCompleted &&
    progress.testPassed
  )
}

/**
 * Keyingi dars ochilishi mumkinmi?
 */
export function canUnlockNextLesson(
  progress: EnglishLessonProgress,
): boolean {
  return (
    progress.status === 'completed' &&
    progress.testPassed
  )
}

/**
 * Testdan o'tilganmi?
 */
export function isEnglishTestPassed(
  score: number,
  maxScore: number,
): boolean {
  if (maxScore <= 0) return false

  const percentage = (score / maxScore) * 100

  return percentage >= ENGLISH_PASS_PERCENT
}

/**
 * Foizni hisoblash.
 */
export function calculateEnglishPercentage(
  correct: number,
  total: number,
): number {
  if (total <= 0) return 0

  return Math.round((correct / total) * 100)
}

/**
 * Progress foizini hisoblash.
 */
export function calculateLessonProgress(
  completedSections: number,
  totalSections: number,
): number {
  if (totalSections <= 0) return 0

  return Math.min(
    100,
    Math.round((completedSections / totalSections) * 100),
  )
}

/* =========================================================
 * 🇬🇧 END OF ENGLISH ACADEMY CORE TYPES
 * ========================================================= */
