import React from 'react';
import { View } from "@vkontakte/vkui";
import TinderPanel from "../../panels/tinderPanel/TinderPanel";
import ProductCardPanel from "../../panels/productCardPanel/ProductCardPanel";
import { connect as reduxConnect } from "react-redux";
import {
  setInitialCards, resTinderData, setLikeTinder, setDislikeTinder, setIsWelcome
} from '../../reducers/tinder';

class TinderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePanel: 'tinder', isWelcome: this.props.isWelcome }
    this.initCardsData()
  }

  componentWillUnmount() {
    this.props.resTinderData()
  }

  initCardsData = () => this.props.setInitialCards(Object.keys(this.props.products))

  onCloseModal = (checked) => {
    if (checked) {
      this.props.setIsWelcome()
    }
    this.setState({ isWelcome: false })
  }

  go = (panel) => this.setState({ activePanel: panel })

  render() {

    const { products, cards, likes, setLikeTinder, setDislikeTinder } = this.props

    const { isWelcome } = this.state

    return (
      <View id={this.props.id} activePanel={this.state.activePanel}>
        <TinderPanel
          id='tinder' go={this.go} isWelcome={isWelcome} products={products} cards={cards} likes={likes}
          setLikeTinder={setLikeTinder} setDislikeTinder={setDislikeTinder} onCloseModal={this.onCloseModal}
        />
        <ProductCardPanel id='productCardPanel' go={this.go} goBack='tinder' />
      </View>
    )
  }
}

export default reduxConnect(
  state => ({
    products: state.user.products,
    isWelcome: state.tinder.isWelcome,
    cards: state.tinder.cards,
    likes: state.tinder.likes,
    dislikes: state.tinder.dislikes
  }),
  dispatch => ({
    setIsWelcome: () => dispatch(setIsWelcome()),
    setInitialCards: data => dispatch(setInitialCards(data)),
    resTinderData: () => dispatch(resTinderData()),
    setLikeTinder: () => dispatch(setLikeTinder()),
    setDislikeTinder: () => dispatch(setDislikeTinder())
  })
)(TinderView);
