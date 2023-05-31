import './ChatWindow.scss';
import MessageItem from './MessageItem'
import { MdSearch, MdAttachFile, MdMoreVert, MdInsertEmoticon, MdClose, MdSend, MdMic } from 'react-icons/md'
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

function ChatWindow(activeChat) {

  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }
  
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([{}, {}, {}]);
    
  const handleEmojiClick = (e) => {
    setText(text + e.emoji)
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
        console.log(e.results[0][0].transcript);
      }

      recognition.start();
    }
  }

  const handleSendClick = () => {

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
      <div className="body">
        {list.map((item, key) => (
        <MessageItem
          key={key}
          data={item}
        />
        ))}
      </div>
      
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
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="pos">
          {text === '' &&
            <div className="btn">
              <MdMic onClick={handleMicClick} style={{color: listening? '#126ece' : '#919191'}} />
            </div>
          }
          {text !== '' &&
            <div className="btn">
              <MdSend onClick={handleSendClick} />
            </div>
          }
        </div>
        </div>
    </div>
  );
}

export default ChatWindow;