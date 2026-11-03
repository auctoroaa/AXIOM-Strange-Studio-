# AXIOM Telegram Bot

A standalone grammY webhook service. It is isolated from the web dashboard and OIOS core.

## Requirements

- Node.js 22+
- A Telegram bot token from [@BotFather](https://t.me/BotFather)
- A public HTTPS hostname routed to this service
- A randomly generated webhook secret (1-256 characters; letters, digits, underscore, hyphen)

## Local execution

```sh
cp apps/telegram-bot/.env.example apps/telegram-bot/.env
# Set TELEGRAM_BOT_TOKEN, TELEGRAM_WEBHOOK_SECRET and TELEGRAM_WEBHOOK_URL.
npm install
npm run bot:dev
```

The webhook endpoint is `POST /telegram/webhook`. The service exposes `GET /healthz` and `GET /readyz`. Readiness becomes healthy only after Telegram authentication and webhook registration succeed.

## Container deployment

Build from the repository root:

```sh
docker build -f apps/telegram-bot/Dockerfile -t axiom-telegram-bot:local .
```

On the host, create `apps/telegram-bot/.env` from `.env.example`, set the three required secrets/URL values, then run:

```sh
docker compose -f apps/telegram-bot/compose.yaml up -d
docker compose -f apps/telegram-bot/compose.yaml logs -f
```

Route the public HTTPS hostname to the host's loopback port (default 8080) through a TLS reverse proxy. Do not expose the container port directly to the public internet. Keep `.env` out of source control.

## Operational constraints

- Webhook mode only; no polling process competes for updates.
- Telegram validates the webhook using the configured secret header.
- The service runs as an unprivileged container user.
- The bot currently implements `/start`, `/help`, and `/status`.
- No persistent storage is used. Add durable state only with an explicit storage design.
- Configure token rotation through BotFather and redeploy; never log tokens or update payloads.
