import React from 'react';
import './ShopList.css';
import pic from '../../assets/image/wb.png';
import IconRatingStar from "../icon/IconRatingStar";
import {IOS, platform} from "@vkontakte/vkui";
import uuid from 'uuid';

const shopsNames = {
  1: 'Lamoda', 2: 'Nike', 3: 'New Balance', 5: 'Reebok',
  6: 'Adidas', 7: 'Puma', 8: 'Lacoste', 9: 'Streetball',
}

const Shop = ({ data }) => {
  const { shopId, price, oldPrice, discount, url } = data

  return (
    <div className='shop-list-border'>
      <div className='shop-list_row'>
        <div className='shop-list-image_wrap'>
          <img className='shop-list-image' src={pic} alt='shop-logo' />
        </div>
        <div className='shop-list-attribute'>
          <div className='shop-list-attribute_shop-name'>{shopsNames[shopId]}</div>
          <div className='shop-list-attribute_price'>
            <div className='shop-list-attribute_price-new'>
              {`${price} руб`}
            </div>
            {oldPrice
              ? (
                  <div className='shop-list-attribute_price_old'>
                    {oldPrice}
                  </div>
                )
              : null}
            {discount
              ? (
                  <div className='shop-list-attribute_price_discount'>
                    {`-${discount}%`}
                  </div>
                )
              : null}
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
          <div className='rectangle-button'>
            <div className='rectangle-button_wrap'>
              <a className='rectangle-button_text' href={url} rel="noopener noreferrer" target="_blank">
                Купить
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShopList = ({ offers }) => {
  const osname = platform();

  const fontStyleAndroid = {
    fontFamily: 'Roboto, sans-serif',
  };

  const fontStyleIOS = {
    fontFamily: 'SF UI Text, sans-serif',
  };

  const getShops = () => offers.map((el) => <Shop key={uuid()} data={el} />)

  return(
    <div
      className='shop-list_wrap'
      style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
    >
      {getShops()}
    </div>
  )
};

export default ShopList;
