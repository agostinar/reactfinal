import React from 'react';
import Item from './Item'; 

const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Productos Disponibles</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Item product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

import React from 'react';
import AddItemButton from './AddItemButton'; 

const Item = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price.toFixed(2)}</p>
      <AddItemButton item={product} />
    </div>
  );
};

export default Item;
