import React from "react";
import "./styles.css";
import "@babel/polyfill";
//import Food from "./components/Food";
import Cart from "./components/Cart";
import Navbar from "./components/NavBar";
import Menu from "./components/Menu";
import SoupById from "./components/SoupById";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const UserContext = React.createContext();

const App = () => {
  return (
    <Router>
      <UserContext.Provider value={"Chris Kavanagh"}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <SoupById />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
