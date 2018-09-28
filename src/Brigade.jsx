import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Brigade extends Component {
  render() {
    return (
      <div className="fond">
      <ul className="ui">
        <li>
          <div className="backunder">
            <Link to="kuroro"><p>Kuroro Lucifer</p></Link>
          </div>
        </li>
        <li>
          <div className="backunder1">
            <Link to="Phinks"><p>Phinks</p></Link>
          </div>
        </li>
        <li><div className="backunder2"><p>Feitan Pohtoh</p></div></li>
        <li><div className="backunder3"><p>Sharnalk Ryûsei</p></div></li>
        <li><div className="backunder4"><p>Machi Komachine</p></div></li>
        <li><div className="backunder5"><p>Nobunaga Hazama</p></div></li>
        <li><div className="backunder6"><p>Pakunoda</p></div></li>
        <li><div className="backunder7"><p>Uvôguine</p></div></li>
      </ul>
      </div>
    );
  }
}

export default Brigade;
