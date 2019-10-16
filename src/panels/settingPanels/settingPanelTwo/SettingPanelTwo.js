import React from 'react';
import './SettingPanelTwo.css';

import {Panel, IOS, platform, Div, Radio} from "@vkontakte/vkui";
import Header from "../../../components/header/Header";
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import RadioButton from "../../../components/radioButton/RadioButton";

const SettingPanelTwo = ({id, goPanel}) => {
  const sizeChart = [36, 37, 38, 39, 40, 41, 42];
  const markUp = sizeChart.map(item => {
    return (
      <div className='setting-page-two_radio setting-border-bottom' key={item}>
        <RadioButton title={item}/>
      </div>
    )
  });
  const osname = platform();
  let fontStyleGlobal = {
    fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`,
    fontSize: `${osname === IOS ? '17px' : '14px'}`
  };
  return (
    <Panel id={id}
           theme='white'
           style={fontStyleGlobal}
           className='setting-page-two'>
      <Header func={goPanel}
              goTo='settings-1'
              title='Размеры'
              iconAndroid={true}
              iconIOS={true}/>
      <Div className='setting-page-two-button_wrap setting-border-bottom'>
        <div className='setting-page-two_button'>
          <RectangleButton title='Таблица соответствия размеров'
                           func={goPanel}
                           goTo='settings-4'/>
        </div>
        <div className='setting-page-two_text'>Выберете до 3-х интересующих Вас размеров кроссовок</div>
      </Div>
      {markUp}
    </Panel>
  )
};

export default SettingPanelTwo;
