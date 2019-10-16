import React from 'react';

const IconDropDownAndroid = ({currentColor, rotate}) => {
  let svgStyle = {
    transform: `rotate(${rotate}deg)`
  };
  return (
    <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" width="9.233" height="5.116" viewBox="0 0 9.233 5.116">
      <path id="Path_338" data-name="Path 338" d="M3822.317,56.8l-4.116,4.116,4.116,4.116"
            transform="translate(-56.298 3822.817) rotate(-90)" fill='none' stroke={currentColor} strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="1"/>
    </svg>

  )
};

export default IconDropDownAndroid;
