import Moralis from "moralis";
import { useEffect, useState } from "react";
import NFT from "../components/NFT";
import styles from "../styles/Home.module.scss";
import assets from "../public/assets.svg";
import Image from "next/image";

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


	

	function click() {
		test()
	}


	return (
		<div>
			{/* <button onClick={click}>click</button> */}
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
