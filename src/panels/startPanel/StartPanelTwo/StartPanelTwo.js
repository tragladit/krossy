import React from 'react';
import { Panel } from '@vkontakte/vkui';
import { connect } from "react-redux";
import css from './StartPanelTwo.module.css';
import StartPanelButton from "../../../components/buttons/startPanelButton/StartPanelButton";
import { isChangeBoolean, onChangeGender, onChooseSize } from "../../../reducers/user";
import SlideDots from "../../../components/dotsSlide/SlideDots";
import ApiService from "../../../api/krossy-api";


class StartPanelTwo extends React.PureComponent {

  state = {
    isSelectedSizes: false
  };

  Service = new ApiService();

  onChangeGender = (event) => {
    const value = event.target.value;
    this.props.onChangeGender(value)
  };

  onChangeSize = (event) => {
    const id = parseInt(event.target.dataset.id, 10);
    this.props.onPickSize(id)
  };

  saveUserSettings = () => {
    const { gender, sizeChart, userInfo } = this.props.data;
    const sizes = [];
    sizeChart.forEach(item => {
      if (item.isSelected) {
        sizes.push(item.size)
      }
    });
    const form = new FormData();
    form.append("gender", gender);
    form.append("size", JSON.stringify(sizes));
    form.append("bdate", userInfo.bdate)

    sizes.length < 4 && sizes.length > 0 ?
      this.goNextScreen(userInfo.id, form) :
      this.setState({ isSelectedSizes: true })
  };

  goNextScreen = (userID, form) => {
    this.setState({ isSelectedSizes: false });
    this.Service.saveSetting(userID, form)
      .then(res => {
        if (res.ok) {
          this.props.isSave(true)
        };
      })
    this.props.goPanel('start-3');
  };

  render() {
    const { id, data } = this.props;
    return (
      <Panel id={id} >
        <div className={css.start_panel_two}>
          <div className={css.text_title}>Персонализация</div>
          <div className={css.text}>
            Какие кроссовки Вам интересны?
          </div>
          <div className={css.buttons_male_female}>
            <input
              className={css.buttons_male_female_radio} type='radio' name='gender' value='male'
              id='genderMale' onChange={this.onChangeGender} checked={data.gender === "male"}
            />
            <label htmlFor='genderMale' className={css.buttons_male_female_radio_label}>
              Мужские
            </label>
            <input
              className={css.buttons_male_female_radio} type='radio' name='gender' value='female'
              id='genderFemale' onChange={this.onChangeGender} checked={data.gender === "female"}
            />
            <label htmlFor='genderFemale' className={css.buttons_male_female_radio_label}>
              Женские
            </label>
          </div>
          <div className={css.text}>
            {
              this.state.isSelectedSizes ?
                <div className={css.warning}>Нужно выбрать до 3-х интересующих Вас размеров</div> :
                <div>Выберете до 3-х интересующих Вас размеров кроссовок</div>
            }
          </div>
          <div onClick={this.onChangeSize} className={css.horizontal_sizes}>
            {
              data.sizeChart.map(item => {
                return (
                  <div
                    className={css.buttons_sizes} key={item.id} data-id={item.id}
                    style={item.isSelected ? { borderColor: "#ffffff", boxShadow: "0 0 4px 0 #fff" } : {}}
                  >
                    {item.size}
                  </div>
                )
              })
            }
          </div>
          <div className={css.button_next}>
            <StartPanelButton title='Далее' secondAction={this.saveUserSettings} goTo={'start-3'} />
            <SlideDots dot={2} />
          </div>
        </div>
      </Panel>
    )
  }
}

export default connect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isSave: bool => dispatch(isChangeBoolean('isSaveSetting', bool)),
    onChangeGender: value => dispatch(onChangeGender(value)),
    onPickSize: id => dispatch(onChooseSize(id))
  })
)
  (StartPanelTwo);
