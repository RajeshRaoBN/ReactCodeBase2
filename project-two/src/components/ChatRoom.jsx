import React, { useEffect, useRef, useState } from 'react';
import {
  db, collection, addDoc, query,
  orderBy, onSnapshot, serverTimestamp
} from '../firebase';
import Message from './Message';

function ChatRoom({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const dummy = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      dummy.current?.scrollIntoView({ behavior: 'smooth' });
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await addDoc(collection(db, 'messages'), {
      text,
      createdAt: serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName
    });

    setText('');
    dummy.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <main>
        {messages.map(msg => (
          <Message key={msg.id} msg={msg} currentUser={user.uid} />
        ))}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
