import React from 'react';

function Message({ msg, currentUser }) {
  const isUser = msg.uid === currentUser;

  return (
    <div className={`message ${isUser ? 'sent' : 'received'}`}>
      <img src={msg.photoURL} alt="avatar" />
      <p>{msg.text}</p>
    </div>
  );
}

export default Message;
