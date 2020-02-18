import React from "react";

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
    }
  }
};

export default function SoupById() {
  return (
    <div>
      {Object.values(mystate.soupById).map(f => (
        <div key={f.id}>{f.name}</div>
      ))}
    </div>
  );
}
