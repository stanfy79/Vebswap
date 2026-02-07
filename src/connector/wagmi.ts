import { createConfig } from 'wagmi';
import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';

const config = createConfig({
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
});

export default config;
