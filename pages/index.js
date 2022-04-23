import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LandingSection from '../components/Landing.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Novi Okka Wedding</title>
        <meta name="description" content="Novi Andriany & Okka Linardi wedding invitation" />
        <link rel="icon" href="/sakura.ico" />
      </Head>

      <main className={styles.main}>
      <LandingSection />
      </main>

      <audio id='enter-sound'>
        <source src='/enter-sound.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
