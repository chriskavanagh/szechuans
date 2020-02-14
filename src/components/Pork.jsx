import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

export default function Pork({ addItem, dispatch }) {
  const { pork } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <div className="menu-section">
        <h2 className="menu-section-title">Pork Dishes</h2>
        <hr />
        {pork.map((p, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-name">{p.dish}</div>
            <div className="menu-item-price">{p.price}</div>
            <Button
              style={{ marginTop: "2px" }}
              outline
              color="success"
              size="sm"
              onClick={() => dispatch(addItem(p.id))}
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
