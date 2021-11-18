import React,{useContext} from 'react';

export const CarListContext = React.createContext();

export const useCartListContext = ()=> useContext(CarListContext);