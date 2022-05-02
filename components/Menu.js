import React, { useState, useEffect } from 'react';
import styles from '../styles/Menu.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import MenuLogo from '../assets/images/menu-logo.png'
import MusicLogo from '../assets/images/music-logo.png'

import MenuDetails from './Menu-detail'


export default function Menu({ active }) {
    const [audioPlaying, setAudioPlaying] = useState(true)
    const [menuModal, setMenuModal] = useState(false)
    const [activeMenu, setActiveMenu] = useState(0)

    useEffect(() => {
        const mainTheme = document.getElementById('main-theme')
        if (!mainTheme.onpause) {
            setAudioPlaying(false)
        }

        setActiveMenu(active)
    }, [])

    const menuHoverHandler = (menu, onActive) => {
        setActiveMenu(menu)
        const hoverAudio = document.getElementById('speech-effect')
        if(!onActive && menuModal) {
            hoverAudio.play()
        }
    }

    const toggleMenuModal = () => {
        if (!menuModal) {
            setMenuModal(true)
        } else {
            setMenuModal(false)
        }
        const audio = document.getElementById('enter-sound')
        audio.play()
    }

    const playPauseMainTheme = () => {
        const mainTheme = document.getElementById('main-theme')
        const audio = document.getElementById('enter-sound')
        audio.play()

        if (audioPlaying) {
            mainTheme.pause()
            setAudioPlaying(false)
        } else {
            mainTheme.play()
            setAudioPlaying(true)
        }
    }

    const handleRedirect = (chapter) => {
        if(chapter === active) {
            toggleMenuModal()
        }
    }

    return (
        <div className={styles['menu-container']}>
            <button type='button' onClick={playPauseMainTheme} className={styles['menu-button']}>
                <Image
                    src={audioPlaying ? MusicLogo : MenuLogo}
                    alt=''
                    className={styles['music-logo']}
                />
            </button>
            <button type='button' onClick={toggleMenuModal} className={styles['menu-button']}>
                <Image
                    src={MenuLogo}
                    alt=''
                    className={styles['menu-logo']}
                />
            </button>
            <AnimatePresence>
                {menuModal &&
                    <motion.div
                        key={'menu-modal'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles['menu-modal']}
                        onClick={toggleMenuModal}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['menu-list-container']}
                            onClick={(event) => { event.stopPropagation() }}
                            key={'menu-list'}
                        >
                            <div className={`${styles['menu-column']} ${styles['menu-item-list']}`}>
                                <motion.div
                                    onHoverStart={() => menuHoverHandler(0)}
                                    onHoverEnd={() => menuHoverHandler(active, true)}
                                    onClick={() => {handleRedirect(0)}}
                                    className={`${styles['menu-item']} ${activeMenu === 0 ? styles['active'] : ''}`}>
                                    <div className={styles['chapter-number']}>Prologue</div>
                                    <div className={styles['chapter-title']}>What&apos;s Important is...</div>
                                    <div className={styles['chapter-label']}>-The start of a new life-</div>
                                </motion.div>
                                <motion.div
                                    onHoverStart={() => menuHoverHandler(1)}
                                    onHoverEnd={() => menuHoverHandler(active, true)}
                                    onClick={() => {handleRedirect(1)}}
                                    className={`${styles['menu-item']} ${activeMenu === 1 ? styles['active'] : ''}`}
                                >
                                    <div className={styles['chapter-number']}>Chapter 1</div>
                                    <div className={styles['chapter-title']}>You&apos;re Here I&apos;m Here</div>
                                    <div className={styles['chapter-label']}>-The announcement of our Wedding-</div>
                                </motion.div>
                                <motion.div
                                    onHoverStart={() => menuHoverHandler(2)}
                                    onHoverEnd={() => menuHoverHandler(active, true)}
                                    onClick={() => {handleRedirect(2)}}
                                    className={`${styles['menu-item']} ${activeMenu === 2 ? styles['active'] : ''}`}
                                >
                                    <div className={styles['chapter-number']}>Chapter 2</div>
                                    <div className={styles['chapter-title']}>From Now On</div>
                                    <div className={styles['chapter-label']}>-Our vows to each other-</div>
                                </motion.div>
                                <motion.div
                                    onHoverStart={() => menuHoverHandler(3)}
                                    onHoverEnd={() => menuHoverHandler(active, true)}
                                    onClick={() => {handleRedirect(3)}}
                                    className={`${styles['menu-item']} ${activeMenu === 3 ? styles['active'] : ''}`}
                                >
                                    <div className={styles['chapter-number']}>Chapter 3</div>
                                    <div className={styles['chapter-title']}>The Journey</div>
                                    <div className={`${styles['chapter-label']} ${styles['fourth']}`}>-The time and place of our holy matrimony-</div>
                                </motion.div>
                                <motion.div
                                    onHoverStart={() => menuHoverHandler(4)}
                                    onHoverEnd={() => menuHoverHandler(active, true)}
                                    onClick={() => {handleRedirect(4)}}
                                    className={`${styles['menu-item']} ${activeMenu === 4 ? styles['active'] : ''}`}
                                >
                                    <div className={styles['chapter-number']}>Chapter 4</div>
                                    <div className={styles['chapter-title']}>That Moment&apos;s Expression</div>
                                    <div className={styles['chapter-label']}>-Messages from our loved ones-</div>
                                </motion.div>
                                <motion.div
                                    onHoverStart={() => menuHoverHandler(5)}
                                    onHoverEnd={() => menuHoverHandler(active, true)}
                                    onClick={() => {handleRedirect(5)}}
                                    className={`${styles['menu-item']} ${activeMenu === 5 ? styles['active'] : ''}`}
                                >
                                    <div className={styles['chapter-number']}>Chapter 5</div>
                                    <div className={`${styles['chapter-title']} ${styles['fifth']}`}>The Flower Blooming That Summer</div>
                                    <div className={`${styles['chapter-label']} ${styles['fifth']}`}>-Wedding gift-</div>
                                </motion.div>
                                <motion.div
                                    onHoverStart={() => menuHoverHandler(6)}
                                    onHoverEnd={() => menuHoverHandler(active, true)}
                                    onClick={() => {handleRedirect(6)}}
                                    className={`${styles['menu-item']} ${activeMenu === 6 ? styles['active'] : ''}`}
                                >
                                    <div className={styles['chapter-number']}>Final Chapter</div>
                                    <div className={styles['chapter-title']}>Garden of Memories</div>
                                    <div className={styles['chapter-label']}>-The Journey so far-</div>
                                </motion.div>
                            </div>
                            <div className={`${styles['menu-column']} ${styles['menu-details-section']}`}>
                                <MenuDetails activeMenu={activeMenu} />
                                {/* <div className={styles['menu-detail']}>
                                <div className={styles['menu-detail-image']}>
                                    <Image
                                        src={activeMenu === 0 ? PrologueImage : FirstChapterImage}
                                        alt=''
                                        className={styles['menu-detail-image-content']}
                                    />
                                </div>
                                <div className={styles['menu-detail-description']}>
                                    The start of a new life. . .
                                </div>
                            </div> */}
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}