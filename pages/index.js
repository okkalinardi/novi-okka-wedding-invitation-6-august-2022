import React, { useState, useEffect } from 'react';
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
import PrologueSelection from '../components/Prologue-selection'
import { motion, AnimatePresence } from 'framer-motion'

import preLoaderImage from '../assets/images/pre-loader.gif'

export default function Home() {
  const [landing, setlanding] = useState(true)
  const [prologue, setprologue] = useState(true)
  const [chapter_1, setChapter_1] = useState(true)
  const [chapter_2, setChapter_2] = useState(true)
  const [chapter_3, setChapter_3] = useState(true)
  const [chapter_4, setChapter_4] = useState(true)
  const [chapter_5, setChapter_5] = useState(true)
  const [chapter_6, setChapter_6] = useState(true)
  const [prologueModal, setPrologueModal] = useState(false)
  const [activeSection, setActiveSection] = useState('landing')
  const [preLoad, setPreload] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setprologue(false)
      setChapter_1(false)
      setChapter_2(false)
      setChapter_3(false)
      setChapter_4(false)
      setChapter_5(false)
      setChapter_6(false)
      setlanding(false)

      setTimeout(() => {
        setPreload(false)

        setTimeout(() => {
          setlanding(true)
        }, 500);
      }, 1000);
    }, 5000);
  }, [])

  const activatePrologue = () => {
    const audio = document.getElementById('enter-sound')
    audio.play()
    setPrologueModal(false)
    setlanding(false)
    setprologue(true)
    setActiveSection('prologue')
  }
  const skipPrologue = () => {
    const audio = document.getElementById('enter-sound')
    audio.play()
    setPrologueModal(false)
    setlanding(false)
    activateChapter_1()
  }

  const next = () => {
    switch (activeSection) {
      case 'landing':
        if (localStorage.getItem('PROLOGUE_FINISHED')) {
          setPrologueModal(true)
        } else {
          setlanding(false)
        }
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
          if (!localStorage.getItem('PROLOGUE_FINISHED')) {
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
    setActiveSection('chapter_1')
    const mainTheme = document.getElementById('main-theme')
    mainTheme.loop = true
    mainTheme.play()
    setChapter_1(true)
  }

  const goToChapter = (chapterNumber) => {
    setprologue(false)
    setChapter_1(false)
    setChapter_2(false)
    setChapter_3(false)
    setChapter_4(false)
    setChapter_5(false)
    setChapter_6(false)

    switch (chapterNumber) {
      case 0:
        const mainTheme = document.getElementById('main-theme')
        mainTheme.pause()
        mainTheme.currentTime = 0
        setprologue(true)
        setActiveSection('prologue')
        break;
      case 1:
        activateChapter_1()
        break;
      case 2:
        setChapter_2(true)
        setActiveSection('chapter_2')
        break;
      case 3:
        setChapter_3(true)
        setActiveSection('chapter_3')
        break;
      case 4:
        setChapter_4(true)
        setActiveSection('chapter_4')
        break;
      case 5:
        setChapter_5(true)
        setActiveSection('chapter_5')
        break;
      case 6:
        setChapter_6(true)
        setActiveSection('chapter_6')
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

      <main className={`${styles.main} ${preLoad ? styles['pre-load-active'] : ''}`}>

        <AnimatePresence>
          {preLoad &&
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={styles['pre-loader']}
              key={'pre-loader'}>
              <div className={styles['pre-loader-image-container']}>
                <Image
                  src={preLoaderImage}
                  alt=''
                  className={styles['pre-loader-image']}
                />
              </div>
              <div className={styles['pre-loader-description']}>Loading . . .</div>
              <div className={styles['pre-loader-sub-description']}>For better experience, please open this invitation on a laptop or PC</div>
            </motion.div>
          }
        </ AnimatePresence>

        <AnimatePresence>
          {landing && <LandingSection next={next} />}

          {prologue && <PrologueSection next={next} />}

          {chapter_1 && <Chapter_1 next={next} goToChapter={goToChapter} />}

          {chapter_2 && <Chapter_2 next={next} goToChapter={goToChapter} />}

          {chapter_3 && <Chapter_3 next={next} goToChapter={goToChapter} />}

          {chapter_4 && <Chapter_4 next={next} goToChapter={goToChapter} />}

          {chapter_5 && <Chapter_5 next={next} goToChapter={goToChapter} />}

          {chapter_6 && <Chapter_6 next={next} goToChapter={goToChapter} />}

          {prologueModal && <PrologueSelection activatePrologue={activatePrologue} skipPrologue={skipPrologue} />}
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
