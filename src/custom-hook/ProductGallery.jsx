import React from 'react';
import ProductItem from './ProductItem';

export default function ProductGallery({ products, handleProductAddition }) {
  return (
    <div>
      <div class="text-center mt-5">
        <h1>Store</h1>
        <p>This is the Store Page.</p>
      </div>
      <div className="productGalary">
        {products.map((product) => {
          return (
            <ProductItem
              product={product}
              handleProductAddition={handleProductAddition}
            />
          );
        })}
      </div>
    </div>
  );
}
