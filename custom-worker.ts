import nextWorker from "./.open-next/worker.js";
import {
  getTopicQuestions,
  getModuleById,
} from "./lib/quiz-data";

/* =========================================================
   MENEJERLIK BY NURMUHAMMAD
   PROFESSIONAL CLOUDFLARE WORKER
   =========================================================

   TIZIM:

   Telegram Bot
        ↓
   Telefon tasdiqlash
        ↓
   @talim_ilmfan a'zolik
        ↓
   5 ta referral
        ↓
   TESTGA KIRISH
        ↓
   Mini App

   ROUTES:

   GET  /                       → Mini App
   GET  /health                 → Worker health
   GET  /api/challenge          → Challenge API
   POST /telegram/webhook       → Telegram webhook
   POST /                       → Telegram webhook fallback

   CRON:

   05:00–22:00 → Har soatda challenge
   23:00        → Kunlik reyting
========================================================= */


/* =========================================================
   TYPES
========================================================= */

interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  TELEGRAM_BOT_TOKEN: string;
}

interface TelegramUser {
  id: number;
  is_bot?: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
}

interface TelegramChat {
  id: number;
  type: "private" | "group" | "supergroup" | "channel";
  title?: string;
  username?: string;
}

interface TelegramContact {
  phone_number: string;
  user_id?: number;
  first_name?: string;
  last_name?: string;
}

interface TelegramMessage {
  message_id: number;
  from?: TelegramUser;
  chat: TelegramChat;
  text?: string;
  contact?: TelegramContact;
}

interface TelegramCallbackQuery {
  id: string;
  from: TelegramUser;
  message?: TelegramMessage;
  data?: string;
}

interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}

interface TelegramMemberResult {
  ok: boolean;
  result?: {
    status: string;
    user?: TelegramUser;
    is_member?: boolean;
  };
  description?: string;
}

interface BotUserRow {
  telegram_id: number;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  phone: string | null;
  referred_by: number | null;
  registered_at: number;
  updated_at: number;
}

interface ChallengeRow {
  id: string;
  challenge_date: string;
  hour: number;
  start_at: number;
  end_at: number;
  status: string;
}

interface Question {
  id: string;
  text: string;
  options?: unknown;
  answer?: unknown;
  correctAnswer?: unknown;
  explanation?: string;
  [key: string]: unknown;
}


/* =========================================================
   CONFIGURATION
========================================================= */

const BOT_NAME = "Menejerlik by Nurmuhammad";

const BOT_USERNAME = "topmenejerbot";

const WORKER_URL =
  "https://menejerlik.nurmuhammadtalatbekov.workers.dev";

const MINI_APP_URL = WORKER_URL;

const GROUP_USERNAME = "@talim_ilmfan";

const GROUP_URL = "https://t.me/talim_ilmfan";

const WEBHOOK_PATH = "/telegram/webhook";

const REQUIRED_REFERRALS = 5;


/* =========================================================
   DAILY CHALLENGE CONFIG
========================================================= */

const DAILY_START_HOUR = 5;
const DAILY_END_HOUR = 22;
const DAILY_RESULTS_HOUR = 23;

const QUESTIONS_PER_CHALLENGE = 25;

const POINTS_PER_CORRECT = 2;

const MAX_CHALLENGE_SCORE =
  QUESTIONS_PER_CHALLENGE * POINTS_PER_CORRECT;

const CHALLENGE_DURATION_SEC = 50 * 60;

const CURRICULUM_START_DATE = "2026-10-01";


/* =========================================================
   RESPONSE HELPERS
========================================================= */

function json(
  data: unknown,
  status = 200,
  headers: Record<string, string> = {}
): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}


/* =========================================================
   TASHKENT TIME
========================================================= */

function getTashkentDate(): Date {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tashkent",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "0";

  return new Date(
    Date.UTC(
      Number(get("year")),
      Number(get("month")) - 1,
      Number(get("day")),
      Number(get("hour")),
      Number(get("minute")),
      Number(get("second"))
    )
  );
}

function getTashkentParts() {
  const date = getTashkentDate();

  return {
    date: date.toISOString().slice(0, 10),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
  };
}


/* =========================================================
   TELEGRAM API
========================================================= */

async function telegramRequest<T = unknown>(
  env: Env,
  method: string,
  body: Record<string, unknown> = {}
): Promise<T | null> {
  if (!env.TELEGRAM_BOT_TOKEN) {
    console.error("TELEGRAM_BOT_TOKEN mavjud emas");
    return null;
  }

  const response = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json() as {
    ok: boolean;
    result?: T;
    description?: string;
  };

  if (!data.ok) {
    console.error(
      `Telegram API xatosi: ${method}`,
      data.description
    );

    return null;
  }

  return data.result ?? null;
}


/* =========================================================
   TELEGRAM SEND MESSAGE
========================================================= */

async function sendMessage(
  env: Env,
  chatId: number | string,
  text: string,
  replyMarkup?: unknown
) {
  return telegramRequest(env, "sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    ...(replyMarkup
      ? {
          reply_markup: replyMarkup,
        }
      : {}),
  });
}


/* =========================================================
   CALLBACK ANSWER
========================================================= */

async function answerCallback(
  env: Env,
  callbackId: string,
  text?: string
) {
  return telegramRequest(env, "answerCallbackQuery", {
    callback_query_id: callbackId,
    ...(text
      ? {
          text,
          show_alert: false,
        }
      : {}),
  });
}


/* =========================================================
   KEYBOARDS
========================================================= */

function phoneKeyboard() {
  return {
    keyboard: [
      [
        {
          text: "📱 TELEFON RAQAMIMNI TASDIQLASH",
          request_contact: true,
        },
      ],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  };
}


function removeKeyboard() {
  return {
    remove_keyboard: true,
  };
}


function accessKeyboard(options: {
  member: boolean;
  referrals: number;
  access: boolean;
  userId: number;
}) {
  const rows: unknown[][] = [];

  if (!options.member) {
    rows.push([
      {
        text: "👥 GURUHGA QO‘SHILISH",
        url: GROUP_URL,
      },
    ]);

    rows.push([
      {
        text: "🔄 A'ZOLIKNI TEKSHIRISH",
        callback_data: "check_membership",
      },
    ]);
  }

  if (options.referrals < REQUIRED_REFERRALS) {
    const referralLink =
      `https://t.me/${BOT_USERNAME}?start=ref_${options.userId}`;

    const shareUrl =
      "https://t.me/share/url?url=" +
      encodeURIComponent(referralLink) +
      "&text=" +
      encodeURIComponent(
        "Menejerlik by Nurmuhammad test platformasiga qo‘shiling!"
      );

    rows.push([
      {
        text: "🔗 TAKLIF HAVOLAM",
        url: shareUrl,
      },
    ]);

    rows.push([
      {
        text: "🔄 HOLATNI YANGILASH",
        callback_data: "refresh_status",
      },
    ]);
  }

  if (options.access) {
    rows.push([
      {
        text: "🚀 TESTLARNI BOSHLASH",
        web_app: {
          url: MINI_APP_URL,
        },
      },
    ]);
  }

  return {
    inline_keyboard: rows,
  };
}


/* =========================================================
   DATABASE — TABLES
========================================================= */

async function ensureAccessTables(env: Env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS bot_users (
      telegram_id INTEGER PRIMARY KEY,
      first_name TEXT,
      last_name TEXT,
      username TEXT,
      phone TEXT,
      referred_by INTEGER,
      registered_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )
  `).run();

  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS bot_pending_referrals (
      telegram_id INTEGER PRIMARY KEY,
      referrer_id INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    )
  `).run();

  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS bot_referrals (
      referred_id INTEGER PRIMARY KEY,
      referrer_id INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    )
  `).run();

  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_bot_referrals_referrer
    ON bot_referrals(referrer_id)
  `).run();

  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_bot_users_username
    ON bot_users(username)
  `).run();
}


/* =========================================================
   DATABASE — USER
========================================================= */

async function getBotUser(
  env: Env,
  telegramId: number
): Promise<BotUserRow | null> {
  return (
    await env.DB
      .prepare(`
        SELECT *
        FROM bot_users
        WHERE telegram_id = ?
        LIMIT 1
      `)
      .bind(telegramId)
      .first<BotUserRow>()
  ) ?? null;
}


/* =========================================================
   DATABASE — REFERRAL
========================================================= */

async function getReferralCount(
  env: Env,
  telegramId: number
): Promise<number> {
  const row = await env.DB
    .prepare(`
      SELECT COUNT(*) AS count
      FROM bot_referrals
      WHERE referrer_id = ?
    `)
    .bind(telegramId)
    .first<{ count: number }>();

  return Number(row?.count ?? 0);
}


/* =========================================================
   PHONE NORMALIZATION
========================================================= */

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  return `+${digits}`;
}


/* =========================================================
   PENDING REFERRAL
========================================================= */

async function savePendingReferral(
  env: Env,
  telegramId: number,
  referrerId: number
) {
  if (telegramId === referrerId) {
    return;
  }

  const referrer = await getBotUser(env, referrerId);

  if (!referrer) {
    return;
  }

  await env.DB
    .prepare(`
      INSERT OR IGNORE INTO bot_pending_referrals
      (
        telegram_id,
        referrer_id,
        created_at
      )
      VALUES (?, ?, ?)
    `)
    .bind(
      telegramId,
      referrerId,
      Date.now()
    )
    .run();
}


/* =========================================================
   USER REGISTRATION
========================================================= */

async function registerUser(
  env: Env,
  telegramUser: TelegramUser,
  phone: string
) {
  const now = Date.now();

  const existing = await getBotUser(
    env,
    telegramUser.id
  );

  const normalizedPhone = normalizePhone(phone);

  if (existing) {
    await env.DB
      .prepare(`
        UPDATE bot_users
        SET
          first_name = ?,
          last_name = ?,
          username = ?,
          phone = ?,
          updated_at = ?
        WHERE telegram_id = ?
      `)
      .bind(
        telegramUser.first_name ?? null,
        telegramUser.last_name ?? null,
        telegramUser.username ?? null,
        normalizedPhone,
        now,
        telegramUser.id
      )
      .run();

    return {
      created: false,
      user: await getBotUser(
        env,
        telegramUser.id
      ),
    };
  }

  const pending = await env.DB
    .prepare(`
      SELECT referrer_id
      FROM bot_pending_referrals
      WHERE telegram_id = ?
      LIMIT 1
    `)
    .bind(telegramUser.id)
    .first<{ referrer_id: number }>();

  const referredBy = pending?.referrer_id ?? null;

  await env.DB
    .prepare(`
      INSERT INTO bot_users
      (
        telegram_id,
        first_name,
        last_name,
        username,
        phone,
        referred_by,
        registered_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      telegramUser.id,
      telegramUser.first_name ?? null,
      telegramUser.last_name ?? null,
      telegramUser.username ?? null,
      normalizedPhone,
      referredBy,
      now,
      now
    )
    .run();

  /* -------------------------------------------------------
     REFERRAL ONLY AFTER REAL REGISTRATION
  ------------------------------------------------------- */

  if (
    referredBy &&
    referredBy !== telegramUser.id
  ) {
    const referrer = await getBotUser(
      env,
      referredBy
    );

    if (referrer) {
      await env.DB
        .prepare(`
          INSERT OR IGNORE INTO bot_referrals
          (
            referred_id,
            referrer_id,
            created_at
          )
          VALUES (?, ?, ?)
        `)
        .bind(
          telegramUser.id,
          referredBy,
          now
        )
        .run();
    }
  }

  await env.DB
    .prepare(`
      DELETE FROM bot_pending_referrals
      WHERE telegram_id = ?
    `)
    .bind(telegramUser.id)
    .run();

  return {
    created: true,
    user: await getBotUser(
      env,
      telegramUser.id
    ),
  };
}


/* =========================================================
   GROUP MEMBERSHIP
========================================================= */

async function checkGroupMembership(
  env: Env,
  telegramId: number
) {
  const result =
    await telegramRequest<TelegramMemberResult["result"]>(
      env,
      "getChatMember",
      {
        chat_id: GROUP_USERNAME,
        user_id: telegramId,
      }
    );

  if (!result) {
    return {
      member: false,
      status: "unknown",
    };
  }

  const status = result.status;

  const member =
    status === "creator" ||
    status === "administrator" ||
    status === "member" ||
    (
      status === "restricted" &&
      result.is_member === true
    );

  return {
    member,
    status,
  };
}


/* =========================================================
   ACCESS STATUS
========================================================= */

async function getAccessStatus(
  env: Env,
  telegramId: number
) {
  const user = await getBotUser(
    env,
    telegramId
  );

  if (!user) {
    return {
      registered: false,
      member: false,
      referrals: 0,
      requiredReferrals: REQUIRED_REFERRALS,
      remaining: REQUIRED_REFERRALS,
      access: false,
    };
  }

  const membership =
    await checkGroupMembership(
      env,
      telegramId
    );

  const referrals =
    await getReferralCount(
      env,
      telegramId
    );

  const access =
    Boolean(user.phone) &&
    membership.member &&
    referrals >= REQUIRED_REFERRALS;

  return {
    registered: true,
    phoneVerified: Boolean(user.phone),
    member: membership.member,
    membershipStatus: membership.status,
    referrals,
    requiredReferrals: REQUIRED_REFERRALS,
    remaining: Math.max(
      0,
      REQUIRED_REFERRALS - referrals
    ),
    access,
    user,
  };
}


/* =========================================================
   ACCESS PANEL
========================================================= */

async function sendAccessPanel(
  env: Env,
  telegramUser: TelegramUser,
  chatId: number,
  intro?: string
) {
  const status =
    await getAccessStatus(
      env,
      telegramUser.id
    );

  /* -------------------------------------------------------
     NOT REGISTERED
  ------------------------------------------------------- */

  if (!status.registered) {
    await sendMessage(
      env,
      chatId,
      `
<b>🎓 ${BOT_NAME}</b>

Assalomu alaykum, <b>${telegramUser.first_name ?? "Hurmatli foydalanuvchi"}</b>!

Bu platforma menejerlik bo‘yicha bilimlaringizni sinash, rivojlantirish va natijangizni kuzatish uchun yaratilgan.

<b>🔐 Platformaga kirish uchun 3 bosqich:</b>

1️⃣ Telefon raqamingizni tasdiqlang
2️⃣ @talim_ilmfan guruhiga qo‘shiling
3️⃣ 5 nafar yangi foydalanuvchini taklif qiling

Shundan so‘ng testlar ochiladi.

👇 <b>Avval telefon raqamingizni tasdiqlang:</b>
      `.trim(),
      phoneKeyboard()
    );

    return;
  }


  /* -------------------------------------------------------
     REGISTERED USER
  ------------------------------------------------------- */

  const referralLink =
    `https://t.me/${BOT_USERNAME}?start=ref_${telegramUser.id}`;

  let text = "";

  if (intro) {
    text += `${intro}\n\n`;
  }

  text +=
`<b>🎓 MENEJERLIK BY NURMUHAMMAD</b>

👤 <b>${telegramUser.first_name ?? "Foydalanuvchi"}</b>

📱 Telefon: ✅ Tasdiqlangan

👥 Guruh:
${
  status.member
    ? "✅ @talim_ilmfan a'zosi"
    : "❌ Guruhga a'zo emassiz"
}

👫 Takliflar:
<b>${status.referrals}/${REQUIRED_REFERRALS}</b>
`;

  if (status.remaining > 0) {
    text += `
⏳ Yana <b>${status.remaining} ta</b> foydalanuvchi kerak.

🔗 <b>Sizning shaxsiy havolangiz:</b>
<code>${referralLink}</code>

Taklif qilgan foydalanuvchi botda ro‘yxatdan o‘tgandan keyingina referral hisoblanadi.
`;
  }

  if (status.access) {
    text += `
━━━━━━━━━━━━━━━━━━
🎉 <b>MUVAFFAQIYAT!</b>

Siz barcha talablarni bajardingiz.

🚀 Endi testlarni boshlashingiz mumkin.
━━━━━━━━━━━━━━━━━━
`;
  } else {
    text += `
━━━━━━━━━━━━━━━━━━
🔒 Testlar hozircha yopiq.

Telefon + guruh a'zoligi + ${REQUIRED_REFERRALS} ta referral talab qilinadi.
━━━━━━━━━━━━━━━━━━
`;
  }

  await sendMessage(
    env,
    chatId,
    text.trim(),
    accessKeyboard({
      member: status.member,
      referrals: status.referrals,
      access: status.access,
      userId: telegramUser.id,
    })
  );
}


/* =========================================================
   REFERRAL PAYLOAD
========================================================= */

function getStartPayload(
  text?: string
): string | null {
  if (!text) {
    return null;
  }

  const parts = text.trim().split(/\s+/);

  if (parts.length < 2) {
    return null;
  }

  return parts[1];
}


function parseReferralPayload(
  payload: string | null
): number | null {
  if (!payload) {
    return null;
  }

  if (!payload.startsWith("ref_")) {
    return null;
  }

  const value =
    Number(payload.slice(4));

  if (
    !Number.isSafeInteger(value) ||
    value <= 0
  ) {
    return null;
  }

  return value;
}


/* =========================================================
   HANDLE START
========================================================= */

async function handleStart(
  env: Env,
  message: TelegramMessage
) {
  const user = message.from;

  if (!user) {
    return;
  }

  await ensureAccessTables(env);

  const payload =
    getStartPayload(message.text);

  const referrerId =
    parseReferralPayload(payload);

  const existing =
    await getBotUser(
      env,
      user.id
    );

  if (
    !existing &&
    referrerId &&
    referrerId !== user.id
  ) {
    await savePendingReferral(
      env,
      user.id,
      referrerId
    );
  }

  await sendAccessPanel(
    env,
    user,
    message.chat.id
  );
}


/* =========================================================
   HANDLE CONTACT
========================================================= */

async function handleContact(
  env: Env,
  message: TelegramMessage
) {
  const user = message.from;
  const contact = message.contact;

  if (!user || !contact) {
    return;
  }

  /* -------------------------------------------------------
     SECURITY:
     Faqat foydalanuvchining o'z raqami qabul qilinadi.
  ------------------------------------------------------- */

  if (
    contact.user_id &&
    contact.user_id !== user.id
  ) {
    await sendMessage(
      env,
      message.chat.id,
      `
❌ <b>Telefon raqami tasdiqlanmadi.</b>

Iltimos, aynan Telegram akkauntingizga tegishli telefon raqamini yuboring.
      `.trim(),
      phoneKeyboard()
    );

    return;
  }

  await ensureAccessTables(env);

  await registerUser(
    env,
    user,
    contact.phone_number
  );

  await sendMessage(
    env,
    message.chat.id,
    "✅ Telefon raqamingiz muvaffaqiyatli tasdiqlandi.",
    removeKeyboard()
  );

  await sendAccessPanel(
    env,
    user,
    message.chat.id
  );
}


/* =========================================================
   HANDLE STATUS
========================================================= */

async function handleStatus(
  env: Env,
  message: TelegramMessage
) {
  const user = message.from;

  if (!user) {
    return;
  }

  await ensureAccessTables(env);

  await sendAccessPanel(
    env,
    user,
    message.chat.id
  );
}


/* =========================================================
   HANDLE REFERRAL
========================================================= */

async function handleReferral(
  env: Env,
  message: TelegramMessage
) {
  const user = message.from;

  if (!user) {
    return;
  }

  await ensureAccessTables(env);

  const existing =
    await getBotUser(
      env,
      user.id
    );

  if (!existing) {
    await sendAccessPanel(
      env,
      user,
      message.chat.id
    );

    return;
  }

  const count =
    await getReferralCount(
      env,
      user.id
    );

  const link =
    `https://t.me/${BOT_USERNAME}?start=ref_${user.id}`;

  const shareUrl =
    "https://t.me/share/url?url=" +
    encodeURIComponent(link) +
    "&text=" +
    encodeURIComponent(
      "Menejerlik by Nurmuhammad platformasiga qo‘shiling!"
    );

  await sendMessage(
    env,
    message.chat.id,
`
<b>🔗 TAKLIF TIZIMI</b>

Sizning natijangiz:

👫 Taklif qilinganlar:
<b>${count}/${REQUIRED_REFERRALS}</b>

${
  count >= REQUIRED_REFERRALS
    ? "🎉 Siz referral talabini bajargansiz!"
    : `⏳ Yana <b>${REQUIRED_REFERRALS - count} ta</b> foydalanuvchi kerak.`
}

<b>Shaxsiy havolangiz:</b>

<code>${link}</code>

Havolani do‘stlaringizga yuboring.

⚠️ Referral faqat yangi foydalanuvchi botga kirib, telefon raqamini tasdiqlagandan keyin hisoblanadi.
`.trim(),
    {
      inline_keyboard: [
        [
          {
            text: "📤 ULASHISH",
            url: shareUrl,
          },
        ],
        [
          {
            text: "🔄 HOLATNI TEKSHIRISH",
            callback_data: "refresh_status",
          },
        ],
      ],
    }
  );
}


/* =========================================================
   COMMAND HANDLER
========================================================= */

async function handleText(
  env: Env,
  message: TelegramMessage
) {
  const text =
    message.text?.trim() ?? "";

  if (!text) {
    return;
  }

  const command =
    text
      .split(/\s+/)[0]
      .split("@")[0]
      .toLowerCase();

  switch (command) {
    case "/start":
      await handleStart(
        env,
        message
      );
      return;

    case "/status":
      await handleStatus(
        env,
        message
      );
      return;

    case "/ref":
    case "/referral":
      await handleReferral(
        env,
        message
      );
      return;

    case "/help":
      await sendMessage(
        env,
        message.chat.id,
`
<b>🎓 ${BOT_NAME}</b>

<b>Buyruqlar:</b>

/start — boshlash
/status — holatni ko‘rish
/ref — referral havolasi
/help — yordam

<b>Platformaga kirish:</b>

1️⃣ Telefon raqamini tasdiqlash
2️⃣ @talim_ilmfan guruhiga qo‘shilish
3️⃣ 5 ta yangi foydalanuvchini taklif qilish
4️⃣ Testlarni boshlash

Savollar bo‘lsa, administratorga murojaat qiling.
`.trim()
      );
      return;

    case "📊 STATUS":
      await handleStatus(
        env,
        message
      );
      return;

    case "🔗 TAKLIF HAVOLASI":
    case "🔗 TAKLIF LINKI":
      await handleReferral(
        env,
        message
      );
      return;

    case "/test":
      await sendMessage(
        env,
        message.chat.id,
`
🚀 <b>Test platformasi</b>

Talablar bajarilgach, quyidagi tugma orqali testlarni boshlashingiz mumkin.
`.trim(),
        {
          inline_keyboard: [
            [
              {
                text: "🚀 TESTLARNI OCHISH",
                web_app: {
                  url: MINI_APP_URL,
                },
              },
            ],
          ],
        }
      );
      return;

    default:
      if (
        message.chat.type === "private"
      ) {
        await sendAccessPanel(
          env,
          message.from!,
          message.chat.id,
          "ℹ️ Quyidagi menyudan kerakli bo‘limni tanlang."
        );
      }
  }
}


/* =========================================================
   CALLBACK HANDLER
========================================================= */

async function handleCallback(
  env: Env,
  query: TelegramCallbackQuery
) {
  const data =
    query.data ?? "";

  const user =
    query.from;

  if (
    data === "check_membership" ||
    data === "refresh_status"
  ) {
    await answerCallback(
      env,
      query.id,
      "🔄 Holat tekshirilmoqda..."
    );

    await ensureAccessTables(env);

    if (!query.message) {
      return;
    }

    await sendAccessPanel(
      env,
      user,
      query.message.chat.id,
      "🔄 <b>Holat yangilandi</b>"
    );

    return;
  }

  await answerCallback(
    env,
    query.id
  );
}


/* =========================================================
   TELEGRAM UPDATE
========================================================= */

async function processTelegramUpdate(
  env: Env,
  update: TelegramUpdate
) {
  try {
    if (update.callback_query) {
      await handleCallback(
        env,
        update.callback_query
      );

      return;
    }

    const message =
      update.message;

    if (!message) {
      return;
    }

    if (message.contact) {
      await handleContact(
        env,
        message
      );

      return;
    }

    if (message.text) {
      await handleText(
        env,
        message
      );
    }
  } catch (error) {
    console.error(
      "Telegram update error:",
      error
    );
  }
}


/* =========================================================
   CURRICULUM
========================================================= */

function getCurriculumModules(
  date: string
): string[] {
  const start =
    new Date(
      `${CURRICULUM_START_DATE}T00:00:00Z`
    );

  const current =
    new Date(
      `${date}T00:00:00Z`
    );

  const diff =
    Math.floor(
      (
        current.getTime() -
        start.getTime()
      ) /
      (24 * 60 * 60 * 1000)
    );

  const day =
    diff + 1;

  if (day >= 1 && day <= 10) {
    return [`m${day}`];
  }

  if (day === 11) {
    return ["m1", "m2", "m3"];
  }

  if (day === 12) {
    return ["m4", "m5", "m6"];
  }

  if (day === 13) {
    return ["m7", "m8", "m9", "m10"];
  }

  if (day === 14) {
    return [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
    ];
  }

  if (day === 15) {
    return [
      "m6",
      "m7",
      "m8",
      "m9",
      "m10",
    ];
  }

  return [
    "m1",
    "m2",
    "m3",
    "m4",
    "m5",
    "m6",
    "m7",
    "m8",
    "m9",
    "m10",
  ];
}


/* =========================================================
   QUESTION POOL
========================================================= */

function collectQuestions(
  moduleIds: string[]
): Question[] {
  const result: Question[] = [];

  for (const moduleId of moduleIds) {
    const module =
      getModuleById(moduleId);

    if (!module) {
      continue;
    }

    const levels = [
      "easy",
      "medium",
      "hard",
      "case",
    ] as const;

    for (const level of levels) {
      const questions =
        getTopicQuestions(
          moduleId,
          level
        ) as Question[];

      if (
        Array.isArray(questions)
      ) {
        result.push(
          ...questions
        );
      }
    }
  }

  return result;
}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffle<T>(
  array: T[]
): T[] {
  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      result[i],
      result[j],
    ] = [
      result[j],
      result[i],
    ];
  }

  return result;
}


/* =========================================================
   LEVEL FILTER
========================================================= */

function getQuestionsByLevel(
  questions: Question[],
  level: string
): Question[] {
  return questions.filter(
    (question) =>
      String(
        question.level ??
        question.difficulty ??
        ""
      ).toLowerCase() ===
      level.toLowerCase()
  );
}


/* =========================================================
   CHALLENGE SELECTION
========================================================= */

function selectChallengeQuestions(
  questions: Question[]
): Question[] {
  let easy =
    getQuestionsByLevel(
      questions,
      "easy"
    );

  let medium =
    getQuestionsByLevel(
      questions,
      "medium"
    );

  let hard =
    getQuestionsByLevel(
      questions,
      "hard"
    );

  let cases =
    getQuestionsByLevel(
      questions,
      "case"
    );

  easy = shuffle(easy);
  medium = shuffle(medium);
  hard = shuffle(hard);
  cases = shuffle(cases);

  const selected: Question[] = [];

  selected.push(
    ...easy.slice(0, 5)
  );

  selected.push(
    ...medium.slice(0, 10)
  );

  selected.push(
    ...hard.slice(0, 7)
  );

  selected.push(
    ...cases.slice(0, 3)
  );

  /* -------------------------------------------------------
     FALLBACK
  ------------------------------------------------------- */

  if (
    selected.length <
    QUESTIONS_PER_CHALLENGE
  ) {
    const selectedIds =
      new Set(
        selected.map(
          (q) => q.id
        )
      );

    const remaining =
      shuffle(
        questions.filter(
          (q) =>
            !selectedIds.has(q.id)
        )
      );

    selected.push(
      ...remaining.slice(
        0,
        QUESTIONS_PER_CHALLENGE -
          selected.length
      )
    );
  }

  return shuffle(
    selected.slice(
      0,
      QUESTIONS_PER_CHALLENGE
    )
  );
}


/* =========================================================
   CHALLENGE ID
========================================================= */

function challengeId(
  date: string,
  hour: number
) {
  return `daily-${date}-${String(hour).padStart(2, "0")}`;
}


/* =========================================================
   CREATE CHALLENGE
========================================================= */

async function createHourlyChallenge(
  env: Env,
  date: string,
  hour: number
) {
  const modules =
    getCurriculumModules(date);

  const pool =
    collectQuestions(modules);

  const selected =
    selectChallengeQuestions(
      pool
    );

  if (
    selected.length <
    QUESTIONS_PER_CHALLENGE
  ) {
    console.error(
      "Savollar yetarli emas:",
      selected.length
    );

    return null;
  }

  const id =
    challengeId(
      date,
      hour
    );

  const existing =
    await env.DB
      .prepare(`
        SELECT *
        FROM daily_challenges
        WHERE id = ?
        LIMIT 1
      `)
      .bind(id)
      .first<ChallengeRow>();

  if (existing) {
    return existing;
  }

  const now =
    Date.now();

  const endAt =
    now +
    CHALLENGE_DURATION_SEC *
      1000;

  await env.DB
    .prepare(`
      INSERT INTO daily_challenges
      (
        id,
        challenge_date,
        hour,
        start_at,
        end_at,
        status
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    .bind(
      id,
      date,
      hour,
      now,
      endAt,
      "active"
    )
    .run();

  for (
    let index = 0;
    index < selected.length;
    index++
  ) {
    const question =
      selected[index];

    await env.DB
      .prepare(`
        INSERT INTO challenge_questions
        (
          challenge_id,
          question_index,
          question_id
        )
        VALUES (?, ?, ?)
      `)
      .bind(
        id,
        index,
        question.id
      )
      .run();
  }

  return {
    id,
    date,
    hour,
    startAt: now,
    endAt,
    modules,
    questionCount:
      selected.length,
  };
}


/* =========================================================
   FIND QUESTION
========================================================= */

function findQuestionById(
  questionId: string
): Question | null {
  const modules = [
    "m1",
    "m2",
    "m3",
    "m4",
    "m5",
    "m6",
    "m7",
    "m8",
    "m9",
    "m10",
  ];

  const levels = [
    "easy",
    "medium",
    "hard",
    "case",
  ] as const;

  for (const moduleId of modules) {
    for (const level of levels) {
      const questions =
        getTopicQuestions(
          moduleId,
          level
        ) as Question[];

      const found =
        questions.find(
          (q) =>
            q.id === questionId
        );

      if (found) {
        return found;
      }
    }
  }

  return null;
}


/* =========================================================
   SEND HOURLY CHALLENGE
========================================================= */

async function sendHourlyChallenge(
  env: Env,
  challenge: {
    id: string;
    date: string;
    hour: number;
    startAt: number;
    endAt: number;
    modules: string[];
    questionCount: number;
  }
) {
  const text =
`
<b>🔥 MENEJERLIK DAILY CHALLENGE</b>

📅 Sana: <b>${challenge.date}</b>
⏰ Vaqt: <b>${String(challenge.hour).padStart(2, "0")}:00</b>

━━━━━━━━━━━━━━━━━━

📝 Savollar: <b>${challenge.questionCount} ta</b>
⏱ Vaqt: <b>50 daqiqa</b>
⭐ Har to‘g‘ri javob: <b>2 ball</b>
🏆 Maksimal natija: <b>50 ball</b>

📚 Bugungi yo‘nalishlar:
<b>${challenge.modules.join(" • ")}</b>

━━━━━━━━━━━━━━━━━━

🚀 Bilimingizni sinab ko‘ring!

<b>Testni boshlash uchun tugmani bosing.</b>
`.trim();

  await sendMessage(
    env,
    GROUP_USERNAME,
    text,
    {
      inline_keyboard: [
        [
          {
            text: "🚀 TESTNI BOSHLASH",
            web_app: {
              url:
                `${MINI_APP_URL}/?challenge=${encodeURIComponent(challenge.id)}`,
            },
          },
        ],
      ],
    }
  );
}


/* =========================================================
   DAILY RESULTS
========================================================= */

async function sendDailyResults(
  env: Env,
  date: string
) {
  const rows =
    await env.DB
      .prepare(`
        SELECT
          cp.telegram_id,
          cp.score,
          cp.correct_answers,
          bu.first_name,
          bu.last_name,
          bu.username
        FROM challenge_participants cp
        LEFT JOIN bot_users bu
          ON bu.telegram_id = cp.telegram_id
        WHERE cp.challenge_date = ?
        ORDER BY cp.score DESC, cp.correct_answers DESC
        LIMIT 10
      `)
      .bind(date)
      .all<{
        telegram_id: number;
        score: number;
        correct_answers: number;
        first_name: string | null;
        last_name: string | null;
        username: string | null;
      }>();

  const results =
    rows.results ?? [];

  let text =
`
<b>🏆 MENEJERLIK DAILY — KUNLIK REYTING</b>

📅 ${date}

━━━━━━━━━━━━━━━━━━
`;

  if (!results.length) {
    text +=
      "\nBugun hali natijalar mavjud emas.";
  } else {
    results.forEach(
      (row, index) => {
        const name =
          row.first_name ??
          row.username ??
          `User ${row.telegram_id}`;

        const medal =
          index === 0
            ? "🥇"
            : index === 1
            ? "🥈"
            : index === 2
            ? "🥉"
            : `${index + 1}.`;

        text +=
          `\n${medal} <b>${name}</b> — ${row.score} ball`;
      }
    );
  }

  text +=
`
━━━━━━━━━━━━━━━━━━

📊 Bugungi challenge yakunlandi.

🎯 Ertangi challenge'da yana ko‘rishamiz!
`;

  await sendMessage(
    env,
    GROUP_USERNAME,
    text.trim()
  );
}


/* =========================================================
   HEALTH
========================================================= */

async function healthResponse(
  env: Env
) {
  const tashkent =
    getTashkentParts();

  return json({
    ok: true,

    service:
      "menejerlik-worker",

    bot:
      BOT_NAME,

    botUsername:
      `@${BOT_USERNAME}`,

    worker:
      WORKER_URL,

    miniApp:
      MINI_APP_URL,

    webhookPaths: [
      "/",
      WEBHOOK_PATH,
    ],

    telegramConfigured:
      Boolean(
        env.TELEGRAM_BOT_TOKEN
      ),

    databaseConfigured:
      Boolean(env.DB),

    group:
      GROUP_USERNAME,

    groupUrl:
      GROUP_URL,

    access: {
      requiredReferrals:
        REQUIRED_REFERRALS,
    },

    cron:
      "0 * * * *",

    challenge: {
      startHour:
        DAILY_START_HOUR,

      endHour:
        DAILY_END_HOUR,

      resultsHour:
        DAILY_RESULTS_HOUR,

      questions:
        QUESTIONS_PER_CHALLENGE,

      durationMinutes:
        CHALLENGE_DURATION_SEC /
        60,

      pointsPerCorrect:
        POINTS_PER_CORRECT,

      maxScore:
        MAX_CHALLENGE_SCORE,
    },

    tashkentTime:
      tashkent,
  });
}


/* =========================================================
   CHALLENGE API
========================================================= */

async function challengeApi(
  env: Env,
  url: URL
) {
  const id =
    url.searchParams.get(
      "id"
    );

  if (!id) {
    return json(
      {
        ok: false,
        error:
          "challenge id required",
      },
      400
    );
  }

  const challenge =
    await env.DB
      .prepare(`
        SELECT *
        FROM daily_challenges
        WHERE id = ?
        LIMIT 1
      `)
      .bind(id)
      .first<ChallengeRow>();

  if (!challenge) {
    return json(
      {
        ok: false,
        error:
          "Challenge topilmadi",
      },
      404
    );
  }

  const rows =
    await env.DB
      .prepare(`
        SELECT
          question_index,
          question_id
        FROM challenge_questions
        WHERE challenge_id = ?
        ORDER BY question_index ASC
      `)
      .bind(id)
      .all<{
        question_index: number;
        question_id: string;
      }>();

  const questions =
    (rows.results ?? [])
      .map(
        (row) =>
          findQuestionById(
            row.question_id
          )
      )
      .filter(
        Boolean
      ) as Question[];

  return json({
    ok: true,

    challenge: {
      id:
        challenge.id,

      date:
        challenge.challenge_date,

      hour:
        challenge.hour,

      startAt:
        challenge.start_at,

      endAt:
        challenge.end_at,

      durationSeconds:
        CHALLENGE_DURATION_SEC,

      questionCount:
        questions.length,

      maxScore:
        MAX_CHALLENGE_SCORE,
    },

    questions,
  });
}


/* =========================================================
   TELEGRAM WEBHOOK
========================================================= */

async function telegramWebhook(
  request: Request,
  env: Env
): Promise<Response> {
  try {
    const update =
      await request.json() as TelegramUpdate;

    await processTelegramUpdate(
      env,
      update
    );

    return json({
      ok: true,
    });
  } catch (error) {
    console.error(
      "Webhook error:",
      error
    );

    return json({
      ok: true,
    });
  }
}


/* =========================================================
   SCHEDULED
========================================================= */

async function scheduledHandler(
  env: Env
) {
  const time =
    getTashkentParts();

  const {
    date,
    hour,
    minute,
  } = time;

  /* -------------------------------------------------------
     DAILY CHALLENGES
     Cron har soatda ishlaydi.
  ------------------------------------------------------- */

  if (
    hour >= DAILY_START_HOUR &&
    hour <= DAILY_END_HOUR &&
    minute <= 5
  ) {
    const challenge =
      await createHourlyChallenge(
        env,
        date,
        hour
      );

    if (challenge) {
      await sendHourlyChallenge(
        env,
        challenge as {
          id: string;
          date: string;
          hour: number;
          startAt: number;
          endAt: number;
          modules: string[];
          questionCount: number;
        }
      );
    }
  }

  /* -------------------------------------------------------
     DAILY RESULTS
  ------------------------------------------------------- */

  if (
    hour === DAILY_RESULTS_HOUR &&
    minute <= 5
  ) {
    await sendDailyResults(
      env,
      date
    );
  }
}


/* =========================================================
   MAIN FETCH
========================================================= */

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url =
      new URL(request.url);

    /* -----------------------------------------------------
       HEALTH
    ----------------------------------------------------- */

    if (
      request.method === "GET" &&
      url.pathname === "/health"
    ) {
      return healthResponse(env);
    }


    /* -----------------------------------------------------
       TELEGRAM WEBHOOK
       /telegram/webhook
    ----------------------------------------------------- */

    if (
      request.method === "POST" &&
      url.pathname === WEBHOOK_PATH
    ) {
      return telegramWebhook(
        request,
        env
      );
    }


    /* -----------------------------------------------------
       ROOT POST
       Webhook root sifatida ham ishlashi uchun.
    ----------------------------------------------------- */

    if (
      request.method === "POST" &&
      url.pathname === "/"
    ) {
      const contentType =
        request.headers.get(
          "content-type"
        ) ?? "";

      if (
        contentType.includes(
          "application/json"
        )
      ) {
        return telegramWebhook(
          request,
          env
        );
      }
    }


    /* -----------------------------------------------------
       CHALLENGE API
    ----------------------------------------------------- */

    if (
      request.method === "GET" &&
      url.pathname === "/api/challenge"
    ) {
      return challengeApi(
        env,
        url
      );
    }


    /* -----------------------------------------------------
       MINI APP
       ROOT GET NEXT/OPENNEXT GA BERILADI
    ----------------------------------------------------- */

    return nextWorker.fetch(
      request,
      env,
      ctx
    );
  },


  /* =======================================================
     CRON
  ======================================================= */

  async scheduled(
    _controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext
  ) {
    ctx.waitUntil(
      scheduledHandler(env)
    );
  },
};
