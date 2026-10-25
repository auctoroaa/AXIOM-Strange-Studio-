export const REQUIRED_OIOS_PRIMITIVES = [
  "Agent", "Workflow", "Knowledge", "Tool", "Event",
  "Verification", "Context", "Unknown", "Delivery",
] as const;

export type PrimitiveValidationResult = {
  valid: boolean;
  missing: string[];
  empty: string[];
};

export function validatePrimitiveCoverage(input: unknown): PrimitiveValidationResult {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { valid: false, missing: [...REQUIRED_OIOS_PRIMITIVES], empty: [] };
  }
  const root = input as Record<string, unknown>;
  const ontology = root.ontology;
  const primitives = typeof ontology === "object" && ontology !== null && !Array.isArray(ontology)
    ? (ontology as Record<string, unknown>).primitives
    : undefined;
  if (typeof primitives !== "object" || primitives === null || Array.isArray(primitives)) {
    return { valid: false, missing: [...REQUIRED_OIOS_PRIMITIVES], empty: [] };
  }
  const record = primitives as Record<string, unknown>;
  const missing = REQUIRED_OIOS_PRIMITIVES.filter((key) => !(key in record));
  const empty = REQUIRED_OIOS_PRIMITIVES.filter((key) =>
    key in record && (typeof record[key] !== "string" || record[key].trim().length === 0),
  );
  return { valid: missing.length === 0 && empty.length === 0, missing, empty };
}
