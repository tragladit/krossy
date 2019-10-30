import React from 'react';
import './ProductColorView.css';

const ProductColorView = ({ color, curColor, setData, icons }) => {

  const icon = icons[color].pictures[0]
  const size = color === curColor ? '48px' : '40px'

  const styleImg = { width: size, height: size };

  return (
    <div data-color={color} onClick={() => setData(color)} >
      <img src={icon} style={styleImg} alt='image_product_color_view' />
    </div>
  )
};

export default ProductColorView;