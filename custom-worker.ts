import { default as handler } from "./.open-next/worker.js";

interface Env {
  DB: D1Database;
}

function getTashkentDate() {
  const now = new Date();

  const tashkent = new Date(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Tashkent",
    }),
  );

  return {
    date: `${tashkent.getFullYear()}-${String(
      tashkent.getMonth() + 1,
    ).padStart(2, "0")}-${String(tashkent.getDate()).padStart(2, "0")}`,

    hour: tashkent.getHours(),

    minute: tashkent.getMinutes(),

    iso: tashkent.toISOString(),
  };
}

export default {
  fetch: handler.fetch,

  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ) {
    const tashkent = getTashkentDate();

    console.log("=================================");
    console.log("DAILY CHALLENGE CRON IS WORKING");
    console.log("Toshkent sana:", tashkent.date);
    console.log("Toshkent soat:", tashkent.hour);
    console.log("Toshkent vaqt:", tashkent.iso);
    console.log("Cron:", controller.cron);
    console.log("=================================");

    /*
     * Hozircha faqat test qilamiz.
     * Haqiqiy challenge generator keyingi bosqichda qo'shiladi.
     */

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
        tashkent.date,
        tashkent.hour,
        Date.now(),
      )
      .run();

    console.log("Cron D1 ga muvaffaqiyatli yozildi.");
  },
};
