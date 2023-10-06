import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { CartContext } from './CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de artículos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <FaShoppingCart size={30} />
      {totalItems > 0 && (
        <span className="cart-badge">{totalItems}</span>
      )}
    </div>
  );
};

export default CartWidget;
