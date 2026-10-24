# Truth, Provenance, and Verification

## Truth classifications

### Fact
A claim supported by cited evidence or a verified system record. Store provenance and the method by which it was checked.

### Assumption
A working premise not yet established. Keep it visibly labeled and identify how it could be tested.

### Prediction
A forward-looking estimate. Include its basis, timestamp, and uncertainty when available. A prediction is not an observed result.

### Simulation
An artificial or demonstration state. Mark it as simulated in the data model and in every view where it appears.

## Confidence

Confidence is metadata about the strength of support, not a replacement for evidence. Unknown confidence must remain unknown. Avoid implying that a numerical confidence score is calibrated unless calibration has been tested.

## Verification lifecycle

1. Define acceptance criteria before execution.
2. Record the input, version, and relevant environment.
3. Execute the check and preserve its output.
4. Store pass/fail/blocked status, timestamp, and verifier identity.
5. Link the result to the exact artifact/version checked.
6. Re-run relevant checks when the artifact changes.
7. Permit delivery only when all required checks pass and no required result is missing.

## Delivery gate

The gate should return a structured decision:
- **Approved:** all required checks passed for the exact artifact version.
- **Rejected:** at least one required check failed.
- **Blocked:** a required check is missing, unavailable, or inconclusive.

Never convert Blocked into Approved by default. A human approval, where required, is a separate recorded event.

## Auditability

Preserve append-only event history where practical. Corrections should be new records that reference the superseded claim, not silent edits that erase the history. Access control, retention, privacy, and deletion policies still apply.

## Prototype honesty

The current dashboard's values are demonstration data. They are not live measurements, provider results, real model confidence, or proof of deployment.
