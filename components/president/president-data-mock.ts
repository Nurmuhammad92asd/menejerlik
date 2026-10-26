// components/president/president-data-mock.ts
import type { Topic, Question } from './president-types'
import { MATH_QUESTIONS } from './president-data-math'
import { ENGLISH_QUESTIONS } from './president-data-english'
import { LOGIC_QUESTIONS } from './president-data-logic'
import { NATIVE_QUESTIONS } from './president-data-native'

export const MOCK_TOPIC: Topic = {
  id: 'mock-exam',
  sectionId: 'mock',
  title: 'Mock Exam',
  description: "To'liq imtihon — 30 ta aralash savol",
  icon: '🏆',
  difficulty: 3,
  questionCount: 30,
}

// Helper: shuffle array
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Mock exam — 30 random questions from all sections
export function generateMockExam(): Question[] {
  const all = [
    ...MATH_QUESTIONS,
    ...ENGLISH_QUESTIONS,
    ...LOGIC_QUESTIONS,
    ...NATIVE_QUESTIONS,
  ]

  // Take 8 from math, 8 from english, 7 from logic, 7 from native = 30
  const math = shuffle(MATH_QUESTIONS).slice(0, 8)
  const english = shuffle(ENGLISH_QUESTIONS).slice(0, 8)
  const logic = shuffle(LOGIC_QUESTIONS).slice(0, 7)
  const native = shuffle(NATIVE_QUESTIONS).slice(0, 7)

  return shuffle([...math, ...english, ...logic, ...native])
}
