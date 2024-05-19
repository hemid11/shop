import React, { useState } from 'react';

function Basket() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <div>
      <h1>Basket</h1>
      <ul>
        {basket.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
      <button onClick={() => alert('Checkout not implemented yet')}>Checkout</button>
    </div>
  );
}

export default Basket;
