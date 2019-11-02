import React from 'react';
import './FavoritesPanel.css';
import { Panel, Div } from "@vkontakte/vkui";
import ProductCardSmall from "../../components/productCardSmall/ProductCardSmall";
import HeaderFavorite from "../../components/headerFavorite/HeaderFavorite";
import { connect as reduxConnect } from "react-redux";
import { filterFavorite, filterLike } from '../../reducers/favoriteSelectors';
import InfoCard from '../../components/infoCard/InfoCard';

class FavoritesPanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contextOpened: false,
      mode: 'favorite'
    };
  }

  toggleContext = () => this.setState({ contextOpened: !this.state.contextOpened });

  select = (e) => {
    const currentMode = e.currentTarget.dataset.mode;
    this.setState({ mode: currentMode });
    requestAnimationFrame(this.toggleContext);
  };

  render() {

    const { contextOpened, mode } = this.state;
    const { products, likes } = this.props

    const getData = () => {
      if (mode === 'favorite') {
        return filterFavorite(products)
      } else if (mode === 'like') {
        if (likes.length) {
          return filterLike(likes, products)
        }
        return []
      }
    }

    const dataCards = getData()

    const lenData = dataCards.length

    const Cards = () => {
      if (lenData) {
        return dataCards.map(el => (
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
    products: state.user.products,
    likes: state.tinder.likes
  }),
  null
)(FavoritesPanel);
