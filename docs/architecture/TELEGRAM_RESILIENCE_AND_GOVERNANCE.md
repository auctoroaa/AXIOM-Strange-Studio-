# Telegram Resilience and Execution Governance

**Status:** Proposed architecture; not an authorization to activate an alternate backend.  
**Scope:** Telegram-facing services deployed from this repository.  
**Decision authority:** The designated Principal, supported by explicitly appointed advisors.  
**Implementation baseline:** grammY webhook service in `apps/telegram-bot/`. TDLib is an evaluation candidate, not an approved replacement.

## 1. Objective

Provide multiple viable capabilities and recovery paths so that a failure in one implementation, process, host, network path, or dependency does not unnecessarily terminate Telegram-facing operations.

Availability of an implementation does not grant it permission to execute. Backend selection, activation, failover policy, and operational scope remain governed decisions.

## 2. Current verified baseline

- The repository contains a Node.js service using grammY and the Telegram Bot API.
- The service uses webhook delivery, validates Telegram's webhook secret header, and exposes liveness/readiness endpoints.
- The current command surface is limited to `/start`, `/help`, and `/status`.
- The service has no durable application state, update journal, distributed lock, or multi-instance coordination.
- The image workflow is configured to publish on pushes to `main`; a workflow definition alone does not prove that an image has been built or published.
- The service is not deployed or verified as a live production bot.

## 3. Candidate execution backends

### 3.1 grammY / Bot API

Current implementation. Retain as the initial integration candidate because it is already implemented in this repository and uses the Bot API directly.

### 3.2 TDLib

TDLib is an official cross-platform C++ library for building Telegram clients. It exposes asynchronous interfaces, including a JSON interface usable from languages that can call C functions. Its upstream project documents C++17, CMake, OpenSSL, and zlib build dependencies; its JSON interface and version compatibility need to be pinned and tested.

TDLib is a distinct integration technology, not a drop-in grammY package. Evaluate it as an independently deployable adapter only after validating bot-account authentication, update delivery semantics, supported operations, persistence/encryption requirements, operational costs, and recovery behavior for the exact target use cases.

Reference: https://github.com/tdlib/td

### 3.3 Future adapters

Additional implementations may be registered only through the same capability and governance contract. No provider is assumed to exist merely because the architecture permits one.

## 4. Required logical architecture

Separate Telegram transport from application behavior:

1. **Ingress ownership:** one explicitly authorized active update-ingress owner per bot identity and update stream.
2. **Transport adapters:** grammY, TDLib, or future implementations translate transport-specific updates into a normalized internal envelope.
3. **Capability contract:** adapters declare supported operations and limitations; callers must not assume feature parity.
4. **Policy/router:** selects an authorized adapter using a versioned policy. It must not silently change the Principal's selection.
5. **Application handlers:** transport-independent command and workflow behavior.
6. **Durable update journal:** records update identity, receipt, processing state, result, and retry metadata.
7. **State and idempotency:** deduplicates update processing and protects side effects from retries.
8. **Control plane:** reports health, active backend, readiness, policy version, and transitions; exposes authenticated activation controls.
9. **Audit stream:** records who or what requested a transition, authority basis, approvals, reason, timestamps, previous/next state, and outcome.

The current in-memory service does not yet implement items 2–9 as a complete production system.

## 5. Ingress and failover safety

- Never run two independent consumers against the same bot update stream unless an explicit, tested coordination design guarantees single ownership.
- Webhook and polling/TDLib update consumption must not compete for the same bot identity.
- A standby backend may be built, deployed, health-checked, and tested in isolation without being authorized to consume production updates.
- A backend transition requires an ownership handoff: stop or fence the old consumer, verify the ingress lease is released, activate the new consumer, and reconcile pending updates.
- Use Telegram update identifiers and a durable idempotency key to prevent duplicate business effects. Acknowledge only according to a documented retry and persistence policy.
- Health failure alone is evidence for an incident, not permission to change the selected backend.
- Automatic failover may occur only if an explicitly approved policy grants that exact scope, trigger, target backend, and rollback behavior. Otherwise, fail closed and request an authorized decision.
- Failback is a separate transition; do not automatically revert merely because the former backend becomes healthy.

## 6. Decision and advisor governance

### Roles

- **Principal:** retains final decision rights unless a documented delegation states otherwise.
- **Advisors:** provide independent technical, security, operational, legal, and product assessments within their assigned remit. Advisors may disagree and record dissent.
- **Operator:** performs only actions covered by an active authorization.
- **System:** enforces the recorded policy and produces evidence; it does not invent authority.

### Required decision record

Every production backend activation, failover policy change, or change to ingress ownership must record:

- decision identifier and policy version;
- decision owner and advisor participants;
- scope, bot identity, environment, and affected capabilities;
- options considered and evidence reviewed;
- recommendation, decision, rationale, and dissent;
- activation conditions, expiry/review date, rollback and recovery plan;
- implementation actor and verification evidence.

An advisor recommendation is not approval unless the Principal has explicitly delegated approval authority for that decision class.

## 7. Security requirements

- Store bot tokens, TDLib credentials, encryption keys, webhook secrets, and deployment credentials in a secret manager or protected host environment; never commit them.
- Use separate credentials and data directories for isolated environments where Telegram permits it.
- Restrict control-plane activation to authenticated, authorized operators; require auditable approvals for production transitions.
- Encrypt sensitive TDLib local state at rest and restrict filesystem access.
- Do not log tokens, authentication material, message contents, or personal data by default.
- Apply least-privilege container users, pinned dependency versions, image provenance, vulnerability scanning, and controlled secret rotation.
- Define retention and deletion behavior for update journals and audit events before enabling durable storage.

## 8. Required implementation sequence

| Gate | Deliverable | Acceptance condition |
|---|---|---|
| G0 | Capability and failure-mode inventory | Each required bot capability has an owner, backend support status, and failure behavior |
| G1 | Transport-neutral envelope and adapter contract | Contract tests pass without requiring a live Telegram account |
| G2 | Durable journal and idempotency | Duplicate/retried updates cannot repeat protected side effects |
| G3 | Control plane and authority policy | Unauthorized activation is rejected and every transition is auditable |
| G4 | TDLib feasibility adapter | Bot authentication, update semantics, supported operations, and operational constraints are demonstrated in an isolated environment |
| G5 | Controlled handoff and recovery | Fault-injection tests prove fencing, replay, no double ownership, and rollback |
| G6 | Production readiness | Security, load, backup/restore, observability, deployment, and incident runbooks pass review |

No gate is considered passed by documentation or code presence alone. Attach test output, CI run identifiers, and deployment evidence.

## 9. Initial non-goals

- No silent provider switching.
- No dual-active processing of one bot update stream.
- No assumption that TDLib and grammY have identical capabilities.
- No production persistence choice until data classification, retention, encryption, and recovery requirements are approved.
- No claim of high availability until host-level redundancy and recovery objectives are tested.

## 10. Open engineering questions

1. Which bot capabilities are required beyond the current three commands?
2. Which failures require continuity: process, host, region, provider, credentials, or Telegram-side outage?
3. What recovery-time and recovery-point objectives are acceptable?
4. Which decisions are reserved to the Principal, and which may be delegated to advisors or operators?
5. Is TDLib intended as an alternate bot execution backend, a client/session integration, or both?

These questions are design inputs. They do not block the current grammY service from being built and tested in isolation.
