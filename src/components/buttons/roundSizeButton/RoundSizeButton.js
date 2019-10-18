import React from 'react';
import './RoundSizeButton.css'

const RoundSizeButton = ({ func, goTo, content, icon, backgroundColor, iconSvg }) => {

  let divStyle = {
    backgroundColor: backgroundColor
  };

  let pic;

  if (icon) {
    pic = <img alt='logo' className='round-size-btn_image' src={icon} />
  }
  else if (iconSvg) {
    pic = <React.Fragment>{iconSvg}</React.Fragment>
  }
  else {
    pic = content
  }

  const onPress = (e) => {
    const temp = e.currentTarget.dataset.to;
    func(temp);
  };

  return (
    <div className='round-size-btn' style={divStyle} onClick={onPress} data-to={goTo}>
      {pic}
    </div>
  )
};

export default RoundSizeButton;
