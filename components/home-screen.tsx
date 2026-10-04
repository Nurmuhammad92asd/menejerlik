'use client'

import type { ReactNode } from 'react'

import {
  ArrowRight,
  Award,
  Brain,
  BrainCircuit,
  BookOpen,
  ChevronRight,
  Flame,
  GraduationCap,
  History,
  Medal,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
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

  /**
   * O‘quvchi Akademiyasi uchun.
   * Hozircha optional qoldirilgan — MenejerlikApp
   * buzilmasligi uchun.
   */
  onStudentAcademy?: () => void
}

export function HomeScreen({
  user,
  history,
  stats,
  bestByCategory,
  onSelectEducation,
  onAI,
  onRanking,
  onStudentAcademy,
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

  const displayName = firstName || 'Hurmatli foydalanuvchi'

  return (
    <div className="relative flex flex-col gap-5 overflow-hidden pb-10">

      {/* =====================================================
          TOP NAVIGATION / BRAND
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
              National Education Platform
            </p>

            <h1 className="mt-0.5 truncate text-[18px] font-black tracking-tight">
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
          PERSONAL GREETING
      ===================================================== */}

      <section className="px-1">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
          Shaxsiy ta’lim markazingiz
        </p>

        <h2 className="mt-1.5 text-[24px] font-black tracking-tight">
          Assalomu alaykum,
          <span className="text-blue-700">
            {' '}
            {displayName}
          </span>
        </h2>

        <p className="mt-1.5 max-w-[390px] text-[12px] leading-5 text-muted-foreground">
          Bugun ham bilimingizni bir qadam oldinga
          olib chiqing.
        </p>

      </section>


      {/* =====================================================
          DAILY MISSION
      ===================================================== */}

      <section className="relative overflow-hidden rounded-[27px] bg-gradient-to-br from-[#081a38] via-[#0d3267] to-[#1476ad] p-6 text-white shadow-xl shadow-blue-900/20">

        <div className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full border border-white/10 bg-white/[0.04]" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 size-56 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="pointer-events-none absolute right-8 top-20 size-2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(252,211,77,0.9)]" />

        <div className="relative">

          <div className="flex items-start justify-between gap-4">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">

                <span className="flex size-5 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                  <Zap className="size-3" />
                </span>

                <span className="text-[9px] font-black uppercase tracking-[0.14em]">
                  Bugungi maqsad
                </span>

              </div>

              <h3 className="mt-4 text-[24px] font-black leading-tight tracking-tight">
                Bilimni sinash vaqti
              </h3>

              <p className="mt-2 max-w-[330px] text-[12px] leading-5 text-blue-50/75">
                Har kuni kichik qadam. Har bir test
                katta natijaga olib boradi.
              </p>

            </div>

            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
              <Target className="size-6 text-cyan-200" />
            </div>

          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">

            <MissionStat
              icon="🧠"
              value="15"
              label="savol"
            />

            <MissionStat
              icon="⏱️"
              value="10"
              label="daqiqa"
            />

            <MissionStat
              icon="🏆"
              value="+50"
              label="XP"
            />

          </div>

          <button
            type="button"
            onClick={() =>
              onSelectEducation('school')
            }
            className="group mt-5 flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-left text-sm font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
          >

            <span className="flex items-center gap-2.5">

              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <BookOpen className="size-4" />
              </span>

              Bugungi testni boshlash

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
          STUDENT ACADEMY
      ===================================================== */}

      <section className="relative overflow-hidden rounded-[29px] border border-indigo-100 bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-800 p-6 text-white shadow-xl shadow-indigo-900/20 dark:border-white/10">

        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-white/10 bg-white/[0.035]" />

        <div className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="pointer-events-none absolute right-10 top-10 size-1.5 rounded-full bg-cyan-200" />

        <div className="relative">

          {/* heading */}

          <div className="flex items-start justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="flex size-14 shrink-0 items-center justify-center rounded-[19px] bg-white/10 text-2xl shadow-inner backdrop-blur-md">
                🎓
              </div>

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200">
                  Yangi avlod uchun
                </p>

                <h2 className="mt-1 text-[20px] font-black tracking-tight">
                  O‘quvchi Akademiyasi
                </h2>

              </div>

            </div>

            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20">
              <BrainCircuit className="size-5" />
            </div>

          </div>


          <p className="mt-5 max-w-[400px] text-[12px] leading-5 text-blue-50/80">
            O‘quvchilar uchun mantiqiy fikrlash,
            fanlar, Prezident maktabi,
            ixtisoslashtirilgan maktablar va
            olimpiadalarga tayyorgarlik platformasi.
          </p>


          {/* academy directions */}

          <div className="mt-5 grid grid-cols-3 gap-2">

            <AcademyMiniCard
              icon="🧠"
              title="Mantiq"
              subtitle="IQ"
            />

            <AcademyMiniCard
              icon="📚"
              title="Fanlar"
              subtitle="1–11 sinf"
            />

            <AcademyMiniCard
              icon="🏆"
              title="Tanlov"
              subtitle="Top natija"
            />

          </div>


          {/* CTA */}

          <button
            type="button"
            onClick={() => onStudentAcademy?.()}
            className="group mt-5 flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-left text-sm font-black text-slate-950 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99]"
          >

            <span className="flex items-center gap-2.5">

              <span className="flex size-9 items-center justify-center rounded-xl bg-indigo-50 text-lg">
                🚀
              </span>

              O‘quvchi Akademiyasiga kirish

            </span>

            <span className="flex size-8 items-center justify-center rounded-xl bg-slate-100 transition-transform group-hover:translate-x-1">
              <ArrowRight className="size-4" />
            </span>

          </button>

        </div>

      </section>


      {/* =====================================================
          ACADEMY PREVIEW
      ===================================================== */}

      <section className="flex flex-col gap-3.5">

        <div className="flex items-end justify-between px-1">

          <div>

            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-indigo-600">
              O‘quvchilar uchun
            </p>

            <h2 className="mt-1 text-[20px] font-black tracking-tight">
              Kelajak yo‘nalishlari
            </h2>

          </div>

          <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30">
            <BrainCircuit className="size-4.5" />
          </div>

        </div>


        <div className="grid grid-cols-2 gap-2.5">

          <AcademyDirectionCard
            icon="🧠"
            title="Mantiqiy fikrlash"
            text="IQ, ketma-ketlik, tahlil va tezkor fikrlash"
            accent="indigo"
          />

          <AcademyDirectionCard
            icon="📐"
            title="Matematika"
            text="Sinf darajasi va murakkablik bo‘yicha"
            accent="blue"
          />

          <AcademyDirectionCard
            icon="🏛️"
            title="Prezident maktabi"
            text="Kirish imtihonlariga bosqichma-bosqich tayyorgarlik"
            accent="gold"
          />

          <AcademyDirectionCard
            icon="🥇"
            title="Olimpiada"
            text="Murakkab masalalar va yuqori darajadagi fikrlash"
            accent="emerald"
          />

        </div>

      </section>


      {/* =====================================================
          PROFESSIONAL ACADEMY
      ===================================================== */}

      <section className="flex flex-col gap-3.5">

        <div className="flex items-end justify-between px-1">

          <div>

            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">
              Professional akademiya
            </p>

            <h2 className="mt-1 text-[20px] font-black tracking-tight">
              Kasbiy tayyorgarlik
            </h2>

          </div>

          <div className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/40">
            <Target className="size-4.5" />
          </div>

        </div>


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
          PROFESSIONAL CONCEPT
      ===================================================== */}

      <section className="relative overflow-hidden rounded-[26px] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-5 shadow-sm dark:border-white/10 dark:from-blue-950/20 dark:to-card">

        <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-blue-100/60 dark:bg-blue-900/10" />

        <div className="relative flex items-start gap-4">

          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-md shadow-blue-700/20">
            <Brain className="size-5" />
          </div>

          <div className="min-w-0">

            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-700">
              Menejerlik falsafasi
            </p>

            <p className="mt-2 text-[16px] font-black tracking-tight">
              Bilim
              <span className="mx-1.5 text-blue-700">
                →
              </span>
              Tahlil
              <span className="mx-1.5 text-blue-700">
                →
              </span>
              Qaror
              <span className="mx-1.5 text-blue-700">
                →
              </span>
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
        className="group relative overflow-hidden rounded-[26px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
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
              TOP reyting
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
              Menejerlar va ishtirokchilar orasidagi
              o‘rningizni kuzating.
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
          className="group relative overflow-hidden rounded-[26px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
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
                AI yordamchi
              </h3>

              <p className="mt-1 text-[12px] leading-5 text-muted-foreground">
                Savollar bering, tahlil qiling va
                bilimlaringizni rivojlantiring.
              </p>

            </div>

            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted">
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </div>

          </div>

        </button>
      )}


      {/* =====================================================
          PLATFORM FEATURES
      ===================================================== */}

      <section className="rounded-[26px] border bg-muted/30 p-5">

        <div className="mb-4">

          <p className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-700">
            Platforma
          </p>

          <h2 className="mt-1 text-[18px] font-black tracking-tight">
            Bir platformada ikki akademiya
          </h2>

          <p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">
            Rahbarlar va pedagoglar uchun professional
            rivojlanish. O‘quvchilar uchun bilim,
            mantiq va kelajak imtihonlariga tayyorgarlik.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-2.5">

          <Feature
            icon="👔"
            title="Menejerlik"
            text="Rahbar va pedagoglar"
          />

          <Feature
            icon="🎓"
            title="O‘quvchi"
            text="1–11 sinf"
          />

          <Feature
            icon="🧠"
            title="Mantiq"
            text="IQ va tahliliy fikrlash"
          />

          <Feature
            icon="🏆"
            title="Natija"
            text="XP, reyting va yutuqlar"
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

            {safeHistory
              .slice(0, 5)
              .map((attempt) => {

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
              })}
          </div>

        </section>
      )}


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative overflow-hidden rounded-[27px] border bg-card px-5 py-7 text-center">

        <div className="pointer-events-none absolute left-1/2 top-0 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5" />

        <div className="relative">

          <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-md shadow-blue-900/20">
            <GraduationCap className="size-5" />
          </div>

          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">
            MENEJERLIK BY NURMUHAMMAD
          </p>

          <p className="mt-2 text-sm font-bold leading-5">
            Ta’lim menejmenti,
            <br />
            professional rivojlanish
            <br />
            va yangi avlod ta’limi.
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
   DAILY MISSION STAT
========================================================= */

function MissionStat({
  icon,
  value,
  label,
}: {
  icon: string
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 backdrop-blur-md">

      <div className="text-base">
        {icon}
      </div>

      <p className="mt-1.5 text-[15px] font-black">
        {value}
      </p>

      <p className="text-[9px] text-white/50">
        {label}
      </p>

    </div>
  )
}


/* =========================================================
   ACADEMY MINI CARD
========================================================= */

function AcademyMiniCard({
  icon,
  title,
  subtitle,
}: {
  icon: string
  title: string
  subtitle: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 backdrop-blur-md">

      <div className="text-lg">
        {icon}
      </div>

      <p className="mt-2 text-[10px] font-black">
        {title}
      </p>

      <p className="mt-0.5 text-[9px] text-white/50">
        {subtitle}
      </p>

    </div>
  )
}


/* =========================================================
   ACADEMY DIRECTION CARD
========================================================= */

function AcademyDirectionCard({
  icon,
  title,
  text,
  accent,
}: {
  icon: string
  title: string
  text: string
  accent:
    | 'indigo'
    | 'blue'
    | 'gold'
    | 'emerald'
}) {
  const styles = {
    indigo: {
      border:
        'border-indigo-100 dark:border-indigo-900/20',
      bg:
        'bg-indigo-50 dark:bg-indigo-950/20',
      text:
        'text-indigo-700 dark:text-indigo-300',
    },
    blue: {
      border:
        'border-blue-100 dark:border-blue-900/20',
      bg:
        'bg-blue-50 dark:bg-blue-950/20',
      text:
        'text-blue-700 dark:text-blue-300',
    },
    gold: {
      border:
        'border-amber-100 dark:border-amber-900/20',
      bg:
        'bg-amber-50 dark:bg-amber-950/20',
      text:
        'text-amber-700 dark:text-amber-300',
    },
    emerald: {
      border:
        'border-emerald-100 dark:border-emerald-900/20',
      bg:
        'bg-emerald-50 dark:bg-emerald-950/20',
      text:
        'text-emerald-700 dark:text-emerald-300',
    },
  }

  const style = styles[accent]

  return (
    <div
      className={`rounded-[21px] border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${style.border}`}
    >

      <div
        className={`flex size-10 items-center justify-center rounded-xl text-lg ${style.bg}`}
      >
        {icon}
      </div>

      <p
        className={`mt-3 text-[12px] font-black ${style.text}`}
      >
        {title}
      </p>

      <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
        {text}
      </p>

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
