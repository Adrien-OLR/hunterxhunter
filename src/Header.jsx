import React, { Component } from 'react';
import logohxh from "./images/Hunter_Association_logo.png";
import './scss/header.css';

class header extends Component {
  render() {
    return (
      <div className="headerr">
        <header className="header">
          <div className="backgroundhxh"></div>
          <ul className="headli">
          <li>Les catégories de Hunter</li>
          <li>|||</li>
          <li>|||</li>
          <li>|||</li>
          <li>|||</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default header;
