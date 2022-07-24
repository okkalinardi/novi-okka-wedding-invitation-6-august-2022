import React, { useState, useEffect } from 'react';
import styles from '../styles/Chapter_3.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Menu from '../components/Menu'

import saveTheDate from '../assets/images/save-the-date.png'
import moogle from '../assets/images/moogle.png'

export default function Chapter_2({ activeMenu, goToChapter, next }) {
    const [title, setTitle] = useState(true)
    const [content, setContent] = useState(false)
    const [firstContent, setFirstContent] = useState(false)
    const [secondContent, setSecondContent] = useState(false)

    const [weddingDay, setWeddingDay] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTitle(false)
            setContent(true)
            setFirstContent(true)
        }, 2000);
    }, [])

    useEffect(() => {
        const target = new Date('August 06, 2022 05:00:00 GMT+07:00');

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setWeddingDay(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

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

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className='chapter-container chapter-3-background'>
            <div className={`chapter-mask ${content ? 'content' : 'title'}`}>
                <AnimatePresence exitBeforeEnter>
                    {title && <motion.div
                        key={'title'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className='chapter-title'>
                        <div className='chapter-title-header'>Chapter 3</div>
                        <div className='chapter-title-content'>The Journey</div>
                    </motion.div>}

                    {content &&
                        <motion.div
                            key={'content'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['chapter-3-content']}>
                            <AnimatePresence>
                                {firstContent &&
                                    <motion.div
                                        key={'first-content'}
                                        initial={{ opacity: 0, translateY: '-110%' }}
                                        animate={{ opacity: 1, translateY: '0%' }}
                                        exit={{ opacity: 0, translateY: '-110%' }}
                                        transition={{ duration: 1 }}
                                        className={styles['chapter-3-first-content']}>
                                        <div className={styles['save-the-date-section']}>
                                            <Image
                                                src={saveTheDate}
                                                alt=''
                                                className={styles['save-the-date']}
                                            />
                                        </div>

                                        <div className={styles['countdown-section']}>
                                            <div className={styles['countdown']}>
                                                <div className={`${styles['countdown-days']} ${styles['countdown-item']}`}>
                                                    {weddingDay ? 0 : days}
                                                    <div className={styles['countdown-info']}>Days</div>
                                                </div>
                                                <div>:</div>
                                                <div className={`${styles['countdown-hours']} ${styles['countdown-item']}`}>
                                                    {weddingDay ? 0 : hours}
                                                    <div className={styles['countdown-info']}>Hours</div>
                                                </div>
                                                <div>:</div>
                                                <div className={`${styles['countdown-minutes']} ${styles['countdown-item']}`}>
                                                    {weddingDay ? 0 : minutes}
                                                    <div className={styles['countdown-info']}>Minutes</div>
                                                </div>
                                                <div>:</div>
                                                <div className={`${styles['countdown-seconds']} ${styles['countdown-item']}`}>
                                                    {weddingDay ? 0 : seconds}
                                                    <div className={styles['countdown-info']}>Seconds</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                }

                                {secondContent &&
                                    <motion.div
                                        key={'second-content'}
                                        initial={{ opacity: 0, translateY: '110%' }}
                                        animate={{ opacity: 1, translateY: '0%' }}
                                        exit={{ opacity: 0, translateY: '110%' }}
                                        transition={{ duration: 1 }}
                                        className={styles['chapter-3-second-content']}>
                                        <div className={styles['second-content-mask']}>
                                            <div className={styles['location-info-section']}>
                                                <div className={styles['location-content-title']}>
                                                    Holy Matrimony will be held at Bogor Cathedral Church
                                                </div>
                                                {/* <iframe className={styles['live-stream']} src="https://www.youtube.com/embed/8iP8xXXdvoU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                                                <iframe className={styles['live-stream']} src="https://drive.google.com/file/d/1e0Vz3dl1kxeyUik1nD2-n7Zw9uQ5Txe3/preview" title="Trailer Video" allow="autoplay" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </motion.div>
                                }
                            </AnimatePresence>
                            <button
                                type='button'
                                onClick={changeContentHandler}
                                className={styles['chapter-3-button']}>
                                <Image
                                    className={styles['moogle-image']}
                                    src={moogle}
                                    alt=''
                                />
                                <div className={styles['moogle-dialog']}>{firstContent ? 'Click me, Kupo!' : 'Go back, kupo!'}</div>
                            </button>
                            {/* <Dialogue speeches={speeches} /> */}
                            <Menu toggleZindex={()=> {}} active={3} next={next} goToChapter={goToChapter} />
                        </motion.div>
                    }

                </AnimatePresence>
            </div>
        </motion.div>
    )
}