import React from 'react';

const IconNotification = () => {
  let divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <div style={divStyle}>
      <svg style={{marginBottom: '1.5px'}} xmlns="http://www.w3.org/2000/svg" width="17.502" height="17.502" viewBox="0 0 17.502 17.502">
        <g id="notifications" transform="translate(0.75 0.75)">
          <path id="Path_352" data-name="Path 352"
                d="M40.133,13.178V8a6.057,6.057,0,0,1,4.706-5.93V1.412a1.412,1.412,0,0,1,2.824,0v.659a7.307,7.307,0,0,1,1.148.4,5.8,5.8,0,0,1,2.836,2.607A5.929,5.929,0,0,1,52.369,8v5.177l1.883,1.883V16h-16v-.941Z"
                transform="translate(-38.25)" fill="none" stroke="#ff5c7b" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2"/>
        </g>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="2.576" height="2.576" viewBox="0 0 2.576 2.576">
        <path id="Path_640" data-name="Path 640" d="M1.288,0A1.288,1.288,0,1,1,0,1.288,1.288,1.288,0,0,1,1.288,0Z"
              transform="translate(0)" fill="#ff5c7b" fillWidth="2"/> 
      </svg>
    </div>


  )
};

export default IconNotification;
