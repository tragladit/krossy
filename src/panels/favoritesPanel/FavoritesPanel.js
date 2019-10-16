import React  from 'react';
import './FavoritesPanel.css';
import {Panel, Div} from "@vkontakte/vkui";
import ProductCardSmall from "../../components/productCardSmall/ProductCardSmall";
import HeaderFavorite from "../../components/headerFavorite/HeaderFavorite";

class FavoritesPanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contextOpened: false,
      mode: 'favorite'
    };
  }

  toggleContext = () => {
    this.setState({contextOpened: !this.state.contextOpened});
  };

  select = (e) => {
    const currentMode = e.currentTarget.dataset.mode;
    this.setState({mode: currentMode});
    requestAnimationFrame(this.toggleContext);
  };

  render() {
    const {contextOpened, mode} = this.state;
    return (
      <Panel id={this.props.id} className='favorites-page'>
        <HeaderFavorite toggleContext={this.toggleContext}
                        select={this.select}
                        contextOpened={contextOpened}
                        mode={mode}/>
        <Div className='favorites-page_wrap'>
          <ProductCardSmall formSticker='round'
                            nameSticker={mode === 'favorite' ? 'like' : 'star'} />
          <ProductCardSmall formSticker='round'
                            nameSticker={mode === 'favorite' ? 'like' : 'star'} />
          <ProductCardSmall formSticker='round'
                            nameSticker={mode === 'favorite' ? 'like' : 'star'} />
          <ProductCardSmall formSticker='round'
                            nameSticker={mode === 'favorite' ? 'like' : 'star'} />
          <ProductCardSmall formSticker='round'
                            nameSticker={mode === 'favorite' ? 'like' : 'star'} />
          <ProductCardSmall formSticker='round'
                            nameSticker={mode === 'favorite' ? 'like' : 'star'} />
        </Div>
      </Panel>
    )
  }
}

export default FavoritesPanel;
