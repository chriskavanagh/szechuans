import React from "react";
import { useSelector } from "react-redux";

export default function Beef() {
  const { beef } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <div className="menu-section">
        <h2 className="menu-section-title">Soups &amp; Salads</h2>
        <hr />
        {beef.map((b, index) => (
          <div className="menu-item">
            <div className="menu-item-name">{b.dish}</div>
            <div className="menu-item-price">{b.price}</div>
            <div className="menu-item-description">-No description. </div>
          </div>
        ))}
      </div>
    </>
  );
}
