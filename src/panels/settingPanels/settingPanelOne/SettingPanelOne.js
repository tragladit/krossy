import React from 'react';
import './SettingPanelOne.css';
import { Div, IOS, Panel, platform } from "@vkontakte/vkui";
import Header from "../../../components/header/Header";
import IconChevronIOSRight from "../../../components/icon/IconChevronIOSRight";
import IconChevronAndroidRight from "../../../components/icon/IconChevronAndroidRight";
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import RoundSizeButton from '../../../components/buttons/roundSizeButton/RoundSizeButton';
import RadioButton from "../../../components/radioButtonRedux/RadioButtonRedux";
import { connect as reduxConnect } from "react-redux";
import { onChangeGender } from '../../../reducers/user';
import { filterSizes } from '../../../reducers/selectors';

class SettingPanelOne extends React.Component {

  render() {
    const osname = platform();
    let fontStyleGlobal = {
      fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`,
      fontSize: `${osname === IOS ? '17px' : '14px'}`
    };

    const { goPanel, gender, sizes, onChangeGender } = this.props

    const Sizes = () => {
      const selectedSizes = filterSizes(sizes)
      return selectedSizes.map(el => (
        <div key={el.id} className='setting-page-size_left_color'>{el.size}</div>
      ))
    }

    return (
      <Panel id={this.props.id} theme='white' className='setting-page_wrap' style={fontStyleGlobal}>
        <Header title='Настройки' />
        <Div className='setting-page-size setting-border-bottom'>
          <div className='setting-page-size_left'>
            <div>Размер</div>
            {Sizes()}
          </div>
          <div className='setting-page-size_right'>
            <RoundSizeButton
              func={goPanel} goTo='settings-2'
              iconSvg={osname === IOS ? <IconChevronIOSRight /> : <IconChevronAndroidRight />}
            />
          </div>
        </Div>
        <Div className='setting-page-checkbox-group setting-border-bottom'>
          <RadioButton
            title='Мужские' name='gender' value={'male'} checked={gender} setChecked={onChangeGender}
          />
          <RadioButton
            title='Женские' name='gender' value={'female'} checked={gender} setChecked={onChangeGender}
          />
        </Div>
        <Div className='setting-page-notifications setting-border-bottom'>
          <div className='setting-page-notifications_left'>
            <div>Уведомления</div>
            <div className='setting-page-notifications_left_color'>3</div>
          </div>
          <div className='setting-page-notifications_right'>
            <RoundSizeButton
              func={this.props.goPanel} goTo='settings-3'
              iconSvg={osname === IOS ? <IconChevronIOSRight /> : <IconChevronAndroidRight />}
            />
          </div>
        </Div>
        <Div className='setting-page-buttons'>
          <RectangleButton title='Поделиться приложением' />
          <RectangleButton title='Сообщить о проблеме' />
          <RectangleButton title='Сообщество приложения ' />
        </Div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    gender: state.user.gender,
    sizes: state.user.sizeChart
  }),
  dispatch => ({
    onChangeGender: value => dispatch(onChangeGender(value))
  })
)(SettingPanelOne);
