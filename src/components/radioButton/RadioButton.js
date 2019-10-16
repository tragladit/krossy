import React from 'react';
import './RadioButton.css';

const RadioButton = ({title, name}) => {
  return(
    <div className='radio-button_wrap'>
      <div className='radio-button_container'>
        <input
          type="radio"
          name={name} value={title}
          className="radio"
          id={title}
        />
        <label htmlFor={title}></label>
      </div>
      <div className='radio-button_content'>{title}</div>
    </div>
  )
};

export default RadioButton;
