import { useState } from "react";
import bridge from "../public/bridge.svg";
import styles from "../styles/bridge.module.scss";
import Image from "next/image";
import {
  addressBridgePolygon,
  addressBridgeEth,
  abiBridgePolygon,
  abiBridgeEth,
} from "../config";
import web3modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";

export default function App() {
  const [formInput, setFormInput] = useState({
    contAddr: "",
    tokId: "",
    chain: "Polygon",
  });

  const router = useRouter();

  const nftAbi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  async function bridgeNft() {
    const modal = new web3modal();
    const connection = await modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const nftAddress = formInput.contAddr;
    const nftContract = new ethers.Contract(
      nftAddress.toString(),
      nftAbi,
      signer
    );
    const approve = await nftContract.approve(
      addressBridgePolygon,
      formInput.tokId
    );
    await approve.wait();

    const bridgeContract = new ethers.Contract(
      addressBridgePolygon,
      abiBridgePolygon,
      signer
    );
    const txn = await bridgeContract.burn(formInput.contAddr, formInput.tokId);

    await txn.wait();
    await mintSolana();
    router.push("/dashboard");
  }

  async function mintSolana() {}

  function click() {
    console.log(formInput);
  }

  return (
    <div className={styles.bridge}>
      <button onClick={click}>click</button>
      <div className={styles.heading}>
        <Image src={bridge} height={200} width={250} />
        <div className={styles.description}>Let's Bridge your NFTs</div>
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <h4 className={styles.label}>Contract Address</h4>
          <div className={`${styles["input-group"]}`}>
            <input
              type="text"
              placeholder="Enter the Contract Address"
              onChange={(e) =>
                setFormInput({ ...formInput, contAddr: e.target.value })
              }
            />
            <div className={styles["input-icon"]}>
              <i className="fa fa-user"></i>
            </div>
          </div>
          <h4 className={styles.label}>Token Id</h4>
          <div className={`${styles["input-group"]}`}>
            <input
              type="text"
              placeholder="Enter the Token Id"
              onChange={(e) =>
                setFormInput({ ...formInput, tokId: e.target.value })
              }
            />
            <div className={styles["input-icon"]}>
              <i className="fa fa-envelope"></i>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <h4 className={`${styles.label} ${styles.select}`}>Select Chain:</h4>
          <div className={styles["input-group"]}>
            <input
              id="payment-method-card"
              type="radio"
              name="payment-method"
              value="Polygon"
              checked={true}
              onChange={(e) =>
                setFormInput({ ...formInput, chain: e.target.value })
              }
            />
            <label htmlFor="payment-method-card">
              <span>
                <i className={`${styles["fa"]} ${styles["fa-cc-credit"]}`}></i>
                Polygon
              </span>
            </label>
            <input
              id="payment-method-paypal"
              type="radio"
              name="payment-method"
              value="Ethereum"
              onChange={(e) =>
                setFormInput({ ...formInput, chain: e.target.value })
              }
            />
            <label htmlFor="payment-method-paypal">
              <span>
                <i className={`${styles["fa"]} ${styles["fa-cc-paypal"]}`}></i>
                Ethereum
              </span>
            </label>
          </div>
        </div>
        <button class={styles.button5} role="button" onClick={bridgeNft}>
          Bridge
        </button>
      </div>
    </div>
  );
}
