// components/pisa/engine.ts
import type { Difficulty, Question, AnswerRecord, Domain } from './types'

export const TEST_LENGTH = 8
export const INITIAL_DIFFICULTY: Difficulty = 3
export const MAX_DIFFICULTY: Difficulty = 8
export const MIN_DIFFICULTY: Difficulty = 1
export const STREAK_TO_RISE = 2

export function clampDifficulty(v: number): Difficulty {
  return Math.max(MIN_DIFFICULTY, Math.min(MAX_DIFFICULTY, v)) as Difficulty
}

export function pickQuestion(
  pool: Question[],
  difficulty: Difficulty,
  usedIds: string[],
): Question | null {
  const available = pool.filter(q => !usedIds.includes(q.id))
  if (available.length === 0) return null

  const sorted = [...available].sort(
    (a, b) =>
      Math.abs(a.difficulty - difficulty) - Math.abs(b.difficulty - difficulty),
  )
  const bestDist = Math.abs(sorted[0].difficulty - difficulty)
  const candidates = sorted.filter(
    q => Math.abs(q.difficulty - difficulty) === bestDist,
  )
  return candidates[Math.floor(Math.random() * candidates.length)]
}

export function nextDifficulty(
  current: Difficulty,
  correct: boolean,
  streak: number,
): { difficulty: Difficulty; streak: number; leveledUp: boolean } {
  let next = current
  let nextStreak = streak
  let leveledUp = false

  if (correct) {
    nextStreak = streak + 1
    if (nextStreak >= STREAK_TO_RISE && current < MAX_DIFFICULTY) {
      next = clampDifficulty(current + 1)
      nextStreak = 0
      leveledUp = true
    }
  } else {
    nextStreak = 0
    next = clampDifficulty(current - 1)
  }

  return { difficulty: next, streak: nextStreak, leveledUp }
}

export function domainAccuracy(answers: AnswerRecord[], domain: Domain): number {
  const records = answers.filter(a => a.domain === domain)
  if (records.length === 0) return 0
  const correct = records.filter(a => a.correct).length
  return Math.round((correct / records.length) * 100)
}

export function xpForAnswer(q: Question, difficulty: Difficulty): number {
  return q.xp + difficulty * 2
}
