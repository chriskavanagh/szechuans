import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

export default function Beef({ addItem, dispatch }) {
  const { beef } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <div className="menu-section">
        <h2 className="menu-section-title">Beef Dishes</h2>
        <hr />
        {beef.map((b, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-name">{b.dish}</div>
            <div className="menu-item-price">{b.price}</div>
            <Button
              style={{ marginTop: "2px" }}
              outline
              color="success"
              size="sm"
              onClick={() => dispatch(addItem(b.id))}
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
