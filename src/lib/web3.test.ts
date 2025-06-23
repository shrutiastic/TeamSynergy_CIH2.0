// src/lib/web3.test.ts
// Tests for web3.ts wallet integration

import { connectMetaMask, connectWalletConnect } from "./web3";

describe("Web3 Wallet Integration", () => {
  it("should throw error if MetaMask is not installed", async () => {
    // Simulate no window.ethereum
    const originalEthereum = (global as any).ethereum;
    (global as any).ethereum = undefined;
    await expect(connectMetaMask()).rejects.toThrow("MetaMask is not installed");
    (global as any).ethereum = originalEthereum;
  });

  it("should throw error for WalletConnect placeholder", async () => {
    await expect(connectWalletConnect()).rejects.toThrow("WalletConnect integration not implemented yet");
  });
});
