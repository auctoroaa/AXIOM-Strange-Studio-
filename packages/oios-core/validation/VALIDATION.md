# Validation Contract

## Schema fixtures

Workflow valid: `{ "id": "wf-1", "name": "Index knowledge", "state": "pending", "requiredCapabilities": ["ingest"], "dependencies": [] }`.

Workflow invalid: `{ "id": "", "name": "Bad", "state": "teleporting", "requiredCapabilities": [], "dependencies": [] }`.

Agent valid: `{ "id": "agent-1", "name": "Indexer", "capabilities": ["ingest"], "toolIds": ["tool-1"] }`.

Agent invalid: `{ "id": "agent-2", "name": "Bad", "capabilities": [], "toolIds": [] }` when the cross-field workflow requires the ingest capability.

## Rules

- Schema validator: enforce declared JSON Schema fields, enumerations, required fields, and date-time format.
- Cross-field validator: enforce CF01 through CF10 checks currently represented in its input contract. CF06 resource access is enforced by the district service; CF11 is an architecture principle; CF12 is enforced by projection validation.
- Projection validator: require all nine Architecture Pack primitive mappings and reject non-reversible mappings.
- Observability validator: every non-informational event needs an observable effect.
- Verified claims require evidence in the Verification domain model.

## Expected errors

Tests assert invalid schema errors are non-empty; missing agent capability produces `CF01 workflow <id> has no capable agent`; missing resource fields produce `CF05 resource <id> lacks <field>`; lossy projections produce `CF12 mapping <metaphor> is not reversible`; invisible events produce `CF08 event must create observable effects or be informational`.
