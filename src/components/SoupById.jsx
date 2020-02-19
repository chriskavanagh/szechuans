import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  justify-content: center;
  justify-items: center;
  margin-top: 3rem;

  .dishName {
    font-size: 20px;
  }
  .dishPrice {
    font-size: 20px;
  }
`;

const mystate = {
  soupById: {
    100: {
      id: 100,
      name: "Miso Soup",
      price: 3.25
    },
    101: {
      id: 101,
      name: "Hot/Sour Soup",
      price: 2.25
    },
    102: {
      id: 102,
      name: "Miso Soup",
      price: 2.25
    },
    103: {
      id: 103,
      name: "Egg Drop Soup",
      price: 2.25
    },
    104: {
      id: 104,
      name: "Bean Curd Soup",
      price: 2.75
    },
    allIds: [100, 101, 102, 103, 104]
  }
};

export default function SoupById() {
  const { allIds } = mystate.soupById;
  const { soupById } = mystate;
  return (
    <>
      {allIds.map(id => (
        <Div key={id}>
          <div>{soupById[id].name}</div>
          <div>{soupById[id].price}</div>
        </Div>
      ))}
    </>
  );
}
