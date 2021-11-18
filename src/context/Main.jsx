import React, { useState, useEffect, useReducer } from 'react';
import Header from './Header';
import ProductGallery from './ProductGallery';
import { getProductList } from '../service';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './Cart';
import About from './About';
import ErrorPage from './ErrorPage';
import { Link } from 'react-router-dom';
import { CartIcon } from '../icons';
import useStatus from './hooks/useStatus';
import {CarListContext} from './cart-context/CartContext';

function reducer(state, action) {
  const updatedCart = [...state];
  switch (action.type) {
    case 'add':
      updatedCart.push({id:action.id, count:1});
      return updatedCart;
    case 'remove':
      let indexToRemove = -1;
      updatedCart.forEach((item,index) => {
        if(item.id == action.id){
          indexToRemove = index;
        }
      });
      updatedCart.splice(indexToRemove,1);
      return updatedCart;
    default:
      throw new Error();
  }
}



export default function Main() {
  const [productList, setProductList] = useState([]);
  const [cartList,setCart] = useReducer(reducer, [10]);
  const { setStatus, Status } = useStatus('loading');

  useEffect(() => {
    getProductList()
      .then((products) => {
        setProductList(products);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  // const handleProductAddition =  (id,actionType) => {
  //   setCart({type:actionType, id:id});
  // };

  const getCartList = () => {
    return cartList.map((item) => {
      const data = productList.find((product) => product.id === item.id);
      return { ...data, count: item.count };
    });
  };

  return (
    <div className="main-container">
      <Router>
        <Header>
          <Link to="/">Store</Link>
          <Link to="/about/abc">About</Link>
          <Link to="/cart">
            {' '}
            <CartIcon /> Cart ({cartList.length})
          </Link>
        </Header>
        <CarListContext.Provider value={{cartList,setCart}}>
        <Status
          loading={<h1>loading...</h1>}
          error={<p>Something went wrong</p>}
          success={
            <Switch>
              <Route exact path="/">
                <ProductGallery
                  products={productList}
                  cartProducts={cartList}
                />
              </Route>
              <Route path="/about">
                <About />
              </Route>

              <Route
                path="/cart"
                component={() => <Cart selectedProducts={getCartList()} />}
              ></Route>
              <Route path="*" component={ErrorPage} />
            </Switch>
          }
        ></Status>
        </CarListContext.Provider>
      </Router>
    </div>
  );
}
