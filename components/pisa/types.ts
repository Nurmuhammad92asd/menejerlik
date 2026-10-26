// components/pisa/types.ts

export type Domain =
  | 'mathematics'
  | 'reading'
  | 'science'
  | 'problem-solving'

export type Difficulty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type Question = {
  id: string
  domain: Domain
  difficulty: Difficulty
  category: string
  context: string
  stimulus?: string
  question: string
  options: string[]
  correct: number
  explanation: string
  hint?: string
  xp: number
}

export type LessonStep =
  | { type: 'concept'; title: string; body: string; emoji: string }
  | { type: 'example'; problem: string; steps: string[]; answer: string }
  | {
      type: 'check'
      question: string
      options: string[]
      correct: number
      explanation: string
    }

export type Lesson = {
  id: string
  domain: Domain
  difficulty: Difficulty
  title: string
  subtitle: string
  icon: string
  steps: LessonStep[]
  xp: number
}

export type AnswerRecord = {
  questionId: string
  correct: boolean
  difficulty: Difficulty
  domain: Domain
  selected: number
  correctAnswer: number
}

export type SkillState = Record<Domain, number>

export type Mode = 'dashboard' | 'learn' | 'test' | 'result'
