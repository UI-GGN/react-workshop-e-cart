import React from 'react';
import ProductItem from './ProductItem';

export default function ProductGallery({
  products,
  handleProductAddition,
  cartProducts,
}) {
  return (
    <div>
      <div class="text-center mt-5">
        <h1>Store</h1>
        <p>This is the Store Page.</p>
      </div>
      <div className="productGalary">
        {products.map((product,index) => {
          const isAlreadyAdded = !!cartProducts.filter(
            (item) => item.id === product.id
          ).length;
          return (
              <ProductItem
              key={index}
                product={product}
                handleProductAddition={handleProductAddition}
                isAlreadyAdded={isAlreadyAdded}
              />
          );
        })}
      </div>
    </div>
  );
}
