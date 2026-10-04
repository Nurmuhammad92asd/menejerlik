'use client'

import { useMemo, useState, type ReactNode } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FlaskConical,
  Globe2,
  GraduationCap,
  Headphones,
  Languages,
  Lightbulb,
  Lock,
  Medal,
  MessageCircle,
  Microscope,
  Pencil,
  Play,
  RotateCcw,
  Rocket,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Volume2,
  X,
  Zap,
} from 'lucide-react'

/* =========================================================
   TYPES
========================================================= */

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

type TrackColor =
  | 'green'
  | 'blue'
  | 'purple'
  | 'amber'
  | 'cyan'
  | 'rose'

type Track = {
  id: TrackId
  title: string
  subtitle: string
  description: string
  icon: string
  color: TrackColor
  progress: number
  lessons: number
  tests: number
}

type EnglishLevel = {
  id: string
  title: string
  subtitle: string
  description: string
  progress: number
  tests: number
  color: TrackColor
}

/* =========================================================
   FOUNDATION TYPES
========================================================= */

type FoundationWord = {
  word: string
  translation: string
  example: string
  pronunciation?: string
}

type FoundationQuestion = {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

type FoundationLesson = {
  id: string
  number: number
  title: string
  subtitle: string
  description: string
  emoji: string
  duration: number
  xp: number
  level: string
  objectives: string[]
  vocabulary: FoundationWord[]
  grammar?: {
    title: string
    explanation: string
    examples: string[]
  }
  practice: {
    question: string
    options: string[]
    correct: number
  }[]
  test: FoundationQuestion[]
}

/* =========================================================
   FOUNDATION CURRICULUM
========================================================= */

const FOUNDATION_LESSONS: FoundationLesson[] = [
  {
    id: 'foundation-01',
    number: 1,
    title: 'Hello! Nice to meet you',
    subtitle: 'Greetings & introductions',
    description:
      'Ingliz tilida salomlashish, o‘zingizni tanishtirish va oddiy suhbatni boshlashni o‘rganamiz.',
    emoji: '👋',
    duration: 12,
    xp: 50,
    level: 'Starter',
    objectives: [
      'Salomlashish iboralarini ishlatish',
      'O‘zingizni tanishtirish',
      'Ism so‘rash va javob berish',
    ],
    vocabulary: [
      {
        word: 'Hello',
        translation: 'Salom',
        pronunciation: 'he-loʊ',
        example: 'Hello! My name is Ali.',
      },
      {
        word: 'Hi',
        translation: 'Salom',
        pronunciation: 'haɪ',
        example: 'Hi! Nice to meet you.',
      },
      {
        word: 'Name',
        translation: 'Ism',
        pronunciation: 'neɪm',
        example: 'My name is Sara.',
      },
      {
        word: 'Nice',
        translation: 'Yoqimli',
        pronunciation: 'naɪs',
        example: 'Nice to meet you.',
      },
      {
        word: 'Meet',
        translation: 'Uchrashmoq / tanishmoq',
        pronunciation: 'miːt',
        example: 'Nice to meet you.',
      },
    ],
    grammar: {
      title: 'My name is…',
      explanation:
        'O‘zingizni tanishtirish uchun “My name is…” yoki qisqa shaklda “I’m…” ishlatiladi.',
      examples: [
        'My name is Aziz.',
        'I am Madina.',
        'I’m Bekzod.',
        'What is your name?',
      ],
    },
    practice: [
      {
        question: '“Salom” so‘zining eng oddiy inglizcha varianti qaysi?',
        options: ['Hello', 'Thank you', 'Goodbye', 'Please'],
        correct: 0,
      },
      {
        question: 'O‘zingizni tanishtirish uchun qaysi gap to‘g‘ri?',
        options: [
          'My name is Ali.',
          'My name Ali.',
          'Name my is Ali.',
          'Ali name my.',
        ],
        correct: 0,
      },
    ],
    test: [
      {
        id: 'f1-q1',
        question: '“Nice to meet you” nimani anglatadi?',
        options: [
          'Tanishganimdan xursandman',
          'Xayrli tong',
          'Qayerdansiz?',
          'Rahmat',
        ],
        correct: 0,
        explanation:
          '“Nice to meet you” — “Tanishganimdan xursandman” degan ma’noni bildiradi.',
      },
      {
        id: 'f1-q2',
        question: '“My name is John” gapining ma’nosi nima?',
        options: [
          'Mening ismim John.',
          'Men Johnni ko‘rdim.',
          'John mening do‘stim.',
          'John qayerda?',
        ],
        correct: 0,
        explanation:
          'My name is… o‘zini tanishtirish uchun ishlatiladi.',
      },
      {
        id: 'f1-q3',
        question: '“What is your name?” savoliga qaysi javob mos?',
        options: [
          'My name is Ali.',
          'I am fine.',
          'Good morning.',
          'See you.',
        ],
        correct: 0,
        explanation:
          'Bu savol ismni so‘raydi, shuning uchun “My name is Ali” mos javob.',
      },
    ],
  },

  {
    id: 'foundation-02',
    number: 2,
    title: 'Numbers & age',
    subtitle: 'Sonlar va yosh',
    description:
      '1 dan 20 gacha sonlar, yoshni aytish va oddiy savollarni o‘rganamiz.',
    emoji: '🔢',
    duration: 10,
    xp: 50,
    level: 'Starter',
    objectives: [
      '1–20 sonlarni tanish',
      'Yoshni aytish',
      'How old are you? savolini tushunish',
    ],
    vocabulary: [
      {
        word: 'One',
        translation: 'Bir',
        example: 'One book.',
      },
      {
        word: 'Two',
        translation: 'Ikki',
        example: 'Two pencils.',
      },
      {
        word: 'Five',
        translation: 'Besh',
        example: 'I am five.',
      },
      {
        word: 'Ten',
        translation: 'O‘n',
        example: 'Ten students.',
      },
      {
        word: 'Years old',
        translation: 'Yoshda',
        example: 'I am seven years old.',
      },
    ],
    grammar: {
      title: 'I am … years old',
      explanation:
        'Yoshni aytishda “I am … years old” konstruktsiyasidan foydalanamiz.',
      examples: [
        'I am six years old.',
        'I am ten years old.',
        'How old are you?',
        'She is seven years old.',
      ],
    },
    practice: [
      {
        question: '“Five” qaysi son?',
        options: ['3', '5', '7', '10'],
        correct: 1,
      },
      {
        question: '“Men 8 yoshdaman” qaysi variant?',
        options: [
          'I am eight years old.',
          'I eight years.',
          'I am eight old.',
          'Eight I am years.',
        ],
        correct: 0,
      },
    ],
    test: [
      {
        id: 'f2-q1',
        question: '“How old are you?” nimani so‘raydi?',
        options: [
          'Yoshingiz nechada?',
          'Ismingiz nima?',
          'Qayerdansiz?',
          'Nima qilyapsiz?',
        ],
        correct: 0,
        explanation:
          'How old are you? — insonning yoshini so‘rash uchun ishlatiladi.',
      },
      {
        id: 'f2-q2',
        question: '“Ten” qaysi son?',
        options: ['8', '9', '10', '12'],
        correct: 2,
        explanation: 'Ten — 10 soni.',
      },
      {
        id: 'f2-q3',
        question: '“I am seven years old” nimani bildiradi?',
        options: [
          'Men yetti yoshdaman.',
          'Men yettita kitobim bor.',
          'Men yettinchi sinfdaman.',
          'Men soat yettida keldim.',
        ],
        correct: 0,
        explanation:
          'I am seven years old — Men yetti yoshdaman.',
      },
    ],
  },

  {
    id: 'foundation-03',
    number: 3,
    title: 'Colours around me',
    subtitle: 'Colors & objects',
    description:
      'Ranglarni o‘rganamiz va atrofimizdagi buyumlarni tasvirlashni boshlaymiz.',
    emoji: '🎨',
    duration: 11,
    xp: 60,
    level: 'Starter',
    objectives: [
      'Asosiy ranglarni aytish',
      'Buyum va rangni bog‘lash',
      'Oddiy tasvirlash gaplarini tuzish',
    ],
    vocabulary: [
      {
        word: 'Red',
        translation: 'Qizil',
        example: 'The apple is red.',
      },
      {
        word: 'Blue',
        translation: 'Ko‘k',
        example: 'The sky is blue.',
      },
      {
        word: 'Green',
        translation: 'Yashil',
        example: 'The tree is green.',
      },
      {
        word: 'Yellow',
        translation: 'Sariq',
        example: 'The sun is yellow.',
      },
      {
        word: 'Black',
        translation: 'Qora',
        example: 'The bag is black.',
      },
    ],
    grammar: {
      title: 'It is …',
      explanation:
        'Buyum yoki narsani tasvirlashda “It is + sifat/rang” shaklidan foydalanish mumkin.',
      examples: [
        'It is red.',
        'It is blue.',
        'The ball is green.',
        'The bag is black.',
      ],
    },
    practice: [
      {
        question: '“Green” qanday rang?',
        options: ['Yashil', 'Qizil', 'Ko‘k', 'Sariq'],
        correct: 0,
      },
      {
        question: '“The sky is blue” nimani bildiradi?',
        options: [
          'Osmon ko‘k.',
          'Osmon yashil.',
          'Osmon sariq.',
          'Osmon qora.',
        ],
        correct: 0,
      },
    ],
    test: [
      {
        id: 'f3-q1',
        question: '“Red” so‘zining tarjimasi?',
        options: ['Qizil', 'Ko‘k', 'Yashil', 'Oq'],
        correct: 0,
        explanation: 'Red — qizil rang.',
      },
      {
        id: 'f3-q2',
        question: 'Qaysi gap grammatik jihatdan to‘g‘ri?',
        options: [
          'The ball is blue.',
          'The ball blue is.',
          'Ball is the blue.',
          'Blue ball is the.',
        ],
        correct: 0,
        explanation:
          'Oddiy tasvirlashda “The ball is blue” to‘g‘ri tuzilma.',
      },
      {
        id: 'f3-q3',
        question: '“Yellow” qaysi rang?',
        options: ['Sariq', 'Qora', 'Yashil', 'Ko‘k'],
        correct: 0,
        explanation: 'Yellow — sariq.',
      },
    ],
  },

  {
    id: 'foundation-04',
    number: 4,
    title: 'My family',
    subtitle: 'Family vocabulary',
    description:
      'Oila a’zolarini ingliz tilida nomlash va ular haqida oddiy gaplar tuzishni o‘rganamiz.',
    emoji: '👨‍👩‍👧‍👦',
    duration: 13,
    xp: 60,
    level: 'Starter',
    objectives: [
      'Oila a’zolarini aytish',
      'This is… konstruktsiyasidan foydalanish',
      'Oddiy family sentences tuzish',
    ],
    vocabulary: [
      {
        word: 'Mother',
        translation: 'Ona',
        example: 'This is my mother.',
      },
      {
        word: 'Father',
        translation: 'Ota',
        example: 'This is my father.',
      },
      {
        word: 'Brother',
        translation: 'Aka / uka',
        example: 'My brother is young.',
      },
      {
        word: 'Sister',
        translation: 'Opa / singil',
        example: 'My sister is kind.',
      },
      {
        word: 'Family',
        translation: 'Oila',
        example: 'I love my family.',
      },
    ],
    grammar: {
      title: 'This is my…',
      explanation:
        'Biror kishini tanishtirish uchun “This is my…” konstruktsiyasi ishlatiladi.',
      examples: [
        'This is my mother.',
        'This is my father.',
        'This is my sister.',
        'This is my family.',
      ],
    },
    practice: [
      {
        question: '“Mother” so‘zining ma’nosi?',
        options: ['Ona', 'Ota', 'Aka', 'Oila'],
        correct: 0,
      },
      {
        question: '“Bu mening akam” qaysi variant?',
        options: [
          'This is my brother.',
          'This my brother.',
          'This is brother my.',
          'My is this brother.',
        ],
        correct: 0,
      },
    ],
    test: [
      {
        id: 'f4-q1',
        question: '“Father” nimani anglatadi?',
        options: ['Ota', 'Ona', 'Aka', 'Singil'],
        correct: 0,
        explanation: 'Father — ota.',
      },
      {
        id: 'f4-q2',
        question: '“I love my family” tarjimasi qaysi?',
        options: [
          'Men oilamni yaxshi ko‘raman.',
          'Men oilam bilan yashayman.',
          'Mening oilam katta.',
          'Men oilamni ko‘rdim.',
        ],
        correct: 0,
        explanation:
          'I love my family — Men oilamni yaxshi ko‘raman.',
      },
      {
        id: 'f4-q3',
        question: '“This is my sister” nimani bildiradi?',
        options: [
          'Bu mening opam/singlim.',
          'Bu mening onam.',
          'Bu mening akam.',
          'Bu mening otam.',
        ],
        correct: 0,
        explanation:
          'Sister — opa yoki singil.',
      },
    ],
  },
]

/* =========================================================
   TRACK DATA
========================================================= */

const TRACKS: Track[] = [
  {
    id: 'pisa',
    title: 'PISA',
    subtitle: 'Savodxonlik va real hayot',
    description:
      'Matematik, o‘qish va tabiiy-ilmiy savodxonlik. Grafik, jadval, dalil va real vaziyatlar.',
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
      'Ketma-ketlik, pattern, tahlil, strategiya va muammo yechish qobiliyatlari.',
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

const ENGLISH_LEVELS: EnglishLevel[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    subtitle: 'Noldan boshlash',
    description:
      'Alphabet, sounds, basic vocabulary, classroom English va eng zarur iboralar.',
    progress: 25,
    tests: 40,
    color: 'green',
  },
  {
    id: 'pre-a1',
    title: 'Pre-A1',
    subtitle: 'Starter',
    description:
      'Salomlashish, ranglar, sonlar, oila, maktab va oddiy kundalik so‘zlar.',
    progress: 0,
    tests: 45,
    color: 'lime',
  },
  {
    id: 'a1',
    title: 'A1',
    subtitle: 'Beginner',
    description:
      'Present Simple, be, have, basic questions, everyday communication.',
    progress: 0,
    tests: 55,
    color: 'emerald',
  },
  {
    id: 'a2',
    title: 'A2',
    subtitle: 'Elementary',
    description:
      'Kundalik mavzularda muloqot, asosiy zamonlar, vocabulary va reading.',
    progress: 0,
    tests: 60,
    color: 'teal',
  },
  {
    id: 'b1',
    title: 'B1',
    subtitle: 'Intermediate',
    description:
      'Mustaqil muloqot, murakkabroq matnlar, grammar va writing.',
    progress: 0,
    tests: 65,
    color: 'blue',
  },
  {
    id: 'b2',
    title: 'B2',
    subtitle: 'Upper-Intermediate',
    description:
      'Academic vocabulary, complex grammar, argumentation va advanced reading.',
    progress: 0,
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
  ['📐', 'Matematik savodxonlik', 'Real hayotdagi matematik muammolar.', 21],
  ['📖', 'O‘qish savodxonligi', 'Matnni tushunish va xulosa chiqarish.', 16],
  ['🔬', 'Tabiiy-ilmiy savodxonlik', 'Ilmiy hodisalarni tahlil qilish.', 12],
  ['📊', 'Grafik va jadval', 'Ma’lumotlarni taqqoslash va tahlil.', 28],
  ['🧩', 'Muammo yechish', 'Strategiya va samarali yechim.', 19],
  ['💡', 'Critical Thinking', 'Dalil va xulosalarni baholash.', 14],
]

const SUBJECTS = [
  ['physics', '⚡', 'Fizika', 'Mexanika, energiya va elektr.', 14],
  ['chemistry', '🧪', 'Kimyo', 'Modda, reaksiya va elementlar.', 8],
  ['biology', '🧬', 'Biologiya', 'Hujayra, genetika va ekologiya.', 19],
  ['informatics', '💻', 'Informatika', 'Algoritm, kodlash va raqamli fikrlash.', 23],
  ['natural', '🌱', 'Tabiiy fanlar', 'Tabiat hodisalari va bog‘liqlik.', 17],
  ['geography', '🌎', 'Geografiya', 'Xarita, tabiat va global jarayonlar.', 10],
]

/* =========================================================
   MAIN
========================================================= */

export function StudentAcademy({ onBack }: StudentAcademyProps) {
  const [selectedTrack, setSelectedTrack] =
    useState<TrackId | null>(null)

  const [selectedEnglishLevel, setSelectedEnglishLevel] =
    useState<string | null>(null)

  const [foundationOpen, setFoundationOpen] =
    useState(false)

  const totalTests = TRACKS.reduce(
    (sum, track) => sum + track.tests,
    0,
  )

  if (foundationOpen) {
    return (
      <FoundationAcademy
        onBack={() => setFoundationOpen(false)}
      />
    )
  }

  if (selectedTrack === 'english') {
    return (
      <EnglishAcademy
        onBack={() => setSelectedTrack(null)}
        selectedLevel={selectedEnglishLevel}
        onSelectLevel={setSelectedEnglishLevel}
        onOpenFoundation={() => setFoundationOpen(true)}
      />
    )
  }

  if (selectedTrack === 'pisa') {
    return <PisaAcademy onBack={() => setSelectedTrack(null)} />
  }

  if (selectedTrack === 'math') {
    return <MathAcademy onBack={() => setSelectedTrack(null)} />
  }

  if (selectedTrack === 'science') {
    return <ScienceAcademy onBack={() => setSelectedTrack(null)} />
  }

  if (selectedTrack === 'logic') {
    return <LogicAcademy onBack={() => setSelectedTrack(null)} />
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
      <PageHeader
        onBack={onBack}
        eyebrow="Student Learning System"
        title="O‘quvchi Akademiyasi"
        icon={<GraduationCap className="size-5" />}
      />

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 p-6 text-white shadow-2xl">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-white/10 bg-white/[0.04]" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                <Sparkles className="size-3.5 text-lime-300" />
                <span className="text-[9px] font-black uppercase tracking-[0.16em]">
                  Future Ready
                </span>
              </div>

              <h2 className="mt-4 text-[28px] font-black leading-tight">
                Bilimdan
                <br />
                <span className="text-lime-300">
                  kelajakka.
                </span>
              </h2>

              <p className="mt-3 max-w-[330px] text-[12px] leading-5 text-emerald-50/80">
                Bilimni o‘rganing, mashq qiling,
                testdan o‘ting va keyingi bosqichni
                oching.
              </p>
            </div>

            <div className="flex size-14 shrink-0 items-center justify-center rounded-[20px] bg-white/10 text-3xl backdrop-blur-md">
              🎓
            </div>
          </div>

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

      <button
        type="button"
        onClick={() => setSelectedTrack('english')}
        className="group relative overflow-hidden rounded-[27px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] dark:border-blue-900/30 dark:from-blue-950/20 dark:via-card dark:to-emerald-950/20"
      >
        <div className="absolute -right-8 -top-8 text-[100px] opacity-[0.07]">
          🇬🇧
        </div>

        <div className="relative flex items-center gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-[21px] bg-gradient-to-br from-blue-600 to-emerald-500 text-3xl text-white shadow-lg shadow-blue-500/20">
            🇬🇧
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-[0.17em] text-blue-600">
              Recommended pathway
            </p>

            <h3 className="mt-1 text-[19px] font-black">
              English Academy
            </h3>

            <p className="mt-1 text-[10px] text-muted-foreground">
              Foundation → Pre-A1 → A1 → A2 → B1 → B2 → C1 → C2
            </p>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[25%] rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
            </div>
          </div>

          <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </div>
      </button>

      <button
        type="button"
        onClick={() => setSelectedTrack('pisa')}
        className="group relative overflow-hidden rounded-[26px] border border-emerald-100 bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-emerald-900/20"
      >
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

      <section className="rounded-[26px] border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between">
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
          <MiniProgress label="Testlar" value={totalTests} />
          <MiniProgress label="Darslar" value={328} />
          <MiniProgress label="XP" value={1240} />
        </div>
      </section>

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
              onClick={() => setSelectedTrack(track.id)}
            />
          ))}
        </div>
      </section>

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
   ENGLISH ACADEMY
========================================================= */

function EnglishAcademy({
  onBack,
  selectedLevel,
  onSelectLevel,
  onOpenFoundation,
}: {
  onBack: () => void
  selectedLevel: string | null
  onSelectLevel: (id: string | null) => void
  onOpenFoundation: () => void
}) {
  if (selectedLevel === 'foundation') {
    return (
      <FoundationAcademy
        onBack={() => onSelectLevel(null)}
      />
    )
  }

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
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full border border-white/10" />

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
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-[9px] font-black backdrop-blur ${
                  level.id === 'foundation'
                    ? 'ring-2 ring-lime-300'
                    : ''
                }`}
              >
                {level.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDATION HERO */}
      <button
        type="button"
        onClick={onOpenFoundation}
        className="group relative overflow-hidden rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-5 text-left shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-emerald-900/30 dark:from-emerald-950/30 dark:via-card dark:to-lime-950/20"
      >
        <div className="absolute -right-4 -top-5 text-[110px] opacity-[0.08]">
          🚀
        </div>

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white shadow-lg shadow-emerald-600/20">
              🚀
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-emerald-600">
                    Start here
                  </p>

                  <h3 className="mt-0.5 text-[19px] font-black">
                    Foundation
                  </h3>
                </div>

                <ChevronRight className="size-5 text-emerald-600 transition-transform group-hover:translate-x-1" />
              </div>

              <p className="mt-1 text-[10px] text-muted-foreground">
                Noldan boshlang · {FOUNDATION_LESSONS.length} dars
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-[10px] font-bold">
            <span className="text-muted-foreground">
              Darslar ketma-ket ochiladi
            </span>

            <span className="text-emerald-600">
              1-darsni boshlash →
            </span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950/50">
            <div className="h-full w-[25%] rounded-full bg-gradient-to-r from-emerald-600 to-lime-400" />
          </div>
        </div>
      </button>

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
          icon={<Headphones className="size-5" />}
          title="Listening"
          text="Eshitib tushunish"
        />
      </section>
    </div>
  )
}

/* =========================================================
   FOUNDATION ENGINE
========================================================= */

function FoundationAcademy({
  onBack,
}: {
  onBack: () => void
}) {
  const [selectedLesson, setSelectedLesson] =
    useState<number | null>(null)

  const [completedLessons, setCompletedLessons] =
    useState<number[]>([])

  if (selectedLesson !== null) {
    const lesson = FOUNDATION_LESSONS[selectedLesson]

    return (
      <FoundationLesson
        lesson={lesson}
        lessonIndex={selectedLesson}
        totalLessons={FOUNDATION_LESSONS.length}
        completedLessons={completedLessons}
        onBack={() => setSelectedLesson(null)}
        onComplete={(index) => {
          setCompletedLessons((prev) =>
            prev.includes(index)
              ? prev
              : [...prev, index],
          )
        }}
        onNext={() => {
          const next = selectedLesson + 1

          if (next < FOUNDATION_LESSONS.length) {
            setSelectedLesson(next)
          } else {
            setSelectedLesson(null)
          }
        }}
      />
    )
  }

  const progress = Math.round(
    (completedLessons.length /
      FOUNDATION_LESSONS.length) *
      100,
  )

  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="English · Foundation"
        title="Foundation"
        icon={<Rocket className="size-5" />}
      />

      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-emerald-950 via-emerald-800 to-lime-700 p-6 text-white shadow-2xl">
        <div className="absolute -right-16 -top-16 size-60 rounded-full border border-white/10" />
        <div className="absolute -bottom-16 -left-16 size-52 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                <Sparkles className="size-3.5 text-lime-300" />

                <span className="text-[9px] font-black uppercase tracking-[0.16em]">
                  English Foundation
                </span>
              </div>

              <h2 className="mt-4 text-[28px] font-black">
                Ingliz tilini
                <br />
                <span className="text-lime-300">
                  noldan boshlang.
                </span>
              </h2>

              <p className="mt-3 max-w-[310px] text-[11px] leading-5 text-white/75">
                Avval o‘rganing. Keyin mashq qiling.
                So‘ng testdan o‘ting. Keyingi dars
                natijangizga qarab ochiladi.
              </p>
            </div>

            <div className="text-4xl">🇬🇧</div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-[10px] font-bold">
              <span>Foundation progress</span>
              <span>{progress}%</span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-lime-300 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-2">
        <MiniProgress
          label="Dars"
          value={completedLessons.length}
        />

        <MiniProgress
          label="Qolgan"
          value={
            FOUNDATION_LESSONS.length -
            completedLessons.length
          }
        />

        <MiniProgress
          label="XP"
          value={
            completedLessons.reduce(
              (sum, index) =>
                sum +
                FOUNDATION_LESSONS[index].xp,
              0,
            )
          }
        />
      </section>

      <section>
        <SectionHeading
          eyebrow="Learning path"
          title="Darslar"
          icon={<BookOpen className="size-4.5" />}
        />

        <div className="mt-3 flex flex-col gap-3">
          {FOUNDATION_LESSONS.map(
            (lesson, index) => {
              const completed =
                completedLessons.includes(index)

              const unlocked =
                index === 0 ||
                completedLessons.includes(index - 1)

              return (
                <FoundationLessonCard
                  key={lesson.id}
                  lesson={lesson}
                  index={index}
                  completed={completed}
                  unlocked={unlocked}
                  onClick={() => {
                    if (unlocked) {
                      setSelectedLesson(index)
                    }
                  }}
                />
              )
            },
          )}
        </div>
      </section>

      <section className="rounded-[25px] border border-blue-100 bg-blue-50 p-5 dark:border-blue-900/30 dark:bg-blue-950/20">
        <div className="flex gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Lightbulb className="size-5" />
          </div>

          <div>
            <h3 className="text-[14px] font-black">
              Qanday o‘rganamiz?
            </h3>

            <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
              Har bir dars 4 bosqichdan iborat:
              o‘rganish → vocabulary → practice →
              test. Testni tugatganingizdan keyin
              keyingi dars ochiladi.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

/* =========================================================
   FOUNDATION LESSON
========================================================= */

function FoundationLesson({
  lesson,
  lessonIndex,
  totalLessons,
  completedLessons,
  onBack,
  onComplete,
  onNext,
}: {
  lesson: FoundationLesson
  lessonIndex: number
  totalLessons: number
  completedLessons: number[]
  onBack: () => void
  onComplete: (index: number) => void
  onNext: () => void
}) {
  const [stage, setStage] = useState<
    'learn' | 'practice' | 'test' | 'result'
  >('learn')

  const [practiceAnswers, setPracticeAnswers] =
    useState<Record<number, number>>({})

  const [testAnswers, setTestAnswers] =
    useState<Record<number, number>>({})

  const [currentPractice, setCurrentPractice] =
    useState(0)

  const [currentTest, setCurrentTest] =
    useState(0)

  const [score, setScore] = useState(0)

  const progress =
    stage === 'learn'
      ? 25
      : stage === 'practice'
        ? 50
        : stage === 'test'
          ? 75
          : 100

  const alreadyCompleted =
    completedLessons.includes(lessonIndex)

  const answerPractice = (option: number) => {
    setPracticeAnswers((prev) => ({
      ...prev,
      [currentPractice]: option,
    }))
  }

  const nextPractice = () => {
    if (
      currentPractice <
      lesson.practice.length - 1
    ) {
      setCurrentPractice((prev) => prev + 1)
    } else {
      setStage('test')
    }
  }

  const answerTest = (option: number) => {
    setTestAnswers((prev) => ({
      ...prev,
      [currentTest]: option,
    }))
  }

  const nextTest = () => {
    if (
      currentTest <
      lesson.test.length - 1
    ) {
      setCurrentTest((prev) => prev + 1)
      return
    }

    let finalScore = 0

    lesson.test.forEach((question, index) => {
      if (
        testAnswers[index] === question.correct
      ) {
        finalScore += 1
      }
    })

    if (
      testAnswers[currentTest] ===
      lesson.test[currentTest].correct
    ) {
      finalScore += 1
    }

    setScore(finalScore)
    setStage('result')

    if (
      finalScore >=
      Math.ceil(lesson.test.length * 0.6)
    ) {
      onComplete(lessonIndex)
    }
  }

  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow={`Foundation · ${lesson.number}/${totalLessons}`}
        title={lesson.title}
        icon={<BookOpen className="size-5" />}
      />

      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-lime-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {stage === 'learn' && (
        <LessonLearning
          lesson={lesson}
          onStartPractice={() =>
            setStage('practice')
          }
        />
      )}

      {stage === 'practice' && (
        <PracticeStage
          lesson={lesson}
          current={currentPractice}
          selected={practiceAnswers[currentPractice]}
          onSelect={answerPractice}
          onNext={nextPractice}
        />
      )}

      {stage === 'test' && (
        <TestStage
          lesson={lesson}
          current={currentTest}
          selected={testAnswers[currentTest]}
          onSelect={answerTest}
          onNext={nextTest}
        />
      )}

      {stage === 'result' && (
        <LessonResult
          lesson={lesson}
          score={score}
          alreadyCompleted={alreadyCompleted}
          onRetry={() => {
            setStage('test')
            setCurrentTest(0)
            setTestAnswers({})
            setScore(0)
          }}
          onNext={onNext}
        />
      )}
    </div>
  )
}

/* =========================================================
   LEARNING STAGE
========================================================= */

function LessonLearning({
  lesson,
  onStartPractice,
}: {
  lesson: FoundationLesson
  onStartPractice: () => void
}) {
  return (
    <>
      <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-950 via-indigo-900 to-emerald-800 p-6 text-white shadow-2xl">
        <div className="absolute -right-10 -top-10 text-[120px] opacity-10">
          {lesson.emoji}
        </div>

        <div className="relative">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-black">
              LESSON {lesson.number}
            </span>

            <span className="rounded-full bg-lime-300 px-3 py-1 text-[9px] font-black text-emerald-950">
              +{lesson.xp} XP
            </span>
          </div>

          <h2 className="mt-5 text-[27px] font-black leading-tight">
            {lesson.title}
          </h2>

          <p className="mt-2 text-[12px] font-bold text-lime-200">
            {lesson.subtitle}
          </p>

          <p className="mt-4 text-[11px] leading-5 text-white/75">
            {lesson.description}
          </p>

          <div className="mt-5 flex items-center gap-3 text-[10px] font-bold text-white/60">
            <span className="flex items-center gap-1">
              <Clock3 className="size-3.5" />
              {lesson.duration} daqiqa
            </span>

            <span>•</span>

            <span>{lesson.vocabulary.length} vocabulary</span>
          </div>
        </div>
      </section>

      <section className="rounded-[26px] border bg-card p-5 shadow-sm">
        <SectionHeading
          eyebrow="Lesson goals"
          title="Bugun nimalarni o‘rganamiz?"
          icon={<Target className="size-4.5" />}
        />

        <div className="mt-4 flex flex-col gap-2">
          {lesson.objectives.map((objective) => (
            <div
              key={objective}
              className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-3 dark:bg-emerald-950/20"
            >
              <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />

              <span className="text-[11px] font-bold">
                {objective}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Vocabulary"
          title="Yangi so‘zlar"
          icon={<Languages className="size-4.5" />}
        />

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {lesson.vocabulary.map((word) => (
            <VocabularyCard
              key={word.word}
              word={word}
            />
          ))}
        </div>
      </section>

      {lesson.grammar && (
        <section className="rounded-[26px] border border-violet-100 bg-violet-50 p-5 dark:border-violet-900/30 dark:bg-violet-950/20">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-violet-600 text-white">
              <Brain className="size-5" />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-violet-600">
                Grammar
              </p>

              <h3 className="text-[17px] font-black">
                {lesson.grammar.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 text-[11px] leading-5 text-muted-foreground">
            {lesson.grammar.explanation}
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {lesson.grammar.examples.map(
              (example) => (
                <div
                  key={example}
                  className="rounded-xl bg-white/70 px-3 py-2 text-[11px] font-bold dark:bg-black/10"
                >
                  🇬🇧 {example}
                </div>
              ),
            )}
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={onStartPractice}
        className="flex w-full items-center justify-between rounded-[22px] bg-emerald-600 px-5 py-4 text-sm font-black text-white shadow-xl shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98]"
      >
        <span className="flex items-center gap-2">
          <Play className="size-4 fill-current" />
          Mashqni boshlash
        </span>

        <ArrowRight className="size-4" />
      </button>
    </>
  )
}

/* =========================================================
   PRACTICE
========================================================= */

function PracticeStage({
  lesson,
  current,
  selected,
  onSelect,
  onNext,
}: {
  lesson: FoundationLesson
  current: number
  selected?: number
  onSelect: (option: number) => void
  onNext: () => void
}) {
  const question = lesson.practice[current]

  return (
    <section className="rounded-[28px] border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-600">
            Practice
          </p>

          <h2 className="mt-1 text-[20px] font-black">
            Mashq {current + 1}
          </h2>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-black text-emerald-600 dark:bg-emerald-950/30">
          {current + 1}/{lesson.practice.length}
        </span>
      </div>

      <div className="mt-6 rounded-2xl bg-muted/50 p-4">
        <p className="text-[15px] font-black leading-6">
          {question.question}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {question.options.map((option, index) => {
          const active = selected === index

          return (
            <button
              type="button"
              key={option}
              onClick={() => onSelect(index)}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                active
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                  : 'bg-card hover:border-emerald-300'
              }`}
            >
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-xl text-[11px] font-black ${
                  active
                    ? 'bg-emerald-600 text-white'
                    : 'bg-muted'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>

              <span className="text-[11px] font-bold">
                {option}
              </span>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        disabled={selected === undefined}
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-between rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span>
          {current === lesson.practice.length - 1
            ? 'Testga o‘tish'
            : 'Keyingi mashq'}
        </span>

        <ArrowRight className="size-4" />
      </button>
    </section>
  )
}

/* =========================================================
   TEST
========================================================= */

function TestStage({
  lesson,
  current,
  selected,
  onSelect,
  onNext,
}: {
  lesson: FoundationLesson
  current: number
  selected?: number
  onSelect: (option: number) => void
  onNext: () => void
}) {
  const question = lesson.test[current]

  return (
    <section className="rounded-[28px] border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-blue-600">
            Final test
          </p>

          <h2 className="mt-1 text-[20px] font-black">
            Bilimingizni tekshiring
          </h2>
        </div>

        <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/30">
          <Target className="size-5" />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {lesson.test.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 flex-1 rounded-full ${
              index <= current
                ? 'bg-blue-600'
                : 'bg-muted'
            }`}
          />
        ))}
      </div>

      <p className="mt-5 text-[10px] font-black text-muted-foreground">
        SAVOL {current + 1} / {lesson.test.length}
      </p>

      <h3 className="mt-3 text-[17px] font-black leading-6">
        {question.question}
      </h3>

      <div className="mt-5 flex flex-col gap-2.5">
        {question.options.map((option, index) => {
          const active = selected === index

          return (
            <button
              type="button"
              key={option}
              onClick={() => onSelect(index)}
              className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                active
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
                  : 'bg-card hover:border-blue-300'
              }`}
            >
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-black ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'bg-muted'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>

              <span className="text-[11px] font-bold">
                {option}
              </span>

              {active && (
                <Check className="ml-auto size-4 text-blue-600" />
              )}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        disabled={selected === undefined}
        onClick={onNext}
        className="mt-5 flex w-full items-center justify-between rounded-2xl bg-blue-600 px-5 py-4 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span>
          {current === lesson.test.length - 1
            ? 'Natijani ko‘rish'
            : 'Keyingi savol'}
        </span>

        <ArrowRight className="size-4" />
      </button>
    </section>
  )
}

/* =========================================================
   RESULT
========================================================= */

function LessonResult({
  lesson,
  score,
  alreadyCompleted,
  onRetry,
  onNext,
}: {
  lesson: FoundationLesson
  score: number
  alreadyCompleted: boolean
  onRetry: () => void
  onNext: () => void
}) {
  const passed =
    score >= Math.ceil(lesson.test.length * 0.6)

  const percentage = Math.round(
    (score / lesson.test.length) * 100,
  )

  return (
    <div className="flex flex-col gap-5">
      <section
        className={`relative overflow-hidden rounded-[30px] p-7 text-center text-white shadow-2xl ${
          passed
            ? 'bg-gradient-to-br from-emerald-950 via-emerald-700 to-lime-600'
            : 'bg-gradient-to-br from-orange-950 via-orange-700 to-amber-600'
        }`}
      >
        <div className="absolute -right-12 -top-12 text-[110px] opacity-10">
          {passed ? '🏆' : '💪'}
        </div>

        <div className="relative">
          <div className="mx-auto flex size-20 items-center justify-center rounded-[25px] bg-white/10 text-4xl backdrop-blur">
            {passed ? '🎉' : '💪'}
          </div>

          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            Lesson result
          </p>

          <h2 className="mt-2 text-[30px] font-black">
            {percentage}%
          </h2>

          <p className="mt-2 text-[12px] text-white/75">
            {score} / {lesson.test.length} to‘g‘ri javob
          </p>

          {passed ? (
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-[10px] font-black text-emerald-950">
              <CheckCircle2 className="size-4" />
              DARS MUVAFFAQIYATLI
            </div>
          ) : (
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-black">
              <RotateCcw className="size-4" />
              YANA BIR BOR URINIB KO‘RING
            </div>
          )}
        </div>
      </section>

      <section className="grid grid-cols-3 gap-2">
        <MiniProgress
          label="Natija"
          value={percentage}
        />

        <MiniProgress
          label="To‘g‘ri"
          value={score}
        />

        <MiniProgress
          label="XP"
          value={passed ? lesson.xp : 0}
        />
      </section>

      <section className="rounded-[25px] border bg-card p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/20">
            <Star className="size-5" />
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-amber-600">
              Your achievement
            </p>

            <h3 className="text-[16px] font-black">
              {passed
                ? `+${lesson.xp} XP qo‘shildi`
                : 'Bilimni mustahkamlash kerak'}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
          {passed
            ? 'Ajoyib! Siz ushbu darsni muvaffaqiyatli yakunladingiz. Keyingi dars endi ochiq.'
            : 'Xatolar — o‘rganishning bir qismi. Testni qayta ishlab, natijani yaxshilang.'}
        </p>
      </section>

      <div className="flex flex-col gap-2.5">
        {!passed && (
          <button
            type="button"
            onClick={onRetry}
            className="flex items-center justify-center gap-2 rounded-2xl border bg-card px-5 py-4 text-sm font-black"
          >
            <RotateCcw className="size-4" />
            Testni qayta ishlash
          </button>
        )}

        {passed && (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center justify-between rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20"
          >
            <span className="flex items-center gap-2">
              <Rocket className="size-4" />
              Keyingi dars
            </span>

            <ArrowRight className="size-4" />
          </button>
        )}

        {!passed && alreadyCompleted && (
          <button
            type="button"
            onClick={onNext}
            className="rounded-2xl bg-emerald-600 px-5 py-4 text-sm font-black text-white"
          >
            Darsga qaytish
          </button>
        )}
      </div>
    </div>
  )
}

/* =========================================================
   VOCABULARY
========================================================= */

function VocabularyCard({
  word,
}: {
  word: FoundationWord
}) {
  const [showExample, setShowExample] =
    useState(false)

  return (
    <button
      type="button"
      onClick={() => setShowExample((v) => !v)}
      className="rounded-[22px] border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[16px] font-black text-emerald-600">
            {word.word}
          </p>

          <p className="mt-0.5 text-[10px] font-bold text-muted-foreground">
            {word.translation}
          </p>
        </div>

        <Volume2 className="size-4 text-muted-foreground" />
      </div>

      {word.pronunciation && (
        <p className="mt-2 text-[9px] font-medium text-blue-600">
          /{word.pronunciation}/
        </p>
      )}

      {showExample && (
        <div className="mt-3 rounded-xl bg-muted/60 p-2.5 text-[9px] leading-4">
          🇬🇧 {word.example}
        </div>
      )}
    </button>
  )
}

/* =========================================================
   FOUNDATION LESSON CARD
========================================================= */

function FoundationLessonCard({
  lesson,
  index,
  completed,
  unlocked,
  onClick,
}: {
  lesson: FoundationLesson
  index: number
  completed: boolean
  unlocked: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      disabled={!unlocked}
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3 rounded-[24px] border p-4 text-left transition-all ${
        unlocked
          ? 'bg-card shadow-sm hover:-translate-y-0.5 hover:shadow-lg'
          : 'cursor-not-allowed bg-muted/30 opacity-60'
      }`}
    >
      <div
        className={`relative flex size-13 shrink-0 items-center justify-center rounded-2xl text-2xl ${
          completed
            ? 'bg-emerald-600 text-white'
            : unlocked
              ? 'bg-emerald-50 dark:bg-emerald-950/30'
              : 'bg-muted'
        }`}
      >
        {completed ? (
          <Check className="size-6" />
        ) : unlocked ? (
          lesson.emoji
        ) : (
          <Lock className="size-5" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-black uppercase tracking-wider text-muted-foreground">
            Lesson {String(index + 1).padStart(2, '0')}
          </span>

          {completed && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-black text-emerald-600 dark:bg-emerald-950/30">
              COMPLETED
            </span>
          )}
        </div>

        <h3 className="mt-1 text-[14px] font-black">
          {lesson.title}
        </h3>

        <p className="mt-0.5 text-[9px] text-muted-foreground">
          {lesson.subtitle}
        </p>

        <div className="mt-2 flex items-center gap-3 text-[8px] font-bold text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock3 className="size-3" />
            {lesson.duration} min
          </span>

          <span>+{lesson.xp} XP</span>

          <span>
            {lesson.test.length} test
          </span>
        </div>
      </div>

      {unlocked && (
        <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
      )}
    </button>
  )
}

/* =========================================================
   OTHER ACADEMIES
========================================================= */

function PisaAcademy({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="International Assessment"
        title="PISA Academy"
        icon={<Globe2 className="size-5" />}
      />

      <section className="rounded-[30px] bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-800 p-6 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-3xl">
            🌍
          </div>

          <span className="rounded-full bg-lime-300 px-3 py-1 text-[9px] font-black text-emerald-950">
            PISA STYLE
          </span>
        </div>

        <h2 className="mt-5 text-[26px] font-black">
          Bilimni hayotda qo‘llash.
        </h2>

        <p className="mt-2 text-[12px] leading-5 text-white/75">
          PISA bilimni yodlashdan ko‘ra,
          undan foydalanish, tahlil qilish,
          dalil bilan fikrlash va muammo yechishni
          baholaydi.
        </p>
      </section>

      <section>
        <SectionHeading
          eyebrow="PISA Domains"
          title="Savodxonlik yo‘nalishlari"
          icon={<Brain className="size-4.5" />}
        />

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {PISA_DOMAINS.map(
            ([icon, title, text, progress]) => (
              <PisaDomainCard
                key={String(title)}
                icon={String(icon)}
                title={String(title)}
                text={String(text)}
                progress={Number(progress)}
              />
            ),
          )}
        </div>
      </section>

      <button
        type="button"
        className="flex w-full items-center justify-between rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-black text-white shadow-lg"
      >
        <span className="flex items-center gap-2">
          <Rocket className="size-4" />
          Full PISA testni boshlash
        </span>

        <ArrowRight className="size-4" />
      </button>
    </div>
  )
}

function MathAcademy({ onBack }: { onBack: () => void }) {
  const levels = [
    ['Foundation', 'Asosiy matematik tushunchalar', 34],
    ['Basic', 'Hisoblash va standart masalalar', 27],
    ['Intermediate', 'Algebra va geometriya', 18],
    ['Advanced', 'Murakkab masalalar', 8],
    ['Olympiad', 'Kreativ va nostandart masalalar', 3],
  ]

  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="Mathematics Academy"
        title="Matematika"
        icon={<Lightbulb className="size-5" />}
      />

      <section className="rounded-[30px] bg-gradient-to-br from-violet-950 via-indigo-900 to-blue-800 p-6 text-white shadow-2xl">
        <div className="text-4xl">📐</div>

        <h2 className="mt-5 text-[23px] font-black">
          Asosdan Olimpiadagacha
        </h2>

        <p className="mt-3 text-[12px] leading-5 text-white/70">
          Hisoblashdan algebra, geometriya,
          kombinatorika va olimpiada masalalarigacha.
        </p>
      </section>

      <section>
        <SectionHeading
          eyebrow="Levels"
          title="Matematika darajalari"
          icon={<BarChart3 className="size-4.5" />}
        />

        <div className="mt-3 flex flex-col gap-2.5">
          {levels.map(
            ([title, subtitle, progress], index) => (
              <SimpleLevel
                key={String(title)}
                title={String(title)}
                subtitle={String(subtitle)}
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

function ScienceAcademy({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="Science Academy"
        title="Fanlar"
        icon={<FlaskConical className="size-5" />}
      />

      <section className="rounded-[30px] bg-gradient-to-br from-cyan-950 via-teal-900 to-emerald-800 p-6 text-white shadow-2xl">
        <div className="text-4xl">🔬</div>

        <h2 className="mt-5 text-[23px] font-black">
          Fanlar laboratoriyasi
        </h2>

        <p className="mt-3 text-[12px] leading-5 text-white/70">
          Fanni faqat yodlash emas — tajriba,
          kuzatish, sabab-oqibat va ilmiy fikrlash
          orqali o‘rganish.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-2.5">
        {SUBJECTS.map(
          ([id, icon, title, text, progress]) => (
            <SubjectCard
              key={String(id)}
              icon={String(icon)}
              title={String(title)}
              text={String(text)}
              progress={Number(progress)}
            />
          ),
        )}
      </div>
    </div>
  )
}

function LogicAcademy({ onBack }: { onBack: () => void }) {
  const levels = [
    ['IQ Foundation', 'Oddiy mantiqiy bog‘lanishlar', 48],
    ['Pattern', 'Ketma-ketlik va naqshlar', 34],
    ['Analytical', 'Tahlil va deduksiya', 21],
    ['Critical Thinking', 'Dalil va xulosalar', 13],
    ['Advanced Logic', 'Strategik fikrlash', 5],
  ]

  return (
    <div className="flex flex-col gap-5 pb-10">
      <PageHeader
        onBack={onBack}
        eyebrow="Thinking Academy"
        title="Mantiq"
        icon={<Brain className="size-5" />}
      />

      <section className="rounded-[30px] bg-gradient-to-br from-amber-950 via-orange-900 to-emerald-800 p-6 text-white shadow-2xl">
        <div className="text-4xl">🧠</div>

        <h2 className="mt-5 text-[23px] font-black">
          Fikrni kuchaytiring
        </h2>

        <p className="mt-3 text-[12px] leading-5 text-white/70">
          Pattern, IQ, deduksiya, critical thinking
          va murakkab muammolarni yechish.
        </p>
      </section>

      <div className="flex flex-col gap-2.5">
        {levels.map(
          ([title, subtitle, progress], index) => (
            <SimpleLevel
              key={String(title)}
              title={String(title)}
              subtitle={String(subtitle)}
              progress={Number(progress)}
              number={index + 1}
            />
          ),
        )}
      </div>
    </div>
  )
}

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
        className={`rounded-[30px] p-6 text-white shadow-2xl ${
          president
            ? 'bg-gradient-to-br from-emerald-950 via-green-900 to-teal-800'
            : 'bg-gradient-to-br from-rose-950 via-red-900 to-amber-800'
        }`}
      >
        <div className="text-4xl">
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
  level: EnglishLevel
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

          <div className="text-4xl">🇬🇧</div>
        </div>

        <p className="mt-5 text-[12px] leading-5 opacity-80">
          {level.description}
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-current"
            style={{ width: `${level.progress}%` }}
          />
        </div>

        <div className="mt-2 flex justify-between text-[10px] font-bold opacity-70">
          <span>{level.progress}% bajarildi</span>
          <span>{level.tests} test</span>
        </div>
      </section>

      <section className="rounded-[26px] border bg-card p-5">
        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-emerald-600">
          Recommended
        </p>

        <h3 className="mt-1 text-[18px] font-black">
          Keyingi bosqich
        </h3>

        <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
          Bu daraja uchun darslar, mashqlar va
          testlar ketma-ketligi shu yerda
          joylashtiriladi.
        </p>
      </section>
    </div>
  )
}

/* =========================================================
   SHARED COMPONENTS
========================================================= */

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
      'border-indigo-100 bg-indigo-50 text-indigo-700 dark:border-indigo-950/30 dark:bg-indigo-950/20 dark:text-indigo-300',
    violet:
      'border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-950/30 dark:bg-violet-950/20 dark:text-violet-300',
  }

  return map[color] ?? map.green
}

function PageHeader({
  onBack,
  eyebrow,
  title,
  icon,
}: {
  onBack: () => void
  eyebrow: string
  title: string
  icon: ReactNode
}) {
  return (
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
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-600">
          {eyebrow}
        </p>

        <h1 className="mt-0.5 truncate text-[21px] font-black">
          {title}
        </h1>
      </div>

      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
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
  icon: ReactNode
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
  icon: ReactNode
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
  level: EnglishLevel
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
          style={{ width: `${progress}%` }}
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
  icon: ReactNode
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
