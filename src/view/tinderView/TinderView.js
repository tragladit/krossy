import React from 'react';
import { View } from "@vkontakte/vkui";
import TinderPanel from "../../panels/tinderPanel/TinderPanel";
import ProductCardPanel from "../../panels/productCardPanel/ProductCardPanel";

class TinderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePanel: 'tinder' }
  }

  go = (panel) => this.setState({ activePanel: panel })

  render() {
    return (
      <View id={this.props.id} activePanel={this.state.activePanel}>
        <TinderPanel id='tinder' go={this.go} />
        <ProductCardPanel id='productCardPanel' go={this.go} goBack='tinder' />
      </View>
    )
  }
}

export default TinderView;
