import React, { useState, useEffect } from 'react';
import styles from '../styles/Chapter_2.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
import Menu from '../components/Menu'

export default function Chapter_2({ activeMenu, goToChapter, next }) {
    const [title, setTitle] = useState(true)
    const [content, setContent] = useState(false)
    const [groomTalking, setGroomTalking] = useState(false)
    const [brideTalking, setBrideTalking] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setTitle(false)
            setContent(true)
        }, 2000);
    }, [])

    useEffect(() => {
        let dialogues

        setTimeout(() => {
            dialogues = setInterval(() => {
                if (!!groomTalking) {
                    console.log('set bride')
                    setGroomTalking(false)
                    setBrideTalking(true)
                } else if (!!brideTalking) {
                    console.log('set groom')
                    setBrideTalking(false)
                    setGroomTalking(true)
                }
            }, 4000)
        }, 2000);

        return () => clearInterval(dialogues);
    }, [groomTalking, brideTalking])

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
                            <div className={styles['dialog-container']}>
                                <div className={styles['character-holder']}>
                                    <AnimatePresence exitBeforeEnter>
                                        {brideTalking &&
                                            <motion.div
                                                key={'bride'}
                                                initial={{ opacity: 0, translateX: -20 }}
                                                animate={{ opacity: 1, translateX: 0 }}
                                                exit={{ opacity: 0, translateX: -20 }}
                                                transition={{ duration: 1 }}>
                                                <div className={styles['character']}></div>
                                                <div className={styles['name-holder']}></div>
                                            </motion.div>
                                        }

                                        {groomTalking &&
                                            <motion.div
                                                key={'groom'}
                                                initial={{ opacity: 0, translateX: -20 }}
                                                animate={{ opacity: 1, translateX: 0 }}
                                                exit={{ opacity: 0, translateX: -20 }}
                                                transition={{ duration: 1 }}
                                            >
                                                <div className={`${styles['character']} ${styles.groom}`}></div>
                                                <div className={styles['name-holder']}></div>
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                </div>
                                <AnimatePresence exitBeforeEnter>
                                    {
                                        groomTalking &&
                                        <motion.div
                                            key={'groomVow'}
                                            initial={{ opacity: 0}}
                                            animate={{ opacity: 1}}
                                            exit={{ opacity: 0}}
                                            transition={{ duration: 1 }}
                                            className={`${styles['dialog-content']} ${styles['groom-content']}`}>Groom Vow</motion.div>
                                    }
                                    {
                                        brideTalking &&
                                        <motion.div
                                            key={'brideVow'}
                                            initial={{ opacity: 0}}
                                            animate={{ opacity: 1}}
                                            exit={{ opacity: 0}}
                                            transition={{ duration: 1 }}
                                            className={`${styles['dialog-content']} ${styles['bride-content']}`}>Bride Vow</motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            {/* <Dialogue speeches={speeches} /> */}
                            <Menu active={2} next={next} goToChapter={goToChapter} />
                        </motion.div>
                    }

                </AnimatePresence>
            </div>
        </motion.div>
    )
}