
'use client'

import { useMemo, useState, type ReactNode } from 'react'

import {
  GraduationCap,
  Sparkles,
  Search,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Trophy,
  Target,
  BrainCircuit,
  Presentation,
  Baby,
  School,
  History,
  Brain,
  Zap,
  X,
  Medal,
  ChartNoAxesCombined,
  Lightbulb,
  Rocket,
  Compass,
  Star,
  Layers3,
  Microscope,
  ShieldCheck,
  WandSparkles,
  BookMarked,
  Users,
} from 'lucide-react'

import type { Attempt } from '@/hooks/use-history'
import type { TelegramUser } from '@/lib/telegram'

/* =====================================================
   TYPES
===================================================== */

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

  onSelectEducation: (educationType: EducationType) => void
  onAI?: () => void
  onRanking: () => void
  onStudentAcademy?: () => void
  onSlides?: () => void
}

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
  color: string
  bg: string
  accent: string
  onClick: () => void
  disabled?: boolean
  badge?: string
}

/* =====================================================
   MAIN HOME SCREEN
===================================================== */

export function HomeScreen({
  user,
  history,
  stats,
  bestByCategory,
  onSelectEducation,
  onAI,
  onRanking,
  onStudentAcademy,
  onSlides,
}: Props) {
  const [search, setSearch] = useState('')

  const safeHistory = Array.isArray(history) ? history : []

  const safeStats: Stats = {
    count: Number(stats?.count ?? 0),
    average: Number(stats?.average ?? 0),
    best: Number(stats?.best ?? 0),
  }

  const safeBestByCategory = bestByCategory ?? {}
  void safeBestByCategory

  const displayName =
    user?.first_name?.trim() || 'Foydalanuvchi'

  /* SERVICES */

  const serviceGroups = useMemo(() => [
    {
      id: 'management',
      title: 'Ta’lim boshqaruvi',
      description: 'Rahbarlar, pedagoglar va ta’lim tashkilotlari uchun',
      icon: <School className="size-5" />,
      color: 'text-blue-700',
      services: [
        {
          title: 'Maktab',
          description: 'Direktorlar, rahbarlar va pedagoglar uchun',
          keywords: 'maktab menejer direktor test attestatsiya',
          icon: <School className="size-6" />,
          color: 'text-blue-700',
          bg: 'bg-blue-100 dark:bg-blue-950/50',
          accent: 'bg-blue-600',
          onClick: () => onSelectEducation('school'),
        },
        {
          title: 'Maktabgacha ta’lim',
          description: 'Bog‘cha mudiralari va pedagoglar uchun',
          keywords: 'bogcha maktabgacha mudira tarbiyachi',
          icon: <Baby className="size-6" />,
          color: 'text-amber-700',
          bg: 'bg-amber-100 dark:bg-amber-950/50',
          accent: 'bg-amber-500',
          onClick: () => onSelectEducation('preschool'),
        },
      ],
    },
    {
      id: 'academy',
      title: 'O‘quvchilar akademiyasi',
      description: 'Yangi avlod uchun bilim va intellektual rivojlanish',
      icon: <GraduationCap className="size-5" />,
      color: 'text-emerald-700',
      services: [
        {
          title: 'O‘quvchi akademiyasi',
          description: '1–11-sinf, fanlar va bilim sinovlari',
          keywords: 'oquvchi akademiya fanlar sinf',
          icon: <GraduationCap className="size-6" />,
          color: 'text-emerald-700',
          bg: 'bg-emerald-100 dark:bg-emerald-950/50',
          accent: 'bg-emerald-600',
          onClick: () => onStudentAcademy?.(),
          disabled: !onStudentAcademy,
        },
        {
          title: 'Mantiq va IQ',
          description: 'Aqliy salohiyat va tahliliy fikrlash',
          keywords: 'iq mantiq brain intelligence fikrlash',
          icon: <Brain className="size-6" />,
          color: 'text-violet-700',
          bg: 'bg-violet-100 dark:bg-violet-950/50',
          accent: 'bg-violet-600',
          onClick: () => onStudentAcademy?.(),
          disabled: !onStudentAcademy,
        },
      ],
    },
    {
      id: 'innovation',
      title: 'AI va innovatsiya',
      description: 'Raqamli vositalar yordamida yangi imkoniyatlar',
      icon: <Sparkles className="size-5" />,
      color: 'text-purple-700',
      services: [
        {
          title: 'AI yordamchi',
          description: 'Savollarga javob va aqlli tahlil',
          keywords: 'suniy intellekt ai yordamchi chatbot',
          icon: <BrainCircuit className="size-6" />,
          color: 'text-indigo-700',
          bg: 'bg-indigo-100 dark:bg-indigo-950/50',
          accent: 'bg-indigo-600',
          onClick: () => onAI?.(),
          disabled: !onAI,
          badge: 'AI',
        },
        {
          title: 'Slayd yaratish',
          description: 'Professional taqdimotlar tayyorlash',
          keywords: 'slayd prezentatsiya taqdimot powerpoint',
          icon: <Presentation className="size-6" />,
          color: 'text-purple-700',
          bg: 'bg-purple-100 dark:bg-purple-950/50',
          accent: 'bg-purple-600',
          onClick: () => onSlides?.(),
          disabled: !onSlides,
          badge: 'AI',
        },
      ],
    },
  ], [
    onSelectEducation,
    onStudentAcademy,
    onAI,
    onSlides,
  ])

  const filteredGroups = useMemo(() => {
    const query = search.trim().toLowerCase()

    return serviceGroups
      .map((group) => ({
        ...group,
        services: group.services.filter((service) => {
          if (!query) return true

          return (
            `${service.title} ${service.description} ${service.keywords}`
              .toLowerCase()
              .includes(query)
          )
        }),
      }))
      .filter((group) => group.services.length > 0)
  }, [serviceGroups, search])

  const serviceCount = serviceGroups.reduce(
    (total, group) =>
      total + group.services.filter((service) => !service.disabled).length,
    0,
  )

  return (
    <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-7 overflow-hidden pb-10">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="flex items-center justify-between gap-3 pt-3">

        <div className="flex min-w-0 items-center gap-3">

          <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800 text-white shadow-lg shadow-blue-700/20">
            <GraduationCap className="size-7" />
            <div className="absolute -right-2 -top-2 size-7 rounded-full bg-white/20 blur-md" />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-muted-foreground">
              Smart Education Ecosystem
            </p>

            <h1 className="truncate text-xl font-black tracking-tight">
              BILIM
              <span className="ml-1.5 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
          </div>

        </div>

        <div className="flex items-center gap-2">

          <div className="hidden rounded-full border bg-card px-3 py-2 text-[10px] font-bold text-muted-foreground sm:flex sm:items-center sm:gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-600" />
            Raqamli ta’lim
          </div>

          {onAI && (
            <button
              type="button"
              onClick={onAI}
              aria-label="AI yordamchini ochish"
              className="flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-card shadow-sm transition hover:border-blue-300 hover:bg-blue-50 active:scale-95 dark:hover:bg-blue-950/40"
            >
              <Sparkles className="size-5 text-blue-700" />
            </button>
          )}

        </div>

      </header>


      {/* =================================================
          WELCOME HERO
      ================================================= */}

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#07152f] via-[#122e67] to-[#4435a4] p-5 text-white shadow-xl shadow-blue-950/10 sm:p-7">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border border-white/10 bg-white/[0.04]" />
        <div className="pointer-events-none absolute -right-10 top-12 size-48 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">

          <div className="flex flex-wrap items-center justify-between gap-3">

            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em]">
              <Sparkles className="size-3.5 text-amber-300" />
              Kelajak ta’limi shu yerdan boshlanadi
            </span>

            <span className="flex items-center gap-1.5 text-[10px] font-semibold text-blue-100/70">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Bilim olish uchun tayyor
            </span>

          </div>

          <div className="mt-7 max-w-2xl">

            <p className="text-xs font-semibold text-cyan-200">
              Assalomu alaykum!
            </p>

            <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {displayName}
              <span className="text-cyan-300">!</span>
            </h2>

            <h3 className="mt-3 text-xl font-bold leading-snug text-white/95 sm:text-2xl">
              Bilim sari yangi imkoniyatlar!
            </h3>

            <p className="mt-3 max-w-lg text-xs leading-6 text-blue-100/75 sm:text-sm">
              O‘rganing, izlaning, o‘z salohiyatingizni kashf eting.
              Barcha ta’lim imkoniyatlari bitta raqamli platformada.
            </p>

          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <button
              type="button"
              onClick={() => onSelectEducation('school')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-slate-950 shadow-lg transition hover:bg-cyan-50 active:scale-[0.98]"
            >
              <BookOpen className="size-5 text-blue-700" />
              Bilimni sinash
              <ArrowRight className="size-4" />
            </button>

            {onAI && (
              <button
                type="button"
                onClick={onAI}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15 active:scale-[0.98]"
              >
                <WandSparkles className="size-5 text-cyan-200" />
                AI bilan ishlash
              </button>
            )}

          </div>

          {/* Three principles */}

          <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">

            <div>
              <BrainCircuit className="size-5 text-cyan-300" />
              <p className="mt-2 text-[10px] font-bold sm:text-xs">
                Aqlli ta’lim
              </p>
              <p className="mt-1 text-[9px] text-white/50">
                AI imkoniyatlari
              </p>
            </div>

            <div>
              <Target className="size-5 text-violet-300" />
              <p className="mt-2 text-[10px] font-bold sm:text-xs">
                Individual rivojlanish
              </p>
              <p className="mt-1 text-[9px] text-white/50">
                Shaxsiy natijalar
              </p>
            </div>

            <div>
              <Rocket className="size-5 text-amber-300" />
              <p className="mt-2 text-[10px] font-bold sm:text-xs">
                Yangi imkoniyat
              </p>
              <p className="mt-1 text-[9px] text-white/50">
                Kelajak sari
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =================================================
          SEARCH
      ================================================= */}

      <section className="space-y-3">

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-700">
            Tezkor navigatsiya
          </p>

          <h2 className="mt-1 text-lg font-black tracking-tight">
            Sizga nima kerak?
          </h2>
        </div>

        <div className="group relative">

          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground transition group-focus-within:text-blue-600" />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Xizmat yoki yo‘nalishni qidiring..."
            aria-label="Platforma xizmatlarini qidirish"
            className="h-14 w-full rounded-2xl border bg-card pl-12 pr-12 text-sm shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Qidiruvni tozalash"
              className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-xl hover:bg-muted"
            >
              <X className="size-4" />
            </button>
          )}

        </div>

        {search && (
          <p className="px-1 text-[10px] text-muted-foreground">
            {filteredGroups.reduce(
              (total, group) => total + group.services.length,
              0,
            )} ta mos xizmat topildi
          </p>
        )}

      </section>


      {/* =================================================
          STATISTICS
      ================================================= */}

      <section className="space-y-3">

        <div className="flex items-center justify-between px-1">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Shaxsiy ko‘rsatkichlar
            </p>

            <h2 className="mt-1 text-lg font-black">
              Sizning natijalaringiz
            </h2>
          </div>

          <ChartNoAxesCombined className="size-6 text-blue-600" />

        </div>

        <div className="grid grid-cols-3 gap-2.5">

          <StatCard
            icon={<BookOpen />}
            value={safeStats.count}
            label="Testlar"
            color="blue"
          />

          <StatCard
            icon={<Target />}
            value={`${safeStats.average}%`}
            label="O‘rtacha"
            color="violet"
          />

          <StatCard
            icon={<Trophy />}
            value={`${safeStats.best}%`}
            label="Rekord"
            color="amber"
          />

        </div>

      </section>


      {/* =================================================
          ALL SERVICES
      ================================================= */}

      <section id="services" className="space-y-7">

        <div className="flex items-end justify-between gap-3 px-1">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-700">
              Platforma imkoniyatlari
            </p>

            <h2 className="mt-1 text-xl font-black tracking-tight">
              Barcha xizmatlar
            </h2>

            <p className="mt-1 text-[10px] text-muted-foreground">
              O‘zingizga kerakli yo‘nalishni tanlang.
            </p>
          </div>

          <span className="shrink-0 rounded-full border bg-card px-3 py-1.5 text-[10px] font-bold text-blue-700">
            {search
              ? filteredGroups.reduce(
                  (total, group) => total + group.services.length,
                  0,
                )
              : serviceCount
            } ta xizmat
          </span>

        </div>

        {filteredGroups.length > 0 ? (

          <div className="space-y-7">

            {filteredGroups.map((group) => (

              <div key={group.id} className="space-y-3">

                <div className="flex items-center gap-3 px-1">

                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted ${group.color}`}>
                    {group.icon}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-black">
                      {group.title}
                    </h3>

                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {group.description}
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {group.services.map((service) => (

                    <ServiceCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      color={service.color}
                      bg={service.bg}
                      accent={service.accent}
                      onClick={service.onClick}
                      disabled={service.disabled}
                      badge={service.badge}
                    />

                  ))}

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="rounded-[24px] border border-dashed bg-card p-8 text-center">

            <Search className="mx-auto size-9 text-muted-foreground" />

            <h3 className="mt-3 text-sm font-black">
              Xizmat topilmadi
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Boshqa so‘z bilan qidirib ko‘ring.
            </p>

            <button
              type="button"
              onClick={() => setSearch('')}
              className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white"
            >
              Qidiruvni tozalash
            </button>

          </div>

        )}

      </section>


      {/* =================================================
          STUDENT FUTURE DIRECTIONS
      ================================================= */}

      <section className="space-y-4">

        <div className="flex items-center justify-between gap-3 px-1">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-violet-600">
              Yangi avlod
            </p>

            <h2 className="mt-1 text-xl font-black">
              Kelajak yo‘nalishlari
            </h2>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Iqtidor va salohiyatni rivojlantirish.
            </p>
          </div>

          <div className="flex size-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-950/50">
            <Rocket className="size-6" />
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          <DirectionCard
            icon="🧠"
            title="Mantiq va IQ"
            text="Intellektual va tahliliy fikrlash"
          />

          <DirectionCard
            icon="📐"
            title="Matematika"
            text="Sinf va darajalar bo‘yicha"
          />

          <DirectionCard
            icon="🏛️"
            title="Prezident maktabi"
            text="Kirish imtihonlariga tayyorgarlik"
          />

          <DirectionCard
            icon="🥇"
            title="Olimpiada"
            text="Murakkab masalalar va tanlovlar"
          />

        </div>

      </section>


      {/* =================================================
          RECENT RESULTS
      ================================================= */}

      {safeHistory.length > 0 && (

        <section className="space-y-4">

          <div className="flex items-center justify-between px-1">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-700">
                Shaxsiy faollik
              </p>

              <h2 className="mt-1 text-lg font-black">
                So‘nggi natijalar
              </h2>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/40">
              <History className="size-5" />
            </div>

          </div>

          <div className="overflow-hidden rounded-[22px] border bg-card">

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
                  className="flex items-center gap-3 border-b p-3.5 last:border-0"
                >

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/40">
                    <BookMarked className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-sm font-bold">
                      Test natijasi
                    </p>

                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {new Date(attempt.at).toLocaleDateString(
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
                      className={`text-base font-black ${
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
                      {attempt.correct}/{attempt.total}
                    </p>

                  </div>

                </div>

              )
            })}

          </div>

        </section>

      )}


      {/* =================================================
          TOP RANKING
      ================================================= */}

      <button
        type="button"
        onClick={onRanking}
        className="group relative flex items-center gap-4 overflow-hidden rounded-[25px] border bg-card p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
      >

        <div className="absolute right-0 top-0 size-32 rounded-full bg-amber-400/5 blur-2xl" />

        <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950/40">
          <Medal className="size-6" />
        </div>

        <div className="relative min-w-0 flex-1">

          <p className="text-[9px] font-bold uppercase tracking-widest text-amber-700">
            Natijalar markazi
          </p>

          <h3 className="mt-1 text-sm font-black">
            TOP reyting
          </h3>

          <p className="mt-1 text-[10px] text-muted-foreground">
            Ishtirokchilar natijalari va yutuqlari.
          </p>

        </div>

        <ChevronRight className="relative size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />

      </button>


      {/* =================================================
          PLATFORM PRINCIPLES
      ================================================= */}

      <section className="relative overflow-hidden rounded-[25px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-violet-50 p-5 dark:border-white/10 dark:from-blue-950/30 dark:via-card dark:to-violet-950/20">

        <div className="flex items-start gap-4">

          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-700 text-white shadow-lg">
            <Lightbulb className="size-6" />
          </div>

          <div className="min-w-0">

            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">
              BILIM AI falsafasi
            </p>

            <h3 className="mt-2 text-lg font-black leading-snug">
              Har bir bilim — yangi imkoniyat.
            </h3>

            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Zamonaviy texnologiyalar, mustaqil fikrlash va
              uzluksiz ta’lim orqali kelajakni yarating.
            </p>

          </div>

        </div>

        <div className="mt-5 grid grid-cols-4 gap-2 border-t border-blue-200/60 pt-4 dark:border-white/10">

          {[
            { icon: <BookOpen />, label: 'Bilim' },
            { icon: <Brain />, label: 'Tahlil' },
            { icon: <Target />, label: 'Maqsad' },
            { icon: <Rocket />, label: 'Natija' },
          ].map((item) => (

            <div
              key={item.label}
              className="flex flex-col items-center gap-2 text-center"
            >

              <div className="text-blue-700 dark:text-blue-400 [&>svg]:size-5">
                {item.icon}
              </div>

              <span className="text-[9px] font-bold text-muted-foreground">
                {item.label}
              </span>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          FOOTER / AUTHOR
      ================================================= */}

      <footer className="rounded-[27px] border bg-card px-5 py-7 text-center">

        <div className="mx-auto flex size-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800 text-white shadow-lg shadow-blue-700/20">
          <GraduationCap className="size-8" />
        </div>

        <h2 className="mt-4 text-xl font-black tracking-tight">
          BILIM
          <span className="ml-1.5 text-blue-700">
            AI
          </span>
        </h2>

        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Smart Education Ecosystem
        </p>

        <p className="mx-auto mt-3 max-w-sm text-xs leading-5 text-muted-foreground">
          Sun’iy intellekt va raqamli texnologiyalar asosida
          ta’lim va rivojlanish imkoniyatlarini birlashtiruvchi platforma.
        </p>

        <div className="my-5 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-border" />
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
          <span className="h-px w-10 bg-border" />
        </div>

        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Loyiha muallifi
        </p>

        <h3 className="mt-2 text-base font-black text-blue-700">
          Mashrabboyeva Robiya Ma'ruf qizi
        </h3>

        <div className="mx-auto mt-3 max-w-sm rounded-2xl bg-blue-50 px-4 py-3 dark:bg-blue-950/30">

          <div className="flex items-center justify-center gap-2 text-blue-700">
            <School className="size-4" />
            <span className="text-[9px] font-black uppercase tracking-wider">
              Ta’lim muassasasi
            </span>
          </div>

          <p className="mt-2 text-[10px] font-medium leading-5 text-slate-700 dark:text-slate-200">
            Namangan viloyati, To‘raqo‘rg‘on tumani,
            54-sonli umumiy o‘rta ta’lim maktabining
            11-sinf o‘quvchisi
          </p>

        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-border" />
          <Sparkles className="size-4 text-violet-500" />
          <span className="h-px w-8 bg-border" />
        </div>

        <p className="mt-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
          Bilim · Innovatsiya · Kelajak
        </p>

        <p className="mt-2 text-[9px] text-muted-foreground">
          BILIM AI — Raqamli ta’lim sari yangi qadam.
        </p>

      </footer>

    </main>
  )
}


/* =====================================================
   SERVICE CARD
===================================================== */

function ServiceCard({
  icon,
  title,
  description,
  color,
  bg,
  accent,
  onClick,
  disabled = false,
  badge,
}: ServiceCardProps) {

  return (

    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group relative flex min-h-[155px] w-full flex-col items-start overflow-hidden rounded-[23px] border bg-card p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45"
    >

      <div className={`absolute right-0 top-0 h-24 w-24 rounded-full opacity-[0.07] blur-2xl ${accent}`} />

      <div className="relative flex w-full items-center justify-between">

        <div className={`flex size-11 items-center justify-center rounded-2xl ${bg} ${color} transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>

        {badge && (
          <span className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-2 py-1 text-[8px] font-black tracking-wider text-white">
            {badge}
          </span>
        )}

      </div>

      <h3 className="relative mt-4 text-sm font-black tracking-tight">
        {title}
      </h3>

      <p className="relative mt-1 flex-1 text-[10px] leading-5 text-muted-foreground">
        {description}
      </p>

      <div className={`relative mt-3 flex items-center gap-1.5 text-[10px] font-bold ${color}`}>
        {disabled ? 'Tez orada' : 'Xizmatni ochish'}

        {!disabled && (
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        )}
      </div>

    </button>

  )
}


/* =====================================================
   STAT CARD
===================================================== */

function StatCard({
  icon,
  value,
  label,
  color,
}: {
  icon: ReactNode
  value: string | number
  label: string
  color: 'blue' | 'violet' | 'amber'
}) {

  const styles = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/40',
      text: 'text-blue-700 dark:text-blue-400',
    },
    violet: {
      bg: 'bg-violet-50 dark:bg-violet-950/40',
      text: 'text-violet-700 dark:text-violet-400',
    },
    amber: {
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      text: 'text-amber-700 dark:text-amber-400',
    },
  }

  const style = styles[color]

  return (

    <div className="min-w-0 rounded-[20px] border bg-card p-3 shadow-sm transition hover:shadow-md sm:p-4">

      <div className="flex items-center gap-1.5">

        <div className={`flex size-8 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.text}`}>
          <span className="[&>svg]:size-4">
            {icon}
          </span>
        </div>

        <span className="truncate text-[9px] font-semibold text-muted-foreground sm:text-[10px]">
          {label}
        </span>

      </div>

      <p className="mt-3 truncate text-xl font-black tabular-nums tracking-tight sm:text-2xl">
        {value}
      </p>

    </div>

  )
}


/* =====================================================
   FUTURE DIRECTION CARD
===================================================== */

function DirectionCard({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {

  return (

    <div className="group rounded-[21px] border bg-card p-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-xl transition-transform group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-3 text-xs font-black">
        {title}
      </h3>

      <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
        {text}
      </p>

    </div>

  )
}
