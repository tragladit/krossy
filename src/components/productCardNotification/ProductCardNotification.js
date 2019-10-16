import React from 'react';
import './ProductCardNotification.css';
import RectangleButton from "../buttons/rectangleButton/RectangleButton";
import pic from '../../assets/image/tag.svg';
import {IOS, platform} from "@vkontakte/vkui";

const ProductCardNotification = ({isOpen}) => {
  const osname = platform();
  const fontStyleAndroid = {
    fontFamily: 'Roboto, sans-serif',
  };

  const fontStyleIOS = {
    fontFamily: 'SF UI Text, sans-serif',
  };
  return (
    <div style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
         className='card-notification_wrap'>
      <div className='card-notification-image_wrap'>
        <img src={pic} alt='image'/>
      </div>
      <div className='card-notification-text'>
        Сообщите мне,<br/>
        когда цена на этот товар снизится!
      </div>
      <div className='card-notification-buttons'>
        <RectangleButton func={isOpen}
                         title='Отмена'/>
        <RectangleButton title='Включить уведомление'/>
      </div>
    </div>
  )
};

export default ProductCardNotification;
