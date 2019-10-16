import React from 'react';
import './ProductPriceView.css';

const ProductPriceView = ({price, oldPrice, discount}) => {
  return (
    <div className='product-price_wrap'>
      <span className='product-price_old'>
        {oldPrice ? oldPrice : null}
        </span>
      <span className='product-price_new'>
        {price ? price : null}
        </span>
      <span className='product-price_currency'>
          руб
        </span>
      {discount ?
        <span className='product-price_discount'>
          -{discount}%
        </span> :
        null}
    </div>
  )
};

export default ProductPriceView;
