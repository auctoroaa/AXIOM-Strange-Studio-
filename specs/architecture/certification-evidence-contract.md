# Certification Evidence Contract (CEC)

Version 1.0.0. Evidence collection implementation is pending.

Each rule evaluation records a unique evidence ID, rule ID, result, artifact hash, validator version, schema version when applicable, timestamp, source, details and supporting artifact references.

Results: PASS, FAIL, BLOCKED, UNVERIFIED, NOT_APPLICABLE. PASS requires valid supporting evidence. FAIL means a required assertion failed. BLOCKED means a prerequisite is missing or unavailable. UNVERIFIED means no sufficient evaluation occurred. NOT_APPLICABLE requires trusted-policy permission and a recorded reason.

Hash exact evaluated artifact bytes. Record tool and validator versions. Link execution traces to the same artifact hash. Reject missing, malformed or mismatched evidence. A manifest declaration is not evidence of runtime behavior. Evidence is not trust; AXIOM-AAA consumes validated evidence and applies trusted policy.
