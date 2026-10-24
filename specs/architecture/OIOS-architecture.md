# OIOS Architecture Specification

**Status:** Proposed system specification; current repository includes a dashboard prototype, not a production runtime.

## Purpose

Make software and AI operations understandable through shared state, provenance, causal links, inspectable workflows, and verified delivery.

## Logical areas

- Observatory: awareness, event history, and truth indicators.
- Agent Mind: planning, reasoning, memory, tools, reflection, and verification.
- Memory City: knowledge records and source relationships.
- Workshop: plans, execution, tools, and artifacts.
- Railway: workflow routing and state transitions.
- Transparent Machine: runtime, models, APIs, storage, and infrastructure.
- Delivery Harbor: verification, approval, release, and artifact handoff.
- Concept Generation Engine: governed invention of observable concepts.

## Invariants

1. A canonical state model feeds all views.
2. Unknown and unavailable are first-class states.
3. Simulations are distinct from live observations.
4. Operational states have provenance.
5. Verification, approval, and delivery are distinct.
6. Failed attempts remain inspectable.
7. UI must not imply unconnected or untested integrations.
