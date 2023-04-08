import { useEffect, useState } from "react"
import styles from "../styles/Home.module.scss"
import { ConnectKitButton } from "connectkit";

export default function Wallet() {
    const [loggedEvm, setLoggedEvm] = useState(false)
    const [loggedSol, setLoggedSol] = useState(false)
    const [solanaAddress, setSolanaAddress] = useState()

    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected()
        }
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad)
    }, [])

    const checkIfWalletIsConnected = async () => {
        if (window?.solana?.isPhantom) {
            console.log('Phantom wallet found!');
        } else {
            alert('Solana object not found! Get a Phantom Wallet')
        }
    }


    function logEvm() { }

    async function logSolana() {
        // if (!window) {
        //     return
        // }
        if (solana) {
            const response = await solana.connect()
            console.log('Connected with Public Key: ', response.publicKey.toString())
            setSolanaAddress(response.publicKey.toString())
        }
    }

    return (
        <div>
            <ConnectKitButton />
            {/* {loggedEvm ? <button className={styles.wallet} >logout</button> : <button className={styles.wallet}>login</button>} */}
            {loggedSol ? <button className={styles.wallet} >logout</button> : <button className={styles.wallet} onClick={logSolana}>login</button>}
        </div>
    )
}