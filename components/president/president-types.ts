// components/president/president-types.ts

export type SectionId =
  | 'math'
  | 'english'
  | 'logic'
  | 'native'
  | 'mock'

export type Difficulty = 1 | 2 | 3

export type Question = {
  id: string
  topicId: string
  sectionId: SectionId
  difficulty: Difficulty
  question: string
  options: string[]
  correct: number
  explanation: string
  hint?: string
}

export type Topic = {
  id: string
  sectionId: SectionId
  title: string
  description: string
  icon: string
  difficulty: Difficulty
  questionCount: number
}

export type Section = {
  id: SectionId
  title: string
  description: string
  icon: string
  gradient: string
  topics: Topic[]
}

export type Progress = {
  completedTopics: string[]
  correctByTopic: Record<string, number>
  totalByTopic: Record<string, number>
  totalXp: number
}

export type Screen =
  | 'hub'
  | 'section'
  | 'quiz'
  | 'result'
