# Strange Studio Construction Roadmap

This roadmap is an implementation gate, not a list of aspirations presented as completed work. A phase advances only when all declared files are complete, tests exist and pass, examples work, and documentation matches the code.

## Status vocabulary

- **Not started:** no implementation evidence has been reviewed.
- **In progress:** source files are being created or repaired.
- **Implemented:** source code exists, but verification may still be pending.
- **Verified:** named checks have passed and evidence is available.
- **Blocked:** a concrete dependency or access issue prevents progress.
- **Unresolved:** the available evidence does not determine the correct implementation.

## Phase 0: Bootstrap

Required files:
- [x] `README.md` exists.
- [x] `ARCHITECTURE.md` defines canonical boundaries and construction rules.
- [x] `ROADMAP.md` defines phase gates and evidence standards.

Exit gate: repository identity, architecture boundaries, status vocabulary, and dependency order are documented. The existence of these documents does not verify later phases.

## Phase 1: Ontology schemas

Required files:
- [ ] `ontology.schema.json`
- [ ] `workflow.schema.json`
- [ ] `event.schema.json`
- [ ] `truth.schema.json`
- [ ] `agent.schema.json`

Each schema must include a valid fixture, an invalid fixture, explicit validation rules, versioning, and tests that exercise both accepted and rejected inputs.

Exit gate: all canonical entities are schema-validatable and cross-schema references are coherent.

## Phase 2: Validators

Required files:
- [ ] `schema-validator.ts`
- [ ] `cross-field-validator.ts`
- [ ] `projection-validator.ts`
- [ ] `observability-validator.ts`

Each validator requires its own test file, valid and invalid cases, and assertions for exact expected errors. Validators must fail closed for malformed or semantically invalid data.

Exit gate: schema, cross-field, projection, and event observability rules are executable.

## Phase 3: Domain models

Required files:
- [ ] `Agent.ts`
- [ ] `Workflow.ts`
- [ ] `Event.ts`
- [ ] `Knowledge.ts`
- [ ] `Verification.ts`
- [ ] `Context.ts`
- [ ] `Unknown.ts`

Every model must enforce its invariants through typed constructors or validated factory functions and have focused tests. Canonical models must not depend on metaphor or UI packages.

Exit gate: domain objects can be created, serialized, validated, and rejected deterministically.

## Phase 4: State machines

Required files:
- [ ] `workflow-state-machine.ts`
- [ ] `quest-state-machine.ts`
- [ ] `verification-state-machine.ts`

Exit gate: allowed transitions are explicit, invalid transitions return typed errors, transition history is observable, and quest/workflow state mappings are deterministic.

## Phase 5: Workflow engine

Required files:
- [ ] `orchestrator.ts`
- [ ] `scheduler.ts`
- [ ] `dependency-graph.ts`
- [ ] `workflow-service.ts`

Exit gate: dependency cycles are detected, scheduling is deterministic under documented rules, failures and cancellations are represented, and each accepted transition emits an observable event.

## Phase 6: Quest engine

Required files:
- [ ] `workflow-mapper.ts`
- [ ] `quest-generator.ts`
- [ ] `progression-engine.ts`
- [ ] `rewards-engine.ts`

Exit gate: quests are projections of workflows, progression derives from verified events, and rewards cannot assert completion when their required verification gate has failed or remains unknown.

## Phase 7: Civilization engine

Required files:
- [ ] `district-service.ts`
- [ ] `building-service.ts`
- [ ] `railway-service.ts`
- [ ] `world-state.ts`

Exit gate: districts and buildings remain projection-layer constructs, required resource access is validated, railway routing exposes dependencies and backoff states, and world state derives from canonical events.

## Phase 8: Projection engine

Required files:
- [ ] `compiler.ts`
- [ ] `mapper.ts`
- [ ] `projector.ts`
- [ ] `reverse-mapper.ts`

Exit gate: mappings preserve canonical identity, unsupported or lossy mappings are rejected or explicitly reported, and round-trip tests demonstrate reversibility for supported projections.

## Phase 9: Architecture Packs

Required files:
- [ ] `architecture.yaml`
- [ ] `districts.yaml`
- [ ] `resources.yaml`
- [ ] `quests.yaml`
- [ ] `validation.yaml`
- [ ] `examples.yaml`

Every pack must map Agent, Workflow, Knowledge, Tool, Event, Verification, Context, Unknown, and Delivery. Packs must include teaching intent, source/proposal/unresolved classifications, and executable validation examples.

Exit gate: invalid packs are rejected before compilation or use.

## Phase 10: API

API endpoints may be implemented only after the domain models, validators, state machines, and required engines exist.

Exit gate: request and response schemas are validated, errors are typed, state changes produce observable events, and API tests cover success, rejection, authorization, and failure paths.

## Phase 11: UI

UI work begins only after state, services, APIs, and projections are implemented and tested. The UI may visualize canonical state and projections but may not invent state or promote unknown values to success.

Exit gate: UI behavior is backed by tested contracts, empty/error/unknown states are explicit, and integration tests verify observable behavior.

## Immediate next action

Start Phase 1 by inspecting the existing repository schemas, TypeScript configuration, and test conventions. Reuse compatible infrastructure where it is correct; do not overwrite unrelated material. Generate each schema with valid and invalid fixtures and tests, then run the repository's actual validation commands before marking the phase verified.

## Verification ledger

No phase is marked **verified** solely because files were committed. Record the exact test command, outcome, commit or run reference, and any remaining limitations before changing a phase to verified.
