'use client'

import type { ReactNode } from 'react'

import {
  ArrowRight,
  Award,
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

type EducationType = 'school' | 'preschool'

type Props = {
  user?: TelegramUser | null
  history?: Attempt[] | null
  stats?: Stats | null
  bestByCategory?: Record<string, number> | null
  onSelectEducation: (
    educationType: EducationType,
  ) => void
  onAI?: () => void
  onRanking: () => void
}

export function HomeScreen({
  user,
  history,
  stats,
  bestByCategory,
  onSelectEducation,
  onAI,
  onRanking,
}: Props) {
  const safeHistory = Array.isArray(history)
    ? history
    : []

  const safeStats: Stats = {
    count: Number(stats?.count ?? 0),
    average: Number(stats?.average ?? 0),
    best: Number(stats?.best ?? 0),
  }

  const safeBestByCategory = bestByCategory ?? {}

  void safeBestByCategory

  const firstName = user?.first_name?.trim()

  return (
    <div className="relative flex flex-col gap-5 overflow-hidden pb-8">

      {/* =====================================================
          TOP BRAND
      ===================================================== */}

      <header className="flex items-center justify-between pt-1">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative flex size-12 shrink-0 items-center justify-center rounded-[17px] bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 text-white shadow-lg shadow-blue-900/20">
            <GraduationCap
              className="size-6"
              strokeWidth={2}
            />

            <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-background bg-amber-400" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Professional Education
            </p>

            <h1 className="mt-0.5 truncate text-[19px] font-black tracking-tight">
              MENEJERLIK
              <span className="ml-1.5 text-blue-700">
                BY NURMUHAMMAD
              </span>
            </h1>
          </div>
        </div>

        {onAI ? (
          <button
            type="button"
            onClick={onAI}
            aria-label="AI yordamchi"
            className="group flex size-11 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-sm transition-all hover:border-blue-200 hover:shadow-md active:scale-95 dark:border-white/10 dark:bg-card"
          >
            <Sparkles className="size-5 text-blue-700 transition-transform group-hover:rotate-12" />
          </button>
        ) : (
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-card">
            <Sparkles className="size-5 text-blue-700" />
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b1f44] via-[#123b78] to-[#1769aa] px-6 py-7 text-white shadow-xl shadow-blue-900/20">

        {/* decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full border border-white/10 bg-white/[0.04]" />

        <div className="pointer-events-none absolute -right-8 top-8 size-24 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 size-52 rounded-full bg-blue-300/10 blur-2xl" />

        <div className="pointer-events-none absolute bottom-8 right-8 size-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.9)]" />

        <div className="relative">

          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-md">
            <span className="flex size-5 items-center justify-center rounded-full bg-amber-400 text-slate-900">
              <Sparkles className="size-3" />
            </span>

            Attestatsiyaga tayyorgarlik
          </div>

          {/* greeting */}
          <h2 className="mt-5 max-w-[330px] text-[27px] font-black leading-[1.12] tracking-tight">
            {firstName
              ? `Assalomu alaykum, ${firstName}!`
              : 'Xush kelibsiz!'}
          </h2>

          <p className="mt-3 max-w-[340px] text-[13px] leading-6 text-blue-50/80">
            Lavozimingiz va faoliyatingizga mos
            tayyorgarlik yo‘nalishini tanlang.
            Bilimingizni sinang, natijangizni
            kuzating va professional rivojlaning.
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={() =>
              onSelectEducation('school')
            }
            className="group mt-6 flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-left text-sm font-bold text-slate-900 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
          >
            <span className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <BookOpen className="size-4" />
              </span>

              Tayyorgarlikni boshlash
            </span>

            <span className="flex size-8 items-center justify-center rounded-xl bg-slate-100 transition-transform group-hover:translate-x-1">
              <ArrowRight className="size-4" />
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ===================================================== */}

      <section className="grid grid-cols-3 gap-2.5">
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
          EDUCATION DIRECTIONS
      ===================================================== */}

      <section className="flex flex-col gap-3.5">

        <div className="flex items-end justify-between px-1">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Tayyorlanish yo‘nalishi
            </p>

            <h2 className="mt-1 text-[20px] font-black tracking-tight">
              Yo‘nalishingizni tanlang
            </h2>
          </div>

          <div className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/40">
            <Target className="size-4.5" />
          </div>
        </div>

        {/* MAKTAB */}
        <EducationCard
          icon="🏫"
          title="MAKTAB"
          badge="UMUMIY O‘RTA TA’LIM"
          description="Direktor, direktor o‘rinbosari va fan o‘qituvchilari uchun professional tayyorgarlik."
          accent="blue"
          onClick={() =>
            onSelectEducation('school')
          }
        />

        {/* MAKTABGACHA */}
        <EducationCard
          icon="🧸"
          title="MAKTABGACHA TA’LIM"
          badge="MAKTABGACHA TA’LIM"
          description="Rahbarlar va pedagoglar uchun attestatsiya hamda professional rivojlanish."
          accent="gold"
          onClick={() =>
            onSelectEducation('preschool')
          }
        />
      </section>

      {/* =====================================================
          CONCEPT
      ===================================================== */}

      <section className="relative overflow-hidden rounded-[25px] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-5 shadow-sm dark:border-white/10 dark:from-blue-950/20 dark:to-card">

        <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-blue-100/60 dark:bg-blue-900/10" />

        <div className="relative flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md shadow-blue-700/20">
            <Brain className="size-5" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-700">
              Menejerlik konsepsiyasi
            </p>

            <p className="mt-2 text-[16px] font-black tracking-tight">
              Bilim
              <span className="mx-1.5 text-blue-700">→</span>
              Tahlil
              <span className="mx-1.5 text-blue-700">→</span>
              Qaror
              <span className="mx-1.5 text-blue-700">→</span>
              Natija
            </p>

            <p className="mt-2 text-[12px] leading-5 text-muted-foreground">
              Nazariy bilimlarni amaliy vaziyatlar,
              tahlil va samarali qaror qabul qilish
              bilan bog‘lab rivojlaning.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RANKING
      ===================================================== */}

      <button
        type="button"
        onClick={onRanking}
        className="group relative overflow-hidden rounded-[25px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
      >
        <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-amber-400/5" />

        <div className="relative flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 text-amber-600 dark:from-amber-950/40 dark:to-yellow-950/20">
            <Trophy className="size-7" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-amber-600">
              Natijalar
            </p>

            <h3 className="mt-1 text-[17px] font-black">
              Menejerlik TOP reyting
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
              Qatnashchilar orasidagi o‘rningizni
              va yuqori natijalarni ko‘ring.
            </p>
          </div>

          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted transition-all group-hover:bg-amber-50 dark:group-hover:bg-amber-950/20">
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </button>

      {/* =====================================================
          AI
      ===================================================== */}

      {onAI && (
        <button
          type="button"
          onClick={onAI}
          className="group relative overflow-hidden rounded-[25px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-blue-500/5" />

          <div className="relative flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 text-blue-700 dark:from-blue-950/40 dark:to-indigo-950/20">
              <Sparkles className="size-7" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-700">
                Sun’iy intellekt
              </p>

              <h3 className="mt-1 text-[17px] font-black">
                AI menejer yordamchi
              </h3>

              <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
                Savollar bering, tahlil qiling va
                menejment bo‘yicha bilimlaringizni
                rivojlantiring.
              </p>
            </div>

            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted">
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </button>
      )}

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="rounded-[25px] border bg-muted/30 p-5">

        <div className="mb-4">
          <p className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-700">
            Platforma imkoniyatlari
          </p>

          <h2 className="mt-1 text-[18px] font-black tracking-tight">
            Bilimingizni tizimli rivojlantiring
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <Feature
            icon="📚"
            title="Modullar"
            text="Tizimli bilim"
          />

          <Feature
            icon="🎯"
            title="Darajalar"
            text="Murakkablik bosqichlari"
          />

          <Feature
            icon="🧠"
            title="Amaliy vaziyatlar"
            text="Keys va tahlil"
          />

          <Feature
            icon="📊"
            title="Natijalar"
            text="Rivojlanishni kuzatish"
          />
        </div>
      </section>

      {/* =====================================================
          RECENT RESULTS
      ===================================================== */}

      {safeHistory.length > 0 && (
        <section className="flex flex-col gap-3">

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/30">
                <History className="size-4" />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-700">
                  Faollik
                </p>

                <h2 className="text-sm font-bold">
                  So‘nggi natijalar
                </h2>
              </div>
            </div>

            <Award className="size-5 text-muted-foreground" />
          </div>

          <div className="overflow-hidden rounded-[23px] border bg-card">
            {safeHistory.slice(0, 5).map(
              (attempt) => {
                const percentage =
                  attempt.total > 0
                    ? Math.round(
                        (attempt.correct /
                          attempt.total) *
                          100,
                      )
                    : 0

                return (
                  <div
                    key={attempt.id}
                    className="flex items-center gap-3 border-b p-4 last:border-b-0"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/30">
                      <Brain className="size-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">
                        Test natijasi
                      </p>

                      <p className="mt-0.5 text-[10px] text-muted-foreground">
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
                      <p
                        className={`text-sm font-black tabular-nums ${
                          percentage >= 80
                            ? 'text-emerald-600'
                            : percentage >= 60
                              ? 'text-amber-600'
                              : 'text-red-500'
                        }`}
                      >
                        {percentage}%
                      </p>

                      <p className="text-[10px] text-muted-foreground">
                        {attempt.correct}/
                        {attempt.total}
                      </p>
                    </div>
                  </div>
                )
              },
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative overflow-hidden rounded-[26px] border bg-card px-5 py-7 text-center">

        <div className="pointer-events-none absolute left-1/2 top-0 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5" />

        <div className="relative">
          <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-md shadow-blue-900/20">
            <GraduationCap className="size-5" />
          </div>

          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">
            MENEJERLIK BY NURMUHAMMAD
          </p>

          <p className="mt-2 text-sm font-bold leading-5">
            Ta’lim menejmenti va rahbarlik
            kompetensiyalarini rivojlantirish
          </p>

          <div className="mx-auto my-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-border" />
            <span className="size-1 rounded-full bg-amber-400" />
            <span className="h-px w-8 bg-border" />
          </div>

          <p className="text-[10px] text-muted-foreground">
            Muallif
          </p>

          <p className="mt-1 text-sm font-black">
            Talatbekov Nurmuhammad
          </p>

          <p className="mx-auto mt-1 max-w-[290px] text-[10px] leading-4 text-muted-foreground">
            Abdulla Avloniy nomidagi pedagogik
            mahorat milliy instituti magistranti
          </p>

          <div className="mt-5 inline-flex items-center rounded-full border bg-muted/50 px-3 py-1.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Bilim · Tahlil · Qaror · Natija
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* =========================================================
   EDUCATION CARD
========================================================= */

function EducationCard({
  icon,
  title,
  badge,
  description,
  accent,
  onClick,
}: {
  icon: string
  title: string
  badge: string
  description: string
  accent: 'blue' | 'gold'
  onClick: () => void
}) {
  const isGold = accent === 'gold'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[26px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99] ${
        isGold
          ? 'border-amber-100 dark:border-amber-900/20'
          : 'border-blue-100 dark:border-blue-900/20'
      }`}
    >
      {/* decorative background */}
      <div
        className={`pointer-events-none absolute -right-8 -top-8 size-32 rounded-full ${
          isGold
            ? 'bg-amber-400/5'
            : 'bg-blue-500/5'
        }`}
      />

      <div className="relative flex items-center gap-4">

        <div
          className={`flex size-14 shrink-0 items-center justify-center rounded-[19px] text-[26px] shadow-sm ${
            isGold
              ? 'bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950/30 dark:to-yellow-950/20'
              : 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/20'
          }`}
        >
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">

            <h3 className="text-[15px] font-black tracking-tight">
              {title}
            </h3>

            <span
              className={`rounded-full px-2 py-1 text-[8px] font-black uppercase tracking-wide ${
                isGold
                  ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400'
                  : 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400'
              }`}
            >
              {badge}
            </span>
          </div>

          <p className="mt-1.5 text-[11px] leading-[1.45] text-muted-foreground">
            {description}
          </p>
        </div>

        <div
          className={`flex size-8 shrink-0 items-center justify-center rounded-xl transition-all ${
            isGold
              ? 'bg-amber-50 text-amber-600 dark:bg-amber-950/20'
              : 'bg-blue-50 text-blue-700 dark:bg-blue-950/20'
          }`}
        >
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </button>
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
    <div className="rounded-[20px] border bg-card p-3.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <span className="text-blue-700">
          {icon}
        </span>

        <span className="text-[10px] font-semibold">
          {label}
        </span>
      </div>

      <p className="mt-2 text-[19px] font-black tabular-nums tracking-tight">
        {value}
      </p>
    </div>
  )
}

/* =========================================================
   FEATURE
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
    <div className="rounded-[19px] border bg-card p-3.5 transition-colors hover:bg-muted/50">
      <div className="flex size-9 items-center justify-center rounded-xl bg-muted text-lg">
        {icon}
      </div>

      <p className="mt-2.5 text-[12px] font-black">
        {title}
      </p>

      <p className="mt-0.5 text-[10px] leading-4 text-muted-foreground">
        {text}
      </p>
    </div>
  )
}
