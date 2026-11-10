
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
  Award,
  Brain,
  Zap,
  FileText,
  Users,
  X,
  Medal,
  ChartNoAxesCombined,
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
  onClick: () => void
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

  const firstName = user?.first_name?.trim()
  const displayName = firstName || 'Foydalanuvchi'

  const services = [
    {
      title: 'Maktab',
      description: 'Direktorlar, rahbarlar va pedagoglar uchun',
      keywords: 'maktab menejer direktor test attestatsiya',
      icon: <School className="size-6" />,
      color: 'text-blue-700',
      bg: 'bg-blue-100 dark:bg-blue-950/50',
      onClick: () => onSelectEducation('school'),
    },
    {
      title: 'Maktabgacha ta’lim',
      description: 'Bog‘cha mudiralari va pedagoglar uchun',
      keywords: 'bogcha maktabgacha mudira tarbiyachi',
      icon: <Baby className="size-6" />,
      color: 'text-amber-700',
      bg: 'bg-amber-100 dark:bg-amber-950/50',
      onClick: () => onSelectEducation('preschool'),
    },
    {
      title: 'Öquvchi akademiyasi',
      description: '1–11-sinf, fanlar, IQ va olimpiadalar',
      keywords: 'oquvchi akademiya matematika mantiq olimpiada',
      icon: <GraduationCap className="size-6" />,
      color: 'text-emerald-700',
      bg: 'bg-emerald-100 dark:bg-emerald-950/50',
      onClick: () => onStudentAcademy?.(),
      disabled: !onStudentAcademy,
    },
    {
      title: 'Slayd yaratish',
      description: 'AI yordamida professional taqdimotlar',
      keywords: 'slayd prezentatsiya taqdimot powerpoint',
      icon: <Presentation className="size-6" />,
      color: 'text-purple-700',
      bg: 'bg-purple-100 dark:bg-purple-950/50',
      onClick: () => onSlides?.(),
      disabled: !onSlides,
    },
    {
      title: 'AI yordamchi',
      description: 'Savollarga javob va aqlli tahlil',
      keywords: 'suniy intellekt ai yordamchi',
      icon: <BrainCircuit className="size-6" />,
      color: 'text-indigo-700',
      bg: 'bg-indigo-100 dark:bg-indigo-950/50',
      onClick: () => onAI?.(),
      disabled: !onAI,
    },
    {
      title: 'TOP reyting',
      description: 'Ishtirokchilar natijalari va yutuqlari',
      keywords: 'reyting top natija statistika',
      icon: <Trophy className="size-6" />,
      color: 'text-orange-700',
      bg: 'bg-orange-100 dark:bg-orange-950/50',
      onClick: onRanking,
    },
  ]

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return services

    return services.filter((service) =>
      `${service.title} ${service.description} ${service.keywords}`
        .toLowerCase()
        .includes(query),
    )
  }, [search, onAI, onSlides, onStudentAcademy, onRanking, onSelectEducation])

  return (
    <main className="relative mx-auto flex w-full max-w-3xl flex-col gap-6 overflow-hidden pb-8">

      {/* HEADER */}

      <header className="flex items-center justify-between pt-2">

        <div className="flex min-w-0 items-center gap-3">

          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-slate-950 text-white shadow-lg">
            <GraduationCap className="size-7" />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              National Education Platform
            </p>

            <h1 className="truncate text-lg font-black tracking-tight">
              MENEJERLIK
              <span className="ml-1.5 text-blue-700">
                BY NURMUHAMMAD
              </span>
            </h1>
          </div>

        </div>

        {onAI && (
          <button
            type="button"
            onClick={onAI}
            aria-label="AI yordamchi"
            className="flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-card shadow-sm transition hover:bg-blue-50 active:scale-95"
          >
            <Sparkles className="size-5 text-blue-700" />
          </button>
        )}

      </header>


      {/* GREETING */}

      <section className="space-y-1 px-1">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
          Shaxsiy ta’lim markazingiz
        </p>

        <h2 className="text-2xl font-black tracking-tight">
          Assalomu alaykum,
          <span className="text-blue-700"> {displayName}!</span>
        </h2>

        <p className="text-xs leading-5 text-muted-foreground">
          Bugun qanday natijaga erishamiz?
        </p>

      </section>


      {/* SEARCH */}

      <div className="relative">

        <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Kerakli xizmatni qidiring..."
          aria-label="Xizmatlarni qidirish"
          className="h-13 w-full rounded-2xl border bg-card pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            aria-label="Qidiruvni tozalash"
            className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        )}

      </div>


      {/* MAIN MISSION */}

      <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#081a38] via-[#10427c] to-[#087ba8] p-5 text-white shadow-xl">

        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-white/10 bg-white/5" />

        <div className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
              <Zap className="size-3.5 text-amber-300" />
              Bugungi maqsad
            </span>

            <Target className="size-7 text-cyan-200" />

          </div>

          <h3 className="mt-5 text-2xl font-black tracking-tight">
            Bilimingizni sinab ko‘ring!
          </h3>

          <p className="mt-2 max-w-sm text-xs leading-5 text-blue-50/80">
            Har kuni yangi bilim, yangi tajriba va yangi natija sari.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">

            <MissionItem icon="🧠" value="15" label="Savol" />
            <MissionItem icon="⏱️" value="10" label="Daqiqa" />
            <MissionItem icon="🏆" value="+50" label="XP" />

          </div>

          <button
            type="button"
            onClick={() => onSelectEducation('school')}
            className="mt-5 flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-sm font-black text-slate-950 transition hover:bg-blue-50 active:scale-[0.99]"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="size-5 text-blue-700" />
              Testni boshlash
            </span>

            <ArrowRight className="size-5" />
          </button>

        </div>

      </section>


      {/* STATISTICS */}

      <section className="grid grid-cols-3 gap-2.5">

        <StatCard
          icon={<BookOpen />}
          value={safeStats.count}
          label="Testlar"
        />

        <StatCard
          icon={<Target />}
          value={`${safeStats.average}%`}
          label="O‘rtacha"
        />

        <StatCard
          icon={<Trophy />}
          value={`${safeStats.best}%`}
          label="Rekord"
        />

      </section>


      {/* SERVICES */}

      <section id="services" className="space-y-4">

        <div className="flex items-end justify-between px-1">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Bosh menyu
            </p>

            <h2 className="text-xl font-black tracking-tight">
              Barcha xizmatlar
            </h2>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700 dark:bg-blue-950/40">
            {filteredServices.filter(s => !s.disabled).length} ta xizmat
          </span>

        </div>

        {filteredServices.length > 0 ? (

          <div className="grid grid-cols-2 gap-3">

            {filteredServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                bg={service.bg}
                onClick={service.onClick}
                disabled={service.disabled}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-2xl border border-dashed p-8 text-center">
            <Search className="mx-auto size-8 text-muted-foreground" />
            <p className="mt-3 text-sm font-bold">
              Xizmat topilmadi
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Boshqa so‘z bilan qidirib ko‘ring.
            </p>
          </div>

        )}

      </section>


      {/* STUDENT DIRECTIONS */}

      <section className="space-y-3">

        <div className="flex items-center justify-between px-1">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
              Yangi avlod uchun
            </p>

            <h2 className="text-xl font-black">
              Kelajak yo‘nalishlari
            </h2>
          </div>

          <BrainCircuit className="size-6 text-indigo-600" />

        </div>

        <div className="grid grid-cols-2 gap-2.5">

          <DirectionCard
            icon="🧠"
            title="Mantiq"
            text="IQ va tahliliy fikrlash"
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


      {/* PROFESSIONAL PHILOSOPHY */}

      <section className="flex items-center gap-4 rounded-[24px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4 dark:border-white/10 dark:from-blue-950/20 dark:to-card">

        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
          <Brain className="size-6" />
        </div>

        <div className="min-w-0">

          <p className="text-[9px] font-black uppercase tracking-widest text-blue-700">
            Menejerlik falsafasi
          </p>

          <p className="mt-1 text-sm font-black">
            Bilim → Tahlil → Qaror → Natija
          </p>

          <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
            Bilimni amaliy boshqaruv va samarali qarorlar bilan bog‘lang.
          </p>

        </div>

      </section>


      {/* RECENT RESULTS */}

      {safeHistory.length > 0 && (
        <section className="space-y-3">

          <div className="flex items-center justify-between px-1">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                Faollik
              </p>
              <h2 className="text-lg font-black">
                So‘nggi natijalar
              </h2>
            </div>

            <History className="size-5 text-muted-foreground" />

          </div>

          <div className="overflow-hidden rounded-2xl border bg-card">

            {safeHistory.slice(0, 5).map((attempt) => {

              const percentage = attempt.total > 0
                ? Math.round((attempt.correct / attempt.total) * 100)
                : 0

              return (
                <div
                  key={attempt.id}
                  className="flex items-center gap-3 border-b p-3.5 last:border-0"
                >

                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/40">
                    <Brain className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-sm font-bold">
                      Test natijasi
                    </p>

                    <p className="text-[10px] text-muted-foreground">
                      {new Date(attempt.at).toLocaleDateString('uz-UZ', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className={`text-sm font-black ${
                      percentage >= 80
                        ? 'text-emerald-600'
                        : percentage >= 60
                          ? 'text-amber-600'
                          : 'text-red-500'
                    }`}>
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


      {/* RANKING BANNER */}

      <button
        type="button"
        onClick={onRanking}
        className="group flex items-center gap-4 rounded-[24px] border bg-card p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >

        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-950/40">
          <Medal className="size-6" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-wider text-amber-700">
            Natijalar
          </p>
          <h3 className="text-sm font-black">
            TOP reyting
          </h3>
          <p className="text-[10px] text-muted-foreground">
            O‘z natijalaringizni kuzating.
          </p>
        </div>

        <ChevronRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />

      </button>


      {/* FOOTER */}

      <footer className="rounded-[25px] border bg-card px-5 py-6 text-center">

        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-slate-950 text-white">
          <GraduationCap className="size-6" />
        </div>

        <p className="mt-3 text-[10px] font-black uppercase tracking-widest text-blue-700">
          MENEJERLIK BY NURMUHAMMAD
        </p>

        <p className="mt-2 text-sm font-bold">
          Ta’lim menejmenti va professional rivojlanish
        </p>

        <div className="my-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-border" />
          <span className="size-1 rounded-full bg-amber-400" />
          <span className="h-px w-8 bg-border" />
        </div>

        <p className="text-[10px] text-muted-foreground">
          Loyiha muallifi
        </p>

        <p className="mt-1 text-sm font-black">
          Talatbekov Nurmuhammad
        </p>

        <p className="mt-1 text-[10px] text-muted-foreground">
          Abdulla Avloniy nomidagi pedagogik mahorat milliy instituti magistranti
        </p>

        <p className="mt-4 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
          Bilim · Tahlil · Qaror · Natija
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
  onClick,
  disabled = false,
}: ServiceCardProps & { disabled?: boolean }) {

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group flex min-h-[155px] flex-col items-start rounded-[23px] border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45"
    >

      <div className={`flex size-11 items-center justify-center rounded-2xl ${bg} ${color}`}>
        {icon}
      </div>

      <h3 className="mt-3 text-[13px] font-black tracking-tight">
        {title}
      </h3>

      <p className="mt-1 flex-1 text-[10px] leading-4 text-muted-foreground">
        {description}
      </p>

      <div className={`mt-3 flex items-center gap-1 text-[10px] font-bold ${color}`}>
        Ochish
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
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
}: {
  icon: ReactNode
  value: string | number
  label: string
}) {

  return (
    <div className="rounded-[20px] border bg-card p-3 shadow-sm">

      <div className="flex items-center gap-1.5 text-blue-700">
        <span className="[&>svg]:size-4">
          {icon}
        </span>

        <span className="text-[9px] font-semibold text-muted-foreground">
          {label}
        </span>
      </div>

      <p className="mt-2 text-xl font-black tabular-nums tracking-tight">
        {value}
      </p>

    </div>
  )
}


/* =====================================================
   DAILY MISSION ITEM
===================================================== */

function MissionItem({
  icon,
  value,
  label,
}: {
  icon: string
  value: string
  label: string
}) {

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.09] p-3 backdrop-blur-md">

      <span className="text-lg">{icon}</span>

      <p className="mt-1 text-base font-black">
        {value}
      </p>

      <p className="text-[9px] text-white/60">
        {label}
      </p>

    </div>
  )
}


/* =====================================================
   DIRECTION CARD
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
    <div className="rounded-[20px] border bg-card p-3.5 transition hover:shadow-md">

      <div className="flex size-9 items-center justify-center rounded-xl bg-muted text-lg">
        {icon}
      </div>

      <h3 className="mt-2.5 text-xs font-black">
        {title}
      </h3>

      <p className="mt-1 text-[10px] leading-4 text-muted-foreground">
        {text}
      </p>

    </div>
  )
}
