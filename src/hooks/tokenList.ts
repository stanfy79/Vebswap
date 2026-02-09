// src/tokenList.ts
import { Token } from "@uniswap/sdk-core";
import { CHAIN_ID } from "../constants/tokens";
import { useEffect, useState } from "react";

const UNISWAP_TOKEN_LIST_URL = "https://tokens.uniswap.org";

// src/types/tokenList.ts
export interface TokenList {
  name: string;
  tokens: {
    chainId: number;
    address: string;
    decimals: number;
    symbol: string;
    name: string;
    logoURI?: string;
  }[];
}


export async function fetchUniswapTokens(): Promise<Token[]> {
  const res = await fetch(UNISWAP_TOKEN_LIST_URL);
  const data = await res.json();

  return data.tokens
    .filter((t: any) => t.chainId === CHAIN_ID)
    .map(
      (t: any) =>
        new Token(
          t.chainId,
          t.address,
          t.decimals,
          t.symbol,
          t.name
        )
    );
};


export function useTokenList() {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUniswapTokens()
      .then(setTokens)
      .finally(() => setLoading(false));
  }, []);

  console.log("Fetched tokens:", tokens);
  return { tokens, loading };
}

