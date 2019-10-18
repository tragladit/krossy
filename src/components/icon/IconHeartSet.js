import React from 'react';

const IconHeart = ({ color }) => {
  // let colorSvg = currentColor ? currentColor : active ? '#000' : '#aebfcf';
  return (
    <svg className='svg-icon-heart' xmlns="http://www.w3.org/2000/svg" width="20.406" height="18.364"
         viewBox="0 0 20.406 18.364">
      <g id="heart" transform="translate(1 1)" opacity="1">
        <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
          <path id="Path_1" data-name="Path 1"
                d="M8.351,43.208a1.213,1.213,0,0,0,.859.357,1.229,1.229,0,0,0,.859-.357l6.745-6.745a5.42,5.42,0,0,0-7.608-7.72,5.418,5.418,0,0,0-7.615,7.709Z"
                transform="translate(0 -27.2)"
                fill="none" stroke={color}
                strokeWidth="2"/>
        </g>
      </g>
    </svg>
  )
};

export default IconHeart;
