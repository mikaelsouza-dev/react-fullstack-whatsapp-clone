import React, { useState } from 'react'
import './NewChat.scss'
import { MdArrowBack } from 'react-icons/md'

const NewChat = ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Mikael Souza' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Mikael Souza' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Mikael Souza' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Mikael Souza' }
    ]);

    const handleClose = () => {
        setShow(false);
    }

    

  return (
      <div className="newChat" style={{left: show? 0 : -415}}>
          <div className="head">
              <div onClick={handleClose} className="backButton">
                <MdArrowBack style={{color: '#fff'}}/>
              </div>
              <div className="headTitle">Nova conversa</div>
          </div>
          <div className="list">
              {list.map((item, key) => (
                  <div className="item" key={key}>
                      <img className="itemavatar" src={item.avatar} alt="" />
                      <div className="itemname">{item.name}</div>
                </div>
            ))}
          </div>
    </div>
  )
}

export default NewChat