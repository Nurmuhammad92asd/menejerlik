import nextWorker from "./.open-next/worker.js";
import {
  getTopicQuestions,
  getModuleById,
} from "./lib/quiz-data";

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

const GROUP_CHAT_ID =
  -1003642158156;

const DAILY_START_HOUR = 5;
const DAILY_END_HOUR = 22;

const DAILY_RESULTS_HOUR = 23;

const QUESTIONS_PER_CHALLENGE = 25;

const POINTS_PER_CORRECT = 2;

const MAX_CHALLENGE_SCORE =
  QUESTIONS_PER_CHALLENGE *
  POINTS_PER_CORRECT;

const CHALLENGE_DURATION_SEC =
  50 * 60;

/*
 * 1-kun = 2026-10-01.
 *
 * Keyinchalik kerak bo‘lsa shu sanani
 * bitta joydan o‘zgartirish mumkin.
 */
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
      (p) => p.type === type,
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

async function telegramRequest<T = unknown>(
  env: Env,
  method: string,
  body: Record<string, unknown>,
): Promise<TelegramApiResponse<T>> {
  if (!env.TELEGRAM_BOT_TOKEN) {
    console.error(
      "[TELEGRAM] Secret mavjud emas",
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
      await fetch(url, {
        method: "POST",
        headers: {
          "content-type":
            "application/json",
        },
        body:
          JSON.stringify(body),
      });

    const data =
      (await response.json()) as
        TelegramApiResponse<T>;

    if (!response.ok || !data.ok) {
      console.error(
        `[TELEGRAM ERROR] ${method}`,
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
   MINI APP
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
        current - start
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
    return [`m${day}`];
  }

  if (day === 11) {
    return [
      "m1",
      "m2",
      "m3",
    ];
  }

  if (day === 12) {
    return [
      "m4",
      "m5",
      "m6",
    ];
  }

  if (day === 13) {
    return [
      "m7",
      "m8",
      "m9",
      "m10",
    ];
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
  categoryId: string | null;
  level: QuizLevel;
}

function collectModuleQuestions(
  moduleIds: string[],
): SelectedQuestion[] {
  const result:
    SelectedQuestion[] = [];

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
          q.level === level,
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

  /*
   * Hozircha ayrim modullarda savollar
   * hali yo‘q. Shuning uchun tizimni
   * sindirmaslik uchun mavjud savollar
   * bilan to‘ldiramiz.
   */
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
    `daily-${date}-${String(hour).padStart(2, "0")}`
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

  /*
   * Bir xil soatda ikkinchi challenge
   * yaratilishiga yo‘l qo‘ymaymiz.
   */
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
    questions.length === 0
  ) {
    console.error(
      "[CHALLENGE] Savollar topilmadi",
      {
        dayNumber,
        moduleIds,
      },
    );

    return {
      created: false,
      reason:
        "no_questions",
    };
  }

  /*
   * Challenge boshlanishi — shu soat.
   * Tugashi — 50 daqiqadan keyin.
   */
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

  /*
   * Savollarni tartib bilan saqlaymiz.
   */
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
  /*
   * Shu kunning barcha tugallangan
   * challenge'larini umumlashtiramiz.
   */

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
    of rows.results as Array<Record<string, unknown>>
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
          row.challenges_count ?? 0,
        ),
        Number(
          row.total_correct ?? 0,
        ),
        Number(
          row.total_questions ?? 0,
        ),
        Number(
          row.total_score ?? 0,
        ),
        Number(
          row.total_duration_sec ?? 0,
        ),
        Number(
          row.best_score ?? 0,
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

  if (!rows.length) {
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
          row: Record<string, unknown>,
          index,
        ) => {
          const score =
            Number(
              row.total_score ?? 0,
            );

          const correct =
            Number(
              row.total_correct ?? 0,
            );

          const total =
            Number(
              row.total_questions ?? 0,
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
   WEBHOOK COMMANDS
========================================================= */

function normalizeCommand(
  text: string,
): string {
  const first =
    text
      .trim()
      .split(/\s+/)[0]
      ?.toLowerCase() ?? "";

  const at =
    first.indexOf("@");

  return at > 0
    ? first.slice(
        0,
        at,
      )
    : first;
}

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

function getUpdateType(
  update: TelegramUpdate,
) {
  if (update.message)
    return "message";

  if (update.edited_message)
    return "edited_message";

  if (update.channel_post)
    return "channel_post";

  if (update.edited_channel_post)
    return "edited_channel_post";

  if (update.callback_query)
    return "callback_query";

  return "unknown";
}

/* =========================================================
   WEBHOOK
========================================================= */

async function handleTelegramUpdate(
  env: Env,
  update: TelegramUpdate,
) {
  const message =
    extractMessage(update);

  if (!message) {
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

  const chatId =
    message.chat.id;

  if (
    command === "/test"
  ) {
    await telegramRequest(
      env,
      "sendMessage",
      {
        chat_id:
          chatId,

        text:
          `🚀 *Test tizimi*\n\n` +
          `Avtomatik challenge tizimi ishlamoqda.\n\n` +
          `Keyingi challenge bot tomonidan avtomatik yuboriladi.`,

        parse_mode:
          "Markdown",
      },
    );

    return;
  }

  if (
    command === "/start" ||
    command === "/help"
  ) {
    await telegramRequest(
      env,
      "sendMessage",
      {
        chat_id:
          chatId,

        text:
          `🎓 *${BOT_NAME}*\n\n` +
          `Soatlik challenge'lar avtomatik ravishda guruhga yuboriladi.\n\n` +
          `🚀 Test tugmasini bosib Mini App orqali ishlang.`,

        parse_mode:
          "Markdown",
      },
    );
  }
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

  /*
   * Javoblarni browserga yubormaymiz.
   * Mini App faqat savol matni va variantlarni
   * oladi.
   *
   * Buning uchun keyingi Mini App API
   * integratsiyasida questionId bo‘yicha
   * quiz-data'dan savol olinadi.
   */

  const result =
    questions.results.map(
      (
        item: Record<string, unknown>,
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
    ).filter(Boolean);

  return json({
    ok: true,
    challenge,
    questions:
      result,
  });
}

function findQuestionById(
  questionId: string,
) {
  /*
   * quiz-data'dagi barcha mavzular
   * bo‘yicha qidiramiz.
   *
   * Bu fallback sifatida ishlaydi.
   */
  for (
    let moduleNumber = 1;
    moduleNumber <= 10;
    moduleNumber++
  ) {
    const module =
      getModuleById(
        `m${moduleNumber}`,
      );

    if (!module)
      continue;

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

    /* -----------------------------------------------
       TELEGRAM WEBHOOK
    ------------------------------------------------ */

    if (
      url.pathname ===
        WEBHOOK_PATH &&
      request.method === "POST"
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
      } catch {
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

    /* -----------------------------------------------
       CURRENT CHALLENGE API
    ------------------------------------------------ */

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

    /* -----------------------------------------------
       HEALTH
    ------------------------------------------------ */

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

        telegramConfigured:
          Boolean(
            env.TELEGRAM_BOT_TOKEN,
          ),

        databaseConfigured:
          Boolean(env.DB),

        groupChatId:
          GROUP_CHAT_ID,

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

    /*
     * 05:00–22:00
     */
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

    /*
     * 23:00
     */
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
