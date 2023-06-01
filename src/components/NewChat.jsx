import React, { useState, useEffect } from 'react'
import './NewChat.scss'
import { MdArrowBack } from 'react-icons/md'
import Api from '../api/Api';

const NewChat = ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            if (user !== null) {
                let result = await Api.getContactList(user.id);
                setList(result)
            }
        }
        getList();
    },  [user])

    const handleClose = () => {
        setShow(false);
    }

    const addNewChat = async(user2) => {
        await Api.addNewChat(user, user2);

        handleClose();
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
                  <div onClick={() => addNewChat(item)} className="item" key={key}>
                      <img className="itemavatar" src={item.avatar} alt="" />
                      <div className="itemname">{item.name}</div>
                </div>
            ))}
          </div>
    </div>
  )
}

export default NewChat