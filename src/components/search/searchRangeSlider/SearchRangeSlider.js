import React from 'react';
import { RangeSlider, FormLayoutGroup, Switch } from "@vkontakte/vkui";
import { connect as reduxConnect } from "react-redux";
import { setPrice } from '../../../reducers/search';

class SearchRangeSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  changeRange = (e) => {
    this.props.setPrice('prices', { startValue: Math.round(e[0]), endValue: Math.round(e[1]) })
  };

  changeSwitch = (e) => {
    this.props.setPrice('price', e.target.checked)
  };

  render() {
    const { price, prices } = this.props
    const style = price ? { pointerEvents: 'auto', opacity: 1 } : { pointerEvents: 'none', opacity: 0.5 }
    return (
      <FormLayoutGroup>
        <div className='search-page-price-range-counter'>
          <div className='range-price-counter_block'>
            <div className='range-price-counter_block__row'>Диапазон цены</div>
            <div className='range-price-counter_block__row'>
              от
              <div className='price-counter-start_color'>{prices.startValue}</div>
              до
              <div className='price-counter-end_color'>{prices.endValue}</div>
            </div>
          </div>
          <Switch checked={price} onChange={this.changeSwitch} />
        </div>
        <div style={style} className='search-page-price-range-slider'>
          <RangeSlider
            min={2000} max={20000} onChange={this.changeRange}
            defaultValue={[prices.startValue, prices.endValue]}
          />
        </div>
      </FormLayoutGroup>
    )
  }
}

export default reduxConnect(
  state => ({
    price: state.search.price,
    prices: state.search.prices
  }),
  dispatch => ({
    setPrice: (field, val) => dispatch(setPrice(field, val))
  })
)(SearchRangeSlider);
