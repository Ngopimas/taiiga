import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props) {
  // const product = data.products.find(product => product._id === props.match.params.id )
  const [ qty, setQty ] = useState(1)
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id))
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty )
  };

  return <div>
    <div className="back-to-result">
      <Link to="/"> &lt; Back to results</Link>
    </div>
    {loading ? <div>Loading...</div> :
    error ? <div>{error}</div> : (

      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              <b>{product.maker}</b>
            </li>
            <li>
              <b>{product.description}</b>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              Price: {product.price}€
            </li>
            <li>
              {product.countInStock > 0? "In Stock": "Sold out"}
            </li>
            <li>
              { product.countInStock > 0 &&
                <div>Qty: <select value={qty} onChange={ (e) => {setQty(e.target.value)}}>
                  {[...Array(product.countInStock).keys()].map(x=>
                    <option value={x+1}>{x+1}</option>
                    )}
                </select></div>
              }
            </li>
            <li>
              {product.countInStock > 0 &&
              <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
               }
            </li>
          </ul>
        </div>
      </div>
    )}
  </div>
}

export default ProductScreen;
