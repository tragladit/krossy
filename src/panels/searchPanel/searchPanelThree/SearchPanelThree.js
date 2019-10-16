import React from 'react';
import './SearchPanelThree.css';
import {Panel, Div} from '@vkontakte/vkui';
import { connect as reduxConnect } from "react-redux";
import Header from '../../../components/header/Header';
import ProductCardSearch from '../../../components/productCardSearch/ProductCardSearch';
import {
  filterBrands, normalizeProducts, filterNormalizeProducts, filterDiscount, filterPrice, sortPrice
} from '../../../reducers/searchSelectors';

//   brands: {Nike: true, Air Jordan: false, Adidas: true, Off-White: false, Asics: false, …}
// color: false
// colors: []
// discount: false
// price: true
// prices: {startValue: 3000, endValue: 9589.743589743588}
// sort: "По возрастанию цены"

const formSticker = 'round'
const nameSticker = 'star'

const SearchPanelThree = ({id, goPanel, products, searchParams}) => {

  const filterData = () => {
    let data
    const brands = filterBrands(searchParams.brands)
    if (brands.length) {
      const nmzProducts = normalizeProducts(products)
      data = filterNormalizeProducts(brands, nmzProducts)
    } else {
      data = products
    }
    if (searchParams.discount) {
      data = filterDiscount(data)
    }
    if (searchParams.price) {
      data = filterPrice(data, searchParams.prices.startValue, searchParams.prices.endValue)
    }
    if (searchParams.sort === "По возрастанию цены") {
      data = sortPrice('ASC', data)
    }
    if (searchParams.sort === "По убыванию цены") {
      data = sortPrice('DESC', data)
    }
    return data
  }

  const cards = filterData().map((el, i) => (
    <ProductCardSearch
      key={i} productId={el.id} product={el} formSticker={formSticker} nameSticker={nameSticker}
    />
  ))

  return (
    <Panel id={id} className='search-panel-three'>
      <Header
        func={goPanel} goTo='search-1' title={`Найдено ${cards.length}`} iconIOS={true} iconAndroid={true}
      />
      <Div className='search-panel-three_wrap'>
        {cards}
      </Div>
    </Panel>
  )
};

export default reduxConnect(
  state => ({
    products: state.user.products,
    searchParams: state.search
  }),
  null
)(SearchPanelThree);

// export default SearchPanelThree
