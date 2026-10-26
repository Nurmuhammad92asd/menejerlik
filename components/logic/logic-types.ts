// components/logic/logic-types.ts

export type Lang = 'uz' | 'en'

export type FallacyType =
  | 'authority'
  | 'bandwagon'
  | 'false-dilemma'
  | 'ad-hominem'
  | 'straw-man'
  | 'slippery-slope'
  | 'circular'
  | 'appeal-emotion'
  | 'hasty-generalization'
  | 'false-cause'

export type BilingualText = { uz: string; en: string }
export type BilingualList = { uz: string[]; en: string[] }

export type FallacyGame = {
  type: 'fallacy'
  id: string
  fallacyType: FallacyType
  text: BilingualText
  options: BilingualList
  correct: number
  explanation: BilingualText
  xp: number
}

export type RealFakeGame = {
  type: 'real-fake'
  id: string
  headline: BilingualText
  source: BilingualText
  isReal: boolean
  reason: BilingualText
  xp: number
}

export type LogicLockGame = {
  type: 'logic-lock'
  id: string
  title: BilingualText
  locks: {
    id: string
    question: BilingualText
    options: BilingualList
    correct: number
    explanation: BilingualText
  }[]
  xp: number
}

export type ArgumentChainGame = {
  type: 'argument-chain'
  id: string
  title: BilingualText
  items: { id: string; text: BilingualText }[]
  correctOrder: string[]
  explanation: BilingualText
  xp: number
}

export type AnyGame =
  | FallacyGame
  | RealFakeGame
  | LogicLockGame
  | ArgumentChainGame

export type GameType =
  | 'fallacy'
  | 'real-fake'
  | 'logic-lock'
  | 'argument-chain'

export type LogicProgress = {
  completedGames: string[]
  totalXp: number
  bestStreak: number
}
