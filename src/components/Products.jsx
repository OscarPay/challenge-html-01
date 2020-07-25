import React from 'react';

const Products = ({ children }) => {
  return (
    <main>
      <div className="container">
        <div className="products grid--products">{children}</div>
      </div>
    </main>
  );
};

export default Products;
