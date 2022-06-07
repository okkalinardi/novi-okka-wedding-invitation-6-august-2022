import React, { useState, useEffect } from 'react';
import styles from '../styles/Chapter_5.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Menu from '../components/Menu'
import Dialogue from './Dialogue';

import qr from '../assets/images/QR.png'

export default function Chapter_5({ activeMenu, goToChapter, next }) {
    const [title, setTitle] = useState(true)
    const [content, setContent] = useState(false)

    const [speeches, setSpeeches] = useState([{speaker: 'groom', content: 'test'}, {speaker: 'bride', content: 'test bride'}])

    useEffect(() => {
        setTimeout(() => {
            setTitle(false)
            setContent(true)
        }, 2000);
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className='chapter-container chapter-5-background'>
            <div className={`chapter-mask ${content ? 'content' : 'title'}`}>
                <AnimatePresence exitBeforeEnter>
                    {title && <motion.div
                        key={'title'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className='chapter-title'>
                        <div className='chapter-title-header'>Chapter 5</div>
                        <div className='chapter-title-content chapter-5'>The Flower Blooming That Summer</div>
                    </motion.div>}

                    {content &&
                        <motion.div
                            key={'content'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['chapter-5-content']}>

                            <div className={styles['chapter-5-content-title']}>Wedding Gift</div>

                            <div className={styles['chapter-5-main-content']}>
                            <div className={`${styles['content']} ${styles['left']}`}>
                                    <div className={styles['qr-image-container']}>
                                        <Image
                                            src={qr}
                                            alt=''
                                        />
                                    </div>
                                    <div className={styles['account-number']}>Rekening BCA a.n. Okka Linardi 0952899943</div>
                                </div>
                                <div className={`${styles['content']} ${styles['right']}`}>
                                    <div className={styles['chapter-5-intro']}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id est eu lacus blandit dapibus. Nam pulvinar luctus aliquet. Maecenas commodo elit ut ultrices efficitur. Curabitur posuere venenatis velit, sed accumsan metus consectetur id. Fusce at tincidunt ipsum. Sed sed pretium tellus. Vivamus mauris est, rutrum blandit commodo eu, sagittis eu enim. Fusce venenatis augue sed orci luctus consectetur. Suspendisse pulvinar gravida lacus id molestie. Vestibulum ligula risus, convallis sed ante quis, placerat scelerisque felis.
                                    </div>
                                </div>
                                
                            </div>

                            <Dialogue speeches={speeches} />
                            <Menu active={2} next={next} goToChapter={goToChapter} />
                        </motion.div>
                    }

                </AnimatePresence>
            </div>
        </motion.div>
    )
}