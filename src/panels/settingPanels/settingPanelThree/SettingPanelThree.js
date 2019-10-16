import React from 'react';
import './SettingPanelThree.css';
import {Panel, Div, IOS, platform} from '@vkontakte/vkui';
import Header from '../../../components/header/Header';
import pic from '../../../assets/image/Rectangle 1681.png';
import IconRemoveCircle from '../../../components/icon/IconRemoveCircle';
import RoundSizeButton from '../../../components/buttons/roundSizeButton/RoundSizeButton';
import IconClose from '../../../components/icon/IconClose';

const SettingPanelThree = ({id, goPanel}) => {
    const osname = platform();
    let fontStyleGlobal = {
      fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`,
      fontSize: `${osname === IOS ? '17px' : '14px'}`
    };

    return (
      <Panel id={id}
             theme='white'
             style={fontStyleGlobal}
             className='setting-page-three'>
        <Header func={goPanel}
                goTo='settings-1'
                title='Уведомления 3'
                iconAndroid={true}
                iconIOS={true}/>
        <Div className='setting-page-three-row setting-border-bottom'>
          <div className='setting-page-three-image_wrap'>
            <img className='setting-page-three-image'
                 src={pic}
                 alt='image'/>
            <div className='setting-page-three_text'>
              ASICS Gel-Rocket 8
            </div>
          </div>
          <div className='setting-page-three_button'>
            {osname === IOS ?
              <IconRemoveCircle/> :
              <RoundSizeButton iconSvg={<IconClose currentColor='#fff'/>}/>}
          </div>
        </Div>
        <Div className='setting-page-three-row setting-border-bottom'>
          <div className='setting-page-three-image_wrap'>
            <img className='setting-page-three-image'
                 src={pic}
                 alt='image'/>
            <div className='setting-page-three_text'>
              ASICS Gel-Rocket 8
            </div>
          </div>
          <div className='setting-page-three_button'>
            {osname === IOS ?
              <IconRemoveCircle/> :
              <RoundSizeButton iconSvg={<IconClose currentColor='#fff'/>}/>}
          </div>
        </Div>
        <Div className='setting-page-three-row setting-border-bottom'>
          <div className='setting-page-three-image_wrap'>
            <img className='setting-page-three-image'
                 src={pic}
                 alt='image'/>
            <div className='setting-page-three_text'>
              ASICS Gel-Rocket 8
            </div>
          </div>
          <div className='setting-page-three_button'>
            {osname === IOS ?
              <IconRemoveCircle/> :
              <RoundSizeButton iconSvg={<IconClose currentColor='#fff'/>}/>}
          </div>
        </Div>
      </Panel>
    )
  }
;

export default SettingPanelThree;
