import { Token } from "@uniswap/sdk-core";

export const CHAIN_ID = 1; // Mainnet

export const WETH = new Token(
  CHAIN_ID,
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  18,
  "WETH",
  "Wrapped Ether",
);
export const USDC = new Token(
  CHAIN_ID,
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  6,
  "USC",
  "USD Coin",
);

export const SWAP_ROUTER_ADDRESS = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
