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

  const style = {
    backgroundImage: `url('${product.pictures[0]}')`,
    // backgroundPosition: 'bottom center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='tinder_page_product_wrap'>
      <div style={isWelcome ? divStyleBlur : null} className='tinder-page-product'>
        <div className='tinder-page-product-header'>
          <ProductBrandView name={product.name} model={product.model} logo={logo} />
          <ProductPriceView price={product.price} oldPrice={product.oldPrice} discount={product.discount} />
          <div className='tinder-page-size-shop-wrap'>
            <ProductSizeChartViewSmall sizes={sizes} />
            <ProductCountShopView shops={product.shops} />
          </div>
        </div>
        <div className='tinder-page-product-image-wrap'>
          <div className='tinder-page-product-image' style={style}></div>
        </div>
      </div>
    </div>
  )
};

export default ProductCardTinder;
