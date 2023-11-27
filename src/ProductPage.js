// ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductPage;
