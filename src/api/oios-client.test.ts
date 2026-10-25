import { describe, expect, it, vi } from "vitest";
import { loadOiosWorkflows } from "./oios-client";

describe("loadOiosWorkflows", () => {
  it("returns workflow records when the API contract is valid", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ items: [{ id: "wf-1", name: "Example" }] }),
    });
    const result = await loadOiosWorkflows(fetcher as unknown as typeof fetch);
    expect(fetcher).toHaveBeenCalledWith("/api/workflows", { headers: { Accept: "application/json" } });
    expect(result.connected).toBe(true);
    expect(result.workflows).toEqual([{ id: "wf-1", name: "Example" }]);
  });

  it("rejects a malformed API payload without pretending it is connected", async () => {
    const fetcher = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ workflows: [] }),
    });
    const result = await loadOiosWorkflows(fetcher as unknown as typeof fetch);
    expect(result.connected).toBe(false);
    expect(result.workflows).toEqual([]);
    expect(result.message).toMatch(/did not match/i);
  });

  it("reports HTTP errors and network failures as offline", async () => {
    const httpError = await loadOiosWorkflows(vi.fn().mockResolvedValue({
      ok: false, status: 503, json: async () => ({}),
    }) as unknown as typeof fetch);
    expect(httpError.connected).toBe(false);
    expect(httpError.message).toContain("503");

    const networkError = await loadOiosWorkflows(vi.fn().mockRejectedValue(new Error("offline")) as unknown as typeof fetch);
    expect(networkError.connected).toBe(false);
    expect(networkError.message).toMatch(/unreachable/i);
  });
});
