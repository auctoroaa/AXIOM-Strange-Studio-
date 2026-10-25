import Ajv2020, { type ErrorObject } from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import architecturePackSchema from "../../../specs/schemas/architecture-pack.schema.json";

export type ValidationIssue = { ruleId: string; path: string; message: string };
export type SchemaValidationResult =
  | { valid: true; issues: [] }
  | { valid: false; issues: ValidationIssue[] };

const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);
const validateArchitecturePack = ajv.compile(architecturePackSchema);

export function validateArchitecturePackSchema(input: unknown): SchemaValidationResult {
  if (validateArchitecturePack(input)) return { valid: true, issues: [] };
  const issues = (validateArchitecturePack.errors ?? []).map((error: ErrorObject) => ({
    ruleId: "APC-SCHEMA-001",
    path: error.instancePath || "/",
    message: error.message ?? "Schema validation failed",
  }));
  return { valid: false, issues };
}
