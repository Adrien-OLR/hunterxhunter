import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Homepage extends Component {
  render() {
    return (
      <div>
        <Link to="brigade"> <button> brigade </button></Link>
        <Link to="heros"> <button> hero </button></Link>
      </div>
    );
  }
}

export default Homepage;
