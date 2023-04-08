import React from 'react'
import styles from "../styles/Home.module.scss"
export default function NFT(prop) {
  return (
    <div className={styles.card}>
      <img src={prop?.tokenUri} width={230} height={230}/>
      <div className={styles.nftdesc}>
        <div className={styles.token}><span className={styles.head}>TokenId: </span>{prop.tokenId}</div>
        <div className={styles.add}><span className={styles.head}>Address: </span>{prop.tokenAddresses.slice(0,6)}...<span className={styles.copy}><button onClick={() => {navigator.clipboard.writeText(prop.tokenAddresses)}}>copy</button></span></div>
      </div>
    </div>
  )
}
