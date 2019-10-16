import React from 'react';
import './SearchView.css';
import { View } from "@vkontakte/vkui";
import SearchPanelOne from "../../panels/searchPanel/searchPanelOne/SearchPanelOne";
import SearchPanelThree from '../../panels/searchPanel/searchPanelThree/SearchPanelThree';
import SearchPanelTwo from "../../panels/searchPanel/searchPanelTwo/SearchPanelTwo";
import { connect as reduxConnect } from "react-redux";
import { resState } from '../../reducers/search';

class SearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'search-1'
    }
  }

  componentWillUnmount() {
    this.props.resState()
  }

  goPanel = (e) => {
    if (typeof e === 'string') {
      this.setState({ activePanel: e })  
    } else {
      this.setState({ activePanel: e.currentTarget.dataset.to })
    } 
  };

  render() {
    return (
      <View id={this.props.id} activePanel={this.state.activePanel}>
        <SearchPanelOne id='search-1' goPanel={this.goPanel} />
        <SearchPanelTwo id='search-2' goPanel={this.goPanel} />
        <SearchPanelThree id='search-3' goPanel={this.goPanel} />
      </View>
    )
  }
}

export default reduxConnect(
  null,
  dispatch => ({
    resState: () => dispatch(resState())
  })
)(SearchView); 
