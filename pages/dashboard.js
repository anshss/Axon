import Image from "next/image";
import NFT from "../components/NFT";
import dashboard from "../public/dashboard.svg";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Dashboard() {

  const [nfts, setNfts] = useState([{ token_address: "0xdsdsadd", token_uri: "", token_id: "43" }, { token_address: "0xdsdsadd", token_uri: "", token_id: "43" }, { token_address: "0xdsdsadd", token_uri: "", token_id: "43" }])

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
