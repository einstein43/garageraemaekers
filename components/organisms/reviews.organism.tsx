import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../../styles/organisms/reviews.module.css";
import { Button } from "../atoms/button.component";
import Phone from "../../public/phone.svg";
import reparaties from "../../public/reparatie.svg";
import sterretje from "../../public/sterretje.png"

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Reviews() {
  return (
    <div className={styles.wrapper}>
   <div className={styles.leftside_text}>Een <span id={styles.blacktext}>Betrouwbare</span> en <span id={styles.blacktext}> gewaardeerde </span>reputatie met duizenden klussen onder de riem.</div>
   <div id={styles.sterretjes}><Image id={styles.image} src={sterretje} alt={"stars mate"} fill={true}></Image></div>
   <Button id={styles.buttontje}
          theme="primary"
          size="large"
          
        >
          Bekijk alle Google Reviews
        </Button>
    <div className={styles.fotodiv}><img id={styles.fotootje} src="olie.jpg" alt="olie" /></div>
    </div>
  );
}
