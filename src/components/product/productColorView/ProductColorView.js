import React from 'react';
import './ProductColorView.css';

const style = { width: '40px', height: '40px' };
const styleSelected = { width: '52px', height: '52px' };

const ProductColorView = ({ color, curColor, setData, icons }) => {

  const icon = icons[color].pictures[0]

  return (
    <div data-color={color} onClick={() => setData(color)} >
      <img src={icon} style={color === curColor ? styleSelected : style} />
    </div>
  )
};

export default ProductColorView;