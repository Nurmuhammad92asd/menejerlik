import {
  CATEGORIES,
  getLevelQuestions,
  getModuleById,
  getTopicById,
  MIXED_COUNT,
  MIXED_ID,
  MIXED_QUESTIONS,
  type Question,
} from './quiz-data'

/*
 * =========================================================
 * TYPES
 * =========================================================
 */

export type QuizLevel =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'case'

export type QuizSession = {
  categoryId: string
  topicId: string
  level: QuizLevel
  title: string
  questions: Question[]
  startedAt: number
}

export type AnswerRecord = {
  question: Question
  selected: number
}

export type QuizResult = {
  categoryId: string
  topicId: string
  level: QuizLevel
  title: string
  answers: AnswerRecord[]
  correct: number
  total: number
  durationSec: number
}

/*
 * =========================================================
 * RANDOMIZATION
 * =========================================================
 */

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

/*
 * Savol variantlarini ham aralashtiramiz.
 *
 * Masalan:
 *
 * A — to‘g‘ri
 *
 * test boshlanganda:
 *
 * C — to‘g‘ri
 *
 * bo‘lishi mumkin.
 *
 * Bu yodlab olishni kamaytiradi.
 */

function shuffleOptions(
  question: Question,
): Question {
  const order = shuffle(
    question.options.map((_, index) => index),
  )

  return {
    ...question,

    options: order.map(
      (index) => question.options[index],
    ),

    answer: order.indexOf(question.answer),
  }
}

/*
 * =========================================================
 * TITLES
 * =========================================================
 */

export function getLevelTitle(
  level: QuizLevel,
): string {
  switch (level) {
    case 'easy':
      return 'Oson'

    case 'medium':
      return 'O‘rta'

    case 'hard':
      return 'Qiyin'

    case 'case':
      return 'Keys'

    default:
      return 'Test'
  }
}

export function getLevelIcon(
  level: QuizLevel,
): string {
  switch (level) {
    case 'easy':
      return '🟢'

    case 'medium':
      return '🟡'

    case 'hard':
      return '🔴'

    case 'case':
      return '🔵'

    default:
      return '📝'
  }
}

export function getCategoryTitle(
  id: string,
): string {
  if (id === MIXED_ID) {
    return 'Aralash test'
  }

  return (
    CATEGORIES.find(
      (category) => category.id === id,
    )?.title ?? 'Test'
  )
}

export function getTopicTitle(
  topicId: string,
): string {
  return (
    getTopicById(topicId)?.title ??
    'Mavzu'
  )
}

/*
 * =========================================================
 * CREATE TOPIC QUIZ SESSION
 * =========================================================
 */

export function createTopicSession(
  topicId: string,
  level: QuizLevel,
): QuizSession {
  const topic = getTopicById(topicId)

  const questions = getLevelQuestions(
    topicId,
    level,
  )

  const preparedQuestions = shuffle(
    questions,
  ).map(shuffleOptions)

  return {
    categoryId:
      topicId.split('t')[0] || 'unknown',

    topicId,

    level,

    title: topic
      ? `${topic.title} — ${getLevelTitle(level)}`
      : `${getLevelTitle(level)} test`,

    questions: preparedQuestions,

    startedAt: Date.now(),
  }
}

/*
 * =========================================================
 * CREATE MODULE SESSION
 * =========================================================
 *
 * Agar keyinchalik butun modul bo‘yicha
 * test ishlash kerak bo‘lsa, shu funksiya
 * ishlatiladi.
 */

export function createModuleSession(
  moduleId: string,
): QuizSession {
  const module = getModuleById(moduleId)

  const questions =
    module?.topics.flatMap((topic) => [
      ...topic.levels.easy,
      ...topic.levels.medium,
      ...topic.levels.hard,
      ...topic.levels.case,
    ]) ?? []

  return {
    categoryId: moduleId,
    topicId: '',
    level: 'medium',

    title:
      module?.title ??
      'Modul testi',

    questions: shuffle(
      questions,
    ).map(shuffleOptions),

    startedAt: Date.now(),
  }
}

/*
 * =========================================================
 * MIXED SESSION
 * =========================================================
 */

export function createMixedSession(): QuizSession {
  const questions = shuffle(
    MIXED_QUESTIONS,
  )
    .slice(0, MIXED_COUNT)
    .map(shuffleOptions)

  return {
    categoryId: MIXED_ID,
    topicId: '',
    level: 'medium',
    title: 'Aralash test',
    questions,
    startedAt: Date.now(),
  }
}

/*
 * =========================================================
 * BACKWARD COMPATIBILITY
 * =========================================================
 *
 * Eski komponentlarda createSession()
 * ishlatilayotgan bo‘lsa, ilova buzilmasligi
 * uchun bu funksiya saqlanadi.
 */

export function createSession(
  categoryId: string,
): QuizSession {
  if (categoryId === MIXED_ID) {
    return createMixedSession()
  }

  return createModuleSession(
    categoryId,
  )
}

/*
 * =========================================================
 * FORMAT DURATION
 * =========================================================
 */

export function formatDuration(
  totalSec: number,
): string {
  const minutes = Math.floor(
    totalSec / 60,
  )

  const seconds = totalSec % 60

  return `${minutes}:${seconds
    .toString()
    .padStart(2, '0')}`
}

/*
 * =========================================================
 * RESULT / GRADE
 * =========================================================
 */

export function gradeFor(
  percent: number,
) {
  if (percent >= 90) {
    return {
      label: "A'lo natija!",
      note:
        "Siz mavzuni juda yaxshi o‘zlashtirgansiz.",
    }
  }

  if (percent >= 70) {
    return {
      label: 'Yaxshi natija',
      note:
        "Ozgina takrorlash bilan natijangizni yanada oshirishingiz mumkin.",
    }
  }

  if (percent >= 50) {
    return {
      label: 'Qoniqarli',
      note:
        "Xatolaringizni tahlil qiling va mavzuni yana bir bor takrorlang.",
    }
  }

  return {
    label: "Yana urinib ko‘ring",
    note:
      "Mavzuni takrorlab, testni qayta topshirishingiz mumkin.",
  }
}

/*
 * =========================================================
 * PERCENTAGE
 * =========================================================
 */

export function calculatePercentage(
  correct: number,
  total: number,
): number {
  if (total === 0) {
    return 0
  }

  return Math.round(
    (correct / total) * 100,
  )
}

/*
 * =========================================================
 * ANSWER CHECK
 * =========================================================
 */

export function isAnswerCorrect(
  question: Question,
  selected: number,
): boolean {
  return selected === question.answer
}

/*
 * =========================================================
 * LEVEL METADATA
 * =========================================================
 */

export const QUIZ_LEVELS: Array<{
  id: QuizLevel
  title: string
  icon: string
  description: string
  questionCount: number
}> = [
  {
    id: 'easy',
    title: 'Oson',
    icon: '🟢',
    description:
      'Asosiy tushunchalar va bilimlar',
    questionCount: 10,
  },

  {
    id: 'medium',
    title: 'O‘rta',
    icon: '🟡',
    description:
      'Amaliy qo‘llash va vaziyatlar',
    questionCount: 10,
  },

  {
    id: 'hard',
    title: 'Qiyin',
    icon: '🔴',
    description:
      'Tahliliy va murakkab savollar',
    questionCount: 10,
  },

  {
    id: 'case',
    title: 'Keys',
    icon: '🔵',
    description:
      'Real boshqaruv vaziyatlari',
    questionCount: 10,
  },
]
