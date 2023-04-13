import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Service from '../components/organisms/service.organism'
import Reviews from '@/components/organisms/reviews.organism'
 
export default function Home() {
  return (
    <main className={styles.main}>
       <Reviews></Reviews>
    
      
    </main>
  )
}
