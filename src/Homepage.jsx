import React, { Component } from 'react';
import { Link } from "react-router-dom"
import hxh from "./images/hxhlogo.png";

class Homepage extends Component {
  render() {
    return (
      <section className="homepage">
      <img className="hxh" src={hxh}></img>
      <ul className="display">
      <li>  <Link to="brigade"> <div class="button">Brigade</div></Link> </li>
      <li>  <Link to="heros"> <div class="button">Heros </div></Link> </li>
      <li>  <Link to=""> <div class="button">Kimera Ants</div></Link> </li>

        </ul>
      </section>
    );
  }
}

export default Homepage;
