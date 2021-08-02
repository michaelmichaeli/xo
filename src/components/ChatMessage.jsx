import moment from 'moment'
const ChatMessage = ({ txt, createdAt, isSent, photoURL }) => {
    const messageClass = isSent ? 'sent' : 'received'

    return <div className={"wrap flex align-center " + messageClass}>
        {!isSent && <img src={photoURL} alt="avatar" />}
        <div className={"message flex between align-center " + messageClass}>
            <p>{txt}</p>
        </div>
        <span>{moment(createdAt).fromNow()}</span>
    </div>
};

export default ChatMessage;