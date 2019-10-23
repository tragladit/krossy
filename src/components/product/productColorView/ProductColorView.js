import React from 'react';
import './ProductColorView.css';

const ProductColorView = ({ color, curColor, setData, icons }) => {

  const icon = icons[color].pictures[0]
  const size = color === curColor ? '48px' : '40px'
  // const border = color === curColor ? '1px solid dodgerblue' : '1px solid rgba(0, 0, 0, 0.6)'

  const styleImg = { width: size, height: size };
  // const styleBorder = { border: border, width: '100%', height: 'auto' };

  return (
    <div data-color={color} onClick={() => setData(color)} >
      <img src={icon} style={styleImg} />
    </div>
  )
};

export default ProductColorView;