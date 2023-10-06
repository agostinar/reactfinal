import React, { useState } from 'react';

const ItemQuantitySelector = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  return (
    <div>
      <label>Cantidad:</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default ItemQuantitySelector;

