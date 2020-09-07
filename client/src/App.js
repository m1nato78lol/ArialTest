import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

import GetCard from "./components/getcard.component";
import CardsList from "./components/cards.component";


class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"target="_blank">
              <img src={logo} width="30" height="30"  />
            </a>
            <div className="navbar-brand">CardsList App</div>
          </nav>
          <br/>
       
       
        <Route path="/cards" component={CardsList} />
        <Route path="/get/:id" component={GetCard} />
        </div>
      </Router>
    );
  }
}

export default App;
