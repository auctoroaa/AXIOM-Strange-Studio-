# Strange Studio Architecture

**Status:** Proposed architecture with a frontend prototype.  
**Authority:** The OIOS architecture specification supplied for this project.

## 1. System purpose

Strange Studio makes digital operations understandable by exposing their state, evidence, dependencies, and outcomes. The environment is a visual interface over a system model, not a substitute for that model.

## 2. Three synchronized views

### Observatory
The global awareness layer. It aggregates activity, system state, evidence, confidence, validation status, and causal relationships. It should only display events received from a defined source.

### Agent Mind
The cognitive and execution view: goal engine, planner, reasoner, decision engine, reflection, validation, memory retrieval, and tool selection. A future runtime must expose explicit event contracts for each stage.

### Observable Districts
The spatial view of knowledge and work:
- **Memory City:** Great Library, Archive Tower, Source Hall, Connection Gardens, Knowledge Routes.
- **Workshop District:** Blueprint Hall, Builder Guild, Toolbox Forge, Assembly Chambers, Verification Station.
- **Delivery Harbor:** Verification Dock, Approval Gate, Launch Pier, Delivery Fleet.

### Transparent Machine
The infrastructure view: compute/runtime, model layer, memory fabric, API network, storage, networking, databases, and security. Every displayed component must be backed by real inventory or marked as illustrative.

## 3. Intelligence Core

The Intelligence Core is the conceptual anchor for shared state, evidence, verification, and navigation. It is not an all-knowing model. It should link to:
- current workflow state;
- source records and provenance;
- dependency graph;
- verification results;
- event history and timestamps;
- confidence and uncertainty labels.

The Core must not silently upgrade an assumption to a fact.

## 4. Workflow lifecycle

`Request → Planning → Research → Tool Use → Execution → Verification → Delivery`

Retry and failure routes must be explicit. Each stage should emit a timestamped event with a stable identifier, workflow identifier, status, source, and relevant references. Retries must preserve attempt history rather than erase failed attempts.

## 5. Suggested logical components

| Component | Responsibility | State of work |
|---|---|---|
| Domain model | Typed entities, statuses, truth classifications | Prototype-level definitions |
| Event intake | Accept and validate runtime events | Proposed |
| Observable graph | Link entities, events, and dependencies | Proposed |
| Truth/provenance service | Track source, confidence, and verification | Proposed |
| Workflow orchestrator | Schedule steps, retries, cancellation | Proposed |
| Tool gateway | Policy-checked execution of external tools | Proposed |
| Persistence | Store events, workflows, and evidence | Proposed |
| UI projections | Mind, City, Machine, Observatory views | Dashboard prototype |
| Delivery gate | Enforce required checks before release | Proposed |

## 6. Event contract direction

A production event should include at minimum:
- `id`: globally unique event ID;
- `occurredAt`: UTC timestamp;
- `workflowId` and optional `taskId`;
- `type`: stable event type;
- `source`: runtime or connector that emitted it;
- `status`: state transition, if applicable;
- `correlationId`: request trace identifier;
- `payload`: validated, versioned event data.

Do not treat browser animation callbacks as system events. The runtime is the authority for execution state.

## 7. Proposed stack

- Frontend: React, TypeScript, Vite for the initial prototype.
- Visualization: CSS/SVG initially; add Three.js / React Three Fiber only when 3D improves comprehension.
- State: typed domain model first; choose a state store when live event flows require it.
- Backend: Node.js service boundary, with PostgreSQL for durable records and Redis only if measured queue/cache needs justify it.
- Integration: explicit adapters for model providers, tools, retrieval, and infrastructure telemetry.
- Quality: type-checking, unit tests, production build, integration tests for each real connector.

This is a direction, not a claim that these services are already present.

## 8. Architectural invariants

1. One canonical state model feeds every view.
2. Every displayed state has provenance.
3. Unknown and unavailable are first-class states.
4. Simulated data is visibly labeled.
5. Failed attempts remain inspectable.
6. Verification requirements are explicit and versioned.
7. Delivery is blocked when required checks fail or are missing.
8. Secrets never enter client bundles or committed files.
