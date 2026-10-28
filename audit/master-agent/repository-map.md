# Repository Structure Map

Source basis: repository tree and README inspected on 2026-10-28. This is a navigation map, not a complete file-by-file implementation audit.

```text
/
├── apps/web/                 # Active React/Vite dashboard
│   └── src/                  # app, api, domain, features, components, styles, tests
├── packages/oios-core/       # Canonical OIOS core per README; inspect implementation
├── packages/shared/          # Shared code area
├── packages/*-engine/        # Engine areas; verify each package individually
├── contracts/                # Engine contracts
├── schemas/                  # Schema definitions
├── architectures/            # Architecture packs/definitions
├── design-system/            # Tokens, components, patterns
├── docs/                     # Product and subsystem specifications
├── bible/                    # Vision and architecture corpus
├── app/                      # Concept/legacy area; inspect before relying on it
├── .github/workflows/ci.yml  # CI workflow definition
├── ARCHITECTURE.md
├── ROADMAP.md
└── README.md
```

## README-defined limitations
The README states that the dashboard event stream and truth panel still use local fixture data; the API stores workflow state in process memory and is not production-hardened; placeholder or documentation-only engine directories must not be described as implemented functionality; and this prototype is not yet a production agent runtime, persistent knowledge graph, model router, authentication system, or deployment service. These are documentation statements and should be checked against current source and runtime.

## Audit order
1. Record repository, branch, HEAD SHA, timestamp, open PRs and exact target commit.
2. Compare `ARCHITECTURE.md`, `ROADMAP.md`, README and package manifests against the tree.
3. Trace schemas, validators, domain models, state machines, services, persistence and API routes in `packages/oios-core/`.
4. Trace dashboard data sources through `apps/web/src/api/`, `apps/web/src/domain/` and `apps/web/src/features/`; label fixture versus live data.
5. Retrieve actual CI run and job results for the exact commit.
6. Audit Floot and Codex separately using `floot-codex-workflow.md`.

## Evidence labels
- **SPECIFIED:** documented as intended.
- **SOURCE-PRESENT:** implementation code exists at a cited path.
- **EXECUTED:** a named command or workflow ran against a specific revision.
- **VERIFIED:** an acceptance assertion passed and its output is recorded.
- **DEPLOYED:** deployment target and deployed revision are known and confirmed.
- **UNVERIFIED / BLOCKED / FAILED:** evidence does not support a stronger claim.

Do not combine these labels into a single progress percentage.
