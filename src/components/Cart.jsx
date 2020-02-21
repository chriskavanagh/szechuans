import React, { useContext } from "react";
import Total from "./Total";
import { UserContext } from "./../App";
import styled from "styled-components";
import {
  addQuantity,
  removeQuantity,
  removeItem
} from "./../actions/itemAction";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Badge, Button, Jumbotron, Container } from "reactstrap";

const H1 = styled.h1`
  font-size: 30px;
  color: skyblue;
  margin-top: 3rem;
  text-align: center;
  font-family: "Work Sans", sans-serif;
`;

const Button1 = styled.button`
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
    color: white;
    font-weight: bolder;
    margin-left: 7px;
    font-size: 20px;
  }
  .delBtn {
    color: #a80000;
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
    text-align: center;
  }
`;

export default function Cart() {
  const cart = useSelector(state => state.itemReducer.addedItems);
  const sub = useSelector(state => state.itemReducer.total);
  const dispatch = useDispatch();

  // context hook
  const user = useContext(UserContext);

  if (cart.length === 0) {
    return (
      <div>
        <Jumbotron style={{ marginTop: "4rem" }}>
          <Container style={{ textAlign: "center" }}>
            <h3>{user} Your Cart Is Empty</h3>
          </Container>
        </Jumbotron>
      </div>
    );
  }
  return (
    <Wrapper>
      <H1 className="header">{user} Cart</H1>
      <Div className="cart">
        <Ul>
          {cart.map(item => (
            <>
              <div>
                <Li key={item.id}>{item.dish}</Li>
              </div>

              <div>
                <Button
                  outline
                  color="secondary"
                  onClick={() => dispatch(addQuantity(item.id))}
                >
                  +
                </Button>
              </div>
              <div>
                <Badge className="quantity">{item.quantity}</Badge>
              </div>
              <div>
                <Button
                  outline
                  color="secondary"
                  disabled={item.quantity === 1}
                  onClick={() => dispatch(removeQuantity(item.id))}
                >
                  -
                </Button>
              </div>
              <div>
                {" "}
                <Button
                  className="delBtn"
                  outline
                  color="secondary"
                  onClick={() => dispatch(removeItem(item.id))}
                >
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
