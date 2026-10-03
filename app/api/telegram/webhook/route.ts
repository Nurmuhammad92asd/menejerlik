import { NextResponse } from 'next/server'
import { askAI } from '@/lib/ai'
import {
  getUser,
  normalizePhone,
  saveUser,
} from '@/lib/users'

/*
 * =========================================================
 * MENEJERLIK TELEGRAM WEBHOOK
 * =========================================================
 *
 * ENV:
 *
 * TELEGRAM_BOT_TOKEN
 * TELEGRAM_WEBHOOK_SECRET
 *
 * Vazifalar:
 *
 * 1. Telegram foydalanuvchilarini boshqarish
 * 2. Telefon orqali ro'yxatdan o'tkazish
 * 3. AI savollarga javob berish
 * 4. Guruh chat ID sini aniqlash
 * 5. Guruh xabarlarini qabul qilish
 *
 * Muhim:
 * Avtomatik testlarni ishga tushirish Cron orqali
 * alohida scheduled Worker handlerda amalga oshiriladi.
 * =========================================================
 */

export const maxDuration = 60

type TelegramChat = {
  id: number
  type?: string
  title?: string
  username?: string
}

type TelegramUser = {
  id: number
  first_name?: string
  last_name?: string
  username?: string
}

type TelegramUpdate = {
  update_id?: number

  message?: {
    message_id?: number

    chat: TelegramChat

    from?: TelegramUser

    text?: string

    contact?: {
      phone_number: string
      first_name?: string
      user_id?: number
    }
  }
}

/*
 * =========================================================
 * MATNLAR
 * =========================================================
 */

const REGISTER_PROMPT = `Assalomu alaykum! 👋

"Menejerlik by Nurmuhammad" platformasidan foydalanish uchun avval telefon raqamingizni yuboring.

📱 Raqamingiz natijalarni saqlash va foydalanuvchini aniqlash uchun ishlatiladi.

Quyidagi tugmani bosing 👇`

const WELCOME = `🎓 MENEJERLIK BY NURMUHAMMAD

Assalomu alaykum! 👋

Siz muvaffaqiyatli ro'yxatdan o'tdingiz.

Endi siz:

📝 Menejerlik testlarini ishlashingiz
📊 Natijalaringizni ko'rishingiz
⚡ XP to'plashingiz
🏆 Reytingda yuqorilashingiz mumkin.

Har kuni avtomatik testlar o'tkaziladi.

⏰ 05:00 — 23:00

📚 Har soatda yangi test
⏱ 50 daqiqa — test
☕ 10 daqiqa — dam olish

Omad tilayman! 🚀`

const HELP = `📚 MENEJERLIK BOT — YORDAM

Savolingizni oddiy qilib yozing.

Masalan:

• Ta'lim muassasasini strategik boshqarish nima?
• Rahbarning asosiy kompetensiyalari qaysilar?
• Korrupsiyaviy xavflarni qanday kamaytirish mumkin?
• Ta'lim sifatini qanday boshqarish kerak?

Bot sizga tushunarli tarzda javob beradi.`

/*
 * =========================================================
 * TELEGRAM API
 * =========================================================
 */

async function telegram(
  method: string,
  payload: Record<string, unknown>,
) {
  const token =
    process.env.TELEGRAM_BOT_TOKEN

  if (!token) {
    console.error(
      'TELEGRAM_BOT_TOKEN kiritilmagan',
    )

    return null
  }

  const response = await fetch(
    `https://api.telegram.org/bot${token}/${method}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  )

  let data: unknown = null

  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok) {
    console.error(
      'Telegram API HTTP ERROR:',
      response.status,
      data,
    )
  }

  return data
}

/*
 * =========================================================
 * SEND MESSAGE
 * =========================================================
 */

async function sendMessage(
  chatId: number,
  text: string,
  extra: Record<string, unknown> = {},
) {
  return telegram('sendMessage', {
    chat_id: chatId,

    text: text.slice(0, 4000),

    ...extra,
  })
}

/*
 * =========================================================
 * TELEFON KLAVIATURASI
 * =========================================================
 */

const CONTACT_KEYBOARD = {
  reply_markup: {
    keyboard: [
      [
        {
          text: '📱 Telefon raqamni yuborish',
          request_contact: true,
        },
      ],
    ],

    resize_keyboard: true,

    one_time_keyboard: true,
  },
}

const REMOVE_KEYBOARD = {
  reply_markup: {
    remove_keyboard: true,
  },
}

/*
 * =========================================================
 * ANTI SPAM
 * =========================================================
 */

const lastRequest =
  new Map<number, number>()

function tooFast(
  userId: number,
): boolean {
  const now = Date.now()

  const previous =
    lastRequest.get(userId) ?? 0

  lastRequest.set(
    userId,
    now,
  )

  return (
    now - previous < 5000
  )
}

/*
 * =========================================================
 * GURUH CHAT ID
 * =========================================================
 *
 * Bot guruhda admin bo'lsa,
 * guruhdan kelgan har qanday xabar orqali
 * chat ID aniqlanadi.
 *
 * TELEGRAM_GROUP_ID mavjud bo'lsa,
 * shu ID ustuvor hisoblanadi.
 * =========================================================
 */

function isGroupChat(
  chat: TelegramChat,
): boolean {
  return (
    chat.type === 'group' ||
    chat.type === 'supergroup'
  )
}

function rememberGroup(
  chat: TelegramChat,
) {
  if (!isGroupChat(chat)) {
    return
  }

  console.log(
    '================================',
  )

  console.log(
    'TELEGRAM GROUP ANIQLANDI',
  )

  console.log({
    chatId: chat.id,
    title: chat.title,
    username: chat.username,
    type: chat.type,
  })

  console.log(
    '================================',
  )
}

/*
 * =========================================================
 * POST WEBHOOK
 * =========================================================
 */

export async function POST(
  request: Request,
) {
  /*
   * Telegram secret token tekshiruvi
   */

  const secret =
    process.env.TELEGRAM_WEBHOOK_SECRET

  if (
    secret &&
    request.headers.get(
      'x-telegram-bot-api-secret-token',
    ) !== secret
  ) {
    return NextResponse.json(
      {
        ok: false,
      },
      {
        status: 401,
      },
    )
  }

  /*
   * Update o'qish
   */

  let update: TelegramUpdate

  try {
    update =
      (await request.json()) as TelegramUpdate
  } catch {
    return NextResponse.json({
      ok: true,
    })
  }

  /*
   * Message bo'lmasa
   */

  const message =
    update.message

  if (!message) {
    return NextResponse.json({
      ok: true,
    })
  }

  /*
   * Chat
   */

  const chat =
    message.chat

  const chatId =
    chat.id

  const userId =
    message.from?.id ??
    chatId

  const text =
    message.text?.trim()

  /*
   * GURUHNI ANIQLASH
   */

  if (
    isGroupChat(chat)
  ) {
    rememberGroup(chat)

    /*
     * Guruhdagi /test komandasi
     * hozircha diagnostika uchun.
     */

    if (
      text === '/test'
    ) {
      await sendMessage(
        chatId,
        `🤖 MENEJERLIK BOT

✅ Bot guruhni ko'rmoqda.

🏷 Guruh:
${chat.title ?? 'Nomaʼlum'}

🆔 Chat ID:
${chat.id}

⏰ Avtomatik test tizimi:
05:00 — 23:00

📝 Har soatda:
50 daqiqa TEST
10 daqiqa DAM OLISH

🏆 Reyting avtomatik chiqariladi.`,
      )
    }

    /*
     * Guruhdagi oddiy xabarlar
     * shaxsiy AI dialogiga tushmasin.
     */

    return NextResponse.json({
      ok: true,
    })
  }

  /*
   * =======================================================
   * SHAXSIY CHAT
   * =======================================================
   */

  try {
    const user =
      await getUser(userId)

    /*
     * RO'YXATDAN O'TMAGAN
     */

    if (!user) {
      /*
       * Telefon yuborildi
       */

      if (
        message.contact
      ) {
        /*
         * Faqat o'z telefonini
         * yuborishini tekshiramiz.
         */

        if (
          message.contact.user_id !==
          userId
        ) {
          await sendMessage(
            chatId,

            `⚠️ Iltimos, faqat o'zingizning telefon raqamingizni yuboring.

Pastdagi tugmadan foydalaning 👇`,

            CONTACT_KEYBOARD,
          )
        } else {
          const name =
            [
              message.from?.first_name,
              message.from?.last_name,
            ]
              .filter(Boolean)
              .join(' ')
              .trim() ||
            'Foydalanuvchi'

          await saveUser({
            id: userId,

            name,

            phone:
              normalizePhone(
                message.contact.phone_number,
              ),

            registeredAt:
              new Date().toISOString(),
          })

          await sendMessage(
            chatId,

            WELCOME,

            REMOVE_KEYBOARD,
          )
        }

        return NextResponse.json({
          ok: true,
        })
      }

      /*
       * Telefon hali yuborilmagan
       */

      await sendMessage(
        chatId,

        REGISTER_PROMPT,

        CONTACT_KEYBOARD,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * Matn bo'lmasa
     */

    if (!text) {
      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * START
     */

    if (
      text === '/start'
    ) {
      await sendMessage(
        chatId,
        WELCOME,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * HELP
     */

    if (
      text === '/help'
    ) {
      await sendMessage(
        chatId,
        HELP,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * AI anti-spam
     */

    if (
      tooFast(userId)
    ) {
      await sendMessage(
        chatId,

        `⏳ Bir necha soniya kuting va qayta yuboring.`,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * AI typing
     */

    await telegram(
      'sendChatAction',
      {
        chat_id: chatId,
        action: 'typing',
      },
    )

    /*
     * AI javob
     */

    const answer =
      await askAI(text)

    await sendMessage(
      chatId,
      answer,
    )
  } catch (error) {
    console.error(
      'WEBHOOK XATOSI:',
      error,
    )

    /*
     * Foydalanuvchiga server xatosini
     * texnik tafsilotlarsiz ko'rsatamiz.
     */

    await sendMessage(
      chatId,

      `⚠️ Hozircha texnik xatolik yuz berdi.

Iltimos, birozdan keyin qayta urinib ko'ring.`,
    )
  }

  /*
   * Telegramga 200
   */

  return NextResponse.json({
    ok: true,
  })
}

/*
 * =========================================================
 * GET
 * =========================================================
 */

export async function GET() {
  return NextResponse.json({
    ok: true,

    service:
      'Menejerlik Telegram Webhook',

    status:
      'working',

    schedule:
      '05:00-23:00',

    test:
      '50 minutes',

    rest:
      '10 minutes',

    ranking:
      'automatic',
  })
}
