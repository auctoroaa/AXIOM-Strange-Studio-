# Validation Plan

1. Record repository branch, commit SHA and timestamp.
2. Inspect architecture documents and compare them with source files.
3. Trace UI data sources and distinguish live API responses from fixtures.
4. Retrieve current CI status for the exact commit. Record type-check, test and build outcomes separately.
5. Inspect the current Floot project tree and database/workflow code when access is available.
6. Check current Codex environments and tasks; do not assume the Floot project is connected.
7. Run a controlled end-to-end test only if a real connector is found.
8. Report evidence, failures, blockers and unresolved items. Do not claim deployment without target and revision evidence.
