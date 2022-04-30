import styles from '../styles/Landing.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion'

import logo from '../assets/images/logo.png'

export default function Intro({next}) {
    function play() {
        const audio = document.getElementById('enter-sound')
        audio.play()
        next()
    }

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
            className={styles['landing-container']}>
            <div className={styles['landing-mask']}>
                <div
                    className={styles['landing-content']}>
                    <div className={styles['landing-logo']}>
                        <Image
                            src={logo}
                            alt=''
                            width={500}
                            height={500}
                            className={styles['enter-button-icon']}
                        />
                    </div>
                    <div>
                        <button onClick={play} className={styles['enter-button']} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}