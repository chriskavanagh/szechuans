import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

export default function Soups() {
  const { soups } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <div className="menu-section">
        <h2 className="menu-section-title">Soups &amp; Salads</h2>
        <hr />
        {soups.map((soup, index) => (
          <div className="menu-item">
            <div className="menu-item-name">{soup.dish}</div>
            <div className="menu-item-price">{soup.price}</div>
            <div className="menu-item-description">-No description. </div>
          </div>
        ))}
      </div>
    </>
  );
}
