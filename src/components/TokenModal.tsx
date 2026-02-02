export const TokenModal = ({ isOpen, onSelect }: { isOpen: boolean, onSelect: (t: any) => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-3xl w-80 border border-zinc-800">
        <h3 className="text-white mb-4 font-bold">Select a token</h3>
        <div className="space-y-2">
          {['ETH', 'USDC', 'DAI'].map(token => (
            <button key={token} onClick={() => onSelect(token)} className="w-full text-left p-3 hover:bg-zinc-800 text-white rounded-xl">
              {token}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};