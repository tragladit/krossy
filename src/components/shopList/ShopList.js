import React from 'react';
import './ShopList.css';
import pic from '../../assets/image/wb.png';
import RectangleButton from "../buttons/rectangleButton/RectangleButton";
import IconRatingStar from "../icon/IconRatingStar";
import {IOS, platform} from "@vkontakte/vkui";

const ShopList = () => {
  const osname = platform();
  const fontStyleAndroid = {
    fontFamily: 'Roboto, sans-serif',
  };

  const fontStyleIOS = {
    fontFamily: 'SF UI Text, sans-serif',
  };
  return(
    <div style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
         className='shop-list_wrap'>
      <div className='shop-list-border'>
        <div className='shop-list_row'>
          <div className='shop-list-image_wrap'>
            <img className='shop-list-image' src={pic} alt='logo' />
          </div>
          <div className='shop-list-attribute'>
            <div className='shop-list-attribute_shop-name'>WildBerries</div>
            <div className='shop-list-attribute_price'>
              <div className='shop-list-attribute_price-new'>3765</div>
              <div className='shop-list-attribute_price-currency'>руб</div>
            </div>
            <div className='shop-list-attribute_rating'>
              <IconRatingStar/>
              <IconRatingStar/>
              <IconRatingStar/>
              <IconRatingStar/>
              <IconRatingStar currentColor='rgba(174, 191, 207, 0.3)'/>
            </div>
          </div>
          <div className='shop-list-attribute_button'>
            <RectangleButton title='Купить'/>
          </div>
        </div>
      </div>
      <div className='shop-list-border'>
        <div className='shop-list_row'>
          <div className='shop-list-image_wrap'>
            <img className='shop-list-image' src={pic} alt='logo' />
          </div>
          <div className='shop-list-attribute'>
            <div className='shop-list-attribute_shop-name'>WildBerries</div>
            <div className='shop-list-attribute_price'>
              <div className='shop-list-attribute_price-new'>3765</div>
              <div className='shop-list-attribute_price-currency'>руб</div>
            </div>
            <div className='shop-list-attribute_rating'>
              <IconRatingStar/>
              <IconRatingStar/>
              <IconRatingStar/>
              <IconRatingStar/>
              <IconRatingStar currentColor='rgba(174, 191, 207, 0.3)'/>
            </div>
          </div>
          <div className='shop-list-attribute_button'>
            <RectangleButton title='Купить'/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ShopList;
