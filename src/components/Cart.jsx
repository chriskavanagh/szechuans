import React from "react";
import Total from "./Total";
import styled from "styled-components";
import {
  addQuantity,
  removeQuantity,
  removeItem
} from "./../actions/itemAction";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Badge } from "reactstrap";

const H1 = styled.h1`
  font-size: 30px;
  color: skyblue;
  margin-top: 3rem;
  text-align: center;
  font-family: "Work Sans", sans-serif;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 7px;
  border-radius: 7px;
  color: red;
  font-size: 16px;
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
    color: whitesmoke;
    font-weight: bolder;
    margin-left: 7px;
    font-size: 20px;
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
  justify-items: center;
  margin: 0 auto;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: auto;
  grid-template-areas:
    ". . . header . . ."
    ". . . cart total . ."
    ". . . . . . .";
  .header {
    grid-area: header;
    place-self: center;
  }
  .total {
    grid-area: total;
    margin-left: 50px;
    margin-top: 3rem;
  }
`;
const Div = styled.div`
  grid-area: cart;
  background: #f2f2f2;
  border: 1px solid skyblue;
  border-radius: 3px;
  margin-top: 3rem;
`;

const EmptyDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 3rem;
  text-align: center;

  h3 {
    border: 2px solid skyblue;
    border-radius: 5px;
    max-width: 200px;
    padding: 5px 10px;
  }
`;

export default function Cart() {
  const cart = useSelector(state => state.itemReducer.addedItems);
  const sub = useSelector(state => state.itemReducer.total);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>Your Cart Is Empty</h3>
      </EmptyDiv>
    );
  }
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
                <AddBtn onClick={() => dispatch(addQuantity(item.id))}>
                  +
                </AddBtn>
              </div>
              <div>
                <Badge className="quantity" color="primary">
                  {item.quantity}
                </Badge>
              </div>
              <div>
                <AddBtn
                  disabled={item.quantity === 1}
                  onClick={() => dispatch(removeQuantity(item.id))}
                >
                  -
                </AddBtn>
              </div>
              <div>
                {" "}
                <Button onClick={() => dispatch(removeItem(item.id))}>
                  <FaTrashAlt />
                </Button>
              </div>
            </>
          ))}
        </Ul>
      </Div>
      <Total subtotal={sub} />
    </Wrapper>
  );
}
