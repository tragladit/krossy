import React from 'react';

const IconClose = ({currentColor = '#aebfcf'}) => {

  return (
    <svg className='svg-icon-close' xmlns="http://www.w3.org/2000/svg" width="13.828" height="13.828"
         viewBox="0 0 13.828 13.828">
      <g id="Group_879" data-name="Group 879" transform="translate(-322.086 -44.086)">
        <line id="Line_45" data-name="Line 45" y1="11" x2="11" transform="translate(323.5 45.5)" fill="none"
              stroke={currentColor} strokeLinecap="round" strokeWidth="2"/>
        <line id="Line_47" data-name="Line 47" y1="11" x2="11" transform="translate(323.5 56.5) rotate(-90)" fill="none"
              stroke={currentColor} strokeLinecap="round" strokeWidth="2"/>
      </g>
    </svg>

  )
};

export default IconClose;
