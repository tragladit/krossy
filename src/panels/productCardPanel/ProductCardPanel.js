import React from 'react';
import { Panel, Gallery, HorizontalScroll, platform, IOS, Div } from '@vkontakte/vkui';
import Header from '../../components/header/Header';
import './ProductCardPanel.css';
import RoundSizeButton from '../../components/buttons/roundSizeButton/RoundSizeButton';
import RectangleButton from '../../components/buttons/rectangleButton/RectangleButton';
import ProductColorView from '../../components/product/productColorView/ProductColorView';
import ProductSizeChartView from "../../components/product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../../components/product/productPriceView/ProductPriceView";
// import IconNotificationOn from '../../components/icon/IconNotificationOn';
import IconNotificationOff from '../../components/icon/IconNotificationOff';
import IconHeartSet from '../../components/icon/IconHeartSet';
import IconQuestion from '../../components/icon/IconQuestion';
import ProductCardLikeBrand from '../../components/productCardLikeBrand/ProductCardLikeBrand';
import ShopList from "../../components/shopList/ShopList";
import ProductSelectShop from "../../components/product/productSelectShop/ProductSelectShop";
import ProductCardNotification from "../../components/productCardNotification/ProductCardNotification";
import Sticker from "../../components/Sticker/Sticker";
import { connect as reduxConnect } from "react-redux";
import { getData, setDataOnChangeColor, setDataOnChangeSize, setLike } from '../../reducers/user';
import { sortMinPrice } from "../../reducers/selectors";
import ApiService from "../../api/krossy-api";

class ProductCardPanel extends React.PureComponent {

  Service = new ApiService();

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      isOpenShopList: false,
      isOpenNotification: false
    };
  }

  loadOffers = async (id) => {
    await this.Service.getOffers(id)
      .then(res => {
        if (res.ok) {
          this.props.setOffers(sortMinPrice(res.result));
        }
      });
  };

  componentDidMount() {
    this.loadOffers(this.props.modelId);
  }

  handleOpenSelect = () => {
    this.setState({ isOpenShopList: !this.state.isOpenShopList })
  };

  handleOpenNotificationModal = () => {
    this.setState({ isOpenNotification: !this.state.isOpenNotification })
  };

  goBack = () => {
    this.props.go('homePanel')
  };

  render() {
    const {
      offers, products, productId, modelsParams, currentColor, currentSize,
      setDataOnChangeColor, setDataOnChangeSize, setLike
    } = this.props;

    const pictures = modelsParams[currentColor].pictures
    const colors = Object.keys(modelsParams)
    const params = modelsParams[currentColor].params

    const osname = platform();
    let heightStyle = osname === IOS ? 236 : 220;

    const fontStyleAndroid = {
      fontFamily: 'Roboto, sans-serif',
      position: 'relative'
    };
    const fontStyleIOS = {
      fontFamily: 'SF UI Text, sans-serif',
    };
    const blurStyle = {
      filter: 'blur(9px)'
    };

    const colorHeart = products[productId].top ? '#ff5c7b' : '#aebfcf'

    const onColor = async (newColor) => {
      const newParams = modelsParams[newColor].params[0]
      try {
        const newOffers = await this.Service.getOffers(newParams.id)
        if (newOffers.ok) {
          setDataOnChangeColor(newColor, newParams.size, newParams.id, sortMinPrice(newOffers.result));
        }
      } catch (err) {
        console.log('#ProductCardPanel.onColor#', err)
      }
    }

    const onSize = async (newSize, newId) => {
      try {
        const newOffers = await this.Service.getOffers(newId)
        if (newOffers.ok) {
          setDataOnChangeSize(newSize, newId, sortMinPrice(newOffers.result));
        }
      } catch (err) {
        console.log('#ProductCardPanel.onSize#', err)
      }
    }

    const getGallery = () => pictures.map((el, i) => <img key={i} src={el} alt={`pic${i}`} />)

    const getProductColorView = () => (
      colors.map((el, i) => (
        <ProductColorView
          key={i} color={el} curColor={currentColor} setData={onColor} icons={modelsParams}
        />
      )
      ))

    return (
      <Panel id={this.props.id}
        style={osname === IOS ? fontStyleIOS : fontStyleAndroid}>
        <Header
          func={this.goBack} iconIOS={true} iconAndroid={true}
          title={<Sticker form='rectangle' icon='trend' />}
        />
        {
          this.state.isOpenNotification ?
            <ProductCardNotification isOpen={this.handleOpenNotificationModal} /> :
            null
        }
        <div style={this.state.isOpenNotification ? blurStyle : null} className='product-card_wrap'>
          <div className='product-card-image_wrap'>
            <Gallery slideIndex={this.state.slideIndex} bullets='dark' >
              {getGallery()}
            </Gallery>
          </div>
          <Div className='product-card_attribute'>
            <div className='product-card-name'>
              <span className='product-card-name_brand'>
                {products[productId].vendor}
              </span>
              <span className='product-card-name_product'>{products[productId].model}</span>
            </div >
            <div className='product-card-price_wrap'>
              {
                offers.length > 0 ?
                  <ProductPriceView
                    price={offers[0].price} oldPrice={offers[0].oldPrice} discount={offers[0].discount}
                  />
                  : null
              }
            </div>
            <HorizontalScroll>
              <div className='product-card_attribute-color'>
                {getProductColorView()}
              </div>
            </HorizontalScroll>
            <div className='product-card_attribute-size-sex' >
              <ProductSizeChartView params={params} curSize={currentSize} setData={onSize} />
              <div className='product-card_attribute-sex'>
                {products[productId].gender}
              </div>
            </div>
            <div className='product-card-share_wrap'>
              <RoundSizeButton
                func={setLike} goTo={productId} iconSvg={<IconHeartSet color={colorHeart} />}
              />
              <RoundSizeButton
                func={this.handleOpenNotificationModal} iconSvg={<IconNotificationOff />}
              />
              <RectangleButton iconSvg={<IconQuestion />} title='Поделиться' />
            </div>
          </Div>
        </div>
        <div className='product-select-shop_wrap' >
          <ProductSelectShop
            func={this.handleOpenSelect} isOpen={this.state.isOpenShopList} count={offers.length}
          />
          {this.state.isOpenShopList ? <ShopList /> : null}
          <ProductCardLikeBrand />
        </div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    offers: state.user.offersByModel,
    products: state.user.products,
    productId: state.user.productId,
    modelsParams: state.user.modelsParams,
    modelId: state.user.modelId,
    currentColor: state.user.currentColor,
    currentSize: state.user.currentSize
  }),
  dispatch => ({
    setOffers: data => dispatch(getData('offersByModel', data)),
    setDataOnChangeColor: (color, size, id, offers) => (
      dispatch(setDataOnChangeColor(color, size, id, offers))
    ),
    setDataOnChangeSize: (size, id, offers) => dispatch(setDataOnChangeSize(size, id, offers)),
    setLike: id => dispatch(setLike(id))
  })
)(ProductCardPanel);
