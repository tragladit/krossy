import React from 'react';
import { Checkbox } from "@vkontakte/vkui";
import RectangleButton from "../buttons/rectangleButton/RectangleButton";
import pic from '../../assets/image/backTinder.svg';

const ProductCardTinderWelcome = ({ closeWelcome }) => {
  return (
    <div className='tinder-page-welcome'>
      <div className='tinder-page-welcome_title'>Кроссы помогут!</div>
      <div className='tinder-page-welcome_text'>
        Кроссы помогут подобрать нужные именно Вам кроссовки.
        Просто нажимайте «Нравится» или
        «Не нравится» - и все получится! Или еще проще:
      </div>
      <div className='tinder-page-welcome-image_wrap'>
        <img src={pic} alt='image_tinder_page_welcome' />
      </div>
      <div className='tinder-page-welcome_button'>
        <RectangleButton func={closeWelcome} title='Понятно' />
      </div>
      <div className='tinder-page-welcome_ckeckbox'>
        <Checkbox >больше не показывать</Checkbox>
      </div>
    </div>
  )
};

export default ProductCardTinderWelcome;
