import './ChatListItem.scss'

type Props = {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    active: boolean;
    data: {
        chatId: number;
        title: string;
        imagem: string;
      };
}

const ChatListItem = ({onClick, active, data}: Props) => {


    return (
        <div className={`chatListItem ${active?'active':''}`} onClick={onClick}>
            <img className="avatar" src={data.imagem} alt="" />
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