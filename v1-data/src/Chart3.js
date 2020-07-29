import React from 'react';
import { Chart, Point, Axis, Legend } from 'bizcharts';

const data = require('./datas/states.json');
const title = {
	style: {
		fontSize: 15,
		fill: 'red'
	},
	offsetLeft: 100
};

function Demo3() {
	return (
		<div>
			<div style={{ textAlign: 'center' }}>
				<h1 style={{ color: 'white', fontSize: '20px' }}>
					Factor: positive && death cases of different states in US
				</h1>
				<p style={{ color: 'grey' }}>
					( Click on the dropdown menu to select a region/factor. Hover on the chart to see the detail, )
				</p>
			</div>
			<div style={{ paddingLeft: '15%', paddingRight: '15%' }}>
				<Chart height={400} data={data} autoFit interactions={[ 'legend-highlight' ]}>
					<Axis name="positive" title={title} />
					<Axis name="death" title={title} />
					<Point
						position="positive*death"
						color="state"
						shape="circle"
						style={{
							fillOpacity: 0.85
						}}
					/>
					<Legend
						useHtml={true}
						containerTpl={
							'<div class="g2-legend" style="position:absolute;top:20px;right:60px;width:auto;">' +
							'<h4 class="g2-legend-title"></h4>' +
							'<ul class="g2-legend-list" style="list-style-type:none;margin:0;padding:0;"></ul>' +
							'</div>'
						}
					/>
				</Chart>
			</div>
		</div>
	);
}

export default Demo3;
