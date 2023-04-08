import Moralis from "moralis";
import { useEffect, useState } from "react";
import NFT from "../components/NFT";
import styles from "../styles/Home.module.scss";
import assets from "../public/assets.svg";
import Image from "next/image";

export default function Assets() {
  const [userAddrss, setUserAddress] = useState(
    "0x48e6a467852Fa29710AaaCDB275F85db4Fa420eB"
  );
  const [nftsPolygon, setPolygonNfts] = useState([]);
  const [nftsEth, setEthNfts] = useState([]);

  useEffect(() => {}, []);

  async function initialize() {
    const response = await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_MORALIS_KEY,
    });
    console.log(response);
  }

  async function fetchNftsFromPolygon() {
    try {
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        chain: "0x13881",
        format: "decimal",
        tokenAddresses: [],
        mediaItems: false,
        address: "0x48e6a467852Fa29710AaaCDB275F85db4Fa420eB",
      });

      setPolygonNfts(response.raw.result);
      console.log(response.raw.result);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchNftsFromEvm() {
    try {
      await Moralis.start({
        apiKey: process.env.NEXT_PUBLIC_MORALIS_KEY,
      });

      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        chain: "11155111",
        format: "decimal",
        tokenAddresses: [],
        mediaItems: false,
        address: userAddress,
      });

      setEthNfts(response.raw.result);
      console.log(nftsEth);
    } catch (e) {
      console.error(e);
    }
  }

  function click() {
    initialize();
    fetchNftsFromPolygon();
  }

  //   function NftCard(prop) {
  //     return (
  //       <div>
  //         <img src={prop?.tokenUri} width="50px" height="50px" />
  //         <p>tokenId: {prop.tokenId}</p>
  //         <p>tokenAddresses: {prop.tokenAddresses}</p>
  //       </div>
  //     );
  //   }

  return (
    <div>
      <button onClick={click}>click</button>
      <div className={styles.assets}>
        <div className={styles.heading}>
          <Image src={assets} height={200} width={250} />
          <div className={styles.description}>
            Here you can access your Bridged NFTs
          </div>
        </div>
        <div className={styles.nftcontainer}>
          {nftsPolygon?.map((nft, i) => (
            <NFT
              key={i}
              tokenAddresses={nft.token_address}
              tokenId={nft.token_id}
              tokenUri={nft.token_uri}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
