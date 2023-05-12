import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Akhils's App!
        </p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <p> {count} </p>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://nba.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Basketball
        </a>
      </header>
    </div>
  );
}

export default App;

