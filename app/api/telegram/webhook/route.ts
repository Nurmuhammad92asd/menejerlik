import { NextResponse } from 'next/server'
import { askAI } from '@/lib/ai'

/*
 * =========================================================
 * TELEGRAM WEBHOOK
 * ---------------------------------------------------------
 * Vercel Environment Variables:
 *
 *   TELEGRAM_BOT_TOKEN        (BotFather bergan token)
 *   TELEGRAM_WEBHOOK_SECRET   (o‘zingiz o‘ylab topgan uzun parol)
 *   ANTHROPIC_API_KEY
 * =========================================================
 */

export const maxDuration = 60

type TelegramUpdate = {
  message?: {
    chat: { id: number }
    from?: { id: number; first_name?: string }
    text?: string
  }
}

const WELCOME = `Assalomu alaykum! 👋

Men "Menejerlik" botining o‘qituvchi yordamchisiman.

Ta’lim muassasasini boshqarish bo‘yicha istalgan savolingizni yozing — sodda tushuntirib beraman.

Buyruqlar:
/start — boshlash
/help — yordam`

const HELP = `Savolingizni oddiy so‘z bilan yozing, masalan:

• Attestatsiya va akkreditatsiya farqi nima?
• Demokratik boshqaruvda direktor mas’uliyati qanday?
• Nazoratdan keyin teskari aloqa qanday beriladi?`

/*
 * Oddiy himoya: bir foydalanuvchi 5 soniyada bittadan ortiq
 * so‘rov yubora olmaydi (AI xarajatini nazorat qilish uchun).
 * Eslatma: bu xotira Vercel serverlari orasida bo‘lishilmaydi,
 * shuning uchun taxminiy himoya.
 */
const lastRequest = new Map<number, number>()

function tooFast(userId: number): boolean {
  const now = Date.now()
  const prev = lastRequest.get(userId) ?? 0

  lastRequest.set(userId, now)

  return now - prev < 5000
}

async function sendMessage(chatId: number, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token) {
    console.error('TELEGRAM_BOT_TOKEN kiritilmagan')
    return
  }

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text.slice(0, 4000), // Telegram chegarasi: 4096
    }),
  })
}

async function sendTyping(chatId: number) {
  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token) return

  await fetch(`https://api.telegram.org/bot${token}/sendChatAction`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, action: 'typing' }),
  })
}

export async function POST(request: Request) {
  // Faqat Telegram yuborgan so‘rovlarni qabul qilamiz
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET

  if (
    secret &&
    request.headers.get('x-telegram-bot-api-secret-token') !== secret
  ) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  let update: TelegramUpdate

  try {
    update = (await request.json()) as TelegramUpdate
  } catch {
    return NextResponse.json({ ok: true })
  }

  const message = update.message
  const text = message?.text?.trim()

  // Matn bo‘lmasa (rasm, ovoz va h.k.) e’tiborsiz qoldiramiz
  if (!message || !text) {
    return NextResponse.json({ ok: true })
  }

  const chatId = message.chat.id
  const userId = message.from?.id ?? chatId

  try {
    if (text === '/start') {
      await sendMessage(chatId, WELCOME)
    } else if (text === '/help') {
      await sendMessage(chatId, HELP)
    } else if (tooFast(userId)) {
      await sendMessage(chatId, 'Iltimos, bir necha soniya kutib, qayta yozing. ⏳')
    } else {
      await sendTyping(chatId)

      const answer = await askAI(text)

      await sendMessage(chatId, answer)
    }
  } catch (error) {
    console.error('Webhook xatosi:', error)
  }

  // Telegram qayta yubormasligi uchun doim 200 qaytaramiz
  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Webhook ishlayapti' })
}
