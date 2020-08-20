import React from 'react';
import { Chart, Interval, Tooltip, Axis } from 'bizcharts';

function Demo({ region, title, data}) {

  // let data = require('./datas/' + region + '.json');
  const topresent = 'dateChecked*' + title;
  const pattern = {
    style: {
      fontSize: 15,
      fill: 'red'
    },
    offsetLeft: 100
  };
  return (
      <div class="chart-death" style={{ textAlign: 'center', paddingLeft: '15%', paddingRight: '15%' }}>
        <h1 style={{ color: 'white', fontSize: '20px' }}>
          Factor: {title} cases in {region}
        </h1>
        <p style={{ color: 'grey' }}>
          ( Click on the dropdown menu to select a region/factor. Hover on the chart to see the detail )
        </p>
        <Chart height={400} autoFit data={data} interactions={[ 'active-region' ]} padding={[ 60, 70, 60, 70 ]}>
          <Axis name="dateChecked" title={pattern} />
          <Axis name={title} title={pattern} />
          <Interval position={topresent} color="red" />
          <Tooltip shared />
        </Chart>
      </div>
  );
}

export default Demo;