import React, { useEffect, useState } from 'react';
import api from '../Api';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>Product List</h1>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product-item">
            <Link to={`/product/${product._id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
