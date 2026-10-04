/*
 * =========================================================
 * MENEJERLIK BY NURMUHAMMAD
 * FOYDALANUVCHILAR + REFERRAL TIZIMI
 * =========================================================
 *
 * Vazifalar:
 *
 * 1. Telegram foydalanuvchisini telefon orqali ro‘yxatdan
 *    o‘tkazish.
 *
 * 2. Foydalanuvchilarni Redis'da doimiy saqlash.
 *
 * 3. Referral tizimini yuritish.
 *
 * 4. Bitta foydalanuvchini ikki marta referral sifatida
 *    hisoblamaslik.
 *
 * 5. Self-referralni bloklash.
 *
 * 6. Kim tomonidan taklif qilinganini saqlash.
 *
 * 7. Referral jarayonini telefon tasdiqlanguncha
 *    vaqtincha saqlash.
 *
 * 8. 5 ta muvaffaqiyatli referralni tekshirish.
 *
 * 9. Referral statistikasi.
 *
 * 10. Redis mavjud bo‘lmasa development uchun
 *     vaqtinchalik memory fallback.
 *
 * =========================================================
 *
 * REDIS ENV:
 *
 * UPSTASH_REDIS_REST_URL
 * UPSTASH_REDIS_REST_TOKEN
 *
 * yoki:
 *
 * KV_REST_API_URL
 * KV_REST_API_TOKEN
 *
 * =========================================================
 */

export type BotUser = {
  /**
   * Telegram user ID
   */
  id: number

  /**
   * Telegramdagi ism
   */
  name: string

  /**
   * Normalizatsiya qilingan telefon.
   *
   * Masalan:
   * +998901234567
   */
  phone: string

  /**
   * Ro‘yxatdan o‘tgan vaqt.
   */
  registeredAt: string

  /**
   * Foydalanuvchini kim taklif qilgani.
   *
   * Agar referral orqali kelmagan bo‘lsa:
   * undefined
   */
  referredBy?: number
}

/*
 * =========================================================
 * KONSTANTALAR
 * =========================================================
 */

const REQUIRED_REFERRALS = 5

/**
 * Pending referral qancha vaqt saqlanadi.
 *
 * 7 kun = 604800 soniya
 */
const PENDING_REFERRAL_TTL = 60 * 60 * 24 * 7

/**
 * Referral link uchun bot username.
 */
const BOT_USERNAME = 'topmenejerbot'

/*
 * =========================================================
 * REDIS CONFIGURATION
 * =========================================================
 */

const REDIS_URL =
  process.env.UPSTASH_REDIS_REST_URL ??
  process.env.KV_REST_API_URL

const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ??
  process.env.KV_REST_API_TOKEN

/*
 * =========================================================
 * DEVELOPMENT MEMORY
 * =========================================================
 *
 * Redis ulanmagan holatda vaqtinchalik ishlaydi.
 *
 * Eslatma:
 * Production'da Redis ishlatilishi shart.
 */

const memory = new Map<string, string>()

let warned = false

/*
 * =========================================================
 * REDIS COMMAND
 * =========================================================
 */

/**
 * Upstash Redis REST API orqali command yuboradi.
 */
async function redis(
  command: Array<string | number>,
): Promise<unknown> {
  if (!REDIS_URL || !REDIS_TOKEN) {
    throw new Error(
      'Redis konfiguratsiyasi mavjud emas.',
    )
  }

  const response = await fetch(
    REDIS_URL,
    {
      method: 'POST',

      headers: {
        Authorization: `Bearer ${REDIS_TOKEN}`,
        'content-type': 'application/json',
      },

      body: JSON.stringify(command),
    },
  )

  if (!response.ok) {
    throw new Error(
      `Redis xatosi: ${response.status}`,
    )
  }

  const data =
    (await response.json()) as {
      result?: unknown
    }

  return data.result
}

/*
 * =========================================================
 * REDIS BORLIGINI TEKSHIRISH
 * =========================================================
 */

function hasRedis(): boolean {
  if (
    REDIS_URL &&
    REDIS_TOKEN
  ) {
    return true
  }

  if (!warned) {
    console.warn(
      'Redis ulanmagan. Temporary memory mode ishlatilmoqda.',
    )

    warned = true
  }

  return false
}

/*
 * =========================================================
 * TELEFON NORMALIZATSIYASI
 * =========================================================
 */

/**
 * Telefon raqamini yagona formatga keltiradi.
 *
 * Misollar:
 *
 * 90 123 45 67
 * +998 90 123 45 67
 * 998901234567
 *
 * natija:
 *
 * +998901234567
 */
export function normalizePhone(
  phone: string,
): string {
  const digits = phone.replace(
    /[^\d]/g,
    '',
  )

  return `+${digits}`
}

/*
 * =========================================================
 * USER GET
 * =========================================================
 */

/**
 * Telegram user ID orqali foydalanuvchini oladi.
 */
export async function getUser(
  id: number,
): Promise<BotUser | null> {
  const key = `user:${id}`

  const raw = hasRedis()
    ? (
        (await redis([
          'GET',
          key,
        ])) as string | null
      )
    : (
        memory.get(key) ??
        null
      )

  if (!raw) {
    return null
  }

  try {
    return JSON.parse(
      raw,
    ) as BotUser
  } catch {
    return null
  }
}

/*
 * =========================================================
 * USER SAVE
 * =========================================================
 */

/**
 * Foydalanuvchini saqlaydi.
 *
 * Redis:
 *   user:<telegramId>
 *
 * Barcha user ID:
 *   users
 */
export async function saveUser(
  user: BotUser,
): Promise<void> {
  const key = `user:${user.id}`

  const value =
    JSON.stringify(user)

  if (hasRedis()) {
    /*
     * User ma'lumotlarini saqlash.
     */
    await redis([
      'SET',
      key,
      value,
    ])

    /*
     * User ID ni umumiy SET ga qo‘shish.
     *
     * SADD duplicate ID ni qayta qo‘shmaydi.
     */
    await redis([
      'SADD',
      'users',
      user.id,
    ])

    return
  }

  /*
   * Memory fallback.
   */
  memory.set(
    key,
    value,
  )
}

/*
 * =========================================================
 * REFERRAL:
 * ADD
 * =========================================================
 */

/**
 * Yangi foydalanuvchini referral sifatida
 * referrerga biriktiradi.
 *
 * Qoidalar:
 *
 * 1. Self-referral mumkin emas.
 *
 * 2. Foydalanuvchi oldindan ro‘yxatdan o‘tgan
 *    bo‘lsa referral hisoblanmaydi.
 *
 * 3. Bitta referred user faqat bitta referrerga
 *    tegishli bo‘lishi mumkin.
 *
 * 4. Redis SET NX orqali atomik himoya qilinadi.
 *
 * Natija:
 *
 * true  = referral qo‘shildi
 * false = referral qo‘shilmadi
 */
export async function addReferral(
  referrerId: number,
  referredUserId: number,
): Promise<boolean> {
  /*
   * -------------------------------------------------------
   * SELF REFERRAL
   * -------------------------------------------------------
   */

  if (
    referrerId ===
    referredUserId
  ) {
    return false
  }

  /*
   * -------------------------------------------------------
   * REFERRER O‘ZI MAVJUDMI?
   * -------------------------------------------------------
   *
   * Faqat ro‘yxatdan o‘tgan user referral bera oladi.
   */

  const referrer =
    await getUser(referrerId)

  if (!referrer) {
    return false
  }

  /*
   * -------------------------------------------------------
   * REFERRED USER ALLAQACHON REGISTER BO‘LGANMI?
   * -------------------------------------------------------
   */

  const existingUser =
    await getUser(
      referredUserId,
    )

  if (existingUser) {
    return false
  }

  /*
   * -------------------------------------------------------
   * UNIQUE REFERRAL KEY
   * -------------------------------------------------------
   *
   * referrer-of:<userId>
   *
   * Bu key orqali bitta user faqat
   * bir marta referral bo‘lishi mumkin.
   */

  const referralKey =
    `referrer-of:${referredUserId}`

  /*
   * =======================================================
   * REDIS MODE
   * =======================================================
   */

  if (hasRedis()) {
    /*
     * SET NX:
     *
     * Faqat key mavjud bo‘lmasa yozadi.
     *
     * "OK"  -> yangi referral
     * null  -> oldin referral mavjud
     */
    const result =
      await redis([
        'SET',
        referralKey,
        referrerId,
        'NX',
      ])

    if (result !== 'OK') {
      return false
    }

    /*
     * Referrerning referral SET'iga
     * referred userni qo‘shamiz.
     *
     * referrals:<referrerId>
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
   * MEMORY MODE
   * =======================================================
   */

  if (
    memory.has(
      referralKey,
    )
  ) {
    return false
  }

  /*
   * Referral ownerni saqlaymiz.
   */
  memory.set(
    referralKey,
    String(referrerId),
  )

  /*
   * Referral list.
   */
  const referralListKey =
    `referrals:${referrerId}`

  const current =
    memory.get(
      referralListKey,
    )

  const ids =
    current
      ? current
          .split(',')
          .filter(Boolean)
      : []

  /*
   * Duplicate himoyasi.
   */
  if (
    !ids.includes(
      String(referredUserId),
    )
  ) {
    ids.push(
      String(referredUserId),
    )
  }

  memory.set(
    referralListKey,
    ids.join(','),
  )

  return true
}

/*
 * =========================================================
 * REFERRERNI OLISH
 * =========================================================
 */

/**
 * Foydalanuvchini kim taklif qilganini qaytaradi.
 */
export async function getReferrer(
  userId: number,
): Promise<number | null> {
  const key =
    `referrer-of:${userId}`

  const raw = hasRedis()
    ? (
        (await redis([
          'GET',
          key,
        ])) as string | null
      )
    : (
        memory.get(key) ??
        null
      )

  if (!raw) {
    return null
  }

  const id =
    Number(raw)

  if (
    !Number.isFinite(id) ||
    id <= 0
  ) {
    return null
  }

  return id
}

/*
 * =========================================================
 * REFERRAL COUNT
 * =========================================================
 */

/**
 * Foydalanuvchining nechta
 * muvaffaqiyatli referral yig‘ganini hisoblaydi.
 */
export async function getReferralCount(
  userId: number,
): Promise<number> {
  if (hasRedis()) {
    const count =
      await redis([
        'SCARD',
        `referrals:${userId}`,
      ])

    return Number(count) || 0
  }

  /*
   * Memory mode.
   */
  const key =
    `referrals:${userId}`

  const raw =
    memory.get(key)

  if (!raw) {
    return 0
  }

  return raw
    .split(',')
    .filter(Boolean)
    .length
}

/*
 * =========================================================
 * FIVE REFERRALS
 * =========================================================
 */

/**
 * 5 ta referral bajarilganmi?
 */
export async function hasFiveReferrals(
  userId: number,
): Promise<boolean> {
  const count =
    await getReferralCount(
      userId,
    )

  return (
    count >=
    REQUIRED_REFERRALS
  )
}

/*
 * =========================================================
 * REFERRAL STATUS
 * =========================================================
 */

/**
 * Referral holatini qaytaradi.
 */
export async function getReferralStatus(
  userId: number,
): Promise<{
  count: number
  required: number
  completed: boolean
  remaining: number
}> {
  const count =
    await getReferralCount(
      userId,
    )

  return {
    count,

    required:
      REQUIRED_REFERRALS,

    completed:
      count >=
      REQUIRED_REFERRALS,

    remaining:
      Math.max(
        0,
        REQUIRED_REFERRALS -
          count,
      ),
  }
}

/*
 * =========================================================
 * REFERRAL STATISTICS
 * =========================================================
 */

/**
 * Foydalanuvchining referral statistikasi.
 *
 * Masalan:
 *
 * {
 *   invited: 3,
 *   required: 5,
 *   remaining: 2,
 *   completed: false,
 *   referralLink:
 *     "https://t.me/topmenejerbot?start=ref_123"
 * }
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
  const invited =
    await getReferralCount(
      userId,
    )

  return {
    invited,

    required:
      REQUIRED_REFERRALS,

    remaining:
      Math.max(
        0,
        REQUIRED_REFERRALS -
          invited,
      ),

    completed:
      invited >=
      REQUIRED_REFERRALS,

    referralLink:
      `https://t.me/${BOT_USERNAME}?start=ref_${userId}`,
  }
}

/*
 * =========================================================
 * PENDING REFERRAL
 * =========================================================
 *
 * Bu juda muhim.
 *
 * Foydalanuvchi referral link orqali botga kiradi:
 *
 * /start ref_123456
 *
 * Lekin hali telefon bermagan bo‘ladi.
 *
 * Shuning uchun referralni darhol yakuniy referral
 * sifatida hisoblamaymiz.
 *
 * Avval:
 *
 * pending-ref:<userId>
 *
 * ko‘rinishida vaqtincha saqlaymiz.
 *
 * Telefon ro‘yxatdan o‘tkazilgandan keyin:
 *
 * pending referral
 *       ↓
 * addReferral()
 *       ↓
 * haqiqiy referral
 *
 * bo‘ladi.
 *
 * TTL:
 * 7 kun.
 *
 * =========================================================
 */

/**
 * Pending referralni saqlaydi.
 *
 * Masalan:
 *
 * user 555
 * referrer 123
 *
 * Redis:
 *
 * pending-ref:555 = 123
 *
 * 7 kundan keyin avtomatik o‘chadi.
 */
export async function savePendingReferral(
  userId: number,
  referrerId: number,
): Promise<void> {
  /*
   * Self referralni umuman saqlamaymiz.
   */
  if (
    userId ===
    referrerId
  ) {
    return
  }

  /*
   * Referrer haqiqiy registered usermi?
   */
  const referrer =
    await getUser(referrerId)

  if (!referrer) {
    return
  }

  const key =
    `pending-ref:${userId}`

  /*
   * -------------------------------------------------------
   * REDIS
   * -------------------------------------------------------
   */

  if (hasRedis()) {
    /*
     * NX:
     * Birinchi referral link ustuvor.
     *
     * EX:
     * 7 kundan keyin avtomatik o‘chadi.
     */
    await redis([
      'SET',
      key,
      referrerId,
      'EX',
      PENDING_REFERRAL_TTL,
      'NX',
    ])

    return
  }

  /*
   * -------------------------------------------------------
   * MEMORY
   * -------------------------------------------------------
   *
   * Memory mode'da TTL to‘liq persistent emas.
   * Development uchun yetarli.
   */

  if (
    !memory.has(key)
  ) {
    memory.set(
      key,
      String(referrerId),
    )
  }
}

/*
 * =========================================================
 * GET PENDING REFERRAL
 * =========================================================
 */

/**
 * Foydalanuvchining pending referralini oladi.
 *
 * Agar mavjud bo‘lmasa:
 * null
 */
export async function getPendingReferral(
  userId: number,
): Promise<number | null> {
  const key =
    `pending-ref:${userId}`

  const raw = hasRedis()
    ? (
        (await redis([
          'GET',
          key,
        ])) as string | null
      )
    : (
        memory.get(key) ??
        null
      )

  if (!raw) {
    return null
  }

  const referrerId =
    Number(raw)

  if (
    !Number.isFinite(
      referrerId,
    ) ||
    referrerId <= 0
  ) {
    return null
  }

  return referrerId
}

/*
 * =========================================================
 * CLEAR PENDING REFERRAL
 * =========================================================
 */

/**
 * Pending referralni o‘chiradi.
 *
 * Odatda referral muvaffaqiyatli qayd
 * qilingandan keyin chaqiriladi.
 */
export async function clearPendingReferral(
  userId: number,
): Promise<void> {
  const key =
    `pending-ref:${userId}`

  if (hasRedis()) {
    await redis([
      'DEL',
      key,
    ])

    return
  }

  memory.delete(key)
}

/*
 * =========================================================
 * ALL USERS COUNT
 * =========================================================
 */

/**
 * Jami ro‘yxatdan o‘tgan foydalanuvchilar soni.
 */
export async function countUsers(): Promise<number> {
  if (hasRedis()) {
    const count =
      await redis([
        'SCARD',
        'users',
      ])

    return Number(count) || 0
  }

  return [
    ...memory.keys(),
  ].filter(
    (key) =>
      key.startsWith(
        'user:',
      ),
  ).length
}

/*
 * =========================================================
 * REFERRAL ACCESS HELPER
 * =========================================================
 */

/**
 * Foydalanuvchi referral talabini
 * bajargan-bajarmaganini qaytaradi.
 *
 * Bu keyinchalik webhook va Mini App
 * access control'da ishlatilishi mumkin.
 */
export async function canAccessByReferral(
  userId: number,
): Promise<boolean> {
  return hasFiveReferrals(
    userId,
  )
}

/*
 * =========================================================
 * REFERRAL REMAINING
 * =========================================================
 */

/**
 * Qancha referral qolganini qaytaradi.
 *
 * Masalan:
 *
 * 0 -> 5
 * 1 -> 4
 * 3 -> 2
 * 5 -> 0
 * 8 -> 0
 */
export async function getRemainingReferrals(
  userId: number,
): Promise<number> {
  const count =
    await getReferralCount(
      userId,
    )

  return Math.max(
    0,
    REQUIRED_REFERRALS -
      count,
  )
}
