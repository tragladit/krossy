import React from 'react';
import { Gallery, Switch } from "@vkontakte/vkui";
import RoundSizeButton from "../../buttons/roundSizeButton/RoundSizeButton";

class SearchColorPick extends React.Component {
  constructor(props) {
    super(props)
    this.state = { slideIndex: 0 }
  }

  render() {
    return (
      <>
        <div className='search-page-color-handle'>
          <div className='color-handle-text'>
            <div>По цвету</div>
            <div className='color-handle-text_color'>2</div>
          </div>
          <Switch />
        </div>
        <div className='search-page-color-pick'>
          <Gallery slideWidth='15%'>
            <RoundSizeButton backgroundColor='#CAEC6B' />
            <RoundSizeButton backgroundColor='#FFEA60' />
            <RoundSizeButton backgroundColor='#FEA838' />
            <RoundSizeButton backgroundColor='#FF5136' />
            <RoundSizeButton backgroundColor='#FE389B' />
            <RoundSizeButton backgroundColor='#CA33FF' />
            <RoundSizeButton backgroundColor='#433EDB' />
          </Gallery>
        </div>
      </>
    )
  }
}

export default SearchColorPick;
