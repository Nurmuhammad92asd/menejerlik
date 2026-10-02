import { CATEGORIES, MIXED_QUESTIONS, type Question } from './quiz-data'

export const MIXED_ID = 'aralash'
export const MIXED_COUNT = 30

export type QuizSession = {
  categoryId: string
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
  title: string
  answers: AnswerRecord[]
  correct: number
  total: number
  durationSec: number
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function shuffleOptions(q: Question): Question {
  const order = shuffle(q.options.map((_, i) => i))
  return {
    ...q,
    options: order.map((i) => q.options[i]),
    answer: order.indexOf(q.answer),
  }
}

export function getCategoryTitle(id: string) {
  if (id === MIXED_ID) return 'Aralash test'
  return CATEGORIES.find((c) => c.id === id)?.title ?? 'Test'
}

export function createSession(categoryId: string): QuizSession {
const pool =
  categoryId === MIXED_ID
    ? shuffle(MIXED_QUESTIONS).slice(0, MIXED_COUNT)
    : shuffle(CATEGORIES.find((c) => c.id === categoryId)?.questions ?? [])
  return {
    categoryId,
    title: getCategoryTitle(categoryId),
    questions: pool.map(shuffleOptions),
    startedAt: Date.now(),
  }
}

export function formatDuration(totalSec: number) {
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function gradeFor(percent: number) {
  if (percent >= 90) return { label: "A'lo natija!", note: "Siz mavzuni juda yaxshi o'zlashtirgansiz." }
  if (percent >= 70) return { label: 'Yaxshi natija', note: "Ozgina takrorlash bilan a'loga chiqasiz." }
  if (percent >= 50) return { label: 'Qoniqarli', note: "Xatolaringizni ko'rib chiqing va qayta urinib ko'ring." }
  return { label: "Yana urinib ko'ring", note: 'Mavzuni takrorlab, testni qayta topshiring.' }
}
