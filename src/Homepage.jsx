import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Homepage extends Component {
  render() {
    return (
      <div>
      <ul>
      <li>  <Link to="brigade"> <button> brigade </button></Link> </li>
      <li>  <Link to="heros"> <button> hero </button></Link> </li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
