import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/text')
      .then(res => res.json())
      .then(data => {
        setDisplayedText(data.text);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8080/api/text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, username }),
    });
    setText('');
    setUsername('');
  };

  return (
    <div className="App">
      <h2>랜덤 명언: {displayedText ? displayedText : "아직 저장된 명언이 없거나 서버와 연결되지 않았습니다."}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">명언 저장</button>
      </form>
    </div>
  );
}

export default App;
