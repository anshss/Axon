import { useState } from "react"
import styles from "../styles/Home.module.scss"

export default function Wallet() {
    const [logged, setLogged] = useState(false)

    return (
        <div >
            { logged ? <button className={styles.wallet} >logout</button> : <button className={styles.wallet}>login</button> }
        </div>
    )
}