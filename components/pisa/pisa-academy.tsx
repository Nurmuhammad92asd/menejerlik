// components/pisa/pisa-academy.tsx
'use client'

import { useEffect, useState } from 'react'
import type { Domain, Difficulty, Mode, SkillState } from './types'
import { QUESTIONS } from './data'
import { clampDifficulty, domainAccuracy } from './engine'
import Dashboard from './dashboard'
import LearnMode from './learn-mode'
import TestMode, { type TestResult } from './test-mode'
import ResultMode from './result-mode'
import Leaderboard from './leaderboard'  // ← YANGI

const STORAGE_KEY = 'menejerlik-pisa-progress-v2'
const USER_KEY = 'menejerlik-pisa-user-id'

type Progress = {
  totalXp: number
  bestLevel: Difficulty
  skills: SkillState
  completedLessons: string[]
}

const DEFAULT_PROGRESS: Progress = {
  totalXp: 0,
  bestLevel: 3 as Difficulty,
  skills: { mathematics: 0, reading: 0, science: 0, 'problem-solving': 0 },
  completedLessons: [],
}

// Foydalanuvchi ID (bir marta yaratiladi)
function getOrCreateUserId(): string {
  try {
    let id = localStorage.getItem(USER_KEY)
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem(USER_KEY, id)
    }
    return id
  } catch {
    return 'anonymous'
  }
}

export default function PISAAcademy({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<Mode | 'leaderboard'>('dashboard')  // ← 'leaderboard' qo'shildi
  const [domain, setDomain] = useState<Domain | null>(null)
  const [progress, setProgress] = useState<Progress>(DEFAULT_PROGRESS)
  const [result, setResult] = useState<TestResult | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  // Foydalanuvchi ID
  useEffect(() => {
    setUserId(getOrCreateUserId())
  }, [])

  // Progress yuklash
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const data = JSON.parse(raw)
      setProgress({
        totalXp: typeof data.totalXp === 'number' ? data.totalXp : 0,
        bestLevel: clampDifficulty(data.bestLevel ?? 3),
        skills: data.skills ? { ...DEFAULT_PROGRESS.skills, ...data.skills } : DEFAULT_PROGRESS.skills,
        completedLessons: Array.isArray(data.completedLessons) ? data.completedLessons : [],
      })
    } catch {}
  }, [])

  // Progress saqlash
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {}
  }, [progress])

  // Test tugaganda — reytingga yuborish
  const handleFinish = (res: TestResult) => {
    setResult(res)
    setMode('result')

    const newTotalXp = progress.totalXp + res.sessionXp
    const newBestLevel = clampDifficulty(Math.max(progress.bestLevel, res.bestLevel))

    setProgress(p => ({
      ...p,
      totalXp: newTotalXp,
      bestLevel: newBestLevel,
    }))

    // Reytingga yuborish (async, xatoni e'tiborsiz qoldiramiz)
    if (userId) {
      const domainScores: Record<string, number> = {}
      for (const d of ['mathematics', 'reading', 'science', 'problem-solving'] as Domain[]) {
        domainScores[d] = domainAccuracy(res.answers, d)
      }

      fetch('/api/pisa/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          username: null,  // keyinroq Telegram username bilan to'ldirish mumkin
          totalXp: newTotalXp,
          bestLevel: newBestLevel,
          domainScores,
          correctAnswers: res.answers.filter(a => a.correct).length,
          totalAnswers: res.answers.length,
        }),
      }).catch(() => {
        // Server bo'lmasa — jim o'tkazib yuboramiz (offline ishlaydi)
      })
    }
  }

  if (mode === 'dashboard') {
    return (
      <Dashboard
        onBack={onBack}
        onLearn={d => { setDomain(d); setMode('learn') }}
        onTest={d => { setDomain(d); setMode('test') }}
        onLeaderboard={() => setMode('leaderboard')}  // ← YANGI
        skills={progress.skills}
        totalXp={progress.totalXp}
        bestLevel={progress.bestLevel}
      />
    )
  }

  if (mode === 'leaderboard') {
    return (
      <Leaderboard
        currentUserId={userId}
        onBack={() => setMode('dashboard')}
      />
    )
  }

  if (mode === 'learn' && domain) {
    return (
      <LearnMode
        domain={domain}
        onComplete={(id, xp) => setProgress(p => ({
          ...p,
          totalXp: p.totalXp + xp,
          completedLessons: [...new Set([...p.completedLessons, id])],
        }))}
        onStartTest={() => setMode('test')}
        onBack={() => setMode('dashboard')}
      />
    )
  }

  if (mode === 'test') {
    const pool = domain ? QUESTIONS.filter(q => q.domain === domain) : QUESTIONS
    return (
      <TestMode
        pool={pool}
        domain={domain}
        initialLevel={progress.bestLevel}
        onFinish={handleFinish}
        onExit={() => setMode('dashboard')}
      />
    )
  }

  if (mode === 'result' && result) {
    return (
      <ResultMode
        result={result}
        onRetry={() => { setDomain(result.domain); setMode('test') }}
        onDashboard={() => setMode('dashboard')}
      />
    )
  }

  return null
}
