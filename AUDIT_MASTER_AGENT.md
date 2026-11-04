# Master Agent Audit Entry Point

Purpose: evidence-labelled audit handoff for the Strange Studio repository and its relationship to the Floot workflow and Codex execution path.

## Read in order
1. `audit/master-agent/repository-map.md`
2. `audit/master-agent/floot-codex-workflow.md`
3. `audit/master-agent/evidence-ledger.md`
4. `audit/master-agent/audit-checklist.md`

## Audit rules
- Inspect before editing. Keep the audit separate from implementation work.
- Separate repository evidence, Floot evidence, Codex evidence, and assumptions.
- Do not infer that a Floot project is part of this Git repository.
- Distinguish specified, source-present, executed, verified, and deployed.
- Never report CI as passing until the final run conclusion and relevant steps are retrieved.
- Do not expose secrets or private data in reports.

## Known boundary
Floot UPOE Construction Desk project ID: `a427130a-6acc-423d-85e6-501f1fd7b827`. Current Floot files could not be inspected during this preparation because the Floot tool returned a daily build-action limit response. Details beyond prior recorded context remain unverified. No end-to-end Floot-to-Codex integration is verified by this package.

## Target
- Repository: `auctoroaa/AXIOM-Strange-Studio-`
- Main branch: `main`
- Handoff branch: `audit/master-agent-floot-codex-handoff`
- Product: Observable Intelligence Operating System (OIOS)
