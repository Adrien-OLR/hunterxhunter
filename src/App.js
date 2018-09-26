import React, { Component, Fragment } from 'react';
import Homepage from "./Homepage.jsx";
import Heros from "./Heros.jsx";
import Brigade from "./Brigade.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component = {Homepage}/>;
            <Route path="/brigade" exact component = {Brigade}/>;
            <Route path="/heros" exact component = {Heros} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
