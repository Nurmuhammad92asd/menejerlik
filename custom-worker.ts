// @ts-ignore
import { default as handler } from "./.open-next/worker.js";

export default {
  fetch: handler.fetch,

  async scheduled(controller, env, ctx) {
    console.log("Daily Challenge Cron:", {
      cron: controller.cron,
      scheduledTime: new Date(controller.scheduledTime).toISOString(),
    });
  },
};
