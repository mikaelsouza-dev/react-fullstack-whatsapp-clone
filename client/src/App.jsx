import './App.scss'
import { useState } from 'react'
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md'
import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat'

function App() {

  const [chatlist, setChatlist] = useState([
    {chatId: 1, title: 'Fulado de tal', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Fulado de tal2', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Fulado de tal3', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'}
  ])
  const [activeChat, setActiveChat] = useState({});
  const [user, setuser] = useState({
    id: 1234,
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    name: 'Mikael Souza'
  });

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className='header--avatar' src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <MdDonutLarge className='icon' />
            </div>
            <div className="header--btn">
              <MdChat onClick={handleNewChat} className='icon' />
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
          <ChatWindow
          user={user}  
        />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  )
}

export default App