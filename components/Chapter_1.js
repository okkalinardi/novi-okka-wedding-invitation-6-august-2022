import React, { useState, useEffect } from 'react';
import styles from '../styles/Chapter_1.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Menu from '../components/Menu'

import chapter_1_photo from '../assets/photos/chapter_1_photo.jpg'
import moogle from '../assets/images/moogle.png'
import logo from '../assets/images/logo.png'
import groomPhoto from '../assets/photos/flower-circle-groom.png'
import bridePhoto from '../assets/photos/flower-circle-bride.png'

export default function Chapter_1({ next, goToChapter }) {
    const [title, setTitle] = useState(true)
    const [content, setContent] = useState(false)
    const [firstContent, setFirstContent] = useState(false)
    const [secondContent, setSecondContent] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTitle(false)
            setContent(true)
            setFirstContent(true)
        }, 2000);
    }, [])

    const changeContentHandler = () => {
        if (firstContent) {
            setFirstContent(false)
            setSecondContent(true)
        } else {
            setSecondContent(false)
            setFirstContent(true)
        }
        const moogleSound = document.getElementById('moogle')
        moogleSound.play()
    }

    const speeches = [
        {
            speaker: 'groom',
            content: 'This is the groom speaking'
        },
        {
            speaker: 'bride',
            content: 'This is the bride speaking'
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className='chapter-container chapter-1-background'>
            <div className={`chapter-mask ${content ? 'content' : 'title'}`}>
                <AnimatePresence exitBeforeEnter>
                    {title && <motion.div
                        key={'title'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className='chapter-title'>
                        <div className='chapter-title-header'>Chapter 1</div>
                        <div className='chapter-title-content'>You&apos;re Here, I&apos;m Here</div>
                    </motion.div>}

                    {content && <motion.div
                        key={'content'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={styles['chapter-1-content']}>
                        <AnimatePresence>
                            {firstContent && <motion.div
                                key={'first-content'}
                                initial={{ opacity: 0, translateY: '-110%' }}
                                animate={{ opacity: 1, translateY: '0%' }}
                                exit={{ opacity: 0, translateY: '-110%' }}
                                transition={{ duration: 1 }} className={styles['chapter-1-first-content']}>
                                <div className={styles['chapter-1-intro']}>
                                    The Wedding of
                                </div>
                                <div className={styles['wedding-logo']}>
                                    <Image
                                        src={logo}
                                        alt=''
                                        className={styles['wedding-logo-image']}
                                    />
                                </div>
                                <div className={styles['chapter-1-photo-frame']}>
                                    <Image
                                        src={chapter_1_photo}
                                        alt=''
                                    />
                                </div>
                            </motion.div>}

                            {secondContent && <motion.div
                                key={'second-content'}
                                initial={{ opacity: 0, translateY: '110%' }}
                                animate={{ opacity: 1, translateY: '0%' }}
                                exit={{ opacity: 0, translateY: '110%' }}
                                transition={{ duration: 1, staggerChildren: 0.5 }} className={styles['chapter-1-second-content']}>
                                <motion.div
                                initial={{ opacity: 0, translateY: -50 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 0, translateY: -50 }}
                                transition={{ duration: 1.5 }}
                                className={styles['wedding-logo']}>
                                    <Image
                                        src={logo}
                                        alt=''
                                        className={styles['wedding-logo-image']}
                                    />
                                </motion.div>
                                <div className={styles['couple-photo-container']}>
                                    <div className={styles['groom-section']}>

                                        <motion.div
                                            initial={{ opacity: 0, translateX: -100 }}
                                            animate={{ opacity: 1, translateX: 0 }}
                                            exit={{ opacity: 0, translateX: -100 }}
                                            transition={{ duration: 1.5 }}
                                            className={styles['groom-photo-container']}>
                                            <Image
                                                src={groomPhoto}
                                                alt=''
                                                className={`${styles['groom-photo']} ${styles['couple-photo']}`}
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, translateX: -100 }}
                                            animate={{ opacity: 1, translateX: 0 }}
                                            exit={{ opacity: 0, translateX: -100 }}
                                            transition={{ duration: 1.7 }}
                                            className={styles['intro-name']}>
                                            Okka Linardi
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, translateX: -100 }}
                                            animate={{ opacity: 1, translateX: 0 }}
                                            exit={{ opacity: 0, translateX: -100 }}
                                            transition={{ duration: 1.7 }}
                                            className={styles['intro-content']}>
                                            Son of Thomas Linardi and Dewi Ratnawati
                                        </motion.div>
                                    </div>
                                    <div className={styles['bride-section']}>

                                        <motion.div
                                            initial={{ opacity: 0, translateX: 100 }}
                                            animate={{ opacity: 1, translateX: 0 }}
                                            exit={{ opacity: 0, translateX: 100 }}
                                            transition={{ duration: 1.5 }}
                                            className={styles['bride-photo-container']}>
                                            <Image
                                                src={bridePhoto}
                                                alt=''
                                                className={`${styles['bride-photo']} ${styles['couple-photo']}`}
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, translateX: 100 }}
                                            animate={{ opacity: 1, translateX: 0 }}
                                            exit={{ opacity: 0, translateX: 100 }}
                                            transition={{ duration: 1.7 }}
                                            className={styles['intro-name']}>
                                            Novi Andriany
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, translateX: 100 }}
                                            animate={{ opacity: 1, translateX: 0 }}
                                            exit={{ opacity: 0, translateX: 100 }}
                                            transition={{ duration: 1.7 }}
                                            className={styles['intro-content']}>
                                            Daughter of Hery Saputro and Harnanik Sadi
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            }

                        </AnimatePresence>
                        <button
                            type='button'
                            onClick={changeContentHandler}
                            className={styles['chapter-1-button']}>
                            <Image
                                className={styles['moogle-image']}
                                src={moogle}
                                alt=''
                            />
                            <div className={styles['moogle-dialog']}>{firstContent ? 'Click me, Kupo!' : 'Go back, kupo!'}</div>
                        </button>
                        {/* <Dialogue speeches={speeches} /> */}
                        <Menu toggleZindex={()=> {}} active={1} next={next} goToChapter={goToChapter} />
                    </motion.div>
                    }

                </AnimatePresence>
            </div>
        </motion.div>
    )
}