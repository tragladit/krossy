import React from 'react';
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import logo from "../../assets/image/adidas.png";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductSizeChartView from "../product/productSizeChartView/ProductSizeChartView";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import RoundSizeButton from "../buttons/roundSizeButton/RoundSizeButton";
import IconArrowRight from "../icon/IconArrowRight";
import './ProductCardTinder.css';
import image from '../../assets/image/Rectangle 1533@2x.png';

const ProductCardTinder = ({isWelcome}) => {

  let divStyleBlur = {
    filter: 'blur(9px)'
  };
  return (
    <div style={isWelcome ? divStyleBlur : null}
         className='tinder-page-product'>
      <div className='tinder-page-product-header'>
        <div className='tinder-page-product-header_left'>
          <ProductBrandView logo={logo}/>
          <ProductPriceView/>
        </div>
        <div className='tinder-page-product-header_right'>
          <RoundSizeButton iconSvg={<IconArrowRight/>}/>
        </div>
      </div>
      <div className='tinder-page-product-footer'>
        <ProductSizeChartView/>
        <ProductCountShopView/>
      </div>
      <div className='tinder-page-product-image_wrap'>
        <img className='tinder-page-product-image' src={image}/>
      </div>
    </div>
  )
};

export default ProductCardTinder;
