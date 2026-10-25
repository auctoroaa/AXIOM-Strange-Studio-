import { describe, expect, it } from "vitest";
import { checkContractRequirements, validateRuntimeContract } from "./contract-validator";

const contract = { engine: "sample", version: "1.0.0", status: "runtime-verified" as const, capabilities: ["execute"], events: ["Finished"], states: ["READY"], apis: [] };
describe("runtime contract validation", () => {
  it("does not treat declared status as runtime verified", () => {
    expect(validateRuntimeContract({ ...contract, status: "declared" }).blocked).toBe(true);
  });
  it("blocks when the contract is missing", () => {
    expect(checkContractRequirements(undefined, { capabilities: ["execute"] }).blocked).toBe(true);
  });
  it("checks requested capabilities, events and states", () => {
    const result = checkContractRequirements(contract, { capabilities: ["execute", "retry"], events: ["Finished"], states: ["READY"] });
    expect(result.valid).toBe(false);
    expect(result.issues).toContain("Missing capability: retry");
  });
});
