import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Service from '../components/organisms/service.organism'
import { Banner } from '@/components/molecules/banner.component'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main id={styles.main}>
       <Banner/>
    </main>
  )
}
