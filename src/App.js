import React, { Component } from 'react';
import Homepage from "./Homepage.jsx";
import Brigade from "./Brigade.jsx";
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Homepage/>
      <Brigade/>
      </React.Fragment>
    );
  }
}

export default App;
