import { describe, expect, it } from "vitest";
import { validatePrimitiveCoverage } from "./primitive-validator";

describe("validatePrimitiveCoverage", () => {
  it("accepts all nine non-empty OIOS primitive mappings", () => {
    const primitives = Object.fromEntries(["Agent","Workflow","Knowledge","Tool","Event","Verification","Context","Unknown","Delivery"].map((key) => [key, key]));
    expect(validatePrimitiveCoverage({ ontology: { primitives } }).valid).toBe(true);
  });
  it("reports missing and empty mappings", () => {
    const result = validatePrimitiveCoverage({ ontology: { primitives: { Agent: "" } } });
    expect(result.valid).toBe(false);
    expect(result.missing).toContain("Workflow");
    expect(result.empty).toContain("Agent");
  });
});
