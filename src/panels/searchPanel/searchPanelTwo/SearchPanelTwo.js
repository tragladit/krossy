import React from 'react';
import './SearchPanelTwo.css';
import { Panel, Cell, Group, List } from "@vkontakte/vkui";
import Header from "../../../components/header/Header";
import Icon16Done from '@vkontakte/icons/dist/16/done';
import { connect as reduxConnect } from "react-redux";
import { setBrands } from '../../../reducers/search';

class SearchPanelTwo extends React.PureComponent {

  onSelect = (e) => {
    const target = e.target.textContent
    this.props.setBrands(target)
  };

  render() {
    const { brands } = this.props
    const namesBrands = Object.keys(brands).map(el => (
      <Cell key={el}>
        {el}
        {brands[el] ? <Icon16Done fill="var(--accent)" /> : null}
      </Cell>
    ))
    return (
      <Panel id={this.props.id} >
        <Header
          title='Бренды' iconIOS={true} iconAndroid={true} func={this.props.goPanel} goTo='search-1'
        />
        <div className='search-panel-two_wrap'>
          <Group>
            <List onClick={this.onSelect}>
              {namesBrands}
            </List>
          </Group>
        </div>
      </Panel>
    )
  }
}

export default reduxConnect(
  state => ({
    brands: state.search.brands
  }),
  dispatch => ({
    setBrands: val => dispatch(setBrands(val))
  })
)(SearchPanelTwo);
