import React from "react";
import styled from "styled-components";
import {
  addQuantity,
  removeQuantity,
  removeItem
} from "./../actions/itemAction";
import { useSelector, useDispatch } from "react-redux";

const H1 = styled.h1`
  font-size: 30px;
  color: skyblue;
  margin-top: 3rem;
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 7px;
  border-radius: 7px;
  color: red;
`;

const AddBtn = styled.button`
  padding: 5px 10px;
  margin-left: 0px;
  border-radius: 7px;
  color: green;
  font-weight: bolder;
  font-size: 17px;
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 230px 50px 50px 50px 115px;
  align-items: center;
  justify-content: center;

  .quantity {
    background: #a59ce1;
    border-radius: 45%;
    padding: 5px 8px;
    color: whitesmoke;
    font-weight: bolder;
  }
`;

const Li = styled.li`
  margin: 20px 0;
  font-size: 20px;
  list-style: none;
  text-align: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    ". . . header . . ."
    ". . . cart . . .";
  .header {
    grid-area: header;
    place-self: center;
  }
`;
const Div = styled.div`
  grid-area: cart;
  background: #f2f2f2;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin-top: 3rem;
`;

export default function Cart() {
  const cart = useSelector(state => state.itemReducer.addedItems);
  //const quantity = useSelector(state => state.itemReducer.quantity);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <H1 className="header">My Cart</H1>
      <Div className="cart">
        <Ul>
          {cart.map(item => (
            <>
              <div>
                <Li key={item.id}>{item.dish}</Li>
              </div>
              <div>
                <span className="quantity">{item.quantity}</span>
              </div>
              <div>
                <AddBtn onClick={() => dispatch(addQuantity(item.id))}>
                  +
                </AddBtn>
              </div>
              <div>
                <AddBtn onClick={() => dispatch(removeQuantity(item.id))}>
                  -
                </AddBtn>
              </div>
              <div>
                {" "}
                <Button onClick={() => dispatch(removeItem(item.id))}>
                  Delete
                </Button>
              </div>
            </>
          ))}
        </Ul>
      </Div>
    </Wrapper>
  );
}
