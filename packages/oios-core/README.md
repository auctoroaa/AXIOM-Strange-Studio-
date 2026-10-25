# OIOS Core

Executable core for Strange Studio's Observable Intelligence Operating System. Canonical primitives: Agent, Workflow, Knowledge, Event, Tool, Context, Verification, Delivery, Unknown. Metaphors are permitted only in Architecture Packs and must map reversibly to canonical primitives.

## Commands

- `npm install` installs repository dependencies.
- `npm run typecheck` checks frontend and OIOS core TypeScript.
- `npm run test:oios` runs OIOS core tests.
- `npm test` runs the repository test suite.
- `npm run build` runs type checking and builds the frontend.

## Layers present

JSON Schema contracts, schema/cross-field/projection/observability validators, typed domain models, workflow/quest/verification state machines, workflow scheduling and orchestration, quest generation/progression/rewards, district/building/railway/world state services, reversible projection mapping/compiler, Architecture Pack YAML, and a health response contract. Each implementation module has focused tests.

## Truthful status

Code and tests have been committed, but this statement is not a test result. Mark the package verified only after the commands above pass in CI or a reproducible local environment. The workflow service currently uses process-local memory; durable persistence and authenticated production API deployment are separate capabilities and are not claimed here.
