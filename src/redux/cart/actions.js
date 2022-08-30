import { ADD_TO_CART, INCREMENT, DECREMENT } from "./actionTypes";

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
    },
  };
};
export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: {
      id,
    },
  };
};
export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: {
      id,
    },
  };
};
