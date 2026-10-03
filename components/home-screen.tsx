'use client'

import type { ReactNode } from 'react'

import {
  ArrowRight,
  BookOpen,
  Brain,
  ChevronRight,
  GraduationCap,
  History,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react'

import type { Attempt } from '@/hooks/use-history'
import type { TelegramUser } from '@/lib/telegram'

type Stats = {
  count: number
  average: number
  best: number
}

type Props = {
  user?: TelegramUser | null
  history?: Attempt[] | null
  stats?: Stats | null
  bestByCategory?: Record<string, number> | null
  onStart: () => void
  onAI?: () => void
  onRanking: () => void
}

export function HomeScreen({
  user,
  history,
  stats,
  bestByCategory,
  onStart,
  onAI,
  onRanking,
}: Props) {
  // =========================================================
  // XAVFSIZ DEFAULT QIYMATLAR
  // =========================================================

  const safeHistory = Array.isArray(history) ? history : []

  const safeStats: Stats = {
    count: Number(stats?.count ?? 0),
    average: Number(stats?.average ?? 0),
    best: Number(stats?.best ?? 0),
  }

  const safeBestByCategory = bestByCategory ?? {}

  // Hozircha kategoriya statistikasi keyingi bosqich uchun saqlanadi.
  void safeBestByCategory

  return (
    <div className="flex flex-col gap-5 pb-6">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">

          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <GraduationCap
              className="size-6"
              strokeWidth={2}
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Professional Education
            </p>

            <h1 className="text-xl font-bold tracking-tight">
              MENEJERLIK
            </h1>
          </div>
        </div>

        {/* AI tugmasi */}
        {onAI ? (
          <button
            type="button"
            onClick={onAI}
            aria-label="AI yordamchi"
            className="flex size-10 items-center justify-center rounded-xl border bg-card transition-all hover:bg-secondary active:scale-95"
          >
            <Sparkles
              className="size-5 text-primary"
              aria-hidden="true"
            />
          </button>
        ) : (
          <div className="flex size-10 items-center justify-center rounded-xl border bg-card">
            <Sparkles
              className="size-5 text-primary"
              aria-hidden="true"
            />
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden rounded-[2rem] bg-primary p-6 text-primary-foreground shadow-lg">

        <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-white/10" />

        <div className="pointer-events-none absolute -bottom-16 -left-10 size-40 rounded-full bg-white/5" />

        <div className="relative">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
            <Sparkles className="size-3.5" />

            <span>
              Ta'lim menejmenti platformasi
            </span>
          </div>

          <h2 className="max-w-[320px] text-2xl font-bold leading-tight tracking-tight">
            {user
              ? `Assalomu alaykum, ${user.first_name}!`
              : 'Xush kelibsiz!'}
          </h2>

          <p className="mt-3 max-w-[330px] text-sm leading-6 text-primary-foreground/80">
            Rahbarlik bilimlarini mustahkamlang,
            boshqaruv kompetensiyalaringizni rivojlantiring
            va real vaziyatlarda qaror qabul qilish
            ko‘nikmalaringizni sinang.
          </p>

          <button
            type="button"
            onClick={onStart}
            className="mt-6 flex w-full items-center justify-between rounded-2xl bg-primary-foreground px-4 py-3.5 text-left text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="size-5" />

              O‘rganishni boshlash
            </span>

            <ArrowRight className="size-5" />
          </button>

        </div>
      </section>

      {/* =====================================================
          CONCEPT
      ====================================================== */}

      <section className="rounded-3xl border bg-card p-5 shadow-sm">

        <div className="flex items-start gap-4">

          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
            <Brain className="size-5" />
          </div>

          <div className="min-w-0">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Menejerlik konsepsiyasi
            </p>

            <p className="mt-2 text-base font-semibold">
              Bilim → Tahlil → Qaror → Natija
            </p>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Nazariy bilimlarni amaliy boshqaruv
              vaziyatlari bilan bog‘lab o‘rganing.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          EDUCATION DIRECTIONS
      ====================================================== */}

      <section className="flex flex-col gap-3">

        <div className="flex items-end justify-between px-1">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Yo‘nalishlar
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Ta’lim tizimini tanlang
            </h2>
          </div>

          <Target className="size-5 text-primary" />

        </div>

        {/* =====================================================
            BOG‘CHA
        ====================================================== */}

        <button
          type="button"
          onClick={onStart}
          className="group relative overflow-hidden rounded-3xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >

          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5" />

          <div className="relative flex items-center gap-4">

            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl shadow-sm">
              🧸
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center gap-2">

                <h3 className="font-bold">
                  BOG‘CHA
                </h3>

                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase">
                  Maktabgacha
                </span>

              </div>

              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                Maktabgacha ta’lim tashkilotlarini
                boshqarish va rivojlantirish.
              </p>

            </div>

            <ChevronRight
              className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />

          </div>
        </button>

        {/* =====================================================
            MAKTAB
        ====================================================== */}

        <button
          type="button"
          onClick={onStart}
          className="group relative overflow-hidden rounded-3xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >

          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5" />

          <div className="relative flex items-center gap-4">

            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl shadow-sm">
              🏫
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center gap-2">

                <h3 className="font-bold">
                  MAKTAB
                </h3>

                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase">
                  Umumiy ta’lim
                </span>

              </div>

              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                Umumiy o‘rta ta’lim maktablarini
                boshqarish va rivojlantirish.
              </p>

            </div>

            <ChevronRight
              className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />

          </div>
        </button>

      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section className="grid grid-cols-3 gap-2">

        <StatCard
          icon={<BookOpen className="size-4" />}
          label="Testlar"
          value={String(safeStats.count)}
        />

        <StatCard
          icon={<Target className="size-4" />}
          label="O‘rtacha"
          value={`${safeStats.average}%`}
        />

        <StatCard
          icon={<Trophy className="size-4" />}
          label="Rekord"
          value={`${safeStats.best}%`}
        />

      </section>

      {/* =====================================================
          RANKING
      ====================================================== */}

      <button
        type="button"
        onClick={onRanking}
        className="group relative overflow-hidden rounded-3xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]"
      >

        <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/5" />

        <div className="relative flex items-center gap-4">

          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary">
            <Trophy className="size-7 text-primary" />
          </div>

          <div className="min-w-0 flex-1">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Reyting
            </p>

            <h3 className="mt-1 text-lg font-bold">
              🏆 Menejerlik TOP reyting
            </h3>

            <p className="mt-1 text-sm leading-5 text-muted-foreground">
              Qatnashchilar orasidagi o‘rningizni
              va eng yuqori natijalarni ko‘ring.
            </p>

          </div>

          <ChevronRight
            className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />

        </div>
      </button>

      {/* =====================================================
          AI YORDAMCHI
      ====================================================== */}

      {onAI && (
        <button
          type="button"
          onClick={onAI}
          className="group relative overflow-hidden rounded-3xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]"
        >

          <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/5" />

          <div className="relative flex items-center gap-4">

            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary">
              <Sparkles className="size-7 text-primary" />
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                Sun’iy intellekt
              </p>

              <h3 className="mt-1 text-lg font-bold">
                🤖 AI menejer yordamchi
              </h3>

              <p className="mt-1 text-sm leading-5 text-muted-foreground">
                Menejment bo‘yicha savollar bering,
                tahlil qiling va yangi bilimlarni o‘rganing.
              </p>

            </div>

            <ChevronRight
              className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />

          </div>
        </button>
      )}

      {/* =====================================================
          LEARNING PRINCIPLES
      ====================================================== */}

      <section className="rounded-3xl border bg-muted/40 p-5">

        <div className="mb-4">

          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Platforma imkoniyatlari
          </p>

          <h2 className="mt-1 text-lg font-bold">
            Bilimingizni tizimli rivojlantiring
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-3">

          <Feature
            icon="📚"
            title="Modullar"
            text="Tizimli bilim"
          />

          <Feature
            icon="🎯"
            title="Darajalar"
            text="4 xil murakkablik"
          />

          <Feature
            icon="🧠"
            title="Keyslar"
            text="Amaliy vaziyatlar"
          />

          <Feature
            icon="📊"
            title="Natijalar"
            text="O‘zgarishni kuzatish"
          />

        </div>

      </section>

      {/* =====================================================
          RECENT RESULTS
      ====================================================== */}

      {safeHistory.length > 0 && (
        <section className="flex flex-col gap-3">

          <div className="flex items-center gap-2 px-1">

            <History
              className="size-4 text-primary"
              aria-hidden="true"
            />

            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              So‘nggi natijalar
            </h2>

          </div>

          <div className="overflow-hidden rounded-3xl border bg-card">

            {safeHistory.slice(0, 5).map((attempt) => {

              const percentage =
                attempt.total > 0
                  ? Math.round(
                      (attempt.correct / attempt.total) * 100,
                    )
                  : 0

              return (
                <div
                  key={attempt.id}
                  className="flex items-center gap-3 border-b p-4 last:border-b-0"
                >

                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Brain className="size-4" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="truncate text-sm font-semibold">
                      Test natijasi
                    </p>

                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {new Date(
                        attempt.at,
                      ).toLocaleDateString(
                        'uz-UZ',
                        {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        },
                      )}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-sm font-bold tabular-nums">
                      {percentage}%
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {attempt.correct}/{attempt.total}
                    </p>

                  </div>

                </div>
              )
            })}

          </div>

        </section>
      )}

      {/* =====================================================
          AUTHOR / FOOTER
      ====================================================== */}

      <footer className="mt-2 rounded-3xl border bg-card px-5 py-6 text-center">

        <div className="mx-auto flex size-10 items-center justify-center rounded-2xl bg-secondary">
          <GraduationCap className="size-5 text-primary" />
        </div>

        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Menejerlik platformasi
        </p>

        <p className="mt-2 text-sm font-semibold">
          Ta’lim menejmenti va rahbarlik
          kompetensiyalarini rivojlantirish loyihasi
        </p>

        <div className="mx-auto my-4 h-px w-12 bg-border" />

        <p className="text-xs leading-5 text-muted-foreground">
          Muallif
        </p>

        <p className="mt-1 text-sm font-bold">
          Talatbekov Nurmuhammad
        </p>

        <p className="mt-1 text-xs text-muted-foreground">
          Abdulla Avloniy nomidagi pedagogik
          mahorat milliy instituti magistranti
        </p>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground/70">
          Bilim · Tahlil · Qaror · Natija
        </p>

      </footer>

    </div>
  )
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border bg-card p-3 shadow-sm">

      <div className="flex items-center gap-1.5 text-muted-foreground">

        {icon}

        <span className="text-[11px] font-medium">
          {label}
        </span>

      </div>

      <p className="mt-2 text-lg font-bold tabular-nums">
        {value}
      </p>

    </div>
  )
}

/* =========================================================
   FEATURE CARD
========================================================= */

function Feature({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border bg-card p-3">

      <div className="text-xl">
        {icon}
      </div>

      <p className="mt-2 text-sm font-semibold">
        {title}
      </p> 

      <p className="mt-0.5 text-xs text-muted-foreground">
        {text}
      </p>

    </div>
  )
} // Home screen updated
