import React from 'react';
import './TinderPanel.css';
import { Panel, platform, IOS } from "@vkontakte/vkui";
import ProductCardTinder from "../../components/productCardTinder/ProductCardTinder";
import ProductCardTinderWelcome from "../../components/productCardTinderWelcome/ProductCardTinderWelcome";
import Swipeable from "react-swipy"
import Card from './Card';
import TinderButton from '../../components/buttons/tinderButton/TinderButton';
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
    super(props);
    this.state = { direction: '' };
  }

  setSwipe = () => {
    if (this.state.direction === 'right') {
      this.props.setLikeTinder()
    } else if (this.state.direction === 'left') {
      this.props.setDislikeTinder()
    } else {
      console.log('#TinderPanel.setSwipe# Error swipe val')
    }
  }

  render() {

    const { isWelcome, products, go, cards, likes, onCloseModal } = this.props;

    const lenCards = cards.length

    return (
      <Panel style={osname === IOS ? fontStyleIOS : fontStyleAndroid} id={this.props.id} theme='white'>
        <HeaderTinder title='Кроссы ' page='tinder' countLikes={likes.length} />
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
              onSwipe={(val) => this.setState({ direction: val })}
              onAfterSwipe={this.setSwipe}
            >
              <Card>
                <ProductCardTinder product={products[cards[0]]} go={go} isWelcome={isWelcome} />
              </Card>
            </Swipeable>
          }
          {isWelcome ? <ProductCardTinderWelcome closeModal={onCloseModal} /> : null}
        </div>
        {!lenCards && <Card endCards={true} />}
      </Panel>
    )
  }
}

export default TinderPanel;