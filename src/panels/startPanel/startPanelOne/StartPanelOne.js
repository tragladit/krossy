import React from 'react';
import { Panel } from '@vkontakte/vkui';
import './StartPanelOne.css';
import RectangleButton from "../../../components/buttons/rectangleButton/RectangleButton";
import DotsSlide from "../../../components/dotsSlide/DotsSlide";
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
      .then(res => { //todo сделать проверку на загрузку юзера
        const { gender, size } = res.result
        this.props.gender(gender);
        size.forEach(s => this.props.size(s));
        this.props.isLoad(false);
      })
  };

  componentDidMount() {
    if (this.props.data.userInfo) { // проверка на загругку данных их VK
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
          <RectangleButton title='Далее' goTo='start-2' func={this.props.goPanel} />
          <DotsSlide />
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
