/*
 * =========================================================
 * FOYDALANUVCHILAR + REFERRAL TIZIMI
 * ---------------------------------------------------------
 * Menejerlik by Nurmuhammad
 *
 * Vazifalar:
 * 1. Foydalanuvchini telefon raqami bilan ro‘yxatdan o‘tkazish
 * 2. Foydalanuvchini doimiy Redis bazasida saqlash
 * 3. Referral orqali yangi foydalanuvchilarni hisoblash
 * 4. Bir foydalanuvchini ikki marta referral sifatida hisoblamaslik
 * 5. Kim taklif qilganini saqlash
 * 6. 5 ta referral bajarilganini tekshirish
 *
 * Redis:
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 *
 * yoki:
 *   KV_REST_API_URL
 *   KV_REST_API_TOKEN
 * =========================================================
 */

export type BotUser = {
  id: number
  name: string
  phone: string
  registeredAt: string

  /**
   * Foydalanuvchini kim taklif qilgani.
   *
   * Masalan:
   * referredBy: 123456789
   */
  referredBy?: number
}

/*
 * =========================================================
 * REDIS
 * =========================================================
 */

const REDIS_URL =
  process.env.UPSTASH_REDIS_REST_URL ??
  process.env.KV_REST_API_URL

const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ??
  process.env.KV_REST_API_TOKEN

/*
 * Redis mavjud bo‘lmasa vaqtinchalik xotira.
 *
 * Production uchun Redis ishlatilishi kerak.
 */
const memory = new Map<string, string>()

let warned = false

async function redis(
  command: Array<string | number>,
): Promise<unknown> {
  if (!REDIS_URL || !REDIS_TOKEN) {
    throw new Error('Redis konfiguratsiyasi mavjud emas.')
  }

  const response = await fetch(REDIS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(command),
  })

  if (!response.ok) {
    throw new Error(`Redis xatosi: ${response.status}`)
  }

  const data = (await response.json()) as {
    result?: unknown
  }

  return data.result
}

function hasRedis(): boolean {
  if (REDIS_URL && REDIS_TOKEN) {
    return true
  }

  if (!warned) {
    console.warn(
      'Redis ulanmagan: ma’lumotlar vaqtinchalik xotirada saqlanmoqda.',
    )

    warned = true
  }

  return false
}

/*
 * =========================================================
 * TELEFON
 * =========================================================
 */

/**
 * Telefon raqamini yagona ko‘rinishga keltiradi.
 *
 * Masalan:
 * 90 123 45 67
 * +998 90 123 45 67
 *
 * natija:
 * +998901234567
 */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/[^\d]/g, '')

  return `+${digits}`
}

/*
 * =========================================================
 * USER
 * =========================================================
 */

/**
 * Foydalanuvchini ID orqali olish.
 */
export async function getUser(
  id: number,
): Promise<BotUser | null> {
  const key = `user:${id}`

  const raw = hasRedis()
    ? ((await redis(['GET', key])) as string | null)
    : (memory.get(key) ?? null)

  if (!raw) {
    return null
  }

  try {
    return JSON.parse(raw) as BotUser
  } catch {
    return null
  }
}

/**
 * Foydalanuvchini saqlash.
 */
export async function saveUser(
  user: BotUser,
): Promise<void> {
  const key = `user:${user.id}`
  const value = JSON.stringify(user)

  if (hasRedis()) {
    await redis(['SET', key, value])

    /*
     * Barcha foydalanuvchilar ID larini alohida SET da saqlaymiz.
     */
    await redis(['SADD', 'users', user.id])
  } else {
    memory.set(key, value)
  }
}

/*
 * =========================================================
 * REFERRAL
 * =========================================================
 */

/**
 * Referral strukturasi:
 *
 * referrals:123456789
 *
 * ichida:
 *
 * 987654321
 * 555555555
 * 444444444
 *
 * kabi taklif qilingan yangi foydalanuvchilar ID si turadi.
 *
 * Redis SET ishlatilgani uchun bir xil ID ikki marta
 * qo‘shilsa ham faqat bir marta hisoblanadi.
 */

/**
 * Foydalanuvchiga referralni biriktirish.
 *
 * Muhim:
 * - foydalanuvchi o‘zini o‘zi taklif qila olmaydi;
 * - foydalanuvchi faqat bir marta referral bo‘la oladi;
 * - allaqachon ro‘yxatdan o‘tgan foydalanuvchi yangi referral
 *   sifatida hisoblanmaydi.
 *
 * Natija:
 * true  = referral muvaffaqiyatli qo‘shildi
 * false = qo‘shilmadi
 */
export async function addReferral(
  referrerId: number,
  referredUserId: number,
): Promise<boolean> {
  /*
   * O‘zini o‘zi taklif qilishni bloklash.
   */
  if (referrerId === referredUserId) {
    return false
  }

  /*
   * Yangi foydalanuvchi allaqachon ro‘yxatdan o‘tganmi?
   *
   * Agar ro‘yxatdan o‘tgan bo‘lsa, uni boshqa odamning
   * referraliga aylantirmaymiz.
   */
  const existingUser = await getUser(referredUserId)

  if (existingUser) {
    return false
  }

  const referralKey = `referrer-of:${referredUserId}`

  if (hasRedis()) {
    /*
     * SETNX:
     *
     * Foydalanuvchi uchun referrer faqat birinchi marta yoziladi.
     *
     * 1 = muvaffaqiyatli
     * 0 = oldin yozilgan
     */
    const result = await redis([
      'SET',
      referralKey,
      referrerId,
      'NX',
    ])

    if (result !== 'OK') {
      return false
    }

    /*
     * Referrerning referral SET iga yangi user qo‘shiladi.
     */
    await redis([
      'SADD',
      `referrals:${referrerId}`,
      referredUserId,
    ])

    return true
  }

  /*
   * =======================================================
   * TEMPORARY MEMORY MODE
   * =======================================================
   */

  if (memory.has(referralKey)) {
    return false
  }

  memory.set(referralKey, String(referrerId))

  const referralListKey = `referrals:${referrerId}`

  const current = memory.get(referralListKey)

  const ids = current
    ? current.split(',').filter(Boolean)
    : []

  if (!ids.includes(String(referredUserId))) {
    ids.push(String(referredUserId))
  }

  memory.set(referralListKey, ids.join(','))

  return true
}

/**
 * Foydalanuvchi kim tomonidan taklif qilinganini olish.
 */
export async function getReferrer(
  userId: number,
): Promise<number | null> {
  const key = `referrer-of:${userId}`

  const raw = hasRedis()
    ? ((await redis(['GET', key])) as string | null)
    : (memory.get(key) ?? null)

  if (!raw) {
    return null
  }

  const id = Number(raw)

  return Number.isFinite(id) ? id : null
}

/**
 * Foydalanuvchining nechta referral yig‘ganini olish.
 */
export async function getReferralCount(
  userId: number,
): Promise<number> {
  if (hasRedis()) {
    return Number(
      await redis([
        'SCARD',
        `referrals:${userId}`,
      ]),
    )
  }

  const key = `referrals:${userId}`
  const raw = memory.get(key)

  if (!raw) {
    return 0
  }

  return raw
    .split(',')
    .filter(Boolean).length
}

/**
 * 5 ta referral talabini tekshirish.
 */
export async function hasFiveReferrals(
  userId: number,
): Promise<boolean> {
  const count = await getReferralCount(userId)

  return count >= 5
}

/**
 * Referral holatini to‘liq qaytaradi.
 */
export async function getReferralStatus(
  userId: number,
): Promise<{
  count: number
  required: number
  completed: boolean
  remaining: number
}> {
  const required = 5

  const count = await getReferralCount(userId)

  return {
    count,
    required,
    completed: count >= required,
    remaining: Math.max(0, required - count),
  }
}

/*
 * =========================================================
 * BARCHA FOYDALANUVCHILAR SONI
 * =========================================================
 */

/**
 * Jami ro‘yxatdan o‘tgan foydalanuvchilar soni.
 */
export async function countUsers(): Promise<number> {
  if (hasRedis()) {
    return Number(
      await redis(['SCARD', 'users']),
    )
  }

  return [...memory.keys()]
    .filter((key) => key.startsWith('user:'))
    .length
}

/*
 * =========================================================
 * REFERRAL STATISTIKA
 * =========================================================
 */

/**
 * Foydalanuvchining referral bo‘yicha to‘liq statistikasi.
 */
export async function getReferralStats(
  userId: number,
): Promise<{
  invited: number
  required: number
  remaining: number
  completed: boolean
  referralLink: string
}> {
  const invited = await getReferralCount(userId)

  const required = 5

  return {
    invited,
    required,
    remaining: Math.max(0, required - invited),
    completed: invited >= required,

    referralLink:
      `https://t.me/topmenejerbot?start=ref_${userId}`,
  }
}
