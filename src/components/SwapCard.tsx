import React, { useState } from 'react';
import { useAccount, useSendTransaction } from 'wagmi';
import { useTokenApproval } from '../hooks/useTokenApproval';
import { getRoute } from '../hooks/useSwapRoute';

export const SwapCard = () => {
  const { address, isConnected } = useAccount();
  const [amount, setAmount] = useState('');
  const [quote, setQuote] = useState<any>(null);
  const { needsApproval, handleApprove } = useTokenApproval(address!, amount);
  const { sendTransaction } = useSendTransaction();

  const handleGetQuote = async (val: string) => {
    setAmount(val);
    if (parseFloat(val) > 0) {
      const route = await getRoute(val, address!);
      setQuote(route);
    }
  };

  const executeSwap = () => {
    if (!quote) return;
    sendTransaction({
      to: quote.methodParameters.to,
      data: quote.methodParameters.calldata,
      value: BigInt(quote.methodParameters.value),
    });
  };

  return (
    <div className="max-w-112.5 mx-auto p-4 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl">
      <div className="bg-zinc-800 p-4 rounded-2xl mb-2">
        <input 
          type="number" placeholder="0.0" 
          className="bg-transparent text-3xl text-white outline-none w-full"
          onChange={(e) => handleGetQuote(e.target.value)}
        />
      </div>
      
      <button 
        onClick={needsApproval ? handleApprove : executeSwap}
        disabled={!isConnected}
        className="w-full py-4 bg-pink-600 text-white font-bold rounded-2xl hover:bg-pink-500 mt-4 disabled:bg-zinc-700"
      >
        {!isConnected ? 'Connect Wallet' : needsApproval ? 'Approve WETH' : 'Swap'}
      </button>
      
      {quote && <p className="text-zinc-500 text-xs mt-4 px-2">Best price via V3: {quote.quote.toExact()} USDC</p>}
    </div>
  );
};