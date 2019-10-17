import React from 'react';
import './SettingPanelOne.css';
import {Div, FormLayoutGroup, IOS, Panel, platform, Radio} from "@vkontakte/vkui";
import Header from "../../../components/header/Header";
import IconChevronIOSRight from "../../../components/icon/IconChevronIOSRight";
import IconChevronAndroidRight from "../../../components/icon/IconChevronAndroidRight";
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import RoundSizeButton from '../../../components/buttons/roundSizeButton/RoundSizeButton';
import RadioButton from "../../../components/radioButton/RadioButton";
import { connect as reduxConnect } from "react-redux";
import { filterSizes } from '../../../reducers/selectors';

class SettingPanelOne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const osname = platform();
    let fontStyleGlobal = {
      fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`,
      fontSize: `${osname === IOS ? '17px' : '14px'}`
    };

    const { sizes, gender } = this.props
    
    const Sizes = () => filterSizes(sizes).map(el => (
      <div key={el.id} className='setting-page-size_left_color'>{el.size}</div>
    ))

    return (
      <Panel id={this.props.id}
             theme='white'
             className='setting-page_wrap'
             style={fontStyleGlobal}>
        <Header title='Настройки'/>
        <Div className='setting-page-size setting-border-bottom'>
          <div className='setting-page-size_left'>
            <div>Размер</div>
            {Sizes()}
          </div>
          <div className='setting-page-size_right'>
            <RoundSizeButton func={this.props.goPanel}
                             goTo='settings-2'
                             iconSvg={osname === IOS ? <IconChevronIOSRight/> : <IconChevronAndroidRight/>}/>
          </div>
        </Div>
        <Div className='setting-page-checkbox-group setting-border-bottom'>
          <RadioButton checked={true} title='Мужские' name='gender'/>
          <RadioButton title='Женские' name='gender'/>
        </Div>
        <Div className='setting-page-notifications setting-border-bottom'>
          <div className='setting-page-notifications_left'>
            <div>Уведомления</div>
            <div className='setting-page-notifications_left_color'>3</div>
          </div>
          <div className='setting-page-notifications_right'>
            <RoundSizeButton func={this.props.goPanel}
                             goTo='settings-3'
                             iconSvg={osname === IOS ? <IconChevronIOSRight/> : <IconChevronAndroidRight/>}/>
          </div>
        </Div>
        <Div className='setting-page-buttons'>
          <RectangleButton title='Поделиться приложением'/>
          <RectangleButton title='Сообщить о проблеме'/>
          <RectangleButton title='Сообщество приложения '/>
        </Div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    sizes: state.user.sizeChart,
    gender: state.user.gender
  }),
  null
)(SettingPanelOne);
