
import React, { useContext } from 'react';

export const CartContext = React.createContext();

export const useCartContext = ()=> {
    const {cartList, setCart} = useContext(CartContext);

    return {cartList, setCart}
};