import { NextResponse } from 'next/server'
import { askAI } from '@/lib/ai'
import { getUser, normalizePhone, saveUser } from '@/lib/users'

/*
 * =========================================================
 * TELEGRAM WEBHOOK
 * ---------------------------------------------------------
 * Vercel Environment Variables:
 *
 *   TELEGRAM_BOT_TOKEN        (BotFather bergan token)
 *   TELEGRAM_WEBHOOK_SECRET   (o‘zingiz o‘ylab topgan uzun parol)
 *   ANTHROPIC_API_KEY
 *   + Redis (Upstash) o‘zgaruvchilari — lib/users.ts ga qarang
 * =========================================================
 */

export const maxDuration = 60

type TelegramUpdate = {
  message?: {
    chat: { id: number }
    from?: { id: number; first_name?: string; last_name?: string }
    text?: string
    contact?: {
      phone_number: string
      first_name?: string
      user_id?: number
    }
  }
}

const REGISTER_PROMPT = `Assalomu alaykum! 👋

"Menejerlik" botidan foydalanish uchun avval telefon raqamingizni yuborishingiz kerak.

Raqam faqat ro‘yxatdan o‘tkazish va natijalaringizni saqlash uchun ishlatiladi.

Pastdagi "📱 Telefon raqamni yuborish" tugmasini bosing.`

const WELCOME = `Rahmat, ro‘yxatdan o‘tdingiz! ✅

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
 */
const lastRequest = new Map<number, number>()

function tooFast(userId: number): boolean {
  const now = Date.now()
  const prev = lastRequest.get(userId) ?? 0

  lastRequest.set(userId, now)

  return now - prev < 5000
}

async function telegram(method: string, payload: Record<string, unknown>) {
  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token) {
    console.error('TELEGRAM_BOT_TOKEN kiritilmagan')
    return
  }

  await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

function sendMessage(
  chatId: number,
  text: string,
  extra: Record<string, unknown> = {},
) {
  return telegram('sendMessage', {
    chat_id: chatId,
    text: text.slice(0, 4000), // Telegram chegarasi: 4096
    ...extra,
  })
}

/** Telefon raqamini yuborish tugmasi (Telegram'ning o‘z tugmasi) */
const CONTACT_KEYBOARD = {
  reply_markup: {
    keyboard: [[{ text: '📱 Telefon raqamni yuborish', request_contact: true }]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
}

/** Ro‘yxatdan o‘tgach tugmani olib tashlaydi */
const REMOVE_KEYBOARD = {
  reply_markup: { remove_keyboard: true },
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

  if (!message) {
    return NextResponse.json({ ok: true })
  }

  const chatId = message.chat.id
  const userId = message.from?.id ?? chatId
  const text = message.text?.trim()

  try {
    const user = await getUser(userId)

    /*
     * 1-QADAM: telefon raqami majburiy.
     * Raqam yuborilmaguncha bot boshqa hech narsaga javob bermaydi.
     */
    if (!user) {
      if (message.contact) {
        // Boshqa odamning kontaktini yuborib qo‘ymasligi uchun tekshiramiz
        if (message.contact.user_id !== userId) {
          await sendMessage(
            chatId,
            'Iltimos, faqat o‘zingizning raqamingizni yuboring. Pastdagi tugmadan foydalaning. 👇',
            CONTACT_KEYBOARD,
          )
        } else {
          const name =
            [message.from?.first_name, message.from?.last_name]
              .filter(Boolean)
              .join(' ') || 'Foydalanuvchi'

          await saveUser({
            id: userId,
            name,
            phone: normalizePhone(message.contact.phone_number),
            registeredAt: new Date().toISOString(),
          })

          await sendMessage(chatId, WELCOME, REMOVE_KEYBOARD)
        }
      } else {
        await sendMessage(chatId, REGISTER_PROMPT, CONTACT_KEYBOARD)
      }

      return NextResponse.json({ ok: true })
    }

    /*
     * 2-QADAM: ro‘yxatdan o‘tgan foydalanuvchi
     */
    if (!text) {
      return NextResponse.json({ ok: true })
    }

    if (text === '/start') {
      await sendMessage(chatId, WELCOME)
    } else if (text === '/help') {
      await sendMessage(chatId, HELP)
    } else if (tooFast(userId)) {
      await sendMessage(
        chatId,
        'Iltimos, bir necha soniya kutib, qayta yozing. ⏳',
      )
    } else {
      await telegram('sendChatAction', { chat_id: chatId, action: 'typing' })

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
