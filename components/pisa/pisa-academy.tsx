// components/pisa/pisa-academy.tsx
'use client'

import { useEffect, useState } from 'react'
import type { Domain, Difficulty, Mode, SkillState } from './types'
import { QUESTIONS } from './data'
import { clampDifficulty } from './engine'
import Dashboard from './dashboard'
import LearnMode from './learn-mode'
import TestMode, { type TestResult } from './test-mode'
import ResultMode from './result-mode'

const STORAGE_KEY = 'menejerlik-pisa-progress-v2'

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

export default function PISAAcademy({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<Mode>('dashboard')
  const [domain, setDomain] = useState<Domain | null>(null)
  const [progress, setProgress] = useState<Progress>(DEFAULT_PROGRESS)
  const [result, setResult] = useState<TestResult | null>(null)

  // Load progress
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

  // Save progress
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)) } catch {}
  }, [progress])

  // Test tugaganda
  const handleFinish = (res: TestResult) => {
    setResult(res)
    setMode('result')
    setProgress(p => ({
      ...p,
      totalXp: p.totalXp + res.sessionXp,
      bestLevel: clampDifficulty(Math.max(p.bestLevel, res.bestLevel)),
    }))
  }

  if (mode === 'dashboard') {
    return (
      <Dashboard
        onBack={onBack}
        onLearn={d => { setDomain(d); setMode('learn') }}
        onTest={d => { setDomain(d); setMode('test') }}
        skills={progress.skills}
        totalXp={progress.totalXp}
        bestLevel={progress.bestLevel}
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
