import React from 'react';
import { Chart, Line, Point, Tooltip, Axis } from 'bizcharts';

function Demo2({ region, title, data}) {
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
      <div style={{ textAlign: 'center', paddingLeft: '15%', paddingRight: '15%' }}>
        <h1 style={{ color: 'white', fontSize: '20px' }}>
          Factor: {title} cases in {region}
        </h1>
        <p style={{ color: 'grey' }}>
          ( Click on the dropdown menu to select a region/factor. Hover on the chart to see the detail )
        </p>
        <Chart padding={[ 60, 70, 60, 70 ]} autoFit height={500} data={data} scale={{ value: { min: 0 } }}>
          <Axis name="dateChecked" title={pattern} />
          <Axis name={title} title={pattern} />
          <Line position={topresent} color="white" />
          <Point position={topresent} color="red" />
          <Tooltip showCrosshairs />
        </Chart>
      </div>
  );
}

export default Demo2;