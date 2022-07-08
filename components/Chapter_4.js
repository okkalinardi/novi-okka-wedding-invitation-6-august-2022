import React, { useState, useEffect } from 'react';
import styles from '../styles/Chapter_4.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Menu from '../components/Menu'

import avatar1 from '../assets/images/avatar-1.png'
import avatar2 from '../assets/images/avatar-2.png'
import avatar3 from '../assets/images/avatar-3.png'
import avatar4 from '../assets/images/avatar-4.png'
import avatar5 from '../assets/images/avatar-5.png'
import avatar6 from '../assets/images/avatar-6.png'
import avatar7 from '../assets/images/avatar-7.png'
import avatar8 from '../assets/images/avatar-8.png'
import avatar9 from '../assets/images/avatar-9.png'
import avatar10 from '../assets/images/avatar-10.png'
import avatar11 from '../assets/images/avatar-11.png'
import avatar12 from '../assets/images/avatar-12.png'
import avatar13 from '../assets/images/avatar-13.png'
import avatar14 from '../assets/images/avatar-14.png'
import avatar15 from '../assets/images/avatar-15.png'
import loader from '../assets/images/loader.gif'

export default function Chapter_4({ activeMenu, goToChapter, next }) {
    const [title, setTitle] = useState(true)
    const [content, setContent] = useState(false)
    const [avatarPicker, setAvatarPicker] = useState(false)
    const [messages, setMessages] = useState([])
    const [avatarList, setAvatarList] = useState([avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15])
    const [chosenAvatar, setChosenAvatar] = useState(0)
    const [sender, setSender] = useState('')
    const [message, setMessage] = useState('')
    const [zIndex, setZindex] = useState(false)
    const [loading, setLoading] = useState(false)

    const toggleZindex = (value) => {
        if(!!value) {
            setZindex(true)
        } else {
            setZindex(false)
        }
      }

    useEffect(() => {
        fetchComments()
        setTimeout(() => {
            setTitle(false)
            setContent(true)
        }, 2000);
    }, [])

    const toggleMenuModal = () => {
        if(avatarPicker) {
            setAvatarPicker(false)
        } else {
            setAvatarPicker(true)
        }
    }

    const chooseAvatar = (avatar) => {
        setChosenAvatar(avatar)
        toggleMenuModal()
    }

    const submitMessage = async () => {
        setLoading(true)
        const messageObject = {message: '',avatar: null, sender: ''}
        messageObject.message = message
        messageObject.avatar = chosenAvatar
        messageObject.sender = sender

        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageObject)
          })
        
        setMessage('')
        setSender('')
        setChosenAvatar(0)

        fetchComments()
        setLoading(false)
        var objDiv = document.getElementById("message-screen");
        objDiv.scrollTop = 0;
    }

    const fetchComments = async ()=> {
        try {
            setLoading(true)
          const res = await fetch('/api/comments')
        const data = await res.json()
        setMessages([...data].reverse())
        } catch (error) {
          console.log(error, 'ERROR')
        } finally {
            setLoading(false)
        }
      }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} className='chapter-container chapter-4-background'>
            <div className={`chapter-mask ${content ? 'content' : 'title'} chapter-4-mask`}>
                <AnimatePresence exitBeforeEnter>
                    {title && <motion.div
                        key={'title'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} className='chapter-title'>
                        <div className='chapter-title-header'>Chapter 4</div>
                        <div className='chapter-title-content chapter-4'>That moment&apos;s Expression</div>
                    </motion.div>}

                    {content &&
                        <motion.div
                            key={'content'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['chapter-4-content']}>
                            <div className={styles['content-title']}>Message Area</div>
                            {/* <div className={styles['content-intro']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet lectus ultricies, laoreet tortor vel, iaculis mauris. Sed dignissim scelerisque nunc, maximus efficitur lacus semper ut. Nulla ultricies quam sed metus eleifend congue. Vestibulum facilisis magna orci, nec egestas libero euismod at. Mauris id ligula bibendum, euismod diam nec, cursus felis. Proin vulputate lorem non nunc lobortis aliquet. Aliquam facilisis rutrum nibh. Praesent viverra, neque eu pharetra tempus, ipsum ex eleifend nunc, nec feugiat nunc ex vitae arcu. Nunc sed quam consequat, eleifend ligula ut, dignissim velit. Phasellus imperdiet maximus sapien et semper. Duis eget feugiat eros, quis vestibulum justo. Aliquam eget fermentum eros. Nulla facilisi. Suspendisse vitae egestas sapien. Etiam laoreet sollicitudin risus id auctor.</div> */}
                            <div className={styles['message-monitor']}>
                                <div id='message-screen' className={styles['message-screen']}>

                                    {
                                        messages.map((message, i) => {
                                            if (i % 2 !== 0) {
                                                return (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, translateY: 50 }}
                                                        animate={{ opacity: 1, translateY: 0 }}
                                                        exit={{ opacity: 0, translateY: 50 }}
                                                        transition={{ duration: 1, delay: i * 0.5 }}
                                                        className={`${styles['message-item']} ${styles['right']}`}>
                                                        <div className={`${styles['message-avatar']} ${styles['right']} ${zIndex ? styles['mobile-hide']: ''}`}>
                                                            <div className={`${styles['message-avatar-content']} ${styles['right']}`}>
                                                                <Image
                                                                    src={avatarList[message.avatar]}
                                                                    alt=''
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={`${styles['message-content']} ${styles['right']}`}>
                                                            <div className={`${styles['sender-section']} ${styles['right']}`}>{message.sender}</div>
                                                            <div className={`${styles['message-section']} ${styles['right']}`}>
                                                                {message.message}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )
                                            } else {
                                                return (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, translateY: 50 }}
                                                        animate={{ opacity: 1, translateY: 0 }}
                                                        exit={{ opacity: 0, translateY: 50 }}
                                                        transition={{ duration: 1, delay: i * 0.5 }} className={styles['message-item']}>
                                                        <div className={`${styles['message-avatar']} ${zIndex ? styles['mobile-hide']: ''}`}>
                                                            <div className={styles['message-avatar-content']}>
                                                                <Image
                                                                    src={avatarList[message.avatar]}
                                                                    alt=''
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={styles['message-content']}>
                                                            <div className={styles['sender-section']}>{message.sender}</div>
                                                            <div className={styles['message-section']}>
                                                                {message.message}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )
                                            }
                                        })
                                    }

                                </div>
                            </div>
                            <form onSubmit={(event)=>{event.preventDefault(); submitMessage()}} className={styles['message-keyboard-section']}>
                                <div className={styles['message-avatar-picker-section']} onClick={toggleMenuModal}>
                                    <Image
                                        src={avatarList[chosenAvatar]}
                                        alt=''
                                    />
                                </div>
                                <div className={styles['message-input-section']}>
                                    <input required placeholder='Enter your name here' type="text" value={sender} onChange={(event) => setSender(event.target.value)} className={styles['message-sender-input']} />
                                    <textarea required placeholder='Leave a message' className={styles['message-content-input']} value={message} onChange={(event) => setMessage(event.target.value)} />
                                </div>
                                <button disabled={loading} className={styles['send-message-button']} type="submit">Send</button>
                            </form>


                            <AnimatePresence>
                                {
                                    avatarPicker &&
                                    <motion.div
                                        key={'avatar-picker-modal'}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className={styles['avatar-picker-modal']}
                                        onClick={toggleMenuModal}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 1 }}
                                            className={styles['avatar-picker-container']}
                                            onClick={(event) => { event.stopPropagation() }}
                                            key={'avatar-picker'}
                                        >
                                            {
                                                avatarList.map((avatar, i) => {
                                                    return (
                                                        <div key={i} className={styles['avatar-picker-item']} onClick={()=> chooseAvatar(i)}>
                                                            <Image
                                                                src={avatar}
                                                                alt=''
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </motion.div>
                                    </motion.div>
                                }
                            </AnimatePresence>

                            <AnimatePresence>
                {loading &&
                    <motion.div
                        key={'loading-modal'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles['avatar-picker-modal']}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 1 }}
                            className={styles['loading-container']}
                            key={'loading-container'}
                        >
                            <Image
                                src={loader}
                                alt=''
                            />
                        </motion.div>
                    </motion.div>
                }
            </AnimatePresence>


                            {/* <Dialogue speeches={speeches} /> */}
                            <Menu toggleZindex={toggleZindex} active={4} next={next} goToChapter={goToChapter} />
                        </motion.div>
                    }

                </AnimatePresence>
            </div>
        </motion.div>
    )
}