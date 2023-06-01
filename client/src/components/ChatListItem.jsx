import './ChatListItem.scss'
import React, { useState, useEffect } from 'react'


const ChatListItem = ({onClick, data, active}) => {
    const [time, setTime] = useState('');

    useEffect(()=>{
        if(data.lastMessageDate > 0) {
            let d = new Date(data.lastMessageDate.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            setTime(`${hours}:${minutes}`);
        }
    }, [data]);

    return (
        <div className={`chatListItem ${active ? 'active' : ''}`} onClick={onClick}>
            <img className="avatar" src={data.image} alt="" />
            <div className="lines">
                <div className="line">
                    <div className="name">{data.title}</div>
                    <div className="date">{time}</div>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>{data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem