# Repository Governance and Canonical Ownership

**Status:** PROPOSED  
**Scope:** Repository organization and package ownership  
**Applies to:** AXIOM Strange Studio / Observable Intelligence Operating System (OIOS)

This document establishes the intended source-of-truth boundaries. It does not claim that planned packages are implemented, tested, or released.

## 1. Canonical repository boundaries

| Path | Ownership | Rule |
|---|---|---|
| `apps/web/` | Browser application | The active React/Vite user interface. UI composition, routing, browser adapters, and presentation belong here. |
| `apps/web/src/app/` | Web application composition | Screens, layouts, route-level composition, and application wiring. |
| `apps/web/src/api/` | Web-side API client | Typed client calls and transport adapters only. This is not the server API implementation. |
| `apps/web/src/domain/` | Web presentation models | View-specific models only. Canonical domain rules must not be duplicated here. |
| `packages/oios-core/` | Canonical OIOS core | Domain models, schemas, validators, state machines, workflow logic, projections, and the local HTTP API as currently documented. |
| `packages/*/` | Independently owned engines | Each package must have one declared responsibility, public entry point, dependency policy, tests, and status record before being treated as an operational package. |
| `docs/architecture/` | Architecture decisions | System boundaries, dependency rules, ownership, and migration records. |
| `schemas/` | Shared contract artifacts | Versioned schemas consumed by the core and other packages. A schema here must have an identified owner and compatibility policy. |
| `specs/` | Normative specifications | Requirements and acceptance criteria. Specifications are not proof of implementation. |
| `bible/` | Product and conceptual corpus | Product principles and conceptual material; not executable source. |
| `design-system/` | Design assets and tokens | Reusable visual rules and assets; not application business logic. |
| `research/` | Research inputs | Exploratory material with provenance; not normative architecture unless adopted through a recorded decision. |
| `prompts/` | Prompt assets | Versioned prompt material with owners and intended consumers. |

## 2. Duplicate-boundary resolution

- `apps/web/` is the sole active web application root.
- `apps/web/src/api/` is the browser-side API client boundary.
- `packages/oios-core/api/` is the server-side API boundary.
- Root-level `app/` and `src/` must not become competing application roots. If retained for historical compatibility, they must contain only an explicit deprecation/redirect note and must not hold active implementation.
- Package-level domain logic belongs to its declared canonical package. UI-specific adaptation may remain in the web app, but must call the canonical package rather than fork its rules.
- Do not move or delete existing paths until imports, build configuration, CI workflows, tests, and external references have been inventoried.

## 3. Package admission contract

Every package under `packages/` must provide:

1. A package manifest with a unique name and explicit exports.
2. A README stating responsibility, non-responsibilities, public API, dependencies, and usage.
3. An owner and a single source-of-truth statement.
4. Tests for its public contract and critical behavior.
5. A dependency rule that prevents circular dependencies and undeclared cross-package imports.
6. A machine-readable lifecycle status.

A directory name or roadmap entry alone does not establish a functioning package.

## 4. Lifecycle status vocabulary

Use exactly these lifecycle values in package metadata and architecture records:

- `PROPOSED`: described or designed; implementation is not established.
- `IMPLEMENTED`: code exists and is wired to its declared contract; verification may still be incomplete.
- `VERIFIED`: required tests and applicable quality gates passed against a recorded revision.
- `RELEASED`: a versioned artifact or deployment has been published and its release evidence recorded.

Status must be scoped to a commit or release. Never infer `VERIFIED` from code presence, or `RELEASED` from a successful local build.

## 5. Dependency direction

The intended dependency direction is:

```text
apps/web
  ├── web presentation and adapters
  └── packages/oios-core (public contracts)

packages/oios-core
  ├── domain and state transitions
  ├── schemas and validation
  ├── workflow logic and projections
  └── server API adapters

other packages
  └── depend on explicit public contracts, never private source paths
```

The core must not import from the web application. Packages must not import from `apps/web`. Cross-package dependencies require explicit package exports and documented ownership.

## 6. Workspace and tooling alignment

The root manifest currently declares only `apps/web` as an npm workspace, while the repository documentation describes multiple packages under `packages/`. This is a governance/configuration mismatch that must be resolved before package-level scripts or workspace dependency assumptions are introduced.

Before changing workspace configuration:
- inventory every package manifest under `packages/`;
- identify package names, package managers, lockfiles, and existing scripts;
- verify TypeScript project references and path aliases;
- inspect CI workflows for assumed paths and commands;
- add only real packages to the workspace; do not create placeholder manifests to make directories appear operational.

## 7. Privacy and information classification

Repository visibility is an access-control setting, not a substitute for data classification. Each repository must identify:

- public-safe documentation and assets;
- internal architecture, operational details, and unpublished implementation;
- confidential organizational records and credentials;
- prohibited content, including secrets, tokens, private keys, personal data without a lawful basis, and private customer data.

Do not commit secrets or confidential records. Use GitHub Actions secrets or an approved secret manager for credentials. Use least-privilege repository and environment permissions. Review commit history and release artifacts when sensitive data is exposed; deleting a file from the current tree does not remove it from Git history.

A repository marked proprietary or `UNLICENSED` is not automatically private. Public visibility means the repository contents are publicly readable even when reuse is restricted by copyright. Confirm the actual GitHub visibility setting separately.

## 8. Safe migration sequence

1. Inventory the complete tree, package manifests, imports, CI workflows, and test configuration.
2. Record the current default-branch commit as the migration baseline.
3. Establish canonical ownership and lifecycle status for each package.
4. Remove stale TypeScript references only after confirming the referenced paths are obsolete.
5. Consolidate duplicate roots only after import and CI impact analysis.
6. Update documentation, scripts, workspace configuration, and tests together.
7. Run typecheck, unit tests, build, and relevant integration checks.
8. Record the exact commit and verification results.

No destructive path moves, deletions, repository transfers, or visibility changes are implied by this document.

## 9. Acceptance criteria

- One active web application root is documented and enforced.
- Browser API client and server API implementation are distinct.
- Every package has one owner and one declared responsibility.
- Package lifecycle claims are tied to verifiable evidence.
- Workspace configuration matches actual package manifests.
- CI and TypeScript configuration contain no stale project references.
- Public-facing privacy and licensing statements accurately describe actual repository settings.
- Migration changes preserve existing behavior or document approved behavior changes.
