export interface OiosWorkflow {
  id: string;
  name?: string;
  title?: string;
  status?: string;
  [key: string]: unknown;
}

export interface OiosApiState {
  connected: boolean;
  workflows: OiosWorkflow[];
  message: string;
}

const DEFAULT_API_BASE = "/api";

export async function loadOiosWorkflows(
  fetcher: typeof fetch = fetch,
  apiBase = DEFAULT_API_BASE,
): Promise<OiosApiState> {
  try {
    const response = await fetcher(`${apiBase}/workflows`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      return { connected: false, workflows: [], message: `OIOS API returned HTTP ${response.status}.` };
    }
    const payload: unknown = await response.json();
    if (
      typeof payload !== "object" ||
      payload === null ||
      !("items" in payload) ||
      !Array.isArray((payload as { items: unknown }).items)
    ) {
      return { connected: false, workflows: [], message: "OIOS API response did not match the expected contract." };
    }
    const workflows = (payload as { items: unknown[] }).items.filter(
      (item): item is OiosWorkflow =>
        typeof item === "object" && item !== null && "id" in item && typeof item.id === "string",
    );
    return {
      connected: true,
      workflows,
      message: `Connected to OIOS API. ${workflows.length} workflow(s) returned.`,
    };
  } catch {
    return {
      connected: false,
      workflows: [],
      message: "OIOS API is unreachable. Start the API service to load runtime data.",
    };
  }
}
