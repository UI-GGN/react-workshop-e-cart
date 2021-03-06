import React, {useEffect} from 'react';

 const ProductItem = ({product, isAlreadyAdded,handleCartAddition}) => {
    const { id, name, price, photo } = product;
    
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
               onClick={() => handleCartAddition({id,type:'remove'})}
             >
               Remove
             </button>
           ) : (
             <button
               className="productItem__addbutton"
               onClick={() => handleCartAddition({id,type:'add'})}
             >
               Add 
             </button>
           )}
         </div>
       </div>
     );
   };

 export default React.memo(ProductItem);
