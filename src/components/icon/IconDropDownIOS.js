import React from 'react';

const IconDropDownIOS = ({currentColor, rotate}) => {
  let svgStyle = {
    transform: `rotate(${rotate}deg)`
  };
  return (
    <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" width="9.997" height="5.003" viewBox="0 0 9.997 5.003">
      <path id="Icon" className="cls-1" fill={currentColor}
            d="M1.454.191A.9.9,0,1,0,.346,1.609l4.1,3.2a.9.9,0,0,0,1.108,0l4.1-3.2A.9.9,0,1,0,8.543.191L5,2.961Z"/>
    </svg>
  )
};

export default IconDropDownIOS;
