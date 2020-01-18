import React from 'react';
import './FavoritesPanel.css';
import { Panel, Div } from "@vkontakte/vkui";
import ProductCardSmall from "../../components/productCardSmall/ProductCardSmall";
import HeaderFavorite from "../../components/headerFavorite/HeaderFavorite";
import { connect as reduxConnect } from "react-redux";
// import { filterFavorite, filterLike } from '../../reducers/favoriteSelectors';
import InfoCard from '../../components/infoCard/InfoCard';
import ApiService from "../../api/krossy-api";

class FavoritesPanel extends React.Component {

  Service = new ApiService();

  constructor(props) {
    super(props)
    this.state = {
      contextOpened: false,
      mode: 'favorite',
      data: [],
    };
  }

  toggleContext = () => this.setState({ contextOpened: !this.state.contextOpened });

  select = (e) => {
    const currentMode = e.currentTarget.dataset.mode;
    this.setState({ mode: currentMode });
    requestAnimationFrame(this.toggleContext);
  };

  getData = async (id) => {
    const {mode} = this.state
    try {
      const res = mode === 'favorite'
        ? await this.Service.getSubscribes(id)
        : await this.Service.getLikes(id)
      if (res.ok) {
        console.log('result', res.result)
        this.setState({ data: res.result });
      }
    } catch (err) {
      console.log('#panels.favoritesPanel.FavoritesPanel.getData#', err)
    }
  };

  componentDidMount() {
    this.getData(this.props.userId);
  }

  render() {

    const { contextOpened, mode, data } = this.state;

    const lenData = data.length

    const Cards = () => {
      if (lenData) {
        return data.map(el => (
          <ProductCardSmall
            key={el.id} formSticker='round' nameSticker={mode === 'favorite' ? 'like' : 'star'}
            prodId={el.id} product={el}
          />
        ))
      } else {
        return <InfoCard text='Ничего не найдено' />
      }
    }

    return (
      <Panel id={this.props.id} className='favorites-page'>
        <HeaderFavorite
          toggleContext={this.toggleContext} select={this.select}
          contextOpened={contextOpened} mode={mode} len={lenData}
        />
        <Div className='favorites-page_wrap'>
          {Cards()}
        </Div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    userId: state.user.userInfo.id,
  }),
  null
)(FavoritesPanel);
