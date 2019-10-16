import React from 'react';

import {View, Panel} from "@vkontakte/vkui";
import FavoritesPanel from "../../panels/favoritesPanel/FavoritesPanel";

class FavoritesView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'favorites'
    }
  }

  go = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <FavoritesPanel id='favorites'/>
      </View>
    )
  }
}

export default FavoritesView;
