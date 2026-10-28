# Floot → GitHub intake bridge

A small Cloudflare Worker that accepts a signed, explicitly human-approved Floot task event and creates a GitHub issue in a fixed repository. It is intentionally separate from the Strange Studio application runtime.

## Implemented boundary

- Verifies an HMAC-SHA256 signature and a five-minute timestamp window.
- Accepts only `schema_version: "1"`, `event_type: "task.approved"`, stable event/task IDs, and `human_approved: true`.
- Uses environment-configured repository coordinates; the payload cannot select a different repository.
- Searches for the event marker before creating an issue to reduce duplicate deliveries. GitHub search is eventually consistent, so this is not a strict concurrency lock.
- Does not expose upstream error details or credentials.
- Does **not** invoke Codex, execute repository code, merge, or deploy. The issue is an intake/handoff record. Codex execution remains a separate human-initiated step until a supported, authenticated executor is configured and tested.

## Endpoints

- `GET /health`: non-secret health response.
- `POST /webhooks/floot`: signed event intake.

## Required Worker secrets and variables

- `FLOOT_WEBHOOK_SECRET`: shared secret used to sign the exact raw request body.
- `GITHUB_TOKEN`: fine-grained GitHub token with **Issues: Read and write** access to the target repository.
- `GITHUB_OWNER`: repository owner.
- `GITHUB_REPO`: repository name.

The supplied `wrangler.toml` sets the repository variables to `auctoroaa/AXIOM-Strange-Studio-`. Confirm that this is the intended destination before deployment. Keep the signing secret on the Floot server side. Never embed it in browser/client code or send it to the user interface.

## Floot request contract

Headers:

- `x-floot-timestamp`: Unix timestamp in seconds, exactly 10 digits.
- `x-floot-signature`: `sha256=` followed by lowercase hex HMAC-SHA256 of `${timestamp}.${rawBody}` using `FLOOT_WEBHOOK_SECRET`.
- `content-type: application/json`

Body:

```json
{
  "schema_version": "1",
  "event_type": "task.approved",
  "event_id": "stable-event-id",
  "task_id": "stable-floot-task-id",
  "human_approved": true,
  "title": "Short task title",
  "description": "Task context and acceptance criteria"
}
```

Keep `event_id` stable across retries. Do not include credentials or private keys in task text. The bridge rejects missing approval and does not accept arbitrary repository, branch, shell command, or deployment parameters. The Floot sender must create this signature server-side, after enforcing its approval gate; client-side approval alone is insufficient.

## Install and deploy

Requires Node.js 20+ and Wrangler.

```bash
npm test
npm run check
npx wrangler secret put FLOOT_WEBHOOK_SECRET
npx wrangler secret put GITHUB_TOKEN
npx wrangler deploy
```

Set secrets when prompted. Do not put secret values in `wrangler.toml` or commit them. Configure Floot to sign requests using the contract above only after its actual endpoint implementation has been inspected and tested.

## Verification

```bash
npm test
npm run check
```

Tests mock GitHub HTTP responses. They verify signature rejection, timestamp replay rejection, explicit approval enforcement, issue creation, duplicate-event handling, and upstream failure handling. They do not prove live GitHub permissions, live Floot signing, Worker deployment, or Codex execution.
