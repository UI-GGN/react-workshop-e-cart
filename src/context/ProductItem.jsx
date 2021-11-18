import React, {useContext} from 'react';
import {useCartListContext, CarListContext} from './cart-context/CartContext';

 const ProductItem = ({ product, isAlreadyAdded }) => {
     const { id, name, price, photo } = product;
     const {setCart} = useContext(CarListContext);

     return (
       <div className="productItem">
         <img
           style={{
             display: 'block',
             margin: '0 auto 10px',
             maxHeight: '200px',
           }}
           className="productItem__image"
           src={photo}
           alt=""
         />
         <div className="productItem__name">{name}</div>
         <div className="productItem__price">${price}</div>
         <div className="productItem__controls">
           {isAlreadyAdded ? (
             <button
               className="productItem__addbutton productItem__addbutton--secondary"
               onClick={() => setCart({id,type:'remove'})}
             >
               Remove 
             </button>
           ) : (
             <button
               className="productItem__addbutton"
               onClick={() => setCart({id,type:'add'})}
             >
               add
             </button>
           )}
         </div>
       </div>
     );
   };

 export default ProductItem;
