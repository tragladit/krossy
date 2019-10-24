import React from 'react';
import './TinderPanel.css';
import { Panel, Div, platform, IOS } from "@vkontakte/vkui";
import ProductCardTinder from "../../components/productCardTinder/ProductCardTinder";
import ProductCardTinderWelcome from "../../components/productCardTinderWelcome/ProductCardTinderWelcome";
import Swipeable from "react-swipy"
import Card from './Card';
import TinderButton from '../../components/buttons/tinderButton/TinderButton';
import { connect as reduxConnect } from "react-redux";
import { setInitialCards, delCard } from '../../reducers/tinder';
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
    this.state = { isWelcome: true }
  }

  componentDidMount() {
    if (!this.props.cards) {
      this.props.setInitialCards(Object.keys(this.props.products))
    }
  }

  handleCloseModal = () => this.setState({ isWelcome: false });

  render() {

    const { products, cards, delCard } = this.props;

    const ids = cards ? cards : Object.keys(products)

    return (
      <Panel style={osname === IOS ? fontStyleIOS : fontStyleAndroid} id={this.props.id} theme='white'>
        <HeaderTinder title='Кроссы ' page='tinder' />
        <div className='tinder_page'>
          <div className='tinder_page_wrap'>
            {
              cards.length > 0 &&
              <Swipeable
                buttons={({ left, right }) => (
                  <div className='tinder_buttons_wrap'>
                    <TinderButton func={left} title='Не нравится' iconSvg={<IconDislike />} />
                    <TinderButton func={right} title='Нравится' iconSvg={<IconLike />} />
                  </div>
                )}
                onAfterSwipe={delCard}
              >
                <Card>
                  <ProductCardTinder product={products[ids[0]]} isWelcome={this.state.isWelcome} />
                </Card>
              </Swipeable>
            }
            {this.state.isWelcome ? <ProductCardTinderWelcome closeModal={this.handleCloseModal} /> : null}
          </div>
        </div>
        {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    products: state.user.products,
    cards: state.tinder.cards
  }),
  dispatch => ({
    setInitialCards: data => dispatch(setInitialCards(data)),
    delCard: () => dispatch(delCard())
  })
)(TinderPanel);