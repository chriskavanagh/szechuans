import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

export default function Pork() {
  const { pork } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <div className="menu-section">
        <h2 className="menu-section-title">Pork Dishes</h2>
        <hr />
        {pork.map((p, index) => (
          <div className="menu-item">
            <div className="menu-item-name">{p.dish}</div>
            <div className="menu-item-price">{p.price}</div>
            <div className="menu-item-description">-No description. </div>
          </div>
        ))}
      </div>
    </>
  );
}
