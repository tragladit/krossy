import React from 'react';

const IconHome = ({currentColor, active}) => {

  let colorSvg = currentColor ? currentColor : active ? '#000' : '#aebfcf';
  return (
    <svg className='svg-icon-home' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <g id="Group_1409" data-name="Group 1409" transform="translate(-37.445 -703.446)" opacity="0.7">
        <g id="Group_847" data-name="Group 847" transform="translate(37.446 703.446)">
          <g id="Rectangle_1215" data-name="Rectangle 1215" transform="translate(0 0)" fill="none"
             stroke={colorSvg}
             strokeWidth="2">
            <rect width="9" height="9" rx="2" stroke="none"/>
            <rect x="1" y="1" width="7" height="7" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_1217" data-name="Rectangle 1217" transform="translate(0 11)" fill="none"
             stroke={colorSvg}
             strokeWidth="2">
            <rect width="9" height="9" rx="2" stroke="none"/>
            <rect x="1" y="1" width="7" height="7" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_1216" data-name="Rectangle 1216" transform="translate(11 0)" fill="none"
             stroke={colorSvg}
             strokeWidth="2">
            <rect width="9" height="9" rx="2" stroke="none"/>
            <rect x="1" y="1" width="7" height="7" rx="1" fill="none"/>
          </g>
          <g id="Rectangle_1218" data-name="Rectangle 1218" transform="translate(11 11)" fill="none"
             stroke={colorSvg}
             strokeWidth="2">
            <rect width="9" height="9" rx="2" stroke="none"/>
            <rect x="1" y="1" width="7" height="7" rx="1" fill="none"/>
          </g>
        </g>
      </g>
    </svg>
  )
};

export default IconHome;
