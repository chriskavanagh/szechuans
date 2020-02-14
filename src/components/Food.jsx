import React, { useEffect, useState } from "react";
//import { food } from "./../../data/food";
import styled from "styled-components";
import { addItem } from "./../actions/itemAction";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";

const Div = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin: 4rem 1.5rem;
`;

const Li = styled.li`
  list-style: none;
  margin: 10px auto;
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 300px 200px;
  justify-content: center;
`;

const Button = styled.button`
  margin-left: 7px;
  border-radius: 5px;
  color: blue;
  font-size: 17px;
`;

export default function Food() {
  const menu = useSelector(state => state.itemReducer.items);
  const dispatch = useDispatch();
  //const [menu, setMenu] = useState([]);

  /* useEffect(() => {
    const result = food;
    setMenu(result);
  }, []); */
  return (
    <Div>
      <H1>Menu</H1>
      <ul>
        {menu.map(f => (
          <Li key={f.id}>
            {f.dish}
            <Button onClick={() => dispatch(addItem(f.id))}>Add To Cart</Button>
          </Li>
        ))}
      </ul>
    </Div>
  );
}
