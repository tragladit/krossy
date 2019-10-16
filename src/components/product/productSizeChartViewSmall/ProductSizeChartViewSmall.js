import React from 'react';
import './ProductSizeChartViewSmall.css';

const ProductSizeChartViewSmall = ({ sizes }) => {
  return (
    <div className='product-size-block-wrap-small'>
      {
        sizes.map(item => (
          <div key={item} className='product-size-block_content'>
            {item}
          </div>
        ))
      }
    </div>
  )
};

export default ProductSizeChartViewSmall;

