import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <>
    
     <div className="block col-2 contenedor">
     <h1>Products</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
    </>
   
  );
}
