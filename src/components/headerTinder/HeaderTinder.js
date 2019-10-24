import React from 'react';
import { PanelHeader, PanelHeaderContent } from "@vkontakte/vkui";
import './HeaderTinder.css'
import IconLike from '../../panels/tinderPanel/icons/IconLike';

const HeaderTinder = ({ title }) => {
  
  return (
    <>
      <PanelHeader theme='alternate'
        left={
          <div className='tinder-header-icon-count'>
            <IconLike currentColor='white' />
            <span className='tinder-header-count-likes'>5</span>
          </div>
        }
      >
        <PanelHeaderContent>
          {title}
        </PanelHeaderContent>
      </PanelHeader>
    </>
  )
};

export default HeaderTinder;

