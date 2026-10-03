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

type Props = {
  result: QuizResult
  onRetry: () => void
  onHome: () => void
}

/* =========================================================
   RESULT SCREEN
========================================================= */

export function ResultScreen({
  result,
  onRetry,
  onHome,
}: Props) {
  /*
   * FOIZNI HISOBLASH
   *
   * Masalan:
   * 24 / 30 = 80%
   */

  const total = Math.max(
    0,
    Number(result.total) || 0,
  )

  const correct = Math.min(
    total,
    Math.max(
      0,
      Number(result.correct) || 0,
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

  const grade = gradeFor(percent)

  const passed = percent >= 70

  /*
   * XP
   *
   * D1 API dagi XP tizimiga mos:
   *
   * 90+  = 100 XP
   * 80+  = 80 XP
   * 70+  = 60 XP
   * 60+  = 40 XP
   * 50+  = 25 XP
   * <50  = 10 XP
   */

  const xp =
    percent >= 90
      ? 100
      : percent >= 80
        ? 80
        : percent >= 70
          ? 60
          : percent >= 60
            ? 40
            : percent >= 50
              ? 25
              : 10

  const mistakes =
    result.answers?.filter(
      (answer) =>
        answer.selected !==
        answer.question.answer,
    ) ?? []

  function share() {
    shareText(
      `🎓 “Menejerlik by Nurmuhammad” ilovasida “${result.title}” testidan ${correct}/${total} — ${percent}% natija oldim! ⭐ ${xp} XP. Siz ham sinab ko‘ring!`,
    )
  }

  return (
    <div className="flex flex-col gap-5 animate-in fade-in duration-500">
      {/* =====================================================
          MAIN RESULT
      ===================================================== */}

      <section
        aria-labelledby="result-title"
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          bg-card
          p-6
          text-center
          shadow-sm
        "
      >
        {/* Decorative background */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            size-40
            rounded-full
            bg-primary/5
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-16
            size-44
            rounded-full
            bg-primary/5
          "
        />

        <div className="relative flex flex-col items-center gap-4">
          {/* Trophy */}

          <div
            className={cn(
              `
                flex
                size-14
                items-center
                justify-center
                rounded-2xl
              `,
              passed
                ? 'bg-green-100 text-green-600'
                : 'bg-orange-100 text-orange-600',
            )}
          >
            <Trophy
              className="size-7"
              aria-hidden="true"
            />
          </div>

          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              TEST YAKUNLANDI
            </p>

            <h1
              id="result-title"
              className="
                mt-1
                text-2xl
                font-bold
                tracking-tight
              "
            >
              {grade.label}
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              {grade.note}
            </p>
          </div>

          {/* =================================================
              BIG SCORE
          ================================================= */}

          <ScoreRing
            percent={percent}
            passed={passed}
          />

          {/* =================================================
              LARGE PERCENT TEXT
          ================================================= */}

          <div
            className="
              rounded-2xl
              bg-muted/60
              px-8
              py-4
            "
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Sizning natijangiz
            </p>

            <p
              className={cn(
                `
                  mt-1
                  text-5xl
                  font-black
                  tabular-nums
                  tracking-tight
                `,
                passed
                  ? 'text-green-600'
                  : 'text-orange-600',
              )}
            >
              {percent}%
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {correct} / {total} ta savol
            </p>
          </div>

          {/* =================================================
              XP
          ================================================= */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              bg-yellow-50
              px-5
              py-2.5
              text-yellow-700
            "
          >
            <Zap
              className="size-5 fill-current"
              aria-hidden="true"
            />

            <span className="font-bold">
              +{xp} XP
            </span>
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div
            className="
              grid
              w-full
              grid-cols-3
              gap-2
              pt-2
            "
          >
            <ResultStat
              icon={
                <Check
                  className="size-5 text-green-600"
                  aria-hidden="true"
                />
              }
              label="To‘g‘ri"
              value={String(correct)}
            />

            <ResultStat
              icon={
                <X
                  className="size-5 text-red-600"
                  aria-hidden="true"
                />
              }
              label="Xato"
              value={String(wrong)}
            />

            <ResultStat
              icon={
                <Clock
                  className="size-5 text-muted-foreground"
                  aria-hidden="true"
                />
              }
              label="Vaqt"
              value={formatDuration(
                result.durationSec,
              )}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULT PROGRESS
      ===================================================== */}

      <section
        className="
          rounded-3xl
          border
          bg-card
          p-5
        "
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Target
              className="size-5 text-primary"
              aria-hidden="true"
            />

            <span className="font-bold">
              Natija ko‘rsatkichi
            </span>
          </div>

          <span className="font-bold tabular-nums">
            {percent}%
          </span>
        </div>

        <div
          className="
            mt-4
            h-3
            overflow-hidden
            rounded-full
            bg-muted
          "
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          aria-label={`Test natijasi ${percent} foiz`}
        >
          <div
            className={cn(
              `
                h-full
                rounded-full
                transition-all
                duration-1000
                ease-out
              `,
              passed
                ? 'bg-green-500'
                : 'bg-orange-500',
            )}
            style={{
              width: `${percent}%`,
            }}
          />
        </div>

        <div className="mt-3 flex justify-between text-xs text-muted-foreground">
          <span>0%</span>
          <span>70% — o‘tish</span>
          <span>100%</span>
        </div>
      </section>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div className="grid grid-cols-2 gap-2">
        <Button
          size="lg"
          className="
            h-12
            rounded-2xl
            font-semibold
          "
          onClick={onRetry}
        >
          <RotateCcw
            aria-hidden="true"
          />

          Qayta topshirish
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="
            h-12
            rounded-2xl
            font-semibold
          "
          onClick={share}
        >
          <Send
            aria-hidden="true"
          />

          Ulashish
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="
            col-span-2
            h-12
            rounded-2xl
          "
          onClick={onHome}
        >
          <House
            aria-hidden="true"
          />

          Bosh sahifa
        </Button>
      </div>

      {/* =====================================================
          MISTAKES
      ===================================================== */}

      {mistakes.length > 0 && (
        <section
          aria-labelledby="review"
          className="
            flex
            flex-col
            gap-3
          "
        >
          <div>
            <h2
              id="review"
              className="
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-muted-foreground
              "
            >
              Xatolar ustida ishlash
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              {mistakes.length} ta savolda
              xatoga yo‘l qo‘yildi.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {mistakes.map(
              ({
                question,
                selected,
              }) => (
                <li
                  key={question.id}
                  className="
                    flex
                    flex-col
                    gap-2
                    rounded-2xl
                    border
                    bg-card
                    p-4
                    text-sm
                  "
                >
                  <p className="font-semibold leading-snug text-pretty">
                    {question.text}
                  </p>

                  <div
                    className="
                      rounded-xl
                      bg-red-50
                      p-3
                    "
                  >
                    <p className="flex gap-2 text-red-600">
                      <X
                        className="
                          mt-0.5
                          size-4
                          shrink-0
                        "
                        aria-hidden="true"
                      />

                      <span>
                        <span className="sr-only">
                          Sizning javobingiz:
                        </span>

                        {selected >= 0
                          ? question
                              .options[
                              selected
                            ]
                          : 'Javob berilmagan'}
                      </span>
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      bg-green-50
                      p-3
                    "
                  >
                    <p className="flex gap-2 text-green-600">
                      <Check
                        className="
                          mt-0.5
                          size-4
                          shrink-0
                        "
                        aria-hidden="true"
                      />

                      <span>
                        <span className="sr-only">
                          To‘g‘ri javob:
                        </span>

                        {
                          question
                            .options[
                            question.answer
                          ]
                        }
                      </span>
                    </p>
                  </div>

                  <p className="leading-relaxed text-muted-foreground">
                    {question.explanation}
                  </p>
                </li>
              ),
            )}
          </ul>
        </section>
      )}

      {/* =====================================================
          PERFECT RESULT
      ===================================================== */}

      {percent === 100 && (
        <section
          className="
            rounded-3xl
            border
            border-yellow-200
            bg-yellow-50
            p-5
            text-center
          "
        >
          <div className="text-4xl">
            🏆
          </div>

          <h2 className="mt-2 text-lg font-bold text-yellow-800">
            Mukammal natija!
          </h2>

          <p className="mt-1 text-sm text-yellow-700">
            Siz barcha savollarga to‘g‘ri
            javob berdingiz.
          </p>
        </section>
      )}
    </div>
  )
}

/* =========================================================
   SCORE RING
========================================================= */

function ScoreRing({
  percent,
  passed,
}: {
  percent: number
  passed: boolean
}) {
  const radius = 52

  const circumference =
    2 * Math.PI * radius

  const safePercent =
    Math.min(
      100,
      Math.max(0, percent),
    )

  return (
    <div
      className="
        relative
        size-40
      "
    >
      <svg
        viewBox="0 0 120 120"
        className="
          size-full
          -rotate-90
        "
        aria-hidden="true"
      >
        {/* Background */}

        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="10"
          className="stroke-muted"
        />

        {/* Progress */}

        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={
            circumference
          }
          strokeDashoffset={
            circumference *
            (1 -
              safePercent /
                100)
          }
          className={cn(
            `
              transition-[stroke-dashoffset]
              duration-1000
              ease-out
            `,
            passed
              ? 'stroke-green-500'
              : 'stroke-orange-500',
          )}
        />
      </svg>

      {/* Center */}

      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <span
          className="
            text-4xl
            font-black
            tabular-nums
          "
        >
          {safePercent}%
        </span>

        <span
          className="
            text-xs
            font-medium
            text-muted-foreground
          "
        >
          natija
        </span>
      </div>
    </div>
  )
}

/* =========================================================
   RESULT STAT
========================================================= */

function ResultStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-col
        items-center
        gap-1.5
        rounded-2xl
        bg-muted
        px-2
        py-3
      "
    >
      {icon}

      <dd
        className="
          text-xl
          font-black
          tabular-nums
        "
      >
        {value}
      </dd>

      <dt
        className="
          text-[11px]
          text-muted-foreground
        "
      >
        {label}
      </dt>
    </div>
  )
}
```

### Endi natija qanday ko‘rinadi?

Masalan, **30 ta savoldan 24 tasi to‘g‘ri** bo‘lsa:

**80%** juda katta ko‘rinadi.

Pastida:

**24 / 30 ta savol**

va:

| Ko‘rsatkich | Natija |
| ----------- | -----: |
| ✅ To‘g‘ri   |     24 |
| ❌ Xato      |      6 |
| ⏱ Vaqt      |   vaqt |

Shuningdek **80% progress bar**, **+80 XP**, **70% o‘tish chegarasi** ham ko‘rinadi.

**Muhim:** sizning `menejerlik-app.tsx` faylingizni o‘zgartirish shart emas. Faqat `components/result-screen.tsx`ni yuqoridagi kod bilan almashtiring va GitHub'da **Commit changes** bosing.
