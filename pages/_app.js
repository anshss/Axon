import Navbar from "../components/navbar";
import "../styles/globals.css";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { ConnectKitProvider } from "connectkit";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  // ------------

  const mumbai = {
    id: 80001,
    name: "Mumbai",
    network: "Polygon Mumbai",
    nativeCurrency: {
      decimals: 18,
      name: "Matic",
      symbol: "Matic",
    },
    rpcUrls: {
      default: "https://matic-mumbai.chainstacklabs.com",
    },
  };

  const sepolia = {
    id: 11155111,
    name: "Sepolia",
    network: "Sepolia Test Network",
    nativeCurrency: {
      decimals: 18,
      name: "SepoliaEth",
      symbol: "SepoliaEth",
    },
    rpcUrls: {
      default: "https://goerli.infura.io/v3/",
    },
  };

  const { chains, provider } = configureChains(
    [mumbai, sepolia],
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          http: `https://matic-mumbai.chainstacklabs.com`,
        }),
      }),
    ]
  );

  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "ThePeerDao",
        },
      }),
    ],
    provider,
  });

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <div>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
