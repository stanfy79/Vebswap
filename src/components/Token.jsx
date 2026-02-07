




export default function Token() {


return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[420px] rounded-2xl bg-[#12151c] p-4 text-white shadow-2xl">

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Select a token</h2>
          <button className="text-gray-400 hover:text-white">
            {/* <X size={18} /> */}
          </button>
        </div>

        <div className="relative mt-4">
          {/* <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          /> */}
          <input
            type="text"
            
            placeholder="Search tokens"
            className="w-full rounded-xl bg-[#1a1f2b] py-3 pl-10 pr-10 text-sm placeholder-gray-500 outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {/* <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          /> */}
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto">
          {["ETH", "USDC", "USDT", "WBTC", "WETH"].map((token) => (
            <button
              key={token}
              className="flex min-w-[64px] flex-col items-center gap-1 rounded-xl bg-[#1a1f2b] px-3 py-2 text-xs hover:bg-[#23293a]"
            >
              <div className="h-6 w-6 rounded-full bg-gray-500" />
              {token}
            </button>
          ))}
        </div>
        
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
          <span>📈</span>
          <span>Tokens by 24H volume</span>
        </div>

        <div className="mt-2 max-h-[300px] space-y-1 overflow-y-auto pr-1">
          {/* {filteredTokens.map((token) => ( */}
            <button
              
              className="flex w-full items-center gap-3 rounded-xl p-2 hover:bg-[#1a1f2b]"
            >
              <div className="h-9 w-9 rounded-full" />
              <div className="text-left">
                <p className="text-sm font-medium">ETH</p>
                <p className="text-xs text-gray-400">
                  Hooo
                </p>
              </div>
            </button>
          {/* ))} */}

          {/* {filteredTokens.length === 0 && ( */}
            <p className="py-6 text-center text-sm text-gray-500">
              No tokens found
            </p>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}