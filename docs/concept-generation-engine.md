# Strange Studio Concept Generation Engine (CGE) v1.0

**System:** Observable Intelligence Operating System (OIOS)  
**Status:** Design specification. Automated generation and runtime deployment are not yet implemented.  
**Purpose:** Transform raw ideas into observable concepts and coherent world structures without losing meaning, truth, causality, inspectability, or design consistency.

## 1. Governing principle

The Concept Generation Engine is the meta-system intended to invent and evolve Strange Studio's concepts. It must not confuse a compelling metaphor with a verified implementation. Generated concepts remain candidates until they pass explicit review and verification gates.

## 2. Pipeline

```text
Seed Capture
  → Meaning Extraction
  → Function Analysis
  → Human Translation
  → Observable Mapping
  → Truth Validation
  → Causality Synthesis
  → Spatial Generation
  → Visual Generation
  → Interaction Generation
  → State Generation
  → World Integration
  → Concept Verification
  → Concept Library
  → Deploy to Universe
```

Each stage consumes a versioned record and produces a versioned result. Failed or incomplete stages retain their evidence and status. A stage may return **Needs definition**, **Rejected**, or **Blocked** rather than fabricating a successful output.

## 3. Stage contracts

### 01. Seed Capture
Accept an idea, problem, technology, need, workflow, question, observation, or goal. Record the original wording, source, constraints, owner when known, and stable seed ID. A seed is not yet an observable concept.

### 02. Meaning Extraction
Ask: **What is this really?** Identify the underlying purpose without binding the meaning to a vendor or implementation. For example, a vector database may support semantic memory storage and retrieval. Do not reduce every database to “memory” if that abstraction loses relevant distinctions.

### 03. Function Analysis
List the verbs and responsibilities that define the concept. Example memory functions: store, retrieve, organize, relate. Functions are the concept's behavioral DNA and must be specific enough to test.

### 04. Human Translation
Map the function to candidate human mental models. Score each candidate for:
- **Understandability:** can a new user explain it?
- **Observability:** does it make relevant behavior visible?
- **Scalability:** can the metaphor grow without contradictions?
- **Emotional clarity:** does its tone fit the task without obscuring it?

Scores guide selection; they do not prove correctness. Record the chosen model and rationale, and preserve alternatives when the choice is consequential.

### 05. Observable Mapping
Translate the mental model into visible entities, relationships, and events. For a library, this might include books, shelves, catalogs, source records, and knowledge routes. Every meaningful visual must map to a real entity/event or be clearly labeled as illustrative or simulated.

### 06. Truth Validation
Attach source/provenance, classification, confidence when justified, verification status, ownership where known, and history. Use **fact**, **assumption**, **prediction**, **simulation**, or **unknown** classifications. A confidence number is not proof; missing sources remain missing. Do not claim a concept is factually validated merely because its metadata fields exist.

### 07. Causality Synthesis
Specify the trigger, dependencies, action/event, outcome, and evidence for the relationship. Example: a builder request triggers retrieval; library access is a dependency; selected knowledge is returned. If the cause is not known, preserve it as unknown rather than inventing a story.

### 08. Spatial Generation
Place the concept within a hierarchy that improves comprehension:

```text
Object → Room → Building → District → World
```

A concept may skip levels or use an alternative structure when that better represents its role. Example: Book → Shelf → Library → Memory District → Memory City. Spatial placement is a design mapping, not proof that a real service exists.

### 09. Visual Generation
Specify geometry, material, lighting, color, motion, and iconography. Visual language must remain coherent with the Strange Studio system and accurately communicate status. Animation that implies live activity must be driven by real events; otherwise label it as simulation or demonstration.

### 10. Interaction Generation
Describe user intent and the interaction's actual result. Prefer meaningful task flows over decorative command metaphors, but preserve accessible, direct controls. Example: enter library view → inspect source → retrieve item → return to workflow with a provenance link. A metaphor must not conceal what action is being performed.

### 11. State Generation
Define a state machine with valid transitions. Baseline states:
- **Ready**
- **Working**
- **Waiting**
- **Blocked**
- **Failed**
- **Retrying**
- **Complete**
- **Unknown**
- **Simulated**

A concept may define a narrower state set, but must document valid states, transition triggers, terminal states, and invalid transitions. **Complete** means the operation ended; it does not automatically mean verification passed or delivery succeeded.

### 12. World Integration
Connect the concept to existing entities through typed relationships such as **depends-on**, **triggers**, **contains**, **produces**, **verifies**, or **delivers-to**. Check for duplicates, cycles that violate domain rules, orphaned dependencies, naming conflicts, and contradictions with canonical concepts.

### 13. Concept Verification
Evaluate the candidate against six gates:
1. **Meaning:** does it preserve the original purpose?
2. **Truth:** are claims, sources, uncertainty, and verification status represented honestly?
3. **Causality:** can triggers, dependencies, and outcomes be traced?
4. **Inspection:** can users inspect purpose, inputs, outputs, ownership, state, history, and evidence?
5. **State:** are status and transitions understandable and valid?
6. **World fit:** does it connect to the existing universe without contradicting its rules?

Each gate returns **pass**, **fail**, or **needs-evidence**, with a reason. Only candidates passing required gates may be marked **accepted**. Acceptance is not the same as software implementation or runtime verification.

### 14. Concept Library
Persist accepted concepts as versioned reusable records. Preserve provenance, schema version, revision history, dependencies, visual language, behavior, state transitions, truth rules, interactions, and verification results. Superseded concepts should remain traceable rather than silently disappearing.

### 15. Deploy to Universe
Deployment means publishing a concept into the canonical Strange Studio design model. It must be a gated action, with a recorded reviewer/owner when applicable, version, validation report, and rollback/supersession path. It does **not** mean deploying code or a live service unless a separate software release process confirms that action.

## 4. Concept record / DNA

The canonical machine-readable shape is defined in [`schemas/concept.schema.json`](../schemas/concept.schema.json). A concept record should capture:
- identity and purpose;
- seed and functional meaning;
- human model and rationale;
- observable objects, behaviors, and events;
- truth classification, evidence, and verification;
- triggers, dependencies, and outcomes;
- spatial level and parent;
- visual language and motion policy;
- interactions and state machine;
- world relationships and verification gates;
- lifecycle status and history.

## 5. Master equation

```text
Concept =
  Meaning
+ Function
+ Human Model
+ Truth
+ Causality
+ Space
+ Visualization
+ Interaction
+ States
+ Verification
```

This is a design checklist, not arithmetic. Each term is a required responsibility whose details can be inspected independently.

## 6. Example: Memory

| Stage | Candidate output |
|---|---|
| Seed | Agent memory |
| Meaning | Retain and retrieve information across work |
| Functions | Store, retrieve, organize, relate |
| Human model | Library / archive |
| Observable form | Books or records, shelves, catalog, source links |
| Truth | Each record carries provenance and verification state |
| Causality | Retrieval request → authorized search → matching records returned |
| Space | Memory City, within the broader knowledge world |
| Visual | Connected shelves and source-linked routes; motion only when events occur |
| Interaction | Inspect record, compare sources, retrieve into workflow |
| States | Ready, Working, Waiting, Blocked, Failed, Complete, Unknown, Simulated |
| Verification | Confirm purpose, source display, causal trace, inspection, states, and world fit |

This example illustrates the design process. It does not assert that a production Memory City service currently exists.

## 7. Current implementation boundary

**Specified in this document:** the 14-stage pipeline, acceptance gates, lifecycle boundaries, and concept record requirements.

**Added as repository artifact:** a JSON Schema for validating the shape of a concept record.

**Not yet established as implemented:** an automated CGE runtime, metaphor-scoring service, world generator, persistent concept library, causal graph engine, UI machine, or deploy-to-universe service.

The next engineering increment should implement deterministic schema and gate validation, add fixture-based tests, then expose the validated records through the UI. Generative model integration should come after these controls exist.
