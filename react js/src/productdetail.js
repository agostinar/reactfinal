import React from 'react';
import Description from './Description';
import AddItemButton from './AddItemButton';
import ItemQuantitySelector from './ItemQuantitySelector';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <Description product={product} />
      <ItemQuantitySelector />
      <AddItemButton item={product} />
    </div>
  );
};

export default ProductDetail;
