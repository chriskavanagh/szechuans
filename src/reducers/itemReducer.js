const initialState = {
  items: [
    { id: 1, dish: "General Chicken", price: 12.1, quantity: 0 },
    { id: 2, dish: "Chicken & Broccoli", price: 10.76, quantity: 0 },
    { id: 3, dish: "Mandaran Combination", price: 15.25, quantity: 0 },
    { id: 4, dish: "Szechuan Chicken", price: 9.5, quantity: 0 }
  ],
  addedItems: [],
  total: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let addedItem = state.items.find(item => item.id === action.payload);
      let existed_item = state.addedItems.find(
        item => action.payload === item.id
      );
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        addedItems: state.addedItems.filter(item => item.id !== action.payload),
        total: state.total - 1
      };

    case "ADD_QUANTITY":
      return {
        ...state,
        addedItems: state.addedItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "REMOVE_QUANTITY":
      return {
        ...state,
        addedItems: state.addedItems.map(item =>
          item.id === action.payload
            ? {
                ...item,
                quantity:
                  item.quantity < 1 ? item.quantity - 0 : item.quantity - 1
              }
            : item
        )
      };

    default:
      return state;
  }
};
