# Evidence Ledger

Snapshot date: 2026-10-28 UTC. Refresh current states before final conclusions.

| ID | Claim | Basis | Status | Next step |
|---|---|---|---|---|
| SS-001 | Target repository is `auctoroaa/AXIOM-Strange-Studio-` | GitHub response and tree | Identity confirmed | Refresh HEAD SHA |
| SS-002 | `apps/web/` is the active dashboard | README | Source-defined | Verify entry points |
| SS-003 | `packages/oios-core/` is the core | README | Source-defined | Inspect code and tests |
| SS-004 | Dashboard truth/event panels use fixtures | README | Source-defined, runtime not rechecked | Trace actual data sources |
| SS-005 | API state is process-memory-only | README | Source-defined, runtime not rechecked | Inspect persistence behavior |
| SS-006 | CI run 40630529242 failed on a duplicate text query | Retrieved CI logs | Confirmed for that revision | Keep as historical result |
| SS-007 | Commit `2ca844d9a1adb898b8abb5bb2af8a6414faed55b` contains the second test correction | GitHub contents response | Commit confirmed | Linked to passing run below |
| SS-008 | CI run 40630750901 on commit `2ca844d9a1adb898b8abb5bb2af8a6414faed55b` | GitHub Actions run and job-step results | **Passed:** install, type-check, tests and production build | Retain as verified CI evidence for this SHA |
| SS-009 | CI run 40631190588 for audit documentation branch | GitHub Actions run list | In progress at last check | Refresh final result |
| FL-001 | Floot project ID a427130a-6acc-423d-85e6-501f1fd7b827 | Prior context | Current source not inspected | Inspect project/version/tree |
| FL-002 | Floot uses PostgreSQL and four sequential bots | Prior context | Unverified against current source | Inspect bot and DB code |
| FL-003 | Bot 1 rejection loop, Bot 2 approval, human gate before Bot 3 | Prior context | Unverified against current source | Reproduce each transition |
| CD-001 | Prior Codex check returned zero environments and tasks | Prior tool result | Historical only | Recheck current availability |
| INT-001 | Floot and Codex are integrated end-to-end | No current evidence | Unverified | Locate bridge and run test |
| DEP-001 | End-to-end product is deployed | No deployment evidence | Unverified | Confirm target, revision and smoke test |

## Evidence links

- Passing dashboard repair CI: https://github.com/auctoroaa/AXIOM-Strange-Studio-/actions/runs/40630750901
- Audit handoff CI: https://github.com/auctoroaa/AXIOM-Strange-Studio-/actions/runs/40631190588
- Dashboard test-repair PR: https://github.com/auctoroaa/AXIOM-Strange-Studio-/pull/1

## Evidence rules

Record date/time, source path or URI, revision, command or test, output, status, agent, and limitations. Keep specified, source-present, executed, verified and deployed as separate statuses.
