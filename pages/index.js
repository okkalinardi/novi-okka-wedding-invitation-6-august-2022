import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LandingSection from '../components/Landing'
import PrologueSection from '../components/Prologue'
import Chapter_1 from '../components/Chapter_1'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  const [landing, setlanding] = useState(true)
  const [prologue, setprologue] = useState(false)
  const [chapter_1, setChapter_1] = useState(false)
  const [activeSection, setActiveSection] = useState('landing')

  const next = () => {
    switch (activeSection) {
      case 'landing':
        setlanding(false)
        break;
      case 'prologue':
        localStorage.setItem('PROLOGUE_FINISHED', true)
        setprologue(false)
        break;
      default:
        break;
    }

    setTimeout(() => {
      switch (activeSection) {
        case 'landing':
          if (localStorage.getItem('PROLOGUE_FINISHED')) {
            setChapter_1(true)
            setActiveSection('chapter_1')
          } else {
            setprologue(true)
            setActiveSection('prologue')
          }
          break;
        case 'prologue':
          activateChapter_1()
          break;
        default:
          break;
      }
    }, 2000);
  }

  const activateChapter_1 = () => {
    const mainTheme = document.getElementById('main-theme')
    mainTheme.loop = true
    mainTheme.play()
    setChapter_1(true)
    setActiveSection('chapter_1')
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Novi Okka Wedding</title>
        <meta name="description" content="Novi Andriany & Okka Linardi wedding invitation" />
        <link rel="icon" href="/sakura.ico" />
      </Head>

      <main className={styles.main}>
        <AnimatePresence>
          {/* {landing && <LandingSection next={next} />}

          {prologue && <PrologueSection next={next} />}

          {chapter_1 && <Chapter_1 next={next}/>} */}
          <Chapter_1 next={next} />
        </AnimatePresence>
      </main>

      <audio id='enter-sound'>
        <source src='/enter-sound.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <audio id='prologue-theme'>
        <source src='/prologue-theme.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <audio id='speech-effect'>
        <source src='/speech-effect.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <audio id='main-theme'>
        <source src='/main-theme.mp3' type='audio/mpeg' />
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
