import React from 'react';
import { Panel } from '@vkontakte/vkui';
import './StartPanelOne.css';
import FlexButton from "../../../components/buttons/flexButton/FlexButton";
import SlideDots from "../../../components/dotsSlide/SlideDots";
import ApiService from "../../../api/krossy-api";
import { connect as reduxConnect } from "react-redux";
import {
  isChangeBoolean, onChangeGender, onChooseSizeBySize
} from '../../../reducers/user';

class StartPanelOne extends React.Component {

  Service = new ApiService();

  loadSettings = (id) => {
    this.props.isLoad(true);
    this.Service.loadSetting(id)
      .then(res => {
        if (res.ok) {
          const { gender, size } = res.result
          this.props.gender(gender);
          size.forEach(s => this.props.size(s));
          this.props.isLoad(false);
        }
      })
  };

  componentDidMount() {
    if (this.props.data.userInfo) {
      this.loadSettings(this.props.data.userInfo.id);
    }
  }

  render() {
    return (
      <Panel id={this.props.id}>
        <div className='start-panel-one_wrap'>
          <div className='start-panel-one_content'>
            <div className='start-panel-one-content_title'>Кроссы</div>
            <div className='start-panel-one-content_text'>
              Сервис «Кроссы» - это отличный помощник в нелегкой задаче поиска своих самых любимых кросовок!
            </div>
          </div>
          <div className='start_panel_one_button_next_wrap'>
            <FlexButton title='Далее' goTo='start-2' func={this.props.goPanel}/>
          </div>
          <SlideDots dot={1} />
        </div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isLoad: bool => dispatch(isChangeBoolean('isLoadSetting', bool)),
    gender: value => dispatch(onChangeGender(value)),
    size: size => dispatch(onChooseSizeBySize(size)),
  })
)(StartPanelOne);
