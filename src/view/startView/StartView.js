import React from 'react';
import {IOS, platform, View} from "@vkontakte/vkui";

import StartPanelOne from "../../panels/startPanel/startPanelOne/StartPanelOne";
import StartPanelTwo from "../../panels/startPanel/StartPanelTwo/StartPanelTwo";
import StartPanelThree from "../../panels/startPanel/startPanelThree/StartPanelThree";


const osname = platform();

const fontStyleGlobal = {
  fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`
};

class StartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'start-1'
    }
  }

  goPanel = (go) => {
    this.setState({activePanel: go})
  };

  render() {
    const {goView} = this.props;
    return (
      <View id={this.props.id}
            header={false}
            activePanel={this.state.activePanel}
            style={fontStyleGlobal}>
        <StartPanelOne id='start-1'
                       goPanel={this.goPanel}/>
        <StartPanelTwo id='start-2'
                       goPanel={this.goPanel}/>
        <StartPanelThree goView={goView}
                         id='start-3'
                         goPanel={this.goPanel}/>
      </View>
    )
  }
}

export default StartView;
