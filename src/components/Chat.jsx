import React, { useRef, useState } from "react";
import { db } from '../services/firebaseService'
import ChatMessage from "./ChatMessage";

import SendIcon from '@material-ui/icons/Send';
import ChatIcon from '@material-ui/icons/QuestionAnswer';

const Chat = ({ roomId, user, messages }) => {

    const [inputValue, setInputValue] = useState('')
    const [isChatOpen, setIsChatOpen] = useState(false)

    const scrollingRef = useRef()

    const roomsRef = db.collection('rooms')
    const roomDoc = roomsRef.doc(roomId)

    const onSendMesasge = async (e) => {
        e.preventDefault()
        if (!inputValue) return

        const room = (await roomDoc.get()).data()
        const newRoom = { ...room }
        const newMessage = {
            txt: inputValue,
            createdAt: Date.now(),
            photoURL: user.photoURL,
            userId: user.uid
        }
        newRoom.messages.push(newMessage)
        await roomDoc.update(newRoom)

        setInputValue('')
        scrollingRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    if (!user) return null

    return <>
        <div className="chat flex column">
            <div className="header" onClick={() => {
                setIsChatOpen(!isChatOpen)
                scrollingRef.current.scrollIntoView({ behavior: 'smooth' })
            }}>
                <ChatIcon />
                <p> Room Chat </p>
                <svg className={`arrow ${!isChatOpen && "upsidedown"}`} width="10px" height="10px" viewBox="0 0 18 10">
                    <path fill="black" d="M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"></path>
                </svg>
            </div>
            <main className={isChatOpen ? "flex column " : "flex column hide"}>
                {(!messages || !messages.length) && <div className="no-messages">
                    <p>No Messages Yet</p>
                    <p>Let The Trash-Talk Begin</p>
                </div>}
                {messages && messages.map(msg => <ChatMessage
                    key={msg.id}
                    txt={msg.txt}
                    createdAt={msg.createdAt}
                    photoURL={msg.photoURL}
                    isSent={user.uid === msg.userId}
                />)}
                <div ref={scrollingRef}></div>
            </main>
            <form onSubmit={onSendMesasge} className={isChatOpen ? "flex" : "flex hide"}>
                <input
                    // autoFocus
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <button disabled={!inputValue} type="submit">
                    <SendIcon />
                </button>
            </form>
        </div>
    </>
}

export default Chat;