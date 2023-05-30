import './ChatListItem.scss'


const ChatListItem = ({onClick, data}) => {


    return (
        <div className="chatListItem" onClick={onClick}>
            <img className="avatar" src={data.avatar} alt="" />
            <div className="lines">
                <div className="line">
                    <div className="name">{data.title}</div>
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