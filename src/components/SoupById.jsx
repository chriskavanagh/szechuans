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
  },
  poultryById: {
    200: {
      id: 200,
      name: "Szechuan Chicken",
      price: 9.25
    },
    201: {
      id: 201,
      name: "Moo Gai Pan",
      price: 9.25
    },
    202: {
      id: 202,
      name: "Moo Shu Chicken",
      price: 12.25
    },
    203: {
      id: 203,
      name: "Generals Chicken",
      price: 12.25
    },
    204: {
      id: 204,
      name: "Chicken & Broccoli",
      price: 10.75
    },
    allIds: [200, 201, 202, 203, 204]
  }
};

export default function SoupById() {
  /* soup */
  const { soupById } = mystate;
  const { allIds: soupAllIds } = mystate.soupById;
  /* poultry */
  const { poultryById } = mystate;
  const { allIds: poultryAllIds } = mystate.poultryById;

  const poultry = (
    <div>
      {poultryAllIds.map(id => (
        <Div key={id}>
          <div>{poultryById[id].name}</div>
          <div>{poultryById[id].price}</div>
        </Div>
      ))}
    </div>
  );

  const soup = (
    <div>
      {soupAllIds.map(id => (
        <Div key={id}>
          <div>{soupById[id].name}</div>
          <div>{soupById[id].price}</div>
        </Div>
      ))}
    </div>
  );

  return (
    <>
      <div>{soup}</div>
      <div>{poultry}</div>
    </>
  );
}
