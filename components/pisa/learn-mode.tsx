// components/pisa/learn-mode.tsx
'use client'

import { useState } from 'react'
import type { Domain, Lesson, LessonStep } from './types'
import { DOMAIN_META } from './data'
import { LESSONS } from './lessons'
import { BackButton } from './ui'

export default function LearnMode({
  domain, onComplete, onStartTest, onBack,
}: {
  domain: Domain
  onComplete: (lessonId: string, xp: number) => void
  onStartTest: () => void
  onBack: () => void
}) {
  const [active, setActive] = useState<Lesson | null>(null)
  const [stepIdx, setStepIdx] = useState(0)
  const meta = DOMAIN_META[domain]
  const lessons = LESSONS.filter(l => l.domain === domain)

  if (!active) {
    return (
      <section className="flex flex-col gap-5">
        <BackButton onClick={onBack} text="PISA Academy" />
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 p-6 text-white">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200">LEARN MODE</p>
          <h1 className="mt-2 text-3xl font-black">{meta.icon} {meta.title}</h1>
          <p className="mt-2 text-[12px] text-white/70">Avval o'rganing, keyin sinab ko'ring.</p>
        </div>
        <div className="grid gap-3">
          {lessons.map(lesson => (
            <button key={lesson.id} onClick={() => { setActive(lesson); setStepIdx(0) }} className="group flex items-center gap-4 rounded-[24px] border bg-card p-5 text-left transition hover:shadow-xl">
              <div className="flex size-14 items-center justify-center rounded-[19px] bg-gradient-to-br from-indigo-500 to-blue-600 text-2xl text-white">{lesson.icon}</div>
              <div className="flex-1">
                <h3 className="text-sm font-black">{lesson.title}</h3>
                <p className="text-[11px] text-muted-foreground">{lesson.subtitle}</p>
                <p className="mt-1 text-[9px] font-bold text-blue-600">+{lesson.xp} XP</p>
              </div>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </button>
          ))}
        </div>
        <button onClick={onStartTest} className="rounded-[21px] bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4 text-sm font-black text-white shadow-lg">
          🎯 Testni boshlash
        </button>
      </section>
    )
  }

  const step = active.steps[stepIdx]
  const isLast = stepIdx === active.steps.length - 1
  const progress = Math.round(((stepIdx + 1) / active.steps.length) * 100)

  return (
    <section className="flex flex-col gap-5">
      <BackButton onClick={() => setActive(null)} text="Darslar" />
      <div className="rounded-[23px] border bg-card p-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black">{active.title}</p>
          <p className="text-[10px] font-bold text-muted-foreground">{stepIdx + 1}/{active.steps.length}</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <StepView
        step={step}
        onNext={() => {
          if (isLast) { onComplete(active.id, active.xp); setActive(null) }
          else setStepIdx(i => i + 1)
        }}
      />
    </section>
  )
}

function StepView({ step, onNext }: { step: LessonStep; onNext: () => void }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)

  if (step.type === 'concept') {
    return (
      <div className="rounded-[28px] border bg-card p-6 shadow-sm">
        <div className="text-4xl">{step.emoji}</div>
        <h2 className="mt-3 text-xl font-black">{step.title}</h2>
        <p className="mt-3 text-[13px] leading-7 text-slate-700 dark:text-slate-300">{step.body}</p>
        <button onClick={onNext} className="mt-6 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 py-4 text-sm font-black text-white">Tushundim →</button>
      </div>
    )
  }

  if (step.type === 'example') {
    return (
      <div className="rounded-[28px] border bg-card p-6 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">MISOL</p>
        <p className="mt-2 text-sm font-black">{step.problem}</p>
        <ol className="mt-4 space-y-2">
          {step.steps.map((s, i) => (
            <li key={i} className="rounded-xl bg-muted/60 p-3 text-[12px] leading-6">{s}</li>
          ))}
        </ol>
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-[12px] font-black text-emerald-700 dark:border-emerald-900/30 dark:bg-emerald-950/20">
          ✓ Javob: {step.answer}
        </div>
        <button onClick={onNext} className="mt-6 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 py-4 text-sm font-black text-white">Keyingi →</button>
      </div>
    )
  }

  const isCorrect = checked && selected === step.correct
  return (
    <div className="rounded-[28px] border bg-card p-6 shadow-sm">
      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">TEKSHIRISH</p>
      <p className="mt-2 text-sm font-black">{step.question}</p>
      <div className="mt-4 space-y-2">
        {step.options.map((opt, i) => (
          <button key={i} onClick={() => !checked && setSelected(i)} disabled={checked}
            className={`w-full rounded-xl border p-3 text-left text-[12px] font-semibold ${
              checked && i === step.correct ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
              : checked && i === selected ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
              : selected === i ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
              : 'hover:bg-muted/40'
            }`}>
            {opt}
          </button>
        ))}
      </div>
      {!checked ? (
        <button onClick={() => setChecked(true)} disabled={selected === null} className="mt-4 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 py-4 text-sm font-black text-white disabled:opacity-40">Tekshirish</button>
      ) : (
        <>
          <div className={`mt-4 rounded-xl border p-3 text-[12px] ${isCorrect ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20' : 'border-red-200 bg-red-50 text-red-700 dark:bg-red-950/20'}`}>
            {isCorrect ? '✓ To\'g\'ri!' : '✗ Xato.'} {step.explanation}
          </div>
          <button onClick={onNext} className="mt-4 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 py-4 text-sm font-black text-white">{isCorrect ? 'Davom etish →' : 'Tushundim →'}</button>
        </>
      )}
    </div>
  )
}
