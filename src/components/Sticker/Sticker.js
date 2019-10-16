import React from 'react';
import IconTrend from "../icon/IconTrend";
import IconStar from "../icon/IconStar";
import IconHeartFull from "../icon/IconHeartFull";
import './Sticker.css';

const Sticker = ({form, icon}) => {

  let stickerForm = form === 'round' ? 'sticker-round_wrap' : 'sticker-rectangle_wrap';
  let stickerSize = form === 'rectangle' ? icon === 'star' ? 'sticker-size-l' : 'sticker-size-m' : null;

  let iconSvg;
  if (icon === 'trend') {
    iconSvg = <IconTrend/>
  } else if (icon === 'star') {
    iconSvg = <IconStar/>
  } else if (icon === 'like') {
    iconSvg = <IconHeartFull/>
  }

  let bgColor;
  if (icon === 'trend') {
    bgColor = '255, 208, 100'
  } else if (icon === 'star') {
    bgColor = '141, 230, 201'
  } else if (icon === 'like') {
    bgColor = '255, 92, 123'
  }

  let divStyle = {
    backgroundColor: `rgb(${bgColor})`,
    boxShadow: `0 0 6px 3px rgba(${bgColor}, 0.4)`
  };
  return (
    <div style={divStyle}
         className={`${stickerForm} ${stickerSize}`} >
      {iconSvg}
      {form === 'rectangle' ? icon === 'trend' ? 'в тренде' : 'limited edition' : null}
    </div>
  )
};

export default Sticker;

