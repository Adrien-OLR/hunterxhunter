import React, { Component, Fragment } from 'react';
import Homepage from "./Homepage.jsx";
import Heros from "./Heros.jsx";
import Brigade from "./Brigade.jsx";
import Kuroro from "./Kuroro.jsx";
import Phinks from "./Phinks.jsx";

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
            <Route path="/kuroro" exact component = {Kuroro} />
            <Route path="/phinks" exact component = {Phinks} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
