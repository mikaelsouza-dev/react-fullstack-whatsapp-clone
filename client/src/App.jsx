import './App.scss'
import { useEffect, useState } from 'react'
import { MdDonutLarge, MdChat, MdMoreVert, MdSearch } from 'react-icons/md'
import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat'
import Login from './components/Login'
import Api from './Api'

function App() {

  const [chatlist, setChatlist] = useState([])
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: '9tG2QbAe417yEcYkOhV4',
    name: 'Mikael Souza',
    avatar: 'https://lh3.googleusercontent.com/a/AAcHTtdx22fK71BrIHqVVNBAKwEZ8n48KCOX8eR_LIZM=s96-c'
  });

  const [showNewChat, setShowNewChat] = useState(false);

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatlist);
      return unsub;
    }
  }, [user])

  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    await Api.addUser(newUser);
    setUser(newUser);
  }

  if (user === null) {
    return <Login onReceive={handleLoginData}/>
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