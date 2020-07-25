import React from 'react';

const Products = ({ children }) => {
  return (
    <main>
      <div className="container">
        <div className="products grid-3">{children}</div>
      </div>
    </main>
  );
};

export default Products;
