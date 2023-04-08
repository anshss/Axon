import Link from "next/link";
import Wallet from "./wallet";
import styles from "../styles/Home.module.scss"

export default function Navbar() {


    return (
        <div className={styles.navbar}>
            <Link className={styles.link} href="/"><p >Axon</p></Link>
            <Link className={styles.link} href="/assets"><p >Assets</p></Link>
            <Link className={styles.link} href="/bridge"><p >Bridge</p></Link>
            <Link className={styles.link} href="/dashboard"><p >Dashboard</p></Link>
            <Wallet />
        </div>
    )
}