import React, { Component } from 'react';
import logohxh from "./images/Hunter_Association_logo.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        <img className="logohxh" src={logohxh} />
        </header>
      </div>
    );
  }
}

export default App;
