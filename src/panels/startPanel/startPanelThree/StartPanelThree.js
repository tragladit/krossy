import React from 'react';
import { Panel } from '@vkontakte/vkui';
import css from './StartPanelThree.module.css';
import FlexButton from "../../../components/buttons/flexButton/FlexButton";
import IconHome from "../../../components/icon/IconHome";
import IconSearch from "../../../components/icon/IconSearch";
import IconKross from "../../../components/icon/IconKross";
import IconStarBar from "../../../components/icon/IconStarBar";
import IconSetting from "../../../components/icon/IconSetting";
import IconArrowRight from "../../../components/icon/IconArrowRight";
import ApiService from "../../../api/krossy-api";
import SlideDots from "../../../components/dotsSlide/SlideDots";
import { connect } from "react-redux";

class StartPanelThree extends React.PureComponent {

  Service = new ApiService();

  render() {
    const { id, goPanel, goView } = this.props;
    return (
      <Panel id={id} >
        <div className={css.start_panel_three}>
          <div className={css.text_title}>Готово!</div>
          <div className={css.text}>
            Сервис «Кроссы» - это отличный помощник в нелегкой
            задаче поиска своих самых любимых кросовок!
          </div>
          <div className={css.text}>
            Особенно рекомендуем наш Tinder для кроссовок - очень кашерно!
          </div>
          <div className={css.icon_arrow}>
            <IconArrowRight />
          </div>
          <div className={css.setting}>
            <div className={css.setting_icon_home}>
              <IconHome currentColor='#ffffff' />
            </div>
            <div className={css.setting_icon_search}>
              <IconSearch currentColor='#ffffff' />
            </div>
            <div className={css.setting_icon_kross}>
              <IconKross currentColor='#ffffff' />
            </div>
            <div className={css.setting_icon_star}>
              <IconStarBar currentColor='#ffffff' />
            </div>
            <div className={css.setting_icon_setting}>
              <IconSetting currentColor='#ffffff' />
            </div>
          </div>
          <div className={css.buttons_next_back}>
            <FlexButton title='Назад' func={goPanel} goTo='start-2' width='40%' />
            <FlexButton title='Приступить' func={goView} width='40%' />
            <SlideDots dot={3} />
          </div>
        </div>
      </Panel>
    )
  }
};

export default connect(
  state => ({
    data: state.user
  }),
  null
)(StartPanelThree);
