import React from 'react';
type Props = {
    data: {
        chatId: number;
        title: string;
        imagem: string;
      };
}

function ChatWindow( activeChat: any ) {
    console.log(activeChat)
  return (
    <div className="chatWindow">
        <div className="header">
            <div className="headerinfo">
                <img className='avatar' src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
                <div className="name">Mikael Souza</div>
            </div>
        </div>
        <div className="body"></div>
        <div className="footer"></div>
    </div>
  );
}

export default ChatWindow;