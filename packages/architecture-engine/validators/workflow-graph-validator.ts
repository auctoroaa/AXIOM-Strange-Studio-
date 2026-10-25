export type WorkflowStage = { id: string; next?: string[]; terminal?: boolean };
export type WorkflowGraphIssue = { ruleId: string; stageId?: string; message: string };

export function validateWorkflowGraph(stages: WorkflowStage[]): WorkflowGraphIssue[] {
  const issues: WorkflowGraphIssue[] = [];
  const counts = new Map<string, number>();
  for (const stage of stages) counts.set(stage.id, (counts.get(stage.id) ?? 0) + 1);
  for (const [id, count] of counts) {
    if (!id.trim() || count > 1) issues.push({ ruleId: "APC-WORKFLOW-001", stageId: id, message: "Stage IDs must be non-empty and unique." });
  }
  const ids = new Set(stages.map((stage) => stage.id));
  for (const stage of stages) {
    for (const target of stage.next ?? []) {
      if (!ids.has(target)) issues.push({ ruleId: "APC-WORKFLOW-002", stageId: stage.id, message: `Unknown transition target: ${target}` });
    }
    if (!stage.terminal && (stage.next ?? []).length === 0) {
      issues.push({ ruleId: "APC-WORKFLOW-003", stageId: stage.id, message: "Non-terminal stage has no outgoing transition." });
    }
    if (stage.terminal && (stage.next ?? []).length > 0) {
      issues.push({ ruleId: "APC-WORKFLOW-004", stageId: stage.id, message: "Terminal stage cannot have outgoing transitions." });
    }
  }
  if (!stages.some((stage) => stage.terminal)) {
    issues.push({ ruleId: "APC-WORKFLOW-005", message: "Workflow must declare at least one terminal stage." });
  }
  if (stages.length > 0) {
    const reachable = new Set<string>();
    const byId = new Map(stages.map((stage) => [stage.id, stage]));
    const queue = [stages[0].id];
    while (queue.length) {
      const current = queue.shift()!;
      if (reachable.has(current)) continue;
      reachable.add(current);
      for (const next of byId.get(current)?.next ?? []) if (byId.has(next)) queue.push(next);
    }
    for (const stage of stages) if (!reachable.has(stage.id)) {
      issues.push({ ruleId: "APC-WORKFLOW-006", stageId: stage.id, message: "Stage is unreachable from the first declared stage." });
    }
  }
  return issues;
}
