import React from 'react';
import './ProductCountShopView.css';

const ProductCountShopView = ({shops}) => {
  return (
    <span className='product-count-shop-view'>{shops} магазина</span>
  )
};

export default ProductCountShopView;
