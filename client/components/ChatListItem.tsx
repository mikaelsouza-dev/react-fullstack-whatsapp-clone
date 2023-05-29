const ChatListItem = () => {


    return (
        <div className="chatListItem">
            <img className="avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="lines">
                <div className="line">
                    <div className="name">Mikael Souza</div>
                    <div className="date">19:00</div>
                </div>
                <div className="line">
                    <div className="lastMsg">
                        <p>Opa, tudo bem?aaaaaaaaaaaaaaaaaaaaaaaaaaaa sdasdasd</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem