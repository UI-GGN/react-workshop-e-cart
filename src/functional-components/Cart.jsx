import React, { Component } from 'react';
import styled from 'styled-components';

export default class Cart extends Component {
  render() {
    const selectedProducts = [...this.props.selectedProducts];
    return (
      <>
        <div class="text-center mt-5">
          <h1>Cart</h1>
          <p>This is the Cart Page.</p>
        </div>
        <div className="cart">
          {selectedProducts.length ? (
            <>
              <div className="cart__productlist">
                {selectedProducts.map((product) => {
                  return (
                    <div className="cart__product">
                      <span className="cart__product__name cart__product__block">
                        {product.name}
                      </span>
                      <span className="cart__product__count cart__product__block">
                        Qty: {product.count}
                      </span>
                      <span className="cart__product__price cart__product__block">
                        ${product.price}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="cart__total">
                <span>Total : </span>$
                {selectedProducts.reduce((current, product) => {
                  return current + (product.count || 0) * (product.price || 0);
                }, 0)}
              </div>
            </>
          ) : (
            <>
              <div class="text-center mt-5">
                <h1>Empty Cart</h1>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
