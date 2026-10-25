import { describe, expect, it } from "vitest";
import { validateWorkflowGraph } from "./workflow-graph-validator";

describe("validateWorkflowGraph", () => {
  it("accepts a connected graph with a terminal stage", () => {
    expect(validateWorkflowGraph([{ id: "Seed", next: ["Verify"] }, { id: "Verify", terminal: true }])).toEqual([]);
  });
  it("reports unknown targets, dead ends and missing terminal states", () => {
    const issues = validateWorkflowGraph([{ id: "Seed", next: ["Missing"] }, { id: "Orphan" }]);
    expect(issues.some((issue) => issue.ruleId === "APC-WORKFLOW-002")).toBe(true);
    expect(issues.some((issue) => issue.ruleId === "APC-WORKFLOW-003")).toBe(true);
    expect(issues.some((issue) => issue.ruleId === "APC-WORKFLOW-005")).toBe(true);
  });
});
