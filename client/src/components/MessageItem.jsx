import React from 'react'
import './MessageItem.scss'

const MessageItem = ({data, user}) => {
  return (
      <div className="messageLine"
      style={{justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'}}
      >
          <div className="Item"
            style={{backgroundColor: user.id === data.author ? '#DCF8D6' : '#fff'}}
          >
              <div className="Text">{data.body}</div>
              <div className="Date">19:00</div>
          </div>
    </div>
  )
}

export default MessageItem