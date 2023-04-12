import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '../../styles/organisms/services.module.css'

const inter = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
       <h1>test</h1>
    </main>
  )
}
