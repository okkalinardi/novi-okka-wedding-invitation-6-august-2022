import React, { useEffect, useState } from 'react'
import styles from '../styles/Prologue.module.scss'
import { motion } from 'framer-motion'

export default function Prologue({next}) {
    const [brideAndGroom, setBrideAndGroom] = useState(true)
    const [groomTalking, setGroomTalking] = useState(true)
    const [brideTalking, setBrideTalking] = useState(true)

    const [firstSpeech, setFirstSpeech] = useState(false)
    const [secondSpeech, setSecondSpeech] = useState(false)
    const [thirdSpeech, setThirdSpeech] = useState(false)
    const [fourthSpeech, setFourthSpeech] = useState(false)
    const [fifthhSpeech, setFifthSpeech] = useState(false)

    useEffect(() => {
        const clickSound = document.getElementById('speech-effect')
        const prologueTheme = document.getElementById('prologue-theme')
        prologueTheme.loop = true
        
        setTimeout(() => {
            setFirstSpeech(true)
            clickSound.play()
            prologueTheme.play()
        }, 1000);

        setTimeout(() => {
            clickSound.play()
            setBrideTalking(false)
            setFirstSpeech(false)
            setSecondSpeech(true)
        }, 5500);

        setTimeout(() => {
            clickSound.play()
            setBrideTalking(true)
            setGroomTalking(false)
            setSecondSpeech(false)
            setThirdSpeech(true)
        }, 10500);

        setTimeout(() => {
            clickSound.play()
            setGroomTalking(true)
            setThirdSpeech(false)
            setFourthSpeech(true)
        }, 15500);

        setTimeout(() => {
            clickSound.play()
            setFourthSpeech(false)
            setFifthSpeech(true)

            const fadeAudio = setInterval(() => {
                // Only fade if past the fade out point or not at zero already
                if (prologueTheme.volume != 0) {
                    prologueTheme.volume = Math.max(0, prologueTheme.volume - 0.005)
                }
                // When volume at zero stop all the intervalling
                if (prologueTheme.volume === 0) {
                    clearInterval(fadeAudio);
                    prologueTheme.pause()
                    prologueTheme.currentTime = 0;
                }
            }, 50);
        }, 20500);

        setTimeout(() => {
            next()
        }, 23500);
    }, [])

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
                    <div className={styles['name-tag-container']}>
                        <motion.div animate={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -20 }}
                            exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className={`${styles['name-tag']} ${styles['bride']} ${brideTalking ? '' : styles.talking}`}>Novi Andriany</motion.div>
                        <motion.div animate={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 20 }}
                            exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5 }} className={`${styles['name-tag']} ${styles['groom']} ${groomTalking ? '' : styles.talking}`}>Okka Linardi</motion.div>
                    </div>

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

                    {fifthhSpeech &&
                        <motion.div
                            animate={{
                                opacity: [0, 50, 100]
                            }}
                            transition={{ duration: 20 }}>
                            <div className={styles['dialogue-content']}>We&apos;ll see you guys really soon!</div>
                        </motion.div>
                    }
                </motion.div>
            </div>
        </motion.div>
    )
}