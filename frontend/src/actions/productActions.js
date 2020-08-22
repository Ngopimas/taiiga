import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../constants/productConstants";
import axios from 'axios';

const ListProducts = () => async dispatch => {

  try {
    dispatch(PRODUCT_LIST_REQUEST);
    const {data} = await axios.get("/api/products");
    console.log(data)
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data })
  }
  catch(error){
    dispatch({type: PRODUCT_LIST_FAIL, payload: error.message })
  }
}

export { ListProducts }