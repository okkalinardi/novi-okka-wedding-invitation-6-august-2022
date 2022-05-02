import React, { useState, useEffect } from 'react';
import styles from '../styles/Dialogue.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

export default function Dialogue({ speeches }) {
    const [firstSpeech, setFirstSpeech] = useState(true)
    const [secondSpeech, setSecondSpeech] = useState(false)
    const [groomSpeaking, setGroomSpeaking] = useState(false)
    const [brideSpeaking, setBrideSpeaking] = useState(false)

    useEffect(() => {
        activateSpeech(0)
    }, [])

    const activateSpeech = (targetSpeech) => {
        if (targetSpeech === 0) {
            setSecondSpeech(false)
            setFirstSpeech(true)

            if (speeches[0].speaker === 'groom') {
                setBrideSpeaking(false)
                setGroomSpeaking(true)
            } else {
                setGroomSpeaking(false)
                setBrideSpeaking(true)
            }

        } else {
            setFirstSpeech(false)
            setSecondSpeech(true)

            if (speeches[1].speaker === 'groom') {
                setBrideSpeaking(false)
                setGroomSpeaking(true)
            } else {
                setGroomSpeaking(false)
                setBrideSpeaking(true)
            }
        }


        setTimeout(() => {
            if (targetSpeech === 0) {
                activateSpeech(1)
            } else {
                activateSpeech(0)
            }
        }, 5000);
    }

    return (
        <div className={styles['dialogue-container']}>
            <div className={styles['dialogue-wrapper']}>
                <AnimatePresence exitBeforeEnter>
                    {groomSpeaking &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={`${styles['dialogue-character-holder']} ${styles.groom}`}>
                            <div className={styles['dialogue-character']}></div>
                            <div className={styles['dialogue-name-holder']}>Okka Linardi</div>
                        </motion.div>}
                    {brideSpeaking &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={`${styles['dialogue-character-holder']} ${styles.bride}`}>
                            <div className={styles['dialogue-character']}></div>
                            <div className={styles['dialogue-name-holder']}>Novi Andriany</div>
                        </motion.div>}
                </AnimatePresence>

                <AnimatePresence exitBeforeEnter>
                    {firstSpeech &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['dialogue-content-wrapper']}>
                            {speeches[0].content}
                        </motion.div>}

                    {secondSpeech &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['dialogue-content-wrapper']}>
                            {speeches[1].content}
                        </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    )
}