import Moralis from "moralis";
import { useEffect, useState } from "react";
import NFT from "../components/NFT";
import styles from "../styles/Home.module.scss";
import assets from "../public/assets.svg";
import Image from "next/image";
import axios from 'axios';


export default function Assets() {
	const [userAddr, setUserAddr] = useState();
	const [nftsPolygon, setPolygonNfts] = useState([]);
	const [nftsEth, setEthNfts] = useState([]);
	const [chain, setChain] = useState()

	useEffect(() => {
		fetchChain()
		fetchAddr()
	}, []);

	useEffect(() => {
		if (chain == 0x13881) {
			fetchNftsFromPolygon()
		}
		else {
			fetchNftsFromEvm()
		}
	}, [chain])

	async function fetchChain() {
		const currentChain = await window.ethereum.request({ method: 'eth_chainId' })
		setChain(currentChain)
	}

	async function fetchAddr() {
		const currentAddr = await window.ethereum.request({ method: 'eth_requestAccounts' })
		setUserAddr(currentAddr[0])
	}

	async function fetchNftsFromPolygon() {
		try {
			if (!Moralis.Core.isStarted) {
				await Moralis.start({
					apiKey: process.env.NEXT_PUBLIC_MORALIS_KEY,
				});
			}

			const response = await Moralis.EvmApi.nft.getWalletNFTs({
				chain: "0x13881",
				format: "decimal",
				tokenAddresses: [],
				mediaItems: false,
				address: userAddr,
			});

			setPolygonNfts(response.raw.result);
			console.log(response.raw.result);
		} catch (e) {
			console.error(e);
		}
	}

	async function fetchNftsFromEvm() {
		try {
			if (!Moralis.Core.isStarted) {
				await Moralis.start({
					apiKey: process.env.NEXT_PUBLIC_MORALIS_KEY,
				});
			}

			const response = await Moralis.EvmApi.nft.getWalletNFTs({
				chain: "11155111",
				format: "decimal",
				tokenAddresses: [],
				mediaItems: false,
				address: userAddr,
			});

			setEthNfts(response.raw.result);
			console.log(nftsEth);
		} catch (e) {
			console.error(e);
		}
	}


	function test() {

		const options = {
			method: 'POST',
			url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromMetadataUrl',
			headers: {
				accept: 'application/json',
				'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
				'X-API-Key': 'sk_live_6283e3c3-6990-4d72-9c08-85859e201676'
			},
			data: '-----011000010111000001101001\r\nContent-Disposition: form-data; name="allowPlatformToOperateToken"\r\n\r\ntrue\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="chain"\r\n\r\nmumbai\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="metadataUrl"\r\n\r\nhttps://ipfs.io/ipfs/bafybeiczzaokuu6hq4yox35plelmn4soc4tlho2noz7cmh2iyib5nkxyxa/giphy%20(1).gif\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="recipientAddress"\r\n\r\n0xc8bF6c8053e093D6e25FCd8cad17c8417Db4D4A5\r\n-----011000010111000001101001--\r\n\r\n'
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}

	function click() {
		test()
	}


	return (
		<div>
			<button onClick={click}>click</button>
			<div className={styles.assets}>
				<div className={styles.heading}>
					<Image src={assets} height={200} width={250} />
					<div className={styles.description}>
						Here you can access your Bridged NFTs
					</div>
				</div>
				<div className={styles.nftcontainer}>
					{nftsPolygon?.map((nft, i) => (
						<NFT
							key={i}
							tokenAddresses={nft.token_address}
							tokenId={nft.token_id}
							tokenUri={nft.token_uri}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
