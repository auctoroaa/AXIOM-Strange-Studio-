# Dr. Oops Expedition Contract

**Status:** Proposed contract; runtime and conformance tests pending.

## Required run envelope

Each expedition records:

- `runId`: unique, stable identifier.
- `specimenIds`: specimens read, generated, mutated, or tested.
- `targetAllowlist`: exact disposable resources the run may touch.
- `sourceRevision` and `environmentVersion`.
- `seed`: deterministic seed where the operation supports seeded behavior.
- `hypothesis`, `expectedOutcome`, and predeclared acceptance criteria.
- `faultPlan`: declared fault injections, or an explicit empty list.
- `resourceLimits`: wall-clock, memory, concurrency, and specimen-count ceilings.
- `observations`: actual outcomes, timestamps, and evidence references.
- `recovery`: cleanup/rollback result and isolation status.
- `classification`: experiment result, separate from specimen classification.

## Run states

`draft -> planned -> authorized -> running -> evidence-captured -> evaluated -> archived`

Terminal alternatives include `blocked`, `failed`, and `aborted`. Invalid transitions must be rejected. An interrupted run must not be silently marked successful.

## Non-negotiable invariants

1. No run starts without an explicit target allowlist and resource limits.
2. No production or canonical record is a mutation target.
3. Every mutation creates a descendant; parent records are immutable.
4. Injected faults and naturally observed faults are separately tagged.
5. Evidence is persisted before disposable state is reset.
6. Missing evidence remains missing; it is never synthesized.
7. A successful run means procedural integrity and recovery succeeded, not that the specimen passed.
8. A verification result applies only to declared criteria and recorded conditions.
9. A legendary nomination cannot bypass independent verification.
10. When containment or provenance cannot be established, the run blocks or aborts.

## First implementation slice

1. Pure specimen and expedition types.
2. Schema validation and transition validation.
3. Seeded candidate generator with a strict count limit.
4. In-memory disposable sandbox adapter for tests only.
5. Append-only run/evidence events.
6. Tests for lineage immutability, invalid transitions, limits, abort behavior, and honest outcome classification.

Persistent storage, UI, autonomous scheduling, external-system exploration, and production execution are out of scope for this first slice.
