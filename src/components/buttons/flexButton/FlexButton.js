import React from 'react';
import './FlexButton.css';
import '../../../assets/fonts/fonts.css'

const FlexButton = ({ title, func, icon, goTo, iconSvg, secondAction, width = '100%' }) => {

  let pic;

  if (icon) {
    pic = <img alt='logo' className='round-size-btn_image' src={icon} />
  }
  else if (iconSvg) {
    pic = <>{iconSvg}</>
  }

  const style = { width: width }

  const onPress = (e) => {
    const temp = e.currentTarget.dataset.to;
    if (func) { func(temp) }
    if (secondAction) { secondAction() }
  };

  return (
    <div
      className='flex_button' style={style} size='l'
      level="outline" onClick={onPress} data-to={goTo}
    >
      <div className='flex_button_wrap'>
        <div className='flex_button_icon'>{pic}</div>
        <div className='flex_button_text'>{title}</div>
      </div>
    </div>
  )
};

export default FlexButton;
