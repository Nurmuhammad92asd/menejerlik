import nextWorker from "./.open-next/worker.js";
import {
  getTopicQuestions,
  getModuleById,
} from "./lib/quiz-data";

/* =========================================================
   MENEJERLIK BY NURMUHAMMAD
   CLOUDFLARE CUSTOM WORKER
   =========================================================
   
   FLOW:

   /start
      ↓
   Telefon tasdiqlash
      ↓
   Guruh a'zoligini tekshirish
      ↓
   Referral link
      ↓
   5 ta yangi registered user
      ↓
   TESTLAR
      ↓
   Mini App

   OLD CHALLENGE SYSTEM:
   - hourly challenge
   - daily leaderboard
   - D1
   - quiz-data
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
  type: string;
  title?: string;
  username?: string;
}

interface TelegramContact {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
}

interface TelegramMessage {
  message_id: number;
  chat: TelegramChat;
  from?: TelegramUser;
  text?: string;
  caption?: string;
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
  edited_message?: TelegramMessage;
  channel_post?: TelegramMessage;
  edited_channel_post?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}

interface TelegramApiResponse<T = unknown> {
  ok: boolean;
  result?: T;
  description?: string;
  error_code?: number;
  parameters?: Record<string, unknown>;
}

interface TashkentTime {
  date: string;
  hour: number;
  minute: number;
  second: number;
}

interface DbUser {
  telegram_id: number;
  first_name: string | null;
  username: string | null;
  phone: string | null;
  referred_by: number | null;
  registered_at: number | null;
  last_seen_at: number | null;
}

interface GroupMembership {
  ok: boolean;
  member: boolean;
  status?: string;
  reason?: string;
}


/* =========================================================
   CONFIG
========================================================= */

const BOT_NAME =
  "Menejerlik by Nurmuhammad";

const BOT_USERNAME =
  "topmenejerbot";

const MINI_APP_URL =
  "https://menejerlik.vercel.app";

const WORKER_URL =
  "https://menejerlik.nurmuhammadtalatbekov.workers.dev";

const WEBHOOK_PATH =
  "/telegram/webhook";

/*
 * Telegram webhook ikkita variantni qabul qiladi:

 * 1) /
 * 2) /telegram/webhook

 * Shuning uchun mavjud webhookni buzmaymiz.
 */

const GROUP_CHAT_ID =
  "@talim_ilmfan";

const GROUP_URL =
  "https://t.me/talim_ilmfan";

const REQUIRED_REFERRALS =
  5;

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
   JSON
========================================================= */

function json(
  data: unknown,
  status = 200,
): Response {
  return new Response(
    JSON.stringify(data, null, 2),
    {
      status,
      headers: {
        "content-type":
          "application/json; charset=UTF-8",
        "cache-control":
          "no-store, no-cache, must-revalidate",
        pragma: "no-cache",
      },
    },
  );
}


/* =========================================================
   TIME
========================================================= */

function getTashkentTime(
  now = new Date(),
): TashkentTime {
  const parts =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone:
          "Asia/Tashkent",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      },
    ).formatToParts(now);

  const get = (
    type: string,
  ) =>
    parts.find(
      (p) =>
        p.type === type,
    )?.value ?? "00";

  return {
    date:
      `${get("year")}-${get("month")}-${get("day")}`,

    hour:
      Number(get("hour")),

    minute:
      Number(get("minute")),

    second:
      Number(get("second")),
  };
}


/* =========================================================
   TELEGRAM API
========================================================= */

async function telegramRequest<
  T = unknown,
>(
  env: Env,
  method: string,
  body: Record<string, unknown>,
): Promise<
  TelegramApiResponse<T>
> {
  if (
    !env.TELEGRAM_BOT_TOKEN
  ) {
    console.error(
      "[TELEGRAM] BOT TOKEN mavjud emas",
    );

    return {
      ok: false,
      error_code: 500,
      description:
        "TELEGRAM_BOT_TOKEN is not configured",
    };
  }

  const url =
    "https://api.telegram.org/bot" +
    env.TELEGRAM_BOT_TOKEN +
    "/" +
    method;

  try {
    const response =
      await fetch(
        url,
        {
          method: "POST",

          headers: {
            "content-type":
              "application/json",
          },

          body:
            JSON.stringify(
              body,
            ),
        },
      );

    const data =
      (await response.json()) as TelegramApiResponse<T>;

    if (
      !response.ok ||
      !data.ok
    ) {
      console.error(
        `[TELEGRAM ERROR] ${method}`,
        JSON.stringify(data),
      );
    }

    return data;
  } catch (
    error
  ) {
    console.error(
      `[TELEGRAM NETWORK ERROR] ${method}`,
      error,
    );

    return {
      ok: false,
      error_code: 500,
      description:
        error instanceof Error
          ? error.message
          : "Telegram request failed",
    };
  }
}


/* =========================================================
   DATABASE — ACCESS SYSTEM
========================================================= */

async function ensureAccessTables(
  env: Env,
) {
  await env.DB
    .prepare(
      `
      CREATE TABLE IF NOT EXISTS bot_users (
        telegram_id INTEGER PRIMARY KEY,
        first_name TEXT,
        username TEXT,
        phone TEXT,
        referred_by INTEGER,
        registered_at INTEGER,
        last_seen_at INTEGER
      )
      `,
    )
    .run();

  await env.DB
    .prepare(
      `
      CREATE TABLE IF NOT EXISTS bot_referrals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        referrer_id INTEGER NOT NULL,
        referred_id INTEGER NOT NULL UNIQUE,
        created_at INTEGER NOT NULL
      )
      `,
    )
    .run();

  await env.DB
    .prepare(
      `
      CREATE INDEX IF NOT EXISTS idx_bot_referrals_referrer
      ON bot_referrals(referrer_id)
      `,
    )
    .run();

  await env.DB
    .prepare(
      `
      CREATE TABLE IF NOT EXISTS pending_referrals (
        telegram_id INTEGER PRIMARY KEY,
        referrer_id INTEGER NOT NULL,
        created_at INTEGER NOT NULL
      )
      `,
    )
    .run();
}


/* =========================================================
   PHONE NORMALIZATION
========================================================= */

function normalizePhone(
  phone: string,
): string {
  return phone
    .replace(
      /[^\d+]/g,
      "",
    )
    .replace(
      /^00/,
      "+",
    );
}


/* =========================================================
   USER
========================================================= */

async function getDbUser(
  env: Env,
  telegramId: number,
): Promise<
  DbUser | null
> {
  await ensureAccessTables(
    env,
  );

  return await env.DB
    .prepare(
      `
      SELECT
        telegram_id,
        first_name,
        username,
        phone,
        referred_by,
        registered_at,
        last_seen_at
      FROM bot_users
      WHERE telegram_id = ?
      LIMIT 1
      `,
    )
    .bind(
      telegramId,
    )
    .first<DbUser>();
}


/* =========================================================
   SAVE PENDING REFERRAL
========================================================= */

async function savePendingReferral(
  env: Env,
  telegramId: number,
  referrerId: number,
) {
  if (
    telegramId ===
    referrerId
  ) {
    return;
  }

  const referrer =
    await getDbUser(
      env,
      referrerId,
    );

  /*
   * Referral faqat mavjud
   * registered userdan kelishi mumkin.
   */
  if (!referrer) {
    return;
  }

  await env.DB
    .prepare(
      `
      INSERT OR IGNORE INTO pending_referrals (
        telegram_id,
        referrer_id,
        created_at
      )
      VALUES (?, ?, ?)
      `,
    )
    .bind(
      telegramId,
      referrerId,
      Date.now(),
    )
    .run();
}


/* =========================================================
   GET PENDING REFERRAL
========================================================= */

async function getPendingReferral(
  env: Env,
  telegramId: number,
): Promise<
  number | null
> {
  await ensureAccessTables(
    env,
  );

  const row =
    await env.DB
      .prepare(
        `
        SELECT referrer_id
        FROM pending_referrals
        WHERE telegram_id = ?
        LIMIT 1
        `,
      )
      .bind(
        telegramId,
      )
      .first<{
        referrer_id: number;
      }>();

  return row
    ? Number(
        row.referrer_id,
      )
    : null;
}


/* =========================================================
   REGISTER USER
========================================================= */

async function registerUser(
  env: Env,
  message: TelegramMessage,
) {
  const from =
    message.from;

  if (!from) {
    return {
      ok: false,
      newUser: false,
    };
  }

  await ensureAccessTables(
    env,
  );

  const telegramId =
    from.id;

  const existing =
    await getDbUser(
      env,
      telegramId,
    );

  /*
   * Old user bo‘lsa faqat
   * ma'lumotini yangilaymiz.
   */
  if (existing) {
    await env.DB
      .prepare(
        `
        UPDATE bot_users
        SET
          first_name = ?,
          username = ?,
          last_seen_at = ?
        WHERE telegram_id = ?
        `,
      )
      .bind(
        from.first_name ??
          null,

        from.username ??
          null,

        Date.now(),

        telegramId,
      )
      .run();

    return {
      ok: true,
      newUser: false,
      user: existing,
    };
  }

  const pending =
    await getPendingReferral(
      env,
      telegramId,
    );

  let referrerId:
    number | null =
    pending;

  if (
    referrerId ===
    telegramId
  ) {
    referrerId =
      null;
  }

  /*
   * Referral referrer
   * haqiqatan registered
   * ekanini tekshiramiz.
   */
  if (
    referrerId !==
    null
  ) {
    const referrer =
      await getDbUser(
        env,
        referrerId,
      );

    if (!referrer) {
      referrerId =
        null;
    }
  }

  const now =
    Date.now();

  await env.DB
    .prepare(
      `
      INSERT INTO bot_users (
        telegram_id,
        first_name,
        username,
        phone,
        referred_by,
        registered_at,
        last_seen_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
    )
    .bind(
      telegramId,

      from.first_name ??
        null,

      from.username ??
        null,

      null,

      referrerId,

      null,

      now,
    )
    .run();

  /*
   * Referral hali faqat
   * telefon tasdiqlangandan keyin
   * haqiqiy hisoblanadi.
   */

  return {
    ok: true,
    newUser: true,
    user:
      await getDbUser(
        env,
        telegramId,
      ),
  };
}


/* =========================================================
   CONFIRM PHONE
========================================================= */

async function confirmPhone(
  env: Env,
  message: TelegramMessage,
) {
  const from =
    message.from;

  const contact =
    message.contact;

  if (
    !from ||
    !contact
  ) {
    return {
      ok: false,
      reason:
        "missing_contact",
    };
  }

  /*
   * Eng muhim xavfsizlik:
   * kontakt aynan Telegramdagi
   * shu userniki bo‘lishi kerak.
   */
  if (
    contact.user_id &&
    contact.user_id !==
      from.id
  ) {
    return {
      ok: false,
      reason:
        "contact_belongs_to_other_user",
    };
  }

  const phone =
    normalizePhone(
      contact.phone_number,
    );

  await ensureAccessTables(
    env,
  );

  const existing =
    await getDbUser(
      env,
      from.id,
    );

  const pending =
    await getPendingReferral(
      env,
      from.id,
    );

  let referrerId:
    number | null =
    pending;

  if (
    referrerId ===
    from.id
  ) {
    referrerId =
      null;
  }

  /*
   * User old bo‘lsa referral
   * qayta sanalmaydi.
   */
  if (!existing) {
    await registerUser(
      env,
      message,
    );
  }

  const current =
    await getDbUser(
      env,
      from.id,
    );

  if (!current) {
    return {
      ok: false,
      reason:
        "registration_failed",
    };
  }

  const wasRegistered =
    Boolean(
      current.registered_at,
    );

  /*
   * Birinchi marta telefon
   * tasdiqlanmoqda.
   */
  if (
    !wasRegistered
  ) {
    await env.DB
      .prepare(
        `
        UPDATE bot_users
        SET
          phone = ?,
          registered_at = ?,
          last_seen_at = ?
        WHERE telegram_id = ?
        `,
      )
      .bind(
        phone,
        Date.now(),
        Date.now(),
        from.id,
      )
      .run();

    /*
     * Referralni faqat shu yerda
     * hisoblaymiz.
     */
    if (
      referrerId !==
      null &&
      referrerId !==
        from.id
    ) {
      const referrer =
        await getDbUser(
          env,
          referrerId,
        );

      if (referrer) {
        await env.DB
          .prepare(
            `
            INSERT OR IGNORE INTO bot_referrals (
              referrer_id,
              referred_id,
              created_at
            )
            VALUES (?, ?, ?)
            `,
          )
          .bind(
            referrerId,
            from.id,
            Date.now(),
          )
          .run();
      }
    }
  } else {
    /*
     * Telefon mavjud bo‘lsa
     * faqat last_seen yangilanadi.
     */
    await env.DB
      .prepare(
        `
        UPDATE bot_users
        SET
          last_seen_at = ?
        WHERE telegram_id = ?
        `,
      )
      .bind(
        Date.now(),
        from.id,
      )
      .run();
  }

  await env.DB
    .prepare(
      `
      DELETE FROM pending_referrals
      WHERE telegram_id = ?
      `,
    )
    .bind(
      from.id,
    )
    .run();

  return {
    ok: true,
    phone,
    newlyRegistered:
      !wasRegistered,
  };
}


/* =========================================================
   REFERRAL COUNT
========================================================= */

async function getReferralCount(
  env: Env,
  telegramId: number,
): Promise<number> {
  await ensureAccessTables(
    env,
  );

  const row =
    await env.DB
      .prepare(
        `
        SELECT COUNT(*) AS count
        FROM bot_referrals
        WHERE referrer_id = ?
        `,
      )
      .bind(
        telegramId,
      )
      .first<{
        count: number;
      }>();

  return Number(
    row?.count ?? 0,
  );
}


/* =========================================================
   GROUP MEMBERSHIP
========================================================= */

async function checkGroupMembership(
  env: Env,
  telegramId: number,
): Promise<GroupMembership> {
  const result =
    await telegramRequest<
      {
        status?: string;
        user?: TelegramUser;
        is_member?: boolean;
      }
    >(
      env,
      "getChatMember",
      {
        chat_id:
          GROUP_CHAT_ID,

        user_id:
          telegramId,
      },
    );

  if (!result.ok) {
    return {
      ok: false,
      member: false,
      reason:
        result.description ??
        "Guruhni tekshirib bo‘lmadi",
    };
  }

  const member =
    result.result;

  if (!member) {
    return {
      ok: true,
      member: false,
    };
  }

  const status =
    member.status;

  const isMember =
    status ===
      "creator" ||
    status ===
      "administrator" ||
    status ===
      "member" ||
    (
      status ===
        "restricted" &&
      member.is_member ===
        true
    );

  return {
    ok: true,
    member:
      isMember,
    status,
  };
}


/* =========================================================
   ACCESS STATUS
========================================================= */

async function getAccessStatus(
  env: Env,
  telegramId: number,
) {
  const user =
    await getDbUser(
      env,
      telegramId,
    );

  const phoneVerified =
    Boolean(
      user?.registered_at &&
      user?.phone,
    );

  const membership =
    await checkGroupMembership(
      env,
      telegramId,
    );

  const referrals =
    await getReferralCount(
      env,
      telegramId,
    );

  const referralDone =
    referrals >=
    REQUIRED_REFERRALS;

  const canAccess =
    phoneVerified &&
    membership.member &&
    referralDone;

  return {
    user,
    phoneVerified,
    groupMember:
      membership.member,
    groupStatus:
      membership.status ??
      null,
    referrals,
    required:
      REQUIRED_REFERRALS,
    remaining:
      Math.max(
        0,
        REQUIRED_REFERRALS -
          referrals,
      ),
    canAccess,
  };
}


/* =========================================================
   REFERRAL LINK
========================================================= */

function referralLink(
  telegramId: number,
): string {
  return (
    `https://t.me/${BOT_USERNAME}?start=ref_${telegramId}`
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
      false,

    is_persistent:
      true,
  };
}


function groupKeyboard() {
  return {
    inline_keyboard: [
      [
        {
          text:
            "👥 GURUHGA QO‘SHILISH",
          url:
            GROUP_URL,
        },
      ],

      [
        {
          text:
            "🔄 A'ZOLIKNI TEKSHIRISH",
          callback_data:
            "check_access",
        },
      ],
    ],
  };
}


function referralKeyboard() {
  return {
    inline_keyboard: [
      [
        {
          text:
            "🔗 TAKLIF HAVOLAM",
          callback_data:
            "referral",
        },
      ],

      [
        {
          text:
            "📊 NATIJAMNI TEKSHIRISH",
          callback_data:
            "check_access",
        },
      ],
    ],
  };
}


function testKeyboard() {
  return {
    inline_keyboard: [
      [
        {
          text:
            "🚀 TESTLARNI BOSHLASH",
          web_app: {
            url:
              MINI_APP_URL,
          },
        },
      ],
    ],
  };
}


function removeKeyboard() {
  return {
    remove_keyboard:
      true,
  };
}


/* =========================================================
   SEND MESSAGE
========================================================= */

async function sendBotMessage(
  env: Env,
  chatId: number,
  text: string,
  replyMarkup?: Record<
    string,
    unknown
  >,
) {
  const body:
    Record<
      string,
      unknown
    > = {
      chat_id:
        chatId,

      text,

      parse_mode:
        "Markdown",
    };

  if (replyMarkup) {
    body.reply_markup =
      replyMarkup;
  }

  return telegramRequest(
    env,
    "sendMessage",
    body,
  );
}


/* =========================================================
   MAIN ACCESS MESSAGE
========================================================= */

async function sendAccessStatus(
  env: Env,
  chatId: number,
  telegramId: number,
) {
  const status =
    await getAccessStatus(
      env,
      telegramId,
    );

  if (
    !status.phoneVerified
  ) {
    await sendBotMessage(
      env,
      chatId,
      `🎓 *${BOT_NAME}*\n\n` +
        `Platformaga kirish uchun avval telefon raqamingizni tasdiqlang.\n\n` +
        `🔐 Telefon raqamingiz faqat ro‘yxatdan o‘tish va foydalanuvchini aniqlash uchun ishlatiladi.\n\n` +
        `👇 Quyidagi tugmani bosing:`,
      phoneKeyboard(),
    );

    return;
  }

  if (
    !status.groupMember
  ) {
    await sendBotMessage(
      env,
      chatId,
      `✅ Telefon raqamingiz tasdiqlandi.\n\n` +
        `👥 Endi rasmiy guruhimizga qo‘shiling:\n\n` +
        `@talim_ilmfan\n\n` +
        `Guruhga qo‘shilgach, *A'ZOLIKNI TEKSHIRISH* tugmasini bosing.`,
      groupKeyboard(),
    );

    return;
  }

  if (
    status.referrals <
    REQUIRED_REFERRALS
  ) {
    const remaining =
      REQUIRED_REFERRALS -
      status.referrals;

    await sendBotMessage(
      env,
      chatId,
      `🎉 *Siz guruh a'zosisiz!*\n\n` +
        `Endi testlarga kirish uchun do‘stlaringizni taklif qiling.\n\n` +
        `👥 Taklif qilinganlar: *${status.referrals}/${REQUIRED_REFERRALS}*\n` +
        `🎯 Qolgan: *${remaining} ta*\n\n` +
        `⚠️ Faqat botga kirib, ro‘yxatdan o‘tgan yangi foydalanuvchilar hisoblanadi.\n\n` +
        `👇 Shaxsiy taklif havolangizni oling:`,
      referralKeyboard(),
    );

    return;
  }

  await sendBotMessage(
    env,
    chatId,
    `🏆 *TABRIKLAYMIZ!*\n\n` +
      `Siz barcha talablarni bajardingiz.\n\n` +
      `📱 Telefon — ✅\n` +
      `👥 Guruh — ✅\n` +
      `👤 Referral — ${status.referrals}/${REQUIRED_REFERRALS} ✅\n\n` +
      `🚀 Endi Menejerlik testlarini boshlashingiz mumkin!`,
    {
      ...testKeyboard(),
    },
  );
}


/* =========================================================
   REFERRAL MESSAGE
========================================================= */

async function sendReferralMessage(
  env: Env,
  chatId: number,
  telegramId: number,
) {
  const status =
    await getAccessStatus(
      env,
      telegramId,
    );

  const link =
    referralLink(
      telegramId,
    );

  const remaining =
    Math.max(
      0,
      REQUIRED_REFERRALS -
        status.referrals,
    );

  await sendBotMessage(
    env,
    chatId,
    `🔗 *SIZNING SHAXSIY TAKLIF HAVOLANGIZ*\n\n` +
      `${link}\n\n` +
      `👥 Hozirgi natija: *${status.referrals}/${REQUIRED_REFERRALS}*\n` +
      `🎯 Qolgan: *${remaining} ta*\n\n` +
      `📌 Havolani do‘stlaringizga yuboring.\n` +
      `Ular botga kirib telefon raqamini tasdiqlaganidan keyin referral avtomatik hisoblanadi.\n\n` +
      `🚫 Bir foydalanuvchi qayta-qayta hisoblanmaydi.`,
    referralKeyboard(),
  );
}


/* =========================================================
   START PARAM
========================================================= */

function parseStartParameter(
  text: string,
): number | null {
  const parts =
    text
      .trim()
      .split(/\s+/);

  if (
    parts.length <
    2
  ) {
    return null;
  }

  const parameter =
    parts[1];

  if (
    !parameter.startsWith(
      "ref_",
    )
  ) {
    return null;
  }

  const id =
    Number(
      parameter.slice(
        4,
      ),
    );

  if (
    !Number.isSafeInteger(
      id,
    ) ||
    id <= 0
  ) {
    return null;
  }

  return id;
}


/* =========================================================
   COMMAND
========================================================= */

function normalizeCommand(
  text: string,
): string {
  const first =
    text
      .trim()
      .split(/\s+/)[0]
      ?.toLowerCase() ??
    "";

  const at =
    first.indexOf("@");

  return at > 0
    ? first.slice(
        0,
        at,
      )
    : first;
}


/* =========================================================
   EXTRACT MESSAGE
========================================================= */

function extractMessage(
  update: TelegramUpdate,
) {
  return (
    update.message ??
    update.edited_message ??
    update.channel_post ??
    update.edited_channel_post
  );
}


/* =========================================================
   HANDLE CALLBACK
========================================================= */

async function handleCallbackQuery(
  env: Env,
  callback:
    TelegramCallbackQuery,
) {
  const telegramId =
    callback.from.id;

  const chatId =
    callback.message?.chat.id;

  if (!chatId) {
    return;
  }

  const data =
    callback.data ??
    "";

  await telegramRequest(
    env,
    "answerCallbackQuery",
    {
      callback_query_id:
        callback.id,
    },
  );

  if (
    data ===
    "referral"
  ) {
    await sendReferralMessage(
      env,
      chatId,
      telegramId,
    );

    return;
  }

  if (
    data ===
    "check_access"
  ) {
    await sendAccessStatus(
      env,
      chatId,
      telegramId,
    );

    return;
  }
}


/* =========================================================
   HANDLE TELEGRAM UPDATE
========================================================= */

async function handleTelegramUpdate(
  env: Env,
  update: TelegramUpdate,
) {
  if (
    update.callback_query
  ) {
    await handleCallbackQuery(
      env,
      update.callback_query,
    );

    return;
  }

  const message =
    extractMessage(
      update,
    );

  if (!message) {
    return;
  }

  const from =
    message.from;

  const chatId =
    message.chat.id;

  /*
   * PRIVATE CHAT uchun access
   * tizimi ishlaydi.
   */
  const isPrivate =
    message.chat.type ===
    "private";

  /* -------------------------------------------------------
     CONTACT
  ------------------------------------------------------- */

  if (
    message.contact &&
    isPrivate
  ) {
    const result =
      await confirmPhone(
        env,
        message,
      );

    if (
      !result.ok
    ) {
      await sendBotMessage(
        env,
        chatId,
        `❌ Telefon raqamini tasdiqlash amalga oshmadi.\n\n` +
          `Iltimos, *o‘zingizning Telegram telefon raqamingizni* yuboring.`,
        phoneKeyboard(),
      );

      return;
    }

    await sendBotMessage(
      env,
      chatId,
      `✅ *Telefon raqamingiz muvaffaqiyatli tasdiqlandi!*\n\n` +
        `Endi keyingi bosqichga o‘tamiz...`,
      removeKeyboard(),
    );

    await sendAccessStatus(
      env,
      chatId,
      from?.id ??
        0,
    );

    return;
  }

  const text =
    (
      message.text ??
      message.caption ??
      ""
    ).trim();

  const command =
    normalizeCommand(
      text,
    );

  /* -------------------------------------------------------
     START
  ------------------------------------------------------- */

  if (
    command ===
    "/start"
  ) {
    if (
      !isPrivate ||
      !from
    ) {
      return;
    }

    /*
     * Avval foydalanuvchini
     * bazaga yozamiz.
     */
    await registerUser(
      env,
      message,
    );

    /*
     * Referral parametrini
     * pending sifatida saqlaymiz.
     */
    const referrerId =
      parseStartParameter(
        text,
      );

    if (
      referrerId &&
      referrerId !==
        from.id
    ) {
      await savePendingReferral(
        env,
        from.id,
        referrerId,
      );
    }

    await sendAccessStatus(
      env,
      chatId,
      from.id,
    );

    return;
  }


  /* -------------------------------------------------------
     HELP
  ------------------------------------------------------- */

  if (
    command ===
    "/help"
  ) {
    await sendBotMessage(
      env,
      chatId,
      `🎓 *${BOT_NAME}*\n\n` +
        `📱 /start — ro‘yxatdan o‘tish\n` +
        `🔗 /referral — taklif havolangiz\n` +
        `📊 /status — holatingiz\n` +
        `👥 /group — guruh\n` +
        `🚀 /test — test tizimi\n\n` +
        `🎯 Testlarga kirish uchun:\n` +
        `1️⃣ Telefonni tasdiqlang\n` +
        `2️⃣ Guruhga qo‘shiling\n` +
        `3️⃣ 5 ta yangi foydalanuvchini taklif qiling`,
    );

    return;
  }


  /* -------------------------------------------------------
     REFERRAL
  ------------------------------------------------------- */

  if (
    command ===
    "/referral"
  ) {
    if (
      !from
    ) {
      return;
    }

    await sendReferralMessage(
      env,
      chatId,
      from.id,
    );

    return;
  }


  /* -------------------------------------------------------
     STATUS
  ------------------------------------------------------- */

  if (
    command ===
    "/status"
  ) {
    if (
      !from
    ) {
      return;
    }

    await sendAccessStatus(
      env,
      chatId,
      from.id,
    );

    return;
  }


  /* -------------------------------------------------------
     GROUP
  ------------------------------------------------------- */

  if (
    command ===
    "/group"
  ) {
    await sendBotMessage(
      env,
      chatId,
      `👥 *Rasmiy guruhimiz:*\n\n` +
        `@talim_ilmfan\n\n` +
        `Guruhga qo‘shilgach /status buyrug‘i orqali tekshirishingiz mumkin.`,
      groupKeyboard(),
    );

    return;
  }


  /* -------------------------------------------------------
     TEST
  ------------------------------------------------------- */

  if (
    command ===
    "/test"
  ) {
    if (
      !from
    ) {
      return;
    }

    const status =
      await getAccessStatus(
        env,
        from.id,
      );

    if (
      !status.canAccess
    ) {
      await sendAccessStatus(
        env,
        chatId,
        from.id,
      );

      return;
    }

    await sendBotMessage(
      env,
      chatId,
      `🚀 *TESTLAR TAYYOR!*\n\n` +
        `Siz test tizimiga kirish huquqiga egasiz.\n\n` +
        `Boshlash uchun quyidagi tugmani bosing:`,
      testKeyboard(),
    );

    return;
  }
}


/* =========================================================
   MINI APP / CHALLENGE
========================================================= */

function challengeUrl(
  challengeId: string,
): string {
  return (
    MINI_APP_URL +
    "?challenge=" +
    encodeURIComponent(
      challengeId,
    )
  );
}

function challengeKeyboard(
  challengeId: string,
) {
  return {
    inline_keyboard: [
      [
        {
          text:
            "🚀 TESTNI BOSHLASH",

          web_app: {
            url:
              challengeUrl(
                challengeId,
              ),
          },
        },
      ],
    ],
  };
}


/* =========================================================
   CURRICULUM
========================================================= */

function getDayNumber(
  date: string,
): number {
  const start =
    Date.parse(
      `${CURRICULUM_START_DATE}T00:00:00Z`,
    );

  const current =
    Date.parse(
      `${date}T00:00:00Z`,
    );

  const diff =
    Math.floor(
      (
        current -
        start
      ) /
        86400000,
    );

  return Math.max(
    1,
    diff + 1,
  );
}


function getCurriculumModules(
  day: number,
): string[] {
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
   RANDOM
========================================================= */

function shuffle<T>(
  array: T[],
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
          (i + 1),
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
   QUESTION POOL
========================================================= */

type QuizLevel =
  | "easy"
  | "medium"
  | "hard"
  | "case";

interface SelectedQuestion {
  id: string;
  topicId: string;
  categoryId:
    string | null;
  level: QuizLevel;
}


function collectModuleQuestions(
  moduleIds: string[],
): SelectedQuestion[] {
  const result:
    SelectedQuestion[] =
    [];

  for (
    const moduleId
    of moduleIds
  ) {
    const module =
      getModuleById(
        moduleId,
      );

    if (!module) {
      continue;
    }

    for (
      const topic
      of module.topics
    ) {
      const levels:
        QuizLevel[] = [
          "easy",
          "medium",
          "hard",
          "case",
        ];

      for (
        const level
        of levels
      ) {
        const questions =
          getTopicQuestions(
            topic.id,
            level,
          );

        for (
          const question
          of questions
        ) {
          result.push({
            id:
              question.id,

            topicId:
              topic.id,

            categoryId:
              module.id,

            level,
          });
        }
      }
    }
  }

  return result;
}


/* =========================================================
   QUESTION SELECTION
========================================================= */

function pickQuestions(
  moduleIds: string[],
): SelectedQuestion[] {
  const pool =
    collectModuleQuestions(
      moduleIds,
    );

  const pickLevel = (
    level: QuizLevel,
    count: number,
  ) =>
    shuffle(
      pool.filter(
        (q) =>
          q.level ===
          level,
      ),
    ).slice(
      0,
      count,
    );

  let selected = [
    ...pickLevel(
      "easy",
      5,
    ),

    ...pickLevel(
      "medium",
      10,
    ),

    ...pickLevel(
      "hard",
      7,
    ),

    ...pickLevel(
      "case",
      3,
    ),
  ];

  if (
    selected.length <
    QUESTIONS_PER_CHALLENGE
  ) {
    const selectedIds =
      new Set(
        selected.map(
          (q) => q.id,
        ),
      );

    const remaining =
      shuffle(
        pool.filter(
          (q) =>
            !selectedIds.has(
              q.id,
            ),
        ),
      );

    selected = [
      ...selected,

      ...remaining.slice(
        0,
        QUESTIONS_PER_CHALLENGE -
          selected.length,
      ),
    ];
  }

  return shuffle(
    selected,
  ).slice(
    0,
    QUESTIONS_PER_CHALLENGE,
  );
}


/* =========================================================
   CHALLENGE ID
========================================================= */

function makeChallengeId(
  date: string,
  hour: number,
): string {
  return (
    `daily-${date}-${String(
      hour,
    ).padStart(
      2,
      "0",
    )}`
  );
}


/* =========================================================
   CREATE CHALLENGE
========================================================= */

async function createHourlyChallenge(
  env: Env,
  time: TashkentTime,
): Promise<{
  created: boolean;
  challengeId?: string;
  reason?: string;
}> {
  const challengeId =
    makeChallengeId(
      time.date,
      time.hour,
    );

  const dayNumber =
    getDayNumber(
      time.date,
    );

  const moduleIds =
    getCurriculumModules(
      dayNumber,
    );

  const existing =
    await env.DB
      .prepare(
        `
        SELECT id
        FROM daily_challenges
        WHERE id = ?
        LIMIT 1
        `,
      )
      .bind(
        challengeId,
      )
      .first<{
        id: string;
      }>();

  if (existing) {
    return {
      created: false,
      challengeId,
      reason:
        "already_exists",
    };
  }

  const questions =
    pickQuestions(
      moduleIds,
    );

  if (
    questions.length ===
    0
  ) {
    return {
      created: false,
      reason:
        "no_questions",
    };
  }

  const startAt =
    Date.now();

  const endAt =
    startAt +
    CHALLENGE_DURATION_SEC *
      1000;

  await env.DB
    .prepare(
      `
      INSERT INTO daily_challenges (
        id,
        challenge_date,
        hour_local,
        day_number,
        module_ids_json,
        start_at,
        end_at,
        total_questions,
        points_per_correct,
        max_score,
        status,
        created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
    )
    .bind(
      challengeId,
      time.date,
      time.hour,
      dayNumber,
      JSON.stringify(
        moduleIds,
      ),
      startAt,
      endAt,
      QUESTIONS_PER_CHALLENGE,
      POINTS_PER_CORRECT,
      MAX_CHALLENGE_SCORE,
      "active",
      startAt,
    )
    .run();

  for (
    let i = 0;
    i < questions.length;
    i++
  ) {
    const q =
      questions[i];

    await env.DB
      .prepare(
        `
        INSERT INTO challenge_questions (
          challenge_id,
          question_id,
          category_id,
          topic_id,
          level,
          order_index,
          created_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
      )
      .bind(
        challengeId,
        q.id,
        q.categoryId,
        q.topicId,
        q.level,
        i,
        startAt,
      )
      .run();
  }

  console.log(
    "[CHALLENGE CREATED]",
    JSON.stringify({
      challengeId,
      date:
        time.date,
      hour:
        time.hour,
      dayNumber,
      modules:
        moduleIds,
      questions:
        questions.length,
    }),
  );

  return {
    created: true,
    challengeId,
  };
}


/* =========================================================
   TELEGRAM CHALLENGE MESSAGE
========================================================= */

async function sendChallengeMessage(
  env: Env,
  challengeId: string,
  date: string,
  hour: number,
  dayNumber: number,
  moduleIds: string[],
  questionCount: number,
) {
  const text =
    `🏆 *MENEJERLIK — SOATLIK CHALLENGE*\n\n` +
    `🕐 ${String(hour).padStart(2, "0")}:00\n` +
    `📅 ${date}\n` +
    `📚 ${moduleIds.join(", ")}\n\n` +
    `📝 ${questionCount} ta savol\n` +
    `⏱ 50 daqiqa\n` +
    `🎯 Har bir to‘g‘ri javob — 2 ball\n` +
    `🏅 Maksimal — 50 ball\n\n` +
    `Savollar oson, o‘rta, qiyin va case formatlarida aralashtirilgan.\n\n` +
    `🚀 Tayyor bo‘lsangiz, boshlang!`;

  return telegramRequest(
    env,
    "sendMessage",
    {
      chat_id:
        GROUP_CHAT_ID,

      text,

      parse_mode:
        "Markdown",

      reply_markup:
        challengeKeyboard(
          challengeId,
        ),
    },
  );
}


/* =========================================================
   DAILY CHALLENGE RUNNER
========================================================= */

async function runHourlyChallenge(
  env: Env,
  time: TashkentTime,
) {
  const result =
    await createHourlyChallenge(
      env,
      time,
    );

  if (
    !result.created ||
    !result.challengeId
  ) {
    console.log(
      "[CRON] Challenge yaratilmadi:",
      result.reason,
    );

    return;
  }

  const challenge =
    await env.DB
      .prepare(
        `
        SELECT
          day_number,
          module_ids_json,
          total_questions
        FROM daily_challenges
        WHERE id = ?
        `,
      )
      .bind(
        result.challengeId,
      )
      .first<{
        day_number: number;
        module_ids_json: string;
        total_questions: number;
      }>();

  if (!challenge) {
    return;
  }

  const modules =
    JSON.parse(
      challenge.module_ids_json,
    ) as string[];

  const telegramResult =
    await sendChallengeMessage(
      env,
      result.challengeId,
      time.date,
      time.hour,
      challenge.day_number,
      modules,
      challenge.total_questions,
    );

  if (
    !telegramResult.ok
  ) {
    console.error(
      "[CRON] Telegramga challenge yuborilmadi",
      telegramResult.description,
    );
  }
}


/* =========================================================
   DAILY RESULTS
========================================================= */

async function buildDailyResults(
  env: Env,
  date: string,
) {
  const rows =
    await env.DB
      .prepare(
        `
        SELECT
          telegram_id,
          COUNT(*) AS challenges_count,
          SUM(correct) AS total_correct,
          SUM(total) AS total_questions,
          SUM(score) AS total_score,
          SUM(duration_sec) AS total_duration_sec,
          MAX(score) AS best_score
        FROM challenge_participants
        WHERE status = 'submitted'
          AND challenge_id IN (
            SELECT id
            FROM daily_challenges
            WHERE challenge_date = ?
          )
        GROUP BY telegram_id
        ORDER BY total_score DESC,
                 total_correct DESC,
                 total_duration_sec ASC
        LIMIT 30
        `,
      )
      .bind(date)
      .all();

  const now =
    Date.now();

  let rank = 1;

  for (
    const row
    of rows.results as Array<
      Record<string, unknown>
    >
  ) {
    const telegramId =
      String(
        row.telegram_id,
      );

    await env.DB
      .prepare(
        `
        INSERT INTO daily_leaderboard (
          challenge_date,
          telegram_id,
          challenges_count,
          total_correct,
          total_questions,
          total_score,
          total_duration_sec,
          best_score,
          rank,
          created_at,
          updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(
          challenge_date,
          telegram_id
        )
        DO UPDATE SET
          challenges_count =
            excluded.challenges_count,
          total_correct =
            excluded.total_correct,
          total_questions =
            excluded.total_questions,
          total_score =
            excluded.total_score,
          total_duration_sec =
            excluded.total_duration_sec,
          best_score =
            excluded.best_score,
          rank =
            excluded.rank,
          updated_at =
            excluded.updated_at
        `,
      )
      .bind(
        date,
        telegramId,
        Number(
          row.challenges_count ??
            0,
        ),
        Number(
          row.total_correct ??
            0,
        ),
        Number(
          row.total_questions ??
            0,
        ),
        Number(
          row.total_score ??
            0,
        ),
        Number(
          row.total_duration_sec ??
            0,
        ),
        Number(
          row.best_score ??
            0,
        ),
        rank,
        now,
        now,
      )
      .run();

    rank++;
  }

  return rows.results;
}


/* =========================================================
   DAILY TELEGRAM SUMMARY
========================================================= */

async function sendDailySummary(
  env: Env,
  date: string,
) {
  const rows =
    await buildDailyResults(
      env,
      date,
    );

  if (
    !rows.length
  ) {
    console.log(
      "[DAILY] Bugun natija yo‘q",
    );

    return;
  }

  const top =
    rows
      .slice(0, 10)
      .map(
        (
          row: Record<
            string,
            unknown
          >,
          index,
        ) => {
          const score =
            Number(
              row.total_score ??
                0,
            );

          const correct =
            Number(
              row.total_correct ??
                0,
            );

          const total =
            Number(
              row.total_questions ??
                0,
            );

          const icon =
            index === 0
              ? "🥇"
              : index === 1
                ? "🥈"
                : index === 2
                  ? "🥉"
                  : `${index + 1}.`;

          return (
            `${icon} ` +
            `${row.telegram_id} — ` +
            `${score} ball ` +
            `(${correct}/${total})`
          );
        },
      )
      .join("\n");

  await telegramRequest(
    env,
    "sendMessage",
    {
      chat_id:
        GROUP_CHAT_ID,

      text:
        `🌙 *BUGUNGI NATIJALAR*\n\n` +
        `📅 ${date}\n` +
        `🏆 Kunlik Top 10\n\n` +
        `${top}\n\n` +
        `📊 Natijalar haftalik reytingga qo‘shildi.\n\n` +
        `🎓 *${BOT_NAME}*`,

      parse_mode:
        "Markdown",
    },
  );
}


/* =========================================================
   CHALLENGE API
========================================================= */

async function getChallenge(
  env: Env,
  challengeId: string,
) {
  const challenge =
    await env.DB
      .prepare(
        `
        SELECT *
        FROM daily_challenges
        WHERE id = ?
        LIMIT 1
        `,
      )
      .bind(
        challengeId,
      )
      .first();

  if (!challenge) {
    return json(
      {
        ok: false,
        error:
          "Challenge topilmadi",
      },
      404,
    );
  }

  const questions =
    await env.DB
      .prepare(
        `
        SELECT
          question_id,
          category_id,
          topic_id,
          level,
          order_index
        FROM challenge_questions
        WHERE challenge_id = ?
        ORDER BY order_index ASC
        `,
      )
      .bind(
        challengeId,
      )
      .all();

  const result =
    questions.results
      .map(
        (
          item: Record<
            string,
            unknown
          >,
        ) => {
          const question =
            findQuestionById(
              String(
                item.question_id,
              ),
            );

          if (!question) {
            return null;
          }

          return {
            id:
              question.id,

            text:
              question.text,

            options:
              question.options,

            topicId:
              item.topic_id,

            level:
              item.level,

            order:
              item.order_index,
          };
        },
      )
      .filter(Boolean);

  return json({
    ok: true,
    challenge,
    questions:
      result,
  });
}


/* =========================================================
   FIND QUESTION
========================================================= */

function findQuestionById(
  questionId: string,
) {
  for (
    let moduleNumber = 1;
    moduleNumber <= 10;
    moduleNumber++
  ) {
    const module =
      getModuleById(
        `m${moduleNumber}`,
      );

    if (!module) {
      continue;
    }

    for (
      const topic
      of module.topics
    ) {
      const questions =
        getTopicQuestions(
          topic.id,
          "easy",
        )
          .concat(
            getTopicQuestions(
              topic.id,
              "medium",
            ),
          )
          .concat(
            getTopicQuestions(
              topic.id,
              "hard",
            ),
          )
          .concat(
            getTopicQuestions(
              topic.id,
              "case",
            ),
          );

      const found =
        questions.find(
          (q) =>
            q.id ===
            questionId,
        );

      if (found) {
        return found;
      }
    }
  }

  return null;
}


/* =========================================================
   HEALTH
========================================================= */

async function health(
  env: Env,
) {
  const time =
    getTashkentTime();

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

    webhookPaths: [
      "/",
      WEBHOOK_PATH,
    ],

    telegramConfigured:
      Boolean(
        env.TELEGRAM_BOT_TOKEN,
      ),

    databaseConfigured:
      Boolean(env.DB),

    group:
      GROUP_CHAT_ID,

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
        50,

      pointsPerCorrect:
        POINTS_PER_CORRECT,

      maxScore:
        MAX_CHALLENGE_SCORE,
    },

    tashkentTime:
      time,
  });
}


/* =========================================================
   MAIN WORKER
========================================================= */

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url =
      new URL(
        request.url,
      );


    /* =====================================================
       TELEGRAM WEBHOOK
       ROOT + /telegram/webhook
    ===================================================== */

    const isWebhookPath =
      url.pathname ===
        "/" ||
      url.pathname ===
        WEBHOOK_PATH;

    if (
      isWebhookPath &&
      request.method ===
        "POST"
    ) {
      try {
        const update =
          (await request.json()) as TelegramUpdate;

        ctx.waitUntil(
          handleTelegramUpdate(
            env,
            update,
          ).catch(
            (error) =>
              console.error(
                "[WEBHOOK ERROR]",
                error,
              ),
          ),
        );

        return json({
          ok: true,
          received: true,
          update_id:
            update.update_id,
        });
      } catch (
        error
      ) {
        console.error(
          "[WEBHOOK PARSE ERROR]",
          error,
        );

        return json(
          {
            ok: false,
            error:
              "Invalid Telegram update",
          },
          400,
        );
      }
    }


    /* =====================================================
       HEALTH
    ===================================================== */

    if (
      url.pathname ===
      "/health"
    ) {
      return health(
        env,
      );
    }


    /* =====================================================
       ACCESS STATUS API
    ===================================================== */

    if (
      url.pathname ===
      "/api/access-status"
    ) {
      const telegramId =
        Number(
          url.searchParams.get(
            "telegram_id",
          ),
        );

      if (
        !Number.isSafeInteger(
          telegramId,
        ) ||
        telegramId <= 0
      ) {
        return json(
          {
            ok: false,
            error:
              "telegram_id kerak",
          },
          400,
        );
      }

      const status =
        await getAccessStatus(
          env,
          telegramId,
        );

      return json({
        ok: true,
        status,
      });
    }


    /* =====================================================
       REFERRAL API
    ===================================================== */

    if (
      url.pathname ===
      "/api/referral"
    ) {
      const telegramId =
        Number(
          url.searchParams.get(
            "telegram_id",
          ),
        );

      if (
        !Number.isSafeInteger(
          telegramId,
        ) ||
        telegramId <= 0
      ) {
        return json(
          {
            ok: false,
            error:
              "telegram_id kerak",
          },
          400,
        );
      }

      const count =
        await getReferralCount(
          env,
          telegramId,
        );

      return json({
        ok: true,
        telegram_id:
          telegramId,
        referrals:
          count,
        required:
          REQUIRED_REFERRALS,
        remaining:
          Math.max(
            0,
            REQUIRED_REFERRALS -
              count,
          ),
        link:
          referralLink(
            telegramId,
          ),
      });
    }


    /* =====================================================
       CHALLENGE API
    ===================================================== */

    if (
      url.pathname ===
      "/api/challenge"
    ) {
      const id =
        url.searchParams.get(
          "id",
        );

      if (!id) {
        return json(
          {
            ok: false,
            error:
              "id kerak",
          },
          400,
        );
      }

      return getChallenge(
        env,
        id,
      );
    }


    /* =====================================================
       NEXT / OPENNEXT
    ===================================================== */

    return nextWorker.fetch(
      request,
      env,
      ctx,
    );
  },


  /* =======================================================
     CRON
  ======================================================= */

  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ) {
    const time =
      getTashkentTime();

    console.log(
      "[CRON]",
      JSON.stringify({
        date:
          time.date,

        hour:
          time.hour,

        minute:
          time.minute,

        timezone:
          "Asia/Tashkent",
      }),
    );


    /* -----------------------------------------------------
       HOURLY CHALLENGE
    ----------------------------------------------------- */

    if (
      isChallengeHour(
        time.hour,
      )
    ) {
      ctx.waitUntil(
        runHourlyChallenge(
          env,
          time,
        ),
      );
    }


    /* -----------------------------------------------------
       DAILY RESULTS
    ----------------------------------------------------- */

    if (
      time.hour ===
      DAILY_RESULTS_HOUR
    ) {
      ctx.waitUntil(
        sendDailySummary(
          env,
          time.date,
        ),
      );
    }

    void controller;
  },
};


/* =========================================================
   CHALLENGE HOURS
========================================================= */

function isChallengeHour(
  hour: number,
) {
  return (
    hour >=
      DAILY_START_HOUR &&
    hour <=
      DAILY_END_HOUR
  );
}
