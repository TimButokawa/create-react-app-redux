import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from '../constants';

const initialState = [];

export default function cart(state = initialState, payload) {
  switch(payload.type) {
    case ADD_TO_CART:
      return [...state, payload.item];

    case REMOVE_FROM_CART:
      return [
        ...state.slice(0, payload.index),
        ...state.slice(payload.index + 1)
      ];

    case REMOVE_ALL_FROM_CART:
      return initialState;

    default:
      return state;
  }
}
