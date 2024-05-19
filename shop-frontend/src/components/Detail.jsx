import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../Api';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
}

export default Detail;
