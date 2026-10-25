import { describe, expect, it } from "vitest";
import { isEvidenceRecord } from "./evidence-model";

describe("isEvidenceRecord", () => {
  it("accepts a complete hash-bound record", () => {
    expect(isEvidenceRecord({ evidenceId: "e1", ruleId: "R1", result: "PASS", artifactHash: `sha256:${"a".repeat(64)}`, validatorVersion: "1.0.0", timestamp: "2026-10-25T00:00:00Z", source: "unit-test" })).toBe(true);
  });
  it("rejects missing fields and malformed hashes", () => {
    expect(isEvidenceRecord({ evidenceId: "e1", artifactHash: "sha256:nope" })).toBe(false);
  });
});
