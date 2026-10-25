# AXIOM-AAA: AXIOM Architecture Assurance Authority

AXIOM-AAA is the sole authority allowed to issue, verify, expire or revoke architecture certification artifacts and make certification trust decisions.

Separation of duties: validators produce findings; Evidence Engine collects and integrity-checks evidence; Architecture Assurance orchestrates gates; AXIOM-AAA applies trusted policy and issues the decision; Observatory displays results but does not decide.

CERTIFIED requires every mandatory gate to PASS, valid evidence bound to the exact artifact hash, verified runtime compatibility where required, and a valid certificate signature. A score never overrides a mandatory gate.

States: UNVERIFIED, CERTIFIED, BLOCKED, FAILED, EXPIRED, REVOKED. A certificate is scoped to artifact identity, version, hash, policy version and validity window. Material changes trigger re-evaluation. Revocation preserves history and reason.

Signing keys must be provided by a trusted key provider and never embedded in manifests, packs, fixtures or logs. Use reviewed cryptographic libraries. Key rotation and compromise response are policy-controlled.
