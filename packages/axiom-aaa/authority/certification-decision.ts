export type GateState = "PASS" | "FAIL" | "BLOCKED" | "UNVERIFIED" | "NOT_APPLICABLE";
export type GateEvidence = { gateId: string; mandatory: boolean; status: GateState; evidenceRefs: string[] };
export type CertificationDecision = { status: "CERTIFIED" | "FAILED" | "BLOCKED" | "UNVERIFIED"; reasons: string[] };

export function decideCertification(gates: GateEvidence[], requiredEvidenceIds: Set<string>): CertificationDecision {
  const mandatory = gates.filter((gate) => gate.mandatory);
  if (mandatory.length === 0) return { status: "BLOCKED", reasons: ["Trusted policy supplied no mandatory gates."] };
  const reasons: string[] = [];
  for (const gate of mandatory) {
    if (gate.status !== "PASS") reasons.push(`${gate.gateId} did not pass: ${gate.status}`);
    if (gate.status === "PASS" && gate.evidenceRefs.length === 0) reasons.push(`${gate.gateId} has no evidence references`);
    for (const ref of gate.evidenceRefs) if (!requiredEvidenceIds.has(ref)) reasons.push(`${gate.gateId} references unavailable evidence: ${ref}`);
  }
  if (mandatory.some((gate) => gate.status === "BLOCKED")) return { status: "BLOCKED", reasons };
  if (mandatory.some((gate) => gate.status === "UNVERIFIED")) return { status: "UNVERIFIED", reasons };
  if (mandatory.some((gate) => gate.status === "FAIL" || gate.status === "NOT_APPLICABLE") || reasons.length > 0) return { status: "FAILED", reasons };
  return { status: "CERTIFIED", reasons: [] };
}
