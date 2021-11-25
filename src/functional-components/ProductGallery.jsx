import React from 'react';
import ProductItem from './ProductItem';

export default function ProductGallery({ children}) {
  return (
    <div>
      <div className="text-center mt-5">
        <h1>Store</h1>
        <p>This is the Store Page.</p>
      </div>
      <div className="productGalary">
        {children}
      </div>
    </div>
  );
}
