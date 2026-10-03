/*
 * =========================================================
 * QUIZ ENGINE
 * ---------------------------------------------------------
 * 1) Darajalar bo‘yicha alohida testlar: 30 oson / 30 o‘rta /
 *    30 qiyin / 10 keys
 * 2) ARALASH test: har safar yangi 30 ta savol (oldin tushganlari
 *    imkon qadar takrorlanmaydi), variantlar ham aralashadi
 * 3) Javobga qarab: to‘g‘ri → maqtov, noto‘g‘ri → nima uchun
 *    xato ekanini tushuntirish
 * 4) Reyting: o‘rningiz, jami qatnashchilar, foiz (percentile)
 * =========================================================
 */

// ⚠️ Yo‘lni o‘z loyihangizga moslang (savollar fayli)
import { CATEGORIES, type Question } from './questions'

/* ---------------------------------------------------------
 * TURLAR
 * ------------------------------------------------------- */

export type Level = 'easy' | 'medium' | 'hard' | 'case'

export const LEVELS: Level[] = ['easy', 'medium', 'hard', 'case']

export const LEVEL_LABELS: Record<Level, string> = {
  easy: '🟢 Oson',
  medium: '🟡 O‘rta',
  hard: '🔴 Qiyin',
  case: '🔵 Keys',
}

/** Savol + tushgan vaqtdagi aralashtirilgan variantlar */
export type PreparedQuestion = {
  id: string
  topicId: string
  level: Level
  text: string
  options: string[] // aralashtirilgan
  answer: number // aralashgan variantlardagi to‘g‘ri indeks
  explanation: string
}

export type AnswerRecord = {
  questionId: string
  level: Level
  chosen: number | null // null = vaqt tugadi / javob berilmadi
  correct: boolean
}

/* ---------------------------------------------------------
 * YORDAMCHI: tasodifiylik va xotira
 * ------------------------------------------------------- */

export function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const pickRandom = <T,>(items: readonly T[]): T =>
  items[Math.floor(Math.random() * items.length)]

export interface KV {
  get(key: string): string | null
  set(key: string, value: string): void
}

const memoryStore = new Map<string, string>()

/** Brauzerda localStorage, bo‘lmasa (SSR) xotirada ishlaydi */
export const defaultKV: KV = {
  get(key) {
    try {
      if (typeof localStorage !== 'undefined') return localStorage.getItem(key)
    } catch {
      /* ignore */
    }
    return memoryStore.get(key) ?? null
  },
  set(key, value) {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(key, value)
        return
      }
    } catch {
      /* ignore */
    }
    memoryStore.set(key, value)
  },
}

/* ---------------------------------------------------------
 * SAVOLLAR BAZASIDAN O‘QISH
 * ------------------------------------------------------- */

type PoolItem = { q: Question; topicId: string; level: Level }

/** Bo‘sh mavzular (savollari hali kiritilmagan) avtomatik o‘tkazib yuboriladi */
function collectPool(scope: { topicId?: string; moduleId?: string }): PoolItem[] {
  const out: PoolItem[] = []
  for (const mod of CATEGORIES) {
    if (scope.moduleId && mod.id !== scope.moduleId) continue
    for (const topic of mod.topics) {
      if (scope.topicId && topic.id !== scope.topicId) continue
      for (const level of LEVELS) {
        for (const q of topic.levels[level]) {
          out.push({ q, topicId: topic.id, level })
        }
      }
    }
  }
  return out
}

/** Variantlarni aralashtiradi, to‘g‘ri javob indeksini yangilaydi */
function prepare(item: PoolItem): PreparedQuestion {
  const correctText = item.q.options[item.q.answer]
  const options = shuffle(item.q.options)
  return {
    id: item.q.id,
    topicId: item.topicId,
    level: item.level,
    text: item.q.text,
    options,
    answer: options.indexOf(correctText),
    explanation: item.q.explanation,
  }
}

/* ---------------------------------------------------------
 * 1) DARAJA BO‘YICHA TEST (30 / 30 / 30 / 10)
 * ------------------------------------------------------- */

/**
 * Tanlangan mavzu va darajaning barcha savollari, har safar
 * boshqa tartibda va variantlari aralashgan holda.
 */
export function buildLevelQuiz(topicId: string, level: Level): PreparedQuestion[] {
  return shuffle(collectPool({ topicId }).filter((p) => p.level === level)).map(prepare)
}

/* ---------------------------------------------------------
 * 2) ARALASH TEST — har safar yangi 30 ta
 * ------------------------------------------------------- */

export const MIXED_DEFAULT_COUNT = 30

/** 30 ta savolning taqsimoti: 10 oson, 9 o‘rta, 8 qiyin, 3 keys */
export const MIXED_DEFAULT_QUOTA: Record<Level, number> = {
  easy: 10,
  medium: 9,
  hard: 8,
  case: 3,
}

function scaleQuota(count: number): Record<Level, number> {
  const base = MIXED_DEFAULT_QUOTA
  const total = LEVELS.reduce((s, l) => s + base[l], 0)
  const quota = {} as Record<Level, number>
  let used = 0
  LEVELS.forEach((l, i) => {
    quota[l] =
      i === LEVELS.length - 1 ? count - used : Math.round((base[l] / total) * count)
    used += quota[l]
  })
  return quota
}

export function buildMixedQuiz(
  opts: {
    topicId?: string
    moduleId?: string
    count?: number
    kv?: KV
  } = {},
): PreparedQuestion[] {
  const kv = opts.kv ?? defaultKV
  const count = opts.count ?? MIXED_DEFAULT_COUNT
  const scope = opts.topicId ?? opts.moduleId ?? 'all'
  const seenKey = `quiz:seen:${scope}`

  const pool = collectPool(opts)
  if (pool.length === 0) return []

  // Oldin tushgan savollar
  let seen = new Set<string>()
  try {
    seen = new Set<string>(JSON.parse(kv.get(seenKey) ?? '[]'))
  } catch {
    /* buzilgan yozuv — yangidan boshlaymiz */
  }

  const quota = scaleQuota(count)
  const picked: PoolItem[] = []

  for (const level of LEVELS) {
    const levelPool = pool.filter((p) => p.level === level)
    let fresh = shuffle(levelPool.filter((p) => !seen.has(p.q.id)))

    // Bu darajadagi yangi savollar tugasa — aylanishni boshidan boshlaymiz
    if (fresh.length < quota[level]) {
      levelPool.forEach((p) => seen.delete(p.q.id))
      const rest = shuffle(levelPool.filter((p) => !fresh.includes(p)))
      fresh = [...fresh, ...rest]
    }
    picked.push(...fresh.slice(0, quota[level]))
  }

  // Ba’zi daraja yetmasa (masalan keys kam) — qolgan savollardan to‘ldiramiz
  if (picked.length < count) {
    const ids = new Set(picked.map((p) => p.q.id))
    const extra = shuffle(pool.filter((p) => !ids.has(p.q.id)))
    picked.push(...extra.slice(0, count - picked.length))
  }

  picked.forEach((p) => seen.add(p.q.id))
  kv.set(seenKey, JSON.stringify([...seen]))

  return shuffle(picked).map(prepare)
}

/* ---------------------------------------------------------
 * 3) JAVOBGA REAKSIYA: maqtov yoki tushuntirish
 * ------------------------------------------------------- */

const PRAISE = [
  'Barakalla! 👏 To‘g‘ri topdingiz.',
  'Ajoyib! 🔥 Rahbarlik fikri sizda bor.',
  'Zo‘r! 🎯 Aniq nishonga urdingiz.',
  'Juda yaxshi! 💪 Shu ruhda davom eting.',
  'Mukammal javob! ⭐ Bilimingiz mustahkam.',
  'Tabriklayman! 🚀 Siz yo‘ldasiz.',
]

const STREAK_PRAISE: Record<number, string> = {
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

export function checkAnswer(
  q: PreparedQuestion,
  chosen: number | null,
  currentStreak = 0,
): Feedback {
  const correctText = q.options[q.answer]
  const correct = chosen === q.answer

  if (correct) {
    const streak = currentStreak + 1
    return {
      correct: true,
      title: pickRandom(PRAISE),
      message: STREAK_PRAISE[streak] ?? '',
      explanation: q.explanation,
      chosenText: correctText,
      correctText,
    }
  }

  const chosenText = chosen === null ? null : q.options[chosen]
  const why =
    chosen === null
      ? 'Javob tanlanmadi. '
      : `Siz tanlagan javob («${chosenText}») bu savolga mos kelmaydi. `

  return {
    correct: false,
    title: '❌ Bu safar to‘g‘ri chiqmadi',
    message: `${why}${pickRandom(ENCOURAGE)}`,
    explanation: `To‘g‘ri javob: «${correctText}». Nima uchun: ${q.explanation}`,
    chosenText,
    correctText,
  }
}

/* ---------------------------------------------------------
 * NATIJA TAHLILI
 * ------------------------------------------------------- */

export type LevelStat = { level: Level; correct: number; total: number; percent: number }

export type Summary = {
  correct: number
  total: number
  percent: number
  byLevel: LevelStat[]
  weakest: Level | null
  headline: string
  advice: string
}

export function summarize(answers: AnswerRecord[]): Summary {
  const total = answers.length
  const correct = answers.filter((a) => a.correct).length
  const percent = total ? Math.round((correct / total) * 100) : 0

  const byLevel: LevelStat[] = LEVELS.map((level) => {
    const list = answers.filter((a) => a.level === level)
    const c = list.filter((a) => a.correct).length
    return {
      level,
      correct: c,
      total: list.length,
      percent: list.length ? Math.round((c / list.length) * 100) : 0,
    }
  }).filter((s) => s.total > 0)

  const weakest = byLevel.length
    ? [...byLevel].sort((a, b) => a.percent - b.percent)[0].level
    : null

  let headline: string
  let advice: string

  if (percent >= 90) {
    headline = '🏆 A’lo natija! Siz tayyorsiz.'
    advice = 'Bilimingiz juda yuqori. Endi faqat qiyin va keys savollarda o‘zingizni sinab turing.'
  } else if (percent >= 75) {
    headline = '🎉 Yaxshi natija!'
    advice = 'Asosiy tushunchalarni yaxshi bilasiz. Xato qilgan savollaringiz izohini qayta o‘qib chiqing.'
  } else if (percent >= 55) {
    headline = '👍 O‘rtacha natija — o‘sish uchun joy bor.'
    advice = 'Tamoyillar va jarayonlar ketma-ketligini (attestatsiya, akkreditatsiya) qayta takrorlang.'
  } else {
    headline = '📚 Hozircha boshlang‘ich bosqich.'
    advice =
      'Bu normal. Avval «Oson» darajani 80% dan yuqori natijaga yetkazing, so‘ng «O‘rta»ga o‘ting. Har bir izohni o‘qishni unutmang.'
  }

  if (weakest && byLevel.length > 1) {
    advice += ` Eng zaif joyingiz: ${LEVEL_LABELS[weakest]} daraja.`
  }

  return { correct, total, percent, byLevel, weakest, headline, advice }
}

/* ---------------------------------------------------------
 * 4) REYTING (LEADERBOARD)
 * ------------------------------------------------------- */

export type LeaderboardEntry = {
  userId: string
  name: string
  mode: string // 'aralash' | 'm1t1:easy' | ...
  score: number // to‘g‘ri javoblar soni
  total: number
  percent: number
  timeSec: number // sarflangan vaqt (teng ballda tezroq yuqoriroq)
  date: string // ISO
}

/**
 * Saqlash adapteri. Hozir localStorage (faqat shu qurilma).
 * Haqiqiy, umumiy reyting uchun HttpLeaderboardStore yoki o‘z
 * bazangiz (Supabase, Firebase, Telegram bot API) ni ulang.
 */
export interface LeaderboardStore {
  submit(entry: LeaderboardEntry): Promise<void>
  all(mode: string): Promise<LeaderboardEntry[]>
}

export class LocalLeaderboardStore implements LeaderboardStore {
  constructor(private kv: KV = defaultKV) {}

  private read(): LeaderboardEntry[] {
    try {
      return JSON.parse(this.kv.get('quiz:leaderboard') ?? '[]')
    } catch {
      return []
    }
  }

  async submit(entry: LeaderboardEntry) {
    this.kv.set('quiz:leaderboard', JSON.stringify([...this.read(), entry]))
  }

  async all(mode: string) {
    return this.read().filter((e) => e.mode === mode)
  }
}

/** Server orqali (masalan, bot backend): POST /submit, GET /all?mode= */
export class HttpLeaderboardStore implements LeaderboardStore {
  constructor(private baseUrl: string) {}

  async submit(entry: LeaderboardEntry) {
    await fetch(`${this.baseUrl}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    })
  }

  async all(mode: string) {
    const res = await fetch(`${this.baseUrl}/all?mode=${encodeURIComponent(mode)}`)
    return (await res.json()) as LeaderboardEntry[]
  }
}

/** Har bir foydalanuvchining eng yaxshi natijasi */
function bestPerUser(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  const best = new Map<string, LeaderboardEntry>()
  for (const e of entries) {
    const prev = best.get(e.userId)
    if (!prev || isBetter(e, prev)) best.set(e.userId, e)
  }
  return [...best.values()]
}

/** Ko‘p ball yaxshi; teng bo‘lsa — kam vaqt yaxshi */
function isBetter(a: LeaderboardEntry, b: LeaderboardEntry): boolean {
  if (a.percent !== b.percent) return a.percent > b.percent
  return a.timeSec < b.timeSec
}

export type Standing = {
  rank: number // siz nechinchi o‘rindasiz
  totalParticipants: number // jami qatnashchilar
  topPercent: number // «eng yaxshi X% ichidasiz»
  top: LeaderboardEntry[] // birinchi 10 ta
  message: string
}

/**
 * Berilgan natija reytingda nechinchi o‘rinda ekanini hisoblaydi.
 * Test davomida ham (vaqtinchalik natija bilan) chaqirish mumkin —
 * shunda «hozirgi o‘rningiz» jonli ko‘rsatib turiladi.
 */
export function getStanding(
  entries: LeaderboardEntry[],
  me: LeaderboardEntry,
): Standing {
  const others = bestPerUser(entries).filter((e) => e.userId !== me.userId)
  const prevMine = entries.filter((e) => e.userId === me.userId)
  const myBest = [me, ...prevMine].reduce((a, b) => (isBetter(a, b) ? a : b))

  const ranked = [...others, myBest].sort((a, b) =>
    isBetter(a, b) ? -1 : isBetter(b, a) ? 1 : 0,
  )

  const rank = ranked.findIndex((e) => e.userId === me.userId) + 1
  const total = ranked.length
  const topPercent = Math.max(1, Math.round((rank / total) * 100))

  let message: string
  if (total === 1) message = '🌟 Siz birinchi qatnashchisiz! Boshqalar sizni quvib yetishga harakat qiladi.'
  else if (rank === 1) message = `🥇 Siz ${total} kishi orasida 1-o‘rindasiz!`
  else if (rank <= 3) message = `🏅 Siz ${total} kishi orasida ${rank}-o‘rindasiz — sovrinli uchlikda!`
  else if (topPercent <= 25) message = `🔥 ${total} kishi ichida ${rank}-o‘rin — eng yaxshi ${topPercent}% qatorida.`
  else message = `📈 ${total} kishi ichida ${rank}-o‘rindasiz. Yana urinib ko‘ring — yuqoriga ko‘tarilish mumkin!`

  return { rank, totalParticipants: total, topPercent, top: ranked.slice(0, 10), message }
}

/** Natijani yuborib, yangi o‘rinni qaytaradi */
export async function submitAndGetStanding(
  store: LeaderboardStore,
  user: { id: string; name: string },
  mode: string,
  answers: AnswerRecord[],
  timeSec: number,
): Promise<{ summary: Summary; standing: Standing }> {
  const summary = summarize(answers)
  const entry: LeaderboardEntry = {
    userId: user.id,
    name: user.name,
    mode,
    score: summary.correct,
    total: summary.total,
    percent: summary.percent,
    timeSec,
    date: new Date().toISOString(),
  }
  const before = await store.all(mode)
  await store.submit(entry)
  return { summary, standing: getStanding(before, entry) }
}

/* ---------------------------------------------------------
 * ISHLATISH NAMUNASI
 * ---------------------------------------------------------
 *
 * // Aralash test (har safar yangi 30 ta)
 * const quiz = buildMixedQuiz({ topicId: 'm1t1' })
 *
 * // Daraja bo‘yicha test
 * const easy = buildLevelQuiz('m1t1', 'easy')   // 30 ta
 * const keys = buildLevelQuiz('m1t1', 'case')   // 10 ta
 *
 * // Har bir javobda
 * const fb = checkAnswer(quiz[i], chosenIndex, streak)
 *
 * // Test oxirida
 * const store = new LocalLeaderboardStore()
 * const { summary, standing } = await submitAndGetStanding(
 *   store, { id: userId, name: userName }, 'm1t1:aralash', answers, seconds,
 * )
 * // standing.message → «🥇 Siz 128 kishi orasida 1-o‘rindasiz!»
 */
