# Floot and Codex Workflow Boundary

## Objective
Audit the relationship between the Floot-based UPOE Construction Desk and repository-based work without assuming these systems are already connected.

## Known systems and evidence status

| System | Known identity | Status |
|---|---|---|
| Strange Studio repository | `auctoroaa/AXIOM-Strange-Studio-` | GitHub repository and structure inspected |
| Floot UPOE Construction Desk | `a427130a-6acc-423d-85e6-501f1fd7b827` | Project identity previously recorded; current files not inspected in this preparation |
| Codex tasks | Prior check returned zero environments and zero tasks | Historical snapshot; recheck current availability |
| Floot-to-GitHub transfer | Prior context says not transferred | Reconfirm before acting |
| Codex connection to Floot | Prior context says not connected | Reconfirm; no end-to-end integration verified |

## Prior workflow description, not freshly verified
Prior context described a Floot workflow using PostgreSQL persistence and four sequential bots: Bot 1 has a rejection loop, Bot 2 requires approval, and a human gate exists before Bot 3. The prior description said AI plans were present but real builds/deployments were not implemented, and live AI execution plus final guard-helper tests were unverified. Treat all of this as a lead for inspection, not current source proof. Bot 4's role and all bot contracts remain unresolved until inspected.

## Workflow hypothesis to validate

```text
Task intake and persistence
  -> Bot 1 review / rejection loop
  -> Bot 2 approval gate
  -> human approval boundary
  -> Bot 3 processing
  -> Bot 4 (role to be discovered)
  -> Codex task or repository operation (connection unverified)
  -> commit / PR / CI evidence
  -> human acceptance and delivery record
```

This diagram is a hypothesis based on prior context. It does not prove that each transition or integration exists.

## Floot audit
- Inspect current project metadata, version, file tree and entry points.
- Locate bot definitions, server endpoints, schemas and guard helpers.
- Trace each bot's inputs, outputs, state transitions, rejection rules and retry policy.
- Inspect PostgreSQL schema, constraints and persistence paths.
- Verify approval gates are enforced server-side, not only in the UI.
- Test reload/restart persistence, duplicate requests, concurrency and failure recovery.
- Establish whether AI behavior is live, mocked or plan-only.
- Record exact test commands and results; do not expose secrets.

## Codex and bridge audit
- Query current Codex environments and tasks.
- Test repository read, branch write, PR write and CI read as separate capabilities.
- Find the actual connector or bridge; if absent, mark the boundary missing or unverified.
- Record request/response contracts, authentication method, timeouts, retries and idempotency.
- Link Floot task ID, Codex run/task ID, commit SHA, PR number and CI run ID with stable correlation identifiers.
- Require explicit approval before merge, release or deployment.
- Define safe behavior when Codex is unavailable, a task is rejected, CI fails or approval is missing.

## Minimum end-to-end acceptance test
1. Create a non-production task in Floot and record its stable task ID.
2. Reload the app or start a new session and confirm the task persists.
3. Exercise Bot 1 rejection and verify reason and loop behavior.
4. Exercise Bot 2 approval and prove server-side enforcement.
5. Attempt to bypass the human gate through a direct request and confirm rejection.
6. Identify and test Bot 3 and Bot 4 behavior from source.
7. If a bridge exists, trace the task to a Codex run and repository branch.
8. Inspect the exact diff before merge.
9. Retrieve CI final conclusion and relevant job steps.
10. Verify merge/deploy cannot occur without required approval.
11. Link final persisted Floot state to commit, PR, CI run and human acceptance.

If an integration is absent, stop at that boundary and mark it BLOCKED. A generated plan is not execution evidence.

## Current limitation
The Floot tool returned a daily build-action limit response during preparation, so current Floot source files could not be inspected. This is a tool-access limitation, not evidence that the Floot app is broken. No end-to-end test result is included here.
