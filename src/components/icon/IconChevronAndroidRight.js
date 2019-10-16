import React from 'react';

const IconChevronAndroidRight = ({currentColor = '#aebfcf', rotate}) => {

  let svgStyle = {
    transform: `rotate(${rotate}deg)`
  };
  return (
    <svg style={svgStyle} className='svg-icon-chevron-right' xmlns="http://www.w3.org/2000/svg"
         width="8.353" height="15.707" viewBox="0 0 8.353 15.707">
      <path id="Path_375" data-name="Path 375" d="M2500.969,58.944l-7.353,7.353,7.353,7.353"
            transform="translate(2501.469 74.15) rotate(180)"
            fill="none" stroke={currentColor}
            strokeLinecap="round"
            strokeLinejoin="round" strokeWidth="1"/>
    </svg>

  )
};

export default IconChevronAndroidRight;
