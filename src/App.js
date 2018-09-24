import React, { Component } from 'react';
import logohxh from "./images/Hunter_Association_logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
        <img className="logohxh" src={logohxh} alt="logohxh" />
        </header>
      </div>
    );
  }
}

export default App;
