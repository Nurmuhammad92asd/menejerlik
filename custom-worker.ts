import nextWorker from "./.open-next/worker.js";
import {
  getTopicQuestions,
  getModuleById,
} from "./lib/quiz-data";

/* =========================================================
   MENEJERLIK BY NURMUHAMMAD
   PROFESSIONAL CLOUDFLARE WORKER
   =========================================================

   ARXITEKTURA

   Telegram Bot
        ↓
   Telefon tasdiqlash
        ↓
   @talim_ilmfan a'zolik
        ↓
   5 ta verified referral
        ↓
   Mini App
        ↓
   Daily Challenge
        ↓
   D1
        ↓
   Leaderboard

   ROUTES

   GET  /
        → Next/OpenNext Mini App

   GET  /health
        → Worker health

   GET  /api/access
        → Telegram Mini App access status

   GET  /api/challenge?id=...
        → Challenge savollari

   POST /api/challenge/result
        → Challenge natijasini serverda hisoblash

   POST /telegram/webhook
        → Telegram webhook

   POST /
        → Telegram webhook fallback

   CRON

   05:00–22:00
        → har soatda 25 ta challenge

   23:00
        → kunlik TOP-10

   ========================================================= */


/* =========================================================
   TYPES
========================================================= */

interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  TELEGRAM_BOT_TOKEN: string;

  /*
   * Agar guruh private bo‘lsa:
   * QUIZ_GROUP_CHAT_ID = -100xxxxxxxxxx
   *
   * Agar bo‘sh bo‘lsa @talim_ilmfan ishlatiladi.
   */
  QUIZ_GROUP_CHAT_ID?: string;
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
  type:
    | "private"
    | "group"
    | "supergroup"
    | "channel";
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

interface ChallengeQuestionRow {
  challenge_id: string;
  question_index: number;
  question_id: string;
}

interface ChallengeParticipantRow {
  challenge_id: string;
  challenge_date: string;
  telegram_id: number;
  score: number;
  correct_answers: number;
  total_questions: number;
  duration_seconds: number;
  submitted_at: number;
}

interface Question {
  id: string;
  text: string;

  options?: unknown;

  answer?: unknown;
  correctAnswer?: unknown;

  explanation?: string;

  level?: string;
  difficulty?: string;
  type?: string;

  [key: string]: unknown;
}


/* =========================================================
   CONFIGURATION
========================================================= */

const BOT_NAME =
  "Menejerlik by Nurmuhammad";

const BOT_USERNAME =
  "topmenejerbot";

const WORKER_URL =
  "https://menejerlik.nurmuhammadtalatbekov.workers.dev";

const MINI_APP_URL =
  WORKER_URL;

const GROUP_USERNAME =
  "@talim_ilmfan";

const GROUP_URL =
  "https://t.me/talim_ilmfan";

const WEBHOOK_PATH =
  "/telegram/webhook";

const REQUIRED_REFERRALS =
  5;


/* =========================================================
   DAILY CHALLENGE CONFIG
========================================================= */

/*
 * 05:00 dan 22:00 gacha har soatda challenge.
 *
 * 23:00 — kunlik natijalar.
 */
const DAILY_START_HOUR =
  5;

const DAILY_END_HOUR =
  22;

const DAILY_RESULTS_HOUR =
  23;

const QUESTIONS_PER_CHALLENGE =
  25;

const POINTS_PER_CORRECT =
  2;

const MAX_CHALLENGE_SCORE =
  QUESTIONS_PER_CHALLENGE *
  POINTS_PER_CORRECT;

const CHALLENGE_DURATION_SEC =
  50 * 60;

const CURRICULUM_START_DATE =
  "2026-10-01";


/* =========================================================
   GENERAL CONSTANTS
========================================================= */

const TELEGRAM_INIT_DATA_MAX_AGE =
  24 * 60 * 60;

const ALLOWED_MODULES = [
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
] as const;

const LEVELS = [
  "easy",
  "medium",
  "hard",
  "case",
] as const;


/* =========================================================
   RESPONSE HELPERS
========================================================= */

function json(
  data: unknown,
  status = 200,
  headers: Record<string, string> = {}
): Response {
  return new Response(
    JSON.stringify(data, null, 2),
    {
      status,
      headers: {
        "content-type":
          "application/json; charset=utf-8",

        "cache-control":
          "no-store",

        ...headers,
      },
    }
  );
}


function corsHeaders(
  origin?: string | null
): Record<string, string> {
  return {
    "access-control-allow-origin":
      origin || "*",

    "access-control-allow-methods":
      "GET,POST,OPTIONS",

    "access-control-allow-headers":
      "Content-Type, X-Telegram-Init-Data",

    "access-control-max-age":
      "86400",
  };
}


function corsJson(
  request: Request,
  data: unknown,
  status = 200
): Response {
  return json(
    data,
    status,
    corsHeaders(
      request.headers.get("origin")
    )
  );
}


/* =========================================================
   TASHKENT TIME
========================================================= */

function getTashkentDate(): Date {
  const now =
    new Date();

  const formatter =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone:
          "Asia/Tashkent",

        year:
          "numeric",

        month:
          "2-digit",

        day:
          "2-digit",

        hour:
          "2-digit",

        minute:
          "2-digit",

        second:
          "2-digit",

        hour12:
          false,
      }
    );

  const parts =
    formatter.formatToParts(now);

  const get =
    (type: string) =>
      parts.find(
        (part) =>
          part.type === type
      )?.value ?? "0";

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
  const date =
    getTashkentDate();

  return {
    date:
      date
        .toISOString()
        .slice(0, 10),

    hour:
      date.getUTCHours(),

    minute:
      date.getUTCMinutes(),

    second:
      date.getUTCSeconds(),
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
  if (
    !env.TELEGRAM_BOT_TOKEN
  ) {
    console.error(
      "TELEGRAM_BOT_TOKEN mavjud emas"
    );

    return null;
  }

  try {
    const response =
      await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`,
        {
          method:
            "POST",

          headers: {
            "content-type":
              "application/json",
          },

          body:
            JSON.stringify(body),
        }
      );

    const data =
      await response.json() as {
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

    return (
      data.result ??
      null
    );
  } catch (error) {
    console.error(
      `Telegram request error: ${method}`,
      error
    );

    return null;
  }
}


/* =========================================================
   SEND MESSAGE
========================================================= */

async function sendMessage(
  env: Env,
  chatId: number | string,
  text: string,
  replyMarkup?: unknown
) {
  return telegramRequest(
    env,
    "sendMessage",
    {
      chat_id:
        chatId,

      text,

      parse_mode:
        "HTML",

      disable_web_page_preview:
        true,

      ...(replyMarkup
        ? {
            reply_markup:
              replyMarkup,
          }
        : {}),
    }
  );
}


/* =========================================================
   CALLBACK
========================================================= */

async function answerCallback(
  env: Env,
  callbackId: string,
  text?: string
) {
  return telegramRequest(
    env,
    "answerCallbackQuery",
    {
      callback_query_id:
        callbackId,

      ...(text
        ? {
            text,
            show_alert:
              false,
          }
        : {}),
    }
  );
}


/* =========================================================
   KEYBOARDS
========================================================= */

function phoneKeyboard() {
  return {
    keyboard: [
      [
        {
          text:
            "📱 TELEFON RAQAMIMNI TASDIQLASH",

          request_contact:
            true,
        },
      ],
    ],

    resize_keyboard:
      true,

    one_time_keyboard:
      true,
  };
}


function removeKeyboard() {
  return {
    remove_keyboard:
      true,
  };
}


/*
 * Main Mini App uchun STARTAPP link.
 *
 * Inline web_app emas.
 */
function getMiniAppStartLink(
  payload?: string
) {
  const base =
    `https://t.me/${BOT_USERNAME}`;

  if (!payload) {
    return base;
  }

  return (
    `${base}?startapp=` +
    encodeURIComponent(payload)
  );
}


function accessKeyboard(
  options: {
    member: boolean;
    referrals: number;
    access: boolean;
    userId: number;
  }
) {
  const rows:
    unknown[][] = [];

  if (
    !options.member
  ) {
    rows.push([
      {
        text:
          "👥 GURUHGA QO‘SHILISH",

        url:
          GROUP_URL,
      },
    ]);

    rows.push([
      {
        text:
          "🔄 A'ZOLIKNI TEKSHIRISH",

        callback_data:
          "check_membership",
      },
    ]);
  }

  if (
    options.referrals <
    REQUIRED_REFERRALS
  ) {
    const referralLink =
      `https://t.me/${BOT_USERNAME}?start=ref_${options.userId}`;

    const shareUrl =
      "https://t.me/share/url?url=" +
      encodeURIComponent(
        referralLink
      ) +
      "&text=" +
      encodeURIComponent(
        "Menejerlik by Nurmuhammad test platformasiga qo‘shiling!"
      );

    rows.push([
      {
        text:
          "🔗 TAKLIF HAVOLAM",

        url:
          shareUrl,
      },
    ]);

    rows.push([
      {
        text:
          "🔄 HOLATNI YANGILASH",

        callback_data:
          "refresh_status",
      },
    ]);
  }

  if (
    options.access
  ) {
    rows.push([
      {
        text:
          "🚀 TESTLARNI BOSHLASH",

        url:
          getMiniAppStartLink(),
      },
    ]);
  }

  return {
    inline_keyboard:
      rows,
  };
}


/* =========================================================
   DATABASE — ACCESS TABLES
========================================================= */

async function ensureAccessTables(
  env: Env
) {
  await env.DB
    .prepare(`
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
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE TABLE IF NOT EXISTS bot_pending_referrals (
        telegram_id INTEGER PRIMARY KEY,
        referrer_id INTEGER NOT NULL,
        created_at INTEGER NOT NULL
      )
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE TABLE IF NOT EXISTS bot_referrals (
        referred_id INTEGER PRIMARY KEY,
        referrer_id INTEGER NOT NULL,
        created_at INTEGER NOT NULL
      )
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_bot_referrals_referrer
      ON bot_referrals(referrer_id)
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_bot_users_username
      ON bot_users(username)
    `)
    .run();
}


/* =========================================================
   DATABASE — CHALLENGE TABLES
========================================================= */

async function ensureChallengeTables(
  env: Env
) {
  await env.DB
    .prepare(`
      CREATE TABLE IF NOT EXISTS daily_challenges (
        id TEXT PRIMARY KEY,
        challenge_date TEXT NOT NULL,
        hour INTEGER NOT NULL,
        start_at INTEGER NOT NULL,
        end_at INTEGER NOT NULL,
        status TEXT NOT NULL
      )
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_daily_challenges_date
      ON daily_challenges(challenge_date)
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_daily_challenges_status
      ON daily_challenges(status)
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE TABLE IF NOT EXISTS challenge_questions (
        challenge_id TEXT NOT NULL,
        question_index INTEGER NOT NULL,
        question_id TEXT NOT NULL,
        PRIMARY KEY (challenge_id, question_index)
      )
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_challenge_questions_challenge
      ON challenge_questions(challenge_id)
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_challenge_questions_question
      ON challenge_questions(question_id)
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE TABLE IF NOT EXISTS challenge_participants (
        challenge_id TEXT NOT NULL,
        challenge_date TEXT NOT NULL,
        telegram_id INTEGER NOT NULL,
        score INTEGER NOT NULL DEFAULT 0,
        correct_answers INTEGER NOT NULL DEFAULT 0,
        total_questions INTEGER NOT NULL DEFAULT 0,
        duration_seconds INTEGER NOT NULL DEFAULT 0,
        submitted_at INTEGER NOT NULL,
        PRIMARY KEY (challenge_id, telegram_id)
      )
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_challenge_participants_date
      ON challenge_participants(challenge_date)
    `)
    .run();

  await env.DB
    .prepare(`
      CREATE INDEX IF NOT EXISTS idx_challenge_participants_user
      ON challenge_participants(telegram_id)
    `)
    .run();
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
      .bind(
        telegramId
      )
      .first<BotUserRow>()
  ) ?? null;
}


/* =========================================================
   REFERRALS
========================================================= */

async function getReferralCount(
  env: Env,
  telegramId: number
): Promise<number> {
  const row =
    await env.DB
      .prepare(`
        SELECT COUNT(*) AS count
        FROM bot_referrals
        WHERE referrer_id = ?
      `)
      .bind(
        telegramId
      )
      .first<{
        count: number;
      }>();

  return Number(
    row?.count ?? 0
  );
}


/* =========================================================
   PHONE
========================================================= */

function normalizePhone(
  phone: string
): string {
  const digits =
    phone.replace(
      /\D/g,
      ""
    );

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
  if (
    telegramId ===
    referrerId
  ) {
    return;
  }

  const referrer =
    await getBotUser(
      env,
      referrerId
    );

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
  const now =
    Date.now();

  const existing =
    await getBotUser(
      env,
      telegramUser.id
    );

  const normalizedPhone =
    normalizePhone(
      phone
    );

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
        telegramUser.first_name ??
          null,

        telegramUser.last_name ??
          null,

        telegramUser.username ??
          null,

        normalizedPhone,

        now,

        telegramUser.id
      )
      .run();

    return {
      created:
        false,

      user:
        await getBotUser(
          env,
          telegramUser.id
        ),
    };
  }

  const pending =
    await env.DB
      .prepare(`
        SELECT referrer_id
        FROM bot_pending_referrals
        WHERE telegram_id = ?
        LIMIT 1
      `)
      .bind(
        telegramUser.id
      )
      .first<{
        referrer_id: number;
      }>();

  const referredBy =
    pending?.referrer_id ??
    null;

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

      telegramUser.first_name ??
        null,

      telegramUser.last_name ??
        null,

      telegramUser.username ??
        null,

      normalizedPhone,

      referredBy,

      now,

      now
    )
    .run();

  if (
    referredBy &&
    referredBy !==
      telegramUser.id
  ) {
    const referrer =
      await getBotUser(
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
    .bind(
      telegramUser.id
    )
    .run();

  return {
    created:
      true,

    user:
      await getBotUser(
        env,
        telegramUser.id
      ),
  };
}


/* =========================================================
   GROUP MEMBERSHIP
========================================================= */

function getGroupChatId(
  env: Env
): string {
  return (
    env.QUIZ_GROUP_CHAT_ID ||
    GROUP_USERNAME
  );
}


async function checkGroupMembership(
  env: Env,
  telegramId: number
) {
  const result =
    await telegramRequest<
      TelegramMemberResult["result"]
    >(
      env,
      "getChatMember",
      {
        chat_id:
          getGroupChatId(env),

        user_id:
          telegramId,
      }
    );

  if (!result) {
    return {
      member:
        false,

      status:
        "unknown",
    };
  }

  const status =
    result.status;

  const member =
    status === "creator" ||
    status === "administrator" ||
    status === "member" ||
    (
      status ===
        "restricted" &&
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
  const user =
    await getBotUser(
      env,
      telegramId
    );

  if (!user) {
    return {
      registered:
        false,

      phoneVerified:
        false,

      member:
        false,

      referrals:
        0,

      requiredReferrals:
        REQUIRED_REFERRALS,

      remaining:
        REQUIRED_REFERRALS,

      access:
        false,
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
    Boolean(
      user.phone
    ) &&
    membership.member &&
    referrals >=
      REQUIRED_REFERRALS;

  return {
    registered:
      true,

    phoneVerified:
      Boolean(
        user.phone
      ),

    member:
      membership.member,

    membershipStatus:
      membership.status,

    referrals,

    requiredReferrals:
      REQUIRED_REFERRALS,

    remaining:
      Math.max(
        0,
        REQUIRED_REFERRALS -
          referrals
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

  if (
    !status.registered
  ) {
    await sendMessage(
      env,
      chatId,
`
<b>🎓 ${BOT_NAME}</b>

Assalomu alaykum, <b>${telegramUser.first_name ?? "Hurmatli foydalanuvchi"}</b>!

Bu platforma menejerlik bo‘yicha bilimlaringizni sinash, rivojlantirish va natijangizni kuzatish uchun yaratilgan.

<b>🔐 Platformaga kirish uchun:</b>

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

  const referralLink =
    `https://t.me/${BOT_USERNAME}?start=ref_${telegramUser.id}`;

  let text =
    "";

  if (intro) {
    text +=
      `${intro}\n\n`;
  }

  text +=
`<b>🎓 MENEJERLIK BY NURMUHAMMAD</b>

👤 <b>${telegramUser.first_name ?? "Foydalanuvchi"}</b>

📱 Telefon: ${
  status.phoneVerified
    ? "✅ Tasdiqlangan"
    : "❌ Tasdiqlanmagan"
}

👥 Guruh:
${
  status.member
    ? "✅ @talim_ilmfan a'zosi"
    : "❌ Guruhga a'zo emassiz"
}

👫 Takliflar:
<b>${status.referrals}/${REQUIRED_REFERRALS}</b>
`;

  if (
    status.remaining >
    0
  ) {
    text += `
⏳ Yana <b>${status.remaining} ta</b> foydalanuvchi kerak.

🔗 <b>Sizning shaxsiy havolangiz:</b>
<code>${referralLink}</code>

Taklif qilgan foydalanuvchi botda telefon raqamini tasdiqlagandan keyingina referral hisoblanadi.
`;
  }

  if (
    status.access
  ) {
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
      member:
        status.member,

      referrals:
        status.referrals,

      access:
        status.access,

      userId:
        telegramUser.id,
    })
  );
}


/* =========================================================
   START PAYLOAD
========================================================= */

function getStartPayload(
  text?: string
): string | null {
  if (!text) {
    return null;
  }

  const parts =
    text
      .trim()
      .split(/\s+/);

  if (
    parts.length < 2
  ) {
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

  if (
    !payload.startsWith(
      "ref_"
    )
  ) {
    return null;
  }

  const value =
    Number(
      payload.slice(4)
    );

  if (
    !Number.isSafeInteger(
      value
    ) ||
    value <= 0
  ) {
    return null;
  }

  return value;
}


/* =========================================================
   START
========================================================= */

async function handleStart(
  env: Env,
  message: TelegramMessage
) {
  const user =
    message.from;

  if (!user) {
    return;
  }

  await ensureAccessTables(
    env
  );

  const payload =
    getStartPayload(
      message.text
    );

  const referrerId =
    parseReferralPayload(
      payload
    );

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
   CONTACT
========================================================= */

async function handleContact(
  env: Env,
  message: TelegramMessage
) {
  const user =
    message.from;

  const contact =
    message.contact;

  if (
    !user ||
    !contact
  ) {
    return;
  }

  /*
   * Faqat Telegram akkaunt egasining
   * o‘z contact'i qabul qilinadi.
   */
  if (
    contact.user_id &&
    contact.user_id !==
      user.id
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

  await ensureAccessTables(
    env
  );

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
   STATUS
========================================================= */

async function handleStatus(
  env: Env,
  message: TelegramMessage
) {
  const user =
    message.from;

  if (!user) {
    return;
  }

  await ensureAccessTables(
    env
  );

  await sendAccessPanel(
    env,
    user,
    message.chat.id
  );
}


/* =========================================================
   REFERRAL
========================================================= */

async function handleReferral(
  env: Env,
  message: TelegramMessage
) {
  const user =
    message.from;

  if (!user) {
    return;
  }

  await ensureAccessTables(
    env
  );

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
  count >=
  REQUIRED_REFERRALS
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
            text:
              "📤 ULASHISH",

            url:
              shareUrl,
          },
        ],

        [
          {
            text:
              "🔄 HOLATNI TEKSHIRISH",

            callback_data:
              "refresh_status",
          },
        ],
      ],
    }
  );
}


/* =========================================================
   TEXT HANDLER
========================================================= */

async function handleText(
  env: Env,
  message: TelegramMessage
) {
  const text =
    message.text?.trim() ??
    "";

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

    case "/test": {
      const user =
        message.from;

      if (!user) {
        return;
      }

      const status =
        await getAccessStatus(
          env,
          user.id
        );

      if (!status.access) {
        await sendAccessPanel(
          env,
          user,
          message.chat.id,
          "🔒 <b>Testlarga kirish uchun talablar bajarilmagan.</b>"
        );

        return;
      }

      await sendMessage(
        env,
        message.chat.id,
`
🚀 <b>Test platformasi</b>

Testlarni boshlash uchun quyidagi tugmani bosing.
`.trim(),

        {
          inline_keyboard: [
            [
              {
                text:
                  "🚀 TESTLARNI OCHISH",

                url:
                  getMiniAppStartLink(),
              },
            ],
          ],
        }
      );

      return;
    }

    default:
      if (
        message.chat.type ===
        "private"
      ) {
        if (
          message.from
        ) {
          await sendAccessPanel(
            env,
            message.from,
            message.chat.id,
            "ℹ️ Quyidagi menyudan kerakli bo‘limni tanlang."
          );
        }
      }
  }
}


/* =========================================================
   CALLBACK
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
    data ===
      "check_membership" ||
    data ===
      "refresh_status"
  ) {
    await answerCallback(
      env,
      query.id,
      "🔄 Holat tekshirilmoqda..."
    );

    await ensureAccessTables(
      env
    );

    if (
      !query.message
    ) {
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
    if (
      update.callback_query
    ) {
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

    if (
      message.contact
    ) {
      await handleContact(
        env,
        message
      );

      return;
    }

    if (
      message.text
    ) {
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
      (
        24 *
        60 *
        60 *
        1000
      )
    );

  const day =
    diff + 1;

  if (
    day >= 1 &&
    day <= 10
  ) {
    return [
      `m${day}`,
    ];
  }

  if (
    day === 11
  ) {
    return [
      "m1",
      "m2",
      "m3",
    ];
  }

  if (
    day === 12
  ) {
    return [
      "m4",
      "m5",
      "m6",
    ];
  }

  if (
    day === 13
  ) {
    return [
      "m7",
      "m8",
      "m9",
      "m10",
    ];
  }

  if (
    day === 14
  ) {
    return [
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
    ];
  }

  if (
    day === 15
  ) {
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
   QUESTION HELPERS
========================================================= */

function uniqueQuestions(
  questions: Question[]
): Question[] {
  const map =
    new Map<
      string,
      Question
    >();

  for (
    const question of
    questions
  ) {
    if (
      question?.id &&
      !map.has(
        question.id
      )
    ) {
      map.set(
        question.id,
        question
      );
    }
  }

  return Array.from(
    map.values()
  );
}


function collectQuestions(
  moduleIds: string[]
): Question[] {
  const result:
    Question[] = [];

  for (
    const moduleId of
    moduleIds
  ) {
    const module =
      getModuleById(
        moduleId
      );

    if (!module) {
      continue;
    }

    for (
      const level of
      LEVELS
    ) {
      const questions =
        getTopicQuestions(
          moduleId,
          level
        ) as Question[];

      if (
        Array.isArray(
          questions
        )
      ) {
        result.push(
          ...questions
        );
      }
    }
  }

  return uniqueQuestions(
    result
  );
}


function collectAllAvailableQuestions(): Question[] {
  return collectQuestions([
    ...ALLOWED_MODULES,
  ]);
}


/* =========================================================
   SHUFFLE
========================================================= */

function shuffle<T>(
  array: T[]
): T[] {
  const result =
    [...array];

  for (
    let i =
      result.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() *
        (i + 1)
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
        question.type ??
        ""
      )
        .toLowerCase() ===
      level.toLowerCase()
  );
}


/* =========================================================
   TODAY'S USED QUESTIONS
========================================================= */

async function getTodayUsedQuestionIds(
  env: Env,
  date: string
): Promise<Set<string>> {
  const rows =
    await env.DB
      .prepare(`
        SELECT cq.question_id
        FROM challenge_questions cq
        INNER JOIN daily_challenges dc
          ON dc.id = cq.challenge_id
        WHERE dc.challenge_date = ?
      `)
      .bind(
        date
      )
      .all<{
        question_id:
          string;
      }>();

  return new Set(
    (rows.results ?? [])
      .map(
        (row) =>
          row.question_id
      )
  );
}


/* =========================================================
   SMART SELECTION
========================================================= */

function takeUnique(
  target: Question[],
  source: Question[],
  count: number
) {
  const used =
    new Set(
      target.map(
        (q) => q.id
      )
    );

  for (
    const question of
    shuffle(source)
  ) {
    if (
      target.length >=
      count
    ) {
      break;
    }

    if (
      !used.has(
        question.id
      )
    ) {
      target.push(
        question
      );

      used.add(
        question.id
      );
    }
  }
}


function selectChallengeQuestions(
  primaryPool: Question[],
  fallbackPool: Question[],
  usedToday: Set<string>
): Question[] {
  /*
   * Avval bugun ishlatilmagan savollar.
   */
  const freshPrimary =
    primaryPool.filter(
      (question) =>
        !usedToday.has(
          question.id
        )
    );

  const freshFallback =
    fallbackPool.filter(
      (question) =>
        !usedToday.has(
          question.id
        )
    );

  /*
   * LEVEL BALANCE
   *
   * 5 easy
   * 10 medium
   * 7 hard
   * 3 case
   */

  const selected:
    Question[] = [];

  const easy =
    getQuestionsByLevel(
      freshPrimary,
      "easy"
    );

  const medium =
    getQuestionsByLevel(
      freshPrimary,
      "medium"
    );

  const hard =
    getQuestionsByLevel(
      freshPrimary,
      "hard"
    );

  const cases =
    getQuestionsByLevel(
      freshPrimary,
      "case"
    );

  takeUnique(
    selected,
    easy,
    5
  );

  takeUnique(
    selected,
    medium,
    15
  );

  takeUnique(
    selected,
    hard,
    22
  );

  takeUnique(
    selected,
    cases,
    25
  );

  /*
   * Agar primary curriculum ichida
   * kerakli level yetishmasa,
   * barcha mavjud savollardan to‘ldiramiz.
   */
  if (
    selected.length <
    QUESTIONS_PER_CHALLENGE
  ) {
    const remainingFresh =
      freshFallback.filter(
        (question) =>
          !selected.some(
            (selectedQuestion) =>
              selectedQuestion.id ===
              question.id
          )
      );

    takeUnique(
      selected,
      remainingFresh,
      QUESTIONS_PER_CHALLENGE
    );
  }

  /*
   * Agar bugungi yangi savollar tugasa,
   * mavjud barcha savollardan takrorlashga
   * ruxsat beramiz.
   */
  if (
    selected.length <
    QUESTIONS_PER_CHALLENGE
  ) {
    const allRemaining =
      fallbackPool.filter(
        (question) =>
          !selected.some(
            (selectedQuestion) =>
              selectedQuestion.id ===
              question.id
          )
      );

    takeUnique(
      selected,
      allRemaining,
      QUESTIONS_PER_CHALLENGE
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
  return (
    `daily-${date}-${String(
      hour
    ).padStart(2, "0")}`
  );
}


/* =========================================================
   CREATE HOURLY CHALLENGE
========================================================= */

async function createHourlyChallenge(
  env: Env,
  date: string,
  hour: number
) {
  await ensureChallengeTables(
    env
  );

  const id =
    challengeId(
      date,
      hour
    );

  /*
   * ID orqali duplicate challenge
   * yaratishning oldini olamiz.
   */
  const existing =
    await env.DB
      .prepare(`
        SELECT *
        FROM daily_challenges
        WHERE id = ?
        LIMIT 1
      `)
      .bind(
        id
      )
      .first<ChallengeRow>();

  if (existing) {
    return {
      created:
        false,

      id:
        existing.id,

      date:
        existing.challenge_date,

      hour:
        existing.hour,

      startAt:
        existing.start_at,

      endAt:
        existing.end_at,

      modules:
        getCurriculumModules(
          date
        ),

      questionCount:
        await getChallengeQuestionCount(
          env,
          id
        ),
    };
  }

  const modules =
    getCurriculumModules(
      date
    );

  let primaryPool =
    collectQuestions(
      modules
    );

  const fallbackPool =
    collectAllAvailableQuestions();

  /*
   * Agar kunning curriculum modullarida
   * savollar kam bo‘lsa, barcha mavjud
   * real savollardan foydalanamiz.
   */
  if (
    primaryPool.length <
    QUESTIONS_PER_CHALLENGE
  ) {
    primaryPool =
      uniqueQuestions([
        ...primaryPool,
        ...fallbackPool,
      ]);
  }

  const usedToday =
    await getTodayUsedQuestionIds(
      env,
      date
    );

  const selected =
    selectChallengeQuestions(
      primaryPool,
      fallbackPool,
      usedToday
    );

  if (
    selected.length <
    QUESTIONS_PER_CHALLENGE
  ) {
    console.error(
      "Savollar yetarli emas:",
      {
        date,
        hour,
        selected:
          selected.length,
        available:
          fallbackPool.length,
      }
    );

    return null;
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
    index <
      selected.length;
    index++
  ) {
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
        selected[index].id
      )
      .run();
  }

  return {
    created:
      true,

    id,

    date,

    hour,

    startAt:
      now,

    endAt,

    modules,

    questionCount:
      selected.length,
  };
}


/* =========================================================
   CHALLENGE QUESTION COUNT
========================================================= */

async function getChallengeQuestionCount(
  env: Env,
  challengeIdValue: string
): Promise<number> {
  const row =
    await env.DB
      .prepare(`
        SELECT COUNT(*) AS count
        FROM challenge_questions
        WHERE challenge_id = ?
      `)
      .bind(
        challengeIdValue
      )
      .first<{
        count: number;
      }>();

  return Number(
    row?.count ?? 0
  );
}


/* =========================================================
   FIND QUESTION
========================================================= */

function findQuestionById(
  questionId: string
): Question | null {
  for (
    const moduleId of
    ALLOWED_MODULES
  ) {
    for (
      const level of
      LEVELS
    ) {
      const questions =
        getTopicQuestions(
          moduleId,
          level
        ) as Question[];

      if (
        !Array.isArray(
          questions
        )
      ) {
        continue;
      }

      const found =
        questions.find(
          (question) =>
            question.id ===
            questionId
        );

      if (found) {
        return found;
      }
    }
  }

  return null;
}


/* =========================================================
   SAFE QUESTION
========================================================= */

/*
 * MUHIM:
 *
 * Correct answer Mini App'ga yuborilmaydi.
 *
 * Aks holda foydalanuvchi browser devtools
 * orqali javoblarni ko‘rishi mumkin.
 */
function sanitizeQuestion(
  question: Question
) {
  const {
    answer,
    correctAnswer,
    explanation,
    ...safe
  } = question;

  return safe;
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
  const startAppLink =
    getMiniAppStartLink(
      `challenge=${challenge.id}`
    );

  const text =
`
<b>🔥 MENEJERLIK DAILY CHALLENGE</b>

📅 Sana: <b>${challenge.date}</b>
⏰ Challenge: <b>${String(challenge.hour).padStart(2, "0")}:00</b>

━━━━━━━━━━━━━━━━━━

📝 Savollar: <b>${challenge.questionCount} ta</b>
⏱ Vaqt: <b>50 daqiqa</b>
⭐ Har to‘g‘ri javob: <b>2 ball</b>
🏆 Maksimal natija: <b>50 ball</b>

📚 Yo‘nalish:
<b>${challenge.modules.join(" • ")}</b>

━━━━━━━━━━━━━━━━━━

🚀 <b>Bilimingizni sinab ko‘ring!</b>

Testni boshlash uchun tugmani bosing.
`.trim();

  await sendMessage(
    env,
    getGroupChatId(env),
    text,
    {
      inline_keyboard: [
        [
          {
            text:
              "🚀 TESTNI BOSHLASH",

            /*
             * MUHIM:
             * web_app EMAS.
             * Main Mini App startapp.
             */
            url:
              startAppLink,
          },
        ],
      ],
    }
  );
}


/* =========================================================
   TELEGRAM INIT DATA — HMAC
========================================================= */

function bytesToHex(
  bytes: Uint8Array
): string {
  return Array.from(
    bytes
  )
    .map(
      (byte) =>
        byte
          .toString(16)
          .padStart(2, "0")
    )
    .join("");
}


function hexToBytes(
  hex: string
): Uint8Array {
  const bytes =
    new Uint8Array(
      hex.length / 2
    );

  for (
    let i = 0;
    i < bytes.length;
    i++
  ) {
    bytes[i] =
      parseInt(
        hex.slice(
          i * 2,
          i * 2 + 2
        ),
        16
      );
  }

  return bytes;
}


async function hmacSha256(
  key: Uint8Array,
  data: string
): Promise<Uint8Array> {
  const cryptoKey =
    await crypto.subtle.importKey(
      "raw",
      key,
      {
        name:
          "HMAC",

        hash:
          "SHA-256",
      },
      false,
      ["sign"]
    );

  const signature =
    await crypto.subtle.sign(
      "HMAC",
      cryptoKey,
      new TextEncoder().encode(
        data
      )
    );

  return new Uint8Array(
    signature
  );
}


async function validateTelegramInitData(
  initData: string,
  botToken: string
): Promise<TelegramUser | null> {
  if (
    !initData ||
    !botToken
  ) {
    return null;
  }

  try {
    const params =
      new URLSearchParams(
        initData
      );

    const receivedHash =
      params.get(
        "hash"
      );

    if (
      !receivedHash
    ) {
      return null;
    }

    params.delete(
      "hash"
    );

    const authDate =
      Number(
        params.get(
          "auth_date"
        ) ?? 0
      );

    if (
      !authDate
    ) {
      return null;
    }

    const now =
      Math.floor(
        Date.now() /
        1000
      );

    /*
     * 24 soatlik initData.
     */
    if (
      Math.abs(
        now - authDate
      ) >
      TELEGRAM_INIT_DATA_MAX_AGE
    ) {
      return null;
    }

    const dataCheckString =
      Array.from(
        params.entries()
      )
        .sort(
          ([a], [b]) =>
            a.localeCompare(b)
        )
        .map(
          ([key, value]) =>
            `${key}=${value}`
        )
        .join("\n");

    /*
     * Telegram WebApp verification:
     *
     * secret_key =
     * HMAC_SHA256(
     *   "WebAppData",
     *   bot_token
     * )
     *
     * hash =
     * HMAC_SHA256(
     *   secret_key,
     *   data_check_string
     * )
     */

    const secretKey =
      await hmacSha256(
        new TextEncoder().encode(
          "WebAppData"
        ),
        botToken
      );

    const calculated =
      await hmacSha256(
        secretKey,
        dataCheckString
      );

    const calculatedHex =
      bytesToHex(
        calculated
      );

    if (
      calculatedHex
        .toLowerCase() !==
      receivedHash
        .toLowerCase()
    ) {
      return null;
    }

    const userRaw =
      params.get(
        "user"
      );

    if (
      !userRaw
    ) {
      return null;
    }

    const user =
      JSON.parse(
        userRaw
      ) as TelegramUser;

    if (
      !user?.id
    ) {
      return null;
    }

    return user;
  } catch (error) {
    console.error(
      "Telegram initData validation error:",
      error
    );

    return null;
  }
}


/* =========================================================
   GET INIT DATA FROM REQUEST
========================================================= */

function getInitData(
  request: Request
): string | null {
  return (
    request.headers.get(
      "X-Telegram-Init-Data"
    ) ||
    request.headers.get(
      "X-Telegram-WebApp-Data"
    ) ||
    null
  );
}


/* =========================================================
   AUTHENTICATE MINI APP USER
========================================================= */

async function authenticateMiniAppUser(
  request: Request,
  env: Env
): Promise<{
  user: TelegramUser;
  access: Awaited<
    ReturnType<
      typeof getAccessStatus
    >
  >;
} | null> {
  const initData =
    getInitData(
      request
    );

  if (
    !initData
  ) {
    return null;
  }

  const user =
    await validateTelegramInitData(
      initData,
      env.TELEGRAM_BOT_TOKEN
    );

  if (
    !user
  ) {
    return null;
  }

  await ensureAccessTables(
    env
  );

  const access =
    await getAccessStatus(
      env,
      user.id
    );

  return {
    user,
    access,
  };
}


/* =========================================================
   ACCESS API
========================================================= */

async function accessApi(
  request: Request,
  env: Env
) {
  const authenticated =
    await authenticateMiniAppUser(
      request,
      env
    );

  if (
    !authenticated
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Telegram initData noto‘g‘ri yoki eskirgan.",
      },
      401
    );
  }

  return corsJson(
    request,
    {
      ok:
        true,

      user:
        authenticated.user,

      access:
        authenticated.access,
    }
  );
}


/* =========================================================
   CHALLENGE API
========================================================= */

async function challengeApi(
  request: Request,
  env: Env,
  url: URL
) {
  const authenticated =
    await authenticateMiniAppUser(
      request,
      env
    );

  if (
    !authenticated
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Telegram foydalanuvchisi tasdiqlanmadi.",
      },
      401
    );
  }

  if (
    !authenticated.access.access
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Sizda testlarga kirish huquqi mavjud emas.",
      },
      403
    );
  }

  const id =
    url.searchParams.get(
      "id"
    );

  if (
    !id
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "challenge id required",
      },
      400
    );
  }

  await ensureChallengeTables(
    env
  );

  const challenge =
    await env.DB
      .prepare(`
        SELECT *
        FROM daily_challenges
        WHERE id = ?
        LIMIT 1
      `)
      .bind(
        id
      )
      .first<ChallengeRow>();

  if (
    !challenge
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Challenge topilmadi",
      },
      404
    );
  }

  const now =
    Date.now();

  /*
   * Challenge vaqti tugagan bo‘lsa
   * yangi test boshlanmaydi.
   */
  if (
    now >
    challenge.end_at
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Bu challenge vaqti tugagan.",
      },
      410
    );
  }

  const rows =
    await env.DB
      .prepare(`
        SELECT
          challenge_id,
          question_index,
          question_id
        FROM challenge_questions
        WHERE challenge_id = ?
        ORDER BY question_index ASC
      `)
      .bind(
        id
      )
      .all<ChallengeQuestionRow>();

  const questions =
    (rows.results ?? [])
      .map(
        (row) =>
          findQuestionById(
            row.question_id
          )
      )
      .filter(
        (
          question
        ): question is Question =>
          Boolean(
            question
          )
      )
      .map(
        sanitizeQuestion
      );

  return corsJson(
    request,
    {
      ok:
        true,

      user:
        {
          id:
            authenticated.user.id,

          first_name:
            authenticated.user.first_name,

          last_name:
            authenticated.user.last_name,

          username:
            authenticated.user.username,
        },

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

        pointsPerCorrect:
          POINTS_PER_CORRECT,

        maxScore:
          MAX_CHALLENGE_SCORE,
      },

      questions,
    }
  );
}


/* =========================================================
   ANSWER INDEX
========================================================= */

function getCorrectAnswerIndex(
  question: Question
): number | null {
  const candidate =
    question.correctAnswer ??
    question.answer;

  if (
    typeof candidate ===
    "number"
  ) {
    return candidate;
  }

  if (
    typeof candidate ===
    "string"
  ) {
    const value =
      Number(
        candidate
      );

    if (
      Number.isInteger(
        value
      )
    ) {
      return value;
    }
  }

  return null;
}


/* =========================================================
   RESULT REQUEST TYPE
========================================================= */

interface ChallengeResultBody {
  challengeId: string;

  answers:
    Record<
      string,
      unknown
    >;

  durationSeconds?:
    number;
}


/* =========================================================
   CHALLENGE RESULT API
========================================================= */

async function challengeResultApi(
  request: Request,
  env: Env
) {
  const authenticated =
    await authenticateMiniAppUser(
      request,
      env
    );

  if (
    !authenticated
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Telegram initData noto‘g‘ri yoki eskirgan.",
      },
      401
    );
  }

  if (
    !authenticated.access.access
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Sizda testlarga kirish huquqi mavjud emas.",
      },
      403
    );
  }

  let body:
    ChallengeResultBody;

  try {
    body =
      await request.json() as
        ChallengeResultBody;
  } catch {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "JSON noto‘g‘ri.",
      },
      400
    );
  }

  const challengeIdValue =
    String(
      body.challengeId ??
      ""
    );

  if (
    !challengeIdValue
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "challengeId required",
      },
      400
    );
  }

  if (
    !body.answers ||
    typeof body.answers !==
      "object"
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "answers required",
      },
      400
    );
  }

  await ensureChallengeTables(
    env
  );

  const challenge =
    await env.DB
      .prepare(`
        SELECT *
        FROM daily_challenges
        WHERE id = ?
        LIMIT 1
      `)
      .bind(
        challengeIdValue
      )
      .first<ChallengeRow>();

  if (
    !challenge
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Challenge topilmadi.",
      },
      404
    );
  }

  const now =
    Date.now();

  if (
    now >
    challenge.end_at
  ) {
    return corsJson(
      request,
      {
        ok:
          false,

        error:
          "Challenge vaqti tugagan.",
      },
      410
    );
  }

  /*
   * Bir foydalanuvchi bir challenge'ni
   * faqat bir marta topshiradi.
   */
  const existing =
    await env.DB
      .prepare(`
        SELECT *
        FROM challenge_participants
        WHERE challenge_id = ?
          AND telegram_id = ?
        LIMIT 1
      `)
      .bind(
        challengeIdValue,
        authenticated.user.id
      )
      .first<ChallengeParticipantRow>();

  if (
    existing
  ) {
    return corsJson(
      request,
      {
        ok:
          true,

        alreadySubmitted:
          true,

        result:
          {
            score:
              existing.score,

            correctAnswers:
              existing.correct_answers,

            totalQuestions:
              existing.total_questions,

            durationSeconds:
              existing.duration_seconds,

            submittedAt:
              existing.submitted_at,
          },
      }
    );
  }

  const questionRows =
    await env.DB
      .prepare(`
        SELECT
          question_index,
          question_id
        FROM challenge_questions
        WHERE challenge_id = ?
        ORDER BY question_index ASC
      `)
      .bind(
        challengeIdValue
      )
      .all<{
        question_index:
          number;

        question_id:
          string;
      }>();

  const challengeQuestions =
    (questionRows.results ?? [])
      .map(
        (row) => {
          const question =
            findQuestionById(
              row.question_id
            );

          return {
            row,
            question,
          };
        }
      )
      .filter(
        (
          item
        ): item is {
          row: {
            question_index:
              number;

            question_id:
              string;
          };

          question:
            Question;
        } =>
          Boolean(
            item.question
          )
      );

  let correctAnswers =
    0;

  for (
    const item of
    challengeQuestions
  ) {
    const submitted =
      body.answers[
        item.row.question_id
      ];

    const submittedIndex =
      typeof submitted ===
      "number"
        ? submitted
        : Number(
            submitted
          );

    const correctIndex =
      getCorrectAnswerIndex(
        item.question
      );

    if (
      Number.isInteger(
        submittedIndex
      ) &&
      correctIndex !==
        null &&
      submittedIndex ===
        correctIndex
    ) {
      correctAnswers++;
    }
  }

  const totalQuestions =
    challengeQuestions.length;

  const score =
    correctAnswers *
    POINTS_PER_CORRECT;

  let durationSeconds =
    Number(
      body.durationSeconds ??
      0
    );

  if (
    !Number.isFinite(
      durationSeconds
    ) ||
    durationSeconds < 0
  ) {
    durationSeconds =
      0;
  }

  durationSeconds =
    Math.min(
      Math.floor(
        durationSeconds
      ),
      CHALLENGE_DURATION_SEC
    );

  const submittedAt =
    Date.now();

  await env.DB
    .prepare(`
      INSERT INTO challenge_participants
      (
        challenge_id,
        challenge_date,
        telegram_id,
        score,
        correct_answers,
        total_questions,
        duration_seconds,
        submitted_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      challengeIdValue,

      challenge.challenge_date,

      authenticated.user.id,

      score,

      correctAnswers,

      totalQuestions,

      durationSeconds,

      submittedAt
    )
    .run();

  return corsJson(
    request,
    {
      ok:
        true,

      alreadySubmitted:
        false,

      result:
        {
          challengeId:
            challengeIdValue,

          score,

          correctAnswers,

          totalQuestions,

          percentage:
            totalQuestions > 0
              ? Math.round(
                  (
                    correctAnswers /
                    totalQuestions
                  ) *
                  100
                )
              : 0,

          durationSeconds,

          maxScore:
            MAX_CHALLENGE_SCORE,

          submittedAt,
        },
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
  await ensureChallengeTables(
    env
  );

  const rows =
    await env.DB
      .prepare(`
        SELECT
          cp.telegram_id,
          cp.score,
          cp.correct_answers,
          cp.total_questions,
          bu.first_name,
          bu.last_name,
          bu.username
        FROM challenge_participants cp
        LEFT JOIN bot_users bu
          ON bu.telegram_id =
             cp.telegram_id
        WHERE cp.challenge_date = ?
        ORDER BY
          cp.score DESC,
          cp.correct_answers DESC,
          cp.duration_seconds ASC
        LIMIT 10
      `)
      .bind(
        date
      )
      .all<{
        telegram_id:
          number;

        score:
          number;

        correct_answers:
          number;

        total_questions:
          number;

        first_name:
          string | null;

        last_name:
          string | null;

        username:
          string | null;
      }>();

  const results =
    rows.results ?? [];

  let text =
`
<b>🏆 MENEJERLIK DAILY — KUNLIK REYTING</b>

📅 ${date}

━━━━━━━━━━━━━━━━━━
`;

  if (
    !results.length
  ) {
    text +=
      "\nBugun hali natijalar mavjud emas.";
  } else {
    results.forEach(
      (
        row,
        index
      ) => {
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
          `\n${medal} <b>${name}</b> — ${row.score} ball (${row.correct_answers}/${row.total_questions})`;
      }
    );
  }

  text +=
`
━━━━━━━━━━━━━━━━━━

📊 Bugungi challenge natijalari.

🎯 Ertangi challenge'da yana ko‘rishamiz!
`;

  await sendMessage(
    env,
    getGroupChatId(env),
    text.trim()
  );
}


/* =========================================================
   CLOSE OLD CHALLENGES
========================================================= */

async function closeExpiredChallenges(
  env: Env
) {
  await env.DB
    .prepare(`
      UPDATE daily_challenges
      SET status = 'closed'
      WHERE status = 'active'
        AND end_at < ?
    `)
    .bind(
      Date.now()
    )
    .run();
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
    ok:
      true,

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
      Boolean(
        env.DB
      ),

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

    curriculum:
      getCurriculumModules(
        tashkent.date
      ),

    tashkentTime:
      tashkent,
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
      await request.json() as
        TelegramUpdate;

    await processTelegramUpdate(
      env,
      update
    );

    return json({
      ok:
        true,
    });
  } catch (error) {
    console.error(
      "Webhook error:",
      error
    );

    /*
     * Telegram 200 olsa qayta-qayta
     * update yubormaydi.
     */
    return json({
      ok:
        true,
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

  await ensureAccessTables(
    env
  );

  await ensureChallengeTables(
    env
  );

  await closeExpiredChallenges(
    env
  );

  /*
   * -------------------------------------------------------
   * HOURLY CHALLENGE
   *
   * 05:00
   * 06:00
   * ...
   * 22:00
   *
   * 23:00 challenge emas,
   * kunlik reyting.
   * -------------------------------------------------------
   */

  if (
    hour >=
      DAILY_START_HOUR &&
    hour <=
      DAILY_END_HOUR &&
    minute <= 5
  ) {
    const challenge =
      await createHourlyChallenge(
        env,
        date,
        hour
      );

    /*
     * MUHIM:
     *
     * Agar cron bir necha marta ishlasa,
     * existing challenge yana Telegram
     * guruhiga yuborilmaydi.
     */
    if (
      challenge &&
      challenge.created
    ) {
      await sendHourlyChallenge(
        env,
        challenge
      );
    }
  }

  /*
   * -------------------------------------------------------
   * DAILY RESULTS
   *
   * 23:00
   * -------------------------------------------------------
   */

  if (
    hour ===
      DAILY_RESULTS_HOUR &&
    minute <= 5
  ) {
    await sendDailyResults(
      env,
      date
    );
  }
}


/* =========================================================
   OPTIONS
========================================================= */

function optionsResponse(
  request: Request
): Response {
  return new Response(
    null,
    {
      status:
        204,

      headers:
        corsHeaders(
          request.headers.get(
            "origin"
          )
        ),
    }
  );
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
      new URL(
        request.url
      );

    /*
     * -----------------------------------------------------
     * CORS PREFLIGHT
     * -----------------------------------------------------
     */

    if (
      request.method ===
      "OPTIONS"
    ) {
      return optionsResponse(
        request
      );
    }

    /*
     * -----------------------------------------------------
     * HEALTH
     * -----------------------------------------------------
     */

    if (
      request.method ===
        "GET" &&
      url.pathname ===
        "/health"
    ) {
      return healthResponse(
        env
      );
    }

    /*
     * -----------------------------------------------------
     * TELEGRAM WEBHOOK
     * -----------------------------------------------------
     */

    if (
      request.method ===
        "POST" &&
      url.pathname ===
        WEBHOOK_PATH
    ) {
      return telegramWebhook(
        request,
        env
      );
    }

    /*
     * -----------------------------------------------------
     * ROOT POST
     *
     * Telegram webhook fallback.
     * -----------------------------------------------------
     */

    if (
      request.method ===
        "POST" &&
      url.pathname ===
        "/"
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

    /*
     * -----------------------------------------------------
     * ACCESS API
     * -----------------------------------------------------
     */

    if (
      request.method ===
        "GET" &&
      url.pathname ===
        "/api/access"
    ) {
      return accessApi(
        request,
        env
      );
    }

    /*
     * -----------------------------------------------------
     * CHALLENGE API
     * -----------------------------------------------------
     */

    if (
      request.method ===
        "GET" &&
      url.pathname ===
        "/api/challenge"
    ) {
      return challengeApi(
        request,
        env,
        url
      );
    }

    /*
     * -----------------------------------------------------
     * CHALLENGE RESULT API
     * -----------------------------------------------------
     */

    if (
      request.method ===
        "POST" &&
      url.pathname ===
        "/api/challenge/result"
    ) {
      return challengeResultApi(
        request,
        env
      );
    }

    /*
     * -----------------------------------------------------
     * NEXT / OPENNEXT
     * -----------------------------------------------------
     */

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
    _controller:
      ScheduledController,

    env:
      Env,

    ctx:
      ExecutionContext
  ) {
    ctx.waitUntil(
      scheduledHandler(
        env
      )
    );
  },
};
