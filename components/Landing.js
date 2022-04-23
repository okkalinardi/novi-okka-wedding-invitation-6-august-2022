import styles from '../styles/Landing.module.scss'
import Image from 'next/image'

import logo from '../assets/images/logo.png'

export default function Intro() {
    function play() {
        const audio = document.getElementById('enter-sound')
        audio.play()
    }

    return (
        <div
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
        </div>
    )
}