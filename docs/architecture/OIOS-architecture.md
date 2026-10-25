# Strange Studio Architecture System (ASA) v1
## Meaning-First Architecture for OIOS

**Document ID:** ASA-001  
**Version:** 1.0.0  
**Status:** Canonical architecture specification  
**Scope:** Ontology, truth, state, workflows, projection packs, experience models, and validation rules  
**Implementation status:** This specification defines intended behavior. A requirement is not implemented merely because it is documented.

---

## 1. Purpose

Strange Studio is a meaning-first architecture system, not a UI-first system. An architecture must describe what a thing is, what it means, how it behaves, how it is verified, and how it can be projected into different worlds.

The architecture is not limited to implementation details such as components, page layouts, or runtime stacks.

ASA must support:
- Weird but coherent metaphors.
- Multiple world projections over a shared ontology.
- Shared truth and verification rules.
- Explainable, observable system behavior.
- Creative architecture packs without breaking canonical compatibility.

## 2. Core principle

> **Meaning is canonical. Projection is variable. Truth is universal. Observability is mandatory.**

A projection may change how a primitive is named, pictured, navigated, or experienced. It must not change the primitive's canonical meaning, state, evidence, or behavior.

## 3. Meta-architecture stack

The system is organized into five cooperating layers.

1. **Reality Layer:** the underlying domain of existence, actions, resources, and causal effects.
2. **OIOS Layer:** canonical ontology, truth classifications, causality, events, state, and verification contracts.
3. **Projection Layer:** metaphorical interpretations of canonical primitives, such as cities, oceans, cathedrals, forests, machines, or mythic worlds.
4. **Experience Layer:** workflows, quests, dashboards, world views, and learning surfaces presented to users.
5. **Validation Layer:** schema, ontology, projection, workflow, truth, and simulation checks that protect compatibility and explainability.

Validation applies across all layers. It is not permission to rewrite canonical truth.

## 4. Canonical primitives

Every architecture must define and account for all nine canonical primitives:

- **Agent:** an actor capable of goal-directed behavior.
- **Workflow:** a defined sequence or graph of activities pursuing an objective.
- **Knowledge:** information or a model retained with context and provenance.
- **Tool:** a capability an agent or workflow can invoke to perform an operation.
- **Event:** a recorded occurrence that may explain or cause a state transition.
- **Verification:** an inspectable process that evaluates a claim, artifact, or outcome against stated criteria.
- **Unknown:** an explicit representation of missing, unresolved, unavailable, or insufficiently evidenced information.
- **Context:** the scoped information, constraints, resources, and conditions relevant to an action or claim.
- **Delivery:** an output or result handed to its intended consumer under defined acceptance criteria.

These are semantic primitives, not UI widgets or framework-specific implementation concepts.

Each primitive definition must carry:
- Stable identifier and canonical meaning.
- Purpose and semantic role.
- Observable behavior.
- Truth policy and provenance requirements.
- State semantics.
- One primary projection per architecture, with optional aliases explicitly marked.
- Validation constraints.

Example primitive definition:

```yaml
primitive:
  id: agent
  meaning: "An actor capable of goal-directed behavior"
  role: actor
  observable_behavior:
    - decides
    - plans
    - acts
    - reflects
    - validates
  truth_policy:
    requires_provenance: true
    cannot_claim_fact_without_evidence: true
  projection:
    primary: Builder
    aliases: [Whale, Monk, Pilot]
```

The example is illustrative. It does not assert that these projection mappings are implemented in code.

## 5. Projection model

A projection pack maps canonical primitives into a coherent metaphor while preserving canonical semantics. It may add presentation details, spatial relationships, narratives, and interaction patterns, but it may not silently redefine ontology, truth, state, or verification.

Example:

```yaml
projectionPack:
  id: dream-ocean
  version: 1.0.0
  mappings:
    Agent: { primary: Whale, aliases: [] }
    Workflow: { primary: Migration, aliases: [] }
    Knowledge: { primary: Coral, aliases: [] }
    Tool: { primary: Ship, aliases: [] }
    Event: { primary: Tide, aliases: [] }
    Verification: { primary: Lighthouse, aliases: [] }
    Unknown: { primary: Abyss, aliases: [] }
    Context: { primary: Current, aliases: [] }
    Delivery: { primary: Port, aliases: [] }
```

A pack is compatible only if it covers all canonical primitives, communicates their actions, preserves truth and state semantics, and passes validation. A primitive may have multiple metaphors, but each architecture must select exactly one primary mapping per primitive. Other mappings must be declared aliases and must not introduce semantic ambiguity.

Projection changes must not mutate canonical runtime records. The canonical identity must remain traceable from every projected object.

## 6. Shared ontology

The ontology defines the concepts and relationships shared by all architecture packs.

Required relationships include:
- Agent performs Workflow.
- Workflow consumes Context.
- Workflow may produce or update Knowledge.
- Tool enables an Action.
- Event records an occurrence and may transition State.
- Verification evaluates a claim, artifact, or outcome.
- Unknown marks uncertainty, absence, or insufficient evidence.
- Delivery publishes an output against acceptance criteria.

Required invariants:
- Unknown is first-class, never silently replaced by a guess.
- Claims classified as facts require traceable evidence.
- Delivery cannot be marked verified or complete until its required verification gates pass.
- Workflow state and state-transition history are inspectable.
- Projection aliases do not change canonical identity.
- A temporal sequence alone does not prove causality.

## 7. Truth model

Every architecture component and runtime claim must carry a truth classification or explicitly inherit one from a traceable parent.

Canonical truth classes:
- **Fact:** supported by identifiable evidence.
- **Assumption:** provisionally accepted for reasoning, not established as fact.
- **Hypothesis:** a testable proposed explanation.
- **Prediction:** a forward-looking claim with uncertainty.
- **Simulation:** generated or modeled behavior that is not presented as a real observation.

Example:

```yaml
truth:
  classification: Fact
  evidence:
    - source: observed_runtime_log
      reference: "trace-or-record-id"
  confidence: 0.98
  uncertainty:
    level: low
```

Confidence is not a substitute for evidence. Evidence must be inspectable, relevant to the claim, and traceable to a source. If evidence is absent, inaccessible, or inadequate, the system must preserve an appropriate non-fact classification or mark the claim Unknown. It must not silently upgrade Assumption, Hypothesis, Prediction, or Simulation to Fact.

## 8. Canonical state model

The architecture must support these canonical workflow states:

- `READY`
- `ACTIVE`
- `WAITING`
- `BLOCKED`
- `FAILED`
- `RETRYING`
- `VALIDATING`
- `VERIFYING`
- `COMPLETE`
- `UNKNOWN`
- `SIMULATED`

State meanings:
- **READY:** prerequisites are satisfied and execution may begin.
- **ACTIVE:** work is in progress.
- **WAITING:** progress is intentionally paused pending an external event or input.
- **BLOCKED:** a known unmet condition prevents progress.
- **FAILED:** an attempted operation failed.
- **RETRYING:** a permitted retry is in progress.
- **VALIDATING:** structure, constraints, or internal consistency are being checked.
- **VERIFYING:** evidence and acceptance criteria are being checked.
- **COMPLETE:** required work and completion gates have passed.
- **UNKNOWN:** the current state cannot be established reliably.
- **SIMULATED:** the state belongs to an explicitly identified simulation, not asserted real execution.

Example projection:

```yaml
state:
  id: ACTIVE
  meaning: "The system is currently engaged in purposeful execution"
  projection:
    city: active-workshop
    game: expedition
    machine: operation-running
```

Projection-specific state labels are presentation labels only. They must map back to the canonical state. A metaphorical animation, quest reward, or visual celebration cannot itself establish completion.

## 9. Workflow model

Each workflow must define:
- Stable identifier and objective.
- Required context and input contracts.
- Dependencies and resource requirements.
- Permitted states and state transitions.
- Events emitted or consumed.
- Verification controls and evidence requirements.
- Completion and failure criteria.
- Retry policy, including bounded attempts where retry is supported.
- Observable status and provenance.

Example:

```yaml
workflow:
  id: research-agent
  objective: "Construct and validate a new concept"
  required_context: []
  dependencies: []
  states:
    - READY
    - ACTIVE
    - WAITING
    - BLOCKED
    - FAILED
    - RETRYING
    - VALIDATING
    - VERIFYING
    - COMPLETE
    - UNKNOWN
    - SIMULATED
  verification:
    required: true
  completion_criteria:
    - artifact_exists
    - schema_validation_passed
    - evidence_recorded
```

This is a specification example, not proof that a research-agent workflow currently exists. Implementations must reject illegal transitions or record why an exceptional transition was accepted.

## 10. District model

A **district** is a semantic region within a projection. It may be physical, abstract, mythic, computational, social, or cognitive, provided its purpose and relation to canonical primitives remain explainable.

Example:

```yaml
district:
  id: memory-city
  name: Memory City
  purpose: knowledge preservation
  primitive: Knowledge
  buildings:
    - Library
    - Archive
    - Observatory
  quests:
    - Research
    - Recovery
    - Discovery
```

Districts organize experience. They do not create independent truth systems or bypass shared validation.

## 11. Quest model

A **quest** is a user-facing narrative representation of a real workflow. Its progression must map to canonical workflow state and recorded events.

Example:

```yaml
quest:
  id: construct-lost-research-automaton
  workflow: research-agent
  district: workshop
  title: "Construct Lost Research Automaton"
  rewards:
    - knowledge
    - capability
    - verification
  progression:
    planned: READY
    active: ACTIVE
    verified: COMPLETE
```

Quest progression is not a separate source of execution truth. Rewards that imply successful delivery, knowledge gained, or verification passed may be issued only when the corresponding workflow gates and evidence support them. No fake progression is permitted.

## 12. Validation pyramid

Every architecture pack must pass these validation levels. Each level should return inspectable findings, not only a pass/fail badge.

1. **Schema Validation:** required fields, identifiers, types, and required primitives exist.
2. **Ontology Validation:** canonical primitives are covered, relationships are coherent, and primary mappings are unambiguous.
3. **Projection Validation:** each projection communicates the primitive's role and observable action and can be explained.
4. **Workflow Validation:** states and transitions are valid and compatible with the canonical lifecycle.
5. **Truth Validation:** classifications are valid, evidence is inspectable, and Unknown and Simulation are represented correctly.
6. **Simulation Validation:** simulated behavior remains explainable, isolated from real observations, and incapable of fabricating real completion.

A higher-level pass does not override a lower-level failure. Validation reports should include the rule identifier, affected object, evidence examined, result, and actionable explanation.

## 13. Hard validation rules

- **A01: Canonical Primitive Coverage.** Every architecture maps Agent, Workflow, Knowledge, Tool, Event, Verification, Unknown, Context, and Delivery.
- **A02: One-to-One Primary Mapping.** Each canonical primitive has exactly one primary projection per architecture. Additional mappings are explicit aliases.
- **A03: Observable Semantics.** Each projection communicates the primitive's role and observable behavior.
- **A04: Verifiability.** Verification exposes an inspectable mechanism, criteria, and result.
- **A05: Unknown Representation.** Every architecture can represent unresolved, unavailable, and insufficiently evidenced states.
- **A06: Workflow-State Compatibility.** Every architecture supports all canonical workflow states and maps presentation states back to them.
- **A07: Truth Compatibility.** Every architecture supports Fact, Assumption, Hypothesis, Prediction, and Simulation without silent promotion between classes.
- **A08: Event Projection.** Every architecture defines an event metaphor and preserves traceability to the canonical event.
- **A09: Resource Conservation.** Every modeled resource defines production, consumption, and storage semantics, or explicitly marks an operation as not applicable with a reason. Resource accounting must not imply conservation laws that the modeled domain does not actually support.
- **A10: Quest Projection.** Quest progression maps to actual workflow states and verified events.
- **A11: Learnability.** A new user can inspect the architecture and explain what happened, why it happened, and what evidence supports the explanation.

## 14. Weird but useful rule

An architecture may be weird, surreal, mythic, or abstract. It may not become less observable.

**Formally:**

```text
Weirdness increases
Observability must not decrease
```

Quantum cathedrals, dream oceans, dragon kingdoms, mycelium networks, neural forests, and industrial utopias are all acceptable when the same canonical meaning, evidence, state, and verification rules remain intact.

## 15. Reference architecture map

```text
Reality Layer
  └── actual world states, actions, resources, causality

OIOS Layer
  └── canonical ontology, truth, state, events, verification

Projection Layer
  └── metaphor packs: cities, forests, cathedrals, oceans, machines

Experience Layer
  └── workflows, quests, views, learning surfaces

Validation Layer
  └── schema, ontology, projection, workflow, truth, simulation checks
```

## 16. Repository implementation boundaries

- `apps/web/`: user-facing experience; UI state must not masquerade as canonical runtime truth.
- `packages/oios-core/`: intended home for canonical domain contracts, schemas, validation, state transitions, projection contracts, and API behavior.
- `packages/*-engine/`: bounded engine packages with explicit contracts and tests. A package directory or README is not an implemented engine.
- `specs/`: machine-readable and formal contracts.
- `docs/architecture/`: architecture rationale and explanatory diagrams.
- `bible/`: product principles and world-building constraints.
- `design-system/`: reusable visual tokens, components, and interaction patterns.
- `research/`: evidence and exploratory notes, clearly separated from accepted architecture.

Implementation claims must be backed by source code and relevant test or runtime evidence. The current API is process-local and in-memory; it must not be described as durable persistence. The current dashboard's event stream and truth panel use local fixture data; these must not be represented as live telemetry.

## 17. Compatibility and change control

Canonical primitive identifiers, truth classes, and state identifiers are shared contracts. Changes to them require a versioned specification update, compatibility analysis, schema and validator updates, migration notes where needed, and tests demonstrating the intended behavior.

Projection packs may evolve independently only while they remain compatible with the canonical ontology and validation rules. If a metaphor cannot represent a primitive or state faithfully, the pack must fail validation or explicitly declare the limitation; it may not omit the primitive silently.

## 18. Summary

Strange Studio is a meaning-first architecture system built around:
- Canonical ontology.
- Projection packs that preserve semantics.
- Universal truth and verification invariants.
- Inspectable workflow states.
- Explainable districts and quests.
- Explicit validation rules and compatibility gates.

This makes Strange Studio expressive, universal, explainable, playable, compatible, and extensible without allowing presentation to overrule reality.

---

**Implementation note:** ASA v1 is the normative design target for OIOS architecture packs. Its requirements should be converted into machine-readable schemas, validators, fixtures, and automated tests incrementally. Until those checks exist and pass, conformance is specified but not verified.
