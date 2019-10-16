import React from 'react';
import './ProductSelectShop.css';
import {IOS, platform} from "@vkontakte/vkui";
import IconChevronDownIOS from "../../icon/IconDropDownIOS";
import IconChevronAndroidRight from "../../icon/IconChevronAndroidRight";

const ProductSelectShop = ({func, isOpen, count}) => {
  const osname = platform();
  const fontStyleAndroid = {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: `${isOpen ? '#F7F8F9' : '#4986CC'}`
  };

  const fontStyleIOS = {
    fontFamily: 'SF UI Text, sans-serif',
    backgroundColor: `${isOpen ? '#F7F8F9' : '#4986CC'}`
  };

  const colorStyle = {
    color: `${isOpen ? '#AEBFCF' : '#ffffff'}`
  };

  const colorCountStyle = {
    color: `${isOpen ? '#AEBFCF' : '#8DE6C9'}`
  };

  const iconColorStyle = isOpen ? '#AEBFCF' : '#fff';

  return (
    <div onClick={func}
         style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
         className='product-card-select_wrap'>
      <div style={colorStyle} className='product-card-select_count'>
        Купить в
        <div style={colorCountStyle} className='product-card-select_count_color'>
          {count}
        </div>
        магазинах
      </div>
      <div className='product-card-select-icon_wrap'>
        {osname === IOS ?
          <IconChevronDownIOS currentColor={iconColorStyle}
                              rotate={isOpen ? '-180' : '0'}/> :
          <IconChevronAndroidRight rotate={isOpen ? '-90' : '90'}
                                   currentColor={iconColorStyle} />
        }
      </div>
    </div>
  )
};

export default ProductSelectShop;
