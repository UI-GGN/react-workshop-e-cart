import React, { useState, useEffect } from 'react';
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

export default function Main() {
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cartList, setCart] = useState([]);
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

  const handleProductAddition = (id, operation = 'ADD') => {
    const products = [...productList];
    products.forEach((product) => {
      if (product.id === id) {
        product.count += 1;
      }
    });
    setProductList(products);
    setTotalCount(totalCount + 1);
    setCart(() => {
      return productList.filter((product) => {
        return product.count;
      });
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
            <CartIcon /> Cart ({totalCount})
          </Link>
        </Header>
        <Status
          loading={<h1>loading...</h1>}
          error={<p>Something went wrong</p>}
          success={
            <Switch>
              <Route exact path="/">
                <ProductGallery
                  products={productList}
                  handleProductAddition={handleProductAddition}
                />
              </Route>
              <Route path="/about">
                <About />
              </Route>

              <Route path="/cart">
                <Cart selectedProducts={cartList} />
              </Route>
              <Route path="*" component={ErrorPage} />
            </Switch>
          }
        ></Status>
      </Router>
    </div>
  );
}
