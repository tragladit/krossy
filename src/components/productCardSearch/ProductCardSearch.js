import React from 'react';
import brandLogo from '../../assets/image/adidas.png';
import './ProductCardSearch.css';
import ProductSizeChartViewSmall from "../product/productSizeChartViewSmall/ProductSizeChartViewSmall";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import Sticker from "../Sticker/Sticker";

class ProductCardSearch extends React.PureComponent {

  constructor(props) {
    super(props);
    this.imageHeight = React.createRef()
  }

  render() {
    const { goTo, productId, formSticker, nameSticker, product } = this.props;
    return (
      <div
        onClick={this.goProduct} data-good-id={productId} data-to={goTo}
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
            <ProductBrandView
              name={product.name}
              model={product.model}
              logo={brandLogo} /> : null
          }
        </div>
        <div className='product-card-small-price_wrap'>
          {product ?
            <ProductPriceView price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount} /> : null
          }
        </div>
        <div className='product-card-small_footer'>
          {product ? <ProductSizeChartViewSmall sizes={product.sizes} /> : null}
          {product ? <ProductCountShopView shops={product.shops} /> : null}
        </div>
      </div>
    )
  }
};

export default ProductCardSearch;
