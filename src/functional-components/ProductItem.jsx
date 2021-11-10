import React, { Component } from 'react';

export default function ProductItem(props) {
  const { id, name, price, photo, count } = props.product;
  const handleProductAddition = props.handleProductAddition;
  return (
    <div className="productItem">
      <img
        style={{
          display: 'block',
          margin: '0 auto 10px',
          maxHeight: '200px',
        }}
        className="productItem__image"
        src={photo + '?v=' + id}
        alt=""
      />
      <div className="productItem__name">{name}</div>
      <div className="productItem__price">${price}</div>
      <div className="productItem__controls">
        {count ? (
          <button
            className="productItem__addbutton productItem__addbutton--secondary"
            onClick={() => handleProductAddition(id)}
          >
            Add More
          </button>
        ) : (
          <button
            className="productItem__addbutton"
            onClick={() => handleProductAddition(id)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
