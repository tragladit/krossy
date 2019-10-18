import React from 'react';
import '../radioButton/RadioButton.css';

const RadioButtonRedux = ({ title, name, value, checked, setChecked }) => {

  const onChange = (e) => setChecked(e.target.value)

  return (
    <div className='radio-button_wrap'>
      <div className='radio-button_container'>
        <input
          type="radio" name={name} value={value} className="radio" id={title}
          checked={value === checked} onChange={onChange}
        />
        <label htmlFor={title}></label>
      </div>
      <div className='radio-button_content'>{title}</div>
    </div>
  )
};

export default RadioButtonRedux;
