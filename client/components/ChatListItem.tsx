const ChatListItem = () => {


    return (
        <div className="chatListItem">
            <img className="avatar" src="" alt="" />
            <div className="lines">
                <div className="line">
                    <div className="name">Mikael Souza</div>
                    <div className="date">19:00</div>
                </div>
                <div className="line">
                    <div className="lasMsg">
                        <p>Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatListItem