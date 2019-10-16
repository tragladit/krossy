import React from 'react';
import { Panel, Gallery, platform, IOS, Div } from '@vkontakte/vkui';
import Header from '../../components/header/Header';
import './ProductCardPanel.css';
//import pic from '../../assets/image/Rectangle 1297@2x.png';
import RoundSizeButton from '../../components/buttons/roundSizeButton/RoundSizeButton';
import RectangleButton from '../../components/buttons/rectangleButton/RectangleButton';
import ProductColorView from '../../components/product/productColorView/ProductColorView';
import ProductSizeChartView from "../../components/product/productSizeChartView/ProductSizeChartView";
import ProductPriceView from "../../components/product/productPriceView/ProductPriceView";
import IconNotification from '../../components/icon/IconNotification';
import IconHeartPink from '../../components/icon/IconHeartPink';
import IconQuestion from '../../components/icon/IconQuestion';
import ProductCardLikeBrand from '../../components/productCardLikeBrand/ProductCardLikeBrand';
import ShopList from "../../components/shopList/ShopList";
import ProductSelectShop from "../../components/product/productSelectShop/ProductSelectShop";
import ProductCardNotification from "../../components/productCardNotification/ProductCardNotification";
import Sticker from "../../components/Sticker/Sticker";
import { connect as reduxConnect } from "react-redux";
import { getData, setDataOnChangeColor, setDataOnChangeSize } from "../../reducers/user";
import { sortMinPrice } from "../../reducers/selectors"; //filterModelInit, getModel
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
    this.loadOffers(this.props.currentId);
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
      offers, modelsParams, prod, currentColor, currentSize, setDataOnChangeColor, setDataOnChangeSize
    } = this.props;
    const pictures = modelsParams[currentColor].pictures
    const colors = Object.keys(modelsParams)
    const params = modelsParams[currentColor].params
    const osname = platform();
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
    let heightStyle = osname === IOS ? 236 : 220;

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

    const getProductColorView = () => {
      return colors.map((el, i) => (
        <ProductColorView key={i} color={el} curColor={currentColor} setData={onColor} pid={prod.id} />
      ))
    }

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
          <Div className='product-card-content'>
            <div className='product-card-name'>
              <span className='product-card-name_brand'>
                {prod.vendor}
              </span>
              <span className='product-card-name_product'>{prod.model}</span>
            </div>
            <div className='product-card_attribute'>
              <div className='product-card_attribute-color'>
                {getProductColorView()}
              </div>
              <div className='product-card_attribute-size'>
                <ProductSizeChartView params={params} curSize={currentSize} setData={onSize} />
              </div>
              <div className='product-card_attribute-sex'>
                {prod.gender}
              </div>
            </div>
            <div className='product-card-price_wrap'>
              {
                offers.length > 0 ?
                  <ProductPriceView
                    price={offers[0].price} oldPrice={offers[0].oldPrice} discount={offers[0].discount}
                  />
                  : null
              }
            </div>
            <div className='product-card-share_wrap'>
              <div className='product-card-share_wrap-btn'>
                <RoundSizeButton iconSvg={<IconHeartPink />} />
                <RoundSizeButton func={this.handleOpenNotificationModal} iconSvg={<IconNotification />} />
                <RectangleButton iconSvg={<IconQuestion />}
                  title='Поделиться' />
              </div>
            </div>
          </Div>
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
    modelsParams: state.user.modelsParams,
    prod: state.user.currentProduct,
    currentId: state.user.currentId,
    currentColor: state.user.currentColor,
    currentSize: state.user.currentSize
  }),
  dispatch => ({
    setOffers: data => dispatch(getData('offersByModel', data)),
    setDataOnChangeColor: (color, size, id, offers) => (
      dispatch(setDataOnChangeColor(color, size, id, offers))
    ),
    setDataOnChangeSize: (size, id, offers) => dispatch(setDataOnChangeSize(size, id, offers))
  })
)(ProductCardPanel);
