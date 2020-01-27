/* export const addItem = id => dispatch => {
  dispatch({
    type: "ADD_ITEM",
    payload: id
  });
}; */

// basic way
export const addItem = id => {
  return {
    type: "ADD_ITEM",
    payload: id
  };
};

export const removeItem = id => dispatch => {
  dispatch({
    type: "REMOVE_ITEM",
    payload: id
  });
};

export const addQuantity = id => dispatch => {
  dispatch({
    type: "ADD_QUANTITY",
    payload: id
  });
};

export const removeQuantity = id => dispatch => {
  dispatch({
    type: "REMOVE_QUANTITY",
    payload: id
  });
};
