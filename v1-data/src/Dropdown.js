import React, { useState } from 'react';
import Demo from './Chart';
import Demo2 from './Chart2';
import Demo3 from './Chart3';

function Drop() {
	const [ showChart, setShowChart ] = useState('start');
	const [ region, setRegion ] = useState('US');
	return (
		<div className="drop">
			<div
				className="drop-button1"
				style={{
					float: 'left',
					paddingLeft: '25%',
					paddingRight: '25%',
					paddingBottom: '3%'
				}}
			>
				<div class="buttons">
					<div class="btn-group">
						<button type="button" class="btn btn-danger">
							Select a region
						</button>
						<button
							type="button"
							class="btn btn-danger dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<span class="caret" />
							<span class="sr-only">Toggle Dropdown</span>
						</button>
						<ul class="dropdown-menu">
							<li>
								<a onClick={() => setRegion('US')}>US</a>
								<a onClick={() => setRegion('AK')}>AK</a>
								<a onClick={() => setRegion('AL')}>AL</a>
								<a onClick={() => setRegion('AR')}>AR</a>
								<a onClick={() => setRegion('AS')}>AS</a>
								<a onClick={() => setRegion('AZ')}>AZ</a>
								<a onClick={() => setRegion('CA')}>CA</a>
								<a onClick={() => setRegion('CO')}>CO</a>
								<a onClick={() => setRegion('CT')}>CT</a>
								<a onClick={() => setRegion('DC')}>DC</a>
								<a onClick={() => setRegion('DE')}>DE</a>
								<a onClick={() => setRegion('FL')}>FL</a>
								<a onClick={() => setRegion('GA')}>GA</a>
								<a onClick={() => setRegion('WA')}>WA</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="drop-button2" style={{ paddingBottom: '3%' }}>
				<div class="buttons">
					<div class="btn-group">
						<button type="button" class="btn btn-danger">
							Select a factor
						</button>
						<button
							type="button"
							class="btn btn-danger dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<span class="caret" />
							<span class="sr-only">Toggle Dropdown</span>
						</button>
						<ul class="dropdown-menu" style={{ paddingLeft: '25%', paddingRight: '25%' }}>
							<li>
								<a onClick={() => setShowChart('death')}>Factor: Death</a>
								<a onClick={() => setShowChart('positive')}>Factor: Positive cases</a>
								<a onClick={() => setShowChart('negative')}>Factor: Negative cases</a>
								<a onClick={() => setShowChart('hospitalized')}>Factor: Hospitalized cases</a>
								<a onClick={() => setShowChart('deathIncrease')}>Factor: Death Increase</a>
								<a onClick={() => setShowChart('positiveIncrease')}>Factor: Positive Increase</a>
								<a onClick={() => setShowChart('negativeIncrease')}>Factor: Negative Increase</a>
								<a onClick={() => setShowChart('hospitalizedIncrease')}>
									Factor: hospitalized Increase
								</a>
								<a onClick={() => setShowChart('recovered')}>Factor: Recovered cases</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				{showChart === 'start' && <Demo3 />}
				{showChart === 'death' && <Demo2 region={region} title="death" />}
				{showChart === 'positive' && <Demo2 region={region} title="positive" />}
				{showChart === 'negative' && <Demo2 region={region} title="negative" />}
				{showChart === 'recovered' && <Demo2 region={region} title="recovered" />}
				{showChart === 'hospitalized' && <Demo2 region={region} title="hospitalized" />}
				{showChart === 'deathIncrease' && <Demo region={region} title="deathIncrease" />}
				{showChart === 'positiveIncrease' && <Demo region={region} title="positiveIncrease" />}
				{showChart === 'negativeIncrease' && <Demo region={region} title="negativeIncrease" />}
				{showChart === 'hospitalizedIncrease' && <Demo region={region} title="hospitalizedIncrease" />}
			</div>
		</div>
	);
}

export default Drop;
