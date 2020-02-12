import React from "react";
import "./styles.css";
import "@babel/polyfill";
import Food from "./components/Food";
import Cart from "./components/Cart";
import Navbar from "./components/NavBar";
import Menu from "./components/Menu";
//import Soups from "./components/Soups";
import Beef from "./components/Beef";
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
          <Route path="/menu">
            <Beef />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
