# AXIOM-AAA Certification State Machine

UNVERIFIED: no completed decision. CERTIFIED: all mandatory gates passed with valid evidence bound to the artifact hash. BLOCKED: required evidence or dependency unavailable. FAILED: at least one mandatory gate failed. EXPIRED: validity window elapsed. REVOKED: a previously issued certificate is no longer trusted.

Transitions: UNVERIFIED -> CERTIFIED | BLOCKED | FAILED. BLOCKED may return to UNVERIFIED and be reevaluated after prerequisites resolve. FAILED returns to UNVERIFIED only for a new evaluation request against a submitted artifact. CERTIFIED -> EXPIRED | REVOKED. EXPIRED -> UNVERIFIED after a fresh request. REVOKED -> UNVERIFIED only through an explicit new request; retain revocation history.

Invalidation triggers include artifact hash changes, runtime contract changes, compromised trust roots, invalid evidence and mandatory policy changes. Revocation is an auditable authority decision.
