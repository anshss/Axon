import bridge from "../public/bridge.svg";
import styles from "./bridge.module.scss";
import Image from "next/image";
export default function App() {
  return (
    <div className={styles.bridge}>
      <div className={styles.heading}>
        <Image src={bridge} height={200} width={250} />
        <div className={styles.description}>Let's Bridge your NFTs</div>
      </div>
      <div className={styles.container}>
        <form>
          <div className={styles.row}>
            <h4 className={styles.label}>Contract Address</h4>
            <div className={`${styles["input-group"]}`}>
              <input type="text" placeholder="Enter the Contract Address" />
              <div className={styles["input-icon"]}>
                <i className="fa fa-user"></i>
              </div>
            </div>
            <h4 className={styles.label}>Token Id</h4>
            <div className={`${styles["input-group"]}`}>
              <input type="email" placeholder="Enter the Token Id" />
              <div className={styles["input-icon"]}>
                <i className="fa fa-envelope"></i>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <h4 className={styles.label}>Select Chain:</h4>
            <div className={styles["input-group"]}>
              <input
                id="payment-method-card"
                type="radio"
                name="payment-method"
                value="card"
                checked={true}
              />
              <label htmlFor="payment-method-card">
                <span>
                  <i
                    className={`${styles["fa"]} ${styles["fa-cc-credit"]}`}
                  ></i>
                  Polygon
                </span>
              </label>
              <input
                id="payment-method-paypal"
                type="radio"
                name="payment-method"
                value="paypal"
              />
              <label htmlFor="payment-method-paypal">
                <span>
                  <i
                    className={`${styles["fa"]} ${styles["fa-cc-paypal"]}`}
                  ></i>
                  Ethereum
                </span>
              </label>
            </div>
          </div>
          <button class={styles.button5} role="button">
            Bridge
          </button>
        </form>
      </div>
    </div>
  );
}
