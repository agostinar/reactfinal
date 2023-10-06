import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const AddItemButton = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);

  const addItemToCart = () => {
    // Verificar si el artículo ya está en el carrito
    const isItemInCart = cart.find(cartItem => cartItem.id === item.id);

    if (isItemInCart) {
      // Si el artículo ya está en el carrito, podes incrementar la cantidad en lugar de agregar un nuevo elemento
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      // Si el artículo no está en el carrito, agrégalo con una cantidad inicial de 1
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
    }
    import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const AddItemButton = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddItemButton;

  };

  return (
    <button onClick={addItemToCart}>Add to Cart</button>
  );
};

export default AddItemButton;

