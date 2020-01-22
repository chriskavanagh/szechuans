import React from "react";
import "./styles.css";
import "@babel/polyfill";
import Food from "./components/Food";
import Cart from "./components/Cart";
import styled from "styled-components";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Food />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
