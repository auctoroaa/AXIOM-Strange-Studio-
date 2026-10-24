# Contributing to Strange Studio

Thank you for helping make Strange Studio more observable, reliable, and honest.

## Before changing code

1. Read the [architecture](docs/architecture.md), [visual system](docs/visual-system.md), and [truth and verification policy](docs/truth-and-verification.md).
2. Identify whether the change is implemented behavior, proposed architecture, or demonstration-only behavior.
3. Keep changes scoped. Do not silently replace architectural requirements or remove existing behavior.
4. Never introduce credentials, tokens, private data, or production secrets into source control.

## Development setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Before submitting:

```bash
npm run typecheck
npm test
npm run build
```

## Engineering expectations

- Use TypeScript types for domain entities and state transitions.
- Keep simulated data explicitly labeled in the interface and documentation.
- A visual state must not imply a live event unless it is backed by a real event source.
- Preserve unknown, unavailable, blocked, failed, and low-confidence states.
- Keep failure history inspectable; do not rewrite failed attempts as success.
- Add or update tests for behavior changes and regression fixes.
- Keep accessible labels, keyboard interaction, responsive behavior, and reduced-motion support.
- Do not claim an integration is live until its adapter, error handling, and relevant tests exist.
- Update documentation and roadmap checkboxes only when the corresponding evidence supports the change.

## Pull requests

Use the pull request template. Explain the problem, solution, verification performed, and remaining limitations. Include screenshots for material UI changes when possible. Report commands actually run and their results; do not infer success from configuration alone.

## Architectural changes

Significant decisions should be recorded as short Architecture Decision Records (ADRs) in `docs/decision-records/`. Each ADR should include context, decision, alternatives, consequences, and status.
