import React, { useEffect, useState } from 'react'
import styles from '../styles/Prologue.module.scss'
import { motion } from 'framer-motion'
import nextArrow from '../assets/images/double-arrow.svg'
import Image from 'next/image'

export default function Prologue({ next, preLoad }) {
    const [brideAndGroom, setBrideAndGroom] = useState(true)
    const [groomTalking, setGroomTalking] = useState(true)
    const [brideTalking, setBrideTalking] = useState(true)

    const [currentSpeech, setCurrentSpeech] = useState(0)
    const [firstSpeech, setFirstSpeech] = useState(false)
    const [secondSpeech, setSecondSpeech] = useState(false)
    const [thirdSpeech, setThirdSpeech] = useState(false)
    const [fourthSpeech, setFourthSpeech] = useState(false)
    const [fifthSpeech, setFifthSpeech] = useState(false)
    
    let timeOutDialogue

    useEffect(() => {
        if (currentSpeech === 0) {
            startFirstSpeech()
        } else {
            timeOutDialogue = setTimeout(() => {
                playDialogue(currentSpeech)
            }, 5000);

        }
    }, [currentSpeech])

    const startFirstSpeech = () => {
        const clickSound = document.getElementById('speech-effect')
        setCurrentSpeech(1)
        setFirstSpeech(true)
        if (!preLoad) {
            clickSound.play()
        }
    }

    const startSecondSpeech = () => {
        const clickSound = document.getElementById('speech-effect')

        setCurrentSpeech(2)
        if (!preLoad) clickSound.play()
        setBrideTalking(false)
        setFirstSpeech(false)
        setSecondSpeech(true)
    }

    const startThirdSpeech = () => {
        const clickSound = document.getElementById('speech-effect')

        setCurrentSpeech(3)
        if (!preLoad) clickSound.play()
        setBrideTalking(true)
        setGroomTalking(false)
        setSecondSpeech(false)
        setThirdSpeech(true)
    }

    const startFourthSpeech = () => {
        const clickSound = document.getElementById('speech-effect')

        setCurrentSpeech(4)
        if (!preLoad) clickSound.play()
        setGroomTalking(true)
        setThirdSpeech(false)
        setFourthSpeech(true)
    }

    const startFifthSpeech = () => {
        const clickSound = document.getElementById('speech-effect')

        setCurrentSpeech(5)
        if (!preLoad) clickSound.play()
        setFourthSpeech(false)
        setFifthSpeech(true)

        setTimeout(() => {
            next()
        }, 2000);
    }

    const skipOne = (speechNumber) => {
        clearTimeout(timeOutDialogue)

        switch (speechNumber) {
            case 0:
                startFirstSpeech()
                break;
            case 1:
                startSecondSpeech()
                break;
            case 2:
                startThirdSpeech()
                break;
            case 3:
                startFourthSpeech()
                break;
            case 4:
                startFifthSpeech()
                break;
            case 5:

                next()
                break;
            default:
                break;
        }
    }


    const playDialogue = (speechNumber) => {
        switch (speechNumber) {
            case 0:
                setTimeout(() => {
                    startFifthSpeech()
                }, 1000);
                break;
            case 1:
                startSecondSpeech()
                break;
            case 2:
                startThirdSpeech()
                break;
            case 3:
                startFourthSpeech()
                break;
            case 4:
                startFifthSpeech()
                break;
            default:

                next()
                break;
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className={styles['prologue-container']}>
            <div className={styles['prologue-mask']}>
                {brideAndGroom &&
                    <div
                        className={styles['character-container']}>
                        <motion.div animate={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6 }}
                            className={`${styles['character']} ${styles['bride']} ${brideTalking ? '' : styles.talking}`} />
                        <motion.div animate={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.6 }}
                            className={`${styles['character']} ${styles['groom']} ${groomTalking ? '' : styles.talking}`} />
                    </div>
                }

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={styles['dialogue-container']}>
                    {firstSpeech &&
                        <motion.div
                            animate={{
                                opacity: [0, 50, 100]
                            }}
                            transition={{ duration: 20 }}>
                            <div className={styles['dialogue-content']}>Welcome guys! Hope you&apos;re all doing well!</div>
                        </motion.div>
                    }

                    {secondSpeech &&
                        <motion.div
                            animate={{
                                opacity: [0, 50, 100]
                            }}
                            transition={{ duration: 20 }}>
                            <div className={styles['dialogue-content']}>First and foremost we would like to apologize that we couldn’t invite everyone
                                to our wedding due to our current situation</div>
                        </motion.div>
                    }

                    {thirdSpeech &&
                        <motion.div
                            animate={{
                                opacity: [0, 50, 100]
                            }}
                            transition={{ duration: 20 }}>
                            <div className={styles['dialogue-content']}>But despite the restrictions and government regulations, we would like to
                                share our journey together with you</div>
                        </motion.div>
                    }

                    {fourthSpeech &&
                        <motion.div
                            animate={{
                                opacity: [0, 50, 100]
                            }}
                            transition={{ duration: 20 }}>
                            <div className={styles['dialogue-content']}>So, please enjoy the virtual invitation and the live stream of our wedding
                                ceremony that we prepared for you.</div>
                        </motion.div>
                    }

                    {fifthSpeech &&
                        <motion.div
                            animate={{
                                opacity: [0, 50, 100]
                            }}
                            transition={{ duration: 20 }}>
                            <div className={styles['dialogue-content']}>We&apos;ll see you guys really soon!</div>
                        </motion.div>
                    }

                </motion.div>
                <button onClick={() => skipOne(currentSpeech)} className={styles['skip-one-button']}>
                    <div className={styles['next-arrow-icon-container']}>
                        <Image
                            src={nextArrow}
                            // layout='fill'
                            className={styles['next-arrow-icon']}
                            alt=''
                        />
                    </div>
                </button>
            </div>
        </motion.div>
    )
}