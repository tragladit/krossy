import React from 'react';
import { PanelHeader, PanelHeaderContent } from "@vkontakte/vkui";
import './HeaderTinder.css'
import IconLike from '../../panels/tinderPanel/icons/IconLike';

const HeaderTinder = ({ title, countLikes }) => {

  return (
    <>
      <PanelHeader
        className='tinder_header' theme='alternate'
        left={
          <div className='tinder_header_count_icon'>
            <IconLike currentColor='white' />
            <span className='tinder_header_count_likes'>{countLikes}</span>
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

