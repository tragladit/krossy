import React from 'react';
import {PanelHeader, platform, IOS, PanelHeaderContent, HeaderButton} from "@vkontakte/vkui";
import './Header.css';
import IconArrowAndroidBack from "../icon/IconArrowAndroisBack";
import IconChevronIOSBack from "../icon/IconChevronIOSBack";
import IconMoreHorizontal from '../icon/IconMoreHorizontal';
import IconClose from '../icon/IconClose';
import IconDropDownAndroid from "../icon/IconDropDownAndroid";
import IconDropDownIOS from "../icon/IconDropDownIOS";

const osname = platform();

class Header extends React.Component {

  render() {
    const {func, goTo, title, asideShow, iconIOS, iconAndroid} = this.props;
    return (
      <React.Fragment>
        <PanelHeader theme='alternate'
                     className='main-header'
                     left={<HeaderButton
                       onClick={func}
                       data-to={goTo}>
                       {osname === IOS ?
                         iconIOS ? <IconChevronIOSBack/> : null :
                         iconAndroid ? <IconArrowAndroidBack/> : null}
                     </HeaderButton>}
                     right={[
                       <div className='header-right-button-block'>
                         <IconMoreHorizontal/>
                         <IconClose/>
                       </div>
                     ]}>
          <PanelHeaderContent onClick={this.toggleContext}
                              className='header header-home-panel'
                              aside={asideShow ? osname === IOS ?
                                <IconDropDownIOS currentColor='#AEBFCF'/> :
                                <IconDropDownAndroid currentColor='#404040'/> : null}>
            <div>{title}</div>
          </PanelHeaderContent>
        </PanelHeader>
      </React.Fragment>
    )
  }
}

export default Header;

