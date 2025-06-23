// src/lib/banking.test.ts
// Tests for banking.ts Open Banking API integration

import { fetchFynapseAccounts, fetchSaltEdgeAccounts } from "./banking";

describe("Open Banking API Integration", () => {
  it("should throw error for Fynapse API placeholder", async () => {
    await expect(fetchFynapseAccounts("dummy_token")).rejects.toThrow("Fynapse API integration not implemented yet");
  });

  it("should throw error for Salt Edge API placeholder", async () => {
    await expect(fetchSaltEdgeAccounts("dummy_token")).rejects.toThrow("Salt Edge API integration not implemented yet");
  });
});
