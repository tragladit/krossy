import React from 'react';
import '../../radioButton/RadioButton.css';

const SearchRadioButton = ({ title, name, sort, getChecked }) => {
  return (
    <div className='radio-button_wrap'>
      <div className='radio-button_container'>
        <input
          type="radio" name={name} value={title} className="radio" id={title}
          checked={title === sort} onChange={getChecked}
        />
        <label htmlFor={title}></label>
      </div>
      <div className='radio-button_content'>{title}</div>
    </div>
  )
};

export default SearchRadioButton;
