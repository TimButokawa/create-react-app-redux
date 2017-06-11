import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from '../constants';

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  };
}

export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    index
  };
}

export function removeAllFromCart() {
  return {
    type: REMOVE_ALL_FROM_CART
  };
}
