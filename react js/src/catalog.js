import React, { useState, useEffect } from 'react';
import Item from './Item';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
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

export default Catalog;
