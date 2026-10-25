import Ajv2020 from "ajv/dist/2020.js";
import runtimeContractSchema from "../../specs/schemas/runtime-contract.schema.json";

export type RuntimeContract = {
  engine: string; version: string; status: "declared" | "implemented" | "runtime-verified" | "deprecated";
  capabilities: string[]; events: string[]; states: string[]; apis?: string[];
};
export type ContractCheck = { valid: boolean; blocked: boolean; issues: string[] };
const ajv = new Ajv2020({ allErrors: true, strict: false });
const validateSchema = ajv.compile(runtimeContractSchema);

export function validateRuntimeContract(input: unknown): ContractCheck {
  if (!validateSchema(input)) {
    return { valid: false, blocked: false, issues: (validateSchema.errors ?? []).map((e) => `${e.instancePath || "/"} ${e.message ?? "invalid"}`) };
  }
  return { valid: true, blocked: (input as RuntimeContract).status !== "runtime-verified", issues: [] };
}

export function checkContractRequirements(contract: RuntimeContract | undefined, requirements: {
  capabilities?: string[]; events?: string[]; states?: string[]; minimumStatus?: "declared" | "implemented" | "runtime-verified";
}): ContractCheck {
  if (!contract) return { valid: false, blocked: true, issues: ["Required runtime contract is unavailable."] };
  const issues: string[] = [];
  for (const value of requirements.capabilities ?? []) if (!contract.capabilities.includes(value)) issues.push(`Missing capability: ${value}`);
  for (const value of requirements.events ?? []) if (!contract.events.includes(value)) issues.push(`Missing event: ${value}`);
  for (const value of requirements.states ?? []) if (!contract.states.includes(value)) issues.push(`Missing state: ${value}`);
  const rank = { declared: 0, implemented: 1, "runtime-verified": 2, deprecated: -1 } as const;
  if (requirements.minimumStatus && rank[contract.status] < rank[requirements.minimumStatus]) issues.push(`Contract status ${contract.status} does not meet minimum ${requirements.minimumStatus}.`);
  return { valid: issues.length === 0, blocked: false, issues };
}
