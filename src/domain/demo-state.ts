export type WorkflowStatus = "Complete" | "Working" | "Waiting" | "Blocked";
export type TruthKind = "Fact" | "Assumption" | "Prediction" | "Simulation";

export interface WorkflowStep {
  label: string;
  status: WorkflowStatus | "Pending";
}

export interface ActivityEvent {
  id: string;
  time: string;
  title: string;
  detail: string;
  status: "verified" | "active" | "warning";
}

export interface TruthRecord {
  kind: TruthKind;
  title: string;
  detail: string;
}

export const demoWorkflow: WorkflowStep[] = [
  { label: "Request", status: "Complete" },
  { label: "Planning", status: "Complete" },
  { label: "Research", status: "Complete" },
  { label: "Tool use", status: "Working" },
  { label: "Execution", status: "Pending" },
  { label: "Verification", status: "Pending" },
  { label: "Delivery", status: "Pending" },
];

export const demoEvents: ActivityEvent[] = [
  { id: "evt-104", time: "14:32:08", title: "Blueprint parsed", detail: "Local demonstration workflow · stage 2", status: "verified" },
  { id: "evt-103", time: "14:32:05", title: "Research stage completed", detail: "Fixture event · no external search executed", status: "verified" },
  { id: "evt-102", time: "14:31:58", title: "Tool gateway selected", detail: "Illustrative tool selection · not connected", status: "active" },
  { id: "evt-101", time: "14:31:52", title: "Request received", detail: "Example request loaded from local fixture", status: "verified" },
];

export const demoTruth: TruthRecord[] = [
  { kind: "Fact", title: "Workflow has 7 defined stages", detail: "Confirmed by the local demo fixture." },
  { kind: "Assumption", title: "A tool adapter will be needed", detail: "Architecture proposal, not runtime evidence." },
  { kind: "Prediction", title: "Verification is the next required gate", detail: "Based on the declared workflow order." },
  { kind: "Simulation", title: "Tool use is marked active", detail: "Illustrative state only. No real tool is running." },
];
