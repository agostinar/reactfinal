import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(''); 

  const handleCheckout = () => {
    if (cart.length > 0 && name && address && paymentMethod) {
      // Lógica de procesamiento de pago...

      // Vaciar el carrito después de la compra
      setCart([]);
      alert('Gracias por tu compra. ¡Disfruta de tus productos!');
    } else {
      alert('Completa la información antes de realizar el pago.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Dirección:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Método de Pago:
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Seleccione...</option>
            <option value="Credit Card">Tarjeta de Crédito</option>
            <option value="PayPal">PayPal</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleCheckout}>Realizar Pago</button>
      </form>
    </div>
  );
};

export default Checkout;
