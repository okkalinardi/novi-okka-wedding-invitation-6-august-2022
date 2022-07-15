// import React, { useState, useEffect } from 'react';
import styles from '../styles/Menu-details.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PrologueImage from '../assets/images/prologue_bg.jpg'
// import FirstChapterImage from '/chapter_1_bg.png'
// import SecondChapterImage from '/chapter_2_bg.png'
// import ThirdChapterImage from '/chapter_3_bg.png'
// import FourthChapterImage from '/chapter_4_bg.png'
// import FifthChapterImage from '/chapter_5_bg.jpg'
// import SixthChapterImage from '/chapter_6_bg.jpg'

export default function MenuDetails({ activeMenu }) {

    return (
        <AnimatePresence>
            <div
                className={styles['menu-detail']}>
                <AnimatePresence exitBeforeEnter>
                    {activeMenu === 0 && <motion.div
                        key={0}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-image']}>
                        <Image
                            src={PrologueImage}
                            alt=''
                            className={styles['menu-detail-image-content']}
                        />
                    </motion.div>}

                    {activeMenu === 1 && <motion.div
                        key={1}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-image']}>
                        <Image
                            src='/chapter_1_bg.jpg'
                            alt=''
                            className={styles['menu-detail-image-content']}
                            layout="fill"
                        />
                    </motion.div>}

                    {activeMenu === 2 && <motion.div
                        key={2}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-image']}>
                        <Image
                            src='/chapter_2_bg.jpg'
                            alt=''
                            className={styles['menu-detail-image-content']}
                            layout="fill"
                        />
                    </motion.div>}

                    {activeMenu === 3 && <motion.div
                        key={3}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-image']}>
                        <Image
                            src='/chapter_3_bg.jpg'
                            alt=''
                            className={styles['menu-detail-image-content']}
                            layout="fill"
                        />
                    </motion.div>}

                    {activeMenu === 4 && <motion.div
                        key={4}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-image']}>
                        <Image
                            src='/chapter_4_bg.jpg'
                            alt=''
                            className={styles['menu-detail-image-content']}
                            layout="fill"
                        />
                    </motion.div>}

                    {activeMenu === 5 && <motion.div
                        key={5}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-image']}>
                        <Image
                            src='/chapter_5_bg.jpg'
                            alt=''
                            className={styles['menu-detail-image-content']}
                            layout="fill"
                        />
                    </motion.div>}

                    {activeMenu === 6 && <motion.div
                        key={6}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-image']}>
                        <Image
                            src='/chapter_6_bg.jpg'
                            alt=''
                            className={styles['menu-detail-image-content']}
                            layout="fill"
                        />
                    </motion.div>}
                </AnimatePresence>

                <AnimatePresence exitBeforeEnter>
                    {activeMenu === 0 && <motion.div
                        key={'text0'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-description']}>
                        -The start of a new life-
                    </motion.div>}

                    {activeMenu === 1 && <motion.div
                        key={'text1'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-description']}>
                        -The announcement of our Wedding-
                    </motion.div>}
                    
                    {activeMenu === 2 && <motion.div
                        key={'text2'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-description']}>
                        -Our vows to each other-
                    </motion.div>}

                    {activeMenu === 3 && <motion.div
                        key={'text3'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-description']}>
                        -The time and place of our holy matrimony-
                    </motion.div>}

                    {activeMenu === 4 && <motion.div
                        key={'text4'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-description']}>
                        -Messages from our loved ones-
                    </motion.div>}

                    {activeMenu === 5 && <motion.div
                        key={'text5'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-description']}>
                        -Wedding gift-
                    </motion.div>}

                    {activeMenu === 6 && <motion.div
                        key={'text6'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }} className={styles['menu-detail-description']}>
                        -The Journey so far-
                    </motion.div>}
                </AnimatePresence>
            </div>
        </AnimatePresence>
    )
}