// src/tokens.ts
import { Token } from "@uniswap/sdk-core";

export const CHAIN_ID = 1;

export const WETH = new Token(
  CHAIN_ID,
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  18,
  "WETH",
  "Wrapped Ether"
);
