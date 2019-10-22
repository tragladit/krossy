import React from 'react';
import css from './StartPanelButton.module.css';
import '../../../assets/fonts/fonts.css'

const StartPanelButton = ({title, func, icon, goTo, iconSvg, secondAction}) => {

  let pic;

  if (icon) {
    pic = <img alt='logo' className='round-size-btn_image' src={icon}/>
  }
  else if (iconSvg) {
    pic = <>{iconSvg}</>
  }

  const onPress = (e) => {
    const temp = e.currentTarget.dataset.to;
    if (func) {func(temp)}
    if (secondAction) {secondAction()}
  };

  return (
    <div className={css.button} level="outline" onClick={onPress} data-to={goTo} size='l'>
      <div className={css.button_wrap}>
        <div className='rectangle-button_icon'>{pic}</div>
        <div className='rectangle-button_text'>{title}</div>
      </div>
    </div>
  )
};

export default StartPanelButton;
