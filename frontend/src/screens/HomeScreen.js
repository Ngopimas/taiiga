import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ListProducts } from '../actions/productActions'

function HomeScreen (props) {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {

   dispatch(ListProducts());

   return () => {
    //
   };

  }, []);

  return loading ? <div>Loading...</div> :
  error ? <div>{error}</div> :
  <ul className="products">
    {
      products.map(product =>
        <li key={product._id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img className="product-image" src={product.image} alt="product" />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + product._id}>{product.name}</Link>
            </div>
            <div className="product-maker">{product.maker}</div>
            <div className="product-price">{product.price}€</div>
          </div>
        </li>
      )
    }
  </ul>
}

export default HomeScreen;
