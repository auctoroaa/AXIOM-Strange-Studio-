import { describe, expect, it } from "vitest";
import { decideCertification } from "./certification-decision";

describe("AXIOM-AAA certification decision", () => {
  it("certifies only when all mandatory gates pass with known evidence", () => {
    expect(decideCertification([{ gateId: "schema", mandatory: true, status: "PASS", evidenceRefs: ["e1"] }], new Set(["e1"])).status).toBe("CERTIFIED");
  });
  it("blocks when a required gate is blocked", () => {
    expect(decideCertification([{ gateId: "runtime", mandatory: true, status: "BLOCKED", evidenceRefs: [] }], new Set()).status).toBe("BLOCKED");
  });
  it("fails when a passing gate cites nonexistent evidence", () => {
    expect(decideCertification([{ gateId: "schema", mandatory: true, status: "PASS", evidenceRefs: ["missing"] }], new Set()).status).toBe("FAILED");
  });
});
