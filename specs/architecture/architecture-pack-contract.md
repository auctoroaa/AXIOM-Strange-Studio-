# Architecture Pack Contract (APC)

Version 1.0.0. A pack is a versioned declaration, not proof that declared behavior exists.

Required surface: manifest and schema version; ontology and forward/reverse mappings; workflow templates; resource definitions and accounting rules; events; validation rules; compatibility requirements; learning objectives; outputs and success condition.

Schema validation establishes structure only. Semantic validation checks relationships. Runtime validation compares requirements against machine-readable engine contracts. Execution validation requires controlled runs and observable outcomes. Evidence is collected separately. AXIOM-AAA alone makes certification decisions.

Packs may add rules but cannot weaken the trusted baseline: primitive coverage, truth mapping, projection round-trip, workflow verification, event observability, runtime compatibility, evidence integrity and provenance.

The apiVersion identifies the manifest contract version. metadata.version identifies the pack version and follows Semantic Versioning. Missing contracts or evidence yield BLOCKED, not PASS. No quality score overrides a failed or blocked mandatory gate.
