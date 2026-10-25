export type EvidenceResult = "PASS" | "FAIL" | "BLOCKED" | "UNVERIFIED" | "NOT_APPLICABLE";
export type EvidenceRecord = {
  evidenceId: string;
  ruleId: string;
  result: EvidenceResult;
  artifactHash: string;
  validatorVersion: string;
  schemaVersion?: string;
  timestamp: string;
  source: string;
  details?: Record<string, unknown>;
  evidenceRefs?: string[];
};

export function isEvidenceRecord(value: unknown): value is EvidenceRecord {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return typeof record.evidenceId === "string" && record.evidenceId.length > 0
    && typeof record.ruleId === "string" && record.ruleId.length > 0
    && ["PASS", "FAIL", "BLOCKED", "UNVERIFIED", "NOT_APPLICABLE"].includes(String(record.result))
    && typeof record.artifactHash === "string" && /^sha256:[a-f0-9]{64}$/.test(record.artifactHash)
    && typeof record.validatorVersion === "string" && typeof record.timestamp === "string"
    && !Number.isNaN(Date.parse(record.timestamp)) && typeof record.source === "string";
}
