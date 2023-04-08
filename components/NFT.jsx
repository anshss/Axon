import React from 'react'
import styles from "../styles/Home.module.scss"
import Image from 'next/image'
import naruto from "../public/Naruto.jpg"
export default function NFT() {
  return (
    <div className={styles.card}>
      <Image src={naruto} width={230}/>
      <div className={styles.nftdesc}>
        <div className={styles.token}><span className={styles.head}>TokenId: </span>something230948</div>
        <div className={styles.add}><span className={styles.head}>Contract: </span>02s0x58wwsetw</div>
      </div>
    </div>
  )
}
