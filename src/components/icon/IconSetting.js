import React from 'react';

const IconSetting = ({currentColor, active}) => {
  let colorSvg = currentColor ? currentColor : active ? '#000' : '#aebfcf';
  return (
    <svg className='svg-icon-setting' xmlns="http://www.w3.org/2000/svg" width="19.469" height="19.969"
         viewBox="0 0 19.469 19.969">
      <g id="Group_1413" data-name="Group 1413" transform="translate(-304.767 -702.61)" opacity="1">
        <g id="Group_806" data-name="Group 806" transform="translate(50.995 12.377)">
          <path id="Path_310" data-name="Path 310"
                d="M691.165,319.869l-1.39-2.02,1.564-2.607,2.433.152,1.955-1.13,1.173-2.259h2.867l1.043,2.107,2,1.13h2.476l1.586,2.607-1.347,2.02v2.281l1.347,2.211-1.586,2.49-2.192-.251-2.055,1.2-1.186,2.172h-3.091l-.919-2.039-2.069-1.337-2.433.251-1.564-2.607,1.39-2.094Z"
                transform="translate(-434.815 379.228)" fill="none" stroke={colorSvg} strokeWidth="2"/>
          <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(260.427 697.417)" fill="none"
             stroke={colorSvg} strokeWidth="2">
            <ellipse cx="3.075" cy="3.075" rx="3.075" ry="3.075" stroke="none"/>
            <ellipse cx="3.075" cy="3.075" rx="2.075" ry="2.075" fill="none"/>
          </g>
        </g>
      </g>
    </svg>
  )
};

export default IconSetting;
