import nextWorker from "./.open-next/worker.js";

interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  TELEGRAM_BOT_TOKEN: string;
}

interface TelegramUpdate {
  update_id: number;

  message?: {
    message_id: number;

    chat: {
      id: number;
      type: string;
      title?: string;
    };

    from?: {
      id: number;
      first_name?: string;
      last_name?: string;
      username?: string;
    };

    text?: string;
  };
}

interface TelegramResponse {
  ok: boolean;
  result?: unknown;
  description?: string;
}

const MINI_APP_URL = "https://menejerlik.vercel.app";

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
}

async function telegramRequest(
  env: Env,
  method: string,
  body: Record<string, unknown>,
): Promise<TelegramResponse> {
  const url =
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/${method}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response.json();
}

async function sendTestMessage(
  env: Env,
  chatId: number,
  firstName?: string,
) {
  const name = firstName || "do‘st";

  return telegramRequest(env, "sendMessage", {
    chat_id: chatId,

    text:
      `👋 Assalomu alaykum, ${name}!\n\n` +
      `🎓 *Menejerlik by Nurmuhammad*\n\n` +
      `Rahbarlik va menejerlik bo‘yicha bilimlaringizni sinab ko‘ring.\n\n` +
      `📚 Modul va mavzular\n` +
      `📝 Testlar\n` +
      `🏆 Reyting\n` +
      `⚡ Natijalar\n\n` +
      `Testni boshlash uchun quyidagi tugmani bosing:`,
      
    parse_mode: "Markdown",

    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 TESTNI BOSHLASH",
            web_app: {
              url: MINI_APP_URL,
            },
          },
        ],
      ],
    },
  });
}

async function sendHelpMessage(
  env: Env,
  chatId: number,
) {
  return telegramRequest(env, "sendMessage", {
    chat_id: chatId,

    text:
      `📚 *Menejerlik by Nurmuhammad*\n\n` +
      `Botdan foydalanish:\n\n` +
      `🚀 /test — testni boshlash\n` +
      `ℹ️ /help — yordam\n\n` +
      `Testlar Mini App orqali ishlaydi.`,

    parse_mode: "Markdown",

    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "🚀 TESTNI OCHISH",
            web_app: {
              url: MINI_APP_URL,
            },
          },
        ],
      ],
    },
  });
}

async function handleTelegramUpdate(
  env: Env,
  update: TelegramUpdate,
): Promise<Response> {
  const message = update.message;

  if (!message) {
    return json({
      ok: true,
      ignored: true,
      reason: "message_not_found",
    });
  }

  const chatId = message.chat.id;
  const text = (message.text || "").trim().toLowerCase();

  /*
   * /test
   * /test@topmenejerbot
   */
  if (
    text === "/test" ||
    text.startsWith("/test@")
  ) {
    await sendTestMessage(
      env,
      chatId,
      message.from?.first_name,
    );

    return json({
      ok: true,
      action: "test_button_sent",
    });
  }

  /*
   * /start
   */
  if (
    text === "/start" ||
    text.startsWith("/start ")
  ) {
    await sendTestMessage(
      env,
      chatId,
      message.from?.first_name,
    );

    return json({
      ok: true,
      action: "start_button_sent",
    });
  }

  /*
   * /help
   */
  if (
    text === "/help" ||
    text.startsWith("/help@")
  ) {
    await sendHelpMessage(env, chatId);

    return json({
      ok: true,
      action: "help_sent",
    });
  }

  /*
   * Boshqa xabarlar uchun hech narsa qilmaymiz.
   */
  return json({
    ok: true,
    ignored: true,
  });
}

async function isTelegramUpdate(
  request: Request,
): Promise<boolean> {
  const contentType =
    request.headers.get("content-type") || "";

  return (
    request.method === "POST" &&
    contentType.includes("application/json")
  );
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url);

    /*
     * Telegram webhook endpoint
     *
     * Telegram:
     * POST /telegram/webhook
     */
    if (
      url.pathname === "/telegram/webhook" &&
      request.method === "POST"
    ) {
      try {
        const update =
          (await request.json()) as TelegramUpdate;

        ctx.waitUntil(
          handleTelegramUpdate(env, update).catch(
            (error) => {
              console.error(
                "Telegram update error:",
                error,
              );
            },
          ),
        );

        return json({
          ok: true,
        });
      } catch (error) {
        console.error(
          "Telegram webhook parse error:",
          error,
        );

        return json(
          {
            ok: false,
            error: "Invalid Telegram update",
          },
          400,
        );
      }
    }

    /*
     * Telegram webhook tekshirish
     */
    if (
      url.pathname === "/telegram/webhook" &&
      request.method === "GET"
    ) {
      return json({
        ok: true,
        service: "Menejerlik Telegram Bot",
        miniApp: MINI_APP_URL,
      });
    }

    /*
     * Oddiy health check
     */
    if (url.pathname === "/health") {
      return json({
        ok: true,
        service: "menejerlik",
        miniApp: MINI_APP_URL,
        time: new Date().toISOString(),
      });
    }

    /*
     * Next.js / OpenNext
     */
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
    ctx.waitUntil(
      (async () => {
        const now = new Date();

        /*
         * Tashkent vaqti
         */
        const tashkent = new Date(
          now.toLocaleString("en-US", {
            timeZone: "Asia/Tashkent",
          }),
        );

        const date =
          tashkent.toISOString().slice(0, 10);

        const hour =
          tashkent.getHours();

        console.log(
          `[CRON] Tashkent: ${date} ${hour}:00`,
        );

        /*
         * Hozircha cron test yozuvi.
         *
         * Keyingi bosqichda shu joyga:
         * - Daily Challenge yaratish
         * - 25 ta savol tanlash
         * - guruhga yuborish
         * - leaderboard
         * - 23:00 kunlik natija
         * qo‘shamiz.
         */

        try {
          await env.DB.prepare(
            `
            CREATE TABLE IF NOT EXISTS cron_test (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              tashkent_date TEXT NOT NULL,
              tashkent_hour INTEGER NOT NULL,
              created_at INTEGER NOT NULL
            )
            `,
          ).run();

          await env.DB.prepare(
            `
            INSERT INTO cron_test (
              tashkent_date,
              tashkent_hour,
              created_at
            )
            VALUES (?, ?, ?)
            `,
          )
            .bind(
              date,
              hour,
              Date.now(),
            )
            .run();

          console.log(
            `[CRON] Saved ${date} ${hour}:00`,
          );
        } catch (error) {
          console.error(
            "[CRON] Database error:",
            error,
          );
        }
      })(),
    );
  },
};
