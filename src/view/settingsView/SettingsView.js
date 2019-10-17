import React from 'react';
import {View} from "@vkontakte/vkui";
import SettingPanelOne from "../../panels/settingPanels/settingPanelOne/SettingPanelOne";
import SettingPanelTwo from "../../panels/settingPanels/settingPanelTwo/SettingPanelTwo";
import SettingPageThree from '../../panels/settingPanels/settingPanelThree/SettingPanelThree';
import SettingPanelFour from '../../panels/settingPanels/settingPanelFour/SettingPanelFour';

class SettingsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'settings-1'
    }
  }

  goPanel = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return(
      <View id={this.props.id}
            activePanel={this.state.activePanel}>
        <SettingPanelOne id='settings-1' goPanel={this.goPanel}/>
        <SettingPanelTwo id='settings-2' goPanel={this.goPanel}/>
        <SettingPageThree id='settings-3' goPanel={this.goPanel}/>
        <SettingPanelFour id='settings-4' goPanel={this.goPanel}/>
      </View>
    )
  }
}

export default SettingsView;
