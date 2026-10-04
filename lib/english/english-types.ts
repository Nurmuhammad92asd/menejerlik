/* =========================================================
 * 🇬🇧 MENEJERLIK BY NURMUHAMMAD
 * ENGLISH ACADEMY — CORE TYPES v2
 * =========================================================
 *
 * PROFESSIONAL ENGLISH LEARNING ENGINE
 *
 * English Academy
 *   └── Level
 *        └── Course
 *             └── Unit
 *                  └── Lesson
 *                       ├── Objective
 *                       ├── Vocabulary
 *                       ├── Grammar
 *                       ├── Sentence Structure
 *                       ├── Explanation
 *                       ├── Examples
 *                       ├── Reading
 *                       ├── Pronunciation
 *                       ├── Activities
 *                       ├── Speaking
 *                       ├── Review
 *                       ├── Challenge
 *                       └── Final Test
 *
 * PRINCIPLES
 * ---------------------------------------------------------
 * 1. Darslar ketma-ket ochiladi.
 * 2. O'quvchi avval darsni o'rganadi.
 * 3. Vocabulary + Grammar + Practice.
 * 4. Testdan o'tgandan keyin keyingi dars ochiladi.
 * 5. Grammar alohida mastery bilan kuzatiladi.
 * 6. XP, streak, badges va achievements mavjud.
 * 7. Foundation → Pre-A1 → A1 → A2 → B1 → B2 → C1 → C2.
 * ========================================================= */


/* =========================================================
   🎓 LEVELS
========================================================= */

export type EnglishLevelId =
  | 'foundation'
  | 'pre-a1'
  | 'elementary'
  | 'pre-intermediate'
  | 'intermediate'
  | 'upper-intermediate'
  | 'advanced'

export type CEFRLevel =
  | 'pre-a1'
  | 'a1'
  | 'a2'
  | 'b1'
  | 'b2'
  | 'c1'
  | 'c2'

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

  cefr?: CEFRLevel

  lessonCount: number

  estimatedMinutes: number

  status: EnglishLevelStatus

  color?: string

  gradient?: string

  goals: string[]

  skills: EnglishSkill[]

  prerequisites?: string[]

  recommendedAge?: string

  certificateTitle?: string
}


/* =========================================================
   🧩 COURSE UNIT
========================================================= */

export interface EnglishUnit {
  id: string

  courseId: string

  unitNumber: number

  title: string

  subtitle?: string

  description: string

  emoji: string

  lessonIds: string[]

  goals: string[]

  status: EnglishLevelStatus
}


/* =========================================================
   🧠 LANGUAGE SKILLS
========================================================= */

export type EnglishSkill =
  | 'vocabulary'
  | 'grammar'
  | 'reading'
  | 'listening'
  | 'speaking'
  | 'writing'
  | 'pronunciation'
  | 'communication'


/* =========================================================
   📖 LESSON
========================================================= */

export type LessonStatus =
  | 'locked'
  | 'available'
  | 'in-progress'
  | 'completed'

export type LessonDifficulty =
  | 'starter'
  | 'easy'
  | 'medium'
  | 'hard'
  | 'challenge'

export type LessonType =
  | 'foundation'
  | 'vocabulary'
  | 'grammar'
  | 'reading'
  | 'speaking'
  | 'review'
  | 'mixed'
  | 'challenge'
  | 'assessment'


export interface EnglishLesson {
  id: string

  courseId: string

  unitId?: string

  lessonNumber: number

  title: string

  subtitle?: string

  emoji: string

  description: string

  type: LessonType

  difficulty: LessonDifficulty

  status: LessonStatus

  estimatedMinutes: number

  objectives: string[]

  skills: EnglishSkill[]

  topics: string[]

  vocabulary: EnglishVocabulary[]

  /**
   * Bir darsda bir nechta grammar point bo'lishi mumkin.
   *
   * Masalan:
   *
   * 1. Sentence Structure
   * 2. Subject Pronouns
   * 3. To Be
   */
  grammar: EnglishGrammar[]

  sentenceStructures?: EnglishSentenceStructure[]

  explanations: EnglishExplanation[]

  examples: EnglishExample[]

  pronunciation?: EnglishPronunciation[]

  reading?: EnglishReading[]

  activities: EnglishActivity[]

  speaking?: EnglishSpeaking[]

  writing?: EnglishWriting[]

  review?: EnglishReview

  challenge?: EnglishChallenge

  test: EnglishLessonTest

  rewards: EnglishLessonReward

  theme?: EnglishLessonTheme

  nextLessonId?: string

  previousLessonId?: string

  prerequisiteLessonIds?: string[]

  unlockRule?: EnglishUnlockRule
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
  | 'travel'
  | 'shopping'
  | 'hobby'
  | 'technology'
  | 'nature'
  | 'general'

export type WordImportance =
  | 'normal'
  | 'important'
  | 'core'
  | 'essential'

export interface EnglishVocabulary {
  id: string

  word: string

  translation: string

  pronunciation?: string

  phonetic?: string

  audioUrl?: string

  imageUrl?: string

  emoji?: string

  category: WordCategory

  partOfSpeech?: PartOfSpeech

  plural?: string

  example?: string

  exampleTranslation?: string

  synonyms?: string[]

  antonyms?: string[]

  importance?: WordImportance

  notes?: string
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
  | 'article'
  | 'auxiliary-verb'
  | 'modal-verb'
  | 'phrase'


/* =========================================================
   🧩 GRAMMAR
========================================================= */

export type GrammarCategory =
  | 'sentence-structure'
  | 'verb-to-be'
  | 'pronouns'
  | 'articles'
  | 'plural'
  | 'possessive'
  | 'demonstratives'
  | 'have-has'
  | 'there-is-are'
  | 'present-simple'
  | 'present-continuous'
  | 'past-simple'
  | 'future'
  | 'questions'
  | 'negatives'
  | 'modals'
  | 'prepositions'
  | 'adjectives'
  | 'adverbs'
  | 'conjunctions'
  | 'countable'
  | 'uncountable'
  | 'comparatives'
  | 'other'

export type GrammarDifficulty =
  | 'starter'
  | 'easy'
  | 'medium'
  | 'hard'

export interface EnglishGrammar {
  id: string

  title: string

  category: GrammarCategory

  difficulty: GrammarDifficulty

  shortRule: string

  explanation: string

  formula?: string

  structure?: string

  whenToUse?: string[]

  positiveExamples?: EnglishGrammarExample[]

  negativeExamples?: EnglishGrammarExample[]

  questionExamples?: EnglishGrammarExample[]

  shortAnswers?: EnglishGrammarExample[]

  examples: EnglishGrammarExample[]

  commonMistakes?: EnglishGrammarMistake[]

  tips?: string[]

  memoryTip?: string

  relatedGrammarIds?: string[]
}


/* =========================================================
   🔎 GRAMMAR EXAMPLE
========================================================= */

export interface EnglishGrammarExample {
  english: string

  uzbek: string

  highlight?: string

  explanation?: string

  type?: 'positive' | 'negative' | 'question' | 'answer'
}


/* =========================================================
   ⚠️ COMMON GRAMMAR MISTAKE
========================================================= */

export interface EnglishGrammarMistake {
  wrong: string

  correct: string

  explanation: string
}


/* =========================================================
   🧱 SENTENCE STRUCTURE
========================================================= */

export type SentenceStructureType =
  | 'svo'
  | 'subject-be-adjective'
  | 'subject-be-noun'
  | 'subject-have-object'
  | 'subject-verb-place'
  | 'subject-verb-time'
  | 'subject-verb-object-place'
  | 'subject-verb-object-time'
  | 'question'
  | 'negative'
  | 'custom'

export interface EnglishSentenceStructure {
  id: string

  title: string

  type: SentenceStructureType

  formula: string

  explanation: string

  parts: EnglishSentencePart[]

  examples: EnglishSentenceStructureExample[]

  practice?: EnglishSentenceBuilder[]
}


/* =========================================================
   🧩 SENTENCE PART
========================================================= */

export interface EnglishSentencePart {
  label: string

  name: string

  description: string

  color?: string
}


/* =========================================================
   ✍️ SENTENCE STRUCTURE EXAMPLE
========================================================= */

export interface EnglishSentenceStructureExample {
  english: string

  uzbek: string

  breakdown?: string[]

  highlight?: string
}


/* =========================================================
   🧱 SENTENCE BUILDER
========================================================= */

export interface EnglishSentenceBuilder {
  id: string

  words: string[]

  correctOrder: string[]

  translation?: string

  explanation?: string
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
  | 'strategy'
  | 'summary'

export interface EnglishExplanation {
  id: string

  type: ExplanationType

  title: string

  content: string

  emoji?: string

  imageUrl?: string

  highlights?: string[]

  examples?: string[]
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

  highlight?: string

  explanation?: string

  difficulty?: LessonDifficulty

  category?: 'grammar' | 'vocabulary' | 'speaking' | 'daily-life'
}


/* =========================================================
   🔊 PRONUNCIATION
========================================================= */

export interface EnglishPronunciation {
  id: string

  wordOrPhrase: string

  pronunciation: string

  explanation: string

  commonMistake?: string

  audioUrl?: string

  example?: string

  translation?: string
}


/* =========================================================
   📖 READING
========================================================= */

export interface EnglishReading {
  id: string

  title: string

  level: LessonDifficulty

  passage: string

  translation?: string

  vocabulary?: EnglishVocabulary[]

  questions: EnglishReadingQuestion[]

  estimatedMinutes?: number
}

export interface EnglishReadingQuestion {
  id: string

  question: string

  options?: EnglishTestOption[]

  correctAnswer: string | string[]

  explanation: string
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
  | 'categorize'
  | 'odd-one-out'
  | 'error-correction'

export interface EnglishActivity {
  id: string

  type: EnglishActivityType

  title: string

  instruction: string

  points: number

  difficulty: LessonDifficulty

  question: string

  imageUrl?: string

  emoji?: string

  audioUrl?: string

  options?: EnglishActivityOption[]

  pairs?: EnglishMatchPair[]

  words?: string[]

  sentence?: string

  correctAnswer: string | string[]

  explanation?: string

  hint?: string

  translation?: string
}


/* =========================================================
   🎯 ACTIVITY OPTION
========================================================= */

export interface EnglishActivityOption {
  id: string

  text: string

  imageUrl?: string

  emoji?: string
}


/* =========================================================
   🔗 MATCHING
========================================================= */

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
  | 'self-introduction'
  | 'role-play'

export interface EnglishSpeaking {
  id: string

  title: string

  instruction: string

  mode: SpeakingMode

  phrase?: string

  dialogue?: EnglishDialogueLine[]

  translation?: string

  audioUrl?: string

  imageUrl?: string

  emoji?: string

  repetitions?: number

  targetWords?: string[]

  targetGrammar?: string[]

  successCriteria?: string[]
}


/* =========================================================
   💬 DIALOGUE
========================================================= */

export interface EnglishDialogueLine {
  speaker: string

  text: string

  translation?: string

  audioUrl?: string

  highlight?: string
}


/* =========================================================
   ✍️ WRITING
========================================================= */

export interface EnglishWriting {
  id: string

  title: string

  instruction: string

  prompt: string

  minimumWords?: number

  targetGrammar?: string[]

  targetVocabulary?: string[]

  example?: string

  checklist?: string[]
}


/* =========================================================
   🔄 REVIEW
========================================================= */

export interface EnglishReview {
  id: string

  title: string

  description: string

  vocabularyIds?: string[]

  grammarIds?: string[]

  activityIds?: string[]

  questions: EnglishTestQuestion[]
}


/* =========================================================
   🏆 CHALLENGE
========================================================= */

export interface EnglishChallenge {
  id: string

  title: string

  description: string

  difficulty: 'hard' | 'challenge'

  timeLimitMinutes?: number

  tasks: EnglishChallengeTask[]

  bonusXp: number
}

export interface EnglishChallengeTask {
  id: string

  instruction: string

  type:
    | 'translate'
    | 'build-sentence'
    | 'complete-dialogue'
    | 'correct-mistake'
    | 'choose'
    | 'write'

  prompt: string

  options?: string[]

  correctAnswer: string | string[]

  explanation?: string
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

  retryAllowed: boolean

  randomizeQuestions?: boolean

  randomizeOptions?: boolean
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
  | 'sentence-order'
  | 'grammar-correction'

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

  grammarPointId?: string

  vocabularyId?: string
}


/* =========================================================
   🎯 TEST OPTION
========================================================= */

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

  perfectScoreBonus?: number
}


/* =========================================================
   👤 STUDENT PROGRESS
========================================================= */

export interface EnglishStudentProgress {
  userId: string

  currentLevel: EnglishLevelId

  currentCourseId?: string

  currentUnitId?: string

  currentLessonId?: string

  completedLessons: string[]

  unlockedLessons: string[]

  completedCourses: string[]

  completedUnits: string[]

  totalXp: number

  streak: number

  longestStreak: number

  lastActivityAt?: string

  badges: string[]

  learnedWords: string[]

  masteredGrammar: string[]

  speakingCompleted: string[]

  readingCompleted: string[]

  writingCompleted: string[]

  testsCompleted: number

  testsPassed: number

  testsFailed: number

  averageScore: number

  bestScore: number

  totalStudyMinutes: number

  lessonsStarted: number

  perfectTests: number
}


/* =========================================================
   📊 LESSON PROGRESS
========================================================= */

export interface EnglishLessonProgress {
  lessonId: string

  userId: string

  status: LessonStatus

  readingCompleted: boolean

  vocabularyCompleted: boolean

  grammarCompleted: boolean

  examplesCompleted: boolean

  activitiesCompleted: string[]

  speakingCompleted: boolean

  writingCompleted: boolean

  reviewCompleted: boolean

  challengeCompleted: boolean

  testStarted: boolean

  testCompleted: boolean

  testPassed: boolean

  score?: number

  percentage?: number

  correctAnswers?: number

  totalQuestions?: number

  attempts: number

  xpEarned: number

  startedAt?: string

  completedAt?: string

  lastActivityAt?: string
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

  maxScore: number

  correctAnswers: number

  totalQuestions: number

  percentage: number

  passed: boolean

  completed: boolean

  attemptNumber: number
}


/* =========================================================
   ✏️ ANSWER
========================================================= */

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
  | 'reading'
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
  | 'lesson-start'
  | 'lesson-complete'
  | 'activity-complete'
  | 'test-pass'
  | 'perfect-test'
  | 'streak'
  | 'badge'
  | 'daily-goal'
  | 'vocabulary'
  | 'grammar'
  | 'speaking'
  | 'reading'
  | 'writing'
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

  courseProgress: number

  currentLesson?: EnglishLesson

  nextLesson?: EnglishLesson

  totalLessons: number

  completedLessons: number

  totalXp: number

  streak: EnglishStreak

  dailyGoal: EnglishDailyGoal

  badges: EnglishBadge[]

  recentTests: EnglishTestResult[]

  vocabularyMastery: number

  grammarMastery: number

  speakingMastery: number

  readingMastery: number
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

  perfect: boolean

  attemptNumber: number

  completedAt: string
}


/* =========================================================
   🔓 UNLOCK SYSTEM
========================================================= */

export interface EnglishUnlockRule {
  lessonId: string

  requiresLessonId?: string

  requiresPassedTest?: boolean

  minimumScore?: number

  requiresActivities?: boolean

  minimumActivityCompletion?: number

  requiresSpeaking?: boolean

  requiresVocabulary?: boolean

  minimumVocabularyCompletion?: number

  requiresGrammar?: boolean

  minimumGrammarCompletion?: number
}


/* =========================================================
   🎮 GAME RESULT
========================================================= */

export interface EnglishGameResult {
  activityId: string

  score: number

  maxScore: number

  percentage: number

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
  | 'cyan'

export interface EnglishLessonTheme {
  theme: EnglishTheme

  emoji: string

  gradient: string

  accent: string

  background?: string
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

export type EnglishLearningSection =
  | 'welcome'
  | 'objective'
  | 'vocabulary'
  | 'grammar'
  | 'sentence-structure'
  | 'examples'
  | 'pronunciation'
  | 'reading'
  | 'activities'
  | 'speaking'
  | 'writing'
  | 'review'
  | 'challenge'
  | 'test'
  | 'result'

export interface EnglishLearningSession {
  userId: string

  lessonId: string

  startedAt: string

  currentSection: EnglishLearningSection

  completedSections: EnglishLearningSection[]

  xpEarned: number

  finished: boolean
}


/* =========================================================
   📱 NAVIGATION
========================================================= */

export type EnglishScreen =
  | 'academy'
  | 'courses'
  | 'units'
  | 'lessons'
  | 'lesson'
  | 'activity'
  | 'speaking'
  | 'writing'
  | 'test'
  | 'result'
  | 'progress'
  | 'badges'
  | 'grammar'
  | 'vocabulary'


/* =========================================================
   📊 MASTERY
========================================================= */

export interface EnglishMastery {
  vocabulary: number

  grammar: number

  reading: number

  listening: number

  speaking: number

  writing: number

  pronunciation: number

  overall: number
}


/* =========================================================
   🧠 GRAMMAR MASTERY
========================================================= */

export interface EnglishGrammarProgress {
  grammarId: string

  userId: string

  attempts: number

  correctAnswers: number

  totalAnswers: number

  mastery: number

  lastPracticedAt?: string

  mastered: boolean
}


/* =========================================================
   📚 VOCABULARY PROGRESS
========================================================= */

export interface EnglishVocabularyProgress {
  wordId: string

  userId: string

  seen: number

  correct: number

  incorrect: number

  mastery: number

  learned: boolean

  lastReviewedAt?: string
}


/* =========================================================
   🏆 COURSE RESULT
========================================================= */

export interface EnglishCourseResult {
  courseId: string

  userId: string

  completedLessons: number

  totalLessons: number

  progress: number

  averageScore: number

  totalXp: number

  completed: boolean

  completedAt?: string

  certificateUnlocked: boolean
}


/* =========================================================
   🎓 CERTIFICATE
========================================================= */

export interface EnglishCertificate {
  id: string

  userId: string

  courseId: string

  title: string

  level: EnglishLevelId

  cefr?: CEFRLevel

  score: number

  issuedAt: string

  certificateNumber: string
}


/* =========================================================
   🔔 LEARNING NOTIFICATION
========================================================= */

export type EnglishNotificationType =
  | 'lesson-unlocked'
  | 'lesson-completed'
  | 'test-result'
  | 'streak'
  | 'badge'
  | 'daily-goal'
  | 'course-completed'

export interface EnglishNotification {
  id: string

  type: EnglishNotificationType

  title: string

  message: string

  emoji?: string

  read: boolean

  createdAt: string
}


/* =========================================================
   ⚙️ ACADEMY SETTINGS
========================================================= */

export interface EnglishAcademySettings {
  soundEnabled: boolean

  pronunciationEnabled: boolean

  animationsEnabled: boolean

  showTranslations: boolean

  dailyReminder: boolean

  dailyGoalXp: number

  preferredDifficulty: LessonDifficulty
}


/* =========================================================
   🧮 CONSTANTS
========================================================= */

/**
 * Darsni muvaffaqiyatli tugatish uchun minimal natija.
 */
export const ENGLISH_PASS_PERCENT = 70

/**
 * Foundation kursi.
 *
 * 30 ta professional dars.
 */
export const FOUNDATION_LESSON_COUNT = 30

/**
 * Pre-A1 kursi.
 *
 * Foundation'dan keyingi mustahkamlash bosqichi.
 */
export const PRE_A1_LESSON_COUNT = 30

/**
 * Standart test savollari.
 */
export const DEFAULT_ENGLISH_TEST_QUESTIONS = 15

/**
 * Standart dars davomiyligi.
 */
export const DEFAULT_LESSON_MINUTES = 20

/**
 * Standart dars XP.
 */
export const DEFAULT_LESSON_XP = 100

/**
 * Mukammal test bonusi.
 */
export const PERFECT_TEST_BONUS_XP = 50

/**
 * Challenge bonusi.
 */
export const CHALLENGE_BONUS_XP = 30

/**
 * Kunlik minimal XP.
 */
export const DEFAULT_DAILY_XP_GOAL = 100

/**
 * Grammar mastery chegarasi.
 */
export const GRAMMAR_MASTERY_THRESHOLD = 80

/**
 * Vocabulary mastery chegarasi.
 */
export const VOCABULARY_MASTERY_THRESHOLD = 80

/**
 * Speaking mastery chegarasi.
 */
export const SPEAKING_MASTERY_THRESHOLD = 75


/* =========================================================
   🛠️ TYPE GUARDS / HELPERS
========================================================= */

/**
 * Dars haqiqatan to'liq tugatilganmi?
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
 * Keyingi darsni ochish mumkinmi?
 */
export function canUnlockNextLesson(
  progress: EnglishLessonProgress,
): boolean {
  return (
    progress.status === 'completed' &&
    progress.testCompleted &&
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


/**
 * Mastery hisoblash.
 */
export function calculateMastery(
  correct: number,
  total: number,
): number {
  if (total <= 0) return 0

  return Math.min(
    100,
    Math.round((correct / total) * 100),
  )
}


/**
 * Grammar mastery.
 */
export function isGrammarMastered(
  correct: number,
  total: number,
): boolean {
  return (
    calculateMastery(correct, total) >=
    GRAMMAR_MASTERY_THRESHOLD
  )
}


/**
 * Vocabulary mastery.
 */
export function isVocabularyMastered(
  correct: number,
  total: number,
): boolean {
  return (
    calculateMastery(correct, total) >=
    VOCABULARY_MASTERY_THRESHOLD
  )
}


/**
 * Speaking mastery.
 */
export function isSpeakingMastered(
  score: number,
): boolean {
  return score >= SPEAKING_MASTERY_THRESHOLD
}


/**
 * Course progress.
 */
export function calculateCourseProgress(
  completedLessons: number,
  totalLessons: number,
): number {
  if (totalLessons <= 0) return 0

  return Math.min(
    100,
    Math.round(
      (completedLessons / totalLessons) * 100,
    ),
  )
}


/**
 * XP hisoblash.
 */
export function calculateLessonXp(
  baseXp: number,
  scorePercentage: number,
  perfectBonus = PERFECT_TEST_BONUS_XP,
): number {
  if (scorePercentage >= 100) {
    return baseXp + perfectBonus
  }

  if (scorePercentage >= 90) {
    return baseXp + Math.round(perfectBonus * 0.6)
  }

  if (scorePercentage >= ENGLISH_PASS_PERCENT) {
    return baseXp
  }

  return 0
}


/**
 * Level/course statusini aniqlash.
 */
export function getEnglishStatus(
  completed: boolean,
  unlocked: boolean,
  inProgress: boolean,
): EnglishLevelStatus {
  if (completed) return 'completed'

  if (inProgress) return 'in-progress'

  if (unlocked) return 'available'

  return 'locked'
}


/* =========================================================
 * 🇬🇧 END OF ENGLISH ACADEMY CORE TYPES v2
 * ========================================================= */
