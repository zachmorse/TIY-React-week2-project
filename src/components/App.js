import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BaseLayout from "./BaseLayout";
import Home from "./Home";
import Cameras from "./Cameras";
import Lenses from "./Lenses";
import Accessories from "./Accessories";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/cameras" component={Cameras} />
            <Route path="/lenses" component={Lenses} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
