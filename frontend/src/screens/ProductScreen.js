import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen (props) {
  const product = data.products.find(product => product._id === props.match.params.id )
  return <div>
    <div className="back-to-result">
      <Link to="/"> &lt; Back to results</Link>
    </div>
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
            Price: <b>{product.price}€</b>
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
            Status: {product.status}
          </li>
          <li>
            Qty: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <button className="add-to-cart">Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default ProductScreen;
