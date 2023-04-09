import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "../styles/Home.module.scss";

export default function Mint() {

    const [ status, setStatus ] = useState()
    const [userAddr, setUserAddr] = useState();

    useEffect(()=> {
        fetchAddr()
    }, [])

    async function fetchAddr() {
		const currentAddr = await window.ethereum.request({ method: 'eth_requestAccounts' })
		setUserAddr(currentAddr[0])
	}

    function mint() {
		const options = {
			method: 'POST',
			url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromMetadataUrl',
			headers: {
				accept: 'application/json',
				'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
				'X-API-Key': 'sk_live_6283e3c3-6990-4d72-9c08-85859e201676'
			},
			data: `-----011000010111000001101001\r\nContent-Disposition: form-data; name="allowPlatformToOperateToken"\r\n\r\ntrue\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="chain"\r\n\r\nmumbai\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="recipientAddress"\r\n\r\n${userAddr}\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="metadataUrl"\r\n\r\nhttps://ipfs.io/ipfs/bafybeiczzaokuu6hq4yox35plelmn4soc4tlho2noz7cmh2iyib5nkxyxa/giphy%20(1).gif\r\n-----011000010111000001101001--\r\n\r\n`
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
                setStatus(response.data.quick_mint.transactionID)
			})
			.catch(function (error) {
				console.error(error);
			});
	}

    return(
        <div className={styles.mint}>
            <p>TransactionId {status}</p>
            <button className={styles.btn} onClick={mint}>QuickMint</button>
        </div>
    )
}
