export type GateStatus = "PASS" | "FAIL" | "BLOCKED" | "UNVERIFIED" | "NOT_APPLICABLE";
export type GateResult = { gateId: string; mandatory: boolean; status: GateStatus; evidenceRefs: string[] };
export type AssuranceDecision = { eligibleForCertification: boolean; status: "ELIGIBLE" | "FAILED" | "BLOCKED" | "UNVERIFIED"; reasons: string[] };

export function evaluateMandatoryGates(gates: GateResult[]): AssuranceDecision {
  const mandatory = gates.filter((gate) => gate.mandatory);
  if (mandatory.length === 0) return { eligibleForCertification: false, status: "BLOCKED", reasons: ["No mandatory gates were supplied."] };
  const reasons: string[] = [];
  for (const gate of mandatory) {
    if (gate.status !== "PASS") reasons.push(`${gate.gateId}: mandatory gate status is ${gate.status}`);
    if (gate.status === "PASS" && gate.evidenceRefs.length === 0) reasons.push(`${gate.gateId}: PASS has no evidence references`);
  }
  if (reasons.some((reason) => reason.includes("BLOCKED"))) return { eligibleForCertification: false, status: "BLOCKED", reasons };
  if (mandatory.some((gate) => gate.status === "BLOCKED")) return { eligibleForCertification: false, status: "BLOCKED", reasons };
  if (mandatory.some((gate) => gate.status === "UNVERIFIED")) return { eligibleForCertification: false, status: "UNVERIFIED", reasons };
  if (mandatory.some((gate) => gate.status === "FAIL") || reasons.length > 0) return { eligibleForCertification: false, status: "FAILED", reasons };
  return { eligibleForCertification: true, status: "ELIGIBLE", reasons: [] };
}
