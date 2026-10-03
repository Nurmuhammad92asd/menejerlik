import {
  CATEGORIES,
  getLevelQuestions,
  getModuleById,
  getTopicById,
  MIXED_COUNT,
  MIXED_ID,
  type Question,
} from './quiz-data'

/*
 * =========================================================
 * TYPES
 * =========================================================
 */

/**
 * Test darajalari.
 *
 * mixed — maxsus aralash test rejimi.
 */
export type QuizLevel =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'case'
  | 'mixed'

/**
 * Haqiqiy savol darajalari.
 *
 * MUHIM:
 * mixed bu savol darajasi emas.
 * Shuning uchun savollarni yig‘ishda mixed ishlatilmaydi.
 */
export const QUIZ_LEVEL_ORDER: Exclude<
  QuizLevel,
  'mixed'
>[] = [
  'easy',
  'medium',
  'hard',
  'case',
]

/**
 * Savol + testda qaysi daraja/mavzudan kelgani.
 */
export type SessionQuestion = Question & {
  level?: QuizLevel
  topicId?: string
}

export type QuizSession = {
  categoryId: string
  topicId: string
  level: QuizLevel
  title: string
  questions: SessionQuestion[]
  startedAt: number

  /**
   * Har bir mavzu uchun test vaqti.
   * 120 sekund = 2 daqiqa.
   */
  timeLimitSec?: number
}

export type AnswerRecord = {
  question: Question
  selected: number
}

export type QuizResult = {
  categoryId: string
  topicId: string
  level: QuizLevel
  title: string
  answers: AnswerRecord[]
  correct: number
  total: number
  durationSec: number
}

/*
 * =========================================================
 * QUIZ SETTINGS
 * =========================================================
 */

/**
 * Har bir test uchun 30 ta savol.
 */
export const TOPIC_QUESTION_COUNT = 30

/**
 * Har bir test uchun 2 daqiqa.
 */
export const QUIZ_TIME_LIMIT_SEC = 120

/*
 * =========================================================
 * RANDOMIZATION
 * =========================================================
 */

/**
 * Fisher-Yates algoritmi orqali haqiqiy tasodifiy
 * aralashtirish.
 *
 * sort(() => Math.random() - 0.5) ishlatmaymiz.
 */
function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items]

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1),
    )

    ;[copy[i], copy[j]] = [
      copy[j],
      copy[i],
    ]
  }

  return copy
}

/**
 * Tasodifiy bitta element.
 */
function pickRandom<T>(
  items: readonly T[],
): T {
  return items[
    Math.floor(
      Math.random() * items.length,
    )
  ]
}

/**
 * Savol variantlarini aralashtiradi.
 *
 * Masalan:
 *
 * A. Strategik reja
 * B. Operativ reja
 * C. Taktik reja
 * D. Nazorat
 *
 * keyin:
 *
 * A. Nazorat
 * B. Strategik reja
 * C. Taktik reja
 * D. Operativ reja
 *
 * To‘g‘ri javob indeksi ham avtomatik yangilanadi.
 */
function shuffleOptions<T extends Question>(
  question: T,
): T {
  const order = shuffle(
    question.options.map(
      (_, index) => index,
    ),
  )

  return {
    ...question,

    options: order.map(
      (index) =>
        question.options[index],
    ),

    answer:
      order.indexOf(
        question.answer,
      ),
  }
}

/*
 * =========================================================
 * "OLDIN TUSHGAN SAVOLLAR" XOTIRASI
 * =========================================================
 */

const memoryStore =
  new Map<string, string>()

function readStore(
  key: string,
): string | null {
  try {
    if (
      typeof localStorage !==
      'undefined'
    ) {
      return localStorage.getItem(
        key,
      )
    }
  } catch {
    /* ignore */
  }

  return (
    memoryStore.get(key) ??
    null
  )
}

function writeStore(
  key: string,
  value: string,
) {
  try {
    if (
      typeof localStorage !==
      'undefined'
    ) {
      localStorage.setItem(
        key,
        value,
      )

      return
    }
  } catch {
    /* ignore */
  }

  memoryStore.set(
    key,
    value,
  )
}

function loadSeen(
  scope: string,
): Set<string> {
  try {
    return new Set<string>(
      JSON.parse(
        readStore(
          `quiz:seen:${scope}`,
        ) ?? '[]',
      ),
    )
  } catch {
    return new Set<string>()
  }
}

function saveSeen(
  scope: string,
  seen: Set<string>,
) {
  writeStore(
    `quiz:seen:${scope}`,
    JSON.stringify([
      ...seen,
    ]),
  )
}

/*
 * =========================================================
 * TITLES
 * =========================================================
 */

export function getLevelTitle(
  level: QuizLevel,
): string {
  switch (level) {
    case 'easy':
      return 'Oson'

    case 'medium':
      return 'O‘rta'

    case 'hard':
      return 'Qiyin'

    case 'case':
      return 'Keys'

    case 'mixed':
      return 'Aralash'

    default:
      return 'Test'
  }
}

export function getLevelIcon(
  level: QuizLevel,
): string {
  switch (level) {
    case 'easy':
      return '🟢'

    case 'medium':
      return '🟡'

    case 'hard':
      return '🔴'

    case 'case':
      return '🔵'

    case 'mixed':
      return '🟣'

    default:
      return '📝'
  }
}

export function getCategoryTitle(
  id: string,
): string {
  if (id === MIXED_ID) {
    return 'Aralash test'
  }

  return (
    CATEGORIES.find(
      (category) =>
        category.id === id,
    )?.title ?? 'Test'
  )
}

export function getTopicTitle(
  topicId: string,
): string {
  return (
    getTopicById(topicId)
      ?.title ?? 'Mavzu'
  )
}

/*
 * =========================================================
 * CREATE TOPIC SESSION
 * =========================================================
 *
 * HAR BIR MAVZU:
 *
 * 30 OSON
 * 30 O‘RTA
 * 30 QIYIN
 * 10 KEYS
 *
 * JAMI 100 TA SAVOL.
 *
 * Oddiy test tanlansa:
 *
 * Oson  → oson savollar
 * O‘rta  → o‘rta savollar
 * Qiyin → qiyin savollar
 * Keys  → keys savollar
 *
 * Aralash test tanlansa:
 *
 * 100 ta savol
 *       ↓
 * random
 *       ↓
 * 30 ta savol
 *
 * HAR SAFAR YANGI RANDOM TANLANADI.
 */

export function createTopicSession(
  topicId: string,
  level: QuizLevel,
): QuizSession {
  const topic =
    getTopicById(topicId)

  /*
   * =======================================================
   * ARALASH TEST
   * =======================================================
   *
   * 30 OSON
   * 30 O‘RTA
   * 30 QIYIN
   * 10 KEYS
   *
   * JAMI 100 TA.
   *
   * Shu 100 ta ichidan random 30 ta olinadi.
   */
  if (level === 'mixed') {
    const pool: SessionQuestion[] =
      []

    for (
      const sourceLevel of
        QUIZ_LEVEL_ORDER
    ) {
      const questions =
        getLevelQuestions(
          topicId,
          sourceLevel,
        )

      for (
        const question of
          questions
      ) {
        pool.push({
          ...question,

          level:
            sourceLevel,

          topicId,
        })
      }
    }

    /*
     * Avval 100 ta savolni
     * tasodifiy aralashtiramiz.
     *
     * Keyin faqat 30 tasini olamiz.
     */
    const picked =
      shuffle(pool)
        .slice(
          0,
          TOPIC_QUESTION_COUNT,
        )
        .map((q) =>
          shuffleOptions(q),
        )

    return {
      categoryId:
        topicId.split('t')[0] ||
        'unknown',

      topicId,

      level: 'mixed',

      title:
        topic
          ? `${topic.title} — Aralash test`
          : 'Aralash test',

      questions: picked,

      startedAt:
        Date.now(),

      timeLimitSec:
        QUIZ_TIME_LIMIT_SEC,
    }
  }

  /*
   * =======================================================
   * ODDIY DARAJA TESTI
   * =======================================================
   */

  const questions =
    getLevelQuestions(
      topicId,
      level,
    )

  const prepared:
    SessionQuestion[] =
    shuffle(questions)
      .slice(
        0,
        TOPIC_QUESTION_COUNT,
      )
      .map((q) =>
        shuffleOptions({
          ...q,

          level,

          topicId,
        }),
      )

  return {
    categoryId:
      topicId.split('t')[0] ||
      'unknown',

    topicId,

    level,

    title: topic
      ? `${topic.title} — ${getLevelTitle(
          level,
        )}`
      : `${getLevelTitle(
          level,
        )} test`,

    questions:
      prepared,

    startedAt:
      Date.now(),

    timeLimitSec:
      QUIZ_TIME_LIMIT_SEC,
  }
}

/*
 * =========================================================
 * CREATE RANDOM TOPIC SESSION
 * =========================================================
 *
 * MAVZUDAGI BARCHA DARAJALARNI
 * ARALASHTIRIB 30 TA TANLAYDI.
 *
 * Bu funksiya eski kodlar bilan
 * backward compatibility uchun ham saqlanmoqda.
 */

export function createRandomTopicSession(
  topicId: string,
): QuizSession {
  const topic =
    getTopicById(topicId)

  const pool: SessionQuestion[] =
    []

  for (
    const level of
      QUIZ_LEVEL_ORDER
  ) {
    const questions =
      getLevelQuestions(
        topicId,
        level,
      )

    for (
      const question of
        questions
    ) {
      pool.push({
        ...question,

        level,

        topicId,
      })
    }
  }

  /*
   * 100 ta savoldan
   * tasodifiy 30 ta.
   */
  const picked =
    shuffle(pool)
      .slice(
        0,
        TOPIC_QUESTION_COUNT,
      )
      .map((q) =>
        shuffleOptions(q),
      )

  return {
    categoryId:
      topicId.split('t')[0] ||
      'unknown',

    topicId,

    level: 'mixed',

    title:
      topic?.title
        ? `${topic.title} — Aralash test`
        : 'Aralash test',

    questions:
      picked,

    startedAt:
      Date.now(),

    timeLimitSec:
      QUIZ_TIME_LIMIT_SEC,
  }
}

/*
 * =========================================================
 * CREATE MODULE SESSION
 * =========================================================
 */

export function createModuleSession(
  moduleId: string,
): QuizSession {
  const module =
    getModuleById(moduleId)

  const questions:
    SessionQuestion[] = []

  for (
    const topic of
      module?.topics ?? []
  ) {
    for (
      const level of
        QUIZ_LEVEL_ORDER
    ) {
      for (
        const q of
          topic.levels[level]
      ) {
        questions.push({
          ...q,

          level,

          topicId:
            topic.id,
        })
      }
    }
  }

  return {
    categoryId:
      moduleId,

    topicId: '',

    level: 'mixed',

    title:
      module?.title ??
      'Modul testi',

    questions:
      shuffle(questions)
        .slice(
          0,
          TOPIC_QUESTION_COUNT,
        )
        .map((q) =>
          shuffleOptions(q),
        ),

    startedAt:
      Date.now(),

    timeLimitSec:
      QUIZ_TIME_LIMIT_SEC,
  }
}

/*
 * =========================================================
 * MIXED SESSION
 * =========================================================
 *
 * Bu funksiya butun modul yoki barcha mavzular
 * bo‘yicha aralash test uchun ishlatiladi.
 *
 * MUHIM:
 *
 * Bu yerda quota mavjud.
 *
 * Topic uchun esa createTopicSession('mixed')
 * ishlatilganda 100 tadan sof random 30 olinadi.
 */

export type RealQuizLevel =
  Exclude<
    QuizLevel,
    'mixed'
  >

export const MIXED_QUOTA:
  Record<
    RealQuizLevel,
    number
  > = {
    easy: 10,

    medium: 9,

    hard: 8,

    case: 3,
  }

function scaleQuota(
  count: number,
): Record<
  RealQuizLevel,
  number
> {
  const total =
    QUIZ_LEVEL_ORDER.reduce(
      (sum, level) =>
        sum +
        MIXED_QUOTA[level],
      0,
    )

  const quota =
    {} as Record<
      RealQuizLevel,
      number
    >

  let used = 0

  QUIZ_LEVEL_ORDER.forEach(
    (
      level,
      index,
    ) => {
      const isLast =
        index ===
        QUIZ_LEVEL_ORDER.length -
          1

      quota[level] =
        isLast
          ? count - used
          : Math.round(
              (MIXED_QUOTA[level] /
                total) *
                count,
            )

      used +=
        quota[level]
    },
  )

  return quota
}

export function createMixedSession(
  options: {
    topicId?: string
    moduleId?: string
    count?: number
  } = {},
): QuizSession {
  const count =
    options.count ??
    MIXED_COUNT

  const scope =
    options.topicId ??
    options.moduleId ??
    'all'

  const pool:
    SessionQuestion[] = []

  for (
    const module of
      CATEGORIES
  ) {
    if (
      options.moduleId &&
      module.id !==
        options.moduleId
    ) {
      continue
    }

    for (
      const topic of
        module.topics
    ) {
      if (
        options.topicId &&
        topic.id !==
          options.topicId
      ) {
        continue
      }

      for (
        const level of
          QUIZ_LEVEL_ORDER
      ) {
        for (
          const q of
            topic.levels[level]
        ) {
          pool.push({
            ...q,

            level,

            topicId:
              topic.id,
          })
        }
      }
    }
  }

  const seen =
    loadSeen(scope)

  const quota =
    scaleQuota(count)

  const picked:
    SessionQuestion[] = []

  for (
    const level of
      QUIZ_LEVEL_ORDER
  ) {
    const levelPool =
      pool.filter(
        (q) =>
          q.level ===
          level,
      )

    let fresh =
      shuffle(
        levelPool.filter(
          (q) =>
            !seen.has(
              q.id,
            ),
        ),
      )

    if (
      fresh.length <
      quota[level]
    ) {
      levelPool.forEach(
        (q) =>
          seen.delete(
            q.id,
          ),
      )

      const rest =
        shuffle(
          levelPool.filter(
            (q) =>
              !fresh.includes(
                q,
              ),
          ),
        )

      fresh = [
        ...fresh,
        ...rest,
      ]
    }

    picked.push(
      ...fresh.slice(
        0,
        quota[level],
      ),
    )
  }

  /*
   * Agar ayrim darajalarda savol
   * yetarli bo‘lmasa, boshqa darajadagi
   * savollardan to‘ldiramiz.
   */
  if (
    picked.length <
    count
  ) {
    const ids =
      new Set(
        picked.map(
          (q) =>
            q.id,
        ),
      )

    picked.push(
      ...shuffle(
        pool.filter(
          (q) =>
            !ids.has(
              q.id,
            ),
        ),
      ).slice(
        0,
        count -
          picked.length,
      ),
    )
  }

  picked.forEach(
    (q) =>
      seen.add(
        q.id,
      ),
  )

  saveSeen(
    scope,
    seen,
  )

  return {
    categoryId:
      MIXED_ID,

    topicId:
      options.topicId ??
      '',

    level:
      'mixed',

    title:
      'Aralash test',

    questions:
      shuffle(picked).map(
        (q) =>
          shuffleOptions(q),
      ),

    startedAt:
      Date.now(),

    timeLimitSec:
      QUIZ_TIME_LIMIT_SEC,
  }
}

/*
 * =========================================================
 * BACKWARD COMPATIBILITY
 * =========================================================
 */

export function createSession(
  categoryId: string,
): QuizSession {
  if (
    categoryId ===
    MIXED_ID
  ) {
    return createMixedSession()
  }

  return createModuleSession(
    categoryId,
  )
}

/*
 * =========================================================
 * TIME
 * =========================================================
 */

/**
 * Test boshlanganidan keyin
 * qancha vaqt o‘tganini sekundda
 * qaytaradi.
 */
export function getElapsedSeconds(
  session: QuizSession,
): number {
  return Math.floor(
    (Date.now() -
      session.startedAt) /
      1000,
  )
}

/**
 * Vaqt tugagan yoki tugamaganini
 * tekshiradi.
 */
export function isQuizTimeExpired(
  session: QuizSession,
): boolean {
  const limit =
    session.timeLimitSec ??
    QUIZ_TIME_LIMIT_SEC

  return (
    getElapsedSeconds(
      session,
    ) >= limit
  )
}

/**
 * Qolgan vaqt.
 */
export function getRemainingSeconds(
  session: QuizSession,
): number {
  const limit =
    session.timeLimitSec ??
    QUIZ_TIME_LIMIT_SEC

  return Math.max(
    0,
    limit -
      getElapsedSeconds(
        session,
      ),
  )
}

/*
 * =========================================================
 * FORMAT DURATION
 * =========================================================
 */

export function formatDuration(
  totalSec: number,
): string {
  const safe =
    Math.max(
      0,
      Math.round(
        totalSec,
      ),
    )

  const minutes =
    Math.floor(
      safe / 60,
    )

  const seconds =
    safe % 60

  return `${minutes}:${seconds
    .toString()
    .padStart(2, '0')}`
}

/*
 * =========================================================
 * RESULT / GRADE
 * =========================================================
 */

export function getResultMessage(
  percent: number,
): {
  label: string
  message: string
  emoji: string
} {
  if (
    percent >= 100
  ) {
    return {
      label:
        'SIZ ENG ZO‘RISIZ! 👑',

      message:
        '100%! Birorta ham xato yo‘q. Bu natija sizning bilim va tayyorgarligingiz juda yuqori ekanini ko‘rsatadi. Menejerlik sari dadil davom eting!',

      emoji: '👑',
    }
  }

  if (
    percent >= 90
  ) {
    return {
      label:
        'AJOYIB NATIJA! 🏆',

      message:
        '90% dan yuqori! Siz mavzuni juda yaxshi egallagansiz. Endi eng murakkab savollar bilan o‘zingizni sinab ko‘ring!',

      emoji: '🏆',
    }
  }

  if (
    percent >= 80
  ) {
    return {
      label:
        'JUDAYAM KUCHLI NATIJA! 🔥',

      message:
        '80% dan yuqori! Sizning tayyorgarligingiz yaxshi darajada. Yana ozgina mehnat — va yuqori natijalar sizniki!',

      emoji: '🔥',
    }
  }

  if (
    percent >= 70
  ) {
    return {
      label:
        'TABRIKLAYMIZ, SIZ O‘TDINGIZ! 🎉',

      message:
        '70% dan yuqori natija — testdan muvaffaqiyatli o‘tdingiz! Bilimingizni mustahkamlashda davom eting.',

      emoji: '🎉',
    }
  }

  if (
    percent >= 50
  ) {
    return {
      label:
        'YAXSHI BOSHLANISH! 💪',

      message:
        'Natijangizda yaxshi bilimlar bor. Xato qilgan savollaringizni qayta ko‘rib chiqing va yana bir bor urinib ko‘ring.',

      emoji: '💪',
    }
  }

  return {
    label:
      'TAYYORLANISHNI DAVOM ETTIRING 📚',

    message:
      'Bu safar kerakli natijaga yetmadi. Xatolaringizni tahlil qiling, mavzuni takrorlang va yana urinib ko‘ring. Har bir urinish sizni kuchliroq qiladi!',

    emoji: '📚',
  }
}

export function gradeFor(
  percent: number,
) {
  const result =
    getResultMessage(
      percent,
    )

  return {
    label:
      result.label,

    note:
      result.message,
  }
}

/*
 * =========================================================
 * PERCENTAGE
 * =========================================================
 */

export function calculatePercentage(
  correct: number,
  total: number,
): number {
  if (
    total === 0
  ) {
    return 0
  }

  return Math.round(
    (correct / total) *
      100,
  )
}

/*
 * =========================================================
 * PASS / FAIL
 * =========================================================
 */

/**
 * 70% yoki undan yuqori bo‘lsa O‘TDI.
 */
export function hasPassed(
  correct: number,
  total: number,
): boolean {
  const percent =
    calculatePercentage(
      correct,
      total,
    )

  return (
    percent >= 70
  )
}

/**
 * Natija uchun chiroyli status.
 */
export function getPassStatus(
  correct: number,
  total: number,
): string {
  const percent =
    calculatePercentage(
      correct,
      total,
    )

  return hasPassed(
    correct,
    total,
  )
    ? `O‘TDINGIZ — ${percent}% 🎉`
    : `O‘TMADINGIZ — ${percent}%`
}

/*
 * =========================================================
 * ANSWER CHECK
 * =========================================================
 */

export function isAnswerCorrect(
  question: Question,
  selected: number,
): boolean {
  return (
    selected ===
    question.answer
  )
}

/*
 * =========================================================
 * FEEDBACK
 * =========================================================
 */

const PRAISE = [
  'Barakalla! 👏 To‘g‘ri topdingiz.',

  'Ajoyib! 🔥 Rahbarlik fikri sizda bor.',

  'Zo‘r! 🎯 Aniq nishonga urdingiz.',

  'Juda yaxshi! 💪 Shu ruhda davom eting.',

  'Mukammal javob! ⭐ Bilimingiz mustahkam.',

  'Tabriklayman! 🚀 Siz yo‘ldasiz.',
]

const STREAK_PRAISE:
  Record<
    number,
    string
  > = {
    3: '🔥 3 ta ketma-ket to‘g‘ri! Qizib ketdingiz!',

    5: '⚡ 5 ta ketma-ket! To‘xtatib bo‘lmayapti!',

    10: '👑 10 ta ketma-ket! Haqiqiy mutaxassis!',
  }

const ENCOURAGE = [
  'Xafa bo‘lmang — xatodan o‘rganish eng tez yo‘l. 💡',

  'Hech gap yo‘q, buni endi yaxshi eslab qolasiz. 🌱',

  'Ishonch bilan davom eting, keyingisi sizniki! 💪',
]

export type Feedback = {
  correct: boolean
  title: string
  message: string
  explanation: string
  chosenText: string | null
  correctText: string
}

export function getFeedback(
  question: Question,
  selected:
    | number
    | null,
  streak = 0,
): Feedback {
  const correctText =
    question.options[
      question.answer
    ]

  if (
    selected ===
    question.answer
  ) {
    return {
      correct: true,

      title:
        pickRandom(
          PRAISE,
        ),

      message:
        STREAK_PRAISE[
          streak + 1
        ] ?? '',

      explanation:
        question.explanation,

      chosenText:
        correctText,

      correctText,
    }
  }

  const chosenText =
    selected === null
      ? null
      : question.options[
          selected
        ]

  const why =
    selected === null
      ? 'Javob tanlanmadi. '
      : `Siz tanlagan javob («${chosenText}») bu savolga mos kelmaydi. `

  return {
    correct: false,

    title:
      '❌ Bu safar to‘g‘ri chiqmadi',

    message:
      `${why}${pickRandom(
        ENCOURAGE,
      )}`,

    explanation:
      `To‘g‘ri javob: «${correctText}». Nima uchun: ${question.explanation}`,

    chosenText,

    correctText,
  }
}

/*
 * =========================================================
 * NATIJA TAHLILI
 * =========================================================
 */

export type LevelStat = {
  level: RealQuizLevel
  correct: number
  total: number
  percent: number
}

export type ResultSummary = {
  percent: number
  byLevel: LevelStat[]
  weakest: RealQuizLevel | null
  headline: string
  advice: string

  /**
   * Yangi kreativ natija xabari.
   */
  resultMessage: string

  /**
   * O‘tdi / o‘tmadi.
   */
  passed: boolean
}

export function summarizeResult(
  result: QuizResult,
): ResultSummary {
  const percent =
    calculatePercentage(
      result.correct,
      result.total,
    )

  const byLevel =
    QUIZ_LEVEL_ORDER
      .map(
        (level) => {
          const list =
            result.answers.filter(
              (a) =>
                (
                  a.question as
                    SessionQuestion
                ).level ===
                level,
            )

          const correct =
            list.filter(
              (a) =>
                isAnswerCorrect(
                  a.question,
                  a.selected,
                ),
            ).length

          return {
            level,

            correct,

            total:
              list.length,

            percent:
              calculatePercentage(
                correct,
                list.length,
              ),
          }
        },
      )
      .filter(
        (stat) =>
          stat.total > 0,
      )

  const weakest =
    byLevel.length
      ? [
          ...byLevel,
        ].sort(
          (a, b) =>
            a.percent -
            b.percent,
        )[0].level
      : null

  const resultMessage =
    getResultMessage(
      percent,
    )

  const passed =
    percent >= 70

  let headline: string
  let advice: string

  if (
    percent >= 100
  ) {
    headline =
      '👑 SIZ ENG ZO‘RISIZ!'

    advice =
      'Mukammal natija! Birorta ham xato qilmasdan barcha savollarga to‘g‘ri javob berdingiz.'
  } else if (
    percent >= 90
  ) {
    headline =
      '🏆 AJOYIB NATIJA!'

    advice =
      'Bilimingiz juda yuqori darajada. Endi yanada murakkab savollar bilan o‘zingizni sinab ko‘ring.'
  } else if (
    percent >= 80
  ) {
    headline =
      '🔥 JUDA KUCHLI NATIJA!'

    advice =
      'Siz mavzuni yaxshi o‘zlashtirgansiz. Yana ozgina tayyorgarlik bilan natijangizni yanada oshirishingiz mumkin.'
  } else if (
    percent >= 70
  ) {
    headline =
      '🎉 TABRIKLAYMIZ, SIZ O‘TDINGIZ!'

    advice =
      'Siz belgilangan 70% chegaradan muvaffaqiyatli o‘tdingiz. Bilimingizni yanada mustahkamlashda davom eting.'
  } else if (
    percent >= 50
  ) {
    headline =
      '💪 YAXSHI BOSHLANISH!'

    advice =
      'Hali 70% chegaraga yetmadingiz. Xato qilgan savollaringizni tahlil qilib, testni qayta ishlang.'
  } else {
    headline =
      '📚 YANA TAYYORLANAMIZ!'

    advice =
      'Mavzuni qayta ko‘rib chiqing va yana urinib ko‘ring. Har bir xato — keyingi muvaffaqiyat uchun tajriba.'
  }

  if (
    weakest &&
    byLevel.length > 1
  ) {
    advice +=
      ` Eng zaif joyingiz: ${getLevelIcon(
        weakest,
      )} ${getLevelTitle(
        weakest,
      )} daraja.`
  }

  return {
    percent,

    byLevel,

    weakest,

    headline,

    advice,

    resultMessage:
      resultMessage.message,

    passed,
  }
}

/*
 * =========================================================
 * LEVEL METADATA
 * =========================================================
 *
 * TEST TANLASH EKRANIDA:
 *
 * 🟢 Oson
 * 🟡 O‘rta
 * 🔴 Qiyin
 * 🔵 Keys
 * 🟣 Aralash test
 *
 * chiqadi.
 */

export const QUIZ_LEVELS: Array<{
  id: QuizLevel
  title: string
  icon: string
  description: string
  questionCount: number
}> = [
  {
    id: 'easy',

    title: 'Oson',

    icon: '🟢',

    description:
      'Asosiy tushunchalar va bilimlar',

    questionCount: 30,
  },

  {
    id: 'medium',

    title: 'O‘rta',

    icon: '🟡',

    description:
      'Amaliy qo‘llash va vaziyatlar',

    questionCount: 30,
  },

  {
    id: 'hard',

    title: 'Qiyin',

    icon: '🔴',

    description:
      'Tahliliy va murakkab savollar',

    questionCount: 30,
  },

  {
    id: 'case',

    title: 'Keys',

    icon: '🔵',

    description:
      'Real boshqaruv vaziyatlari',

    questionCount: 10,
  },

  {
    id: 'mixed',

    title: 'Aralash test',

    icon: '🟣',

    description:
      '100 ta savoldan tasodifiy 30 ta',

    questionCount: 30,
  },
]
