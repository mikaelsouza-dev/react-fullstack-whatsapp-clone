import './ChatWindow.scss';
import {MdSearch, MdAttachFile, MdMoreVert} from 'react-icons/md'

function ChatWindow( activeChat ) {
    console.log(activeChat)
  return (
    <div className="chatWindow">
        <div className="header">
            <div className="headerinfo">
                <img className='avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
              <div className="name">Mikael Souza</div>
            </div>

            <div className="header-buttons">
              <div className="btn">
                <MdSearch />
                <MdAttachFile />
                <MdMoreVert />
              </div>
            </div>
        </div>
        <div className="body"></div>
        <div className="footer"></div>
    </div>
  );
}

export default ChatWindow;