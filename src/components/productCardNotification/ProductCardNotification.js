import React from 'react';
import './ProductCardNotification.css';
import RectangleButton from "../buttons/rectangleButton/RectangleButton";
import pic from '../../assets/image/tag.svg';
import { IOS, platform } from "@vkontakte/vkui";
import { connect as reduxConnect } from "react-redux";

const ProductCardNotification = ({ isOpen, userId, modelId, offers }) => {

  const osname = platform();

  const fontStyleAndroid = {
    fontFamily: 'Roboto, sans-serif',
  };
  const fontStyleIOS = {
    fontFamily: 'SF UI Text, sans-serif',
  };

  const onNotification = () => {
    const data = { userId: userId, modelId: modelId, price: offers[0].price }
    alert(`Send to server: userId ${data.userId}, modelId ${data.modelId}, price ${data.price}`)
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

export default reduxConnect(
  state => ({
    userId: state.user.userInfo.id,
    offers: state.user.offersByModel,
    modelId: state.user.modelId
  }),
  null
)(ProductCardNotification);
