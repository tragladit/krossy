import React from 'react';

const IconStar = ({ currentColor, active }) => {
  let colorSvg = currentColor ? currentColor : active ? '#000' : '#aebfcf';
  return (
    <svg className='svg-icon-star'
      xmlns="http://www.w3.org/2000/svg"
      width="25.083" height="24.033"
      viewBox="0 0 25.082 19.226">
      <path id="Path_310" data-name="Path 310"
        d="M9.815,5.4a.72.72,0,0,0-.4-1.227L6.986,3.823a.317.317,0,0,1-.239-.174l-1.086-2.2a.72.72,0,0,0-1.29,0l-1.086,2.2a.318.318,0,0,1-.239.174L.616,4.176A.72.72,0,0,0,.217,5.4L1.975,7.117a.318.318,0,0,1,.092.281L1.652,9.817a.7.7,0,0,0,.157.583.727.727,0,0,0,.887.175L4.868,9.433a.325.325,0,0,1,.3,0l2.173,1.142a.712.712,0,0,0,.335.084.722.722,0,0,0,.552-.259.7.7,0,0,0,.157-.583L7.965,7.4a.318.318,0,0,1,.092-.281Z"
        transform="scale(1.85 1.75) translate(1 0)"
        fill="none" stroke={colorSvg} strokeWidth='1' />
    </svg>
  )
};

export default IconStar;
