import React from 'react';
import './HorizontalSizeChart.css';
import {HorizontalScroll} from "@vkontakte/vkui";

class HorizontalSizeChart extends React.Component {
  render() {
    const sizeChart = [38, 38.5, 39, 39.5, 40, 40.5, 41, 41.5, 42, 42.5, 43, 43.5, 44, 44.5, 45];
    const markUp = sizeChart.map(item => {
      return <div key={item}
                  className='horizontal-size-chart_circle'>{item}</div>
    })
    return (
      <HorizontalScroll>
        <div className='horizontal-size-chart_wrap'>
          {markUp}
        </div>
      </HorizontalScroll>
    )
  }
};

export default HorizontalSizeChart;
