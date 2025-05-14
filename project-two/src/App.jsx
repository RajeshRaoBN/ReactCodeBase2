import React, { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup, signOut } from './firebase';
import ChatRoom from './components/ChatRoom';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>React Chat</h1>
        {user && <button onClick={() => signOut(auth)}>Sign Out</button>}
      </header>
      {user ? (
        <ChatRoom user={user} />
      ) : (
        <button onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</button>
      )}
    </div>
  );
}

export default App;
