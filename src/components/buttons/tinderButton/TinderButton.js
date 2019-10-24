import React from "react";
import './TinderButton.css';
import '../../../assets/fonts/fonts.css'

const TinderButton = ({ children, func, title, iconSvg }) => {

  return (
    <div className='tinder-button' level="outline" onClick={func} size='l'>
      <div className='tinder-button_wrap'>
        <div className='tinder-button_icon'>{iconSvg}</div>
        <div className='tinder-button_text'>{title}</div>
      </div>
      {children}
    </div>
  )
};

export default TinderButton;