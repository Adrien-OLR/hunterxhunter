import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Brigade extends Component {
  render() {
    return (
      <div className="fond">
      <ul className="ui">
        <li className="backunder">
          <div className="backunder">
          <Link to="kuroro"><p>Kuroro Lucifer</p></Link>

          </div>


        </li>
        <li className="backunder1"><p>Phinks Magkav</p></li>
        <li className="backunder2"><p>Feitan Pohtoh</p></li>
        <li className="backunder3"><p>Sharnalk Ryûsei</p></li>
        <li className="backunder4"><p>Machi Komachine</p></li>
        <li className="backunder5"><p>Nobunaga Hazama</p></li>
        <li className="backunder6"><p>Pakunoda</p></li>
        <li className="backunder7"><p>Uvôguine</p></li>
      </ul>
      </div>
    );
  }
}

export default Brigade;
