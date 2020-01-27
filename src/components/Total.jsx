import React from "react";
import styled from "styled-components";

const Div = styled.div`
  max-height: 160px;
  background: #f2f2f2;
  border: 1px solid skyblue;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-row-gap: 5px;
  grid-column-gap: 10px;
  grid-template-areas:
    "sub-label sub-data"
    "tax-label tax-data"
    ". ."
    "total-label total-data";

  .gray {
    color: darkgrey;
    font-weight: bold;
  }
  .sub-label {
    grid-area: sub-label;
    padding: 10px;
  }
  .sub-data {
    grid-area: sub-data;
    padding: 10px;
  }
  .tax-label {
    grid-area: tax-label;
    padding: 10px;
  }
  .tax-data {
    grid-area: tax-data;
    padding: 10px;
  }
  .total-label {
    grid-area: total-label;
    padding: 15px;
    font-weight: bold;
  }
  .total-data {
    grid-area: total-data;
    padding: 15px;
    font-weight: bold;
  }
  .line {
    border: 0;
    border-bottom: 1px dashed #ccc;
    background: #999;
  }
`;

export default function Total({ subtotal }) {
  let tax = subtotal * 0.05;
  let total = tax + subtotal;
  return (
    <Div className="total">
      <div className="gray sub-label">Subtotal:</div>
      <div className="gray tax-label">Tax (5%):</div>

      <div className="sub-data">${subtotal.toFixed(2)}</div>
      <div className="tax-data">${tax.toFixed(2)}</div>

      <div className="total-label">Total:</div>
      <div className="total-data">${total.toFixed(2)}</div>
    </Div>
  );
}
