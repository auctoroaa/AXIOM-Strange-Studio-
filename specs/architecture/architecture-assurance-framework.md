# Architecture Assurance Framework (AAF)

AAF orchestrates validation and evidence production. It does not issue certificates or independently declare trust.

Pipeline: 0 Safe parse; 1 Schema validation; 2 Traceability validation; 3 Ontology and primitive validation; 4 Cross-field and workflow-semantics validation; 5 Resource conservation; 6 Projection round-trip; 7 Runtime contract validation; 8 Sandboxed execution; 9 Evidence integrity and provenance; 10 AXIOM-AAA trust decision.

Run checks only when prerequisites are valid. Preserve findings and report downstream blocked checks. BLOCKED is not PASS. A mandatory FAIL or BLOCKED prevents certification. Quality scoring occurs only after mandatory gates pass. Pack-defined rules cannot weaken the OIOS mandatory baseline.

Every required manifest field maps to a schema pointer, rule ID, validator, runtime contract where relevant, and evidence requirement. Unmapped fields block certification unless trusted policy explicitly exempts them.
