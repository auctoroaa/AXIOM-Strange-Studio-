# Strange Studio

**Observable Intelligence Operating System (OIOS)**  
*See. Think. Build.*

Strange Studio is an observability-first workspace for understanding how software systems, AI agents, workflows, tools, knowledge, and infrastructure behave. Its interface is designed to expose state, evidence, dependencies, and outcomes instead of simulating intelligence through decoration.

> **Repository status:** The repository is being established from a minimal baseline. This commit introduces the architecture documentation and a frontend prototype. The current interface uses explicitly labeled local demonstration data. It does not connect to live AI agents, production models, external tools, or infrastructure.

## Design principles

- **Truth over theater:** no fabricated progress or implied integrations.
- **Events drive state:** visible activity must correspond to a recorded state transition.
- **Evidence is inspectable:** distinguish facts, assumptions, predictions, and simulations.
- **Causality is traceable:** expose dependencies, triggers, and outcomes.
- **Verification gates delivery:** generation alone does not mean an output is verified.
- **Unknown means unknown:** missing data is never silently presented as success.

## Current capabilities

- Responsive observability dashboard prototype.
- Observable lifecycle overview: request, planning, research, tool use, execution, verification, delivery.
- Separate truth classifications and system-health indicators.
- Architecture and implementation-boundary documentation.
- Automated CI workflow for type-checking, tests, and production build.

## Quick start

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Quality checks

```bash
npm run typecheck
npm test
npm run build
```

The GitHub Actions workflow runs these checks on pushes and pull requests. A configured workflow is not proof that a run has passed; check the Actions tab for actual results.

## Canonical design corpus

The repository is organized into numbered design domains under `docs/`, technical contracts under `specs/`, reusable visual tokens under `design-system/`, application areas under `app/`, and engine boundaries under `packages/`. This is a scaffolded architecture corpus: many documents define intended responsibilities, not completed runtime functionality.

- [Strange Studio Bible](bible/strange-studio-bible-v1.md)
- [CGE v1.0 pipeline](docs/concept-generation-engine.md)
- [CGE domain index](docs/05-CONCEPT-ENGINE/generation-pipeline.md)
- [OIOS architecture specification](specs/architecture/OIOS-architecture.md)
- [World laws](docs/02-WORLD/world-laws.md)

## Repository map

```text
.
├── .github/workflows/ci.yml
├── docs/
│   ├── 00-VISION/ … 20-FUTURE/ (numbered design domains)
│   ├── concept-generation-engine.md
│   ├── architecture.md
│   ├── concept-generation-engine.md
│   ├── truth-and-verification.md
│   ├── visual-system.md
│   └── roadmap.md
├── schemas/
│   └── concept.schema.json
├── bible/
├── design-system/
├── app/
├── packages/
├── prompts/
├── research/
├── specs/
│   ├── architecture/
│   ├── diagrams/
│   └── schemas/
├── src/
│   ├── domain/
│   │   └── demo-state.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Architecture at a glance

```text
                    THE OBSERVATORY
             Live activity + Truth system
                           |
                    INTELLIGENCE CORE
                           |
          +----------------+----------------+
          |                |                |
       MIND VIEW         CITY VIEW       MACHINE VIEW
 Memory / Reasoning   Library / Workshop  Models / APIs
          |                |                |
          +----------------+----------------+
                           |
                  WORKFLOW NETWORK
 Request → Plan → Research → Execute
                           |
                    Verification Gate
                           |
                     DELIVERY HARBOR
```

See [Architecture](docs/architecture.md), [Concept Generation Engine v1.0](docs/concept-generation-engine.md), [Concept Record Schema](schemas/concept.schema.json), [Visual System](docs/visual-system.md), [Truth & Verification](docs/truth-and-verification.md), and [Roadmap](docs/roadmap.md).

## Non-goals of this prototype

This is not yet a production agent runtime, orchestration engine, persistent knowledge graph, model router, authentication system, or deployment service. Those integrations must be implemented and verified before the interface may claim to observe them.

## Contributing

Keep changes small, explicit, and testable. Document architectural decisions and label features as **implemented**, **proposed**, or **unverified**. Never claim a live integration without an actual connector, observable events, and tests.

## Project identity

- **Name:** Strange Studio
- **System:** Observable Intelligence Operating System (OIOS)
- **Tagline:** See. Think. Build.
- **Primary rule:** The environment must explain the system, not conceal it.
