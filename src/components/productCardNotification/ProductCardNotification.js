import React from 'react';
import './ProductCardNotification.css';
import RectangleButton from "../buttons/rectangleButton/RectangleButton";
import pic from '../../assets/image/tag.svg';
import { IOS, platform } from "@vkontakte/vkui";
import ApiService from "../../api/krossy-api";

const service = new ApiService()

const ProductCardNotification = ({ userId, productId, subscribed, isOpen }) => {

  const osname = platform();

  const fontStyleAndroid = {
    fontFamily: 'Roboto, sans-serif',
  };
  const fontStyleIOS = {
    fontFamily: 'SF UI Text, sans-serif',
  };

  const onNotification = async () => {
    const form = new FormData()
    form.append("userId", userId)
    form.append("type", subscribed === 0 ? 1 : 0)
    const res = await service.setSubscribe(productId, form)
    console.log('onNotification', res)
    isOpen(false)
  }

  return (
    <div
      style={osname === IOS ? fontStyleIOS : fontStyleAndroid} className='card-notification_wrap'
    >
      <div className='card-notification-image_wrap'>
        <img src={pic} alt='image_notification' />
      </div>
      <div className='card-notification-text'>
        Сообщите мне,<br />
        когда цена на этот товар снизится!
      </div>
      <div className='card-notification-buttons'>
        <RectangleButton func={isOpen} title='Отмена' />
        <RectangleButton title='Включить уведомление' secondAction={onNotification} />
      </div>
    </div>
  )
};

export default ProductCardNotification