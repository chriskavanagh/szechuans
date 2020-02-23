import React from "react";
import "./styles.css";
import "@babel/polyfill";
//import Food from "./components/Food";
import Cart from "./components/Cart";
import Navbar from "./components/NavBar";
import Menu from "./components/Menu";
import SoupById from "./components/SoupById";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Context Hook
export const UserContext = React.createContext();

const user = {
  id: "001",
  first: "Chris",
  last: "Kavanagh",
  state: "VA",
  city: "Roanoke"
};

const App = () => {
  return (
    <UserContext.Provider value={user}>
      <Router>
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
      </Router>
    </UserContext.Provider>
  );
};

export default App;
