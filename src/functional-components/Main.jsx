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

export default function Main() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cartList, setCart] = useState([]);

  useEffect(() => {
    getProductList()
      .then((products) => {
        setProductList(products);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
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

        {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <p>Something went wrong</p>
        ) : (
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
        )}
      </Router>
    </div>
  );
}
