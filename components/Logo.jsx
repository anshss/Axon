import React from 'react'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import logo from "../public/Logo.svg"
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={logo} height={60} width={120}/> 
    </Link>
  )
}
