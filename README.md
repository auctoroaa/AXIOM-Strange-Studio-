# AXIOM Strange Studio

**Observable Intelligence Operating System (OIOS)**  
*See. Think. Build.*

Strange Studio is an observability-first workspace for understanding how software systems, AI agents, workflows, tools, knowledge, and infrastructure behave. The interface aims to expose state, evidence, dependencies, and outcomes rather than imply intelligence through decoration.

## Repository status

The active React/Vite dashboard lives in `apps/web/`. The executable OIOS core lives in `packages/oios-core/` and contains canonical schemas, validators, domain models, state machines, workflow and quest logic, reversible projections, architecture packs, and a local HTTP API.

The dashboard checks whether the local API is reachable, but the event stream and truth panel still use explicitly labeled local fixture data. The API currently stores workflow state in process memory and is not a production-hardened service. Code being present is not proof that tests or CI pass; use the Actions results and local quality checks to establish verification.

## Structure

```text
.
├── apps/
│   └── web/                 # Active React/Vite application
│       ├── src/
│       │   ├── app/
│       │   ├── api/
│       │   ├── domain/
│       │   ├── styles/
│       │   └── test/
│       ├── index.html
│       ├── package.json
│       └── vite.config.ts
├── packages/
│   ├── oios-core/            # Canonical runtime, domain, schemas, validators, API
│   ├── builder-engine/       # Planned/implemented status documented per package
│   ├── causality-engine/
│   ├── concept-engine/
│   ├── memory-engine/
│   ├── observability-engine/
│   ├── truth-engine/
│   ├── visualization-engine/
│   ├── world-engine/
│   └── shared/
├── docs/
│   ├── architecture/
│   ├── legal/
│   ├── concept-generation-engine.md
│   ├── truth-and-verification.md
│   ├── visual-system.md
│   └── roadmap.md
├── bible/
├── design-system/
├── specs/
├── schemas/
├── prompts/
├── research/
├── app/                     # Legacy compatibility note only
├── src/                     # Legacy compatibility note only
├── package.json             # Workspace and shared tooling
├── tsconfig.json
└── vitest.config.ts
```

Empty or documentation-only engine directories are placeholders until actual code is added. Their presence must not be described as implemented functionality.

## Design principles

- **Truth over theater:** no fabricated progress or implied integrations.
- **Events drive state:** visible activity should correspond to a recorded state transition.
- **Evidence is inspectable:** distinguish facts, assumptions, predictions, and simulations.
- **Causality is traceable:** expose dependencies, triggers, and outcomes.
- **Verification gates delivery:** generation alone does not mean an output is verified.
- **Unknown means unknown:** missing data is never silently presented as success.

## Quick start

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Run the API separately when needed:

```bash
npm run api:dev
```

## Quality checks

```bash
npm run typecheck
npm test
npm run build
```

CI is configured to run these checks on pushes and pull requests. A configured workflow is not evidence of a passing run.

## Architecture and product corpus

- [Strange Studio Bible](bible/strange-studio-bible-v1.md)
- [OIOS Core README](packages/oios-core/README.md)
- [Architecture overview](docs/architecture.md)
- [Concept Generation Engine](docs/concept-generation-engine.md)
- [Truth and Verification](docs/truth-and-verification.md)
- [Visual System](docs/visual-system.md)
- [Roadmap](docs/roadmap.md)
- [Concept schema](schemas/concept.schema.json)

## Non-goals of this prototype

This is not yet a production agent runtime, persistent knowledge graph, model router, authentication system, or deployment service. These capabilities must be implemented and verified before the interface may claim to observe them.

## License and legal notices

This repository currently uses a proprietary, all-rights-reserved notice. Public visibility does not grant reuse rights. Read [LICENSE](LICENSE) before copying or redistributing project-owned material.

- [Legal, IP, and Claims Policy](docs/legal/LEGAL.md)
- [Name and Trademark Notice](docs/legal/TRADEMARKS.md)
- [Third-Party Notices and Audit Status](docs/legal/THIRD_PARTY_NOTICES.md)

Third-party components retain their own terms. The dependency-license audit is not yet complete. These notices are not a substitute for advice from qualified counsel in the relevant jurisdiction.
