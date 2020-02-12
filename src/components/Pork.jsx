import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

export default function Pork() {
  const { pork } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <h1>Beef</h1>
      <ul>
        {pork.map((p, index) => (
          <li key={index}>{p.dish}</li>
        ))}
      </ul>
    </>
  );
}
