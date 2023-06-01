import './ChatWindow.scss';
import MessageItem from './MessageItem'
import { MdSearch, MdAttachFile, MdMoreVert, MdInsertEmoticon, MdClose, MdSend, MdMic } from 'react-icons/md'
import EmojiPicker from 'emoji-picker-react';
import React, { useState, useEffect, useRef } from 'react';
import Api from '../api/Api';

export default({ user, data }) => {
  const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        setList([]);
        let unsub = Api.onChatContent(data.chatId, setList, setUsers);
        return unsub;
    }, [data.chatId]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [list]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji );
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }
    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }
    const handleMicClick = () => {
        if(recognition !== null) {

            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript );
            }

            recognition.start();
        }
    }

    const handleInputKeyUp = (e) => {
        if(e.keyCode == 13) {
            handleSendClick();
        }
    }
    const handleSendClick = () => {
        if(text !== '') {
            Api.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }
    }

  return (
    <div className="chatWindow">
        <div className="header">
            <div className="headerinfo">
                <img className='avatar' src={data.image} alt="" />
          <div className="name">{data.title}</div>
            </div>

            <div className="header-buttons">
              <div className="btn">
                <MdSearch />
          </div>
          <div className="btn">
            <MdAttachFile />
            </div>
          <div className="btn">
          <MdMoreVert />
            </div> 
          </div>
        </div>
          <div ref={body} className="body">
                {list && list.map((item, key)=>(
                  <MessageItem
                      key={key}
                      data={item}
                      user={user}
                  />
                  ))}
            </div>
      
      <div className="emojiarea" style={{height: emojiOpen? '350px' : '0'}}>
        <EmojiPicker
          width={'auto'}
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="footer">
        <div className="pre">
          <div className="btn" onClick={handleCloseEmoji} style={{width: emojiOpen? 40 : 0}}>
            <MdClose  />
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
            onKeyUp={handleInputKeyUp}
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