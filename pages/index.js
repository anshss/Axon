import Image from "next/image";
import React from "react";
import landingPage from "../public/landingPage.svg";

import Fade from "react-reveal/Fade";

import Timeline from "../public/Timeline.svg";
import styles from "../styles/Home.module.scss";

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
            >{`Recently, we found that there’s no method such that we can transfer our assets from one blockchain to another right now. If you have an asset on one blockchain, it’s not useable on another.`}</div>
          </Fade>
          <Fade Left>
            <div
              className={styles.text}
            >{`Recently, we found that there’s no method such that we can transfer our assets from one blockchain to another right now. If you have an asset on one blockchain, it’s not useable on another.`}</div>
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
              >{`Recently, we found that there’s no method such that we can transfer our assets from one blockchain to another right now. If you have an asset on one blockchain, it’s not useable on another.`}</div>
            </Fade>
          </div>
          <div className={styles.bottom}>
            <Fade Right>
              <div
                className={styles.text}
              >{`Recently, we found that there’s no method such that we can transfer our assets from one blockchain to another right now. If you have an asset on one blockchain, it’s not useable on another.`}</div>
            </Fade>
            <Fade Right>
              <div
                className={styles.text}
              >{`Recently, we found that there’s no method such that we can transfer our assets from one blockchain to another right now. If you have an asset on one blockchain, it’s not useable on another.`}</div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
