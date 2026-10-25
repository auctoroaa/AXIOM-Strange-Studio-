import { describe, expect, it } from "vitest";
import { evaluateMandatoryGates } from "./gate-evaluator";

describe("evaluateMandatoryGates", () => {
  it("requires evidence references for every passing mandatory gate", () => {
    const result = evaluateMandatoryGates([{ gateId: "schema", mandatory: true, status: "PASS", evidenceRefs: [] }]);
    expect(result.eligibleForCertification).toBe(false);
    expect(result.status).toBe("FAILED");
  });
  it("blocks certification when evidence is blocked", () => {
    expect(evaluateMandatoryGates([{ gateId: "runtime", mandatory: true, status: "BLOCKED", evidenceRefs: [] }]).status).toBe("BLOCKED");
  });
  it("never lets a score or optional gate override a mandatory failure", () => {
    expect(evaluateMandatoryGates([{ gateId: "ontology", mandatory: true, status: "FAIL", evidenceRefs: ["ev-1"] }, { gateId: "style", mandatory: false, status: "PASS", evidenceRefs: ["ev-2"] }]).eligibleForCertification).toBe(false);
  });
});
