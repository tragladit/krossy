import React from 'react';
import './Checkbox.css';

const Checkbox = ({name}) => {
  return (
    <div className='checkbox_wrap'>
      <input type="checkbox" className="checkbox" id={name}/>
      <label htmlFor={name}></label>
    </div>
  )
};

export default Checkbox;
