import React, { useState } from 'react';
import './SettingPanelTwo.css';
import { Panel, IOS, platform, Div, Cell, Group, List } from "@vkontakte/vkui";
import Header from "../../../components/header/Header";
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import Icon16Done from '@vkontakte/icons/dist/16/done';
import { connect as reduxConnect } from "react-redux";
import { setSizeChart } from '../../../reducers/user';
import { filterSizes, setSizes } from '../../../reducers/selectors';

const SettingPanelTwo = ({ id, goPanel, sizeChart, setSizeChart }) => {

  const [txtErr, setTxtErr] = useState(false)

  const style = txtErr ? { color: '#FF0000' } : { color: '#AEBFCF' }
  const txt = txtErr ?
    'Нужно выбрать до 3-х интересующих Вас размеров кроссовок' :
    'Выберете до 3-х интересующих Вас размеров кроссовок'

  const onSelect = (e) => {
    const val = +e.target.textContent
    const newSizeChart = setSizes(val, sizeChart)
    const lenSelected = filterSizes(newSizeChart).length
    if (lenSelected > 3) {
      setTxtErr(true)
    } else {
      setTxtErr(false)
      setSizeChart(newSizeChart)
    }
  }

  const valsSizes = sizeChart.map(el => (
    <Cell key={el.id}>
      {el.size}
      {el.isSelected ? <Icon16Done fill="var(--accent)" /> : null}
    </Cell>
  ))

  const osname = platform();
  let fontStyleGlobal = {
    fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`,
    fontSize: `${osname === IOS ? '17px' : '14px'}`
  };
  return (
    <Panel id={id} theme='white' style={fontStyleGlobal} className='setting-page-two'>
      <Header func={goPanel} goTo='settings-1' title='Размеры' iconAndroid={true} iconIOS={true} />
      <Div className='setting-page-two-button_wrap setting-border-bottom'>
        <div className='setting-page-two_button'>
          <RectangleButton title='Таблица соответствия размеров' func={goPanel} goTo='settings-4' />
        </div>
        <div className='setting-page-two_text' style={style} >{txt}</div>
      </Div>
      <div className='search-panel-two_wrap' >
        <Group>
          <List onClick={onSelect} >
            {valsSizes}
          </List>
        </Group>
      </div>
    </Panel>
  )
};

export default reduxConnect(
  state => ({
    sizeChart: state.user.sizeChart
  }),
  dispatch => ({
    setSizeChart: data => dispatch(setSizeChart(data))
  })
)(SettingPanelTwo);
