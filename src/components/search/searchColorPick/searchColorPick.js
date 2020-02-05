import React, { useState } from 'react';
import { Switch, HorizontalScroll } from "@vkontakte/vkui";
import Icon16Done from '@vkontakte/icons/dist/16/done';
import uuid from 'uuid';

const styleBorderKeyWhite = '1px solid #e1e3e6'
const styleColorPickerDisabled = { pointerEvents: 'none', opacity: 0.5 }
const multi = 'linear-gradient(90deg, blue 0%, red 25%, green 50%, yellow 75%, gray 100%)'

const colorsData = {
  'бежевый': { color: '#debd93', active: false },
  'белый': { color: '#fff', active: false },
  'бирюзовый': { color: '#39e1d9', active: false },
  'бордовый': { color: '#8f001a', active: false },
  'голубой': { color: '#8bcdff', active: false },
  'желтый': { color: '#ffec1c', active: false },
  'зеленый': { color: '#3db701', active: false },
  'золотой': { color: '#dcbd64', active: false },
  'коралловый': { color: '#ff606e', active: false },
  'коричневый': { color: '#733d01', active: false },
  'красный': { color: '#e50000', active: false },
  'оранжевый': { color: '#ff7900', active: false },
  'разноцветный': { color: multi, active: false },
  'розовый': { color: '#ff9ad5', active: false },
  'серебряный': { color: '#C0C0C0', active: false },
  'серый': { color: '#b6b6b6', active: false },
  'синий': { color: '#3872fc', active: false },
  'фиолетовый': { color: '#8A2BE2', active: false },
  'хаки': { color: '#BDB76B', active: false },
  'черный': { color: '#000', active: false },
}

const SearchColorPick = () => {

  const [colors, setColors] = useState(colorsData)
  const [checked, setChecked] = useState(false)
  const [count, setCount] = useState(0)

  const onSwitch = () => {
    if (checked) {
      setCount(0)
      setColors(colorsData)
      setChecked(false)
    } else {
      setChecked(true)
    }
  }

  const onClickColor = (e) => {
    const ckey = e.currentTarget.dataset.ckey
    setColors({ ...colors, [ckey]: { ...colors[ckey], active: !colors[ckey].active }})
    colors[ckey].active ? setCount(count - 1) : setCount(count + 1)
  }

  const getColorsItems = () => {
    return Object.keys(colors).map((colorKey => {
      const [color, active] = [colors[colorKey].color, colors[colorKey].active]
      const [border, fill] = colorKey === 'белый'
        ? [styleBorderKeyWhite, '#000']
        : ['none', '#fff']
      const style = { background: color, border: border }
      return (
        <div
          key={uuid()}
          className='search-page-colors-item'
          style={style}
          data-ckey={colorKey}
          onClick={onClickColor}
        >
         {active ? <Icon16Done fill={fill} /> : null}
        </div>
      )
    }))
  }

  return (
    <div>
      <div className='search-page-color-handle'>
        <div className='color-handle-text'>
          <div>По цвету</div>
          <div className='color-handle-text_color'>{count}</div>
        </div>
        <Switch checked={checked} onChange={onSwitch} />
      </div>
      <HorizontalScroll>
        <div className='search-page-color-pick'>
          <div style={checked ? undefined : styleColorPickerDisabled}>
            <div className='search-page-colors-items'>
              {getColorsItems()}
            </div>
          </div>
        </div>
      </HorizontalScroll>
    </div>
  )
}

export default SearchColorPick;
