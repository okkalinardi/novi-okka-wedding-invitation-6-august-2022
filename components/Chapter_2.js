import React, { useState, useEffect } from 'react';
import styles from '../styles/Chapter_2.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
import Menu from '../components/Menu'
import { groomSpeech1, groomSpeech2, brideSpeech1, brideSpeech2 } from '../constants/vows'

export default function Chapter_2({ activeMenu, goToChapter, next }) {
    const [title, setTitle] = useState(true)
    const [content, setContent] = useState(false)
    const [groomTalking, setGroomTalking] = useState(true)
    const [brideTalking, setBrideTalking] = useState(false)
    const [groomSpeech_1, setGroomSpeech_1] = useState(true)
    const [groomSpeech_2, setGroomSpeech_2] = useState(false)
    const [brideSpeech_1, setBrideSpeech_1] = useState(false)
    const [brideSpeech_2, setBrideSpeech_2] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTitle(false)
            setContent(true)
        }, 2000);
    }, [])

    let dialogueTimeOut

    useEffect(() => {
        let dialogues

        dialogueTimeOut = setTimeout(() => {
            dialogues = setInterval(() => {
                if (!!groomTalking) {
                    if (!!groomSpeech_1) {
                        setGroomSpeech_1(false)
                        setGroomSpeech_2(true)
                    } else {
                        setGroomTalking(false)
                        setGroomSpeech_2(false)
                        setBrideTalking(true)
                        setBrideSpeech_1(true)
                    }
                } else if (!!brideTalking) {
                    if (!!brideSpeech_1) {
                        setBrideSpeech_1(false)
                        setBrideSpeech_2(true)
                    } else {
                        setBrideTalking(false)
                        setBrideSpeech_2(false)
                        setGroomTalking(true)
                        setGroomSpeech_1(true)
                    }
                }
            }, 10000)
        }, 2000);

        return () => clearInterval(dialogues);
    }, [groomTalking, brideTalking, groomSpeech_1, groomSpeech_2, brideSpeech_1, brideSpeech_2])

    const nextSpeech = () => {
        clearTimeout(dialogueTimeOut)
        if (!!groomTalking) {
            if (!!groomSpeech_1) {
                setGroomSpeech_1(false)
                setGroomSpeech_2(true)
            } else {
                setGroomTalking(false)
                setGroomSpeech_2(false)
                setBrideTalking(true)
                setBrideSpeech_1(true)
            }
        } else if (!!brideTalking) {
            if (!!brideSpeech_1) {
                setBrideSpeech_1(false)
                setBrideSpeech_2(true)
            } else {
                setBrideTalking(false)
                setBrideSpeech_2(false)
                setGroomTalking(true)
                setGroomSpeech_1(true)
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className='chapter-container chapter-2-background'>
            <div className={`chapter-mask ${content ? 'content' : 'title'}`}>
                <AnimatePresence exitBeforeEnter>
                    {title && <motion.div
                        key={'title'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className='chapter-title'>
                        <div className='chapter-title-header'>Chapter 2</div>
                        <div className='chapter-title-content'>From Now On</div>
                    </motion.div>}

                    {content &&
                        <motion.div
                            key={'content'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['chapter-2-content']}>
                            <div className={styles['content-container']}>
                                <div className={`${styles['content-item']} ${styles['content-left']}`}>
                                <AnimatePresence exitBeforeEnter>
                                    {
                                        groomTalking && 
                                        <motion.div
                                        key={'groom'}
                                        initial={{ opacity: 0, translateX: '-110%' }}
                                        animate={{ opacity: 1, translateX: '0%' }}
                                        exit={{ opacity: 0, translateX: '-110%' }}
                                        transition={{ duration: 1 }}
                                        className={`${styles['character']} ${styles['groom']}`}>
                                        </motion.div>
                                    }
                                    {
                                        brideTalking && 
                                        <motion.div
                                        key={'bride'}
                                        initial={{ opacity: 0, translateX: '-110%' }}
                                        animate={{ opacity: 1, translateX: '0%' }}
                                        exit={{ opacity: 0, translateX: '-110%' }}
                                        transition={{ duration: 1 }}
                                        className={`${styles['character']} ${styles['bride']}`}>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                                </div>
                                <div className={`${styles['content-item']} ${styles['content-right']}`}>
                                <div className={styles['vow-content']}>
                                    <AnimatePresence exitBeforeEnter>
                                    {
                                        groomSpeech_1 && 
                                        <motion.div
                                        key={'groom-first-dpeech'}
                                        initial={{ opacity: 0, translateX: '110%' }}
                                        animate={{ opacity: 1, translateX: '0%' }}
                                        exit={{ opacity: 0, translateX: '110%' }}
                                        transition={{ duration: 1 }}
                                        className={styles['vow']}>
                                            {groomSpeech1}
                                        </motion.div>
                                    }
                                    {
                                        groomSpeech_2 && 
                                        <motion.div
                                        key={'groom-second-dpeech'}
                                        initial={{ opacity: 0, translateX: '110%' }}
                                        animate={{ opacity: 1, translateX: '0%' }}
                                        exit={{ opacity: 0, translateX: '110%' }}
                                        transition={{ duration: 1 }}
                                        className={styles['vow']}>
                                            {groomSpeech2}
                                        </motion.div>
                                    }
                                    {
                                        brideSpeech_1 && 
                                        <motion.div
                                        key={'bride-first-dpeech'}
                                        initial={{ opacity: 0, translateX: '110%' }}
                                        animate={{ opacity: 1, translateX: '0%' }}
                                        exit={{ opacity: 0, translateX: '110%' }}
                                        transition={{ duration: 1 }}
                                        className={styles['vow']}>
                                            {brideSpeech1}
                                        </motion.div>
                                    }
                                    {
                                        brideSpeech_2 && 
                                        <motion.div
                                        key={'bride-second-dpeech'}
                                        initial={{ opacity: 0, translateX: '110%' }}
                                        animate={{ opacity: 1, translateX: '0%' }}
                                        exit={{ opacity: 0, translateX: '110%' }}
                                        transition={{ duration: 1 }}
                                        className={styles['vow']}>
                                            {brideSpeech2}
                                        </motion.div>
                                    }
                                    </AnimatePresence>
                                </div>
                                <button onClick={nextSpeech} className={styles['next-speech-button']}>Next</button>
                                </div>
                            </div>
                            <Menu toggleZindex={() => { }} active={2} next={next} goToChapter={goToChapter} />
                        </motion.div>
                    }

                </AnimatePresence>
            </div>
        </motion.div>
    )
}