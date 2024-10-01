import React from 'react';
import ChatSessionList from './components/ChatSessionList';
import './styles.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <div className="chat-container">
                <ChatSessionList />
            </div>
        </div>
    );
};

export default App;
