import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Banner } from '@/components/molecules/banner.component'
import { Footer } from '@/components/organisms/footer.component'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main id={styles.main}>
        <Banner/>
      </main>
      <Footer/>
    </>
  )
}
