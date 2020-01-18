import React, { useEffect } from 'react';
import ProductBrandView from "../product/productBrandView/ProductBrandView";
import logo from "../../assets/image/adidas.png";
import ProductPriceView from "../product/productPriceView/ProductPriceView";
import ProductSizeChartViewSmall from "../product/productSizeChartViewSmall/ProductSizeChartViewSmall";
import ProductCountShopView from "../product/productCountShopView/ProductCountShopView";
import './ProductCardTinder.css';
import RoundSizeButton from '../buttons/roundSizeButton/RoundSizeButton';
import IconArrowRight from '../icon/IconArrowRight';

const ProductCardTinder = ({ product, setProduct, isWelcome }) => {

  const divStyleBlur = { filter: 'blur(9px)' }

  const sizes = product.sizes.sort((a, b) => a - b)

  const style = { backgroundImage: `url('${product.pictures[0]}')` }

  const goProduct = () => setProduct(product)

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

export default ProductCardTinder;
