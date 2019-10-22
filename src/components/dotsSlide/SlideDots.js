import React from 'react';
import css from './SlideDots.module.css';

const SlideDots = ({ dot }) => {
  const Dots = () => [1, 2, 3].map(el => {
    const style = el === dot ? { opacity: 1 } : { opacity: 0.2 }
    return (
      <div key={el} className={css.slide_dot} style={style} ></div>
    )
  })
  return (
    <div className={css.slide_dots}>
      {Dots()}
    </div>
  )
}

export default SlideDots;
