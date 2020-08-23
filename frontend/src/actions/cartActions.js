import {
  CARD_ADD_ITEM,
  CART_REMOVE_ITEM
  } from "../constants/cartConstants";

import axios from 'axios';

const addToCart = (productId, qty) => async (dispatch) => {

  try {
    const {data} = await axios.get("/api/products/" + productId);
    dispatch({type: CARD_ADD_ITEM, payload:{
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }});
  }
  catch(error){

  }
}

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const { cart: { cartItems } } = getState();

}

export { addToCart, removeFromCart }
