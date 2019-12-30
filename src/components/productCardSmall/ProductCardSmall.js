import React from 'react';
import brandLogo from '../../assets/image/adidas.png';
import './ProductCardSmall.css';
import ProductSizeChartViewSmall from "../product/productSizeChartViewSmall/ProductSizeChartViewSmall";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import Sticker from "../Sticker/Sticker";
import ApiService from "../../api/krossy-api";
import { connect as reduxConnect } from "react-redux";
import { isChangeBoolean, setNewInitData } from "../../reducers/user";
import { getNormalizeData } from "../../reducers/selectors";

class ProductCardSmall extends React.PureComponent {

  Service = new ApiService();

  constructor(props) {
    super(props);
    this.imageHeight = React.createRef()
  }

  goProduct = async (e) => {
    try {
      const { data, setNewInitData } = this.props;
      const goTo = e.currentTarget.dataset.to;
      const target = +e.currentTarget.dataset.goodId;
      this.props.isLoad(true);
      const resModels = await this.Service.getModels(target, data.userInfo.id);
      if (resModels.ok) {
        const nmzData = getNormalizeData(resModels.result, data.products[target].pictureModelId);
        setNewInitData(nmzData.models, target, nmzData.current);
        this.props.isLoad(false);
        this.props.func(goTo);
      } else {
        console.log('#ProductCardSmall.goProduct.findCurrentModel# Model not find');
      }
    } catch (err) {
      console.log('#ProductCardSmall.goProduct#', err);
    }
  };

  render() {

    const { goTo, formSticker, nameSticker, prodId, product } = this.props;

    const sizes = product && product.sizes.sort((a, b) => a - b)
    console.log('ProductCardSmall')
    return (
      <div
        onClick={this.goProduct} data-good-id={prodId} data-to={goTo}
        className='product-card-small_wrap'
      >
        <div className='product-card-small-sticker_wrap'>
          <Sticker form={formSticker} icon={nameSticker} />
        </div>
        <div className='product-card-small-pic_wrap'>
          {product ?
            <img ref={this.imageHeight}
              className='product-card-small-pic'
              src={product.pictures[0]}
              alt='pic' /> : null
          }
        </div>
        <div className='product-card-small-brand_wrap'>
          {product ?
            <ProductBrandView name={product.name} model={product.model} logo={brandLogo} /> :
            null
          }
        </div>
        <div className='product-card-small-price_wrap'>
          {product ?
            <ProductPriceView
              price={product.price} oldPrice={product.oldPrice} discount={product.discount}
            /> :
            null
          }
        </div>
        <div className='product-card-small_footer'>
          {product ? <ProductSizeChartViewSmall sizes={sizes} /> : null}
          {product ? <ProductCountShopView shops={product.shops} /> : null}
        </div>
      </div>
    )
  }
};

export default reduxConnect(
  state => ({
    data: state.user
  }),
  dispatch => ({
    isLoad: bool => dispatch(isChangeBoolean('isLoadModels', bool)),
    setNewInitData: (modelsParams, currentProduct, current) => {
      dispatch(setNewInitData(modelsParams, currentProduct, current))
    }
  })
)(ProductCardSmall);
