import React, { useState, useEffect } from 'react';
import ChatSessionCard from './ChatSessionCard';
import { fetchChatSessions } from '../api/chatSessionsApi';
import ChatDetails from './ChatDetails.tsx'; 

const ChatSessionList: React.FC = () => {
    const [sessions, setSessions] = useState<any[]>([]);
    const [selectedSession, setSelectedSession] = useState<any | null>(null);

    useEffect(() => {
        loadSessions(1);
    }, []);

    const loadSessions = async (page: number) => {
        const newSessions = await fetchChatSessions(page);
        setSessions((prevSessions) => [...prevSessions, ...newSessions]);
    };

    const handleSessionClick = (session: any) => {
        setSelectedSession(session);
    };

    return (
        <div className="chat-session-container">
            <div className="session-list">
            <div className="session-header">
                <h2>Messaging</h2>
            </div>
            {sessions.map((session, index) => (
    <ChatSessionCard 
        key={session.id} 
        session={session} 
        onClick={() => handleSessionClick(session)} 
        index={index} 
    />
))}

            </div>

            <div className="chat-display">
                {selectedSession ? (
                    <ChatDetails session={selectedSession}  />
                ) : (
                    <p>Select a session to view the chat</p>
                )}
            </div>
        </div>
    );
};

export default ChatSessionList;
