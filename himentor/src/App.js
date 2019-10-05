import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <Homepage/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ahahah lemons
        </a>
        
      </header> */}
      <Homepage/>
      <Dashboard/>
      <Login/>
    </div>
  );
}

export default App;
