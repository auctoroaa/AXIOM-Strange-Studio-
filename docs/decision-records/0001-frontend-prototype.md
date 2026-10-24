# ADR 0001: Start with a 2D React/TypeScript Prototype

- **Status:** Accepted for the initial prototype
- **Date:** 2026-10-25

## Context

Strange Studio's intended interface describes an observability environment with Mind, City, and Machine views. The product's governing requirement is that visual state must reflect real system state and expose evidence rather than manufacture activity.

## Decision

Start with a responsive React and TypeScript dashboard using Vite. Establish the information hierarchy, truth labels, event presentation, inspector interaction, and verification language before introducing a 3D scene or live runtime.

## Alternatives considered

- **Start with a full 3D environment:** deferred because it adds rendering and interaction complexity before the state model and event contracts exist.
- **Start with a production backend:** deferred until the domain model and event contracts are specified and testable.
- **Build only static mockups:** rejected as the sole first step because a runnable frontend provides a foundation for interaction and automated tests.

## Consequences

- The repository has a runnable frontend structure and a straightforward local development workflow.
- Current workflow, activity, and truth records are local demonstration fixtures, not live system observations.
- The UI must not be described as a functioning agent orchestration or infrastructure monitoring platform.
- A future event contract and canonical state model must precede live event-driven views.
- The stack can be revisited when real integration requirements and measurements justify a change.
