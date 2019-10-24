import React from 'react';
import { View } from "@vkontakte/vkui";
// import Icon24Back from '@vkontakte/icons/dist/24/cancel';
// import Icon28ChevronBack from '@vkontakte/icons/dist/24/cancel';
// import Header from "../../components/header/Header";
import TinderPanel from "../../panels/tinderPanel/TinderPanel";

class TinderView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'tinder'
    }
  }

  go = (e) => {
    this.setState({ activePanel: e.currentTarget.dataset.to })
  };

  render() {
    return (
      <View id={this.props.id} activePanel={this.state.activePanel}>
        <TinderPanel id='tinder' />
      </View>
    )
  }
}

export default TinderView;
