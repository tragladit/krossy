import React from 'react';
import { PanelHeader, platform, IOS, PanelHeaderContent, HeaderButton } from "@vkontakte/vkui";
import IconArrowAndroidBack from "../icon/IconArrowAndroisBack";
import IconChevronIOSBack from "../icon/IconChevronIOSBack";
import IconDropDownAndroid from "../icon/IconDropDownAndroid";
import IconDropDownIOS from "../icon/IconDropDownIOS";
import './Header.css'

const osname = platform();

class Header extends React.Component {

  render() {

    const { func, goTo, title, len, asideShow, iconIOS, iconAndroid } = this.props;

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
          <div>
            {title}
            {len === undefined ? null : <span className='len_items'>{len}</span>}
          </div>
        </PanelHeaderContent>
      </PanelHeader>
    )
  }
}

export default Header;

