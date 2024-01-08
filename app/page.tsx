import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Banner } from "@/components/molecules/banner.component";
import { Footer } from "@/components/organisms/footer.component";
import Service from "@/components/organisms/service.organism";
import Reviews from "@/components/organisms/reviews.organism";
import Location from "@/components/organisms/location.organism";
import { NavBar } from "@/components/organisms/navBar.component";
import Pictures from "@/components/organisms/pictures.organism";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main id={styles.main}>
        <section id="section-1">
          <Banner />
        </section>
        <section id="section-2">
           <Service />
        </section>
        <section id="section-3">
           <Reviews />
        </section>
        <section id="section-4">
           <Location />
        </section>
      </main>
      <Footer />
    </>
  );
}
