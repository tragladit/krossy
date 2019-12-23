import React, { useState } from 'react';
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
import ApiService from "../../api/krossy-api";

const osname = platform();

const fontStyleAndroid = {
  fontFamily: 'Roboto, sans-serif',
};

const fontStyleIOS = {
  fontFamily: 'SF UI Text, sans-serif',
};

const service = new ApiService();

const TinderPanel = ({
  id, go, isWelcome, userId, products, cards, likes, setLikeTinder, setDislikeTinder, onCloseModal
}) => {

  const [direction, setDirection] = useState('')
  const lenCards = cards.length

  const setSwipe = () => {
    const type = direction === 'right' ? 1 : 0
    service.setGame({ userId: userId, goodId: products[cards[0]].id, type: type })
    if (direction === 'right') {
      setLikeTinder()
    } else if (direction === 'left') {
      setDislikeTinder()
    } else {
      console.log('#TinderPanel.setSwipe# Error swipe val')
    }
  }

  return (
    <Panel style={osname === IOS ? fontStyleIOS : fontStyleAndroid} id={id} theme='white'>
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
            onSwipe={(val) => setDirection(val)}
            onAfterSwipe={setSwipe}
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

export default TinderPanel;