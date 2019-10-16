import React from 'react';
import './ProductCardLikeBrand.css';
import ProductCardSmall from '../productCardSmall/ProductCardSmall';
import {platform, IOS, Gallery} from '@vkontakte/vkui';

class ProductCardLikeBrand extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
  }
  render() {
    const osname = platform();
    const fontStyleAndroid = {
      fontFamily: 'Roboto, sans-serif',
    };

    const fontStyleIOS = {
      fontFamily: 'SF UI Text, sans-serif',
    };
    return (
      <div style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
           className='product-card-like-brand'>
        <div className='product-card-like-brand-title'>
          <div className='like-brand-title_text'>Нравиться</div>
          <div className='like-brand-title_text like-brand-title_color'>Nike?</div>
        </div>
        <div className='product-card-like-brand_wrap'>
          <Gallery slideWidth='163px' >
            <ProductCardSmall/>
            <ProductCardSmall/>
            <ProductCardSmall/>
            <ProductCardSmall/>
            <ProductCardSmall/>
          </Gallery>
          <Gallery slideWidth='163px' >
            <ProductCardSmall/>
            <ProductCardSmall/>
            <ProductCardSmall/>
            <ProductCardSmall/>
            <ProductCardSmall/>
          </Gallery>
        </div>
      </div>
    )
  }
};

export default ProductCardLikeBrand;
