import { Bot, webhookCallback } from "grammy";
import express from "express";

const required = ["TELEGRAM_BOT_TOKEN", "TELEGRAM_WEBHOOK_SECRET", "TELEGRAM_WEBHOOK_URL"];
for (const name of required) {
  if (!process.env[name]) throw new Error(`Missing required environment variable: ${name}`);
}

const token = process.env.TELEGRAM_BOT_TOKEN;
const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
const webhookUrl = new URL(process.env.TELEGRAM_WEBHOOK_URL);
if (webhookUrl.protocol !== "https:") throw new Error("TELEGRAM_WEBHOOK_URL must use HTTPS");
const publicUrl = webhookUrl.toString().replace(/\/$/, "");
const port = Number(process.env.PORT ?? 8080);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("PORT must be a valid TCP port");
if (!/^[A-Za-z0-9_-]{1,256}$/.test(secret)) throw new Error("TELEGRAM_WEBHOOK_SECRET must be 1-256 characters using A-Z, a-z, 0-9, _ or -");

const bot = new Bot(token);
bot.command("start", async (ctx) => {
  await ctx.reply("AXIOM Telegram service is online. Use /help to see available commands.");
});
bot.command("help", async (ctx) => {
  await ctx.reply("Available commands:\n/start — initialize the bot\n/help — show this help\n/status — check service status");
});
bot.command("status", async (ctx) => {
  await ctx.reply("Bot runtime: operational");
});
bot.catch((error) => {
  console.error("Telegram update processing failed:", error.name);
});

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));
app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));
let ready = false;
app.get("/readyz", (_req, res) => res.status(ready ? 200 : 503).json({ status: ready ? "ready" : "starting" }));
app.post("/telegram/webhook", webhookCallback(bot, "express", { secretToken: secret }));

const server = app.listen(port, "0.0.0.0", async () => {
  try {
    await bot.api.getMe();
    await bot.api.setWebhook(`${publicUrl}/telegram/webhook`, {
      secret_token: secret,
      allowed_updates: ["message", "callback_query"],
    });
    ready = true;
    console.info("Telegram webhook service ready");
  } catch (error) {
    console.error("Telegram startup failed:", error.name);
    server.close(() => process.exit(1));
  }
});

async function shutdown(signal) {
  ready = false;
  console.info(`Received ${signal}; shutting down`);
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10_000).unref();
}
process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));
