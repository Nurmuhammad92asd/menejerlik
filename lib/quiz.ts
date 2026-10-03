import {
  CATEGORIES,
  getLevelQuestions,
  getModuleById,
  getTopicById,
  MIXED_COUNT,
  MIXED_ID,
  type Question,
} from './quiz-data'

/*
 * =========================================================
 * TYPES
 * =========================================================
 */

export type QuizLevel = 'easy' | 'medium' | 'hard' | 'case'

export const QUIZ_LEVEL_ORDER: QuizLevel[] = [
  'easy',
  'medium',
  'hard',
  'case',
]

/** Savol + (aralash testda) qaysi daraja/mavzudan kelgani */
export type SessionQuestion = Question & {
  level?: QuizLevel
  topicId?: string
}

export type QuizSession = {
  categoryId: string
  topicId: string
  level: QuizLevel
  title: string
  questions: SessionQuestion[]
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

function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items]

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }

  return copy
}

function pickRandom<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

/*
 * Variantlarni aralashtiradi va to‘g‘ri javob indeksini
 * yangilaydi (A — to‘g‘ri bo‘lsa, test paytida C bo‘lishi mumkin).
 */
function shuffleOptions<T extends Question>(question: T): T {
  const order = shuffle(question.options.map((_, index) => index))

  return {
    ...question,
    options: order.map((index) => question.options[index]),
    answer: order.indexOf(question.answer),
  }
}

/*
 * =========================================================
 * "OLDIN TUSHGAN SAVOLLAR" XOTIRASI
 * =========================================================
 *
 * Aralash test har safar yangi savollardan tuzilishi uchun
 * tushgan savol ID lari saqlanadi. Brauzer / Telegram WebApp
 * ichida localStorage ishlaydi. Serverda esa vaqtincha
 * xotirada turadi (kerak bo‘lsa, bazaga ulash mumkin).
 */

const memoryStore = new Map<string, string>()

function readStore(key: string): string | null {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(key)
    }
  } catch {
    /* ignore */
  }

  return memoryStore.get(key) ?? null
}

function writeStore(key: string, value: string) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value)
      return
    }
  } catch {
    /* ignore */
  }

  memoryStore.set(key, value)
}

function loadSeen(scope: string): Set<string> {
  try {
    return new Set<string>(
      JSON.parse(readStore(`quiz:seen:${scope}`) ?? '[]'),
    )
  } catch {
    return new Set<string>()
  }
}

function saveSeen(scope: string, seen: Set<string>) {
  writeStore(`quiz:seen:${scope}`, JSON.stringify([...seen]))
}

/*
 * =========================================================
 * TITLES
 * =========================================================
 */

export function getLevelTitle(level: QuizLevel): string {
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

export function getLevelIcon(level: QuizLevel): string {
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

export function getCategoryTitle(id: string): string {
  if (id === MIXED_ID) {
    return 'Aralash test'
  }

  return CATEGORIES.find((category) => category.id === id)?.title ?? 'Test'
}

export function getTopicTitle(topicId: string): string {
  return getTopicById(topicId)?.title ?? 'Mavzu'
}

/*
 * =========================================================
 * CREATE TOPIC QUIZ SESSION
 * (oson 30 / o‘rta 30 / qiyin 30 / keys 10 — har safar
 *  boshqa tartibda va variantlari aralashgan)
 * =========================================================
 */

export function createTopicSession(
  topicId: string,
  level: QuizLevel,
): QuizSession {
  const topic = getTopicById(topicId)

  const questions = getLevelQuestions(topicId, level)

  const prepared: SessionQuestion[] = shuffle(questions).map((q) =>
    shuffleOptions({ ...q, level, topicId }),
  )

  return {
    categoryId: topicId.split('t')[0] || 'unknown',
    topicId,
    level,
    title: topic
      ? `${topic.title} — ${getLevelTitle(level)}`
      : `${getLevelTitle(level)} test`,
    questions: prepared,
    startedAt: Date.now(),
  }
}

/*
 * =========================================================
 * CREATE MODULE SESSION
 * =========================================================
 */

export function createModuleSession(moduleId: string): QuizSession {
  const module = getModuleById(moduleId)

  const questions: SessionQuestion[] = []

  for (const topic of module?.topics ?? []) {
    for (const level of QUIZ_LEVEL_ORDER) {
      for (const q of topic.levels[level]) {
        questions.push({ ...q, level, topicId: topic.id })
      }
    }
  }

  return {
    categoryId: moduleId,
    topicId: '',
    level: 'medium',
    title: module?.title ?? 'Modul testi',
    questions: shuffle(questions).map((q) => shuffleOptions(q)),
    startedAt: Date.now(),
  }
}

/*
 * =========================================================
 * MIXED SESSION — HAR SAFAR YANGI 30 TA
 * =========================================================
 *
 * Barcha daraja savollaridan (oson, o‘rta, qiyin, keys)
 * tasodifiy tanlanadi. Oldin tushgan savollar iloji boricha
 * takrorlanmaydi. Hammasi tushib bo‘lgach, aylanish yangidan
 * boshlanadi.
 *
 * Bo‘sh mavzular (savollari hali kiritilmagan) avtomatik
 * o‘tkazib yuboriladi.
 */

/** 30 ta savolning taqsimoti */
export const MIXED_QUOTA: Record<QuizLevel, number> = {
  easy: 10,
  medium: 9,
  hard: 8,
  case: 3,
}

function scaleQuota(count: number): Record<QuizLevel, number> {
  const total = QUIZ_LEVEL_ORDER.reduce((sum, l) => sum + MIXED_QUOTA[l], 0)
  const quota = {} as Record<QuizLevel, number>

  let used = 0

  QUIZ_LEVEL_ORDER.forEach((level, index) => {
    const isLast = index === QUIZ_LEVEL_ORDER.length - 1

    quota[level] = isLast
      ? count - used
      : Math.round((MIXED_QUOTA[level] / total) * count)

    used += quota[level]
  })

  return quota
}

export function createMixedSession(
  options: {
    topicId?: string
    moduleId?: string
    count?: number
  } = {},
): QuizSession {
  const count = options.count ?? MIXED_COUNT
  const scope = options.topicId ?? options.moduleId ?? 'all'

  // Savollar hovuzi
  const pool: SessionQuestion[] = []

  for (const module of CATEGORIES) {
    if (options.moduleId && module.id !== options.moduleId) continue

    for (const topic of module.topics) {
      if (options.topicId && topic.id !== options.topicId) continue

      for (const level of QUIZ_LEVEL_ORDER) {
        for (const q of topic.levels[level]) {
          pool.push({ ...q, level, topicId: topic.id })
        }
      }
    }
  }

  const seen = loadSeen(scope)
  const quota = scaleQuota(count)
  const picked: SessionQuestion[] = []

  for (const level of QUIZ_LEVEL_ORDER) {
    const levelPool = pool.filter((q) => q.level === level)

    let fresh = shuffle(levelPool.filter((q) => !seen.has(q.id)))

    // Yangi savollar yetmasa — shu daraja aylanishi yangidan boshlanadi
    if (fresh.length < quota[level]) {
      levelPool.forEach((q) => seen.delete(q.id))

      const rest = shuffle(levelPool.filter((q) => !fresh.includes(q)))

      fresh = [...fresh, ...rest]
    }

    picked.push(...fresh.slice(0, quota[level]))
  }

  // Biror daraja kam bo‘lsa — qolgan savollardan to‘ldiramiz
  if (picked.length < count) {
    const ids = new Set(picked.map((q) => q.id))

    picked.push(
      ...shuffle(pool.filter((q) => !ids.has(q.id))).slice(
        0,
        count - picked.length,
      ),
    )
  }

  picked.forEach((q) => seen.add(q.id))
  saveSeen(scope, seen)

  return {
    categoryId: MIXED_ID,
    topicId: options.topicId ?? '',
    level: 'medium',
    title: 'Aralash test',
    questions: shuffle(picked).map((q) => shuffleOptions(q)),
    startedAt: Date.now(),
  }
}

/*
 * =========================================================
 * BACKWARD COMPATIBILITY
 * =========================================================
 */

export function createSession(categoryId: string): QuizSession {
  if (categoryId === MIXED_ID) {
    return createMixedSession()
  }

  return createModuleSession(categoryId)
}

/*
 * =========================================================
 * FORMAT DURATION
 * =========================================================
 */

export function formatDuration(totalSec: number): string {
  const safe = Math.max(0, Math.round(totalSec))

  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

/*
 * =========================================================
 * RESULT / GRADE
 * =========================================================
 */

export function gradeFor(percent: number) {
  if (percent >= 90) {
    return {
      label: "A'lo natija!",
      note: 'Siz mavzuni juda yaxshi o‘zlashtirgansiz.',
    }
  }

  if (percent >= 70) {
    return {
      label: 'Yaxshi natija',
      note: 'Ozgina takrorlash bilan natijangizni yanada oshirishingiz mumkin.',
    }
  }

  if (percent >= 50) {
    return {
      label: 'Qoniqarli',
      note: 'Xatolaringizni tahlil qiling va mavzuni yana bir bor takrorlang.',
    }
  }

  return {
    label: 'Yana urinib ko‘ring',
    note: 'Mavzuni takrorlab, testni qayta topshirishingiz mumkin.',
  }
}

/*
 * =========================================================
 * PERCENTAGE
 * =========================================================
 */

export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) {
    return 0
  }

  return Math.round((correct / total) * 100)
}

/*
 * =========================================================
 * ANSWER CHECK
 * =========================================================
 */

export function isAnswerCorrect(question: Question, selected: number): boolean {
  return selected === question.answer
}

/*
 * =========================================================
 * FEEDBACK — to‘g‘ri bo‘lsa maqtov, xato bo‘lsa tushuntirish
 * =========================================================
 */

const PRAISE = [
  'Barakalla! 👏 To‘g‘ri topdingiz.',
  'Ajoyib! 🔥 Rahbarlik fikri sizda bor.',
  'Zo‘r! 🎯 Aniq nishonga urdingiz.',
  'Juda yaxshi! 💪 Shu ruhda davom eting.',
  'Mukammal javob! ⭐ Bilimingiz mustahkam.',
  'Tabriklayman! 🚀 Siz yo‘ldasiz.',
]

const STREAK_PRAISE: Record<number, string> = {
  3: '🔥 3 ta ketma-ket to‘g‘ri! Qizib ketdingiz!',
  5: '⚡ 5 ta ketma-ket! To‘xtatib bo‘lmayapti!',
  10: '👑 10 ta ketma-ket! Haqiqiy mutaxassis!',
}

const ENCOURAGE = [
  'Xafa bo‘lmang — xatodan o‘rganish eng tez yo‘l. 💡',
  'Hech gap yo‘q, buni endi yaxshi eslab qolasiz. 🌱',
  'Ishonch bilan davom eting, keyingisi sizniki! 💪',
]

export type Feedback = {
  correct: boolean
  title: string
  message: string
  explanation: string
  chosenText: string | null
  correctText: string
}

/**
 * @param selected  tanlangan variant indeksi (null — javob berilmadi)
 * @param streak    shu paytgacha ketma-ket to‘g‘ri javoblar soni
 */
export function getFeedback(
  question: Question,
  selected: number | null,
  streak = 0,
): Feedback {
  const correctText = question.options[question.answer]

  if (selected === question.answer) {
    return {
      correct: true,
      title: pickRandom(PRAISE),
      message: STREAK_PRAISE[streak + 1] ?? '',
      explanation: question.explanation,
      chosenText: correctText,
      correctText,
    }
  }

  const chosenText = selected === null ? null : question.options[selected]

  const why =
    selected === null
      ? 'Javob tanlanmadi. '
      : `Siz tanlagan javob («${chosenText}») bu savolga mos kelmaydi. `

  return {
    correct: false,
    title: '❌ Bu safar to‘g‘ri chiqmadi',
    message: `${why}${pickRandom(ENCOURAGE)}`,
    explanation: `To‘g‘ri javob: «${correctText}». Nima uchun: ${question.explanation}`,
    chosenText,
    correctText,
  }
}

/*
 * =========================================================
 * NATIJA TAHLILI (daraja bo‘yicha, eng zaif joy, maslahat)
 * =========================================================
 */

export type LevelStat = {
  level: QuizLevel
  correct: number
  total: number
  percent: number
}

export type ResultSummary = {
  percent: number
  byLevel: LevelStat[]
  weakest: QuizLevel | null
  headline: string
  advice: string
}

export function summarizeResult(result: QuizResult): ResultSummary {
  const percent = calculatePercentage(result.correct, result.total)

  const byLevel: LevelStat[] = QUIZ_LEVEL_ORDER.map((level) => {
    const list = result.answers.filter(
      (a) => (a.question as SessionQuestion).level === level,
    )

    const correct = list.filter((a) => isAnswerCorrect(a.question, a.selected))
      .length

    return {
      level,
      correct,
      total: list.length,
      percent: calculatePercentage(correct, list.length),
    }
  }).filter((stat) => stat.total > 0)

  const weakest = byLevel.length
    ? [...byLevel].sort((a, b) => a.percent - b.percent)[0].level
    : null

  let headline: string
  let advice: string

  if (percent >= 90) {
    headline = '🏆 A’lo natija! Siz tayyorsiz.'
    advice =
      'Bilimingiz juda yuqori. Endi qiyin va keys savollarda o‘zingizni sinab turing.'
  } else if (percent >= 75) {
    headline = '🎉 Yaxshi natija!'
    advice =
      'Asosiy tushunchalarni yaxshi bilasiz. Xato qilgan savollaringiz izohini qayta o‘qib chiqing.'
  } else if (percent >= 55) {
    headline = '👍 O‘rtacha natija — o‘sish uchun joy bor.'
    advice =
      'Tamoyillar va jarayonlar ketma-ketligini (attestatsiya, akkreditatsiya) qayta takrorlang.'
  } else {
    headline = '📚 Hozircha boshlang‘ich bosqich.'
    advice =
      'Bu normal. Avval «Oson» darajani 80% dan yuqori natijaga yetkazing, so‘ng «O‘rta»ga o‘ting. Har bir izohni o‘qishni unutmang.'
  }

  if (weakest && byLevel.length > 1) {
    advice += ` Eng zaif joyingiz: ${getLevelIcon(weakest)} ${getLevelTitle(weakest)} daraja.`
  }

  return { percent, byLevel, weakest, headline, advice }
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
    description: 'Asosiy tushunchalar va bilimlar',
    questionCount: 30,
  },

  {
    id: 'medium',
    title: 'O‘rta',
    icon: '🟡',
    description: 'Amaliy qo‘llash va vaziyatlar',
    questionCount: 30,
  },

  {
    id: 'hard',
    title: 'Qiyin',
    icon: '🔴',
    description: 'Tahliliy va murakkab savollar',
    questionCount: 30,
  },

  {
    id: 'case',
    title: 'Keys',
    icon: '🔵',
    description: 'Real boshqaruv vaziyatlari',
    questionCount: 10,
  },
]
