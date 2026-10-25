import { describe, expect, it } from "vitest";
import { validateArchitecturePackSchema } from "./schema-validator";

describe("validateArchitecturePackSchema", () => {
  it("rejects an empty manifest before semantic validation", () => {
    const result = validateArchitecturePackSchema({});
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.issues.length).toBeGreaterThan(0);
  });
  it("rejects a non-object input", () => {
    expect(validateArchitecturePackSchema(null).valid).toBe(false);
  });
});
