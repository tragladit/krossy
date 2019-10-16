import React from 'react';
import './ProductSizeChartView.css';

const style = {
  width: '32px', height: '32px', lineHeight: '32px', backgroundColor: 'rgba(220, 220, 220, 0.4)'
};
const styleSelected = {
  width: '36px', height: '36px', lineHeight: '36px', backgroundColor: 'rgb(220, 220, 220)'
};

const ProductSizeChartView = ({ params, curSize, setData }) => (
  <div className='product-size-block-wrap'>
    {
      params.map(el => (
        <div
          key={el.id} className='tabs_sizes' onClick={() => setData(el.size, el.id)}
          style={el.size === curSize ? styleSelected : style}
        >
          {el.size}
        </div>
      ))
    }
  </div>
);

export default ProductSizeChartView;

