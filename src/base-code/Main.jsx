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
  // const handleProductAddition = (id) => {
  //   const products = [...productList];
  //   products.forEach((product) => {
  //     if (product.id === id) {
  //       product.count += 1;
  //     }
  //   });
  //   setProductList(products);
  //   setTotalCount(totalCount + 1);
  //   setCart(() => {
  //     return productList.filter((product) => {
  //       return product.count;
  //     });
  //   });
  // };

  return <div className="main-container">hello</div>;
}
