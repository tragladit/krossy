import React from 'react';
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import logo from "../../assets/image/adidas.png";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductSizeChartViewSmall from "../product/productSizeChartViewSmall/ProductSizeChartViewSmall";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import './ProductCardTinder.css';

const ProductCardTinder = ({ product, isWelcome }) => {

  const divStyleBlur = { filter: 'blur(9px)' }

  const sizes = product.sizes.sort((a, b) => a - b)

  return (
    <div style={isWelcome ? divStyleBlur : null} className='tinder-page-product'>
      <div className='tinder-page-product-header'>
        <ProductBrandView name={product.name} model={product.model} logo={logo} />
        <ProductPriceView price={product.price} oldPrice={product.oldPrice} discount={product.discount} />
        <div className='tinder-page-size-shop-wrap'>
          <ProductSizeChartViewSmall sizes={sizes} />
          <ProductCountShopView shops={product.shops} />
        </div>
        {/* <div className='tinder-page-product-header_left'>  
        </div> */}
      </div>
      <div className='tinder-page-product-image_wrap'>
        <img className='tinder-page-product-image' src={product.pictures[0]} alt='pic_tinder' />
      </div>
    </div>
  )
};

export default ProductCardTinder;
