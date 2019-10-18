import React from 'react';
import './FavoritesPanel.css';
import { Panel, Div } from "@vkontakte/vkui";
import ProductCardSmall from "../../components/productCardSmall/ProductCardSmall";
import HeaderFavorite from "../../components/headerFavorite/HeaderFavorite";
import { connect as reduxConnect } from "react-redux";
import { filterFavorite } from '../../reducers/favoriteSelectors';

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
    const { products } = this.props
    const favorite = filterFavorite(products)
    const lenFavorite = favorite.length

    const Cards = () => {

      if (lenFavorite) {
        return favorite.map(el => (
          <ProductCardSmall
            key={el.id} formSticker='round' nameSticker={mode === 'favorite' ? 'like' : 'star'}
            prodId={el.id} product={el}
          />
        ))
      } else {
        return []
      }
    }

    return (
      <Panel id={this.props.id} className='favorites-page'>
        <HeaderFavorite
          toggleContext={this.toggleContext} select={this.select}
          contextOpened={contextOpened} mode={mode} len={lenFavorite}
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
    products: state.user.products
  }),
  null
)(FavoritesPanel);
