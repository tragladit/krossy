import React from 'react';
import './HeaderFavorite.css';
import {
  PanelHeader, platform, IOS,
  PanelHeaderContent, HeaderContext, List, Cell} from "@vkontakte/vkui";
import IconMoreHorizontal from '../icon/IconMoreHorizontal';
import IconClose from '../icon/IconClose';
import IconDropDownAndroid from "../icon/IconDropDownAndroid";
import IconDropDownIOS from "../icon/IconDropDownIOS";
import Icon24Done from '@vkontakte/icons/dist/24/done';

const osname = platform();

const HeaderFavorite = ({toggleContext, select, contextOpened, mode}) => {
  let divStyle = {
    color: `${mode === 'favorite' ? '#FF5C7B' : '#8DE6C9'}`
  };
  return (
    <React.Fragment>
      <PanelHeader theme='alternate'
                   className='main-header'
                   right={[
                     <div className='header-right-button-block'>
                       <IconMoreHorizontal/>
                       <IconClose/>
                     </div>
                   ]}>
        <PanelHeaderContent onClick={toggleContext}
                            className='header header-home-panel'
                            aside={osname === IOS ?
                              <IconDropDownIOS currentColor='#AEBFCF'/> :
                              <IconDropDownAndroid currentColor='#404040'/>}>
          <div className='header-title'>
            {mode === 'favorite' ? 'Избранное' : osname === IOS ? 'Нравиться' : 'Мне нравиться'}
          </div>
          <div style={divStyle}
               className='header-title-counter'>
            {mode === 'favorite' ? '15' : '23'}
          </div>
        </PanelHeaderContent>
      </PanelHeader>
      <HeaderContext opened={contextOpened}
                     onClose={toggleContext}>
        <List>
          <Cell
            asideContent={mode === 'favorite' ? <Icon24Done fill="var(--accent)"/> : null}
            onClick={select}
            data-mode="favorite"
          >
            Избранное
          </Cell>
          <Cell
            asideContent={mode === 'like' ? <Icon24Done fill="var(--accent)"/> : null}
            onClick={select}
            data-mode="like"
          >
            {osname === IOS ? 'Нравиться' : 'Мне нравиться'}
          </Cell>
        </List>
      </HeaderContext>
    </React.Fragment>
  )
};

export default HeaderFavorite;

