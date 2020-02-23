import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import Toast from "light-toast";

export default function Soups({ addItem, dispatch }) {
  const { soups } = useSelector(state => state.itemReducer.items);
  return (
    <>
      <div className="menu-section">
        <h2 className="menu-section-title">Soups &amp; Salads</h2>
        <hr />
        {soups.map((soup, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-name">{soup.dish}</div>
            <div className="menu-item-price">{soup.price}</div>
            <Button
              style={{ marginTop: "1px" }}
              outline
              color="success"
              size="sm"
              onClick={() => {
                dispatch(addItem(soup.id));
                Toast.success(`${soup.dish} added to cart.`, 800, () => {
                  console.log("success");
                });
              }}
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
