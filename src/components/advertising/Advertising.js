import React from 'react';
import './Advertising.css';
import {platform, IOS} from "@vkontakte/vkui";
import pic from '../../assets/image/Rectangle 1384@2x.png';
import brandLogo from '../../assets/image/asics-seeklogo.com.svg';


import RoundSizeButton from '../buttons/roundSizeButton/RoundSizeButton';
import ProductSizeChartView from "../product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import IconArrowRight from '../icon/IconArrowRight';

const osname = platform();

const Advertising = ({func, goTo}) => {
  return (
    <div className='advertising_wrap'>
      <div className='advertising-sticker'>Реклама</div>
      <div className='advertising-image_wrap'>
        <img className='advertising-image'
             src={pic}
             alt='reklama'/>
      </div>
      <div className='advertising-product-footer_wrap'>
        <div className='advertising-info'>
          <ProductBrandView logo={brandLogo}/>
          <div className='advertising-product-price_wrap'>
            <ProductPriceView/>
          </div>
          <div className='advertising-product-footer'>
            <ProductSizeChartView/>
            <ProductCountShopView/>
          </div>
        </div>
        <div className='advertising-product-footer-button-wrap'>
          <RoundSizeButton iconSvg={<IconArrowRight/>}
                           backgroundColor='#4986CC'
                           func={func}
                           goTo={goTo}/>
        </div>
      </div>
    </div>
  )
};

export default Advertising;
