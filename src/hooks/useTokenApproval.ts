import { useReadContract, useWriteContract } from 'wagmi';
import { erc20Abi } from 'viem';
import { WETH, SWAP_ROUTER_ADDRESS } from '../constants/tokens';

export const useTokenApproval = (address: `0x${string}`, amount: string) => {
  const { data: allowance } = useReadContract({
    address: WETH.address as `0x${string}`,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [address, SWAP_ROUTER_ADDRESS as `0x${string}`],
  });

  const { writeContract: approve } = useWriteContract();

  const needsApproval = !allowance || allowance < BigInt(amount || 0);

  const handleApprove = () => {
    approve({
      address: WETH.address as `0x${string}`,
      abi: erc20Abi,
      functionName: 'approve',
      args: [SWAP_ROUTER_ADDRESS as `0x${string}`, BigInt(2**256) - BigInt(1)],
    });
  };

  return { needsApproval, handleApprove };
};