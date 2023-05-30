import './ChatWindow.scss';
import { MdSearch, MdAttachFile, MdMoreVert, MdInsertEmoticon, MdClose, MdSend, MdMic } from 'react-icons/md'
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

function ChatWindow(activeChat) {
  
  const [emojiOpen, setEmojiOpen] = useState(false);
    
  const handleEmojiClick = () => {
    console.log('t')
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

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
      
      <div className="emojiarea" style={{height: emojiOpen? '350px' : '0'}}>
        <EmojiPicker
          width={'auto'}
          onEmojiClick={handleEmojiClick}
        />
      </div>

      <div className="footer">
        <div className="pre">
          <div className="btn">
            <MdClose onClick={handleCloseEmoji} style={{width: emojiOpen? 40 : 0}} />
          </div>
          <div className="btn" onClick={handleOpenEmoji}>
            <MdInsertEmoticon style={{color: emojiOpen? '#009688' : '#919191'}} />
          </div>
        </div>
        <div className="inputarea">
          <input
            className="input"
            type="text"
            placeholder='Digite uma mensagem'
          />
        </div>
        <div className="pos">
          <div className="btn">
            <MdSend />
          </div>
        </div>
        </div>
    </div>
  );
}

export default ChatWindow;