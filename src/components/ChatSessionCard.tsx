

import React from 'react';
import avatarImage from '../assets/avatart.png'; 

interface ChatSessionCardProps {
    session: any;
    onClick: () => void;
    index: number;
}

const ChatSessionCard: React.FC<ChatSessionCardProps> = ({ session, onClick }) => {
    return (
        <div className="chat-session-card" onClick={onClick}>
            <img src={avatarImage} alt="Avatar" className="avatar" /> 
            <h3>{session.name}</h3>
            <p>{session.description}</p>
            <small className='session-timestamp'>4m ago</small>
        </div>
    );
};

export default ChatSessionCard;
