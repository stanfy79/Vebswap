import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});
export default config;