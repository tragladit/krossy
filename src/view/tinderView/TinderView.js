import React, { useState, useEffect } from 'react';
import { View } from "@vkontakte/vkui";
import TinderPanel from "../../panels/tinderPanel/TinderPanel";
import ProductCardPanel from "../../panels/productCardPanel/ProductCardPanel";
import { connect as reduxConnect } from "react-redux";
import { isChangeBoolean, setOnGoGameData } from '../../reducers/user';
import { getNormalizeData } from '../../reducers/selectors';
import ApiService from '../../api/krossy-api';

const Service = new ApiService()

const TINDER = 'tinder'
const PRODUCT_CARD = 'productCardPanel'

const TinderView = ({ id, userId, isLoad, setGameData }) => {

  const [activePanel, setActivePanel] = useState(TINDER)
  const [product, setProduct] = useState(false)

  const go = (panel) => setActivePanel(panel)

  const onSetProduct = (data) => setProduct(data)

  useEffect(() => {
    const { id, pictureModelId } = product
    const goProduct = async () => {
      try {
        isLoad(true);
        const resModels = await Service.getModels(id, userId)
        if (resModels.ok) {
          const nmzData = getNormalizeData(resModels.result, pictureModelId)
          setGameData(nmzData.models, product, nmzData.current)
          isLoad(false)
          go(PRODUCT_CARD)
        } else {
          console.log('#ProductCardTinder.goProduct.findCurrentModel# Model not find')
        }
      } catch (err) {
        console.log('#ProductCardTinder.goProduct#', err)
      }
    }
    if (product) {
      goProduct()
    }
  }, [product, userId, isLoad, setGameData])

  return (
    <View id={id} activePanel={activePanel}>
      <TinderPanel id={TINDER} userId={userId} setProduct={onSetProduct} />
      <ProductCardPanel id={PRODUCT_CARD} go={go} goBack={TINDER} />
    </View>
  )
}

export default reduxConnect(
  state => ({
    userId: state.user.userInfo.id
  }),
  dispatch => ({
    isLoad: bool => dispatch(isChangeBoolean('isLoadModels', bool)),
    setGameData: (modelsParams, currentProduct, current) => {
      dispatch(setOnGoGameData(modelsParams, currentProduct, current))
    }
  })
)(TinderView);
