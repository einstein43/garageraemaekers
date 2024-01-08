import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "../../styles/organisms/services.module.css";
import { Button } from "../atoms/button.component";
import Phone from "../../public/phone.svg";
import reparaties from "../../public/reparatie.svg";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Service() {
  return (
    <div className={styles.wrapper}>

      <div id={styles.header}>
        {/* Title */}
        <div id={styles.leftside_text}>
          <p>
            Met <span id={styles.blacktext}>25 jaar</span> ervaring bieden wij de volgende <span id={styles.blacktext}>diensten</span> voor luxewagens,
            lichte bedrijfswagens en vrachtwagens.
          </p>
        </div>

        {/* Button */}
        <div id={styles.button}>
          <Button
            theme="primary"
            size="large"
            icon={{ src: Phone, alt: "bellen" }}
          >
            Bellen
          </Button>
        </div>
      </div>

 {/* Blocks */}
 <div id={styles.blocksGrid}>
        <div id={styles.vak1} className={styles.service}>
          <img id={styles.plaatje} src="reparatie.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Reparaties</h1>
          <p className={styles.kopje_text}>
            Professionele reparaties voor uw voertuig. Onze experts zorgen ervoor dat uw auto weer in topconditie is, met aandacht voor detail en kwaliteit.
          </p>
        </div>
        <div id={styles.vak2} className={styles.service}>
          <img id={styles.plaatje}  src="banden.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Banden</h1>
          <p className={styles.kopje_text}>
            Hoogwaardige bandenservice voor optimale grip en veiligheid. Wij bieden professionele bandeninspectie, reparatie en vervanging.
          </p>
        </div>
        <div id={styles.vak3} className={styles.service}>
          <img id={styles.plaatje}  src="beurt.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Kleine- en Grote Beurt</h1>
          <p className={styles.kopje_text}>
            Regelmatig onderhoud voor een langere levensduur van uw auto. Onze beurten omvatten zorgvuldige inspectie en onderhoudsprocedures.
          </p>
        </div>
        <div id={styles.vak4} className={styles.service}>
          <img id={styles.plaatje}  src="apk.svg" alt="reparaties" />
          <h1 className={styles.kopje}>APK Facilitering</h1>
          <p className={styles.kopje_text}>
            Probleemloze APK-keuringen om ervoor te zorgen dat uw voertuig voldoet aan alle wettelijke normen. Laat uw APK bij ons verzorgen.
          </p>
        </div>
        <div id={styles.vak5} className={styles.service}>
          <img id={styles.plaatje}  src="airco.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Airco Service</h1>
          <p className={styles.kopje_text}>
            Verfrissende airco-service om uw rijervaring te verbeteren. Wij bieden diagnose, reparatie en onderhoud van airconditioningsystemen.
          </p>
        </div>
        <div id={styles.vak6} className={styles.service}>
          <img id={styles.plaatje}  src="uitlees.svg" alt="reparaties" />
          <h1 className={styles.kopje}>Uitlees Service</h1>
          <p className={styles.kopje_text}>
            Geavanceerde uitleesservice om snel en nauwkeurig problemen te identificeren. Onze experts gebruiken de nieuwste technologie voor effectieve oplossingen.
          </p>
        </div>
      </div>
    </div>
  );
}
