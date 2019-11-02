import React from 'react';
import { Panel, platform, IOS, Div, Switch } from "@vkontakte/vkui";
import './SearchPanelOne.css';
import IconChevronIOSRight from '../../../components/icon/IconChevronIOSRight';
import IconChevronAndroidRight from '../../../components/icon/IconChevronAndroidRight';
import SearchRangeSlider from '../../../components/search/searchRangeSlider/SearchRangeSlider';
import SearchColorPick from '../../../components/search/searchColorPick/searchColorPick';
import RectangleButton from '../../../components/buttons/rectangleButton/RectangleButton';
import RadioButton from "../../../components/radioButtonRedux/RadioButtonRedux";
import Header from "../../../components/header/Header";
import { connect as reduxConnect } from "react-redux";
import { setDiscount, setSort } from '../../../reducers/search';

const osname = platform();

const fontStyleAndroid = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px'
};

const fontStyleIOS = {
  fontFamily: 'SF UI Text, sans-serif',
  fontSize: '17px'
};

const sortName = 'search_sort'
const sortTitles = ['Не сортировать', 'По возрастанию цены', 'По убыванию цены']

class SearchPanelOne extends React.Component {

  changeSwitch = (e) => this.props.setDiscount(e.target.checked);

  changeSort = (val) => this.props.setSort(val)

  render() {
    const { discount, sort } = this.props

    const SortPriceButtons = () => {
      return sortTitles.map((el, i) => (
        <RadioButton
          key={i} title={el} name={sortName} value={el} checked={sort} setChecked={this.changeSort}
        />
      ))
    }

    return (
      <Panel id={this.props.id}
        theme='white'
        style={osname === IOS ? fontStyleIOS : fontStyleAndroid}
        className='search-page_wrap'>
        <Header title='Поиск' />
        <Div className='search-page-brand-select search-border-bottom'>
          <div className='search-page-brand_text'>Бренд</div>
          <div onClick={this.props.goPanel} data-to='search-2' className='search-page-brand_icon'>
            {osname === IOS ? <IconChevronIOSRight /> : <IconChevronAndroidRight />}
          </div>
        </Div>
        <Div className='search-page-price-range search-border-bottom'>
          <SearchRangeSlider />
        </Div>
        <Div className='search-page-discount-only search-border-bottom'>
          <div className='search-page-discount-only_row'>
            Только со скидкой
            <Switch checked={discount} onChange={this.changeSwitch} />
          </div>
        </Div>
        <Div className='search-page-checkbox-group search-border-bottom'>
          {SortPriceButtons()}
        </Div>
        <Div className='search-page-color-pick'>
          <SearchColorPick />
          <div className='search-page-button_wrap'>
            <RectangleButton title='Найти' func={this.props.goPanel} goTo='search-3' />
          </div>
        </Div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    discount: state.search.discount,
    sort: state.search.sort
  }),
  dispatch => ({
    setDiscount: val => dispatch(setDiscount(val)),
    setSort: val => dispatch(setSort(val))
  })
)(SearchPanelOne);
