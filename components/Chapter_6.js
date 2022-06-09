import React, { useState, useEffect, useCallback } from 'react';
import styles from '../styles/Chapter_6.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Menu from '../components/Menu'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from '../assets/gallery'


export default function Chapter_5({ activeMenu, goToChapter, next }) {
    const [title, setTitle] = useState(true)
    const [content, setContent] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTitle(false)
            setContent(true)
        }, 2000);
    }, [])

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(null);
        setViewerIsOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className={`chapter-container chapter-6-background ${content ? 'blurred' : ''}`}>
            <div className={`chapter-mask ${content ? 'content' : 'title'}`}>
                <AnimatePresence exitBeforeEnter>
                    {title && <motion.div
                        key={'title'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className='chapter-title'>
                        <div className='chapter-title-header'>Chapter 6</div>
                        <div className='chapter-title-content chapter-6'>Garden of Memories</div>
                    </motion.div>}

                    {content &&
                        <motion.div
                            key={'content'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['chapter-6-content']}>

                            <div className={styles['chapter-6-content-title']}>Our Fond Memories</div>

                            <div className={styles['chapter-6-gallery-container']}>
                                <Gallery className={styles['chapter-6-gallery']} photos={photos} onClick={openLightbox} />
                            </div>

                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel
                                            currentIndex={currentImage}
                                            views={photos.map(x => ({
                                                ...x,
                                                srcset: x.srcSet,
                                                caption: x.title
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>

                            <Menu active={2} next={next} goToChapter={goToChapter} />
                        </motion.div>
                    }

                </AnimatePresence>
            </div>
        </motion.div>
    )
}