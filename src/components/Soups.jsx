import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

export default function Soups() {
  const { soups } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <h1>Soups</h1>
      <ul>
        {soups.map((soup, index) => (
          <li key={index}>{soup.dish}</li>
        ))}
      </ul>
    </>
  );
}
