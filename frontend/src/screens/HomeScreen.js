import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen (props) {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "/api/products";
      const {data} = await axios.get(apiUrl);
      setProduct(data);
    };
   fetchData();
  }, []);

  return <ul className="products">
    {
      products.map(product =>
        <li>
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
