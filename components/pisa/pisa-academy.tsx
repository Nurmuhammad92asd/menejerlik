'use client'

import {
  useMemo,
  useState,
} from 'react'

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
}

/* =========================================================
   DEMO PISA BANK
   Keyin mavjud lib/pisa bazasi bilan almashtiriladi.
========================================================= */

const QUESTIONS: Question[] = [
  {
    id: 'pisa-math-001',
    domain: 'mathematics',
    difficulty: 3,
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
      '12 000 × 5 = 60 000 so‘m.',
    xp: 20,
  },

  {
    id: 'pisa-math-002',
    domain: 'mathematics',
    difficulty: 4,
    category: 'O‘zgarish va bog‘lanishlar',
    context: 'Maktab',
    stimulus:
      'Maktabdagi 4 ta sinfda mos ravishda 24, 28, 26 va 22 nafar o‘quvchi bor.',
    question:
      'Ushbu sinflardagi o‘quvchilar sonining o‘rtacha qiymati nechaga teng?',
    options: [
      '24',
      '25',
      '26',
      '27',
    ],
    correct: 1,
    explanation:
      '(24 + 28 + 26 + 22) ÷ 4 = 100 ÷ 4 = 25.',
    xp: 25,
  },

  {
    id: 'pisa-math-003',
    domain: 'mathematics',
    difficulty: 5,
    category: 'Ma’lumotlar',
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
      '51 eng katta qiymat bo‘lgani uchun javob chorshanba.',
    xp: 30,
  },

  {
    id: 'pisa-math-004',
    domain: 'mathematics',
    difficulty: 6,
    category: 'Noaniqlik va ma’lumotlar',
    context: 'Ilmiy',
    stimulus:
      'Bir tadqiqotda 200 nafar o‘quvchining 70 foizi maktab kutubxonasidan oyiga kamida bir marta foydalanishi aniqlandi.',
    question:
      'Tadqiqotdagi nechta o‘quvchi kutubxonadan kamida bir marta foydalanadi?',
    options: [
      '120',
      '130',
      '140',
      '150',
    ],
    correct: 2,
    explanation:
      '200 × 0,70 = 140 nafar o‘quvchi.',
    xp: 35,
  },

  {
    id: 'pisa-reading-001',
    domain: 'reading',
    difficulty: 3,
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
      'Matnda shanba kuni kutubxona 09:00 dan 13:00 gacha ishlashi aytilgan.',
    xp: 20,
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
      'Matnda qayta foydalaniladigan idishlar tavsiya qilingach plastik butilkalar kamaygani ko‘rsatilgan.',
    xp: 25,
  },

  {
    id: 'pisa-science-001',
    domain: 'science',
    difficulty: 4,
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
      'Yorug‘lik fotosintez uchun zarur energiya manbalaridan biridir.',
    xp: 25,
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
      'Kuzatilgan tajribada harorat oshishi bilan erish tezligi oshgan.',
    xp: 30,
  },

  {
    id: 'pisa-problem-001',
    domain: 'problem-solving',
    difficulty: 4,
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
      '30 ÷ 3 = 10. Har bir guruhda 10 nafardan o‘quvchi bo‘ladi.',
    xp: 25,
  },

  {
    id: 'pisa-problem-002',
    domain: 'problem-solving',
    difficulty: 6,
    category: 'Strategik fikrlash',
    context: 'Shaxsiy hayot',
    stimulus:
      'Sizda 120 000 so‘m bor. Kitob 55 000 so‘m, daftar 18 000 so‘m, ruchka 7 000 so‘m va sumka 65 000 so‘m turadi.',
    question:
      'Agar barcha narsani sotib olishning imkoni bo‘lmasa, o‘qish uchun eng zarur uchta buyumni tanlashda qaysi kombinatsiya 120 000 so‘mdan oshmaydi?',
    options: [
      'Kitob + daftar + ruchka',
      'Kitob + sumka + ruchka',
      'Sumka + daftar + ruchka',
      'Kitob + daftar + sumka',
    ],
    correct: 0,
    explanation:
      '55 000 + 18 000 + 7 000 = 80 000 so‘m. Bu 120 000 so‘mdan oshmaydi.',
    xp: 35,
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
    description: string
  }
> = {
  mathematics: {
    icon: '📐',
    title: 'Matematik savodxonlik',
    description:
      'Real hayotdagi matematik vaziyatlarni tahlil qilish.',
  },
  reading: {
    icon: '📖',
    title: 'O‘qish savodxonligi',
    description:
      'Matnni tushunish, bog‘lash, xulosa qilish va baholash.',
  },
  science: {
    icon: '🔬',
    title: 'Tabiiy-ilmiy savodxonlik',
    description:
      'Ilmiy hodisa, dalil va ma’lumotlarni tushuntirish.',
  },
  'problem-solving': {
    icon: '🧠',
    title: 'Muammo yechish',
    description:
      'Murakkab vaziyatlarda strategik qaror qabul qilish.',
  },
}

/* =========================================================
   COMPONENT
========================================================= */

export default function PISAAcademy({
  onBack,
}: {
  onBack: () => void
}) {
  const [mode, setMode] =
    useState<
      'dashboard' | 'test' | 'result'
    >('dashboard')

  const [domain, setDomain] =
    useState<Domain | null>(null)

  const [current, setCurrent] =
    useState(0)

  const [selected, setSelected] =
    useState<number | null>(null)

  const [answers, setAnswers] =
    useState<
      Array<{
        questionId: string
        correct: boolean
      }>
    >([])

  const [difficulty, setDifficulty] =
    useState<Difficulty>(4)

  const [streak, setStreak] =
    useState(0)

  const [xp, setXp] =
    useState(240)

  /* =======================================================
     ADAPTIVE QUESTION SELECTION
  ======================================================= */

  const testQuestions = useMemo(() => {
    const pool =
      domain
        ? QUESTIONS.filter(
            (question) =>
              question.domain ===
              domain,
          )
        : QUESTIONS

    const sorted = [...pool].sort(
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

    return sorted.slice(0, 5)
  }, [
    domain,
    difficulty,
  ])

  const question =
    testQuestions[current]

  /* =======================================================
     START
  ======================================================= */

  const startTest = (
    selectedDomain: Domain | null =
      null,
  ) => {
    setDomain(
      selectedDomain,
    )
    setCurrent(0)
    setSelected(null)
    setAnswers([])
    setStreak(0)
    setDifficulty(4)
    setMode('test')
  }

  /* =======================================================
     ANSWER
  ======================================================= */

  const answerQuestion = () => {
    if (
      selected === null ||
      !question
    ) {
      return
    }

    const isCorrect =
      selected ===
      question.correct

    const nextAnswers = [
      ...answers,
      {
        questionId:
          question.id,
        correct:
          isCorrect,
      },
    ]

    setAnswers(nextAnswers)

    if (isCorrect) {
      const nextStreak =
        streak + 1

      setStreak(
        nextStreak,
      )

      setXp(
        (value) =>
          value +
          question.xp,
      )

      /*
       * ADAPTIVE:
       * 2 ta ketma-ket to‘g‘ri
       * → 1 daraja yuqoriga
       */
      if (
        nextStreak >= 2 &&
        difficulty < 8
      ) {
        setDifficulty(
          (value) =>
            Math.min(
              8,
              value + 1,
            ) as Difficulty,
        )

        setStreak(0)
      }
    } else {
      setStreak(0)

      /*
       * Xato:
       * 1 daraja pastga
       */
      setDifficulty(
        (value) =>
          Math.max(
            1,
            value - 1,
          ) as Difficulty,
      )
    }

    if (
      current + 1 >=
      testQuestions.length
    ) {
      setMode('result')
      return
    }

    setTimeout(() => {
      setCurrent(
        (value) =>
          value + 1,
      )
      setSelected(null)
    }, 350)
  }

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

        {/* HERO */}

        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#071a38] via-[#0d3d70] to-[#1478b8] p-6 text-white shadow-xl shadow-blue-900/20">

          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-cyan-300/10" />

          <div className="pointer-events-none absolute -bottom-20 -left-10 size-44 rounded-full bg-blue-400/10" />

          <div className="relative">

            <div className="flex items-center justify-between">

              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-cyan-100">
                International Assessment
              </span>

              <span className="text-3xl">
                🌍
              </span>

            </div>

            <h1 className="mt-5 text-[29px] font-black tracking-tight">
              PISA Academy
            </h1>

            <p className="mt-2 max-w-lg text-[12px] leading-6 text-white/70">
              Real hayotdagi vaziyatlarni
              tahlil qiling, dalillar bilan
              fikrlang va murakkab
              muammolarni yeching.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">

              <Stat
                value="4/8"
                label="Daraja"
              />

              <Stat
                value={`${xp}`}
                label="XP"
              />

              <Stat
                value="78%"
                label="Aniqlik"
              />

            </div>

          </div>
        </div>

        {/* ADAPTIVE INFO */}

        <div className="rounded-[25px] border bg-card p-5 shadow-sm">

          <div className="flex items-start gap-3">

            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl dark:bg-blue-950/20">
              🧠
            </div>

            <div>

              <h2 className="text-sm font-black">
                Adaptive Learning
              </h2>

              <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                Savol qiyinligi sizning
                javoblaringizga moslashadi.
                Ketma-ket to‘g‘ri javoblar
                yuqoriroq darajaga olib chiqadi.
              </p>

            </div>

          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">

            <AdaptiveCard
              icon="↑"
              title="To‘g‘ri"
              text="Daraja oshadi"
            />

            <AdaptiveCard
              icon="↓"
              title="Xato"
              text="Daraja qayta moslanadi"
            />

          </div>

        </div>

        {/* DOMAINS */}

        <div>

          <div className="mb-3 flex items-end justify-between">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-blue-700">
                PISA DOMAINS
              </p>

              <h2 className="mt-1 text-xl font-black">
                Yo‘nalishni tanlang
              </h2>
            </div>

            <span className="text-[10px] font-bold text-muted-foreground">
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
              ]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() =>
                    startTest(
                      id,
                    )
                  }
                  className="group flex items-center gap-4 rounded-[24px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
                >

                  <div className="flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-blue-50 to-indigo-100 text-2xl dark:from-blue-950/30 dark:to-indigo-950/20">
                    {
                      item.icon
                    }
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-sm font-black">
                      {
                        item.title
                      }
                    </h3>

                    <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                      {
                        item.description
                      }
                    </p>

                    <div className="mt-2 flex gap-1.5">

                      <MiniTag>
                        Adaptive
                      </MiniTag>

                      <MiniTag>
                        PISA-style
                      </MiniTag>

                    </div>

                  </div>

                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all group-hover:translate-x-1 group-hover:bg-blue-50 group-hover:text-blue-700">
                    →
                  </span>

                </button>
              ),
            )}

          </div>
        </div>

        {/* FULL TEST */}

        <button
          type="button"
          onClick={() =>
            startTest(null)
          }
          className="group relative overflow-hidden rounded-[26px] bg-gradient-to-r from-violet-600 to-blue-700 p-5 text-left text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5"
        >

          <div className="absolute -right-8 -top-8 size-28 rounded-full bg-white/10" />

          <div className="relative flex items-center gap-4">

            <div className="flex size-14 items-center justify-center rounded-[18px] bg-white/10 text-2xl">
              🏆
            </div>

            <div className="flex-1">

              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/60">
                CHALLENGE
              </p>

              <h2 className="mt-1 text-lg font-black">
                PISA Full Challenge
              </h2>

              <p className="mt-1 text-[11px] leading-5 text-white/70">
                Turli domenlardan
                moslashuvchan savollar.
              </p>

            </div>

            <span className="text-xl transition-transform group-hover:translate-x-1">
              →
            </span>

          </div>

        </button>

        {/* SKILLS */}

        <div className="rounded-[25px] border bg-card p-5 shadow-sm">

          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-blue-700">
            SKILL MAP
          </p>

          <h2 className="mt-1 text-lg font-black">
            Sizning rivojlanish xaritangiz
          </h2>

          <div className="mt-5 flex flex-col gap-4">

            <Skill
              icon="📐"
              title="Matematik savodxonlik"
              value={80}
            />

            <Skill
              icon="📖"
              title="O‘qish savodxonligi"
              value={60}
            />

            <Skill
              icon="🔬"
              title="Ilmiy savodxonlik"
              value={50}
            />

            <Skill
              icon="🧠"
              title="Muammo yechish"
              value={70}
            />

          </div>

        </div>

        {/* NOTE */}

        <div className="rounded-[23px] border border-amber-100 bg-amber-50/70 p-5 dark:border-amber-900/20 dark:bg-amber-950/10">

          <div className="flex gap-3">

            <span className="text-xl">
              💡
            </span>

            <div>

              <p className="text-sm font-black">
                Muhim
              </p>

              <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                Ushbu bo‘lim OECD PISA
                frameworklariga ilhomlangan
                original mashqlar asosida
                tuziladi. Bu rasmiy PISA testi
                emas.
              </p>

            </div>

          </div>

        </div>

      </section>
    )
  }

  /* =======================================================
     TEST
  ======================================================= */

  if (
    mode === 'test' &&
    question
  ) {
    const progress =
      ((current + 1) /
        testQuestions.length) *
      100

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

        {/* TOP */}

        <div className="rounded-[25px] border bg-card p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-blue-700">
                PISA ADAPTIVE TEST
              </p>

              <p className="mt-1 text-xs font-black">
                Savol {current + 1} /{' '}
                {
                  testQuestions.length
                }
              </p>

            </div>

            <div className="rounded-xl bg-blue-50 px-3 py-2 text-center dark:bg-blue-950/20">

              <p className="text-[8px] font-bold text-muted-foreground">
                DARAJA
              </p>

              <p className="text-lg font-black text-blue-700">
                {difficulty}
              </p>

            </div>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* QUESTION */}

        <div className="rounded-[28px] border bg-card p-6 shadow-sm">

          <div className="flex flex-wrap gap-2">

            <MiniTag>
              {DOMAIN_META[
                question.domain
              ].icon}{' '}
              {
                DOMAIN_META[
                  question.domain
                ].title
              }
            </MiniTag>

            <MiniTag>
              {question.category}
            </MiniTag>

            <MiniTag>
              🌍 {question.context}
            </MiniTag>

          </div>

          {question.stimulus && (
            <div className="mt-5 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">

              <p className="text-[11px] leading-6 text-slate-700 dark:text-slate-300">
                {
                  question.stimulus
                }
              </p>

            </div>
          )}

          <h1 className="mt-6 text-[19px] font-black leading-7">
            {
              question.question
            }
          </h1>

          <div className="mt-5 flex flex-col gap-2.5">

            {question.options.map(
              (
                option,
                index,
              ) => {
                const active =
                  selected ===
                  index

                return (
                  <button
                    key={
                      `${question.id}-${index}`
                    }
                    type="button"
                    onClick={() =>
                      setSelected(
                        index,
                      )
                    }
                    className={`flex items-center gap-3 rounded-[19px] border p-4 text-left transition-all ${
                      active
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/10 dark:bg-blue-950/20'
                        : 'bg-card hover:bg-muted/40'
                    }`}
                  >

                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                        active
                          ? 'bg-blue-600 text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {String.fromCharCode(
                        65 +
                          index,
                      )}
                    </span>

                    <span className="text-[12px] font-semibold leading-5">
                      {option}
                    </span>

                  </button>
                )
              },
            )}

          </div>

          <button
            type="button"
            disabled={
              selected === null
            }
            onClick={
              answerQuestion
            }
            className="mt-5 w-full rounded-[19px] bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Javobni tekshirish →
          </button>

        </div>

        {/* ADAPTIVE STATUS */}

        <div className="grid grid-cols-3 gap-2">

          <MiniStat
            icon="🔥"
            value={`${streak}`}
            label="Streak"
          />

          <MiniStat
            icon="⭐"
            value={`${xp}`}
            label="XP"
          />

          <MiniStat
            icon="🎯"
            value={`${difficulty}/8`}
            label="Level"
          />

        </div>

      </section>
    )
  }

  /* =======================================================
     RESULT
  ======================================================= */

  const correct =
    answers.filter(
      (answer) =>
        answer.correct,
    ).length

  const total =
    answers.length

  const percentage =
    total > 0
      ? Math.round(
          (correct / total) *
            100,
        )
      : 0

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

      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#081b3b] to-[#1268a5] p-7 text-center text-white shadow-xl">

        <div className="relative">

          <div className="text-5xl">
            {percentage >=
            80
              ? '🏆'
              : percentage >=
                  60
                ? '🌟'
                : '🚀'}
          </div>

          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
            TEST YAKUNI
          </p>

          <h1 className="mt-2 text-4xl font-black">
            {percentage}%
          </h1>

          <p className="mt-2 text-sm text-white/70">
            {correct} / {total}{' '}
            to‘g‘ri javob
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-3">

        <ResultCard
          icon="⭐"
          value={`+${xp}`}
          label="Umumiy XP"
        />

        <ResultCard
          icon="🎯"
          value={`${difficulty}/8`}
          label="Adaptive daraja"
        />

      </div>

      <div className="rounded-[25px] border bg-card p-5 shadow-sm">

        <h2 className="text-lg font-black">
          Adaptive tahlil
        </h2>

        <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
          Natijangiz asosida keyingi
          mashg‘ulotlarda savollar
          qiyinligi avtomatik
          moslashtiriladi.
        </p>

        <div className="mt-5">

          <div className="flex items-center justify-between text-[10px] font-bold">

            <span>
              Rivojlanish
            </span>

            <span>
              {percentage}%
            </span>

          </div>

          <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

        </div>

      </div>

      <button
        type="button"
        onClick={() =>
          startTest(domain)
        }
        className="rounded-[21px] bg-blue-700 px-5 py-4 text-sm font-black text-white shadow-lg shadow-blue-700/20"
      >
        🔄 Yana test ishlash
      </button>

      <button
        type="button"
        onClick={() =>
          setMode(
            'dashboard',
          )
        }
        className="rounded-[21px] border bg-card px-5 py-4 text-sm font-black"
      >
        PISA Academy’ga qaytish
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
      className="group flex w-fit items-center gap-1.5 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
    >
      <span className="transition-transform group-hover:-translate-x-0.5">
        ←
      </span>

      {text}
    </button>
  )
}

function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">

      <p className="text-base font-black">
        {value}
      </p>

      <p className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-white/50">
        {label}
      </p>

    </div>
  )
}

function AdaptiveCard({
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

        <span className="flex size-7 items-center justify-center rounded-lg bg-card font-black">
          {icon}
        </span>

        <span className="text-[10px] font-black">
          {title}
        </span>

      </div>

      <p className="mt-2 text-[9px] text-muted-foreground">
        {text}
      </p>

    </div>
  )
}

function MiniTag({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="inline-flex rounded-full border bg-muted/60 px-2 py-1 text-[8px] font-bold text-muted-foreground">
      {children}
    </span>
  )
}

function Skill({
  icon,
  title,
  value,
}: {
  icon: string
  title: string
  value: number
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
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  )
}

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: string
  value: string
  label: string
}) {
  return (
    <div className="rounded-[18px] border bg-card p-3 text-center">

      <div className="text-sm">
        {icon}
      </div>

      <div className="mt-1 text-sm font-black">
        {value}
      </div>

      <div className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
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
    <div className="rounded-[22px] border bg-card p-5 text-center shadow-sm">

      <div className="text-xl">
        {icon}
      </div>

      <div className="mt-2 text-xl font-black">
        {value}
      </div>

      <div className="mt-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>

    </div>
  )
}
