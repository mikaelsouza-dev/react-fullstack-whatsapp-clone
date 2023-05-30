import './App.scss'
import { useState } from 'react'
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md'
import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'

function App() {

  const [chatlist, setChatlist] = useState([
    {chatId: 1, title: 'Fulado de tal', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Fulado de tal2', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Fulado de tal3', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'}
  ])
  const [activeChat, setActiveChat] = useState({});  

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
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
          />
          ))}
        </div>  
      </div>
      <div className="contentArea">
        {activeChat.chatId !== undefined &&
            <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}

export default App