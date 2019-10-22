import React from 'react';
import {
  PanelHeader, platform, IOS,
  PanelHeaderContent, HeaderContext, List, Cell
} from "@vkontakte/vkui";
import IconDropDownAndroid from "../icon/IconDropDownAndroid";
import IconDropDownIOS from "../icon/IconDropDownIOS";
import Icon24Done from '@vkontakte/icons/dist/24/done';

const osname = platform();

const HeaderFavorite = ({ toggleContext, select, contextOpened, mode, len }) => {
  let divStyle = {
    color: `${mode === 'favorite' ? '#FF5C7B' : '#8DE6C9'}`
  };
  return (
    <>
      <PanelHeader theme='alternate'>
        <PanelHeaderContent
          onClick={toggleContext} className='header header-home-panel'
          aside={
            osname === IOS ?
              <IconDropDownIOS currentColor='#AEBFCF' /> :
              <IconDropDownAndroid currentColor='#404040' />
          }
        >
          <div className='header-title'>
            {mode === 'favorite' ? 'Избранное' : osname === IOS ? 'Нравиться' : 'Мне нравиться'}
          </div>
          <div style={divStyle} className='header-title-counter'>
            {len}
          </div>
        </PanelHeaderContent>
      </PanelHeader>
      <HeaderContext opened={contextOpened} onClose={toggleContext}>
        <List>
          <Cell
            asideContent={mode === 'favorite' ? <Icon24Done fill="var(--accent)" /> : null}
            onClick={select} data-mode="favorite"
          >
            Избранное
          </Cell>
          <Cell
            asideContent={mode === 'like' ? <Icon24Done fill="var(--accent)" /> : null}
            onClick={select} data-mode="like" style={{ pointerEvents: 'none', opacity: 0.5 }}
          >
            {osname === IOS ? 'Нравиться' : 'Мне нравиться'}
          </Cell>
        </List>
      </HeaderContext>
    </>
  )
};

export default HeaderFavorite;

