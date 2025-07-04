import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#282c34',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'monospace'
    }}>
      <h1>📆 Live Date & Time</h1>
      <h2>{time.toLocaleDateString()}</h2>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
