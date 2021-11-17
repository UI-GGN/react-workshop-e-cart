import React, { useState, useEffect } from 'react';
import ProductGallery from './ProductGallery';
import { getProductList } from '../service';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './Cart';
import About from './About';
import ErrorPage from './ErrorPage';
import { Link } from 'react-router-dom';
import { CartIcon } from '../icons';

export default function Main() {
  const handleProductAddition = (id) => {
    const updatedCart = [...cartList];
    const alreadyAddedIndex = updatedCart.findIndex((ele) => ele.id === id);
    if (alreadyAddedIndex === -1) {
      updatedCart.push({ id, count: 1 });
    } else {
      updatedCart[alreadyAddedIndex].count += 1;
    }
    setTotalCount(updatedCart.length);
    setCart(updatedCart);
  };

  const getCartList = () => {
    return cartList.map((item) => {
      const data = productList.find((product) => product.id === item.id);
      return { ...data, count: item.count };
    });
  };

  return <div className="main-container">hello</div>;
}
