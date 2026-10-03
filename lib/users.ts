/*
 * =========================================================
 * FOYDALANUVCHILAR (telefon raqami bilan ro‘yxatdan o‘tganlar)
 * ---------------------------------------------------------
 * Vercel serverlari har so‘rovda qayta ishga tushishi mumkin,
 * shuning uchun ma’lumot doimiy bazada saqlanishi kerak.
 * Bu fayl Upstash Redis (Vercel Marketplace orqali ulanadi)
 * bilan REST orqali ishlaydi — qo‘shimcha paket kerak emas.
 *
 * Kerakli o‘zgaruvchilar (Redis ulanganda Vercel o‘zi qo‘shadi):
 *   UPSTASH_REDIS_REST_URL  va  UPSTASH_REDIS_REST_TOKEN
 *   yoki
 *   KV_REST_API_URL  va  KV_REST_API_TOKEN
 *
 * Baza ulanmagan bo‘lsa, vaqtinchalik xotira ishlatiladi
 * (server qayta ishga tushganda ma’lumot yo‘qoladi).
 * =========================================================
 */

export type BotUser = {
  id: number // Telegram ID
  name: string
  phone: string
  registeredAt: string // ISO
}

const REDIS_URL =
  process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL

const REDIS_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN

const memory = new Map<string, string>()

let warned = false

async function redis(command: Array<string | number>): Promise<unknown> {
  const response = await fetch(REDIS_URL as string, {
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

  const data = (await response.json()) as { result?: unknown }

  return data.result
}

function hasRedis(): boolean {
  if (REDIS_URL && REDIS_TOKEN) return true

  if (!warned) {
    console.warn(
      'Redis ulanmagan: foydalanuvchilar vaqtinchalik xotirada saqlanmoqda.',
    )
    warned = true
  }

  return false
}

/** Telefon raqamini yagona ko‘rinishga keltiradi: +998901234567 */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/[^\d]/g, '')

  return `+${digits}`
}

export async function getUser(id: number): Promise<BotUser | null> {
  const key = `user:${id}`

  const raw = hasRedis()
    ? ((await redis(['GET', key])) as string | null)
    : (memory.get(key) ?? null)

  if (!raw) return null

  try {
    return JSON.parse(raw) as BotUser
  } catch {
    return null
  }
}

export async function saveUser(user: BotUser): Promise<void> {
  const key = `user:${user.id}`
  const value = JSON.stringify(user)

  if (hasRedis()) {
    await redis(['SET', key, value])
    await redis(['SADD', 'users', user.id])
  } else {
    memory.set(key, value)
    memory.set('users:count', String(memory.size))
  }
}

/** Jami ro‘yxatdan o‘tgan foydalanuvchilar soni */
export async function countUsers(): Promise<number> {
  if (hasRedis()) {
    return Number(await redis(['SCARD', 'users']))
  }

  return [...memory.keys()].filter((k) => k.startsWith('user:')).length
}
