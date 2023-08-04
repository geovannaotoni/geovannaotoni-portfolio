import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero />
    </main>
  )
}
