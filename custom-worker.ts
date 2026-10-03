```ts
import nextWorker from "./.open-next/worker.js";

interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  TELEGRAM_BOT_TOKEN: string;
}

interface TelegramUser {
  id: number;
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

interface TelegramMessage {
  message_id: number;
  chat: TelegramChat;
  from?: TelegramUser;
  text?: string;
}

interface TelegramUpdate {
  update_id: number;
  message?: TelegramMessage;
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

const MINI_APP_URL = "https://menejerlik.vercel.app";

const WEBHOOK_PATH = "/telegram/webhook";

const BOT_NAME = "Menejerlik by Nurmuhammad";

const DAILY_START_HOUR = 5;
const DAILY_END_HOUR = 22;

const QUESTIONS_PER_CHALLENGE = 25;
const POINTS_PER_CORRECT = 2;
const MAX_CHALLENGE_SCORE =
  QUESTIONS_PER_CHALLENGE * POINTS_PER_CORRECT;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "cache-control": "no-store",
    },
  });
}

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
      description: "TELEGRAM_BOT_TOKEN is not configured",
    };
  }

  const url =
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data =
      (await response.json()) as TelegramApiResponse<T>;

    console.log(
      `[TELEGRAM API] method=${method} ok=${data.ok} ` +
        `status=${response.status}`,
    );

    if (!response.ok || !data.ok) {
      console.error(
        `[TELEGRAM API ERROR] ${method}:`,
        data,
      );
    }

    return data;
  } catch (error) {
    console.error(
      `[TELEGRAM NETWORK ERROR] ${method}:`,
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

function getTashkentTime(
  now = new Date(),
): TashkentTime {
  const parts = new Intl.DateTimeFormat("en-US", {
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
    parts.find((part) => part.type === type)?.value ?? "00";

  return {
    date:
      `${get("year")}-${get("month")}-${get("day")}`,
    hour: Number(get("hour")),
    minute: Number(get("minute")),
    second: Number(get("second")),
  };
}

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
        `📚 Modul va mavzular\n` +
        `📝 Testlar\n` +
        `🏆 Reyting\n` +
        `⚡ Natijalar\n\n` +
        `Testni boshlash uchun tugmani bosing:`,
      parse_mode: "Markdown",
      reply_markup: miniAppKeyboard(
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
        `🚀 /test — testni boshlash\n` +
        `ℹ️ /help — yordam\n\n` +
        `Testlar Mini App orqali ishlaydi.`,
      parse_mode: "Markdown",
      reply_markup: miniAppKeyboard(
        "🚀 TESTNI OCHISH",
      ),
    },
  );
}

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
        `Boshlash uchun tugmani bosing.`,
      parse_mode: "Markdown",
      reply_markup: miniAppKeyboard(
        "🚀 TESTNI BOSHLASH",
      ),
    },
  );
}

/**
 * Telegram update diagnostikasi
 */
async function handleTelegramUpdate(
  env: Env,
  update: TelegramUpdate,
): Promise<Response> {
  console.log(
    "[WEBHOOK UPDATE]",
    JSON.stringify(update),
  );

  const message = update.message;

  if (!message) {
    console.log(
      "[WEBHOOK] message mavjud emas",
    );

    return json({
      ok: true,
      ignored: true,
      reason: "message_not_found",
      update_id: update.update_id,
    });
  }

  const chatId = message.chat.id;
  const chatType = message.chat.type;

  const rawText =
    message.text?.trim() ?? "";

  const text =
    rawText.toLowerCase();

  console.log(
    "[WEBHOOK MESSAGE]",
    JSON.stringify({
      update_id: update.update_id,
      chat_id: chatId,
      chat_type: chatType,
      chat_title: message.chat.title ?? null,
      from_id: message.from?.id ?? null,
      username: message.from?.username ?? null,
      text: rawText,
    }),
  );

  /*
   * /test
   * /test@topmenejerbot
   */
  if (
    text === "/test" ||
    text.startsWith("/test@")
  ) {
    console.log(
      `[COMMAND] /test detected. ` +
      `chat=${chatId} type=${chatType}`,
    );

    const result =
      await sendTestMessage(
        env,
        chatId,
        message.from?.first_name,
      );

    console.log(
      `[COMMAND] /test response ` +
      `ok=${result.ok} ` +
      `error=${result.description ?? "none"}`,
    );

    return json({
      ok: result.ok,
      action: "test_button_sent",
      telegram: result.ok
        ? "sent"
        : "failed",
      chat_type: chatType,
    });
  }

  /*
   * /start
   * /start@topmenejerbot
   */
  if (
    text === "/start" ||
    text.startsWith("/start ")
    ||
    text.startsWith("/start@")
  ) {
    console.log(
      `[COMMAND] /start detected. ` +
      `chat=${chatId} type=${chatType}`,
    );

    const result =
      await sendWelcomeMessage(
        env,
        chatId,
        message.from?.first_name,
      );

    console.log(
      `[COMMAND] /start response ` +
      `ok=${result.ok} ` +
      `error=${result.description ?? "none"}`,
    );

    return json({
      ok: result.ok,
      action: "welcome_sent",
      telegram: result.ok
        ? "sent"
        : "failed",
      chat_type: chatType,
    });
  }

  /*
   * /help
   * /help@topmenejerbot
   */
  if (
    text === "/help" ||
    text.startsWith("/help@")
  ) {
    console.log(
      `[COMMAND] /help detected. ` +
      `chat=${chatId} type=${chatType}`,
    );

    const result =
      await sendHelpMessage(
        env,
        chatId,
      );

    return json({
      ok: result.ok,
      action: "help_sent",
      telegram: result.ok
        ? "sent"
        : "failed",
      chat_type: chatType,
    });
  }

  /*
   * Shaxsiy chatda oddiy matn
   */
  if (
    chatType === "private" &&
    rawText
  ) {
    console.log(
      `[PRIVATE MESSAGE] ${rawText}`,
    );

    const result =
      await sendWelcomeMessage(
        env,
        chatId,
        message.from?.first_name,
      );

    return json({
      ok: result.ok,
      action: "private_welcome_sent",
    });
  }

  console.log(
    `[IGNORED] chat=${chatId} ` +
    `type=${chatType} text="${rawText}"`,
  );

  return json({
    ok: true,
    ignored: true,
    reason: "unsupported_message",
    chat_type: chatType,
    text: rawText,
  });
}

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
      `${String(time.hour).padStart(2, "0")}:00`,
    );
  } catch (error) {
    console.error(
      "[CRON] D1 heartbeat error:",
      error,
    );
  }
}

function isChallengeHour(
  hour: number,
): boolean {
  return (
    hour >= DAILY_START_HOUR &&
    hour <= DAILY_END_HOUR
  );
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url =
      new URL(request.url);

    /*
     * Telegram webhook
     */
    if (
      url.pathname === WEBHOOK_PATH &&
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
            has_message:
              Boolean(update.message),
            chat_type:
              update.message?.chat?.type ??
              null,
            text:
              update.message?.text ??
              null,
          }),
        );

        /*
         * Muhim:
         * Telegramga darhol 200 qaytaramiz,
         * update processing esa waitUntil orqali davom etadi.
         */
        ctx.waitUntil(
          handleTelegramUpdate(
            env,
            update,
          ).catch((error) => {
            console.error(
              "[WEBHOOK PROCESSING ERROR]",
              error,
            );
          }),
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

    /*
     * Webhook GET diagnostikasi
     */
    if (
      url.pathname === WEBHOOK_PATH &&
      request.method === "GET"
    ) {
      const time =
        getTashkentTime();

      return json({
        ok: true,
        service: BOT_NAME,
        webhook: WEBHOOK_PATH,
        miniApp: MINI_APP_URL,
        tashkentTime: time,
      });
    }

    /*
     * Health
     */
    if (
      url.pathname === "/health"
    ) {
      const time =
        getTashkentTime();

      return json({
        ok: true,
        service:
          "menejerlik-worker",
        bot: BOT_NAME,
        miniApp:
          MINI_APP_URL,
        telegramConfigured:
          Boolean(
            env.TELEGRAM_BOT_TOKEN,
          ),
        databaseConfigured:
          Boolean(env.DB),
        tashkentTime: time,
      });
    }

    return nextWorker.fetch(
      request,
      env,
      ctx,
    );
  },

  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ) {
    const time =
      getTashkentTime();

    console.log(
      `[CRON] ${time.date} ` +
      `${String(time.hour).padStart(2, "0")}:` +
      `${String(time.minute).padStart(2, "0")}`,
    );

    ctx.waitUntil(
      saveCronHeartbeat(
        env,
        time,
      ),
    );

    if (
      isChallengeHour(time.hour)
    ) {
      console.log(
        `[CRON] Challenge oynasi faol: ` +
        `${time.date} ${time.hour}:00`,
      );

      console.log(
        `[CRON] Challenge config: ` +
        `${QUESTIONS_PER_CHALLENGE} savol, ` +
        `${POINTS_PER_CORRECT} ball/savol, ` +
        `maksimum ${MAX_CHALLENGE_SCORE} ball`,
      );
    }

    if (time.hour === 23) {
      console.log(
        "[CRON] 23:00 — kunlik natijalar oynasi",
      );
    }

    void controller;
  },
};
```
