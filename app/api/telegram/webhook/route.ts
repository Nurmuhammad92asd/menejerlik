import { NextResponse } from 'next/server'
import { askAI } from '@/lib/ai'
import {
  addReferral,
  getReferralStats,
  getUser,
  normalizePhone,
  saveUser,
  savePendingReferral,
  getPendingReferral,
  clearPendingReferral,
} from '@/lib/users'

/*
 * =========================================================
 * MENEJERLIK TELEGRAM WEBHOOK
 * =========================================================
 *
 * BOT:
 *   @topmenejerbot
 *
 * BOT ID:
 *   8747655999
 *
 * GURUH:
 *   Menejerlar super 30 jamoasi
 *
 * GROUP CHAT ID:
 *   -1003642158156
 *
 * ASOSIY TALABLAR:
 *
 * 1. Telefon orqali ro'yxatdan o'tish
 * 2. Guruhga majburiy a'zolik
 * 3. 5 ta yangi foydalanuvchini taklif qilish
 * 4. 5/5 + guruh a'zoligi bajarilgandan keyin testga kirish
 * 5. Referral faqat yangi ro'yxatdan o'tgan foydalanuvchi
 *    bo'lgandan keyin hisoblanadi
 * 6. Bir foydalanuvchi ikki marta referral hisoblanmaydi
 *
 * ENV:
 *
 * TELEGRAM_BOT_TOKEN
 * TELEGRAM_WEBHOOK_SECRET
 *
 * TELEGRAM_GROUP_URL
 *
 * Masalan:
 * https://t.me/menejerlar_super_30
 *
 * Agar guruh private bo'lsa:
 * https://t.me/+xxxxxxxxxxxx
 *
 * =========================================================
 */

export const maxDuration = 60

/*
 * =========================================================
 * ASOSIY SOZLAMALAR
 * =========================================================
 */

const BOT_USERNAME = 'topmenejerbot'

const GROUP_CHAT_ID = '-1003642158156'

const MINI_APP_URL =
  process.env.MINI_APP_URL ??
  'https://menejerlik.vercel.app'

const GROUP_URL =
  process.env.TELEGRAM_GROUP_URL ?? ''

const REQUIRED_REFERRALS = 5

/*
 * =========================================================
 * TELEGRAM TYPES
 * =========================================================
 */

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

type TelegramContact = {
  phone_number: string
  first_name?: string
  user_id?: number
}

type TelegramMessage = {
  message_id?: number
  chat: TelegramChat
  from?: TelegramUser
  text?: string
  contact?: TelegramContact
}

type TelegramCallbackQuery = {
  id: string
  from: TelegramUser
  data?: string
  message?: TelegramMessage
}

type TelegramUpdate = {
  update_id?: number

  message?: TelegramMessage

  callback_query?: TelegramCallbackQuery
}

/*
 * =========================================================
 * MATNLAR
 * =========================================================
 */

const REGISTER_PROMPT = `🎓 MENEJERLIK BY NURMUHAMMAD

Assalomu alaykum! 👋

Platformadan foydalanish uchun avval telefon raqamingizni tasdiqlang.

📱 Raqamingiz natijalarni saqlash va foydalanuvchini aniqlash uchun kerak.

Quyidagi tugmani bosing 👇`

const HELP = `📚 MENEJERLIK BOT — YORDAM

Botdan foydalanish uchun:

1️⃣ Guruhga a'zo bo'ling
2️⃣ 5 ta yangi foydalanuvchini taklif qiling
3️⃣ "🔄 TEKSHIRISH" tugmasini bosing
4️⃣ Shartlar bajarilgach testlarga kiring.

Savollaringizni oddiy qilib yozishingiz mumkin.

Masalan:

• Ta'lim muassasasini strategik boshqarish nima?
• Rahbarning asosiy kompetensiyalari qaysilar?
• Korrupsiyaviy xavflarni qanday kamaytirish mumkin?
• Ta'lim sifatini qanday boshqarish kerak?`

/*
 * =========================================================
 * TELEGRAM API
 * =========================================================
 */

async function telegram(
  method: string,
  payload: Record<string, unknown>,
): Promise<any> {
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

  let data: any = null

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
  return telegram(
    'sendMessage',
    {
      chat_id: chatId,
      text: text.slice(0, 4000),
      ...extra,
    },
  )
}

/*
 * =========================================================
 * EDIT MESSAGE
 * =========================================================
 */

async function editMessage(
  chatId: number,
  messageId: number,
  text: string,
  extra: Record<string, unknown> = {},
) {
  return telegram(
    'editMessageText',
    {
      chat_id: chatId,
      message_id: messageId,
      text: text.slice(0, 4000),
      ...extra,
    },
  )
}

/*
 * =========================================================
 * CALLBACK JAVOBI
 * =========================================================
 */

async function answerCallback(
  callbackId: string,
  text?: string,
) {
  return telegram(
    'answerCallbackQuery',
    {
      callback_query_id: callbackId,
      text,
      show_alert: false,
    },
  )
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
 * ASOSIY INLINE KLAVIATURA
 * =========================================================
 */

function buildAccessKeyboard(
  userId: number,
) {
  const referralLink =
    `https://t.me/${BOT_USERNAME}?start=ref_${userId}`

  const keyboard: any[][] = []

  /*
   * Guruhga kirish tugmasi.
   *
   * TELEGRAM_GROUP_URL env mavjud bo'lsa ko'rsatiladi.
   */
  if (GROUP_URL) {
    keyboard.push([
      {
        text: '👥 GURUHGA A’ZO BO‘LISH',
        url: GROUP_URL,
      },
    ])
  }

  /*
   * Referral tugmasi.
   */
  keyboard.push([
    {
      text: '👥 5 TA DO‘STNI TAKLIF QILISH',
      url: referralLink,
    },
  ])

  /*
   * Tekshirish.
   */
  keyboard.push([
    {
      text: '🔄 TEKSHIRISH',
      callback_data: 'check_access',
    },
  ])

  return {
    reply_markup: {
      inline_keyboard: keyboard,
    },
  }
}

/*
 * =========================================================
 * TESTGA KIRISH KLAVIATURASI
 * =========================================================
 */

const TEST_KEYBOARD = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: '🚀 TESTLARNI BOSHLASH',
          web_app: {
            url: MINI_APP_URL,
          },
        },
      ],
    ],
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
 * GURUH
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
 * GURUH A'ZOLIGINI TEKSHIRISH
 * =========================================================
 */

async function isGroupMember(
  userId: number,
): Promise<boolean> {
  try {
    const result =
      await telegram(
        'getChatMember',
        {
          chat_id: GROUP_CHAT_ID,
          user_id: userId,
        },
      )

    if (!result?.ok) {
      console.error(
        'getChatMember xatosi:',
        result,
      )

      return false
    }

    const status =
      result.result?.status

    /*
     * Telegram statuslari:
     *
     * creator
     * administrator
     * member
     * restricted
     * left
     * kicked
     */

    if (
      status === 'creator' ||
      status === 'administrator' ||
      status === 'member'
    ) {
      return true
    }

    /*
     * Restricted foydalanuvchi ham guruhda
     * bo'lishi mumkin.
     */
    if (
      status === 'restricted'
    ) {
      return (
        result.result?.is_member === true
      )
    }

    return false
  } catch (error) {
    console.error(
      'Guruh a’zoligini tekshirish xatosi:',
      error,
    )

    return false
  }
}

/*
 * =========================================================
 * ACCESS HOLATI
 * =========================================================
 */

async function getAccessStatus(
  userId: number,
) {
  const referral =
    await getReferralStats(userId)

  const groupMember =
    await isGroupMember(userId)

  const referralsCompleted =
    referral.invited >= REQUIRED_REFERRALS

  const accessGranted =
    groupMember &&
    referralsCompleted

  return {
    groupMember,
    referralsCompleted,
    accessGranted,
    invited: referral.invited,
    remaining: Math.max(
      0,
      REQUIRED_REFERRALS -
        referral.invited,
    ),
  }
}

/*
 * =========================================================
 * ACCESS XABARI
 * =========================================================
 */

async function sendAccessMessage(
  chatId: number,
  userId: number,
) {
  const status =
    await getAccessStatus(userId)

  /*
   * HAMMA SHARTLAR BAJARILDI
   */

  if (status.accessGranted) {
    await sendMessage(
      chatId,

      `🎉 TABRIKLAYMIZ!

✅ Guruhga a'zolik: TASDIQLANDI
✅ Takliflar: ${status.invited}/${REQUIRED_REFERRALS}

🔓 Siz uchun testlar ochildi.

Endi "🚀 TESTLARNI BOSHLASH" tugmasini bosib testlarni boshlashingiz mumkin.`,
      
      TEST_KEYBOARD,
    )

    return
  }

  /*
   * HALI SHARTLAR BAJARILMAGAN
   */

  const groupStatus =
    status.groupMember
      ? '✅ A’zo'
      : '❌ A’zo emas'

  const referralStatus =
    `${status.invited}/${REQUIRED_REFERRALS}`

  await sendMessage(
    chatId,

    `🔐 TESTLARGA KIRISH SHARTLARI

👥 Guruh:
${groupStatus}

🤝 Taklif qilinganlar:
${referralStatus}

${
  status.remaining > 0
    ? `👤 Yana ${status.remaining} ta yangi foydalanuvchi kerak.`
    : '✅ 5 ta taklif bajarildi.'
}

${
  !status.groupMember
    ? '📢 Avval guruhga a’zo bo‘ling.'
    : ''
}

👇 Quyidagi amallarni bajaring va "🔄 TEKSHIRISH" tugmasini bosing.`,

    buildAccessKeyboard(userId),
  )
}

/*
 * =========================================================
 * /START PAYLOAD
 * =========================================================
 */

function getStartPayload(
  text?: string,
): string | null {
  if (!text) {
    return null
  }

  const match =
    text.match(
      /^\/start(?:@\w+)?(?:\s+(.+))?$/i,
    )

  if (!match) {
    return null
  }

  return (
    match[1]?.trim() ??
    null
  )
}

/*
 * =========================================================
 * REFERRAL ID
 * =========================================================
 */

function getReferralId(
  payload: string | null,
): number | null {
  if (!payload) {
    return null
  }

  if (
    !payload.startsWith('ref_')
  ) {
    return null
  }

  const raw =
    payload.slice(4)

  const id =
    Number(raw)

  if (
    !Number.isInteger(id) ||
    id <= 0
  ) {
    return null
  }

  return id
}

/*
 * =========================================================
 * RO'YXATDAN O'TGANDAN KEYIN REFERRAL
 * =========================================================
 */

async function processReferralAfterRegistration(
  userId: number,
): Promise<number | null> {
  const pendingReferrer =
    await getPendingReferral(userId)

  if (!pendingReferrer) {
    return null
  }

  /*
   * Referralni faqat yangi foydalanuvchi
   * muvaffaqiyatli ro'yxatdan o'tgandan keyin
   * hisoblaymiz.
   */

  const added =
    await addReferral(
      pendingReferrer,
      userId,
    )

  await clearPendingReferral(
    userId,
  )

  if (!added) {
    return null
  }

  return pendingReferrer
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
   * TELEGRAM SECRET
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
   * UPDATE
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
   * =======================================================
   * CALLBACK QUERY
   * =======================================================
   */

  if (
    update.callback_query
  ) {
    const callback =
      update.callback_query

    const callbackUserId =
      callback.from.id

    const callbackMessage =
      callback.message

    if (
      callback.data ===
      'check_access'
    ) {
      await answerCallback(
        callback.id,
        '🔄 Holat tekshirilmoqda...',
      )

      if (
        callbackMessage
      ) {
        const callbackChatId =
          callbackMessage.chat.id

        const user =
          await getUser(
            callbackUserId,
          )

        if (!user) {
          await sendMessage(
            callbackChatId,

            REGISTER_PROMPT,

            CONTACT_KEYBOARD,
          )
        } else {
          await sendAccessMessage(
            callbackChatId,
            callbackUserId,
          )
        }
      }

      return NextResponse.json({
        ok: true,
      })
    }

    return NextResponse.json({
      ok: true,
    })
  }

  /*
   * =======================================================
   * MESSAGE
   * =======================================================
   */

  const message =
    update.message

  if (!message) {
    return NextResponse.json({
      ok: true,
    })
  }

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
   * =======================================================
   * GURUH
   * =======================================================
   */

  if (
    isGroupChat(chat)
  ) {
    rememberGroup(chat)

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

🔐 Majburiy guruh:
${chat.id === Number(GROUP_CHAT_ID) ? 'HA' : 'YO‘Q'}

⏰ Avtomatik test tizimi:
05:00 — 23:00

📝 Har soatda:
50 daqiqa TEST
10 daqiqa DAM OLISH

🏆 Reyting avtomatik chiqariladi.`,
      )
    }

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
    /*
     * START PAYLOADNI ENG AVVAL OLAMIZ.
     *
     * Sababi:
     * yangi foydalanuvchi hali ro'yxatdan o'tmagan
     * bo'lishi mumkin.
     */

    const startPayload =
      getStartPayload(text)

    const referralId =
      getReferralId(
        startPayload,
      )

    /*
     * =====================================================
     * USER
     * =====================================================
     */

    const user =
      await getUser(userId)

    /*
     * =====================================================
     * YANGI USER
     * =====================================================
     */

    if (!user) {
      /*
       * Referral kelgan bo'lsa,
       * uni vaqtinchalik saqlaymiz.
       *
       * Hali telefon tasdiqlanmagan.
       */
      if (
        referralId &&
        referralId !== userId
      ) {
        await savePendingReferral(
          userId,
          referralId,
        )
      }

      /*
       * TELEFON YUBORILDI
       */

      if (
        message.contact
      ) {
        /*
         * Faqat o'z telefonini yuborishi kerak.
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

          return NextResponse.json({
            ok: true,
          })
        }

        const name =
          [
            message.from?.first_name,
            message.from?.last_name,
          ]
            .filter(Boolean)
            .join(' ')
            .trim() ||
          'Foydalanuvchi'

        /*
         * Avval referralni aniqlaymiz.
         */
        const pendingReferrer =
          await getPendingReferral(
            userId,
          )

        /*
         * Referralni hisoblaymiz.
         */
        const actualReferrer =
          await processReferralAfterRegistration(
            userId,
          )

        /*
         * Userni saqlaymiz.
         */
        await saveUser({
          id: userId,

          name,

          phone:
            normalizePhone(
              message.contact.phone_number,
            ),

          registeredAt:
            new Date().toISOString(),

          ...(actualReferrer
            ? {
                referredBy:
                  actualReferrer,
              }
            : pendingReferrer
              ? {
                  referredBy:
                    pendingReferrer,
                }
              : {}),
        })

        /*
         * Keyboardni olib tashlash.
         */
        await sendMessage(
          chatId,

          `🎉 Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!

Endi platformadan foydalanish uchun 2 ta shartni bajaring:

1️⃣ "Menejerlar super 30 jamoasi" guruhiga a’zo bo‘ling.
2️⃣ 5 ta yangi foydalanuvchini taklif qiling.

Shundan so'ng testlar ochiladi.`,

          REMOVE_KEYBOARD,
        )

        /*
         * Access holatini chiqaramiz.
         */
        await sendAccessMessage(
          chatId,
          userId,
        )

        return NextResponse.json({
          ok: true,
        })
      }

      /*
       * ===================================================
       * TELEFON HALI YUBORILMAGAN
       * ===================================================
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
     * =======================================================
     * MATN BO'LMASA
     * =======================================================
     */

    if (!text) {
      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * =======================================================
     * /START
     * =======================================================
     */

    if (
      startPayload !== null
    ) {
      /*
       * Agar referral bilan kelgan eski user bo'lsa,
       * referralga qayta qo'shilmaydi.
       */

      await sendAccessMessage(
        chatId,
        userId,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * =======================================================
     * /HELP
     * =======================================================
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
     * =======================================================
     * TEKSHIRISH
     * =======================================================
     */

    if (
      text === '🔄 TEKSHIRISH' ||
      text === 'Tekshirish'
    ) {
      await sendAccessMessage(
        chatId,
        userId,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * =======================================================
     * TESTLARGA KIRISH
     * =======================================================
     *
     * Hozircha test tugmasi web_app orqali ochiladi.
     *
     * Keyinchalik Mini App ichida ham
     * server-side access check qo'yish tavsiya qilinadi.
     */

    if (
      text === '🚀 TESTLARNI BOSHLASH'
    ) {
      const status =
        await getAccessStatus(
          userId,
        )

      if (
        !status.accessGranted
      ) {
        await sendAccessMessage(
          chatId,
          userId,
        )

        return NextResponse.json({
          ok: true,
        })
      }

      await sendMessage(
        chatId,

        `🚀 TESTLAR OCHILDI!

Siz barcha talablarni bajargansiz.

📝 Testni boshlashingiz mumkin.`,

        TEST_KEYBOARD,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * =======================================================
     * AI ANTI-SPAM
     * =======================================================
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
     * =======================================================
     * AI TYPING
     * =======================================================
     */

    await telegram(
      'sendChatAction',
      {
        chat_id: chatId,
        action: 'typing',
      },
    )

    /*
     * =======================================================
     * AI JAVOB
     * =======================================================
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

    await sendMessage(
      chatId,

      `⚠️ Hozircha texnik xatolik yuz berdi.

Iltimos, birozdan keyin qayta urinib ko'ring.`,
    )
  }

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

    bot:
      '@topmenejerbot',

    botId:
      8747655999,

    group:
      'Menejerlar super 30 jamoasi',

    groupChatId:
      GROUP_CHAT_ID,

    requiredReferrals:
      REQUIRED_REFERRALS,

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
