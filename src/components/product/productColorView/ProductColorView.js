import React from 'react';
import './ProductColorView.css';
import Icon16Done from '@vkontakte/icons/dist/16/done';

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
  const [border, fill] = color === 'белый' ? ['1px solid #e1e3e6', '#000'] : ['none', '#fff']

  const style = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '36px', height: '36px', background: styleColor, borderRadius: '50%',
    boxSizing: 'border-box', border: border
  };

  return (
    <div style={style} onClick={onClick} >
      {color === curColor ? <Icon16Done fill={fill} /> : null}
    </div>
  )
};

export default ProductColorView;