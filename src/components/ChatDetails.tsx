import React from 'react';
import avatarImage from '../assets/avatart.png'; 

interface ChatDetailsProps {
    session: any;
}

const ChatDetails: React.FC<ChatDetailsProps> = ({ session }) => {
    return (
        <div className="chat-details">
            
            <h3><img src={avatarImage} alt="Avatar" className="avatar" /> {session.name}</h3>
            {session.messages.map((message: any) => (
                <div key={message.id} style={{ display: 'flex', flexDirection: 'column', alignItems: message.action === 'USER' ? 'flex-end' : 'flex-start' }}>
                    <div className={message.action === 'USER' ? 'user-message' : 'ai-message'}>
                        <p>{message.content}</p>
                    </div>
                    <small className='message-time' style={{ alignSelf: message.action === 'USER' ? 'flex-end' : 'flex-start' }}>
                        {new Date(message.timestamp).toLocaleString()}
                    </small>
                </div>
            ))}
        </div>
    );
};

export default ChatDetails;
