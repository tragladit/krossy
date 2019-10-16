import React from 'react';
import './LikeCounterWithIcon.css';
import IconLike from "../icon/IconLike";

const LikeCounterWithIcon = () => {
  return (
    <div className='like-counter_wrap'>
      <IconLike currentColor='#fff'/>
      <div className='like-counter_text'>23</div>
    </div>
  )
};

export default LikeCounterWithIcon;
