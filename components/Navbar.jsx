import Link from "next/link";
import Wallet from "./wallet";

export default function Navbar() {

    const styles = {
        container: {
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around'
        },
    };

    return (
        <div style={styles.container}>
            <Link href="/"><p>Axon</p></Link>
            <Link href="/assets"><p>Assets</p></Link>
            <Link href="/bridge"><p>Bridge</p></Link>
            <Link href="/dashboard"><p>Dashboard</p></Link>
            <Wallet />
        </div>
    )
}