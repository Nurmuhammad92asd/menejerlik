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
 * MENEJERLIK BY NURMUHAMMAD
 * TELEGRAM WEBHOOK
 * =========================================================
 *
 * BOT:
 *   @topmenejerbot
 *
 * BOT ID:
 *   8747655999
 *
 * MAJBURIY GURUH:
 *   @talim_ilmfan
 *
 * ASOSIY TALABLAR:
 *
 * 1. Telefon raqamni tasdiqlash
 * 2. talim_ilmfan guruhiga a'zo bo'lish
 * 3. 5 ta yangi foydalanuvchini taklif qilish
 * 4. Shundan keyingina testga kirish
 *
 * =========================================================
 */

export const maxDuration = 60
const WEBHOOK_VERSION = '2026-10-04-TEST-01'

/*
 * =========================================================
 * SOZLAMALAR
 * =========================================================
 */

const BOT_USERNAME = 'topmenejerbot'

/*
 * Public Telegram guruh username.
 *
 * Agar sizda aniq numeric Chat ID bo'lsa,
 * keyinchalik shu qiymatni almashtirish mumkin.
 */
const GROUP_CHAT_ID = '@talim_ilmfan'

const GROUP_URL =
  process.env.TELEGRAM_GROUP_URL ??
  'https://t.me/talim_ilmfan'

const MINI_APP_URL =
  process.env.MINI_APP_URL ??
  'https://menejerlik.vercel.app'

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
  is_bot?: boolean
  first_name?: string
  last_name?: string
  username?: string
}

type TelegramContact = {
  phone_number: string
  first_name?: string
  last_name?: string
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

Platformadan foydalanish uchun avval telefon raqamingizni tasdiqlashingiz kerak.

📱 Telefon raqamingiz:
• foydalanuvchini aniqlash
• natijalarni saqlash
• referral tizimini ishlatish

uchun kerak.

👇 Pastdagi tugmani bosing:`

const PHONE_SUCCESS = `✅ TELEFON RAQAMI TASDIQLANDI!

🎉 Ro'yxatdan o'tish muvaffaqiyatli yakunlandi.

Endi platformaga kirish uchun quyidagi 2 ta shartni bajaring:

1️⃣ @talim_ilmfan guruhiga a'zo bo'ling.
2️⃣ 5 ta yangi foydalanuvchini taklif qiling.

Shundan keyin testlar ochiladi.`

const HELP = `📚 MENEJERLIK BY NURMUHAMMAD

Platformadan foydalanish tartibi:

1️⃣ Telefon raqamingizni tasdiqlang
2️⃣ @talim_ilmfan guruhiga a'zo bo'ling
3️⃣ 5 ta yangi foydalanuvchini taklif qiling
4️⃣ "🔄 TEKSHIRISH" tugmasini bosing
5️⃣ Barcha shartlar bajarilgach testlarni boshlang.

Bot buyruqlari:

/start — boshlash
/help — yordam`

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
      '❌ TELEGRAM_BOT_TOKEN mavjud emas',
    )

    return null
  }

  try {
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
        'Telegram HTTP ERROR:',
        response.status,
        data,
      )
    }

    if (
      data &&
      data.ok === false
    ) {
      console.error(
        `Telegram ${method} ERROR:`,
        data,
      )
    }

    return data
  } catch (error) {
    console.error(
      `Telegram ${method} FETCH ERROR:`,
      error,
    )

    return null
  }
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
 * CALLBACK
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
 *
 * request_contact faqat private chatda ishlaydi.
 * =========================================================
 */

const CONTACT_KEYBOARD = {
  reply_markup: {
    keyboard: [
      [
        {
          text: '📱 TELEFON RAQAMIMNI TASDIQLASH',
          request_contact: true,
        },
      ],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
    is_persistent: true,
  },
}

/*
 * =========================================================
 * KEYBOARDNI OLIB TASHLASH
 * =========================================================
 */

const REMOVE_KEYBOARD = {
  reply_markup: {
    remove_keyboard: true,
  },
}

/*
 * =========================================================
 * ACCESS KEYBOARD
 * =========================================================
 */

function buildAccessKeyboard(
  userId: number,
) {
  const referralLink =
    `https://t.me/${BOT_USERNAME}?start=ref_${userId}`

  return {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '👥 GURUHGA A’ZO BO‘LISH',
            url: GROUP_URL,
          },
        ],
        [
          {
            text: '👥 5 TA DO‘STNI TAKLIF QILISH',
            url: referralLink,
          },
        ],
        [
          {
            text: '🔄 TEKSHIRISH',
            callback_data: 'check_access',
          },
        ],
      ],
    },
  }
}

/*
 * =========================================================
 * TEST KEYBOARD
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
 * GROUP CHAT
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

/*
 * =========================================================
 * GROUP MEMBER CHECK
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

    console.log(
      'GROUP MEMBERSHIP CHECK:',
      {
        userId,
        group: GROUP_CHAT_ID,
        telegramOk: result?.ok,
        status: result?.result?.status,
        isMember: result?.result?.is_member,
        errorCode: result?.error_code,
        description: result?.description,
      },
    )

    if (!result?.ok) {
      return false
    }

    const status =
      result.result?.status

    if (
      status === 'creator' ||
      status === 'administrator' ||
      status === 'member'
    ) {
      return true
    }

    if (
      status === 'restricted' &&
      result.result?.is_member === true
    ) {
      return true
    }

    return false
  } catch (error) {
    console.error(
      'GROUP MEMBERSHIP ERROR:',
      error,
    )

    return false
  }
}

/*
 * =========================================================
 * ACCESS STATUS
 * =========================================================
 */

async function getAccessStatus(
  userId: number,
) {
  const user =
    await getUser(userId)

  /*
   * Telefon majburiy.
   */
  const phoneVerified =
    Boolean(
      user?.phone &&
      normalizePhone(user.phone),
    )

  /*
   * Telefon tasdiqlanmagan bo'lsa,
   * qolgan accessni hisoblamaymiz.
   */
  if (!phoneVerified) {
    return {
      phoneVerified: false,
      groupMember: false,
      referralsCompleted: false,
      accessGranted: false,
      invited: 0,
      remaining: REQUIRED_REFERRALS,
    }
  }

  const referral =
    await getReferralStats(userId)

  const groupMember =
    await isGroupMember(userId)

  const referralsCompleted =
    referral.invited >=
    REQUIRED_REFERRALS

  const accessGranted =
    phoneVerified &&
    groupMember &&
    referralsCompleted

  console.log(
    'ACCESS STATUS:',
    {
      userId,
      phoneVerified,
      groupMember,
      invited: referral.invited,
      required: REQUIRED_REFERRALS,
      referralsCompleted,
      accessGranted,
    },
  )

  return {
    phoneVerified,
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
 * ACCESS MESSAGE
 * =========================================================
 */

async function sendAccessMessage(
  chatId: number,
  userId: number,
) {
  const status =
    await getAccessStatus(userId)

  /*
   * TELEFON YO'Q
   */
  if (!status.phoneVerified) {
    await sendMessage(
      chatId,
      REGISTER_PROMPT,
      CONTACT_KEYBOARD,
    )

    return
  }

  /*
   * HAMMA SHART BAJARILGAN
   */
  if (status.accessGranted) {
    await sendMessage(
      chatId,

      `🎉 TABRIKLAYMIZ!

✅ Telefon: TASDIQLANGAN
✅ Guruh: A’ZO
✅ Takliflar: ${status.invited}/${REQUIRED_REFERRALS}

🔓 TESTLAR OCHILDI!

Quyidagi tugmani bosib testlarni boshlang.`,

      TEST_KEYBOARD,
    )

    return
  }

  /*
   * GURUH HOLATI
   */
  const groupStatus =
    status.groupMember
      ? '✅ A’ZO'
      : '❌ A’ZO EMAS'

  /*
   * REFERRAL HOLATI
   */
  const referralStatus =
    `${status.invited}/${REQUIRED_REFERRALS}`

  let message =
    `🔐 PLATFORMAGA KIRISH

📱 Telefon:
✅ TASDIQLANGAN

👥 Guruh:
${groupStatus}

🤝 Takliflar:
${referralStatus}

`

  if (!status.groupMember) {
    message +=
      `📢 Avval @talim_ilmfan guruhiga a’zo bo‘ling.\n\n`
  }

  if (status.remaining > 0) {
    message +=
      `👤 Yana ${status.remaining} ta yangi foydalanuvchi kerak.\n\n`
  }

  message +=
    `👇 Shartlarni bajaring va "🔄 TEKSHIRISH" tugmasini bosing.`

  await sendMessage(
    chatId,
    message,
    buildAccessKeyboard(userId),
  )
}

/*
 * =========================================================
 * START PAYLOAD
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
 * REFERRALNI REGISTRATIONDAN KEYIN HISOBLASH
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
   * O'zini o'zi taklif qilish.
   */
  if (
    pendingReferrer === userId
  ) {
    await clearPendingReferral(
      userId,
    )

    return null
  }

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

    const userId =
      callback.from.id

    if (
      callback.data ===
      'check_access'
    ) {
      await answerCallback(
        callback.id,
        '🔄 Holat tekshirilmoqda...',
      )

      const callbackMessage =
        callback.message

      if (callbackMessage) {
        await sendAccessMessage(
          callbackMessage.chat.id,
          userId,
        )
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
   * GURUH CHAT
   * =======================================================
   */

  if (
    isGroupChat(chat)
  ) {
    console.log(
      'TELEGRAM GROUP:',
      {
        id: chat.id,
        title: chat.title,
        username: chat.username,
        type: chat.type,
      },
    )

    /*
     * Guruhdagi test komandasi.
     */
    if (
      text === '/test'
    ) {
      await sendMessage(
        chatId,

        `🤖 MENEJERLIK BY NURMUHAMMAD

✅ Bot guruhni ko'rmoqda.

🏷 Guruh:
${chat.title ?? 'Nomaʼlum'}

🆔 Chat ID:
${chat.id}

🔐 Majburiy guruh:
${chat.username === 'talim_ilmfan'
          ? 'HA'
          : 'TEKSHIRILADI'}

🤖 Bot:
@${BOT_USERNAME}`,
      )
    }

    return NextResponse.json({
      ok: true,
    })
  }

  /*
   * =======================================================
   * PRIVATE CHAT
   * =======================================================
   */

  try {
    /*
     * START
     */
    const startPayload =
      getStartPayload(text)

    const referralId =
      getReferralId(
        startPayload,
      )

    /*
     * USER
     */
    const user =
      await getUser(userId)

    /*
     * =====================================================
     * TELEFON TASDIQLANGANMI?
     * =====================================================
     */

    const phoneVerified =
      Boolean(
        user?.phone &&
        normalizePhone(user.phone),
      )

    /*
     * =====================================================
     * TELEFON TASDIQLANMAGAN
     * =====================================================
     *
     * User Redis'da bo'lsa ham,
     * phone bo'lmasa uni ro'yxatdan o'tgan
     * deb hisoblamaymiz.
     */

    if (!phoneVerified) {

      /*
       * Referralni vaqtinchalik saqlash.
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
       * TELEFON KELDI
       */
      if (
        message.contact
      ) {
        /*
         * Faqat o'z telefonini qabul qilamiz.
         */
        if (
          message.contact.user_id !==
          userId
        ) {
          await sendMessage(
            chatId,

            `⚠️ Faqat o'zingizning telefon raqamingizni yuboring.

👇 Pastdagi tugmadan foydalaning.`,

            CONTACT_KEYBOARD,
          )

          return NextResponse.json({
            ok: true,
          })
        }

        /*
         * ISM
         */
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
         * PENDING REFERRER
         */
        const pendingReferrer =
          await getPendingReferral(
            userId,
          )

        /*
         * REFERRALNI HISOBLASH
         */
        const actualReferrer =
          await processReferralAfterRegistration(
            userId,
          )

        /*
         * USERNI SAQLASH
         */
        await saveUser({
          id: userId,

          name,

          phone:
            normalizePhone(
              message.contact.phone_number,
            ),

          registeredAt:
            user?.registeredAt ??
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
              : user?.referredBy
                ? {
                    referredBy:
                      user.referredBy,
                  }
                : {}),
        })

        /*
         * TELEFON TASDIQLANDI
         */
        await sendMessage(
          chatId,
          PHONE_SUCCESS,
          REMOVE_KEYBOARD,
        )

        /*
         * KEYINGI BOSQICH
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
       * TELEFON HALI YUBORILMAGAN
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
     * =====================================================
     * START
     * =====================================================
     */

    if (
      startPayload !== null
    ) {
      /*
       * Agar yangi referral bilan kelsa,
       * pending referralni saqlaymiz.
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

      await sendAccessMessage(
        chatId,
        userId,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * =====================================================
     * HELP
     * =====================================================
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
     * =====================================================
     * TEKSHIRISH
     * =====================================================
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
     * =====================================================
     * TESTLARNI BOSHLASH
     * =====================================================
     */

    if (
      text === '🚀 TESTLARNI BOSHLASH'
    ) {
      const status =
        await getAccessStatus(
          userId,
        )

      /*
       * SHART BAJARILMAGAN
       */
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

      /*
       * SHART BAJARILGAN
       */
      await sendMessage(
        chatId,

        `🚀 TESTLAR OCHILDI!

✅ Telefon tasdiqlangan
✅ Guruhga a’zolik tasdiqlangan
✅ 5 ta referral bajarilgan

Endi testlarni boshlashingiz mumkin.`,

        TEST_KEYBOARD,
      )

      return NextResponse.json({
        ok: true,
      })
    }

    /*
     * =====================================================
     * AI
     * =====================================================
     */

    const answer =
      await askAI(
        text ?? '',
      )

    if (answer) {
      await sendMessage(
        chatId,
        answer,
      )
    }
  } catch (error) {
    console.error(
      'WEBHOOK XATOSI:',
      error,
    )

    await sendMessage(
      chatId,

      `⚠️ Hozircha texnik xatolik yuz berdi.

Iltimos, birozdan keyin qayta urinib ko‘ring.`,
    )
  }

  return NextResponse.json({
    ok: true,
  })
}

/*
 * =========================================================
 * GET HEALTH CHECK
 * =========================================================
 */

export async function GET() {
  return NextResponse.json({
    ok: true,
    version: WEBHOOK_VERSION,

    service: 'Menejerlik Telegram Webhook',

    status: 'working',

    bot: '@topmenejerbot',

    botId: 8747655999,

    group: '@talim_ilmfan',

    groupChatId: GROUP_CHAT_ID,

    requiredReferrals: REQUIRED_REFERRALS,

    miniApp: MINI_APP_URL,
  })
}
