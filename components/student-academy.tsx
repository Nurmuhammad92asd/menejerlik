'use client'

import { useMemo, useState } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookA,
  BookOpen,
  Brain,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  FlaskConical,
  Globe2,
  GraduationCap,
  Languages,
  Lightbulb,
  Lock,
  Medal,
  Microscope,
  Pencil,
  Play,
  Puzzle,
  Rocket,
  School,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'

type Props = {
  onBack?: () => void
}

type GradeBand = {
  id: string
  title: string
  subtitle: string
  grades: string
  icon: string
}

type AcademySection = {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  accent: string
  badge?: string
}

type EnglishLevel = {
  id: string
  level: string
  title: string
  description: string
  progress: number
  color: string
  locked?: boolean
}

type PisaDomain = {
  id: string
  title: string
  subtitle: string
  icon: string
  description: string
  questions: number
  level: string
}

const GRADE_BANDS: GradeBand[] = [
  {
    id: 'primary',
    title: 'Boshlang‘ich',
    subtitle: 'Foundation',
    grades: '1–4-sinf',
    icon: '🌱',
  },
  {
    id: 'middle',
    title: 'Rivojlantiruvchi',
    subtitle: 'Development',
    grades: '5–6-sinf',
    icon: '🚀',
  },
  {
    id: 'core',
    title: 'Asosiy',
    subtitle: 'Core',
    grades: '7–9-sinf',
    icon: '🎯',
  },
  {
    id: 'advanced',
    title: 'Yuqori',
    subtitle: 'Advanced',
    grades: '10–11-sinf',
    icon: '🏆',
  },
]

const SECTIONS: AcademySection[] = [
  {
    id: 'logic',
    title: 'Mantiqiy fikrlash',
    subtitle: 'IQ • Reasoning',
    description:
      'Ketma-ketlik, naqsh, mantiq, strategiya va tezkor fikrlash.',
    icon: '🧠',
    accent: 'indigo',
    badge: 'TOP',
  },
  {
    id: 'math',
    title: 'Matematika',
    subtitle: 'Mathematics',
    description:
      'Hisoblashdan murakkab masalalar va olimpiada darajasigacha.',
    icon: '📐',
    accent: 'blue',
  },
  {
    id: 'reading',
    title: 'O‘qish savodxonligi',
    subtitle: 'Reading Literacy',
    description:
      'Matnni tushunish, dalil topish, xulosa va tanqidiy tahlil.',
    icon: '📖',
    accent: 'violet',
  },
  {
    id: 'science',
    title: 'Tabiiy fanlar',
    subtitle: 'Science',
    description:
      'Fizika, kimyo, biologiya va ilmiy fikrlash asoslari.',
    icon: '🔬',
    accent: 'emerald',
  },
  {
    id: 'pisa',
    title: 'PISA',
    subtitle: 'International Assessment',
    description:
      'Hayotiy vaziyatlar, ma’lumotlar, grafiklar va muammo yechish.',
    icon: '🌍',
    accent: 'cyan',
    badge: 'NEW',
  },
  {
    id: 'english',
    title: 'Ingliz tili',
    subtitle: 'English Academy',
    description:
      'Foundationdan Advanced darajagacha tizimli ingliz tili.',
    icon: '🇬🇧',
    accent: 'sky',
    badge: '7 LEVEL',
  },
  {
    id: 'president',
    title: 'Prezident maktabi',
    subtitle: 'Selective Schools',
    description:
      'Kirish imtihonlari uchun mantiq, matematika va ingliz tili.',
    icon: '🏛️',
    accent: 'amber',
  },
  {
    id: 'olympiad',
    title: 'Olimpiada',
    subtitle: 'Olympiad',
    description:
      'Yuqori darajadagi masalalar va chuqur matematik fikrlash.',
    icon: '🥇',
    accent: 'rose',
  },
]

const ENGLISH_LEVELS: EnglishLevel[] = [
  {
    id: 'foundation',
    level: 'FOUNDATION',
    title: 'Starter',
    description:
      'Alphabet, numbers, colours, family, classroom, basic words.',
    progress: 100,
    color: 'emerald',
  },
  {
    id: 'beginner',
    level: 'A1',
    title: 'Beginner',
    description:
      'Basic sentences, everyday vocabulary and simple communication.',
    progress: 68,
    color: 'blue',
  },
  {
    id: 'elementary',
    level: 'A2',
    title: 'Elementary',
    description:
      'Daily conversations, core grammar, reading and practical English.',
    progress: 25,
    color: 'cyan',
  },
  {
    id: 'pre-intermediate',
    level: 'A2+ / B1',
    title: 'Pre-Intermediate',
    description:
      'Longer conversations, stories, functional grammar and writing.',
    progress: 0,
    color: 'violet',
    locked: true,
  },
  {
    id: 'intermediate',
    level: 'B1',
    title: 'Intermediate',
    description:
      'Confident communication, authentic texts and structured writing.',
    progress: 0,
    color: 'indigo',
    locked: true,
  },
  {
    id: 'upper-intermediate',
    level: 'B2',
    title: 'Upper-Intermediate',
    description:
      'Complex grammar, academic vocabulary and advanced comprehension.',
    progress: 0,
    color: 'amber',
    locked: true,
  },
  {
    id: 'advanced',
    level: 'C1',
    title: 'Advanced',
    description:
      'Academic English, critical thinking and high-level communication.',
    progress: 0,
    color: 'rose',
    locked: true,
  },
]

const ENGLISH_SKILLS = [
  {
    title: 'Vocabulary',
    subtitle: 'So‘z boyligi',
    icon: '📚',
    progress: 72,
  },
  {
    title: 'Grammar',
    subtitle: 'Grammatika',
    icon: '⚙️',
    progress: 61,
  },
  {
    title: 'Reading',
    subtitle: 'O‘qish',
    icon: '📖',
    progress: 54,
  },
  {
    title: 'Listening',
    subtitle: 'Tinglash',
    icon: '🎧',
    progress: 48,
  },
  {
    title: 'Speaking',
    subtitle: 'Gapirish',
    icon: '🗣️',
    progress: 37,
  },
  {
    title: 'Writing',
    subtitle: 'Yozish',
    icon: '✍️',
    progress: 42,
  },
]

const PISA_DOMAINS: PisaDomain[] = [
  {
    id: 'math',
    title: 'Matematik savodxonlik',
    subtitle: 'Mathematical Literacy',
    icon: '📊',
    description:
      'Real hayotdagi miqdor, nisbat, foiz, o‘lchov va matematik modellashtirish.',
    questions: 30,
    level: 'Foundation → Advanced',
  },
  {
    id: 'reading',
    title: 'O‘qish savodxonligi',
    subtitle: 'Reading Literacy',
    icon: '📖',
    description:
      'Turli matnlarni tushunish, baholash, solishtirish va dalillar asosida xulosa qilish.',
    questions: 30,
    level: 'Foundation → Advanced',
  },
  {
    id: 'science',
    title: 'Tabiiy-ilmiy savodxonlik',
    subtitle: 'Scientific Literacy',
    icon: '🔬',
    description:
      'Ilmiy ma’lumotlarni talqin qilish, tajribalarni tahlil qilish va dalilga asoslangan xulosa.',
    questions: 30,
    level: 'Foundation → Advanced',
  },
  {
    id: 'data',
    title: 'Grafik va jadval tahlili',
    subtitle: 'Data & Graphs',
    icon: '📈',
    description:
      'Diagramma, jadval, grafik va statistik ma’lumotlardan kerakli xulosani chiqarish.',
    questions: 30,
    level: 'Foundation → Advanced',
  },
  {
    id: 'problem',
    title: 'Muammo yechish',
    subtitle: 'Problem Solving',
    icon: '🧩',
    description:
      'Noodatiy vaziyatlarni tahlil qilish, strategiya tanlash va yechimni asoslash.',
    questions: 30,
    level: 'Foundation → Advanced',
  },
  {
    id: 'life',
    title: 'Hayotiy vaziyatlar',
    subtitle: 'Real-Life Context',
    icon: '🌎',
    description:
      'Maktab, oila, transport, xarid, ekologiya va kundalik hayotdagi muammolar.',
    questions: 30,
    level: 'Foundation → Advanced',
  },
  {
    id: 'reasoning',
    title: 'Dalil bilan fikrlash',
    subtitle: 'Evidence & Reasoning',
    icon: '💡',
    description:
      'Da’vo, dalil, sabab va natijani ajratish hamda qarorni asoslash.',
    questions: 30,
    level: 'Intermediate → Advanced',
  },
  {
    id: 'full',
    title: 'PISA FULL TEST',
    subtitle: 'Complete Assessment',
    icon: '🏆',
    description:
      'Matematika, o‘qish va tabiiy fanlardan kompleks diagnostik test.',
    questions: 60,
    level: 'Mixed',
  },
]

const PISA_LEVELS = [
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Boshlang‘ich savodxonlik',
    description:
      'Oddiy hayotiy vaziyatlar va asosiy ma’lumotlarni tushunish.',
    unlocked: true,
  },
  {
    id: 'level1',
    title: 'Level 1',
    subtitle: 'Basic Application',
    description:
      'Berilgan ma’lumot asosida oddiy qaror va hisoblashlar.',
    unlocked: true,
  },
  {
    id: 'level2',
    title: 'Level 2',
    subtitle: 'Application',
    description:
      'Bir nechta ma’lumotni bog‘lash va amaliy vazifani bajarish.',
    unlocked: true,
  },
  {
    id: 'level3',
    title: 'Level 3',
    subtitle: 'Reasoning',
    description:
      'Tahlil, taqqoslash va sabab-natija munosabatlarini aniqlash.',
    unlocked: false,
  },
  {
    id: 'level4',
    title: 'Level 4',
    subtitle: 'Advanced Reasoning',
    description:
      'Murakkab ma’lumotlar va bir nechta bosqichli muammolar.',
    unlocked: false,
  },
  {
    id: 'level5',
    title: 'Level 5',
    subtitle: 'High-Level Reasoning',
    description:
      'Abstrakt fikrlash va murakkab vaziyatlarda strategiya.',
    unlocked: false,
  },
  {
    id: 'level6',
    title: 'Level 6',
    subtitle: 'Expert Challenge',
    description:
      'Eng yuqori murakkablikdagi yangi va kompleks vaziyatlar.',
    unlocked: false,
  },
]

export function StudentAcademy({ onBack }: Props) {
  const [selectedGrade, setSelectedGrade] = useState('core')
  const [activeView, setActiveView] = useState<
    'home' | 'english' | 'pisa' | 'subject'
  >('home')
  const [selectedSubject, setSelectedSubject] =
    useState<AcademySection | null>(null)

  const selectedGradeData = useMemo(
    () =>
      GRADE_BANDS.find(
        (item) => item.id === selectedGrade,
      ) ?? GRADE_BANDS[2],
    [selectedGrade],
  )

  const openSubject = (section: AcademySection) => {
    setSelectedSubject(section)

    if (section.id === 'english') {
      setActiveView('english')
      return
    }

    if (section.id === 'pisa') {
      setActiveView('pisa')
      return
    }

    setActiveView('subject')
  }

  const goHome = () => {
    setActiveView('home')
    setSelectedSubject(null)
  }

  if (activeView === 'english') {
    return (
      <EnglishAcademy
        onBack={goHome}
        selectedGrade={selectedGradeData}
      />
    )
  }

  if (activeView === 'pisa') {
    return (
      <PisaAcademy
        onBack={goHome}
        selectedGrade={selectedGradeData}
      />
    )
  }

  if (activeView === 'subject' && selectedSubject) {
    return (
      <SubjectAcademy
        section={selectedSubject}
        grade={selectedGradeData}
        onBack={goHome}
      />
    )
  }

  return (
    <div className="relative flex flex-col gap-5 overflow-hidden pb-10">

      {/* HEADER */}

      <header className="flex items-center justify-between pt-1">

        <button
          type="button"
          onClick={onBack}
          className="flex size-11 items-center justify-center rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md active:scale-95"
          aria-label="Orqaga"
        >
          <ArrowLeft className="size-5" />
        </button>

        <div className="flex items-center gap-2">

          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-lg">
            <GraduationCap className="size-5" />
          </div>

          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-indigo-600">
              Student Division
            </p>

            <p className="text-sm font-black">
              O‘quvchi Akademiyasi
            </p>
          </div>

        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-2xl border bg-card shadow-sm"
        >
          <Trophy className="size-5 text-amber-500" />
        </button>

      </header>

      {/* HERO */}

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#111b4b] via-[#263d91] to-[#0796b6] p-6 text-white shadow-xl shadow-indigo-900/20">

        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-white/10 bg-white/[0.04]" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-start justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">

                <Sparkles className="size-3.5 text-amber-300" />

                <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                  Future Learner
                </span>

              </div>

              <h1 className="mt-4 text-[27px] font-black leading-tight tracking-tight">
                Bilimdan
                <br />
                <span className="text-cyan-200">
                  katta natijaga.
                </span>
              </h1>

              <p className="mt-2 max-w-[330px] text-[12px] leading-5 text-blue-50/75">
                Fan, mantiq, til va xalqaro baholash
                tizimlari orqali o‘z imkoniyatingizni
                rivojlantiring.
              </p>

            </div>

            <div className="flex size-14 items-center justify-center rounded-[19px] bg-white/10 text-3xl backdrop-blur-md">
              🎓
            </div>

          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">

            <HeroStat
              icon={<Zap className="size-3.5" />}
              value="1 240"
              label="XP"
            />

            <HeroStat
              icon={<Flame className="size-3.5" />}
              value="12"
              label="kun streak"
            />

            <HeroStat
              icon={<Trophy className="size-3.5" />}
              value="A+"
              label="daraja"
            />

          </div>

        </div>

      </section>

      {/* DAILY CHALLENGE */}

      <section className="rounded-[25px] border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm dark:border-amber-900/20 dark:from-amber-950/20 dark:to-card">

        <div className="flex items-center gap-3">

          <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20">
            <Target className="size-6" />
          </div>

          <div className="min-w-0 flex-1">

            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-amber-700">
              Bugungi challenge
            </p>

            <h2 className="mt-1 text-[16px] font-black">
              10 savolni yeching
            </h2>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Mantiq + matematika + PISA
            </p>

          </div>

          <div className="text-right">
            <p className="text-lg font-black text-amber-600">
              +100
            </p>
            <p className="text-[9px] text-muted-foreground">
              XP
            </p>
          </div>

        </div>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between rounded-2xl bg-slate-950 px-4 py-3.5 text-sm font-black text-white transition-all hover:bg-slate-800 active:scale-[0.99]"
        >
          <span className="flex items-center gap-2">
            <Play className="size-4 fill-current" />
            Challenge'ni boshlash
          </span>

          <ArrowRight className="size-4" />
        </button>

      </section>

      {/* GRADE */}

      <section>

        <div className="mb-3 flex items-end justify-between px-1">

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.17em] text-indigo-600">
              Shaxsiy yo‘nalish
            </p>

            <h2 className="mt-1 text-[19px] font-black">
              Sinf darajangiz
            </h2>
          </div>

          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[9px] font-black text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300">
            {selectedGradeData.grades}
          </span>

        </div>

        <div className="grid grid-cols-2 gap-2.5">

          {GRADE_BANDS.map((grade) => {
            const active = selectedGrade === grade.id

            return (
              <button
                key={grade.id}
                type="button"
                onClick={() => setSelectedGrade(grade.id)}
                className={`relative overflow-hidden rounded-[22px] border p-4 text-left transition-all ${
                  active
                    ? 'border-indigo-300 bg-indigo-50 shadow-md shadow-indigo-500/10 dark:border-indigo-700 dark:bg-indigo-950/30'
                    : 'bg-card hover:border-indigo-200 hover:shadow-sm'
                }`}
              >

                <div className="flex items-start justify-between">

                  <span className="text-2xl">
                    {grade.icon}
                  </span>

                  {active && (
                    <CheckCircle2 className="size-5 text-indigo-600" />
                  )}

                </div>

                <p className="mt-3 text-[13px] font-black">
                  {grade.title}
                </p>

                <p className="mt-0.5 text-[9px] font-bold text-indigo-600">
                  {grade.subtitle}
                </p>

                <p className="mt-1 text-[10px] text-muted-foreground">
                  {grade.grades}
                </p>

              </button>
            )
          })}

        </div>

      </section>

      {/* PROGRESS */}

      <section className="rounded-[25px] border bg-card p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30">
            <BarChart3 className="size-5" />
          </div>

          <div className="flex-1">

            <div className="flex items-center justify-between">

              <p className="text-[12px] font-black">
                Akademik progress
              </p>

              <p className="text-[12px] font-black text-emerald-600">
                68%
              </p>

            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">

              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                style={{ width: '68%' }}
              />

            </div>

            <p className="mt-2 text-[9px] text-muted-foreground">
              Keyingi bosqichga 320 XP qoldi
            </p>

          </div>

        </div>

      </section>

      {/* DIRECTIONS */}

      <section>

        <div className="mb-3 flex items-end justify-between px-1">

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.17em] text-indigo-600">
              Academy
            </p>

            <h2 className="mt-1 text-[20px] font-black">
              Ta’lim yo‘nalishlari
            </h2>
          </div>

          <Sparkles className="size-5 text-indigo-500" />

        </div>

        <div className="grid grid-cols-2 gap-2.5">

          {SECTIONS.map((section) => (
            <AcademySectionCard
              key={section.id}
              section={section}
              onClick={() => openSubject(section)}
            />
          ))}

        </div>

      </section>

      {/* QUICK PATH */}

      <section className="rounded-[26px] border bg-muted/30 p-5">

        <div className="flex items-center gap-3">

          <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-700 text-white">
            <Rocket className="size-5" />
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.17em] text-blue-700">
              Learning Path
            </p>

            <h2 className="text-[16px] font-black">
              Siz uchun tavsiya
            </h2>
          </div>

        </div>

        <div className="mt-4 space-y-2">

          <PathItem
            number="01"
            title="Mantiqiy fikrlash"
            text="10 daqiqalik warm-up"
            done
          />

          <PathItem
            number="02"
            title="Matematika"
            text="Foiz va nisbatlar"
          />

          <PathItem
            number="03"
            title="PISA"
            text="Real-life problem solving"
          />

          <PathItem
            number="04"
            title="English"
            text="A1 — Everyday English"
          />

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section>

        <div className="mb-3 flex items-center gap-2 px-1">

          <Medal className="size-5 text-amber-500" />

          <h2 className="text-[18px] font-black">
            Yutuqlar
          </h2>

        </div>

        <div className="grid grid-cols-4 gap-2">

          <Achievement icon="🔥" title="7 kun" />
          <Achievement icon="🧠" title="Brain" />
          <Achievement icon="🌍" title="PISA" />
          <Achievement icon="🇬🇧" title="English" />

        </div>

      </section>

    </div>
  )
}


/* =========================================================
   ENGLISH ACADEMY
========================================================= */

function EnglishAcademy({
  onBack,
  selectedGrade,
}: {
  onBack: () => void
  selectedGrade: GradeBand
}) {
  const [activeLevel, setActiveLevel] = useState('beginner')

  const level = ENGLISH_LEVELS.find(
    (item) => item.id === activeLevel,
  )

  return (
    <div className="flex flex-col gap-5 pb-10">

      <SubHeader
        onBack={onBack}
        eyebrow="English Academy"
        title="Ingliz tili"
        icon={<Languages className="size-5" />}
      />

      {/* HERO */}

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#071b3a] via-[#104c8c] to-[#0799b6] p-6 text-white shadow-xl">

        <div className="pointer-events-none absolute -right-16 -top-20 size-60 rounded-full border border-white/10 bg-white/[0.04]" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <div className="flex size-14 items-center justify-center rounded-[19px] bg-white/10 text-3xl backdrop-blur-md">
              🇬🇧
            </div>

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200">
                Complete English Path
              </p>

              <h1 className="mt-1 text-[22px] font-black">
                Foundation → C1
              </h1>

            </div>

          </div>

          <p className="mt-5 text-[12px] leading-5 text-blue-50/80">
            Ingliz tilini noldan boshlab xalqaro
            darajadagi mustaqil foydalanishgacha
            bosqichma-bosqich o‘rganing.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">

            <HeroStat
              icon={<BookOpen className="size-3.5" />}
              value="7"
              label="level"
            />

            <HeroStat
              icon={<Languages className="size-3.5" />}
              value="6"
              label="skill"
            />

            <HeroStat
              icon={<Target className="size-3.5" />}
              value="C1"
              label="target"
            />

          </div>

        </div>

      </section>

      {/* CURRENT LEVEL */}

      <section className="rounded-[25px] border bg-card p-5 shadow-sm">

        <div className="flex items-center gap-3">

          <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 dark:bg-blue-950/30">
            <Globe2 className="size-6" />
          </div>

          <div className="flex-1">

            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-blue-700">
              Current level
            </p>

            <h2 className="mt-1 text-[18px] font-black">
              A1 — Beginner
            </h2>

            <p className="mt-1 text-[10px] text-muted-foreground">
              {selectedGrade.grades} uchun moslashtirilgan
            </p>

          </div>

          <div className="text-right">
            <p className="text-lg font-black text-blue-700">
              68%
            </p>
            <p className="text-[9px] text-muted-foreground">
              progress
            </p>
          </div>

        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
            style={{ width: '68%' }}
          />

        </div>

      </section>

      {/* LEVELS */}

      <section>

        <div className="mb-3 px-1">

          <p className="text-[9px] font-black uppercase tracking-[0.17em] text-indigo-600">
            Level System
          </p>

          <h2 className="mt-1 text-[20px] font-black">
            Ingliz tili bosqichlari
          </h2>

        </div>

        <div className="space-y-2.5">

          {ENGLISH_LEVELS.map((item, index) => {

            const active = activeLevel === item.id

            return (
              <button
                key={item.id}
                type="button"
                disabled={item.locked}
                onClick={() => setActiveLevel(item.id)}
                className={`group relative w-full overflow-hidden rounded-[22px] border p-4 text-left transition-all ${
                  active
                    ? 'border-blue-300 bg-blue-50 shadow-md dark:border-blue-700 dark:bg-blue-950/30'
                    : item.locked
                      ? 'bg-muted/30 opacity-70'
                      : 'bg-card hover:border-blue-200 hover:shadow-sm'
                }`}
              >

                <div className="flex items-center gap-3">

                  <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md">

                    <span className="text-sm font-black">
                      {index + 1}
                    </span>

                    {item.locked && (
                      <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-slate-700">
                        <Lock className="size-2.5" />
                      </span>
                    )}

                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <p className="text-[10px] font-black uppercase tracking-wide text-blue-700">
                        {item.level}
                      </p>

                      {index === 1 && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[7px] font-black text-emerald-700">
                          CURRENT
                        </span>
                      )}

                    </div>

                    <h3 className="mt-0.5 text-[14px] font-black">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[9px] leading-4 text-muted-foreground">
                      {item.description}
                    </p>

                  </div>

                  <ChevronRight
                    className={`size-4 shrink-0 ${
                      item.locked
                        ? 'text-muted-foreground'
                        : 'text-blue-600'
                    }`}
                  />

                </div>

                {item.progress > 0 && (
                  <div className="mt-3">

                    <div className="mb-1 flex justify-between">

                      <span className="text-[8px] font-bold text-muted-foreground">
                        Progress
                      </span>

                      <span className="text-[8px] font-black text-blue-700">
                        {item.progress}%
                      </span>

                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                        style={{
                          width: `${item.progress}%`,
                        }}
                      />

                    </div>

                  </div>
                )}

              </button>
            )
          })}

        </div>

      </section>

      {/* SELECTED LEVEL */}

      {level && (
        <section className="rounded-[25px] border border-indigo-100 bg-indigo-50/60 p-5 dark:border-indigo-900/30 dark:bg-indigo-950/20">

          <div className="flex items-center gap-3">

            <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Star className="size-5" />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-indigo-600">
                Selected Level
              </p>

              <h2 className="text-[17px] font-black">
                {level.level} · {level.title}
              </h2>
            </div>

          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">

            {ENGLISH_SKILLS.map((skill) => (
              <SkillCard
                key={skill.title}
                icon={skill.icon}
                title={skill.title}
                subtitle={skill.subtitle}
                progress={skill.progress}
              />
            ))}

          </div>

          <button
            type="button"
            className="mt-4 flex w-full items-center justify-between rounded-2xl bg-indigo-600 px-4 py-3.5 text-sm font-black text-white shadow-lg shadow-indigo-600/20"
          >
            <span className="flex items-center gap-2">
              <Play className="size-4 fill-current" />
              Levelni boshlash
            </span>

            <ArrowRight className="size-4" />
          </button>

        </section>
      )}

      {/* ENGLISH ROADMAP */}

      <section className="rounded-[25px] border bg-card p-5">

        <div className="flex items-center gap-3">

          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30">
            <Rocket className="size-5" />
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-600">
              Roadmap
            </p>

            <h2 className="text-[17px] font-black">
              English Mastery Path
            </h2>
          </div>

        </div>

        <div className="mt-4 space-y-2">

          <RoadmapItem
            number="01"
            title="Foundation"
            text="Alphabet · Numbers · Basic Words"
            done
          />

          <RoadmapItem
            number="02"
            title="A1 Beginner"
            text="Everyday English · Basic Grammar"
            done
          />

          <RoadmapItem
            number="03"
            title="A2 Elementary"
            text="Communication · Reading · Writing"
          />

          <RoadmapItem
            number="04"
            title="B1 Intermediate"
            text="Fluency · Authentic Content"
          />

          <RoadmapItem
            number="05"
            title="B2 Upper-Intermediate"
            text="Academic · Critical Thinking"
          />

          <RoadmapItem
            number="06"
            title="C1 Advanced"
            text="Advanced Academic English"
          />

        </div>

      </section>

    </div>
  )
}


/* =========================================================
   PISA ACADEMY
========================================================= */

function PisaAcademy({
  onBack,
  selectedGrade,
}: {
  onBack: () => void
  selectedGrade: GradeBand
}) {
  const [activeLevel, setActiveLevel] = useState('foundation')

  return (
    <div className="flex flex-col gap-5 pb-10">

      <SubHeader
        onBack={onBack}
        eyebrow="International Assessment"
        title="PISA Academy"
        icon={<Globe2 className="size-5" />}
      />

      {/* PISA HERO */}

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#052b35] via-[#076b78] to-[#12a8a5] p-6 text-white shadow-xl shadow-teal-900/20">

        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full border border-white/10 bg-white/[0.04]" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <div className="flex size-14 items-center justify-center rounded-[19px] bg-white/10 text-3xl backdrop-blur-md">
              🌍
            </div>

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-100">
                International Learning
              </p>

              <h1 className="mt-1 text-[23px] font-black">
                PISA Academy
              </h1>

            </div>

          </div>

          <p className="mt-5 text-[12px] leading-5 text-cyan-50/80">
            Bilimni yodlash emas — bilimni real
            hayotdagi vaziyatlarda qo‘llash, tahlil
            qilish va asoslangan qaror qabul qilish.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            <Pill text="Real-Life" />
            <Pill text="Data" />
            <Pill text="Reasoning" />
            <Pill text="Problem Solving" />

          </div>

        </div>

      </section>

      {/* PISA LEVELS */}

      <section>

        <div className="mb-3 px-1">

          <p className="text-[9px] font-black uppercase tracking-[0.17em] text-teal-600">
            PISA Progression
          </p>

          <h2 className="mt-1 text-[20px] font-black">
            Bosqichni tanlang
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-2.5">

          {PISA_LEVELS.map((item, index) => {

            const active = activeLevel === item.id

            return (
              <button
                key={item.id}
                type="button"
                disabled={!item.unlocked}
                onClick={() => setActiveLevel(item.id)}
                className={`relative rounded-[22px] border p-4 text-left transition-all ${
                  active
                    ? 'border-teal-300 bg-teal-50 shadow-md dark:border-teal-700 dark:bg-teal-950/30'
                    : !item.unlocked
                      ? 'bg-muted/30 opacity-60'
                      : 'bg-card hover:border-teal-200'
                }`}
              >

                <div className="flex items-center justify-between">

                  <div className="flex size-9 items-center justify-center rounded-xl bg-teal-600 text-white">
                    <span className="text-[11px] font-black">
                      {index === 0 ? 'F' : index}
                    </span>
                  </div>

                  {!item.unlocked ? (
                    <Lock className="size-4 text-muted-foreground" />
                  ) : active ? (
                    <CheckCircle2 className="size-4 text-teal-600" />
                  ) : null}

                </div>

                <p className="mt-3 text-[12px] font-black">
                  {item.title}
                </p>

                <p className="mt-1 text-[9px] font-bold text-teal-700">
                  {item.subtitle}
                </p>

                <p className="mt-1.5 text-[9px] leading-4 text-muted-foreground">
                  {item.description}
                </p>

              </button>
            )
          })}

        </div>

      </section>

      {/* DOMAINS */}

      <section>

        <div className="mb-3 flex items-end justify-between px-1">

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.17em] text-teal-600">
              PISA Domains
            </p>

            <h2 className="mt-1 text-[20px] font-black">
              Savodxonlik yo‘nalishlari
            </h2>
          </div>

          <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[9px] font-black text-teal-700 dark:bg-teal-950/30 dark:text-teal-300">
            {selectedGrade.grades}
          </span>

        </div>

        <div className="space-y-2.5">

          {PISA_DOMAINS.map((domain, index) => (
            <PisaDomainCard
              key={domain.id}
              domain={domain}
              index={index}
            />
          ))}

        </div>

      </section>

      {/* PISA SKILLS */}

      <section className="rounded-[26px] border bg-card p-5">

        <div className="flex items-center gap-3">

          <div className="flex size-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30">
            <BrainCircuit className="size-5" />
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-indigo-600">
              Core Competencies
            </p>

            <h2 className="text-[17px] font-black">
              PISA fikrlash ko‘nikmalari
            </h2>
          </div>

        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">

          <Competency
            icon="🔎"
            title="Identify"
            text="Ma’lumotni aniqlash"
          />

          <Competency
            icon="🧮"
            title="Apply"
            text="Bilimni qo‘llash"
          />

          <Competency
            icon="📊"
            title="Analyse"
            text="Ma’lumotni tahlil"
          />

          <Competency
            icon="💡"
            title="Reason"
            text="Asoslangan fikr"
          />

        </div>

      </section>

      {/* FULL TEST */}

      <section className="relative overflow-hidden rounded-[27px] bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-950 p-5 text-white shadow-xl">

        <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-cyan-400/10 blur-2xl" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
              <Trophy className="size-6" />
            </div>

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-cyan-200">
                Final Assessment
              </p>

              <h2 className="text-[18px] font-black">
                PISA FULL TEST
              </h2>

            </div>

          </div>

          <p className="mt-4 text-[11px] leading-5 text-white/60">
            Kompleks diagnostika: matematika,
            o‘qish va tabiiy-ilmiy savodxonlik.
            Yakunda kuchli va rivojlantirilishi kerak
            bo‘lgan ko‘nikmalar aniqlanadi.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">

            <MiniDarkStat
              value="60"
              label="savol"
            />

            <MiniDarkStat
              value="60"
              label="daqiqa"
            />

            <MiniDarkStat
              value="3"
              label="domain"
            />

          </div>

          <button
            type="button"
            className="mt-4 flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-sm font-black text-slate-950"
          >
            <span className="flex items-center gap-2">
              <Play className="size-4 fill-current" />
              Full Testni boshlash
            </span>

            <ArrowRight className="size-4" />
          </button>

        </div>

      </section>

    </div>
  )
}


/* =========================================================
   SUBJECT ACADEMY
========================================================= */

function SubjectAcademy({
  section,
  grade,
  onBack,
}: {
  section: AcademySection
  grade: GradeBand
  onBack: () => void
}) {
  const isMath = section.id === 'math'
  const isLogic = section.id === 'logic'
  const isReading = section.id === 'reading'
  const isScience = section.id === 'science'
  const isPresident = section.id === 'president'
  const isOlympiad = section.id === 'olympiad'

  const modules = isMath
    ? [
        ['01', 'Sonlar va amallar', 'Foundation'],
        ['02', 'Algebra', 'Core'],
        ['03', 'Geometriya', 'Core'],
        ['04', 'Funksiyalar', 'Advanced'],
        ['05', 'Statistika va ehtimollar', 'Advanced'],
        ['06', 'Muammoli masalalar', 'Challenge'],
      ]
    : isLogic
      ? [
          ['01', 'Ketma-ketliklar', 'Foundation'],
          ['02', 'Pattern & Logic', 'Core'],
          ['03', 'Deduksiya', 'Core'],
          ['04', 'Strategik fikrlash', 'Advanced'],
          ['05', 'Murakkab mantiq', 'Challenge'],
          ['06', 'IQ Challenge', 'Elite'],
        ]
      : isReading
        ? [
            ['01', 'Matnni tushunish', 'Foundation'],
            ['02', 'Asosiy g‘oya', 'Core'],
            ['03', 'Dalil va xulosa', 'Core'],
            ['04', 'Muallif pozitsiyasi', 'Advanced'],
            ['05', 'Tanqidiy o‘qish', 'Challenge'],
            ['06', 'Complex Text', 'Elite'],
          ]
        : isScience
          ? [
              ['01', 'Ilmiy kuzatuv', 'Foundation'],
              ['02', 'Biologiya', 'Core'],
              ['03', 'Fizika', 'Core'],
              ['04', 'Kimyo', 'Advanced'],
              ['05', 'Eksperiment tahlili', 'Challenge'],
              ['06', 'Scientific Reasoning', 'Elite'],
            ]
          : isPresident
            ? [
                ['01', 'Mathematics', 'Foundation'],
                ['02', 'Logic', 'Core'],
                ['03', 'English', 'Core'],
                ['04', 'Problem Solving', 'Advanced'],
                ['05', 'Mock Exam', 'Challenge'],
              ]
            : isOlympiad
              ? [
                  ['01', 'Olympiad Foundation', 'Foundation'],
                  ['02', 'Number Theory', 'Core'],
                  ['03', 'Combinatorics', 'Advanced'],
                  ['04', 'Geometry Challenge', 'Advanced'],
                  ['05', 'Problem Solving', 'Elite'],
                ]
              : []

  return (
    <div className="flex flex-col gap-5 pb-10">

      <SubHeader
        onBack={onBack}
        eyebrow={section.subtitle}
        title={section.title}
        icon={<span className="text-xl">{section.icon}</span>}
      />

      <section className="relative overflow-hidden rounded-[29px] bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-800 p-6 text-white shadow-xl">

        <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full border border-white/10" />

        <div className="relative">

          <div className="flex items-center gap-3">

            <div className="flex size-14 items-center justify-center rounded-[19px] bg-white/10 text-3xl">
              {section.icon}
            </div>

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-200">
                {grade.grades}
              </p>

              <h1 className="text-[23px] font-black">
                {section.title}
              </h1>

            </div>

          </div>

          <p className="mt-4 text-[12px] leading-5 text-blue-50/75">
            {section.description}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">

            <HeroStat
              icon={<BookOpen className="size-3.5" />}
              value={String(modules.length)}
              label="modul"
            />

            <HeroStat
              icon={<Target className="size-3.5" />}
              value="68%"
              label="progress"
            />

            <HeroStat
              icon={<Zap className="size-3.5" />}
              value="+250"
              label="XP"
            />

          </div>

        </div>

      </section>

      <section>

        <div className="mb-3 px-1">

          <p className="text-[9px] font-black uppercase tracking-[0.17em] text-indigo-600">
            Learning Path
          </p>

          <h2 className="mt-1 text-[20px] font-black">
            Bosqichma-bosqich o‘rganish
          </h2>

        </div>

        <div className="space-y-2.5">

          {modules.map(
            ([number, title, level], index) => (
              <button
                key={number}
                type="button"
                className="group w-full rounded-[22px] border bg-card p-4 text-left transition-all hover:border-indigo-200 hover:shadow-md"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-[11px] font-black text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300">
                    {number}
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">

                      <h3 className="text-[13px] font-black">
                        {title}
                      </h3>

                      <span className="rounded-full bg-muted px-2 py-0.5 text-[7px] font-black uppercase">
                        {level}
                      </span>

                    </div>

                    <p className="mt-1 text-[9px] text-muted-foreground">
                      30 ta savol · 15 daqiqa · +60 XP
                    </p>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">

                      <div
                        className="h-full rounded-full bg-indigo-600"
                        style={{
                          width:
                            index === 0
                              ? '100%'
                              : index === 1
                                ? '68%'
                                : '0%',
                        }}
                      />

                    </div>

                  </div>

                  <ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />

                </div>

              </button>
            ),
          )}

        </div>

      </section>

      <section className="rounded-[25px] border bg-muted/30 p-5">

        <div className="flex items-center gap-3">

          <div className="flex size-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/30">
            <Lightbulb className="size-5" />
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.15em] text-amber-600">
              Smart Learning
            </p>

            <h2 className="text-[16px] font-black">
              Sizning keyingi qadamingiz
            </h2>
          </div>

        </div>

        <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
          Avval Foundation bosqichidagi asosiy
          ko‘nikmalarni mustahkamlang, keyin Core
          va Advanced masalalarga o‘ting.
        </p>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between rounded-2xl bg-indigo-600 px-4 py-3.5 text-sm font-black text-white"
        >
          <span className="flex items-center gap-2">
            <Play className="size-4 fill-current" />
            Tavsiya etilgan test
          </span>

          <ArrowRight className="size-4" />
        </button>

      </section>

    </div>
  )
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SubHeader({
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
    <header className="flex items-center gap-3 pt-1">

      <button
        type="button"
        onClick={onBack}
        className="flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md active:scale-95"
      >
        <ArrowLeft className="size-5" />
      </button>

      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30">
        {icon}
      </div>

      <div className="min-w-0">

        <p className="truncate text-[8px] font-black uppercase tracking-[0.17em] text-indigo-600">
          {eyebrow}
        </p>

        <h1 className="truncate text-[19px] font-black">
          {title}
        </h1>

      </div>

    </header>
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 backdrop-blur-md">

      <div className="flex items-center gap-1.5 text-cyan-200">
        {icon}
        <span className="text-[8px] font-bold uppercase">
          {label}
        </span>
      </div>

      <p className="mt-1 text-[15px] font-black">
        {value}
      </p>

    </div>
  )
}


function AcademySectionCard({
  section,
  onClick,
}: {
  section: AcademySection
  onClick: () => void
}) {
  const colors: Record<
    string,
    {
      border: string
      bg: string
      text: string
    }
  > = {
    indigo: {
      border: 'border-indigo-100 dark:border-indigo-900/30',
      bg: 'bg-indigo-50 dark:bg-indigo-950/30',
      text: 'text-indigo-700 dark:text-indigo-300',
    },
    blue: {
      border: 'border-blue-100 dark:border-blue-900/30',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      text: 'text-blue-700 dark:text-blue-300',
    },
    violet: {
      border: 'border-violet-100 dark:border-violet-900/30',
      bg: 'bg-violet-50 dark:bg-violet-950/30',
      text: 'text-violet-700 dark:text-violet-300',
    },
    emerald: {
      border: 'border-emerald-100 dark:border-emerald-900/30',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      text: 'text-emerald-700 dark:text-emerald-300',
    },
    cyan: {
      border: 'border-cyan-100 dark:border-cyan-900/30',
      bg: 'bg-cyan-50 dark:bg-cyan-950/30',
      text: 'text-cyan-700 dark:text-cyan-300',
    },
    sky: {
      border: 'border-sky-100 dark:border-sky-900/30',
      bg: 'bg-sky-50 dark:bg-sky-950/30',
      text: 'text-sky-700 dark:text-sky-300',
    },
    amber: {
      border: 'border-amber-100 dark:border-amber-900/30',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      text: 'text-amber-700 dark:text-amber-300',
    },
    rose: {
      border: 'border-rose-100 dark:border-rose-900/30',
      bg: 'bg-rose-50 dark:bg-rose-950/30',
      text: 'text-rose-700 dark:text-rose-300',
    },
  }

  const color = colors[section.accent] ?? colors.blue

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[23px] border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] ${color.border}`}
    >

      {section.badge && (
        <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-2 py-1 text-[7px] font-black text-slate-950">
          {section.badge}
        </span>
      )}

      <div
        className={`flex size-11 items-center justify-center rounded-2xl text-2xl ${color.bg}`}
      >
        {section.icon}
      </div>

      <p className={`mt-3 text-[12px] font-black ${color.text}`}>
        {section.title}
      </p>

      <p className="mt-0.5 text-[8px] font-bold text-muted-foreground">
        {section.subtitle}
      </p>

      <p className="mt-2 text-[9px] leading-4 text-muted-foreground">
        {section.description}
      </p>

      <div className="mt-3 flex items-center justify-between">

        <span className="text-[8px] font-black text-muted-foreground">
          Boshlash
        </span>

        <span className="flex size-7 items-center justify-center rounded-lg bg-muted transition-transform group-hover:translate-x-1">
          <ChevronRight className="size-3.5" />
        </span>

      </div>

    </button>
  )
}


function PathItem({
  number,
  title,
  text,
  done = false,
}: {
  number: string
  title: string
  text: string
  done?: boolean
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-card p-3">

      <div
        className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-[9px] font-black ${
          done
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30'
        }`}
      >
        {done ? (
          <CheckCircle2 className="size-4" />
        ) : (
          number
        )}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[11px] font-black">
          {title}
        </p>

        <p className="mt-0.5 text-[9px] text-muted-foreground">
          {text}
        </p>

      </div>

      <ChevronRight className="size-4 text-muted-foreground" />

    </div>
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
    <div className="rounded-[18px] border bg-card p-3 text-center">

      <div className="text-xl">
        {icon}
      </div>

      <p className="mt-1.5 text-[8px] font-black">
        {title}
      </p>

    </div>
  )
}


function SkillCard({
  icon,
  title,
  subtitle,
  progress,
}: {
  icon: string
  title: string
  subtitle: string
  progress: number
}) {
  return (
    <div className="rounded-[18px] border bg-card p-3">

      <div className="flex items-center gap-2">

        <span className="text-lg">
          {icon}
        </span>

        <div className="min-w-0">

          <p className="truncate text-[10px] font-black">
            {title}
          </p>

          <p className="truncate text-[8px] text-muted-foreground">
            {subtitle}
          </p>

        </div>

      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">

        <div
          className="h-full rounded-full bg-indigo-600"
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-1 text-right text-[8px] font-black text-indigo-600">
        {progress}%
      </p>

    </div>
  )
}


function RoadmapItem({
  number,
  title,
  text,
  done = false,
}: {
  number: string
  title: string
  text: string
  done?: boolean
}) {
  return (
    <div className="flex items-center gap-3">

      <div
        className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-[9px] font-black ${
          done
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-muted text-muted-foreground'
        }`}
      >
        {done ? (
          <CheckCircle2 className="size-4" />
        ) : (
          number
        )}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[11px] font-black">
          {title}
        </p>

        <p className="text-[8px] text-muted-foreground">
          {text}
        </p>

      </div>

    </div>
  )
}


function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[8px] font-black backdrop-blur-md">
      {text}
    </span>
  )
}


function PisaDomainCard({
  domain,
  index,
}: {
  domain: PisaDomain
  index: number
}) {
  return (
    <button
      type="button"
      className="group w-full rounded-[23px] border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
    >

      <div className="flex items-center gap-3">

        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-2xl dark:bg-teal-950/30">
          {domain.icon}
        </div>

        <div className="min-w-0 flex-1">

          <div className="flex items-center gap-2">

            <span className="text-[8px] font-black text-teal-600">
              0{index + 1}
            </span>

            <h3 className="truncate text-[12px] font-black">
              {domain.title}
            </h3>

          </div>

          <p className="mt-0.5 truncate text-[8px] font-bold text-muted-foreground">
            {domain.subtitle}
          </p>

          <p className="mt-1 text-[9px] leading-4 text-muted-foreground">
            {domain.description}
          </p>

        </div>

        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />

      </div>

      <div className="mt-3 flex items-center justify-between">

        <span className="rounded-full bg-teal-50 px-2 py-1 text-[7px] font-black text-teal-700 dark:bg-teal-950/30 dark:text-teal-300">
          {domain.level}
        </span>

        <span className="text-[8px] font-bold text-muted-foreground">
          {domain.questions} savol
        </span>

      </div>

    </button>
  )
}


function Competency({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-[18px] border bg-muted/30 p-3">

      <div className="flex items-center gap-2">

        <span className="text-lg">
          {icon}
        </span>

        <div>
          <p className="text-[10px] font-black">
            {title}
          </p>

          <p className="text-[8px] text-muted-foreground">
            {text}
          </p>
        </div>

      </div>

    </div>
  )
}


function MiniDarkStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-center">

      <p className="text-[16px] font-black">
        {value}
      </p>

      <p className="mt-0.5 text-[8px] text-white/45">
        {label}
      </p>

    </div>
  )
}
