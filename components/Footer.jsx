import Link from 'next/link';
import styles from './Footer.module.scss';
import {FaGithub,FaInstagram,FaLinkedin, FaTwitter,} from "react-icons/fa"
import ashish from "../public/ashishProfile.png"
import ansh from "../public/anshProfile.jpg"
import Image from 'next/image';


const style = {display: "inline-block",
	height: "25px",
	width: "25px",
	backgroundColor: "rgba(255,255,255,0.2)",
	margin:"0 15px 10px 0",
	textAlign: "center",
	lineHeight: "30px",
	borderRadius: "50%",
	color: "#ffffff",
	transition: "all 0.5s ease",}
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <div >
              <Image className={styles.images} src={ashish} width={100} height={100}/>
              <h4 className={styles.h4}>Ashish Chaudhary</h4>
              <div className={styles.post}>Ui/Ux, Front-End Developer</div>
            </div>
            
            <div className={styles.socialLinks}>
              <Link href="https://github.com/Ash-0803"><FaGithub style={style}/></Link>
              <Link href="www.linkedin.com/in/
ashish-chaudhary-118181229"><FaLinkedin style={style}/></Link>
              <Link href="https://twitter.com/ashx083"><FaTwitter style={style}/></Link>
              <Link href="#"><FaInstagram style={style}/></Link>
            </div>
          </div>

          <div className={styles.footerCol}>
          <div >
              <Image className={styles.images} width={100} height={100} src={ansh}/>
              <h4 className={styles.h4}>Ansh Saxena</h4>
              <div className={styles.post}>Solidity/Blockchain Developer</div>
            </div>
            <div className={styles.socialLinks}>
              <Link href="https://github.com/anshss"><FaGithub style={style}/></Link>
              <Link href="https://www.linkedin.com/in/anshss/"><FaLinkedin style={style}/></Link>
              <Link href="https://twitter.com/anshstwt"><FaTwitter style={style}/></Link>
              <Link href="#"><FaInstagram style={style}/></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
