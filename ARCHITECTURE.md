# Strange Studio Architecture

**System:** Observable Intelligence Operating System (OIOS)  
**Architecture status:** Canonical construction contract; implementation status must be proven independently.  
**Primary rule:** OIOS models reality. Projection Packs express meaning. Compute War supplies engagement.

## 1. System boundary

Strange Studio is the fusion of three distinct concerns:

- **OIOS = Reality:** canonical entities, state, events, workflows, tools, knowledge, verification, delivery, and unknowns.
- **Projection Packs = Meaning:** reversible mappings from canonical OIOS primitives into domain-specific spatial, narrative, visual, or game representations.
- **Compute War = Engagement:** game rules and player-facing progression that consume OIOS facts and Projection Pack outputs without redefining either.

These boundaries are mandatory. A game concept or visual metaphor must never become a canonical OIOS entity merely because it is prominent in the interface.

## 2. Canonical OIOS primitives

The only canonical primitives in this contract are:

1. Agent
2. Workflow
3. Knowledge
4. Event
5. Tool
6. Context
7. Verification
8. Delivery
9. Unknown

Every canonical primitive must acquire an explicit schema, validator, domain model, state-transition rules where applicable, service behavior, tests, examples, and documentation before it is treated as implemented.

## 3. Projection Pack rule

Metaphors exist only in Architecture Packs and must resolve to canonical primitives. Examples:

- Builder → Agent
- Whale → Agent
- Coral → Knowledge
- Migration → Workflow
- Lighthouse → Verification

Mappings must preserve enough information to support reverse mapping. If a projection cannot be reversed without losing meaning, validation must reject it or explicitly record the information loss as an unresolved limitation. A metaphor is not permitted to mutate canonical identity.

## 4. Dependency order

Construction follows this order. A later layer may not be treated as complete while a required earlier layer is missing.

1. Reality model
2. Ontology
3. State
4. Events
5. Schemas
6. Validators
7. Domain models
8. State machines
9. Services
10. Engines
11. Projections
12. API
13. UI

The user interface is last because it must display real domain state and observable effects rather than inventing them.

## 5. Required construction phases

- **Phase 0:** repository bootstrap: README, ARCHITECTURE, ROADMAP.
- **Phase 1:** ontology, workflow, event, truth, and agent schemas.
- **Phase 2:** schema, cross-field, projection, and observability validators.
- **Phase 3:** Agent, Workflow, Event, Knowledge, Verification, Context, and Unknown domain models.
- **Phase 4:** workflow, quest, and verification state machines.
- **Phase 5:** orchestrator, scheduler, dependency graph, and workflow service.
- **Phase 6:** workflow mapper, quest generator, progression engine, and rewards engine.
- **Phase 7:** district, building, railway, and world-state services.
- **Phase 8:** projection compiler, mapper, projector, and reverse mapper.
- **Phase 9:** Architecture Pack definitions and validation.
- **Phase 10:** API endpoints after engines exist.
- **Phase 11:** UI after state, services, APIs, and projections exist.

Each phase is complete only when its files contain full implementations, its tests are generated, examples are executable where appropriate, and documented commands pass.

## 6. Cross-field invariants

The validation system must enforce these invariants:

- **CF01:** an Agent must declare the capabilities required by a Workflow it performs.
- **CF02:** a Tool must be authorized and compatible with the Agent that uses it.
- **CF03:** Verification must classify the truth status of the claim or output it evaluates.
- **CF04:** Unknown regions must have a discovery method or an explicit reason they are currently undiscoverable.
- **CF05:** every modeled Resource must define producer, consumer, storage, and transport.
- **CF06:** a District must have access to every resource required by its declared operations.
- **CF07:** quest states must map directly and deterministically to workflow states.
- **CF08:** every accepted Event must have a defined, observable effect or be explicitly classified as informational.
- **CF09:** every metaphor in a Projection Pack must resolve to an OIOS primitive.
- **CF10:** every Architecture Pack must state what knowledge or capability it teaches.
- **CF11:** unusual concepts are allowed; semantic ambiguity that collapses canonical meaning is not.
- **CF12:** projections must be reversible or explicitly rejected with a machine-readable loss report.

## 7. Architecture Pack contract

Every Architecture Pack must define all nine canonical primitive mappings: Agent, Workflow, Knowledge, Tool, Event, Verification, Context, Unknown, and Delivery. Missing mappings make the pack invalid.

Pack definitions must distinguish source-defined facts, proposals, and unresolved questions. They must include validation rules and examples and may not silently promote proposed behavior to verified behavior.

## 8. Truth and implementation status

Use these classifications consistently:

- **source-defined:** directly stated by an identified source.
- **proposed:** a design choice not yet implemented or proven.
- **implemented:** code exists in the repository.
- **verified:** the relevant automated or manual test passed and evidence is recorded.
- **unresolved:** evidence or decisions are insufficient.
- **unknown:** the system cannot currently determine the answer.

File presence is not proof of runtime behavior. A configured CI workflow is not proof of a passing run. A projection is not proof of a live integration.

## 9. Quality gate

Every implementation file must have focused tests. Every schema must include valid and invalid examples plus documented validation rules. Every validator must include valid input, invalid input, expected errors, and test coverage. No placeholder files or incomplete source are permitted.

Before starting a phase, check that an engineer can implement the next layer using the completed files and their declared dependencies. If not, finish the current phase first.

## 10. Execution and repository policy

- Keep canonical domain packages independent of UI and presentation metaphors.
- Keep external integrations behind explicit Tool/service contracts.
- Make state changes observable through validated Events.
- Preserve source provenance for knowledge and truth classifications.
- Reject invalid transitions and invalid projections deterministically.
- Do not claim a feature is operational without execution evidence.
- Do not replace or delete existing project material without an explicit need and review.

## 11. Current status

This document defines the architecture contract. It does not itself establish that all listed engines or services are implemented. Implementation status must be determined from source files, automated tests, and recorded execution evidence.
