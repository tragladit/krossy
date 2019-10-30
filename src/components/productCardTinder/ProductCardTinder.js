import React, { useEffect } from 'react';
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import logo from "../../assets/image/adidas.png";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductSizeChartViewSmall from "../product/productSizeChartViewSmall/ProductSizeChartViewSmall";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import './ProductCardTinder.css';
import RoundSizeButton from '../buttons/roundSizeButton/RoundSizeButton';
import IconArrowRight from '../icon/IconArrowRight';
import { connect as reduxConnect } from "react-redux";
import { isChangeBoolean, setNewInitData } from '../../reducers/user';
import { getNormalizeData } from '../../reducers/selectors';
import ApiService from '../../api/krossy-api';

const ProductCardTinder = ({ userId, isLoad, setNewInitData, product, go, isWelcome }) => {

  const Service = new ApiService()

  useEffect(() => {
    const page = document.getElementById('tpw')
    const header = document.getElementById('tpph')
    const pageHeight = page.clientHeight - 82
    const headerHeight = header.clientHeight
    let imgHeight = header.clientWidth
    if (imgHeight + headerHeight > pageHeight) {
      imgHeight = pageHeight - headerHeight
    }
    document.getElementById('tppiw').style.height = `${imgHeight}px`
  })

  const goProduct = async () => {
    try {
      const goTo = 'productCardPanel'
      const target = product.id
      isLoad(true);
      const resModels = await Service.getModels(target, userId)
      if (resModels.ok) {
        const nmzData = getNormalizeData(resModels.result, product.pictureModelId)
        setNewInitData(nmzData.models, target, nmzData.current)
        isLoad(false)
        go(goTo)
      } else {
        console.log('#ProductCardTinder.goProduct.findCurrentModel# Model not find')
      }
    } catch (err) {
      console.log('#ProductCardTinder.goProduct#', err)
    }
  };

  const divStyleBlur = { filter: 'blur(9px)' }

  const sizes = product.sizes.sort((a, b) => a - b)

  const style = { backgroundImage: `url('${product.pictures[0]}')` }

  return (
    <div style={isWelcome ? divStyleBlur : null} className='tinder-page-product'>
      <div id='tpph' className='tinder-page-product-header'>
        <div className='tinder-page-product-header-info'>
          <ProductBrandView name={product.name} model={product.model} logo={logo} />
          <ProductPriceView price={product.price} oldPrice={product.oldPrice} discount={product.discount} />
          <div className='tinder-page-size-shop-wrap'>
            <ProductSizeChartViewSmall sizes={sizes} />
            <ProductCountShopView shops={product.shops} />
          </div>
        </div>
        <div className='tinder-page-product-header-button'>
          <RoundSizeButton func={goProduct} iconSvg={<IconArrowRight />} />
        </div>
      </div>
      <div id='tppiw' className='tinder-page-product-image-wrap'>
        <div className='tinder-page-product-image' style={style}></div>
      </div>
    </div>
  )
};

export default reduxConnect(
  state => ({
    userId: state.user.userInfo.id
  }),
  dispatch => ({
    isLoad: bool => dispatch(isChangeBoolean('isLoadModels', bool)),
    setNewInitData: (modelsParams, currentProduct, current) => {
      dispatch(setNewInitData(modelsParams, currentProduct, current))
    }
  })
)(ProductCardTinder);
