import './App.scss'
import React, { useState } from 'react'
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md'
import ChatListItem from '../components/ChatListItem'
import './ChatListItem.scss'

function App() {
  const [chatlist, setChatlist] = useState([{}, {},{}, {}, {}, {},{}, {}])

  return (
    <div className="app-window">
      <div className="sidebar">
        
        <header>
          <img className='header--avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <MdDonutLarge className='icon' />
            </div>
            <div className="header--btn">
              <MdChat className='icon' />
            </div>
            <div className="header--btn">
              <MdMoreVert className='icon' />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <MdSearch className='icon' />
            <input type="search" placeholder='Procurar ou começar uma nova conversa.' />
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
            key={key}
            />
          ))}
        </div>
      </div>
      <div className="contentArea">
        ...
      </div>
    </div>
  )
}

export default App
