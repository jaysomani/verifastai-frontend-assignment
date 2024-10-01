import React from 'react';

interface ChatDetailsModalProps {
    session: any;
    onClose: () => void;
}

const ChatDetailsModal: React.FC<ChatDetailsModalProps> = ({ session, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>Close</button>
                
                <h2>{session.name}</h2>
                {session.messages.map((message: any) => (
                    <div key={message.id} className={message.action === 'USER' ? 'user-message' : 'ai-message'}>
                        <p>{message.content}</p>
                        <small>{new Date(message.timestamp).toLocaleString()}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatDetailsModal;
