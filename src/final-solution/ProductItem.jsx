import React from 'react';
import styled from 'styled-components';

 const ProductItem = ({product, isAlreadyAdded,handleCartAddition}) => {
    const { id, name, price, photo } = product;

    const StyledButton = styled.button`
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-size: .765625rem;
        line-height: 1.5;
        border-radius: 0;
        text-transform: uppercase;
        color: ${isAlreadyAdded?'#1a1a1a ':'#fff'};
        background-color: ${isAlreadyAdded?'#fff' : '#1a1a1a'};
        border-color: #1a1a1a;
        transition: 0.5s all;
    `

   
    console.log('I was rendered')

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
             <StyledButton
               onClick={() => handleCartAddition({id,type:'remove'})}
             >
               Remove
             </StyledButton>
           ) : (
             <StyledButton
               onClick={() => handleCartAddition({id,type:'add'})}
             >
               Add 
             </StyledButton>
           )}
         </div>
       </div>
     );
   };

 export default React.memo(ProductItem);
