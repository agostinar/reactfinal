import React from 'react';

const Description = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Description;

import React from 'react';
import Description from './Description';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <Description product={product} />
    </div>
  );
};

export default ProductDetail;
