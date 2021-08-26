import { ADD_TO_CART } from "../Action";

const InitialState = {
  products: [],
};
export const CartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        products: [...state.products, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
