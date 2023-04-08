import Image from "next/image";
import NFT from "../components/NFT";
import dashboard from "../public/dashboard.svg";
import styles from "../styles/Home.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.heading}>
        <Image src={dashboard} height={200} width={250} />
        <div className={styles.description}>
          Here you can access your Bridged NFTs
        </div>
      </div>
      <div className={styles.nftcontainer}>
        <NFT />
        <NFT />
        <NFT />
        <NFT />
        <NFT />
      </div>
    </div>
  );
}
