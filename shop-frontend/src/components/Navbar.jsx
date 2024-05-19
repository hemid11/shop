import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1><img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" /></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/basket">Basket</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
