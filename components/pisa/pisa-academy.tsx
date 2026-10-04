'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

/* =========================================================
   PISA ACADEMY
   Menejerlik by Nurmuhammad
   ---------------------------------------------------------
   Original PISA-style adaptive training interface.
   Bu rasmiy PISA testi emas.
========================================================= */

/* =========================================================
   TYPES
========================================================= */

type Domain =
  | 'mathematics'
  | 'reading'
  | 'science'
  | 'problem-solving'

type Difficulty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type Question = {
  id: string
  domain: Domain
  difficulty: Difficulty
  category: string
  context: string
  stimulus?: string
  question: string
  options: string[]
  correct: number
  explanation: string
  xp: number
  estimatedTime?: number
}

type AnswerRecord = {
  questionId: string
  correct: boolean
  difficulty: Difficulty
  domain: Domain
  selected: number
  correctAnswer: number
}

type SkillState = {
  mathematics: number
  reading: number
  science: number
  'problem-solving': number
}

/* =========================================================
   QUESTION BANK
========================================================= */

const QUESTIONS: Question[] = [
  {
    id: 'pisa-math-001',
    domain: 'mathematics',
    difficulty: 2,
    category: 'Miqdor',
    context: 'Shaxsiy hayot',
    stimulus:
      'Aziza har kuni maktabga borish uchun 12 000 so‘m transport xarajat qiladi. U haftada 5 kun maktabga boradi.',
    question:
      'Aziza bir hafta davomida transport uchun qancha pul sarflaydi?',
    options: [
      '50 000 so‘m',
      '60 000 so‘m',
      '70 000 so‘m',
      '72 000 so‘m',
    ],
    correct: 1,
    explanation:
      'Bir kunlik xarajat 12 000 so‘m. 5 kun uchun 12 000 × 5 = 60 000 so‘m.',
    xp: 20,
    estimatedTime: 45,
  },

  {
    id: 'pisa-math-002',
    domain: 'mathematics',
    difficulty: 3,
    category: 'Ma’lumotlarni tahlil qilish',
    context: 'Maktab',
    stimulus:
      'Maktabdagi 4 ta sinfda mos ravishda 24, 28, 26 va 22 nafar o‘quvchi bor.',
    question:
      'Ushbu sinflardagi o‘quvchilar sonining o‘rtacha qiymati nechaga teng?',
    options: ['24', '25', '26', '27'],
    correct: 1,
    explanation:
      '(24 + 28 + 26 + 22) ÷ 4 = 100 ÷ 4 = 25.',
    xp: 25,
    estimatedTime: 60,
  },

  {
    id: 'pisa-math-003',
    domain: 'mathematics',
    difficulty: 4,
    category: 'Noaniqlik va ma’lumotlar',
    context: 'Jamiyat',
    stimulus:
      'Kutubxonaga bir oyda dushanba kuni 42, seshanba kuni 36, chorshanba kuni 51 va payshanba kuni 45 nafar o‘quvchi tashrif buyurdi.',
    question:
      'Qaysi kuni kutubxonaga tashrif buyuruvchilar soni eng ko‘p bo‘lgan?',
    options: [
      'Dushanba',
      'Seshanba',
      'Chorshanba',
      'Payshanba',
    ],
    correct: 2,
    explanation:
      'Berilgan qiymatlar ichida 51 eng katta son. Shuning uchun eng ko‘p tashrif chorshanba kuni bo‘lgan.',
    xp: 30,
    estimatedTime: 45,
  },

  {
    id: 'pisa-math-004',
    domain: 'mathematics',
    difficulty: 5,
    category: 'Foiz va nisbat',
    context: 'Ilmiy',
    stimulus:
      'Bir tadqiqotda 200 nafar o‘quvchining 70 foizi maktab kutubxonasidan oyiga kamida bir marta foydalanishi aniqlandi.',
    question:
      'Tadqiqotdagi nechta o‘quvchi kutubxonadan kamida bir marta foydalanadi?',
    options: ['120', '130', '140', '150'],
    correct: 2,
    explanation:
      '200 ning 70 foizi: 200 × 0,70 = 140.',
    xp: 35,
    estimatedTime: 60,
  },

  {
    id: 'pisa-math-005',
    domain: 'mathematics',
    difficulty: 6,
    category: 'O‘zgarish va bog‘lanishlar',
    context: 'Shaxsiy hayot',
    stimulus:
      'Bir telefonning narxi 2 000 000 so‘m edi. Do‘kon aksiyasi vaqtida narx 15% ga kamaytirildi.',
    question:
      'Aksiya vaqtida telefonning yangi narxi qancha bo‘ladi?',
    options: [
      '1 600 000 so‘m',
      '1 650 000 so‘m',
      '1 700 000 so‘m',
      '1 850 000 so‘m',
    ],
    correct: 2,
    explanation:
      '15% chegirma 300 000 so‘m. 2 000 000 − 300 000 = 1 700 000 so‘m.',
    xp: 40,
    estimatedTime: 90,
  },

  {
    id: 'pisa-reading-001',
    domain: 'reading',
    difficulty: 2,
    category: 'Axborotni topish',
    context: 'Maktab',
    stimulus:
      'Maktab kutubxonasi dushanba–juma kunlari 08:00 dan 17:00 gacha ishlaydi. Shanba kuni esa 09:00 dan 13:00 gacha ochiq.',
    question:
      'Kutubxona shanba kuni soat nechagacha ishlaydi?',
    options: [
      '11:00 gacha',
      '12:00 gacha',
      '13:00 gacha',
      '17:00 gacha',
    ],
    correct: 2,
    explanation:
      'Matnda shanba kuni kutubxona 09:00 dan 13:00 gacha ishlashi aniq ko‘rsatilgan.',
    xp: 20,
    estimatedTime: 30,
  },

  {
    id: 'pisa-reading-002',
    domain: 'reading',
    difficulty: 4,
    category: 'Xulosa chiqarish',
    context: 'Jamiyat',
    stimulus:
      'Maktabda plastik butilkalardan foydalanishni kamaytirish maqsadida barcha o‘quvchilarga qayta foydalaniladigan suv idishlari tavsiya qilindi. Bir oy o‘tgach, chiqindilar orasidagi plastik butilkalar soni sezilarli kamaydi.',
    question:
      'Matndan qanday xulosa chiqarish mumkin?',
    options: [
      'O‘quvchilar umuman suv ichmay qo‘ydi.',
      'Qayta foydalaniladigan idishlardan foydalanish plastik chiqindini kamaytirishga yordam berdi.',
      'Maktab plastik butilkalarni sotishni boshladi.',
      'Barcha chiqindilar butunlay yo‘qoldi.',
    ],
    correct: 1,
    explanation:
      'Matnda qayta foydalaniladigan idishlar tavsiya qilingach plastik butilkalar kamaygani kuzatilgani aytilgan.',
    xp: 30,
    estimatedTime: 75,
  },

  {
    id: 'pisa-reading-003',
    domain: 'reading',
    difficulty: 5,
    category: 'Dalillarni baholash',
    context: 'Raqamli muhit',
    stimulus:
      'Bir blogda “Har kuni ertalab suv ichish barcha kasalliklarni davolaydi” degan fikr yozilgan. Muallif bu fikrni tasdiqlovchi hech qanday tadqiqot yoki manba keltirmagan.',
    question:
      'Ushbu fikrni baholashda eng muhim savol qaysi?',
    options: [
      'Blogning dizayni chiroylimi?',
      'Muallifning yozish uslubi yoqimlimi?',
      'Fikrni tasdiqlovchi ishonchli dalil yoki manba mavjudmi?',
      'Maqolada nechta rasm bor?',
    ],
    correct: 2,
    explanation:
      'Axborotning ishonchliligini baholashda fikrni tasdiqlovchi dalil va ishonchli manbalar muhim.',
    xp: 40,
    estimatedTime: 90,
  },

  {
    id: 'pisa-science-001',
    domain: 'science',
    difficulty: 3,
    category: 'Ilmiy hodisani tushuntirish',
    context: 'Atrof-muhit',
    stimulus:
      'O‘simlik quyosh nuri tushadigan joyda saqlandi. Bir necha kundan keyin uning barglari yashil va sog‘lom ko‘rindi.',
    question:
      'Buning eng maqbul ilmiy izohi qaysi?',
    options: [
      'O‘simlik yorug‘likdan fotosintez jarayonida foydalanadi.',
      'O‘simlik faqat qorong‘ida oziq hosil qiladi.',
      'Quyosh nuri o‘simlik uchun mutlaqo kerak emas.',
      'Barglarning yashil bo‘lishiga suvning yo‘qligi sabab bo‘ladi.',
    ],
    correct: 0,
    explanation:
      'O‘simliklar fotosintez jarayonida yorug‘lik energiyasidan foydalanadi.',
    xp: 25,
    estimatedTime: 60,
  },

  {
    id: 'pisa-science-002',
    domain: 'science',
    difficulty: 5,
    category: 'Ma’lumotlarni talqin qilish',
    context: 'Ilmiy',
    stimulus:
      'Tajriba davomida suv harorati 20°C dan 40°C gacha oshirilganda moddaning erish tezligi oshgani kuzatildi.',
    question:
      'Ushbu natija asosida qanday xulosa qilish mumkin?',
    options: [
      'Harorat oshishi erish jarayoniga ta’sir qilishi mumkin.',
      'Harorat hech qanday ta’sirga ega emas.',
      'Modda 40°C da muzlaydi.',
      'Tajriba natijasi barcha moddalar uchun doimo bir xil.',
    ],
    correct: 0,
    explanation:
      'Aynan ushbu tajribada harorat oshishi bilan erish tezligi oshgani kuzatilgan.',
    xp: 35,
    estimatedTime: 75,
  },

  {
    id: 'pisa-science-003',
    domain: 'science',
    difficulty: 6,
    category: 'Tajriba dizayni',
    context: 'Ilmiy',
    stimulus:
      'O‘quvchi ikki xil o‘g‘itning o‘simlik o‘sishiga ta’sirini solishtirmoqchi. U ikkita bir xil o‘simlikdan foydalanmoqda.',
    question:
      'Tajriba natijasini ishonchliroq taqqoslash uchun qaysi omilni imkon qadar bir xil saqlash kerak?',
    options: [
      'O‘simliklarning boshlang‘ich holati',
      'Faqat o‘g‘it turi',
      'O‘simliklardan birining idishini olib tashlash',
      'Bir o‘simlikka umuman suv bermaslik',
    ],
    correct: 0,
    explanation:
      'Tajriba adolatli bo‘lishi uchun taqqoslanayotgan o‘simliklarning boshlang‘ich sharoitlari imkon qadar bir xil bo‘lishi kerak.',
    xp: 45,
    estimatedTime: 100,
  },

  {
    id: 'pisa-problem-001',
    domain: 'problem-solving',
    difficulty: 3,
    category: 'Muammo yechish',
    context: 'Maktab',
    stimulus:
      'Sinfda 30 nafar o‘quvchi bor. Ularni teng guruhlarga ajratish kerak. Har bir guruhda kamida 5 nafar va ko‘pi bilan 10 nafar o‘quvchi bo‘lishi kerak.',
    question:
      'Quyidagi variantlardan qaysi biri shartlarga mos keladi?',
    options: [
      '2 ta guruh',
      '3 ta guruh',
      '4 ta guruh',
      '7 ta guruh',
    ],
    correct: 1,
    explanation:
      '30 ÷ 3 = 10. Demak, 3 ta guruhda 10 nafardan o‘quvchi bo‘ladi va shart bajariladi.',
    xp: 30,
    estimatedTime: 60,
  },

  {
    id: 'pisa-problem-002',
    domain: 'problem-solving',
    difficulty: 5,
    category: 'Strategik fikrlash',
    context: 'Shaxsiy hayot',
    stimulus:
      'Sizda 120 000 so‘m bor. Kitob 55 000 so‘m, daftar 18 000 so‘m, ruchka 7 000 so‘m va sumka 65 000 so‘m turadi.',
    question:
      'O‘qish uchun eng zarur uchta buyumni tanlashda qaysi kombinatsiya 120 000 so‘mdan oshmaydi?',
    options: [
      'Kitob + daftar + ruchka',
      'Kitob + sumka + ruchka',
      'Sumka + daftar + ruchka',
      'Kitob + daftar + sumka',
    ],
    correct: 0,
    explanation:
      '55 000 + 18 000 + 7 000 = 80 000 so‘m. Bu 120 000 so‘mdan oshmaydi.',
    xp: 40,
    estimatedTime: 90,
  },

  {
    id: 'pisa-problem-003',
    domain: 'problem-solving',
    difficulty: 7,
    category: 'Strategik qaror',
    context: 'Jamiyat',
    stimulus:
      'Maktab tadbirida 180 nafar mehmon uchun o‘rindiqlar joylashtiriladi. Har bir qatorda 12 ta o‘rindiq bo‘lishi kerak. Biroq xavfsizlik talabiga ko‘ra 3 ta qatordan keyin kamida 1 metr bo‘sh joy qoldiriladi.',
    question:
      'Bunday vaziyatda eng avvalo qaysi ma’lumotni aniqlash strategik jihatdan muhim?',
    options: [
      'Mehmonlarning sevimli rangini',
      'Xonaning umumiy uzunligi va kengligini',
      'Tadbir boshlovchisining yoshini',
      'O‘rindiqlarning rangini',
    ],
    correct: 1,
    explanation:
      'O‘rindiqlarni xavfsizlik talablariga mos joylashtirish uchun xona o‘lchamlari va mavjud bo‘sh joyni bilish zarur.',
    xp: 55,
    estimatedTime: 120,
  },
]

/* =========================================================
   DOMAIN META
========================================================= */

const DOMAIN_META: Record<
  Domain,
  {
    icon: string
    title: string
    short: string
    description: string
    gradient: string
  }
> = {
  mathematics: {
    icon: '📐',
    title: 'Matematik savodxonlik',
    short: 'Matematika',
    description:
      'Real hayotdagi miqdor, nisbat, ma’lumot va o‘zgarishlarni tahlil qiling.',
    gradient: 'from-blue-600 to-cyan-500',
  },

  reading: {
    icon: '📖',
    title: 'O‘qish savodxonligi',
    short: 'O‘qish',
    description:
      'Matnni tushuning, dalillarni bog‘lang, xulosa chiqaring va baholang.',
    gradient: 'from-violet-600 to-fuchsia-500',
  },

  science: {
    icon: '🔬',
    title: 'Tabiiy-ilmiy savodxonlik',
    short: 'Fan',
    description:
      'Ilmiy hodisalar, tajribalar, dalillar va ma’lumotlarni tahlil qiling.',
    gradient: 'from-emerald-600 to-teal-500',
  },

  'problem-solving': {
    icon: '🧠',
    title: 'Muammo yechish',
    short: 'Muammo',
    description:
      'Murakkab vaziyatlarda strategiya tanlang va asoslangan qaror qabul qiling.',
    gradient: 'from-orange-600 to-amber-500',
  },
}

/* =========================================================
   DIFFICULTY META
========================================================= */

const DIFFICULTY_META: Record<
  Difficulty,
  {
    label: string
    color: string
  }
> = {
  1: {
    label: 'Boshlang‘ich',
    color: 'text-emerald-600',
  },
  2: {
    label: 'Oson',
    color: 'text-emerald-600',
  },
  3: {
    label: 'Rivojlanish',
    color: 'text-cyan-600',
  },
  4: {
    label: 'O‘rta',
    color: 'text-blue-600',
  },
  5: {
    label: 'Yuqori o‘rta',
    color: 'text-indigo-600',
  },
  6: {
    label: 'Qiyin',
    color: 'text-violet-600',
  },
  7: {
    label: 'Ilg‘or',
    color: 'text-orange-600',
  },
  8: {
    label: 'Master',
    color: 'text-red-600',
  },
}

/* =========================================================
   CONSTANTS
========================================================= */

const TEST_LENGTH = 8
const INITIAL_DIFFICULTY: Difficulty = 4
const MAX_DIFFICULTY: Difficulty = 8
const MIN_DIFFICULTY: Difficulty = 1
const CORRECT_STREAK_TO_RISE = 2

/* =========================================================
   HELPERS
========================================================= */

function clampDifficulty(
  value: number,
): Difficulty {
  return Math.max(
    MIN_DIFFICULTY,
    Math.min(
      MAX_DIFFICULTY,
      value,
    ),
  ) as Difficulty
}

function getClosestQuestion(
  pool: Question[],
  difficulty: Difficulty,
  usedIds: string[],
) {
  const available = pool.filter(
    (question) =>
      !usedIds.includes(
        question.id,
      ),
  )

  if (!available.length) {
    return null
  }

  const sorted = [
    ...available,
  ].sort(
    (a, b) =>
      Math.abs(
        a.difficulty -
          difficulty,
      ) -
      Math.abs(
        b.difficulty -
          difficulty,
      ),
  )

  const topDistance =
    Math.abs(
      sorted[0].difficulty -
        difficulty,
    )

  const candidates =
    sorted.filter(
      (question) =>
        Math.abs(
          question.difficulty -
            difficulty,
        ) ===
        topDistance,
    )

  return candidates[
    Math.floor(
      Math.random() *
        candidates.length,
    )
  ]
}

function getDomainAccuracy(
  answers: AnswerRecord[],
  domain: Domain,
) {
  const records =
    answers.filter(
      (item) =>
        item.domain ===
        domain,
    )

  if (!records.length) {
    return 0
  }

  const correct =
    records.filter(
      (item) =>
        item.correct,
    ).length

  return Math.round(
    (correct /
      records.length) *
      100,
  )
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PISAAcademy({
  onBack,
}: {
  onBack: () => void
}) {
  const [mode, setMode] =
    useState<
      'dashboard' |
      'test' |
      'result'
    >('dashboard')

  const [domain, setDomain] =
    useState<Domain | null>(
      null,
    )

  const [
    currentQuestion,
    setCurrentQuestion,
  ] =
    useState<Question | null>(
      null,
    )

  const [
    questionNumber,
    setQuestionNumber,
  ] = useState(0)

  const [
    selected,
    setSelected,
  ] =
    useState<number | null>(
      null,
    )

  const [
    answers,
    setAnswers,
  ] =
    useState<AnswerRecord[]>(
      [],
    )

  const [
    difficulty,
    setDifficulty,
  ] =
    useState<Difficulty>(
      INITIAL_DIFFICULTY,
    )

  const [
    streak,
    setStreak,
  ] = useState(0)

  const [
    totalXp,
    setTotalXp,
  ] = useState(240)

  const [
    sessionXp,
    setSessionXp,
  ] = useState(0)

  const [
    usedQuestionIds,
    setUsedQuestionIds,
  ] = useState<string[]>(
    [],
  )

  const [
    lastResult,
    setLastResult,
  ] = useState<
    boolean | null
  >(null)

  const [
    showExplanation,
    setShowExplanation,
  ] = useState(false)

  const [
    timeLeft,
    setTimeLeft,
  ] = useState(15 * 60)

  const [
    startedAt,
    setStartedAt,
  ] = useState<number | null>(
    null,
  )

  const [
    bestLevel,
    setBestLevel,
  ] = useState<Difficulty>(
    4,
  )

  const [
    skills,
    setSkills,
  ] =
    useState<SkillState>({
      mathematics: 78,
      reading: 64,
      science: 57,
      'problem-solving': 71,
    })

  /* =======================================================
     LOCAL STORAGE
  ======================================================= */

  useEffect(() => {
    try {
      const saved =
        localStorage.getItem(
          'menejerlik-pisa-progress-v1',
        )

      if (!saved) return

      const data =
        JSON.parse(saved)

      if (
        typeof data.totalXp ===
        'number'
      ) {
        setTotalXp(
          data.totalXp,
        )
      }

      if (
        typeof data.bestLevel ===
        'number'
      ) {
        setBestLevel(
          clampDifficulty(
            data.bestLevel,
          ),
        )
      }

      if (data.skills) {
        setSkills(
          (value) => ({
            ...value,
            ...data.skills,
          }),
        )
      }
    } catch {
      // LocalStorage xatosi
      // ilovani to‘xtatmaydi.
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(
        'menejerlik-pisa-progress-v1',
        JSON.stringify({
          totalXp,
          bestLevel,
          skills,
        }),
      )
    } catch {
      // Ignore
    }
  }, [
    totalXp,
    bestLevel,
    skills,
  ])

  /* =======================================================
     TIMER
  ======================================================= */

  useEffect(() => {
    if (
      mode !== 'test' ||
      !startedAt
    ) {
      return
    }

    const timer =
      window.setInterval(() => {
        setTimeLeft(
          (value) => {
            if (value <= 1) {
              window.clearInterval(
                timer,
              )

              setMode(
                'result',
              )

              return 0
            }

            return value - 1
          },
        )
      }, 1000)

    return () =>
      window.clearInterval(
        timer,
      )
  }, [
    mode,
    startedAt,
  ])

  /* =======================================================
     CURRENT POOL
  ======================================================= */

  const questionPool =
    useMemo(() => {
      return domain
        ? QUESTIONS.filter(
            (question) =>
              question.domain ===
              domain,
          )
        : QUESTIONS
    }, [domain])

  /* =======================================================
     NEXT QUESTION
  ======================================================= */

  const prepareNextQuestion =
    useCallback(
      (
        nextDifficulty: Difficulty,
        usedIds: string[],
      ) => {
        const next =
          getClosestQuestion(
            questionPool,
            nextDifficulty,
            usedIds,
          )

        setCurrentQuestion(
          next,
        )

        if (next) {
          setUsedQuestionIds(
            (value) =>
              value.includes(
                next.id,
              )
                ? value
                : [
                    ...value,
                    next.id,
                  ],
          )
        }
      },
      [questionPool],
    )

  /* =======================================================
     START TEST
  ======================================================= */

  const startTest = (
    selectedDomain:
      | Domain
      | null = null,
  ) => {
    const selectedPool =
      selectedDomain
        ? QUESTIONS.filter(
            (question) =>
              question.domain ===
              selectedDomain,
          )
        : QUESTIONS

    const startDifficulty =
      INITIAL_DIFFICULTY

    const first =
      getClosestQuestion(
        selectedPool,
        startDifficulty,
        [],
      )

    setDomain(
      selectedDomain,
    )

    setMode('test')
    setQuestionNumber(1)
    setSelected(null)
    setAnswers([])
    setStreak(0)
    setDifficulty(
      startDifficulty,
    )
    setSessionXp(0)
    setUsedQuestionIds(
      first
        ? [first.id]
        : [],
    )
    setCurrentQuestion(
      first,
    )
    setLastResult(null)
    setShowExplanation(false)
    setTimeLeft(15 * 60)
    setStartedAt(
      Date.now(),
    )
  }

  /* =======================================================
     ANSWER
  ======================================================= */

  const answerQuestion = () => {
    if (
      selected === null ||
      !currentQuestion
    ) {
      return
    }

    const isCorrect =
      selected ===
      currentQuestion.correct

    const answerRecord: AnswerRecord =
      {
        questionId:
          currentQuestion.id,
        correct:
          isCorrect,
        difficulty,
        domain:
          currentQuestion.domain,
        selected,
        correctAnswer:
          currentQuestion.correct,
      }

    const nextAnswers = [
      ...answers,
      answerRecord,
    ]

    setAnswers(
      nextAnswers,
    )

    setLastResult(
      isCorrect,
    )

    setShowExplanation(
      true,
    )

    /* -----------------------------------------------------
       SKILL UPDATE
    ----------------------------------------------------- */

    setSkills(
      (value) => {
        const old =
          value[
            currentQuestion.domain
          ]

        const next =
          isCorrect
            ? Math.min(
                100,
                old + 2,
              )
            : Math.max(
                0,
                old - 1,
              )

        return {
          ...value,
          [currentQuestion.domain]:
            next,
        }
      },
    )

    /* -----------------------------------------------------
       ADAPTIVE ENGINE
    ----------------------------------------------------- */

    let nextDifficulty =
      difficulty

    let nextStreak =
      streak

    if (isCorrect) {
      nextStreak =
        streak + 1

      if (
        nextStreak >=
          CORRECT_STREAK_TO_RISE &&
        difficulty <
          MAX_DIFFICULTY
      ) {
        nextDifficulty =
          clampDifficulty(
            difficulty + 1,
          )

        nextStreak = 0
      }
    } else {
      nextStreak = 0

      nextDifficulty =
        clampDifficulty(
          difficulty - 1,
        )
    }

    setStreak(
      nextStreak,
    )

    setDifficulty(
      nextDifficulty,
    )

    if (
      nextDifficulty >
      bestLevel
    ) {
      setBestLevel(
        nextDifficulty,
      )
    }

    /* -----------------------------------------------------
       XP
    ----------------------------------------------------- */

    if (isCorrect) {
      const earned =
        currentQuestion.xp +
        nextDifficulty * 2

      setSessionXp(
        (value) =>
          value + earned,
      )

      setTotalXp(
        (value) =>
          value + earned,
      )
    }

    /* -----------------------------------------------------
       LAST QUESTION
    ----------------------------------------------------- */

    if (
      questionNumber >=
      TEST_LENGTH
    ) {
      window.setTimeout(() => {
        setMode(
          'result',
        )
        setShowExplanation(
          false,
        )
      }, 700)

      return
    }

    /* -----------------------------------------------------
       NEXT QUESTION
    ----------------------------------------------------- */

    window.setTimeout(() => {
      const used =
        nextAnswers.map(
          (item) =>
            item.questionId,
        )

      const next =
        getClosestQuestion(
          questionPool,
          nextDifficulty,
          used,
        )

      setCurrentQuestion(
        next,
      )

      if (next) {
        setUsedQuestionIds(
          used.concat(
            next.id,
          ),
        )
      }

      setQuestionNumber(
        (value) =>
          value + 1,
      )

      setSelected(null)
      setLastResult(null)
      setShowExplanation(
        false,
      )
    }, 850)
  }

  /* =======================================================
     FORMAT TIME
  ======================================================= */

  const formattedTime =
    `${String(
      Math.floor(
        timeLeft / 60,
      ),
    ).padStart(2, '0')}:${String(
      timeLeft % 60,
    ).padStart(2, '0')}`

  /* =======================================================
     RESULT DATA
  ======================================================= */

  const correctAnswers =
    answers.filter(
      (item) =>
        item.correct,
    ).length

  const totalAnswers =
    answers.length

  const percentage =
    totalAnswers > 0
      ? Math.round(
          (correctAnswers /
            totalAnswers) *
            100,
        )
      : 0

  const resultTitle =
    percentage >= 85
      ? 'Ajoyib natija!'
      : percentage >= 70
        ? 'Juda yaxshi!'
        : percentage >= 50
          ? 'Yaxshi boshlanish!'
          : 'Mashqni davom ettiring!'

  const resultIcon =
    percentage >= 85
      ? '🏆'
      : percentage >= 70
        ? '🌟'
        : percentage >= 50
          ? '🚀'
          : '💪'

  /* =======================================================
     DASHBOARD
  ======================================================= */

  if (
    mode ===
    'dashboard'
  ) {
    return (
      <section className="flex flex-col gap-6">

        <BackButton
          onClick={onBack}
          text="O‘quvchi Akademiyasi"
        />

        {/* =================================================
            HERO
        ================================================= */}

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#04142d] via-[#083b6b] to-[#087db5] p-6 text-white shadow-2xl shadow-blue-900/20">

          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-cyan-300/10 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 size-64 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative">

            <div className="flex items-center justify-between">

              <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-cyan-100">
                International Assessment
              </div>

              <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl">
                🌍
              </div>

            </div>

            <div className="mt-7">

              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">
                MENEJERLIK BY NURMUHAMMAD
              </p>

              <h1 className="mt-2 text-[31px] font-black tracking-tight">
                PISA Academy
              </h1>

              <p className="mt-3 max-w-xl text-[12px] leading-6 text-white/70">
                Bilimni yodlash emas —
                real hayotdagi vaziyatlarda
                undan foydalanishni o‘rganing.
                Tahlil qiling. Dalil toping.
                Qaror qabul qiling.
              </p>

            </div>

            {/* HERO STATS */}

            <div className="mt-6 grid grid-cols-3 gap-2">

              <HeroStat
                value={`${bestLevel}/8`}
                label="Eng yuqori daraja"
              />

              <HeroStat
                value={`${totalXp}`}
                label="Jami XP"
              />

              <HeroStat
                value={`${skills.mathematics}%`}
                label="Matematika"
              />

            </div>

          </div>
        </div>

        {/* =================================================
            ADAPTIVE ENGINE
        ================================================= */}

        <div className="rounded-[28px] border bg-card p-5 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-xl text-white shadow-lg shadow-blue-600/20">
              🧠
            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between gap-3">

                <h2 className="text-sm font-black">
                  Adaptive Learning Engine
                </h2>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-black text-emerald-600 dark:bg-emerald-950/20">
                  ACTIVE
                </span>

              </div>

              <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
                Platforma sizning javoblaringizni
                kuzatadi va keyingi savol
                murakkabligini avtomatik
                moslashtiradi.
              </p>

            </div>

          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">

            <EngineCard
              icon="✓"
              title="To‘g‘ri"
              text="Streak yig‘iladi"
            />

            <EngineCard
              icon="↑"
              title="2× ketma-ket"
              text="Daraja oshadi"
            />

            <EngineCard
              icon="↓"
              title="Xato"
              text="Daraja moslanadi"
            />

          </div>

        </div>

        {/* =================================================
            DOMAINS
        ================================================= */}

        <div>

          <div className="mb-4 flex items-end justify-between">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-700">
                PISA DOMAINS
              </p>

              <h2 className="mt-1 text-xl font-black">
                Savodxonlik yo‘nalishlari
              </h2>
            </div>

            <span className="rounded-full bg-muted px-2.5 py-1 text-[9px] font-bold text-muted-foreground">
              4 yo‘nalish
            </span>

          </div>

          <div className="grid gap-3">

            {(
              Object.entries(
                DOMAIN_META,
              ) as [
                Domain,
                (typeof DOMAIN_META)[Domain],
              ][]
            ).map(
              ([
                id,
                item,
              ]) => {

                const accuracy =
                  skills[id]

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() =>
                      startTest(
                        id,
                      )
                    }
                    className="group relative overflow-hidden rounded-[25px] border bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]"
                  >

                    <div
                      className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.gradient}`}
                    />

                    <div className="flex items-center gap-4">

                      <div
                        className={`flex size-14 shrink-0 items-center justify-center rounded-[19px] bg-gradient-to-br ${item.gradient} text-2xl text-white shadow-lg`}
                      >
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center justify-between gap-2">

                          <h3 className="text-sm font-black">
                            {item.title}
                          </h3>

                          <span className="text-[10px] font-black text-muted-foreground">
                            {accuracy}%
                          </span>

                        </div>

                        <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                          {item.description}
                        </p>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">

                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-700`}
                            style={{
                              width: `${accuracy}%`,
                            }}
                          />

                        </div>

                      </div>

                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all group-hover:translate-x-1 group-hover:bg-blue-50 group-hover:text-blue-700">
                        →
                      </div>

                    </div>

                  </button>
                )
              },
            )}

          </div>
        </div>

        {/* =================================================
            FULL CHALLENGE
        ================================================= */}

        <button
          type="button"
          onClick={() =>
            startTest(null)
          }
          className="group relative overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-700 via-blue-700 to-cyan-600 p-5 text-left text-white shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1"
        >

          <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-white/10" />

          <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-white/5" />

          <div className="relative flex items-center gap-4">

            <div className="flex size-14 shrink-0 items-center justify-center rounded-[19px] border border-white/10 bg-white/10 text-2xl">
              🏆
            </div>

            <div className="flex-1">

              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-100">
                ULTIMATE CHALLENGE
              </p>

              <h2 className="mt-1 text-lg font-black">
                PISA Full Challenge
              </h2>

              <p className="mt-1 text-[10px] leading-5 text-white/70">
                4 yo‘nalish. Adaptive engine.
                8 daraja. Bitta katta sinov.
              </p>

            </div>

            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>

          </div>

        </button>

        {/* =================================================
            SKILL MAP
        ================================================= */}

        <div className="rounded-[28px] border bg-card p-5 shadow-sm">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
                SKILL MAP
              </p>

              <h2 className="mt-1 text-lg font-black">
                Rivojlanish xaritasi
              </h2>
            </div>

            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-lg dark:bg-blue-950/20">
              📊
            </div>

          </div>

          <div className="mt-6 flex flex-col gap-5">

            {(
              Object.entries(
                DOMAIN_META,
              ) as [
                Domain,
                (typeof DOMAIN_META)[Domain],
              ][]
            ).map(
              ([
                id,
                item,
              ]) => (
                <SkillBar
                  key={id}
                  icon={item.icon}
                  title={
                    item.short
                  }
                  value={
                    skills[id]
                  }
                  gradient={
                    item.gradient
                  }
                />
              ),
            )}

          </div>

        </div>

        {/* =================================================
            ROADMAP
        ================================================= */}

        <div className="rounded-[28px] border bg-card p-5 shadow-sm">

          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
            ADAPTIVE ROADMAP
          </p>

          <h2 className="mt-1 text-lg font-black">
            8 bosqichli rivojlanish
          </h2>

          <div className="mt-5 grid grid-cols-4 gap-2">

            {(
              Array.from(
                {
                  length: 8,
                },
                (_, index) =>
                  index + 1,
              ) as Difficulty[]
            ).map(
              (level) => {

                const active =
                  level <=
                  bestLevel

                return (
                  <div
                    key={level}
                    className={`rounded-2xl border p-3 text-center transition-all ${
                      active
                        ? 'border-blue-200 bg-blue-50 dark:border-blue-900/30 dark:bg-blue-950/20'
                        : 'bg-muted/30'
                    }`}
                  >

                    <div
                      className={`text-sm font-black ${
                        active
                          ? 'text-blue-700'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {level}
                    </div>

                    <div className="mt-1 text-[7px] font-bold uppercase text-muted-foreground">
                      {
                        DIFFICULTY_META[
                          level
                        ].label
                      }
                    </div>

                  </div>
                )
              },
            )}

          </div>

        </div>

        {/* =================================================
            DISCLAIMER
        ================================================= */}

        <div className="rounded-[25px] border border-amber-100 bg-amber-50/70 p-5 dark:border-amber-900/20 dark:bg-amber-950/10">

          <div className="flex gap-3">

            <div className="text-xl">
              💡
            </div>

            <div>

              <p className="text-sm font-black">
                PISA Academy haqida
              </p>

              <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                Ushbu tizim xalqaro baholash
                yondashuvlari va PISA
                frameworklaridan ilhomlangan
                original mashqlar asosida
                yaratilmoqda. Bu OECDning
                rasmiy PISA testi emas.
              </p>

            </div>

          </div>

        </div>

      </section>
    )
  }

  /* =========================================================
     TEST SCREEN
  ========================================================= */

  if (
    mode === 'test' &&
    currentQuestion
  ) {
    const progress =
      Math.round(
        (questionNumber /
          TEST_LENGTH) *
          100,
      )

    const meta =
      DOMAIN_META[
        currentQuestion.domain
      ]

    return (
      <section className="flex flex-col gap-5">

        {/* HEADER */}

        <div className="flex items-center justify-between">

          <button
            type="button"
            onClick={() =>
              setMode(
                'dashboard',
              )
            }
            className="group flex items-center gap-2 text-[11px] font-bold text-muted-foreground transition hover:text-blue-700"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>

            Chiqish
          </button>

          <div className="flex items-center gap-2">

            <div className="rounded-xl border bg-card px-3 py-2">

              <span className="text-[9px] font-black text-muted-foreground">
                SAVOL
              </span>

              <span className="ml-1 text-[11px] font-black">
                {questionNumber}/
                {TEST_LENGTH}
              </span>

            </div>

            <div
              className={`rounded-xl px-3 py-2 ${
                timeLeft <= 60
                  ? 'bg-red-50 text-red-600 dark:bg-red-950/20'
                  : 'bg-blue-50 text-blue-700 dark:bg-blue-950/20'
              }`}
            >
              ⏱ {formattedTime}
            </div>

          </div>

        </div>

        {/* PROGRESS */}

        <div className="rounded-[23px] border bg-card p-4 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[8px] font-black uppercase tracking-[0.18em] text-blue-700">
                PISA ADAPTIVE ENGINE
              </p>

              <p className="mt-1 text-xs font-black">
                Savol murakkabligi:
                {' '}
                <span
                  className={
                    DIFFICULTY_META[
                      difficulty
                    ].color
                  }
                >
                  {difficulty}/8
                </span>
              </p>

            </div>

            <div className="text-right">

              <p className="text-[8px] font-bold uppercase text-muted-foreground">
                STREAK
              </p>

              <p className="text-lg font-black">
                🔥 {streak}
              </p>

            </div>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-400 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* QUESTION CARD */}

        <div className="rounded-[30px] border bg-card p-5 shadow-sm">

          {/* DOMAIN */}

          <div className="flex flex-wrap gap-2">

            <Badge>
              {meta.icon}
              {' '}
              {meta.short}
            </Badge>

            <Badge>
              {currentQuestion.category}
            </Badge>

            <Badge>
              🌍
              {' '}
              {currentQuestion.context}
            </Badge>

            <Badge>
              L{difficulty}
            </Badge>

          </div>

          {/* STIMULUS */}

          {currentQuestion.stimulus && (
            <div className="mt-5 rounded-[23px] border bg-slate-50 p-5 dark:bg-white/5">

              <div className="mb-3 flex items-center gap-2">

                <span className="flex size-7 items-center justify-center rounded-lg bg-white text-sm shadow-sm dark:bg-white/10">
                  📄
                </span>

                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground">
                  Vaziyat / dalil
                </span>

              </div>

              <p className="text-[12px] leading-6 text-slate-700 dark:text-slate-300">
                {
                  currentQuestion.stimulus
                }
              </p>

            </div>
          )}

          {/* QUESTION */}

          <h1 className="mt-6 text-[19px] font-black leading-7 tracking-tight">
            {
              currentQuestion.question
            }
          </h1>

          {/* OPTIONS */}

          <div className="mt-6 flex flex-col gap-2.5">

            {currentQuestion.options.map(
              (
                option,
                index,
              ) => {

                const active =
                  selected ===
                  index

                const isCorrect =
                  showExplanation &&
                  index ===
                    currentQuestion.correct

                const isWrong =
                  showExplanation &&
                  active &&
                  !isCorrect

                return (
                  <button
                    key={`${currentQuestion.id}-${index}`}
                    type="button"
                    disabled={
                      showExplanation
                    }
                    onClick={() =>
                      setSelected(
                        index,
                      )
                    }
                    className={`group flex items-center gap-3 rounded-[20px] border p-4 text-left transition-all ${
                      isCorrect
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
                        : isWrong
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                          : active
                            ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/10 dark:bg-blue-950/20'
                            : 'bg-card hover:-translate-y-0.5 hover:bg-muted/40 hover:shadow-md'
                    }`}
                  >

                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-all ${
                        isCorrect
                          ? 'bg-emerald-600 text-white'
                          : isWrong
                            ? 'bg-red-600 text-white'
                            : active
                              ? 'bg-blue-600 text-white'
                              : 'bg-muted text-muted-foreground group-hover:bg-blue-100 group-hover:text-blue-700'
                      }`}
                    >
                      {isCorrect
                        ? '✓'
                        : isWrong
                          ? '×'
                          : String.fromCharCode(
                              65 +
                                index,
                            )}
                    </span>

                    <span className="flex-1 text-[12px] font-semibold leading-5">
                      {option}
                    </span>

                    {!showExplanation &&
                      active && (
                        <span className="text-blue-600">
                          ●
                        </span>
                      )}

                  </button>
                )
              },
            )}

          </div>

          {/* EXPLANATION */}

          {showExplanation &&
            lastResult !==
              null && (
              <div
                className={`mt-5 rounded-[22px] border p-4 ${
                  lastResult
                    ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900/30 dark:bg-emerald-950/20'
                    : 'border-red-200 bg-red-50 dark:border-red-900/30 dark:bg-red-950/20'
                }`}
              >

                <div className="flex gap-3">

                  <span className="text-xl">
                    {lastResult
                      ? '🎉'
                      : '💡'}
                  </span>

                  <div>

                    <p className="text-sm font-black">
                      {lastResult
                        ? 'To‘g‘ri javob!'
                        : 'Bu safar xato.'}
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                      {
                        currentQuestion.explanation
                      }
                    </p>

                  </div>

                </div>

              </div>
            )}

          {/* ACTION */}

          <button
            type="button"
            disabled={
              selected ===
                null ||
              showExplanation
            }
            onClick={
              answerQuestion
            }
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Javobni tekshirish →
          </button>

        </div>

        {/* LIVE STATS */}

        <div className="grid grid-cols-3 gap-2">

          <LiveStat
            icon="🔥"
            value={`${streak}`}
            label="Streak"
          />

          <LiveStat
            icon="⭐"
            value={`+${sessionXp}`}
            label="Session XP"
          />

          <LiveStat
            icon="🎯"
            value={`${difficulty}/8`}
            label="Daraja"
          />

        </div>

      </section>
    )
  }

  /* =========================================================
     RESULT SCREEN
  ========================================================= */

  return (
    <section className="flex flex-col gap-5">

      <BackButton
        onClick={() =>
          setMode(
            'dashboard',
          )
        }
        text="PISA Academy"
      />

      {/* RESULT HERO */}

      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#061733] via-[#0a4775] to-[#087fb4] p-7 text-center text-white shadow-2xl">

        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-cyan-300/10 blur-2xl" />

        <div className="relative">

          <div className="text-5xl">
            {resultIcon}
          </div>

          <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200">
            ADAPTIVE TEST YAKUNI
          </p>

          <h1 className="mt-2 text-5xl font-black tracking-tight">
            {percentage}%
          </h1>

          <h2 className="mt-2 text-lg font-black">
            {resultTitle}
          </h2>

          <p className="mt-2 text-[11px] text-white/60">
            {correctAnswers}
            {' / '}
            {totalAnswers}
            {' '}
            ta to‘g‘ri javob
          </p>

        </div>

      </div>

      {/* RESULT STATS */}

      <div className="grid grid-cols-3 gap-2">

        <ResultCard
          icon="✓"
          value={`${correctAnswers}`}
          label="To‘g‘ri"
        />

        <ResultCard
          icon="⭐"
          value={`+${sessionXp}`}
          label="XP"
        />

        <ResultCard
          icon="🎯"
          value={`${bestLevel}/8`}
          label="Max level"
        />

      </div>

      {/* ADAPTIVE ANALYSIS */}

      <div className="rounded-[28px] border bg-card p-5 shadow-sm">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
              PERFORMANCE
            </p>

            <h2 className="mt-1 text-lg font-black">
              Adaptive tahlil
            </h2>

          </div>

          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-lg dark:bg-blue-950/20">
            🧠
          </div>

        </div>

        <p className="mt-3 text-[10px] leading-5 text-muted-foreground">
          Sizning javoblaringiz asosida
          keyingi mashg‘ulotlarda
          savollar murakkabligi
          avtomatik moslashtiriladi.
        </p>

        <div className="mt-5">

          <div className="flex items-center justify-between text-[10px] font-black">

            <span>
              Umumiy natija
            </span>

            <span>
              {percentage}%
            </span>

          </div>

          <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-400 transition-all duration-1000"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">

          <AnalysisItem
            icon="🔥"
            title="Eng yaxshi streak"
            value={`${Math.max(
              1,
              Math.min(
                3,
                correctAnswers,
              ),
            )}`}
          />

          <AnalysisItem
            icon="📈"
            title="Adaptive level"
            value={`${bestLevel}/8`}
          />

        </div>

      </div>

      {/* DOMAIN PERFORMANCE */}

      <div className="rounded-[28px] border bg-card p-5 shadow-sm">

        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
          DOMAIN PERFORMANCE
        </p>

        <h2 className="mt-1 text-lg font-black">
          Savodxonlik profili
        </h2>

        <div className="mt-5 flex flex-col gap-5">

          {(
            Object.entries(
              DOMAIN_META,
            ) as [
              Domain,
              (typeof DOMAIN_META)[Domain],
            ][]
          ).map(
            ([
              id,
              item,
            ]) => {

              const sessionAccuracy =
                getDomainAccuracy(
                  answers,
                  id,
                )

              const value =
                sessionAccuracy >
                0
                  ? sessionAccuracy
                  : skills[id]

              return (
                <SkillBar
                  key={id}
                  icon={item.icon}
                  title={
                    item.short
                  }
                  value={value}
                  gradient={
                    item.gradient
                  }
                />
              )
            },
          )}

        </div>

      </div>

      {/* RECOMMENDATION */}

      <div className="rounded-[26px] border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900/20 dark:bg-blue-950/10">

        <div className="flex gap-3">

          <div className="text-xl">
            🎯
          </div>

          <div>

            <p className="text-sm font-black">
              Keyingi qadam
            </p>

            <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
              {percentage >= 80
                ? 'Siz murakkabroq savollarga tayyorsiz. Keyingi mashg‘ulotda yuqoriroq daraja ochiladi.'
                : percentage >=
                    60
                  ? 'Asosiy ko‘nikmalar yaxshi shakllanmoqda. Keyingi mashg‘ulotda xatolar ustida ishlaymiz.'
                  : 'Avval asosiy ko‘nikmalarni mustahkamlaymiz, so‘ng murakkablikni yana oshiramiz.'}
            </p>

          </div>

        </div>

      </div>

      {/* ACTIONS */}

      <button
        type="button"
        onClick={() =>
          startTest(domain)
        }
        className="rounded-[21px] bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5"
      >
        🔄 Yana adaptive test
      </button>

      <button
        type="button"
        onClick={() =>
          setMode(
            'dashboard',
          )
        }
        className="rounded-[21px] border bg-card px-5 py-4 text-sm font-black transition hover:bg-muted"
      >
        🌍 PISA Academy’ga qaytish
      </button>

    </section>
  )
}

/* =========================================================
   UI COMPONENTS
========================================================= */

function BackButton({
  onClick,
  text,
}: {
  onClick: () => void
  text: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
    >
      <span className="transition-transform group-hover:-translate-x-1">
        ←
      </span>

      {text}
    </button>
  )
}

function HeroStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">

      <p className="text-base font-black">
        {value}
      </p>

      <p className="mt-0.5 text-[7px] font-bold uppercase tracking-wider text-white/50">
        {label}
      </p>

    </div>
  )
}

function EngineCard({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl bg-muted/50 p-3">

      <div className="flex items-center gap-2">

        <span className="flex size-7 items-center justify-center rounded-lg bg-card text-xs font-black shadow-sm">
          {icon}
        </span>

        <span className="text-[9px] font-black">
          {title}
        </span>

      </div>

      <p className="mt-2 text-[8px] leading-4 text-muted-foreground">
        {text}
      </p>

    </div>
  )
}

function Badge({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center rounded-full border bg-muted/60 px-2.5 py-1.5 text-[8px] font-bold text-muted-foreground">
      {children}
    </span>
  )
}

function SkillBar({
  icon,
  title,
  value,
  gradient,
}: {
  icon: string
  title: string
  value: number
  gradient: string
}) {
  return (
    <div>

      <div className="flex items-center gap-2">

        <span className="text-base">
          {icon}
        </span>

        <span className="flex-1 text-[11px] font-bold">
          {title}
        </span>

        <span className="text-[10px] font-black">
          {value}%
        </span>

      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">

        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-700`}
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  )
}

function LiveStat({
  icon,
  value,
  label,
}: {
  icon: string
  value: string
  label: string
}) {
  return (
    <div className="rounded-[19px] border bg-card p-3 text-center shadow-sm">

      <div className="text-sm">
        {icon}
      </div>

      <div className="mt-1 text-sm font-black">
        {value}
      </div>

      <div className="text-[7px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>

    </div>
  )
}

function ResultCard({
  icon,
  value,
  label,
}: {
  icon: string
  value: string
  label: string
}) {
  return (
    <div className="rounded-[22px] border bg-card p-4 text-center shadow-sm">

      <div className="flex justify-center text-lg">
        {icon}
      </div>

      <div className="mt-2 text-lg font-black">
        {value}
      </div>

      <div className="mt-1 text-[7px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>

    </div>
  )
}

function AnalysisItem({
  icon,
  title,
  value,
}: {
  icon: string
  title: string
  value: string
}) {
  return (
    <div className="rounded-2xl bg-muted/50 p-3">

      <div className="flex items-center gap-2">

        <span className="text-sm">
          {icon}
        </span>

        <span className="text-[9px] font-bold text-muted-foreground">
          {title}
        </span>

      </div>

      <p className="mt-2 text-base font-black">
        {value}
      </p>

    </div>
  )
}
