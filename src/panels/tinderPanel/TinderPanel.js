import React from 'react';
import './TinderPanel.css';
import { Panel, platform, IOS } from "@vkontakte/vkui";
import ProductCardTinder from "../../components/productCardTinder/ProductCardTinder";
import ProductCardTinderWelcome from "../../components/productCardTinderWelcome/ProductCardTinderWelcome";
import Swipeable from "react-swipy"
import Card from './Card';
import TinderButton from '../../components/buttons/tinderButton/TinderButton';
import { connect as reduxConnect } from "react-redux";
import { setInitialCards, resTinderData, setLikeTinder, setDislikeTinder } from '../../reducers/tinder';
import IconDislike from './icons/IconDislike';
import IconLike from './icons/IconLike';
import HeaderTinder from '../../components/headerTinder/HeaderTinder';

const osname = platform();

const fontStyleAndroid = {
  fontFamily: 'Roboto, sans-serif',
};

const fontStyleIOS = {
  fontFamily: 'SF UI Text, sans-serif',
};

class TinderPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isWelcome: true, countLikes: 0 }
  }

  componentDidMount() {
    if (!this.props.cards) {
      this.props.setInitialCards(Object.keys(this.props.products))
    }
  }

  componentWillUnmount() {
    console.log('likes', this.props.likes, 'dislikes', this.props.dislikes)
    this.setState({ countLikes: 0 })
    this.props.resTinderData()
  }

  handleCloseModal = () => this.setState({ isWelcome: false });

  setSwipe = val => {
    if (val === 'right') {
      this.setState({ countLikes: this.state.countLikes + 1 })
      this.props.setLikeTinder()
    } else if (val === 'left') {
      this.props.setDislikeTinder()
    } else {
      console.log('#TinderPanel.setSwipe# Error swipe val')
    }
  }

  render() {

    const { products, cards } = this.props;

    const ids = cards ? cards : Object.keys(products)

    const lenCards = cards.length

    return (
      <Panel style={osname === IOS ? fontStyleIOS : fontStyleAndroid} id={this.props.id} theme='white'>
        <HeaderTinder title='Кроссы ' page='tinder' countLikes={this.state.countLikes} />
        <div id='tpw' className='tinder_page_wrap'>
          {
            cards.length > 0 &&
            <Swipeable
              buttons={({ left, right }) => (
                <div className='tinder_buttons_wrap'>
                  <TinderButton func={left} title='Не нравится' iconSvg={<IconDislike />} />
                  <TinderButton func={right} title='Нравится' iconSvg={<IconLike />} />
                </div>
              )}
              onSwipe={(val) => this.setSwipe(val)}
            >
              <Card>
                <ProductCardTinder product={products[ids[0]]} isWelcome={this.state.isWelcome} />
              </Card>
            </Swipeable>
          }
          {
            this.state.isWelcome ?
              <ProductCardTinderWelcome closeModal={this.handleCloseModal} /> :
              null
          }
        </div>
        {!lenCards && <Card endCards={true} />}
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    products: state.user.products,
    cards: state.tinder.cards,
    likes: state.tinder.likes,
    dislikes: state.tinder.dislikes
  }),
  dispatch => ({
    setInitialCards: data => dispatch(setInitialCards(data)),
    resTinderData: () => dispatch(resTinderData()),
    setLikeTinder: () => dispatch(setLikeTinder()),
    setDislikeTinder: () => dispatch(setDislikeTinder())
  })
)(TinderPanel);