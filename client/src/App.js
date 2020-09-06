import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import logo from "./logo.png";

import GetCard from "./components/getcard.component";
import CardsList from "./components/cards.component";
import AddCard from "./components/addcard.component";


class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">CardsList App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Cards</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Create Card</Link>
                </li>
               
              </ul>
            </div>
          </nav>
          <br/>
       

        <Route path="/" exact component={CardsList} />
        <Route path="/getCard/:id" component={GetCard} />
        <Route path="/add" component={AddCard} />
        </div>
      </Router>
    );
  }
}

export default App;
