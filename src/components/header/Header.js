import React from 'react';
import { PanelHeader, platform, IOS, PanelHeaderContent, HeaderButton } from "@vkontakte/vkui";
// import '@vkontakte/vkui/dist/vkui.css';
import IconArrowAndroidBack from "../icon/IconArrowAndroisBack";
import IconChevronIOSBack from "../icon/IconChevronIOSBack";
import IconDropDownAndroid from "../icon/IconDropDownAndroid";
import IconDropDownIOS from "../icon/IconDropDownIOS";

const osname = platform();

class Header extends React.Component {

  render() {

    const { func, goTo, title, asideShow, iconIOS, iconAndroid } = this.props;

    return (
      <PanelHeader theme='alternate'
        left={<HeaderButton
          onClick={func}
          data-to={goTo}>
          {osname === IOS ?
            iconIOS ? <IconChevronIOSBack /> : null :
            iconAndroid ? <IconArrowAndroidBack /> : null}
        </HeaderButton>}
      >
        <PanelHeaderContent onClick={this.toggleContext}
          className='header header-home-panel'
          aside={asideShow ? osname === IOS ?
            <IconDropDownIOS currentColor='#AEBFCF' /> :
            <IconDropDownAndroid currentColor='#404040' /> : null}>
          <div>{title}</div>
        </PanelHeaderContent>
      </PanelHeader>
    )
  }
}

export default Header;

