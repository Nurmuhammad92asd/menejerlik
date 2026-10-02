'use client'

import { Check, Clock, House, RotateCcw, Send, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatDuration, gradeFor, type QuizResult } from '@/lib/quiz'
import { shareText } from '@/lib/telegram'
import { cn } from '@/lib/utils'

type Props = {
  result: QuizResult
  onRetry: () => void
  onHome: () => void
}

export function ResultScreen({ result, onRetry, onHome }: Props) {
  const percent = Math.round((result.correct / result.total) * 100)
  const grade = gradeFor(percent)
  const passed = percent >= 70
  const mistakes = result.answers.filter((a) => a.selected !== a.question.answer)

  function share() {
    shareText(
      `Men “Menejerlik by Nurmuhammad” ilovasida “${result.title}” testidan ${result.correct}/${result.total} (${percent}%) natija oldim! Siz ham sinab ko'ring.`,
    )
  }

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <section aria-labelledby="result-title" className="flex flex-col items-center gap-4 rounded-3xl border bg-card p-6 text-center">
        <ScoreRing percent={percent} passed={passed} />
        <div>
          <h1 id="result-title" className="text-2xl font-semibold tracking-tight">
            {grade.label}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground text-pretty">{grade.note}</p>
        </div>
        <dl className="grid w-full grid-cols-3 gap-2 pt-2">
          <ResultStat icon={<Check className="size-4 text-success" aria-hidden="true" />} label="To'g'ri" value={String(result.correct)} />
          <ResultStat icon={<X className="size-4 text-destructive" aria-hidden="true" />} label="Xato" value={String(result.total - result.correct)} />
          <ResultStat icon={<Clock className="size-4 text-muted-foreground" aria-hidden="true" />} label="Vaqt" value={formatDuration(result.durationSec)} />
        </dl>
      </section>

      <div className="grid grid-cols-2 gap-2">
        <Button size="lg" className="h-12 rounded-2xl" onClick={onRetry}>
          <RotateCcw aria-hidden="true" />
          Qayta topshirish
        </Button>
        <Button size="lg" variant="outline" className="h-12 rounded-2xl" onClick={share}>
          <Send aria-hidden="true" />
          Ulashish
        </Button>
        <Button size="lg" variant="ghost" className="col-span-2 h-12 rounded-2xl" onClick={onHome}>
          <House aria-hidden="true" />
          Bosh sahifa
        </Button>
      </div>

      {mistakes.length > 0 && (
        <section aria-labelledby="review" className="flex flex-col gap-3">
          <h2 id="review" className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {`Xatolar ustida ishlash (${mistakes.length})`}
          </h2>
          <ul className="flex flex-col gap-2">
            {mistakes.map(({ question, selected }) => (
              <li key={question.id} className="flex flex-col gap-2 rounded-2xl border bg-card p-4 text-sm">
                <p className="font-medium leading-snug text-pretty">{question.text}</p>
                <p className="flex gap-2 text-destructive">
                  <X className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="sr-only">{'Sizning javobingiz: '}</span>
                    {question.options[selected]}
                  </span>
                </p>
                <p className="flex gap-2 text-success">
                  <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="sr-only">{"To'g'ri javob: "}</span>
                    {question.options[question.answer]}
                  </span>
                </p>
                <p className="leading-relaxed text-muted-foreground">{question.explanation}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}

function ScoreRing({ percent, passed }: { percent: number; passed: boolean }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  return (
    <div className="relative size-36">
      <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="60" cy="60" r={radius} fill="none" strokeWidth="10" className="stroke-muted" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
          className={cn('transition-[stroke-dashoffset] duration-1000 ease-out', passed ? 'stroke-success' : 'stroke-destructive')}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold tabular-nums">{`${percent}%`}</span>
        <span className="text-xs text-muted-foreground">natija</span>
      </div>
    </div>
  )
}

function ResultStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl bg-muted px-2 py-3">
      {icon}
      <dt className="order-last text-xs text-muted-foreground">{label}</dt>
      <dd className="text-lg font-semibold tabular-nums">{value}</dd>
    </div>
  )
}
