import logo from '../../src/logo.png'
import '../styles/App.css'
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EPL Season Predictor
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here To Compute
        </a>
      </header>
    </div>
  );
}

export default App;