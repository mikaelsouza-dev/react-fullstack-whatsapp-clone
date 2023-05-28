import './App.scss'
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md'


function App() {

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
          ...
        </div>
        <div className="chatlist">
          ...
        </div>
      </div>
      <div className="contentArea">
        ...
      </div>
    </div>
  )
}

export default App
