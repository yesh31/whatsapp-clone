// ConversationPanel.js
import React from 'react';
import './styles/ConversationPanel.css';

function ConversationPanel({ selectedChat }) {
    if (!selectedChat) {
        return <p>Select a chat to view the conversation</p>;
    }

    return (
        <div className="conversation-panel">
            <h2>{selectedChat.name}</h2>
            <p className="time">{selectedChat.time}</p>
            <div className="full-conversation">
                <p>{selectedChat.message}</p>
                <p>Other messages...</p>
            </div>
        </div>
    );
}

export default ConversationPanel;
