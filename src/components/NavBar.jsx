import React from "react";
import styled from "styled-components";
import { Link, NavLink, withRouter } from "react-router-dom";

const Nav = styled.nav`
  background: #fcfcfc;
  font-family: "Raleway", sans-serif;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    margin: 20px 0px 20px 390px;
  }
  li {
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    padding: 0 10px;
  }
  .brand-logo {
    font-size: 25px;
  }
`;

const Navbar = props => {
  return (
    <Nav className="nav-wrapper">
      <div className="container">
        <Link className="brand-logo" to="/">
          Szechuan's Restaurant
        </Link>
        <ul className="right">
          <li>
            <NavLink exact to="/">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default withRouter(Navbar);
