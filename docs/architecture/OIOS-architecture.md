# OIOS Architecture

**Status:** architecture overview; some subsystems are proposed, not implemented.

## Canonical rule

The OIOS runtime is the source of truth. Projection systems translate canonical state into useful views without changing its meaning. Gameplay or engagement layers may influence presentation, but must not fabricate runtime state.

## Layers

1. **Canonical runtime:** typed domain records, validated events, state transitions, verification, and delivery contracts.
2. **Projection system:** reversible mappings from canonical primitives into Observatory, Agent Mind, Memory City, Workshop, Machine, and Delivery views.
3. **Engagement layer:** optional game-like presentation, separated from execution truth and evidence.

## Repository boundaries

- `apps/web/`: user-facing React/Vite application.
- `packages/oios-core/`: canonical domain, schemas, validators, state machines, projections, and local API.
- `packages/*-engine/`: bounded subsystems. A directory or specification is not evidence that an engine is implemented.
- `docs/`, `specs/`, `bible/`, `design-system/`, and `research/`: architecture, contracts, principles, UI language, and exploratory evidence.

## Invariants

- Canonical runtime state is the source of truth.
- Every displayed state must identify its provenance.
- Unknown and unavailable remain explicit states.
- Simulation and fixture data are visibly labeled.
- Projections do not mutate canonical meaning.
- Verification status is based on actual checks, not code presence.
- API persistence is currently process-local and must not be described as durable.

## Verification status

The current web dashboard includes an API connection check, while its event stream and truth panel still use local fixture data. Run the repository's CI checks before claiming the reorganized project builds and tests successfully.
