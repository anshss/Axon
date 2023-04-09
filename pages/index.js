import Image from "next/image";
import React from "react";
import landingPage from "../public/landingPage.svg";

import Fade from "react-reveal/Fade";

import Timeline from "../public/Timeline.svg";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Image
        className={styles.landingimg}
        src={landingPage}
        alt="landingPage"
      />
      <div className={styles.landingDesc}>
        Bridge your assets from Bit Torrent, Polygon or Ethereum to Solana
      </div>
      <Image className={styles.timeline} src={Timeline} />
      <div className={styles.main}>
        <div className={`${styles.section} ${styles.left}`}>
          <Fade Left>
            <div
              className={styles.text}
            >{`A blockchain is not interoperable, so a bridge is used to transfer assets from one blockchain technology to another. `}</div>
          </Fade>
          <Fade Left>
            <div
              className={styles.text}
            >{`Even though the different networks have their protocols, the bridge provides a compatible solution to communicate securely on both sides.`}</div>
          </Fade>
        </div>
        <div className={`${styles.section} ${styles.right}`}>
          <div className={styles.top}>
            <Fade Right>
              <div
                className={styles.text}
              >{`Recently, we found that there’s no method such that we can transfer our assets from one blockchain to another right now. If you have an asset on one blockchain, it’s not useable on another.`}</div>
            </Fade>
            <Fade Right>
              <div
                className={styles.text}
              >{`So, targeting that problem, we are bringing Axon Bridge. We are making possible, the transfer of your tokens/NFTs from one blockchain to another.`}</div>
            </Fade>
          </div>
          <div className={styles.bottom}>
            <Fade Right>
              <div
                className={styles.text}
              >{`Axon Bridge will be bridging between Polygon and Solana. Users from Polygon would now be able to send their NFT assets to Solana with the help of this bridge.`}</div>
            </Fade>
            <Fade Right>
              <div
                className={styles.text}
              >{`A contract would be residing on Polygon chain where the NFT asset would be locked and a signal would be sent to the frontend for minting another NFT with same data on Solana chain.`}</div>
            </Fade>
          </div>
        </div>
      </div>

    </div>
  );
}
