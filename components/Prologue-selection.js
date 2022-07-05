import React from 'react';
import styles from '../styles/Prologue-selection.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import sakuraPetal from '../assets/images/sakura-petal.png'

export default function PrologueSelection({activatePrologue, skipPrologue}) {
    return (
        <AnimatePresence>
            <motion.div
                key={'prologue-modal'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles['prologue-modal']}>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1 }}
                    className={styles['prologue-selection-container']}
                    key={'prologue-selection'}
                >
                    <div className={styles['prologue-selection-title']}>
                        Skip Prologue?
                    </div>
                    <div className={styles['prologue-selection-buttons-container']}>
                        <button className={`${styles['yes-button']} ${styles['button']}`} onClick={()=> skipPrologue()}>yes
                            <div className={`${styles['sakura-petal']} ${styles['top-left']}`}>
                                <Image
                                    src={sakuraPetal}
                                    alt=''
                                />
                            </div>
                            <div className={`${styles['sakura-petal']} ${styles['bottom-right']}`}>
                                <Image
                                    src={sakuraPetal}
                                    alt=''
                                />
                            </div>
                        </button>
                        <button className={`${styles['no-button']} ${styles['button']}`} onClick={()=> activatePrologue()}>no
                        <div className={`${styles['sakura-petal']} ${styles['top-right']}`}>
                                <Image
                                    src={sakuraPetal}
                                    alt=''
                                />
                            </div>
                            <div className={`${styles['sakura-petal']} ${styles['bottom-left']}`}>
                                <Image
                                    src={sakuraPetal}
                                    alt=''
                                />
                            </div>
                            </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>

    )
}