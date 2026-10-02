'use client'

import useSWR from 'swr'
import { getWebApp, supports } from '@/lib/telegram'

export type Attempt = {
  id: string
  categoryId: string
  correct: number
  total: number
  durationSec: number
  at: number
}

const STORAGE_KEY = 'menejerlik_history_v1'
const MAX_ATTEMPTS = 25

// Fallback when opened outside Telegram: keeps results for the current session only.
let sessionStore: Attempt[] = []

function cloud() {
  const wa = getWebApp()
  return wa && supports('6.9') ? wa.CloudStorage : undefined
}

function loadHistory(): Promise<Attempt[]> {
  const storage = cloud()
  if (!storage) return Promise.resolve(sessionStore)
  return new Promise((resolve) => {
    storage.getItem(STORAGE_KEY, (error, value) => {
      if (error || !value) return resolve([])
      try {
        const parsed = JSON.parse(value)
        resolve(Array.isArray(parsed) ? parsed : [])
      } catch {
        resolve([])
      }
    })
  })
}

function saveHistory(list: Attempt[]): Promise<void> {
  const storage = cloud()
  if (!storage) {
    sessionStore = list
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    storage.setItem(STORAGE_KEY, JSON.stringify(list), () => resolve())
  })
}

export function useHistory() {
  const { data, isLoading, mutate } = useSWR('quiz-history', loadHistory, {
    revalidateOnFocus: false,
  })

  const history = data ?? []

  async function addAttempt(attempt: Attempt) {
    const next = [attempt, ...history].slice(0, MAX_ATTEMPTS)
    await mutate(
      async () => {
        await saveHistory(next)
        return next
      },
      { optimisticData: next, revalidate: false },
    )
  }

  const stats = {
    count: history.length,
    average: history.length
      ? Math.round(history.reduce((sum, a) => sum + (a.correct / a.total) * 100, 0) / history.length)
      : 0,
    best: history.length ? Math.max(...history.map((a) => Math.round((a.correct / a.total) * 100))) : 0,
  }

  const bestByCategory = history.reduce<Record<string, number>>((acc, a) => {
    const pct = Math.round((a.correct / a.total) * 100)
    acc[a.categoryId] = Math.max(acc[a.categoryId] ?? 0, pct)
    return acc
  }, {})

  return { history, isLoading, stats, bestByCategory, addAttempt }
}
