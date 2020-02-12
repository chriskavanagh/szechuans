import React from "react";
import { useSelector } from "react-redux";

export default function Beef() {
  const { beef } = useSelector(state => state.foodReducer.food);
  return (
    <>
      <h1>Beef</h1>
      <ul>
        {beef.map((b, index) => (
          <li key={index}>{b.dish}</li>
        ))}
      </ul>
    </>
  );
}
