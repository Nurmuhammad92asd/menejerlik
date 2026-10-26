// components/pisa/test-mode.tsx
'use client'

import { useEffect, useState, useCallback } from 'react'
import type { Question, Domain, Difficulty, AnswerRecord } from './types'
import { DOMAIN_META, DIFFICULTY_META } from './data'
import { pickQuestion, nextDifficulty, xpForAnswer, TEST_LENGTH, INITIAL_DIFFICULTY, MAX_DIFFICULTY } from './engine'
import { Badge, LiveStatInline } from './ui'

export type TestResult = {
  answers: AnswerRecord[]
  sessionXp: number
  domain: Domain | null
  bestLevel: Difficulty
}

export default function TestMode({
  pool, domain, initialLevel, onFinish, onExit,
}: {
  pool: Question[]
  domain: Domain | null
  initialLevel: Difficulty
  onFinish: (r: TestResult) => void
  onExit: () => void
}) {
  const [current, setCurrent] = useState<Question | null>(null)
  const [qNumber, setQNumber] = useState(1)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [difficulty, setDifficulty] = useState<Difficulty>(Math.min(MAX_DIFFICULTY, Math.max(INITIAL_DIFFICULTY, initialLevel)) as Difficulty)
  const [streak, setStreak] = useState(0)
  const [sessionXp, setSessionXp] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [lastResult, setLastResult] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60)

  // Birinchi savol
  useEffect(() => {
    const first = pickQuestion(pool, difficulty, [])
    if (!first) { onExit(); return }
    setCurrent(first)
  }, [])

  // Timer
  useEffect(() => {
    if (!current) return
    const t = setInterval(() => {
      setTimeLeft(v => {
        if (v <= 1) { clearInterval(t); onFinish({ answers, sessionXp, domain, bestLevel: difficulty }); return 0 }
        return v - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [current])

  const handleAnswer = useCallback(() => {
    if (selected === null || !current) return
    const isCorrect = selected === current.correct
    const record: AnswerRecord = {
      questionId: current.id, correct: isCorrect, difficulty,
      domain: current.domain, selected, correctAnswer: current.correct,
    }
    const newAnswers = [...answers, record]
    setAnswers(newAnswers)
    setLastResult(isCorrect)
    setShowExplanation(true)

    const engine = nextDifficulty(difficulty, isCorrect, streak)
    setStreak(engine.streak)
    setDifficulty(engine.difficulty)

    let earned = 0
    if (isCorrect) { earned = xpForAnswer(current, engine.difficulty); setSessionXp(v => v + earned) }

    // Last question
    if (qNumber >= TEST_LENGTH) {
      setTimeout(() => onFinish({ answers: newAnswers, sessionXp: sessionXp + earned, domain, bestLevel: engine.difficulty }), 2500)
      return
    }

    // Keyingi savol
    setTimeout(() => {
      const used = newAnswers.map(a => a.questionId)
      const next = pickQuestion(pool, engine.difficulty, used)

      // 🔥 MUHIM: savollar tugasa — natijaga o'tish
      if (!next) {
        onFinish({ answers: newAnswers, sessionXp: sessionXp + earned, domain, bestLevel: engine.difficulty })
        return
      }

      setCurrent(next)
      setQNumber(n => n + 1)
      setSelected(null)
      setLastResult(null)
      setShowExplanation(false)
      setShowHint(false)
    }, 1800)
  }, [selected, current, difficulty, streak, answers, qNumber, sessionXp, pool, domain, onFinish])

  if (!current) return <div className="p-6 text-center text-sm text-muted-foreground">Yuklanmoqda...</div>

  const progress = Math.round((qNumber / TEST_LENGTH) * 100)
  const meta = DOMAIN_META[current.domain]
  const formattedTime = `${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`

  return (
    <section className="flex flex-col gap-5">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <button onClick={onExit} className="group flex items-center gap-2 text-[11px] font-bold text-muted-foreground hover:text-blue-700">
          <span className="transition-transform group-hover:-translate-x-1">←</span> Chiqish
        </button>
        <div className="flex items-center gap-2">
          <div className="rounded-xl border bg-card px-3 py-2">
            <span className="text-[9px] font-black text-muted-foreground">SAVOL</span>
            <span className="ml-1 text-[11px] font-black">{qNumber}/{TEST_LENGTH}</span>
          </div>
          <div className={`rounded-xl px-3 py-2 ${timeLeft <= 60 ? 'bg-red-50 text-red-600 dark:bg-red-950/20' : 'bg-blue-50 text-blue-700 dark:bg-blue-950/20'}`}>
            ⏱ {formattedTime}
          </div>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="rounded-[23px] border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-blue-700">PISA ADAPTIVE ENGINE</p>
            <p className="mt-1 text-xs font-black">Murakkablik: <span className={DIFFICULTY_META[difficulty].color}>{difficulty}/8</span></p>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-bold uppercase text-muted-foreground">STREAK</p>
            <p className="text-lg font-black">🔥 {streak}</p>
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-400 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* QUESTION */}
      <div className="rounded-[30px] border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap gap-2">
          <Badge>{meta.icon} {meta.short}</Badge>
          <Badge>{current.category}</Badge>
          <Badge>🌍 {current.context}</Badge>
          <Badge>L{difficulty}</Badge>
        </div>

        {current.stimulus && (
          <div className="mt-5 rounded-[23px] border bg-slate-50 p-5 dark:bg-white/5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-white text-sm shadow-sm dark:bg-white/10">📄</span>
              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground">Vaziyat / dalil</span>
            </div>
            <p className="text-[12px] leading-6 text-slate-700 dark:text-slate-300">{current.stimulus}</p>
          </div>
        )}

        <h1 className="mt-6 text-[19px] font-black leading-7 tracking-tight">{current.question}</h1>

        <div className="mt-6 flex flex-col gap-2.5">
          {current.options.map((option, index) => {
            const active = selected === index
            const isCorrect = showExplanation && index === current.correct
            const isWrong = showExplanation && active && !isCorrect
            return (
              <button key={`${current.id}-${index}`} type="button" disabled={showExplanation} onClick={() => setSelected(index)}
                className={`group flex items-center gap-3 rounded-[20px] border p-4 text-left transition-all ${
                  isCorrect ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
                  : isWrong ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                  : active ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/10 dark:bg-blue-950/20'
                  : 'bg-card hover:-translate-y-0.5 hover:bg-muted/40 hover:shadow-md'
                }`}>
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                  isCorrect ? 'bg-emerald-600 text-white'
                  : isWrong ? 'bg-red-600 text-white'
                  : active ? 'bg-blue-600 text-white'
                  : 'bg-muted text-muted-foreground group-hover:bg-blue-100 group-hover:text-blue-700'
                }`}>
                  {isCorrect ? '✓' : isWrong ? '×' : String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-[12px] font-semibold leading-5">{option}</span>
                {!showExplanation && active && <span className="text-blue-600">●</span>}
              </button>
            )
          })}
        </div>

        {/* HINT */}
        {!showExplanation && current.hint && (
          <div className="mt-4">
            {!showHint ? (
              <button onClick={() => setShowHint(true)} className="w-full rounded-xl border border-dashed py-3 text-[11px] font-black text-muted-foreground transition hover:bg-muted/40">
                💡 Yordam kerakmi? (XP kamayadi)
              </button>
            ) : (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-[11px] leading-5 text-amber-800 dark:border-amber-900/30 dark:bg-amber-950/20">
                💡 <strong>Yordam:</strong> {current.hint}
              </div>
            )}
          </div>
        )}

        {/* EXPLANATION */}
        {showExplanation && lastResult !== null && (
          <div className={`mt-5 rounded-[22px] border p-4 ${lastResult ? 'border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20' : 'border-red-200 bg-red-50 dark:bg-red-950/20'}`}>
            <div className="flex gap-3">
              <span className="text-xl">{lastResult ? '🎉' : '💡'}</span>
              <div>
                <p className="text-sm font-black">{lastResult ? "To'g'ri javob!" : 'Bu safar xato.'}</p>
                <p className="mt-1 text-[10px] leading-5 text-muted-foreground">{current.explanation}</p>
              </div>
            </div>
          </div>
        )}

        <button type="button" disabled={selected === null || showExplanation} onClick={handleAnswer}
          className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4 text-sm font-black text-white shadow-lg transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40">
          Javobni tekshirish →
        </button>
      </div>

      {/* LIVE STATS */}
      <div className="grid grid-cols-3 gap-2">
        <LiveStatInline icon="🔥" value={`${streak}`} label="Streak" />
        <LiveStatInline icon="⭐" value={`+${sessionXp}`} label="Session XP" />
        <LiveStatInline icon="🎯" value={`${difficulty}/8`} label="Daraja" />
      </div>
    </section>
  )
}
