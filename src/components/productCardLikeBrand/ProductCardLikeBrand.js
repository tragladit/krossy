import React from 'react';
import './ProductCardLikeBrand.css';
import '../productCardSmall/ProductCardSmall.css';
import ProductCardSmall from '../productCardSmall/ProductCardSmall'
import { platform, IOS } from '@vkontakte/vkui';
import uuid from 'uuid';
            
class ProductCardLikeBrand extends React.Component {
  constructor(props) {
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

    const {keys, products} = this.props

    return (
      <div className='product-card-like-brand_wrap' style={osname === IOS ? fontStyleIOS : fontStyleAndroid} >
        <div className='product-card-like-brand-title'>
          <div className='like-brand-title_text'>Нравиться</div>
          <div className='like-brand-title_text like-brand-title_color'>Nike?</div>
        </div>
        <div className='product-card-like-brand'>
          {keys.map(k => {
            const prdkt = products[k]
            return (
              <ProductCardSmall
                key={uuid()} prodId={k} product={prdkt}
              />
            )
          })}
        </div>
      </div>
    )
  }
};

export default ProductCardLikeBrand;
