import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Phinks extends Component {
  render() {
    return (
      <div className="fondPhinks">
      <h1 className="titrePhinks">Phinks Magkav</h1>
      <ul className="Phinks">
      <li className="imgPhinks"></li>
      <li className="textPhinks"><p>
      Phinks est l'un des membres de la Brigade Fantôme,
      <br/>
      une bande de voleurs avec des primes de classe A.
      <br/>
      Il est considéré comme le deuxième membre le plus fort
      <br/>
      en termes de puissance.</p></li>
      </ul>
      <ul className="Phinks2">
      <li className="textPhinks2">
      Phinks est du Nen du renforcement il utilise sa technique "Ripper Cyclotron",
      <br/>
       cette atout lui permet d'augmenter la puissance de son Nen en faisant tourner son bras.
        </li>
      <li className="imgPhinks2"></li>
      </ul>
      </div>
    );
  }
}
export default Phinks;
