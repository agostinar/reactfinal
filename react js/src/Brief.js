import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Brief = () => {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de artículos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calcular el precio total del carrito
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;
