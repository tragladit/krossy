import React from 'react';
import './SettingPanelFour.css';
import {Panel, Div, IOS, platform} from '@vkontakte/vkui';
import Header from '../../../components/header/Header';


const SettingPanelFour = ({id, goPanel}) => {
    const osname = platform();
    let fontStyleGlobal = {
      fontFamily: `${osname === IOS ? 'SF UI Text' : 'Roboto'}, sans-serif`,
      fontSize: `${osname === IOS ? '17px' : '14px'}`
    };

    return (
      <Panel id={id}
             theme='white'
             style={fontStyleGlobal}
             className='setting-page-four'>
        <Header func={goPanel}
                goTo='settings-2'
                title='Таблица размеров'
                iconAndroid={true}
                iconIOS={true}/>
        <Div className='setting-page-four_context'>
          <div className='setting-page-four_context_title'>Как определить свой размер?</div>
          <div className='setting-page-four_context_text'>
            Поставьте ногу на чистый лист бумаги.
            Отметьте крайние границы ступни и измерьте расстояние между самыми удаленными точками стопы.
          </div>
        </Div>
        <Div className='setting-page-four_table'>
          <div className='setting-page-four-table-header'>
            <div className='setting-page-four-table-header_cell table-header_cell-1'>
              <div className='setting-page-four-table-header_text table-header-text-col-1'>
                Российский размер
              </div>
            </div>
            <div className='setting-page-four-table-header_cell table-header_cell-2'>
              <div className='setting-page-four-table-header_text table-header-text-col-2'>
                Размер US
              </div>
            </div>
            <div className='setting-page-four-table-header_cell table-header_cell-3'>
              <div className='setting-page-four-table-header_text table-header-text-col-3'>
                Длина стопы, см
              </div>
            </div>
          </div>
        </Div>
        <div className='setting-border-bottom'></div>
        <Div className='setting-page-four_table'>
          <div className='setting-page-four-table_row'>
            <div className='table-row_cell table-row_cell-1'>37.5</div>
            <div className='table-row_cell table-row_cell-2'>6</div>
            <div className='table-row_cell table-row_cell-3'>23.7</div>
          </div>
        </Div>
        <div className='setting-border-bottom'></div>
        <Div className='setting-page-four_table'>
          <div className='setting-page-four-table_row'>
            <div className='table-row_cell table-row_cell-1'>38</div>
            <div className='table-row_cell table-row_cell-2'>6.5</div>
            <div className='table-row_cell table-row_cell-3'>24.1</div>
          </div>
        </Div>
        <div className='setting-border-bottom'></div>
        <Div className='setting-page-four_table'>
          <div className='setting-page-four-table_row'>
            <div className='table-row_cell table-row_cell-1'>39</div>
            <div className='table-row_cell table-row_cell-2'>7</div>
            <div className='table-row_cell table-row_cell-3'>24.5</div>
          </div>
        </Div>
        <div className='setting-border-bottom'></div>
        <Div className='setting-page-four_table'>
          <div className='setting-page-four-table_row'>
            <div className='table-row_cell table-row_cell-1'>39.5</div>
            <div className='table-row_cell table-row_cell-2'>7.5</div>
            <div className='table-row_cell table-row_cell-3'>25</div>
          </div>
        </Div>
        <div className='setting-border-bottom'></div>
        <Div className='setting-page-four_table'>
          <div className='setting-page-four-table_row'>
            <div className='table-row_cell table-row_cell-1'>40</div>
            <div className='table-row_cell table-row_cell-2'>8</div>
            <div className='table-row_cell table-row_cell-3'>25.4</div>
          </div>
        </Div>
        <div className='setting-border-bottom'></div>
        <Div className='setting-page-four_table'>
          <div className='setting-page-four-table_row'>
            <div className='table-row_cell table-row_cell-1'>41</div>
            <div className='table-row_cell table-row_cell-2'>8.5</div>
            <div className='table-row_cell table-row_cell-3'>26</div>
          </div>
        </Div>
        <div className='setting-border-bottom'></div>
      </Panel>
    )
  }
;

export default SettingPanelFour;
