import { AlphaRouter } from '@uniswap/smart-order-router';
import { CurrencyAmount, TradeType, Percent } from '@uniswap/sdk-core';
import { ethers } from 'ethers';
import { WETH, USDC, CHAIN_ID, SWAP_ROUTER_ADDRESS } from '../constants/tokens';

const provider = new ethers.providers.JsonRpcProvider("YOUR_RPC_URL");
const router = new AlphaRouter({ chainId: CHAIN_ID, provider });

export const getRoute = async (amountIn: string, address: string) => {
  const inputAmount = CurrencyAmount.fromRawAmount(
    WETH, 
    ethers.utils.parseUnits(amountIn, WETH.decimals).toString()
  );

  const route = await router.route(
    inputAmount,
    USDC,
    TradeType.EXACT_INPUT,
    {
      recipient: address,
      slippageTolerance: new Percent(50, 10000), // 0.5%
      deadline: Math.floor(Date.now() / 1000 + 1800)
    }
  );
  return route;
};