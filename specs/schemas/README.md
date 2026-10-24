# Strange Studio Canonical Schemas

These JSON Schema Draft 2020-12 files define the initial shared data contracts for OIOS concepts, state, truth, builders, districts, workflows, agent minds, and concept-generation records.

## Files

- `concept.schema.json`: observable concept records and links to truth and state.
- `state.schema.json`: named lifecycle states and their visual representation.
- `truth.schema.json`: classification, confidence, evidence, sources, and validation date.
- `builder.schema.json`: builder role, state, tools, blueprint, memory links, and location.
- `district.schema.json`: canonical district identifiers and contained structures/routes/builders.
- `workflow.schema.json`: workflow steps, stations, dependencies, and state.
- `agent-mind.schema.json`: cognitive core, memory constellation, tool galaxy, verification, and delivery.
- `concept-engine.schema.json`: seed-to-concept pipeline record.

## Contract notes

- Relative `$ref` values resolve against the schema file location.
- `confidence` is a numeric value from 0 to 1; it is not proof of truth.
- `verified` is a recorded status, not a substitute for retaining supporting evidence.
- `simulated` and `unknown` must remain distinct from live verified state.
- These schemas validate data shape. They do not validate factual accuracy, authorization, runtime behavior, or successful delivery.
- The current schemas intentionally follow the supplied v1 definitions. Tightening required fields or forbidding additional properties should be a separately reviewed schema-version change.
