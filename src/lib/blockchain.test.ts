// src/lib/blockchain.test.ts
// Tests for blockchain.ts integration

import { initMoralis, getEthBalance, createAlchemy, getAlchemyEthBalance } from "./blockchain";

describe("Blockchain Integration", () => {
  // These tests are placeholders and require valid API keys and addresses to run successfully.
  // Set your API keys and test addresses as environment variables or directly in the test.

  const MORALIS_API_KEY = process.env.MORALIS_API_KEY || "";
  const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";
  const TEST_ADDRESS = "0x0000000000000000000000000000000000000000"; // Replace with a valid address

  it("should initialize Moralis without error", async () => {
    if (!MORALIS_API_KEY) return;
    await expect(initMoralis(MORALIS_API_KEY)).resolves.not.toThrow();
  });

  it("should fetch ETH balance using Moralis", async () => {
    if (!MORALIS_API_KEY) return;
    await initMoralis(MORALIS_API_KEY);
    const balance = await getEthBalance(TEST_ADDRESS);
    expect(typeof balance).toBe("string");
  });

  it("should create Alchemy instance", () => {
    if (!ALCHEMY_API_KEY) return;
    const alchemy = createAlchemy(ALCHEMY_API_KEY);
    expect(alchemy).toBeDefined();
  });

  it("should fetch ETH balance using Alchemy", async () => {
    if (!ALCHEMY_API_KEY) return;
    const alchemy = createAlchemy(ALCHEMY_API_KEY);
    const balance = await getAlchemyEthBalance(alchemy, TEST_ADDRESS);
    expect(typeof balance).toBe("string");
  });
});
