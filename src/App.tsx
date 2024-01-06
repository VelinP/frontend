import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Submit } from './components/Submit';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Submit/>
      </header>
    </div>
  );
}

export default App;
