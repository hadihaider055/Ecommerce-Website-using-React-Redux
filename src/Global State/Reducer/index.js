import { ADD_TO_CART, REMOVE_ALL, REMOVE_FROM_CART } from "../Action";

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
    case REMOVE_FROM_CART: {
      return {
        products: state.products.filter(
          (product) => product.name !== action.payload.name
        ),
      };
    }
    case REMOVE_ALL: {
      return {
        products: [],
      };
    }
    default: {
      return state;
    }
  }
};
