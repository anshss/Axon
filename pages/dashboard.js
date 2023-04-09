import Image from "next/image";
import NFT from "../components/NFT";
import dashboard from "../public/dashboard.svg";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Dashboard() {

  const [nfts, setNfts] = useState([{ token_address: "5HajRi68K8r8F4CevCJG6sNqdKaRNHHXFs7SLyvfEqcn", token_uri: "https://ipfs.moralis.io:2053/ipfs/bafybeiczzaokuu6hq4yox35plelmn4soc4tlho2noz7cmh2iyib5nkxyxa/giphy%20(1).gif", token_id: "1" }])

  return (
    <div className={styles.dashboard}>
      <div className={styles.heading}>
        <Image src={dashboard} height={200} width={250} />
        <div className={styles.description}>
          Here you can access your Bridged NFTs
        </div>
      </div>
      <div className={styles.nftcontainer}>
        {nfts?.map((nft, i) => (
          <NFT
            key={i}
            tokenAddresses={nft.token_address}
            tokenId={nft.token_id}
            tokenUri={nft.token_uri}
          />
        ))}
      </div>
    </div>
  );
}
