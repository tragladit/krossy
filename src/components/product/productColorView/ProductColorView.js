import React from 'react';
import './ProductColorView.css';

const multi = 'linear-gradient(90deg, blue 0%, red 25%, green 50%, yellow 75%, gray 100%)'

const colors = {
  'бежевый': '#debd93',
  'белый': '#fff',
  'бирюзовый': '#39e1d9',
  'бордовый': '#8f001a',
  'голубой': '#8bcdff',
  'желтый': '#ffec1c',
  'зеленый': '#3db701',
  'золотой': '#dcbd64',
  'коралловый': '#ff606e',
  'коричневый': '#733d01',
  'красный': '#e50000',
  'оранжевый': '#ff7900',
  'разноцветный': multi,
  'розовый': '#ff9ad5',
  'серебряный': '#C0C0C0',
  'серый': '#b6b6b6',
  'синий': '#3872fc',
  'фиолетовый': '#8A2BE2',
  'хаки': '#BDB76B',
  'черный': '#000'
}

const ProductColorView = ({ color, curColor, setData }) => {

  const onClick = () => setData(color)

  const styleColor = colors[color] ? colors[color] : multi
  const border = color === curColor ? '2px solid #4986CC' : '1px solid #e1e3e6'

  const style = {
    width: '40px', height: '40px', background: styleColor, borderRadius: '50%',
    boxSizing: 'border-box', border: border
  };

  return <div style={style} onClick={onClick} />
};

export default ProductColorView;