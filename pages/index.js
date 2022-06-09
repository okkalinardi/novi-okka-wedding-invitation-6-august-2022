import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LandingSection from '../components/Landing'
import PrologueSection from '../components/Prologue'
import Chapter_1 from '../components/Chapter_1'
import Chapter_2 from '../components/Chapter_2'
import Chapter_3 from '../components/Chapter_3'
import Chapter_4 from '../components/Chapter_4'
import Chapter_5 from '../components/Chapter_5'
import Chapter_6 from '../components/Chapter_6'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  const [landing, setlanding] = useState(true)
  const [prologue, setprologue] = useState(false)
  const [chapter_1, setChapter_1] = useState(false)
  const [chapter_2, setChapter_2] = useState(false)
  const [chapter_3, setChapter_3] = useState(false)
  const [chapter_4, setChapter_4] = useState(false)
  const [chapter_5, setChapter_5] = useState(false)
  const [chapter_6, setChapter_6] = useState(false)
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
      case 'chapter_1':
        setChapter_1(false)
        break;
      case 'chapter_2':
        setChapter_2(false)
        break;
      case 'chapter_3':
        setChapter_3(false)
        break;
      case 'chapter_4':
        setChapter_4(false)
        break;
      case 'chapter_5':
        setChapter_5(false)
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
        case 'chapter_1':
          setChapter_2(true)
          setActiveSection('chapter_2')
          break;
        case 'chapter_2':
          setChapter_3(true)
          setActiveSection('chapter_3')
          break;
        case 'chapter_3':
          setChapter_4(true)
          setActiveSection('chapter_4')
          break;
        case 'chapter_4':
          setChapter_5(true)
          setActiveSection('chapter_5')
          break;
        case 'chapter_5':
          setChapter_6(true)
          setActiveSection('chapter_6')
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

  const goToChapter = (chapterNumber) => {
    setprologue(false)
    setChapter_1(false)
    setChapter_2(false)
    setChapter_3(false)
    setChapter_4(false)

    switch (chapterNumber) {
      case 0:
        setprologue(true)
        break;
      case 1:
        activateChapter_1()
        break;
      case 2:
        setChapter_2(true)
        break;
      case 3:
        setChapter_3(true)
        break;
      case 4:
        setChapter_4(true)
        break;
      case 5:
        setChapter_5(true)
        break;
      default:
        break;
    }
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
          {landing && <LandingSection next={next} />}

          {prologue && <PrologueSection next={next} />}

          {chapter_1 && <Chapter_1 next={next} goToChapter={goToChapter}/>}

          {chapter_2 && <Chapter_2 next={next} goToChapter={goToChapter}/>}

          {chapter_3 && <Chapter_3 next={next} goToChapter={goToChapter}/>}

          {chapter_4 && <Chapter_4 next={next} goToChapter={goToChapter}/>}

          {chapter_5 && <Chapter_5 next={next} goToChapter={goToChapter}/>}

          {chapter_6 && <Chapter_6 next={next} goToChapter={goToChapter}/>}

          {/* <Chapter_6 next={next} goToChapter={goToChapter} /> */}
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
      <audio id='moogle'>
        <source src='/moogle.mp3' type='audio/mpeg' />
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
