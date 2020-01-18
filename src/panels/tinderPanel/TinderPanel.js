import React, { useState, useEffect, useCallback } from 'react';
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

const TinderPanel = ({ id, userId, setProduct }) => {

  const [model, setModel] = useState(false)
  const [swipe, setSwipe] = useState({ id: false, likes: 0, type: false })
  const [isWelcome, setIsWelcome] = useState(true)

  const onSwipe = (value) => {
    const type = value === 'right' ? 1 : 0
    const likes = type === 1 ? swipe.likes + 1 : swipe.likes
    setSwipe({ id: model.id, likes, type })
  }

  const onCloseWelcome = () => setIsWelcome(false)

  const getModel = useCallback(async () => {
    try {
      const res = await service.getGameModel(userId)
      if (res && res.ok) {
        setModel(res.result)
      } else {
        console.log('#panels.tinderPanel.TinderPanel.getModel# RESPONCE ERROR')
      }
    } catch (err) {
      console.log('#panels.tinderPanel.TinderPanel.getModel#', err)
    }
  }, [userId])

  useEffect(() => {
    getModel()
  }, [getModel])

  useEffect(() => {
    const setGame = async () => {
      try {
        await service.setGame({ userId, goodId: swipe.id, type: swipe.type })
        getModel()
      } catch (err) {
        console.log('#panels.tinderPanel.TinderPanel.setGame#', err)
      }
    }
    if (swipe.id) {
      setGame()
    }
  }, [swipe, userId, getModel])

  return (
    <Panel style={osname === IOS ? fontStyleIOS : fontStyleAndroid} id={id} theme='white'>
      <HeaderTinder title='Кроссы ' page='tinder' countLikes={swipe.likes} />
      <div id='tpw' className='tinder_page_wrap'>
        {
          model &&
          <Swipeable
            buttons={({ left, right }) => (
              <div className='tinder_buttons_wrap'>
                <TinderButton func={left} title='Не нравится' iconSvg={<IconDislike />} />
                <TinderButton func={right} title='Нравится' iconSvg={<IconLike />} />
              </div>
            )}
            onSwipe={onSwipe}
          >
            <Card>
              <ProductCardTinder product={model} setProduct={setProduct} isWelcome={isWelcome} />
            </Card>
          </Swipeable>
        }
        {isWelcome ? <ProductCardTinderWelcome closeWelcome={onCloseWelcome} /> : null}
      </div>
    </Panel>
  )
}

export default TinderPanel;