'use client'

import { useMemo, useState } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FlaskConical,
  Globe2,
  GraduationCap,
  Languages,
  Lightbulb,
  Medal,
  Microscope,
  Pencil,
  Rocket,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'

type StudentAcademyProps = {
  onBack: () => void
}

type TrackId =
  | 'pisa'
  | 'english'
  | 'math'
  | 'science'
  | 'logic'
  | 'president'
  | 'olympiad'

type Track = {
  id: TrackId
  title: string
  subtitle: string
  description: string
  icon: string
  color: 'green' | 'blue' | 'purple' | 'amber' | 'cyan' | 'rose'
  progress: number
  lessons: number
  tests: number
}

type Level = {
  id: string
  title: string
  subtitle: string
  description: string
  progress: number
  tests: number
  color: 'green' | 'lime' | 'emerald' | 'teal' | 'blue' | 'indigo' | 'violet'
}

const TRACKS: Track[] = [
  {
    id: 'pisa',
    title: 'PISA',
    subtitle: 'Savodxonlik va real hayot',
    description:
      'Matematik, o‘qish va tabiiy-ilmiy savodxonlik. Grafik, jadval, dalil va real vaziyatlar bilan ishlash.',
    icon: '🌍',
    color: 'green',
    progress: 18,
    lessons: 42,
    tests: 180,
  },
  {
    id: 'english',
    title: 'English',
    subtitle: 'Foundation → C2',
    description:
      'Ingliz tilini noldan boshlab xalqaro darajagacha bosqichma-bosqich o‘rganish.',
    icon: '🇬🇧',
    color: 'blue',
    progress: 31,
    lessons: 64,
    tests: 320,
  },
  {
    id: 'math',
    title: 'Matematika',
    subtitle: 'Asosdan olimpiadagacha',
    description:
      'Hisoblash, algebra, geometriya, mantiqiy masalalar va yuqori darajadagi muammolar.',
    icon: '📐',
    color: 'purple',
    progress: 24,
    lessons: 58,
    tests: 290,
  },
  {
    id: 'science',
    title: 'Fanlar',
    subtitle: 'Tabiiy va aniq fanlar',
    description:
      'Fizika, kimyo, biologiya, informatika va tabiiy fanlar bo‘yicha tizimli tayyorgarlik.',
    icon: '🔬',
    color: 'cyan',
    progress: 12,
    lessons: 51,
    tests: 250,
  },
  {
    id: 'logic',
    title: 'Mantiq',
    subtitle: 'IQ va critical thinking',
    description:
      'Ketma-ketlik, pattern, tahlil, strategiya va muammo yechish qobiliyatlarini rivojlantiring.',
    icon: '🧠',
    color: 'amber',
    progress: 39,
    lessons: 35,
    tests: 210,
  },
  {
    id: 'president',
    title: 'Prezident maktabi',
    subtitle: 'Kirish imtihonlari',
    description:
      'Mantiq, matematika, ingliz tili va murakkab fikrlash bo‘yicha maxsus tayyorgarlik.',
    icon: '🏫',
    color: 'green',
    progress: 9,
    lessons: 48,
    tests: 240,
  },
  {
    id: 'olympiad',
    title: 'Olimpiada',
    subtitle: 'Yuqori darajadagi masalalar',
    description:
      'Standartdan tashqari masalalar, kreativ yechimlar va chuqur fikrlash.',
    icon: '🏆',
    color: 'rose',
    progress: 5,
    lessons: 30,
    tests: 150,
  },
]

const ENGLISH_LEVELS: Level[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Noldan boshlash',
    description:
      'Alphabet, sounds, basic vocabulary, classroom English va eng zarur iboralar.',
    progress: 72,
    tests: 40,
    color: 'green',
  },
  {
    id: 'pre-a1',
    title: 'Pre-A1',
    subtitle: 'Starter',
    description:
      'Salomlashish, ranglar, sonlar, oila, maktab va oddiy kundalik so‘zlar.',
    progress: 61,
    tests: 45,
    color: 'lime',
  },
  {
    id: 'a1',
    title: 'A1',
    subtitle: 'Beginner',
    description:
      'Present Simple, be, have, basic questions, everyday communication.',
    progress: 44,
    tests: 55,
    color: 'emerald',
  },
  {
    id: 'a2',
    title: 'A2',
    subtitle: 'Elementary',
    description:
      'Kundalik mavzularda muloqot, asosiy zamonlar, vocabulary va reading.',
    progress: 28,
    tests: 60,
    color: 'teal',
  },
  {
    id: 'b1',
    title: 'B1',
    subtitle: 'Intermediate',
    description:
      'Mustaqil muloqot, murakkabroq matnlar, grammar va writing.',
    progress: 15,
    tests: 65,
    color: 'blue',
  },
  {
    id: 'b2',
    title: 'B2',
    subtitle: 'Upper-Intermediate',
    description:
      'Academic vocabulary, complex grammar, argumentation va advanced reading.',
    progress: 8,
    tests: 70,
    color: 'indigo',
  },
  {
    id: 'c1',
    title: 'C1',
    subtitle: 'Advanced',
    description:
      'Murakkab akademik va professional matnlar, argument va precision.',
    progress: 0,
    tests: 75,
    color: 'violet',
  },
  {
    id: 'c2',
    title: 'C2',
    subtitle: 'Mastery',
    description:
      'Yuqori darajadagi til kompetensiyasi, nuance, academic writing va analysis.',
    progress: 0,
    tests: 80,
    color: 'purple',
  },
]

const PISA_DOMAINS = [
  {
    icon: '📐',
    title: 'Matematik savodxonlik',
    text: 'Real hayotdagi matematik muammolarni modellashtirish.',
    progress: 21,
  },
  {
    icon: '📖',
    title: 'O‘qish savodxonligi',
    text: 'Matnni tushunish, dalil topish va xulosa chiqarish.',
    progress: 16,
  },
  {
    icon: '🔬',
    title: 'Tabiiy-ilmiy savodxonlik',
    text: 'Ilmiy hodisalarni tushuntirish va dalillarni baholash.',
    progress: 12,
  },
  {
    icon: '📊',
    title: 'Grafik va jadval',
    text: 'Ma’lumotlarni o‘qish, taqqoslash va tahlil qilish.',
    progress: 28,
  },
  {
    icon: '🧩',
    title: 'Muammo yechish',
    text: 'Strategiya ishlab chiqish va eng samarali yechimni topish.',
    progress: 19,
  },
  {
    icon: '💡',
    title: 'Critical Thinking',
    text: 'Dalil, taxmin va xulosalarni tanqidiy baholash.',
    progress: 14,
  },
]

const SUBJECTS = [
  {
    id: 'physics',
    icon: '⚡',
    title: 'Fizika',
    text: 'Mexanika, energiya, elektr va tajribaviy masalalar.',
    progress: 14,
  },
  {
    id: 'chemistry',
    icon: '🧪',
    title: 'Kimyo',
    text: 'Modda, reaksiya, elementlar va hisoblashlar.',
    progress: 8,
  },
  {
    id: 'biology',
    icon: '🧬',
    title: 'Biologiya',
    text: 'Hujayra, genetika, ekologiya va inson organizmi.',
    progress: 19,
  },
  {
    id: 'informatics',
    icon: '💻',
    title: 'Informatika',
    text: 'Algoritm, mantiq, kodlash va raqamli fikrlash.',
    progress: 23,
  },
  {
    id: 'natural',
    icon: '🌱',
    title: 'Tabiiy fanlar',
    text: 'Tabiat hodisalari va fanlararo bog‘liqlik.',
    progress: 17,
  },
  {
    id: 'geography',
    icon: '🌎',
    title: 'Geografiya',
    text: 'Xarita, tabiat, aholi va global jarayonlar.',
    progress: 10,
  },
]

const MATH_LEVELS = [
  ['Foundation', 'Asosiy matematik tushunchalar', 34],
  ['Basic', 'Hisoblash va standart masalalar', 27],
  ['Intermediate', 'Algebra va geometriya', 18],
  ['Advanced', 'Murakkab va ko‘p bosqichli masalalar', 8],
  ['Olympiad', 'Kreativ va nostandart masalalar', 3],
]

const LOGIC_LEVELS = [
  ['IQ Foundation', 'Oddiy mantiqiy bog‘lanishlar', 48],
  ['Pattern', 'Ketma-ketlik va naqshlar', 34],
  ['Analytical', 'Tahlil va deduksiya', 21],
  ['Critical Thinking', 'Dalil va xulosalar', 13],
  ['Advanced Logic', 'Murakkab strategik fikrlash', 5],
]

function colorClasses(color: string) {
  const map: Record<string, string> = {
    green:
      'border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-300',
    blue:
      'border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-300',
    purple:
      'border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900/30 dark:bg-violet-950/20 dark:text-violet-300',
    amber:
      'border-amber-100 bg-amber-50 text-amber-700 dark:border-amber-900/30 dark:bg-amber-950/20 dark:text-amber-300',
    cyan:
      'border-cyan-100 bg-cyan-50 text-cyan-700 dark:border-cyan-900/30 dark:bg-cyan-950/20 dark:text-cyan-300',
    rose:
      'border-rose-100 bg-rose-50 text-rose-700 dark:border-rose-900/30 dark:bg-rose-950/20 dark:text-rose-300',
    lime:
      'border-lime-100 bg-lime-50 text-lime-700 dark:border-lime-900/30 dark:bg-lime-950/20 dark:text-lime-300',
    emerald:
      'border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-300',
    teal:
      'border-teal-100 bg-teal-50 text-teal-700 dark:border-teal-900/30 dark:bg-teal-950/20 dark:text-teal-300',
    indigo:
      'border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-900/30 dark:bg-indigo-950/20 dark:text-indigo-300',
    violet:
      'border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900/30 dark:bg-violet-950/20 dark:text-violet-300',
  }

  return map[color] ?? map.green
}

export function StudentAcademy({
  onBack,
}: StudentAcademyProps) {
  const [selectedTrack, setSelectedTrack] =
    useState<TrackId | null>(null)

  const [selectedEnglishLevel, setSelectedEnglishLevel] =
    useState<string | null>(null)

  const selectedTrackData = useMemo(
    () =>
      TRACKS.find(
        (track) => track.id === selectedTrack,
      ),
    [selectedTrack],
  )

  const totalTests = TRACKS.reduce(
    (sum, track) => sum + track.tests,
    0,
  )

  if (selectedTrack === 'english') {
    return (
      <EnglishAcademy
        onBack={() => setSelectedTrack(null)}
        selectedLevel={selectedEnglishLevel}
        onSelectLevel={setSelectedEnglishLevel}
      />
    )
  }

  if (selectedTrack === 'pisa') {
    return (
      <PisaAcademy
        onBack={() => setSelectedTrack(null)}
      />
    )
  }

  if (selectedTrack === 'math') {
    return (
      <MathAcademy
        onBack={() => setSelectedTrack(null)}
      />
    )
  }

  if (selectedTrack === 'science') {
    return (
      <ScienceAcademy
        onBack={() => setSelectedTrack(null)}
      />
    )
  }

  if (selectedTrack === 'logic') {
    return (
      <LogicAcademy
        onBack={() => setSelectedTrack(null)}
      />
    )
  }

  if (selectedTrack === 'president') {
    return (
      <SpecialAcademy
        onBack={() => setSelectedTrack(null)}
        type="president"
      />
    )
  }

  if (selectedTrack === 'olympiad') {
    return (
      <SpecialAcademy
        onBack={() => setSelectedTrack(null)}
        type="olympiad"
      />
    )
  }

  return (
    <div className="flex flex-col gap-5 pb-10">
      {/* HEADER */}

      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md active:scale-95"
          aria-label="Orqaga"
        >
          <ArrowLeft className="size-5" />
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-600">
            Student Learning System
          </p>

          <h1 className="mt-0.5 text-[21px] font-black tracking-tight">
            O‘quvchi Akademiyasi
          </h1>
        </div>

        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
          <GraduationCap className="size-5" />
        </div>
      </header>

      {/* HERO */}

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 p-6 text-white shadow-2xl shadow-emerald-900/20">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-white/10 bg-white/[0.04]" />

        <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="pointer-events-none absolute right-12 top-12 size-2 rounded-full bg-lime-300 shadow-[0_0_22px_rgba(190,242,100,0.9)]" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                <Sparkles className="size-3.5 text-lime-300" />

                <span className="text-[9px] font-black uppercase tracking-[0.16em]">
                  Future Ready
                </span>
              </div>

              <h2 className="mt-4 text-[28px] font-black leading-tight tracking-tight">
                Bilimdan
                <br />
                <span className="text-lime-300">
                  kelajakka.
                </span>
              </h2>

              <p className="mt-3 max-w-[330px] text-[12px] leading-5 text-emerald-50/80">
                O‘quvchining bilimini tekshirish,
                rivojlantirish va xalqaro darajaga
                olib chiqish uchun yagona akademik
                muhit.
              </p>
            </div>

            <div className="flex size-14 shrink-0 items-center justify-center rounded-[20px] bg-white/10 text-3xl backdrop-blur-md">
              🎓
            </div>
          </div>

          {/* XP */}

          <div className="mt-6 grid grid-cols-3 gap-2">
            <HeroStat
              icon={<Zap className="size-3.5" />}
              value="1 240"
              label="XP"
            />

            <HeroStat
              icon={<Trophy className="size-3.5" />}
              value="18"
              label="Yutuq"
            />

            <HeroStat
              icon={<Star className="size-3.5" />}
              value="7"
              label="Streak"
            />
          </div>
        </div>
      </section>

      {/* DAILY CHALLENGE */}

      <button
        type="button"
        onClick={() => setSelectedTrack('pisa')}
        className="group relative overflow-hidden rounded-[26px] border border-emerald-100 bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-emerald-900/20"
      >
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-emerald-500/5" />

        <div className="relative flex items-center gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30">
            <Rocket className="size-7" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-600">
              Bugungi challenge
            </p>

            <h3 className="mt-1 text-[17px] font-black">
              10 daqiqalik PISA challenge
            </h3>

            <p className="mt-1 text-[11px] text-muted-foreground">
              10 savol · Real hayot · +50 XP
            </p>
          </div>

          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-transform group-hover:translate-x-1 dark:bg-emerald-950/20">
            <ChevronRight className="size-4" />
          </div>
        </div>
      </button>

      {/* PROGRESS */}

      <section className="rounded-[26px] border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-600">
              Sizning rivojlanishingiz
            </p>

            <h2 className="mt-1 text-[18px] font-black">
              Academy Progress
            </h2>
          </div>

          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30">
            <BarChart3 className="size-5" />
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-[32px] font-black">
              24%
            </span>

            <span className="ml-2 text-[11px] text-muted-foreground">
              umumiy progress
            </span>
          </div>

          <span className="text-[10px] font-bold text-emerald-600">
            +8% bu oy
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[24%] rounded-full bg-gradient-to-r from-emerald-600 to-lime-400" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <MiniProgress
            label="Testlar"
            value={totalTests}
          />

          <MiniProgress
            label="Darslar"
            value={328}
          />

          <MiniProgress
            label="XP"
            value={1240}
          />
        </div>
      </section>

      {/* TRACKS */}

      <section>
        <SectionHeading
          eyebrow="Academy"
          title="Yo‘nalishlar"
          icon={<Target className="size-4.5" />}
        />

        <div className="mt-3 flex flex-col gap-2.5">
          {TRACKS.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              onClick={() =>
                setSelectedTrack(track.id)
              }
            />
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section className="rounded-[26px] border bg-card p-5 shadow-sm">
        <SectionHeading
          eyebrow="Gamification"
          title="Yutuqlar"
          icon={<Award className="size-4.5" />}
        />

        <div className="mt-4 grid grid-cols-4 gap-2">
          <Achievement icon="🔥" title="7 kun" />
          <Achievement icon="🎯" title="100 test" />
          <Achievement icon="🧠" title="IQ" />
          <Achievement icon="🏆" title="Top 10" />
        </div>
      </section>

      {/* FOOTER */}

      <section className="rounded-[27px] border bg-gradient-to-br from-emerald-50 to-white p-6 text-center dark:from-emerald-950/20 dark:to-card">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
          <GraduationCap className="size-5" />
        </div>

        <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-600">
          O‘QUVCHI AKADEMIYASI
        </p>

        <h3 className="mt-2 text-[18px] font-black">
          Bilim · Fikr · Natija
        </h3>

        <p className="mx-auto mt-2 max-w-[300px] text-[10px] leading-4 text-muted-foreground">
          Har bir test — yangi imkoniyat.
          Har bir xato — yangi bilim.
        </p>
      </section>
    </div>
  )
}

/* =========================================================
   ENGLISH
========================================================= */

function EnglishAcademy({
  onBack,
  selectedLevel,
  onSelectLevel,
}: {
  onBack: () => void
  selectedLevel: string | null
  onSelectLevel: (id: string | null) => void
}) {
  const activeLevel = ENGLISH_LEVELS.find(
    (level) => level.id === selectedLevel,
  )

  if (activeLevel) {
    return (
      <LevelDetail
        level={activeLevel}
        onBack={() => onSelectLevel(null)}
        subject="English"
      />
    )
  }

  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="English Academy"
        title="English"
        icon={<Languages className="size-5" />}
      />

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-950 via-emerald-900 to-emerald-700 p-6 text-white shadow-2xl">
        <div className="absolute -right-16 -top-16 size-56 rounded-full border border-white/10" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur">
              🇬🇧
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-lime-300">
                Complete pathway
              </p>

              <h2 className="text-[24px] font-black">
                Foundation → C2
              </h2>
            </div>
          </div>

          <p className="mt-5 text-[12px] leading-5 text-white/75">
            Ingliz tilini mutlaqo boshlang‘ich
            darajadan yuqori akademik darajagacha
            bosqichma-bosqich egallang.
          </p>

          <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1">
            {ENGLISH_LEVELS.map((level) => (
              <div
                key={level.id}
                className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[10px] font-black backdrop-blur"
              >
                {level.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="CEFR"
          title="Bosqichma-bosqich o‘rganish"
          icon={<Globe2 className="size-4.5" />}
        />

        <div className="mt-3 flex flex-col gap-2.5">
          {ENGLISH_LEVELS.map((level, index) => (
            <LevelCard
              key={level.id}
              level={level}
              number={index + 1}
              onClick={() =>
                onSelectLevel(level.id)
              }
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2.5">
        <SkillCard
          icon={<BookOpen className="size-5" />}
          title="Reading"
          text="Matnni tushunish"
        />

        <SkillCard
          icon={<Languages className="size-5" />}
          title="Speaking"
          text="Muloqot qilish"
        />

        <SkillCard
          icon={<Pencil className="size-5" />}
          title="Writing"
          text="Yozma nutq"
        />

        <SkillCard
          icon={<Users className="size-5" />}
          title="Listening"
          text="Eshitib tushunish"
        />
      </section>
    </div>
  )
}

/* =========================================================
   PISA
========================================================= */

function PisaAcademy({
  onBack,
}: {
  onBack: () => void
}) {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="International Assessment"
        title="PISA Academy"
        icon={<Globe2 className="size-5" />}
      />

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-800 p-6 text-white shadow-2xl">
        <div className="absolute -right-16 -top-16 size-60 rounded-full border border-white/10" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
              🌍
            </div>

            <div className="rounded-full bg-lime-300 px-3 py-1 text-[9px] font-black text-emerald-950">
              PISA STYLE
            </div>
          </div>

          <h2 className="mt-5 text-[26px] font-black">
            Bilimni hayotda qo‘llash.
          </h2>

          <p className="mt-2 text-[12px] leading-5 text-white/75">
            PISA yodlashni emas, bilimdan
            foydalanish, tahlil qilish, dalil bilan
            fikrlash va muammo yechishni baholaydi.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <PisaStat
              value="3"
              label="asosiy domen"
            />

            <PisaStat
              value="6"
              label="kompetensiya"
            />

            <PisaStat
              value="180+"
              label="test"
            />
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="PISA Domains"
          title="Savodxonlik yo‘nalishlari"
          icon={<Brain className="size-4.5" />}
        />

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {PISA_DOMAINS.map((domain) => (
            <PisaDomainCard
              key={domain.title}
              {...domain}
            />
          ))}
        </div>
      </section>

      <section className="rounded-[26px] border bg-card p-5">
        <SectionHeading
          eyebrow="Assessment"
          title="PISA Full Test"
          icon={<Trophy className="size-4.5" />}
        />

        <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
          To‘liq sinov rejimi. Bir nechta domen,
          real hayot konteksti, grafiklar va
          ko‘p bosqichli fikrlash.
        </p>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between rounded-2xl bg-emerald-600 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-emerald-600/20"
        >
          <span className="flex items-center gap-2">
            <Rocket className="size-4" />
            Full PISA testni boshlash
          </span>

          <ArrowRight className="size-4" />
        </button>
      </section>
    </div>
  )
}

/* =========================================================
   MATH
========================================================= */

function MathAcademy({
  onBack,
}: {
  onBack: () => void
}) {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="Mathematics Academy"
        title="Matematika"
        icon={<Lightbulb className="size-5" />}
      />

      <section className="rounded-[30px] bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-800 p-6 text-white shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
            📐
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-violet-200">
              Mathematics pathway
            </p>

            <h2 className="text-[23px] font-black">
              Asosdan Olimpiadagacha
            </h2>
          </div>
        </div>

        <p className="mt-4 text-[12px] leading-5 text-white/70">
          Hisoblashdan boshlab algebra,
          geometriya, funksiyalar, kombinatorika
          va olimpiada masalalarigacha.
        </p>
      </section>

      <section>
        <SectionHeading
          eyebrow="Levels"
          title="Matematika darajalari"
          icon={<BarChart3 className="size-4.5" />}
        />

        <div className="mt-3 flex flex-col gap-2.5">
          {MATH_LEVELS.map(
            ([title, subtitle, progress], index) => (
              <SimpleLevel
                key={title}
                title={title}
                subtitle={subtitle}
                progress={Number(progress)}
                number={index + 1}
              />
            ),
          )}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2.5">
        <SkillCard
          icon={<Target className="size-5" />}
          title="Algebra"
          text="Ifodalar va tenglamalar"
        />

        <SkillCard
          icon={<Globe2 className="size-5" />}
          title="Geometriya"
          text="Shakl va fazo"
        />

        <SkillCard
          icon={<Brain className="size-5" />}
          title="Kombinatorika"
          text="Sanash va strategiya"
        />

        <SkillCard
          icon={<Trophy className="size-5" />}
          title="Olimpiada"
          text="Nostandart masalalar"
        />
      </section>
    </div>
  )
}

/* =========================================================
   SCIENCE
========================================================= */

function ScienceAcademy({
  onBack,
}: {
  onBack: () => void
}) {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="Science Academy"
        title="Fanlar"
        icon={<FlaskConical className="size-5" />}
      />

      <section className="rounded-[30px] bg-gradient-to-br from-cyan-950 via-teal-900 to-emerald-800 p-6 text-white shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
            🔬
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200">
              Science pathway
            </p>

            <h2 className="text-[23px] font-black">
              Fanlar laboratoriyasi
            </h2>
          </div>
        </div>

        <p className="mt-4 text-[12px] leading-5 text-white/70">
          Fanni faqat yodlash emas — tajriba,
          kuzatish, sabab-oqibat va ilmiy fikrlash
          orqali o‘rganish.
        </p>
      </section>

      <section>
        <SectionHeading
          eyebrow="Subjects"
          title="Fanlar olami"
          icon={<Microscope className="size-4.5" />}
        />

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {SUBJECTS.map((subject) => (
            <SubjectCard
              key={subject.id}
              {...subject}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

/* =========================================================
   LOGIC
========================================================= */

function LogicAcademy({
  onBack,
}: {
  onBack: () => void
}) {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="Thinking Academy"
        title="Mantiq"
        icon={<Brain className="size-5" />}
      />

      <section className="rounded-[30px] bg-gradient-to-br from-amber-950 via-orange-900 to-emerald-800 p-6 text-white shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
            🧠
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-amber-200">
              Thinking system
            </p>

            <h2 className="text-[23px] font-black">
              Fikrni kuchaytiring
            </h2>
          </div>
        </div>

        <p className="mt-4 text-[12px] leading-5 text-white/70">
          Pattern, IQ, deduksiya, critical thinking
          va murakkab muammolarni yechish.
        </p>
      </section>

      <section>
        <SectionHeading
          eyebrow="Thinking levels"
          title="Mantiq darajalari"
          icon={<Brain className="size-4.5" />}
        />

        <div className="mt-3 flex flex-col gap-2.5">
          {LOGIC_LEVELS.map(
            ([title, subtitle, progress], index) => (
              <SimpleLevel
                key={title}
                title={title}
                subtitle={subtitle}
                progress={Number(progress)}
                number={index + 1}
              />
            ),
          )}
        </div>
      </section>
    </div>
  )
}

/* =========================================================
   PRESIDENT / OLYMPIAD
========================================================= */

function SpecialAcademy({
  onBack,
  type,
}: {
  onBack: () => void
  type: 'president' | 'olympiad'
}) {
  const president = type === 'president'

  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow={
          president
            ? 'Elite School Preparation'
            : 'Competition Academy'
        }
        title={
          president
            ? 'Prezident maktabi'
            : 'Olimpiada'
        }
        icon={
          president ? (
            <GraduationCap className="size-5" />
          ) : (
            <Medal className="size-5" />
          )
        }
      />

      <section
        className={
          president
            ? 'rounded-[30px] bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800 p-6 text-white shadow-2xl'
            : 'rounded-[30px] bg-gradient-to-br from-rose-950 via-red-900 to-amber-800 p-6 text-white shadow-2xl'
        }
      >
        <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
          {president ? '🏫' : '🏆'}
        </div>

        <h2 className="mt-5 text-[25px] font-black">
          {president
            ? 'Elite school preparation'
            : 'Champion mindset'}
        </h2>

        <p className="mt-3 text-[12px] leading-5 text-white/70">
          {president
            ? 'Mantiq, matematika, ingliz tili va murakkab fikrlash bo‘yicha kompleks tayyorgarlik.'
            : 'Yuqori darajadagi masalalar, kreativ yondashuv va musobaqa strategiyasi.'}
        </p>
      </section>

      <div className="grid grid-cols-2 gap-2.5">
        <SpecialCard
          icon="🧠"
          title="Mantiq"
          text="Murakkab fikrlash"
        />

        <SpecialCard
          icon="📐"
          title="Matematika"
          text="Advanced problems"
        />

        <SpecialCard
          icon="🇬🇧"
          title="English"
          text="Language skills"
        />

        <SpecialCard
          icon="🎯"
          title="Challenge"
          text="Real exam mode"
        />
      </div>

      <button
        type="button"
        className="flex items-center justify-between rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-black text-white shadow-lg"
      >
        <span className="flex items-center gap-2">
          <Rocket className="size-4" />
          Tayyorlanishni boshlash
        </span>

        <ArrowRight className="size-4" />
      </button>
    </div>
  )
}

/* =========================================================
   LEVEL DETAIL
========================================================= */

function LevelDetail({
  level,
  onBack,
  subject,
}: {
  level: Level
  onBack: () => void
  subject: string
}) {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow={`${subject} · Level`}
        title={level.title}
        icon={<Languages className="size-5" />}
      />

      <section
        className={`rounded-[30px] border p-6 ${colorClasses(
          level.color,
        )}`}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.17em] opacity-70">
              CEFR pathway
            </p>

            <h2 className="mt-1 text-[28px] font-black">
              {level.title}
            </h2>

            <p className="mt-1 text-[12px] font-bold opacity-75">
              {level.subtitle}
            </p>
          </div>

          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
            🇬🇧
          </div>
        </div>

        <p className="mt-5 text-[12px] leading-5 opacity-80">
          {level.description}
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-current"
            style={{
              width: `${level.progress}%`,
            }}
          />
        </div>

        <div className="mt-2 flex justify-between text-[10px] font-bold opacity-70">
          <span>{level.progress}% bajarildi</span>
          <span>{level.tests} test</span>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Skills"
          title="Asosiy kompetensiyalar"
          icon={<Target className="size-4.5" />}
        />

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <SkillCard
            icon={<BookOpen className="size-5" />}
            title="Reading"
            text="Comprehension"
          />

          <SkillCard
            icon={<Users className="size-5" />}
            title="Listening"
            text="Understanding"
          />

          <SkillCard
            icon={<Languages className="size-5" />}
            title="Speaking"
            text="Communication"
          />

          <SkillCard
            icon={<Pencil className="size-5" />}
            title="Writing"
            text="Production"
          />
        </div>
      </section>

      <section className="rounded-[26px] border bg-card p-5">
        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-600">
          Recommended
        </p>

        <h3 className="mt-1 text-[18px] font-black">
          Bugungi mashg‘ulot
        </h3>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30">
            <BookOpen className="size-5" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-bold">
              Vocabulary Challenge
            </p>

            <p className="text-[10px] text-muted-foreground">
              15 savol · 10 daqiqa · +30 XP
            </p>
          </div>

          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
      </section>

      <button
        type="button"
        className="flex w-full items-center justify-between rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20"
      >
        <span className="flex items-center gap-2">
          <Rocket className="size-4" />
          Levelni boshlash
        </span>

        <ArrowRight className="size-4" />
      </button>
    </div>
  )
}

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function PageHeader({
  onBack,
  eyebrow,
  title,
  icon,
}: {
  onBack: () => void
  eyebrow: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <header className="flex items-center gap-3">
      <button
        type="button"
        onClick={onBack}
        className="flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md active:scale-95"
      >
        <ArrowLeft className="size-5" />
      </button>

      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-600">
          {eyebrow}
        </p>

        <h1 className="mt-0.5 truncate text-[21px] font-black">
          {title}
        </h1>
      </div>

      <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
        {icon}
      </div>
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
  icon,
}: {
  eyebrow: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-end justify-between px-1">
      <div>
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-600">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-[19px] font-black tracking-tight">
          {title}
        </h2>
      </div>

      <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30">
        {icon}
      </div>
    </div>
  )
}

function HeroStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
      <div className="flex items-center gap-1.5 text-lime-300">
        {icon}

        <span className="text-[9px] font-bold uppercase tracking-wide text-white/60">
          {label}
        </span>
      </div>

      <p className="mt-1 text-[17px] font-black">
        {value}
      </p>
    </div>
  )
}

function MiniProgress({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <div className="rounded-xl bg-muted/50 p-3">
      <p className="text-[9px] font-bold text-muted-foreground">
        {label}
      </p>

      <p className="mt-1 text-[15px] font-black tabular-nums">
        {value}
      </p>
    </div>
  )
}

function TrackCard({
  track,
  onClick,
}: {
  track: Track
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-[23px] border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
    >
      <div className="flex items-center gap-3.5">
        <div
          className={`flex size-13 shrink-0 items-center justify-center rounded-2xl border text-2xl ${colorClasses(
            track.color,
          )}`}
        >
          {track.icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-black">
              {track.title}
            </h3>

            {track.progress > 0 && (
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-black text-emerald-600 dark:bg-emerald-950/30">
                {track.progress}%
              </span>
            )}
          </div>

          <p className="mt-0.5 text-[10px] font-bold text-muted-foreground">
            {track.subtitle}
          </p>

          <p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-muted-foreground">
            {track.description}
          </p>

          <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{
                width: `${track.progress}%`,
              }}
            />
          </div>

          <div className="mt-1.5 flex gap-3 text-[8px] font-bold text-muted-foreground">
            <span>{track.lessons} dars</span>
            <span>{track.tests} test</span>
          </div>
        </div>

        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-muted transition-transform group-hover:translate-x-0.5">
          <ChevronRight className="size-4" />
        </div>
      </div>
    </button>
  )
}

function LevelCard({
  level,
  number,
  onClick,
}: {
  level: Level
  number: number
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-[22px] border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-xl border text-[11px] font-black ${colorClasses(
          level.color,
        )}`}
      >
        {number}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h3 className="text-[14px] font-black">
              {level.title}
            </h3>

            <p className="text-[9px] font-bold text-muted-foreground">
              {level.subtitle}
            </p>
          </div>

          <span className="text-[10px] font-black text-emerald-600">
            {level.progress}%
          </span>
        </div>

        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{
              width: `${level.progress}%`,
            }}
          />
        </div>
      </div>

      <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}

function PisaStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
      <p className="text-[18px] font-black">
        {value}
      </p>

      <p className="mt-0.5 text-[8px] text-white/50">
        {label}
      </p>
    </div>
  )
}

function PisaDomainCard({
  icon,
  title,
  text,
  progress,
}: {
  icon: string
  title: string
  text: string
  progress: number
}) {
  return (
    <div className="rounded-[21px] border bg-card p-4 shadow-sm">
      <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-xl dark:bg-emerald-950/30">
        {icon}
      </div>

      <h3 className="mt-3 text-[11px] font-black">
        {title}
      </h3>

      <p className="mt-1 text-[9px] leading-4 text-muted-foreground">
        {text}
      </p>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-1 text-right text-[8px] font-bold text-emerald-600">
        {progress}%
      </p>
    </div>
  )
}

function SimpleLevel({
  title,
  subtitle,
  progress,
  number,
}: {
  title: string
  subtitle: string
  progress: number
  number: number
}) {
  return (
    <div className="rounded-[22px] border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700 dark:bg-violet-950/30">
          <span className="text-[11px] font-black">
            {number}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex justify-between gap-2">
            <div>
              <h3 className="text-[13px] font-black">
                {title}
              </h3>

              <p className="text-[9px] text-muted-foreground">
                {subtitle}
              </p>
            </div>

            <span className="text-[10px] font-black text-violet-600">
              {progress}%
            </span>
          </div>

          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-violet-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-[21px] border bg-card p-4 shadow-sm">
      <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30">
        {icon}
      </div>

      <h3 className="mt-3 text-[12px] font-black">
        {title}
      </h3>

      <p className="mt-1 text-[9px] text-muted-foreground">
        {text}
      </p>
    </div>
  )
}

function SubjectCard({
  icon,
  title,
  text,
  progress,
}: {
  icon: string
  title: string
  text: string
  progress: number
}) {
  return (
    <button
      type="button"
      className="rounded-[22px] border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-50 text-xl dark:bg-cyan-950/30">
        {icon}
      </div>

      <h3 className="mt-3 text-[13px] font-black">
        {title}
      </h3>

      <p className="mt-1 text-[9px] leading-4 text-muted-foreground">
        {text}
      </p>

      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-cyan-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </button>
  )
}

function Achievement({
  icon,
  title,
}: {
  icon: string
  title: string
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-muted/50 p-3">
      <span className="text-xl">{icon}</span>

      <span className="mt-1.5 text-[8px] font-black text-muted-foreground">
        {title}
      </span>
    </div>
  )
}

function SpecialCard({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-[22px] border bg-card p-4 shadow-sm">
      <div className="text-2xl">{icon}</div>

      <h3 className="mt-3 text-[13px] font-black">
        {title}
      </h3>

      <p className="mt-1 text-[9px] text-muted-foreground">
        {text}
      </p>
    </div>
  )
}
