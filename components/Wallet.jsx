import { useState } from "react"

export default function Wallet() {
    const [logged, setLogged] = useState(false)

    return (
        <div>
            { logged ? <button>logout</button> : <button>login</button> }
        </div>
    )
}