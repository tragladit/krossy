import React from 'react';
import './RectangleButton.css';
import '../../../assets/fonts/fonts.css'

const RectangleButton = ({title, func, icon, goTo, iconSvg, secondAction}) => {

  let pic;

  if (icon) {
    pic = <img alt='logo' className='round-size-btn_image' src={icon}/>
  }
  else if (iconSvg) {
    pic = <React.Fragment>{iconSvg}</React.Fragment>
  }

  const onPress = (e) => {
    const temp = e.currentTarget.dataset.to;
    if (func) {func(temp)}
    if (secondAction) {secondAction()}
  };

  return (
    <div className='rectangle-button'
            level="outline"
            onClick={onPress}
            data-to={goTo}
            size='l'>
      <div className='rectangle-button_wrap'>
        <div className='rectangle-button_icon'>{pic}</div>
        <div className='rectangle-button_text'>{title}</div>
      </div>
    </div>
  )
};

export default RectangleButton;
