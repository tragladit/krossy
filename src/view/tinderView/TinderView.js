import React from 'react';
// import ApiService from "../../api/krossy-api";
import { View } from "@vkontakte/vkui";
import TinderPanel from "../../panels/tinderPanel/TinderPanel";
import ProductCardPanel from "../../panels/productCardPanel/ProductCardPanel";
import { connect as reduxConnect } from "react-redux";
import {
  setInitialCards, resTinderData, setLikeTinder, setDislikeTinder, setIsWelcome
} from '../../reducers/tinder';

// const service = new ApiService();

// const getGameModels = async (userId) => {
//   const res = await service.getModels(userId);
//   console.log('#game models#', res)
// }

class TinderView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activePanel: 'tinder', isWelcome: this.props.isWelcome }
    this.initCardsData()
  }

  componentWillUnmount() {
    this.props.resTinderData()
  }

  initCardsData = () => {
    // getGameModels(this.props.userId)
    this.props.setInitialCards(Object.keys(this.props.products))
  }

  onCloseModal = (checked) => {
    if (checked) {
      this.props.setIsWelcome()
    }
    this.setState({ isWelcome: false })
  }

  go = (panel) => this.setState({ activePanel: panel })

  render() {

    const { userId, products, cards, likes, setLikeTinder, setDislikeTinder } = this.props

    const { isWelcome } = this.state

    return (
      <View id={this.props.id} activePanel={this.state.activePanel}>
        <TinderPanel
          id='tinder' go={this.go} isWelcome={isWelcome} onCloseModal={this.onCloseModal}
          userId={userId} products={products} cards={cards}
          likes={likes} setLikeTinder={setLikeTinder} setDislikeTinder={setDislikeTinder}
        />
        <ProductCardPanel id='productCardPanel' go={this.go} goBack='tinder' />
      </View>
    )
  }
}

export default reduxConnect(
  state => ({
    userId: state.user.userInfo.id,
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
