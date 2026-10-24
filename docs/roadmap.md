# Roadmap

This roadmap separates the current prototype from future engineering work. Items move to **verified** only after code and evidence exist.

## Milestone 0: Professional repository foundation
- [x] Establish project identity and README.
- [x] Document architecture and visual system.
- [x] Document truth classification and verification requirements.
- [x] Add frontend prototype and automated CI definition.
- [ ] Confirm CI checks pass on GitHub.

## Milestone 1: Observable Core
- [ ] Define versioned domain entities and event contracts.
- [ ] Implement a canonical state reducer with deterministic transitions.
- [ ] Validate incoming events and reject invalid transitions.
- [ ] Add workflow history and correlation IDs.
- [ ] Test retries, failures, cancellation, and unknown state.

## Milestone 2: Live Observatory
- [ ] Replace local demo fixtures with a typed API contract.
- [ ] Add event ingestion and reconnection behavior.
- [ ] Show source and timestamp for every live metric.
- [ ] Distinguish no data, stale data, unavailable source, and healthy source.
- [ ] Add end-to-end tests for real state updates.

## Milestone 3: Truth and Causality
- [ ] Implement evidence records and provenance links.
- [ ] Add dependency graph and impact traversal.
- [ ] Add fact/assumption/prediction/simulation classification.
- [ ] Add inspectable confidence metadata without overstating calibration.

## Milestone 4: Execution and Tool Gateway
- [ ] Implement policy-checked tool adapters.
- [ ] Record inputs, outputs, versions, and failures.
- [ ] Add cancellation, bounded retries, backoff, and idempotency.
- [ ] Keep secrets server-side and redact sensitive payloads.

## Milestone 5: Verification and Delivery
- [ ] Define artifact-specific acceptance criteria.
- [ ] Persist check results and link them to artifact versions.
- [ ] Implement Approved / Rejected / Blocked delivery decisions.
- [ ] Add explicit approval gates where needed.
- [ ] Test that failed or missing checks cannot reach delivery.

## Milestone 6: Spatial views
- [ ] Add City, Mind, and Machine views over the same state model.
- [ ] Build accessible 2D interaction before deciding whether 3D is useful.
- [ ] Add reduced-motion and mobile navigation support.
- [ ] Measure usability before expanding visual complexity.

## Release gate

A milestone is complete only when:
- implementation is present;
- relevant automated tests pass;
- manual acceptance criteria are recorded;
- live integrations are tested against actual providers where applicable;
- documentation accurately describes limitations.
