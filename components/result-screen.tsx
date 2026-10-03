```tsx
'use client'

import {
  Check,
  Clock,
  House,
  RotateCcw,
  Send,
  Trophy,
  X,
  Zap,
  Target,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  formatDuration,
  gradeFor,
  type QuizResult,
} from '@/lib/quiz'

import { shareText } from '@/lib/telegram'
import { cn } from '@/lib/utils'

type ResultScreenProps = {
  result: QuizResult
  onRetry: () => void
  onHome: () => void
}

function ScoreRing({
  percent,
}: {
  percent: number
}) {
  const safePercent = Math.max(
    0,
    Math.min(100, percent),
  )

  const radius = 72
  const circumference = 2 * Math.PI * radius
  const offset =
    circumference -
    (safePercent / 100) * circumference

  return (
    <div className="relative mx-auto h-52 w-52">
      <svg
        className="h-full w-full -rotate-90"
        viewBox="0 0 180 180"
        aria-label={`Natija ${safePercent} foiz`}
        role="img"
      >
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          className="text-slate-200 dark:text-slate-800"
        />

        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          className="text-blue-600"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          {safePercent}%
        </span>

        <span className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
          natija
        </span>
      </div>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode
  label: string
  value: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
    >
      <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-slate-400">
        {icon}

        <span className="text-xs font-semibold">
          {label}
        </span>
      </div>

      <div className="text-2xl font-black text-slate-900 dark:text-white">
        {value}
      </div>
    </div>
  )
}

export function ResultScreen({
  result,
  onRetry,
  onHome,
}: ResultScreenProps) {
  const total = Math.max(
    0,
    Number(result.total ?? result.questions?.length ?? 0),
  )

  const correct = Math.max(
    0,
    Math.min(
      total,
      Number(result.correct ?? 0),
    ),
  )

  const wrong = Math.max(
    0,
    total - correct,
  )

  const percent =
    total > 0
      ? Math.round(
          (correct / total) * 100,
        )
      : 0

  const durationSec = Math.max(
    0,
    Number(result.durationSec ?? 0),
  )

  const grade = gradeFor(percent)

  let xp = 10

  if (percent >= 90) {
    xp = 100
  } else if (percent >= 80) {
    xp = 80
  } else if (percent >= 70) {
    xp = 60
  } else if (percent >= 60) {
    xp = 40
  } else if (percent >= 50) {
    xp = 25
  }

  function share() {
    shareText(
      `🎓 “Menejerlik by Nurmuhammad” ilovasida “${result.title}” testidan ${correct}/${total} ta savolga to‘g‘ri javob berdim!

📊 Natijam: ${percent}%
⚡ XP: +${xp}

Siz ham o‘zingizni sinab ko‘ring! 🚀`,
    )
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 pb-10 pt-4">
      {/* Header */}
      <section className="mb-5 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
            <Trophy className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium text-blue-100">
              Test yakunlandi
            </p>

            <h1 className="truncate text-xl font-black">
              {result.title}
            </h1>
          </div>
        </div>

        <p className="text-sm leading-6 text-blue-100">
          Natijangiz quyida batafsil ko‘rsatilgan.
        </p>
      </section>

      {/* Main result */}
      <section className="rounded-3xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <ScoreRing percent={percent} />

        <div className="mt-5 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Sizning natijangiz
          </p>

          <div className="mt-1 text-4xl font-black text-slate-900 dark:text-white">
            {percent}%
          </div>

          <p className="mt-2 text-base font-semibold text-slate-600 dark:text-slate-300">
            {correct} / {total} ta savol to‘g‘ri
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
            <Zap className="h-4 w-4" />
            +{xp} XP
          </div>

          <div className="mt-4">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
              {grade}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-7">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-500 dark:text-slate-400">
              Umumiy natija
            </span>

            <span className="text-slate-900 dark:text-white">
              {percent}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{
                width: `${percent}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mt-4 grid grid-cols-3 gap-3">
        <StatCard
          icon={
            <Check className="h-4 w-4 text-emerald-600" />
          }
          label="To‘g‘ri"
          value={String(correct)}
        />

        <StatCard
          icon={
            <X className="h-4 w-4 text-red-600" />
          }
          label="Xato"
          value={String(wrong)}
        />

        <StatCard
          icon={
            <Clock className="h-4 w-4 text-blue-600" />
          }
          label="Vaqt"
          value={formatDuration(durationSec)}
        />
      </section>

      {/* Performance message */}
      <section className="mt-4 rounded-3xl border bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            <Target className="h-5 w-5" />
          </div>

          <div>
            <h2 className="font-bold text-slate-900 dark:text-white">
              Natija tahlili
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {percent >= 90
                ? 'Ajoyib natija! Siz mavzuni juda yaxshi o‘zlashtirgansiz.'
                : percent >= 80
                  ? 'Juda yaxshi natija! Bilimlaringiz mustahkam.'
                  : percent >= 70
                    ? 'Yaxshi natija. Ayrim mavzularni yana bir bor takrorlash foydali.'
                    : percent >= 60
                      ? 'Qoniqarli natija. Ko‘proq mashq qilish orqali natijani oshirish mumkin.'
                      : 'Mavzularni qayta ko‘rib chiqing va testni yana bir bor ishlab ko‘ring.'}
            </p>
          </div>
        </div>
      </section>

      {/* Perfect result */}
      {percent === 100 && (
        <section className="mt-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Trophy className="h-5 w-5" />
            </div>

            <div>
              <h2 className="font-black text-emerald-800 dark:text-emerald-300">
                Mukammal natija! 🎉
              </h2>

              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                Barcha savollarga to‘g‘ri javob berdingiz.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Mistakes */}
      {wrong > 0 &&
        result.answers &&
        result.questions && (
          <section className="mt-4 rounded-3xl border bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="font-black text-slate-900 dark:text-white">
                  Xatolarni ko‘rib chiqish
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Noto‘g‘ri javob berilgan savollar
                </p>
              </div>

              <div className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 dark:bg-red-950/40 dark:text-red-300">
                {wrong} ta xato
              </div>
            </div>

            <div className="space-y-3">
              {result.questions.map(
                (question, index) => {
                  const answer =
                    result.answers?.[index]

                  if (
                    answer?.isCorrect === true
                  ) {
                    return null
                  }

                  return (
                    <div
                      key={question.id ?? index}
                      className="rounded-2xl border border-red-100 bg-red-50/70 p-4 dark:border-red-950 dark:bg-red-950/20"
                    >
                      <div className="flex gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-black text-red-700 dark:bg-red-950 dark:text-red-300">
                          {index + 1}
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-bold leading-6 text-slate-900 dark:text-white">
                            {question.text}
                          </p>

                          {question.explanation && (
                            <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                              <span className="font-bold">
                                Izoh:
                              </span>{' '}
                              {question.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                },
              )}
            </div>
          </section>
        )}

      {/* Actions */}
      <section className="mt-5 grid gap-3 sm:grid-cols-2">
        <Button
          type="button"
          onClick={onRetry}
          className="h-12 rounded-2xl text-sm font-bold"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Qayta ishlash
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={share}
          className="h-12 rounded-2xl text-sm font-bold"
        >
          <Send className="mr-2 h-4 w-4" />
          Natijani ulashish
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={onHome}
          className="h-12 rounded-2xl text-sm font-bold sm:col-span-2"
        >
          <House className="mr-2 h-4 w-4" />
          Bosh sahifaga qaytish
        </Button>
      </section>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-xs text-slate-400">
          Menejerlik by Nurmuhammad
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Har bir test — yangi bilim va yangi tajriba.
        </p>
      </div>
    </main>
  )
}
```
