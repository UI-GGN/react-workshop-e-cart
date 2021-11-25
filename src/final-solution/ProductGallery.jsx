import React from 'react';
import ProductItem from './ProductItem';
import {useCartContext} from './cart-context/CartContext';

export default function ProductGallery({
  products
}) {
  const {cartList,setCart} = useCartContext();
  return (
    <div>
      <div className="text-center mt-5">
        <h1>Store</h1>
        <p>This is the Store Page.</p>
      </div>
      <div className="productGalary">
        {products.map((product,index) => {
          const isAlreadyAdded = !!cartList?.filter(
            (item) => item.id === product.id
          ).length;
          return (
              <ProductItem
                key={index}
                product = {product}
                isAlreadyAdded ={isAlreadyAdded}
                handleCartAddition = {setCart}
              />
          );
        })}
      </div>
    </div>
  );
}
