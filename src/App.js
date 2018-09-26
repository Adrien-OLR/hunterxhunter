import React, { Component } from 'react';
import Homepage from "./Homepage.jsx";
import Heros from "./Heros.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Homepage/>
      <Heros/>
      </React.Fragment>
    );
  }
}

export default App;
