import React, { useState } from 'react';
import { Switch, List, Cell, HorizontalScroll } from "@vkontakte/vkui";
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

const styleBorder = '1px solid #e1e3e6'

const styleList = { pointerEvents: 'auto', opacity: 1 }
const styleListDisabled = { pointerEvents: 'none', opacity: 0.5 }

const SearchColorPick = () => {

  const [selected, setSelected] = useState([])
  const [checked, setChecked] = useState(false)

  const onChange = (e) => {
    const value = e.target.value
    let newSelected = []
    if (selected.length) {
      const ind = selected.findIndex(el => el === value)
      if (ind === -1) {
        newSelected = [...selected]
        newSelected.push(value)
      } else {
        newSelected = [...selected]
        newSelected.splice(ind, 1)
      }
    } else {
      newSelected.push(value)
    }
    setSelected(newSelected)
  }

  const onSwitch = () => {
    if (checked) {
      setSelected([])
      setChecked(false)
    } else {
      setChecked(true)
    }
  }
  
  const ColorItem = ({ value, style, active, fill }) => (
    <Cell value={value} selectable >
      <div className='search-page-colors-item' style={style} >
        {active ? <Icon16Done fill={fill} /> : null}
      </div>
    </Cell>
  )

  const getColorsItems = () => {
    return Object.keys(colors).map((k => {
      const [value, colorItem] = [k, colors[k]]
      const active = selected.find(el => el === value)
      const [border, fill] = value === 'белый' ? [styleBorder, '#000'] : ['none', '#fff']
      const style = { background: colorItem, border: border }
      return <ColorItem key={value} value={value} style={style} active={active} fill={fill} />
    }))
  }

  return (
    <div>
      <div className='search-page-color-handle'>
        <div className='color-handle-text'>
          <div>По цвету</div>
          <div className='color-handle-text_color'>{selected.length}</div>
        </div>
        <Switch checked={checked} onChange={onSwitch} />
      </div>
      <HorizontalScroll>
        <div className='search-page-color-pick'>
          <List style={checked ? styleList : styleListDisabled} onChange={onChange}>
            <div className='search-page-colors-items'>
              {getColorsItems()}
            </div>
          </List>
        </div>
      </HorizontalScroll>
    </div>
  )
}

export default SearchColorPick;
