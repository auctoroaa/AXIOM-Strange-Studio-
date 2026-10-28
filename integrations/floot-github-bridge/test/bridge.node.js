import test from "node:test";
import assert from "node:assert/strict";
import worker from "../src/index.js";
import { expectedSignature } from "../src/index.js";

const secret = "test-secret-only";
const env = {
  FLOOT_WEBHOOK_SECRET: secret,
  GITHUB_TOKEN: "ghs_test_token",
  GITHUB_OWNER: "sample-owner",
  GITHUB_REPO: "sample-repo",
};
const now = Math.floor(Date.now() / 1000);
const payload = {
  schema_version: "1",
  event_type: "task.approved",
  event_id: "event-001",
  task_id: "task-001",
  human_approved: true,
  title: "Add a test endpoint",
  description: "Implement a small endpoint and tests.",
};

async function signedRequest(body = payload, options = {}) {
  const raw = typeof body === "string" ? body : JSON.stringify(body);
  const timestamp = String(options.timestamp ?? now);
  const signature = options.signature ?? await expectedSignature(secret, timestamp, raw);
  return new Request("https://bridge.test/webhooks/floot", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-floot-timestamp": timestamp,
      "x-floot-signature": signature,
    },
    body: raw,
  });
}

function jsonResponse(value, status = 200) {
  return new Response(JSON.stringify(value), { status, headers: { "content-type": "application/json" } });
}

const originalFetch = globalThis.fetch;
test.afterEach(() => { globalThis.fetch = originalFetch; });

test("health endpoint exposes status without secrets", async () => {
  const response = await worker.fetch(new Request("https://bridge.test/health"), {});
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    status: "ok",
    service: "floot-github-bridge",
    codex_execution: "not_configured_by_this_bridge",
  });
});

test("rejects missing bridge configuration", async () => {
  const response = await worker.fetch(await signedRequest(), {});
  assert.equal(response.status, 503);
});

test("rejects invalid signature before contacting GitHub", async () => {
  let calls = 0;
  globalThis.fetch = async () => { calls += 1; return jsonResponse({}); };
  const response = await worker.fetch(await signedRequest(payload, { signature: "sha256=bad" }), env);
  assert.equal(response.status, 401);
  assert.equal(calls, 0);
});

test("rejects stale signed requests", async () => {
  let calls = 0;
  globalThis.fetch = async () => { calls += 1; return jsonResponse({}); };
  const response = await worker.fetch(await signedRequest(payload, { timestamp: String(now - 600) }), env);
  assert.equal(response.status, 401);
  assert.equal(calls, 0);
});

test("requires explicit human approval", async () => {
  let calls = 0;
  globalThis.fetch = async () => { calls += 1; return jsonResponse({}); };
  const response = await worker.fetch(await signedRequest({ ...payload, human_approved: false }), env);
  assert.equal(response.status, 400);
  assert.equal((await response.json()).error, "invalid_payload");
  assert.equal(calls, 0);
});

test("creates a GitHub issue after a signed and approved event", async () => {
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url).includes("/search/issues?")) return jsonResponse({ items: [] });
    return jsonResponse({ number: 42, html_url: "https://github.com/sample-owner/sample-repo/issues/42" }, 201);
  };
  const response = await worker.fetch(await signedRequest(), env);
  assert.equal(response.status, 201);
  assert.deepEqual(await response.json(), {
    status: "accepted",
    task_id: "task-001",
    issue_number: 42,
    issue_url: "https://github.com/sample-owner/sample-repo/issues/42",
    codex_execution: "not_started",
  });
  assert.equal(calls.length, 2);
  const create = calls[1];
  assert.match(create.url, /\/repos\/sample-owner\/sample-repo\/issues$/);
  const body = JSON.parse(create.options.body);
  assert.match(body.title, /^\[Floot\]/);
  assert.match(body.body, /FLOOT_EVENT_ID:event-001/);
  assert.match(body.body, /Codex execution has \*\*not\*\* started/);
  assert.equal(create.options.method, "POST");
});

test("returns existing issue for a duplicate event without creating another", async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return jsonResponse({ items: [{ number: 42, html_url: "https://github.com/sample-owner/sample-repo/issues/42" }] });
  };
  const response = await worker.fetch(await signedRequest(), env);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).status, "duplicate");
  assert.equal(calls, 1);
});

test("does not leak GitHub error details to webhook caller", async () => {
  globalThis.fetch = async () => jsonResponse({ message: "private token rejected" }, 403);
  const response = await worker.fetch(await signedRequest(), env);
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), { error: "github_request_failed", upstream_status: 403 });
});
