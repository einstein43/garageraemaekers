"use client"

import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../../styles/organisms/reviews.module.css";
import { Button } from "../atoms/button.component";
import Phone from "../../public/phone.svg";
import reparaties from "../../public/reparatie.svg";
import sterretje from "../../public/sterretje.png"
import olie from '../../public/olie.jpg'

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Reviews() {



function handleReviewClick() {
  window.open('https://www.google.com/search?newwindow=1&sca_esv=596560865&sxsrf=AM9HkKnoQMuFfUb0twTVhyPG0Z9mkr_88A:1704724071259&q=ron+raemaekers&uds=AMIYvT9mES6JmixsrsA5iGkz3c7pkgcPN8uI3UIbBqHIBsixs-UyL_HR1IT6DsAySxPoU1m_BJShPjpRUUtVv5RxrNsYKPrXNxAYtZnuUqyGsB0ZG43QGJg&si=ALGXSla_WCGdkD9yT_jdHrUlk6LMkmNSL3U2mfjKFmuVN40wv5RcbCQ1ZF6KDdkvkTmZQXjbPJkZUkgh9Pmj4PqAatqxsdu-lpPImfI-Dx5NyD2WjdVqi2k%3D&sa=X&ved=2ahUKEwiyhtSFgM6DAxXl-wIHHcojC0UQ3PALegQIFBAE&biw=1920&bih=919&dpr=1', '_blank');

}



  return (
    <div className={styles.wrapper}>

      {/* Stars */}
      <div id={styles.sterretjes}>
        <Image id={styles.image} src={sterretje} alt={"stars mate"} fill={true}></Image>
      </div>

      {/* Text */}
      <div className={styles.leftside_text}>
        Een <span id={styles.blacktext}>Betrouwbare</span> en <span id={styles.blacktext}> gewaardeerde </span>reputatie met duizenden klussen onder de riem.
      </div>

      {/* Button */}
      <Button id={styles.buttontje}
        theme="primary"
        size="large"
        onClick={() => handleReviewClick()}
      >
        Bekijk alle Google Reviews
      </Button>

      {/* Image */}
      <div className={styles.fotodiv}>
        <Image
          src={olie}
          alt="Garage Raemaekers"
          fill={true}
          id={styles.fotootje}
        />
      </div>
      
    </div>
  );
}
