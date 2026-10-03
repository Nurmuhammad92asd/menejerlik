import nextWorker from "./.open-next/worker.js";

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
  type:
    | "private"
    | "group"
    | "supergroup"
    | "channel"
    | string;
  title?: string;
  username?: string;
}

interface TelegramMessage {
  message_id: number;
  chat: TelegramChat;
  from?: TelegramUser;
  text?: string;
  caption?: string;
}

interface TelegramUpdate {
  update_id: number;

  message?: TelegramMessage;

  edited_message?: TelegramMessage;

  channel_post?: TelegramMessage;

  edited_channel_post?: TelegramMessage;

  my_chat_member?: unknown;

  chat_member?: unknown;

  callback_query?: unknown;
}

interface TelegramApiResponse<T = unknown> {
  ok: boolean;
  result?: T;
  description?: string;
  error_code?: number;
}

interface TashkentTime {
  date: string;
  hour: number;
  minute: number;
  second: number;
}

/* =========================================================
   CONFIG
========================================================= */

const BOT_NAME = "Menejerlik by Nurmuhammad";

const MINI_APP_URL =
  "https://menejerlik.vercel.app";

const WEBHOOK_PATH =
  "/telegram/webhook";

const DAILY_START_HOUR = 5;
const DAILY_END_HOUR = 22;

const QUESTIONS_PER_CHALLENGE = 25;

const POINTS_PER_CORRECT = 2;

const MAX_CHALLENGE_SCORE =
  QUESTIONS_PER_CHALLENGE *
  POINTS_PER_CORRECT;

/* =========================================================
   GENERIC RESPONSE
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

        "pragma": "no-cache",
      },
    },
  );
}

/* =========================================================
   TASHKENT TIME
========================================================= */

function getTashkentTime(
  now = new Date(),
): TashkentTime {
  const parts =
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Tashkent",

      year: "numeric",
      month: "2-digit",
      day: "2-digit",

      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",

      hourCycle: "h23",
    }).formatToParts(now);

  const get = (type: string) =>
    parts.find(
      (part) => part.type === type,
    )?.value ?? "00";

  return {
    date:
      `${get("year")}-${get("month")}-${get("day")}`,

    hour: Number(
      get("hour"),
    ),

    minute: Number(
      get("minute"),
    ),

    second: Number(
      get("second"),
    ),
  };
}

/* =========================================================
   TELEGRAM API
========================================================= */

async function telegramRequest<T = unknown>(
  env: Env,
  method: string,
  body: Record<string, unknown>,
): Promise<TelegramApiResponse<T>> {
  if (!env.TELEGRAM_BOT_TOKEN) {
    console.error(
      "[TELEGRAM] TELEGRAM_BOT_TOKEN mavjud emas.",
    );

    return {
      ok: false,
      error_code: 500,
      description:
        "TELEGRAM_BOT_TOKEN is not configured",
    };
  }

  /*
   * URLni string concatenation bilan quramiz.
   * Markdown yoki noto'g'ri template hech qachon
   * bu yerga aralashmaydi.
   */
  const url =
    "https://api.telegram.org/bot" +
    env.TELEGRAM_BOT_TOKEN +
    "/" +
    method;

  try {
    const response =
      await fetch(url, {
        method: "POST",

        headers: {
          "content-type":
            "application/json",
        },

        body: JSON.stringify(body),
      });

    let data:
      | TelegramApiResponse<T>
      | null = null;

    try {
      data =
        (await response.json()) as TelegramApiResponse<T>;
    } catch {
      console.error(
        `[TELEGRAM API] JSON parse xatosi: ${method}`,
      );
    }

    if (!data) {
      return {
        ok: false,
        error_code: response.status,
        description:
          "Telegram returned invalid JSON",
      };
    }

    console.log(
      `[TELEGRAM API] ${method} ` +
      `status=${response.status} ` +
      `ok=${data.ok}`,
    );

    if (!response.ok || !data.ok) {
      console.error(
        `[TELEGRAM API ERROR] ${method}`,
        JSON.stringify(data),
      );
    }

    return data;
  } catch (error) {
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
   MINI APP KEYBOARD
========================================================= */

function miniAppKeyboard(
  buttonText = "🚀 TESTNI BOSHLASH",
) {
  return {
    inline_keyboard: [
      [
        {
          text: buttonText,

          web_app: {
            url: MINI_APP_URL,
          },
        },
      ],
    ],
  };
}

/* =========================================================
   TELEGRAM MESSAGES
========================================================= */

async function sendWelcomeMessage(
  env: Env,
  chatId: number,
  firstName?: string,
) {
  const name =
    firstName?.trim() || "do‘st";

  return telegramRequest(
    env,
    "sendMessage",
    {
      chat_id: chatId,

      text:
        `👋 Salom, ${name}!\n\n` +
        `🎓 *${BOT_NAME}*\n\n` +
        `Test platformasiga xush kelibsiz.\n\n` +
        `📚 Modul va mavzular\n` +
        `📝 Menejerlik testlari\n` +
        `🏆 Reyting\n` +
        `⚡ Natijalar\n\n` +
        `Testni boshlash uchun quyidagi tugmani bosing:`,

      parse_mode: "Markdown",

      reply_markup:
        miniAppKeyboard(
          "🚀 TESTNI BOSHLASH",
        ),
    },
  );
}

async function sendTestMessage(
  env: Env,
  chatId: number,
  firstName?: string,
) {
  const name =
    firstName?.trim() || "do‘st";

  return telegramRequest(
    env,
    "sendMessage",
    {
      chat_id: chatId,

      text:
        `👋 Assalomu alaykum, ${name}!\n\n` +
        `🎓 *${BOT_NAME}*\n\n` +
        `Rahbarlik va menejerlik bo‘yicha ` +
        `bilimlaringizni sinab ko‘ring.\n\n` +
        `📚 10 ta modul\n` +
        `📝 Mavzular bo‘yicha testlar\n` +
        `🎯 Oson / o‘rta / qiyin / case\n` +
        `🏆 Reyting va natijalar\n\n` +
        `Boshlash uchun tugmani bosing:`,

      parse_mode: "Markdown",

      reply_markup:
        miniAppKeyboard(
          "🚀 TESTNI BOSHLASH",
        ),
    },
  );
}

async function sendHelpMessage(
  env: Env,
  chatId: number,
) {
  return telegramRequest(
    env,
    "sendMessage",
    {
      chat_id: chatId,

      text:
        `📚 *${BOT_NAME}*\n\n` +
        `Botdan foydalanish:\n\n` +
        `🚀 /start — boshlash\n` +
        `📝 /test — testni ochish\n` +
        `ℹ️ /help — yordam\n\n` +
        `Testlar Mini App orqali ishlaydi.`,

      parse_mode: "Markdown",

      reply_markup:
        miniAppKeyboard(
          "🚀 TESTNI OCHISH",
        ),
    },
  );
}

/* =========================================================
   COMMAND NORMALIZATION
========================================================= */

function normalizeCommand(
  text: string,
): string {
  const first =
    text
      .trim()
      .split(/\s+/)[0]
      ?.toLowerCase() ?? "";

  /*
   * /test@topmenejerbot
   *       ↓
   * /test
   */

  const atIndex =
    first.indexOf("@");

  if (atIndex > 0) {
    return first.slice(
      0,
      atIndex,
    );
  }

  return first;
}

/* =========================================================
   MESSAGE EXTRACTION
========================================================= */

function extractMessage(
  update: TelegramUpdate,
): TelegramMessage | undefined {
  /*
   * Oddiy private/group/supergroup message
   */
  if (update.message) {
    return update.message;
  }

  /*
   * Edited message
   */
  if (update.edited_message) {
    return update.edited_message;
  }

  /*
   * Channel post
   */
  if (update.channel_post) {
    return update.channel_post;
  }

  /*
   * Edited channel post
   */
  if (update.edited_channel_post) {
    return update.edited_channel_post;
  }

  return undefined;
}

/* =========================================================
   UPDATE TYPE
========================================================= */

function getUpdateType(
  update: TelegramUpdate,
): string {
  if (update.message) {
    return "message";
  }

  if (update.edited_message) {
    return "edited_message";
  }

  if (update.channel_post) {
    return "channel_post";
  }

  if (update.edited_channel_post) {
    return "edited_channel_post";
  }

  if (update.callback_query) {
    return "callback_query";
  }

  if (update.my_chat_member) {
    return "my_chat_member";
  }

  if (update.chat_member) {
    return "chat_member";
  }

  return "unknown";
}

/* =========================================================
   TELEGRAM UPDATE HANDLER
========================================================= */

async function handleTelegramUpdate(
  env: Env,
  update: TelegramUpdate,
): Promise<Response> {
  const updateType =
    getUpdateType(update);

  /*
   * Diagnostika.
   *
   * Tokenni hech qachon logga chiqarmaymiz.
   */
  console.log(
    "[WEBHOOK UPDATE]",
    JSON.stringify({
      update_id:
        update.update_id,

      update_type:
        updateType,

      has_message:
        Boolean(update.message),

      has_channel_post:
        Boolean(update.channel_post),

      has_callback:
        Boolean(update.callback_query),

      has_chat_member:
        Boolean(
          update.chat_member,
        ),

      has_my_chat_member:
        Boolean(
          update.my_chat_member,
        ),
    }),
  );

  const message =
    extractMessage(update);

  /*
   * Message bo'lmagan update
   */
  if (!message) {
    console.log(
      `[WEBHOOK] Message mavjud emas. ` +
      `type=${updateType}`,
    );

    return json({
      ok: true,

      ignored: true,

      reason:
        "message_not_found",

      update_id:
        update.update_id,

      update_type:
        updateType,
    });
  }

  const chat =
    message.chat;

  const chatId =
    chat.id;

  const chatType =
    chat.type;

  const rawText =
    (
      message.text ??
      message.caption ??
      ""
    ).trim();

  const command =
    normalizeCommand(
      rawText,
    );

  /*
   * Muhim diagnostika.
   */
  console.log(
    "[WEBHOOK MESSAGE]",
    JSON.stringify({
      update_id:
        update.update_id,

      update_type:
        updateType,

      chat_id:
        chatId,

      chat_type:
        chatType,

      chat_title:
        chat.title ?? null,

      chat_username:
        chat.username ?? null,

      from_id:
        message.from?.id ?? null,

      from_username:
        message.from?.username ?? null,

      text:
        rawText,

      command:
        command || null,
    }),
  );

  /* =======================================================
     /TEST
  ======================================================= */

  if (command === "/test") {
    console.log(
      `[COMMAND] /test detected. ` +
      `chat=${chatId} ` +
      `type=${chatType}`,
    );

    const result =
      await sendTestMessage(
        env,
        chatId,
        message.from?.first_name,
      );

    console.log(
      `[COMMAND] /test result ` +
      `ok=${result.ok} ` +
      `error=${result.description ?? "none"}`,
    );

    return json({
      ok: result.ok,

      action:
        "test_button_sent",

      telegram:
        result.ok
          ? "sent"
          : "failed",

      chat_id:
        chatId,

      chat_type:
        chatType,

      update_id:
        update.update_id,
    });
  }

  /* =======================================================
     /START
  ======================================================= */

  if (command === "/start") {
    console.log(
      `[COMMAND] /start detected. ` +
      `chat=${chatId} ` +
      `type=${chatType}`,
    );

    const result =
      await sendWelcomeMessage(
        env,
        chatId,
        message.from?.first_name,
      );

    console.log(
      `[COMMAND] /start result ` +
      `ok=${result.ok} ` +
      `error=${result.description ?? "none"}`,
    );

    return json({
      ok: result.ok,

      action:
        "welcome_sent",

      telegram:
        result.ok
          ? "sent"
          : "failed",

      chat_id:
        chatId,

      chat_type:
        chatType,
    });
  }

  /* =======================================================
     /HELP
  ======================================================= */

  if (command === "/help") {
    console.log(
      `[COMMAND] /help detected. ` +
      `chat=${chatId} ` +
      `type=${chatType}`,
    );

    const result =
      await sendHelpMessage(
        env,
        chatId,
      );

    return json({
      ok: result.ok,

      action:
        "help_sent",

      telegram:
        result.ok
          ? "sent"
          : "failed",

      chat_id:
        chatId,

      chat_type:
        chatType,
    });
  }

  /* =======================================================
     PRIVATE CHAT
  ======================================================= */

  if (
    chatType === "private" &&
    rawText
  ) {
    console.log(
      `[PRIVATE] Oddiy xabar: "${rawText}"`,
    );

    const result =
      await sendWelcomeMessage(
        env,
        chatId,
        message.from?.first_name,
      );

    return json({
      ok: result.ok,

      action:
        "private_welcome_sent",
    });
  }

  /* =======================================================
     CHANNEL
  ======================================================= */

  if (
    chatType === "channel"
  ) {
    console.log(
      `[CHANNEL] Channel post received. ` +
      `chat=${chatId}`,
    );

    return json({
      ok: true,

      ignored: true,

      reason:
        "channel_post_received",

      chat_id:
        chatId,

      chat_type:
        chatType,
    });
  }

  /* =======================================================
     UNSUPPORTED
  ======================================================= */

  console.log(
    `[IGNORED] ` +
    `chat=${chatId} ` +
    `type=${chatType} ` +
    `text="${rawText}"`,
  );

  return json({
    ok: true,

    ignored: true,

    reason:
      "unsupported_message",

    chat_id:
      chatId,

    chat_type:
      chatType,

    text:
      rawText,
  });
}

/* =========================================================
   D1 CRON HEARTBEAT
========================================================= */

async function saveCronHeartbeat(
  env: Env,
  time: TashkentTime,
): Promise<void> {
  try {
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS cron_test (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tashkent_date TEXT NOT NULL,
        tashkent_hour INTEGER NOT NULL,
        created_at INTEGER NOT NULL
      )
    `).run();

    await env.DB.prepare(`
      INSERT INTO cron_test (
        tashkent_date,
        tashkent_hour,
        created_at
      )
      VALUES (?, ?, ?)
    `)
      .bind(
        time.date,
        time.hour,
        Date.now(),
      )
      .run();

    console.log(
      `[CRON] Heartbeat saved: ` +
      `${time.date} ` +
      `${String(time.hour).padStart(2, "0")}:` +
      `${String(time.minute).padStart(2, "0")}`,
    );
  } catch (error) {
    console.error(
      "[CRON] D1 heartbeat error:",
      error,
    );
  }
}

/* =========================================================
   CHALLENGE WINDOW
========================================================= */

function isChallengeHour(
  hour: number,
): boolean {
  return (
    hour >= DAILY_START_HOUR &&
    hour <= DAILY_END_HOUR
  );
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
      new URL(request.url);

    /* =====================================================
       TELEGRAM WEBHOOK POST
    ===================================================== */

    if (
      url.pathname ===
        WEBHOOK_PATH &&
      request.method === "POST"
    ) {
      try {
        const update =
          (await request.json()) as TelegramUpdate;

        console.log(
          "[WEBHOOK RECEIVED]",
          JSON.stringify({
            update_id:
              update.update_id,

            update_type:
              getUpdateType(update),

            has_message:
              Boolean(update.message),

            has_channel_post:
              Boolean(
                update.channel_post,
              ),
          }),
        );

        /*
         * Telegramga tezda 200 qaytaramiz.
         *
         * Og'irroq processing background'da.
         */
        ctx.waitUntil(
          handleTelegramUpdate(
            env,
            update,
          ).catch(
            (error) => {
              console.error(
                "[WEBHOOK PROCESSING ERROR]",
                error,
              );
            },
          ),
        );

        return json({
          ok: true,

          received: true,

          update_id:
            update.update_id,
        });
      } catch (error) {
        console.error(
          "[WEBHOOK JSON ERROR]",
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
       TELEGRAM WEBHOOK GET
    ===================================================== */

    if (
      url.pathname ===
        WEBHOOK_PATH &&
      request.method === "GET"
    ) {
      const time =
        getTashkentTime();

      return json({
        ok: true,

        service:
          BOT_NAME,

        webhook:
          WEBHOOK_PATH,

        miniApp:
          MINI_APP_URL,

        tashkentTime:
          time,
      });
    }

    /* =====================================================
       HEALTH CHECK
    ===================================================== */

    if (
      url.pathname ===
      "/health"
    ) {
      const time =
        getTashkentTime();

      return json({
        ok: true,

        service:
          "menejerlik-worker",

        bot:
          BOT_NAME,

        miniApp:
          MINI_APP_URL,

        telegramConfigured:
          Boolean(
            env.TELEGRAM_BOT_TOKEN,
          ),

        databaseConfigured:
          Boolean(env.DB),

        cron:
          "0 * * * *",

        challenge:
          {
            startHour:
              DAILY_START_HOUR,

            endHour:
              DAILY_END_HOUR,

            questions:
              QUESTIONS_PER_CHALLENGE,

            pointsPerCorrect:
              POINTS_PER_CORRECT,

            maxScore:
              MAX_CHALLENGE_SCORE,
          },

        tashkentTime:
          time,
      });
    }

    /* =====================================================
       DEFAULT NEXT.JS / OPENNEXT
    ===================================================== */

    return nextWorker.fetch(
      request,
      env,
      ctx,
    );
  },

  /* =======================================================
     CLOUDFLARE CRON
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

        second:
          time.second,

        timezone:
          "Asia/Tashkent",
      }),
    );

    /* =====================================================
       D1 HEARTBEAT
    ===================================================== */

    ctx.waitUntil(
      saveCronHeartbeat(
        env,
        time,
      ),
    );

    /* =====================================================
       05:00–22:00 CHALLENGE WINDOW
    ===================================================== */

    if (
      isChallengeHour(
        time.hour,
      )
    ) {
      console.log(
        "[CRON] Challenge oynasi faol",
      );

      console.log(
        "[CRON] Challenge config:",
        JSON.stringify({
          date:
            time.date,

          hour:
            time.hour,

          questions:
            QUESTIONS_PER_CHALLENGE,

          pointsPerCorrect:
            POINTS_PER_CORRECT,

          maxScore:
            MAX_CHALLENGE_SCORE,
        }),
      );

      /*
       * Keyingi bosqichda shu joyga:
       *
       * 1. kun raqamini aniqlash
       * 2. kerakli modullarni tanlash
       * 3. savollarni random tanlash
       * 4. daily_challenges yaratish
       * 5. challenge_questions yaratish
       *
       * logikasini ulaymiz.
       */
    }

    /* =====================================================
       23:00 DAILY RESULTS
    ===================================================== */

    if (
      time.hour === 23
    ) {
      console.log(
        "[CRON] 23:00 — kunlik natijalar oynasi",
      );

      /*
       * Keyingi bosqich:
       *
       * daily_leaderboard
       * weekly_leaderboard
       * hourly winners
       * daily summary
       *
       * shu yerda avtomatlashtiriladi.
       */
    }

    void controller;
  },
};
