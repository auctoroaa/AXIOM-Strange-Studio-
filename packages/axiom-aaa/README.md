# axiom-aaa

AXIOM Architecture Assurance Authority. Owns trusted certification decisions, certificate issuance and verification, lifecycle, revocation, expiration, governance ledger and audit history. Only this package may issue or revoke architecture certification artifacts.

The initial decision function is a deterministic policy gate only. It does not sign or persist certificates. Certificate issuance must later require a trusted signing provider, a manifest hash, a policy version, and verified evidence references.

Status: decision logic scaffold implemented; signing, persistence, revocation ledger and full lifecycle remain pending.
