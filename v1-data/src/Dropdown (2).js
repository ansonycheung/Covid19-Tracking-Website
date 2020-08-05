import React from 'react';
import Demo from './Chart';
import Demo2 from './Chart2';
import Demo3 from './Chart3';

class Drop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			region: 'Select a region',
			factor: 'Select a factor',
			data: {}
		};
	}
	componentDidMount() {
		fetch('http://localhost:9000/data').then((res) => res.json()).then(
			(res) => {
				this.setState({ data: res });
			},
			(error) => {
				this.setState({ error });
			}
		);
	}

	render() {
		const states = [
			'us',
			'ak',
			'al',
			'ar',
			'as',
			'az',
			'ca',
			'co',
			'ct',
			'dc',
			'de',
			'fl',
			'ga',
			'gu',
			'hi',
			'ia',
			'id',
			'il',
			'in',
			'ks',
			'ky',
			'la',
			'ma',
			'md',
			'me',
			'mi',
			'mn',
			'mo',
			'mp',
			'ms',
			'mt',
			'nc',
			'nd',
			'ne',
			'nh',
			'nj',
			'nm',
			'nv',
			'ny',
			'oh',
			'ok',
			'or',
			'pa',
			'pr',
			'ri',
			'sc',
			'sd',
			'tn',
			'tx',
			'ut',
			'va',
			'vi',
			'vt',
			'wa',
			'wi',
			'wv',
			'wy'
		];

		return (
			<div className="drop">
				<div
					className="drop-button1"
					style={{
						float: 'left',
						paddingLeft: '30%',
						paddingRight: '25%',
						paddingBottom: '3%'
					}}
				>
					<div class="buttons">
						<div style={{ color: 'white', paddingBottom: '5%' }}>Region :</div>
						<div class="btn-group">
							<button type="button" class="btn btn-danger">
								{this.state.region === 'Select a region' ? (
									this.state.region
								) : (
									this.state.region.toUpperCase()
								)}
							</button>
							<button
								type="button"
								class="btn btn-danger dropdown-toggle"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style={{ minWidth: '18%' }}
							>
								<span class="caret" />
								<span class="sr-only">Toggle Dropdown</span>
							</button>
							<ul class="dropdown-menu">
								<li>
									{states.map((state) => (
										<a onClick={() => this.setState({ region: state })}>{state.toUpperCase()}</a>
									))}
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div
					className="drop-button2"
					style={{
						paddingBottom: '3%'
					}}
				>
					<div class="buttons">
						<div style={{ color: 'white', paddingBottom: '0.3%' }}>Factor :</div>
						<div class="btn-group">
							<button type="button" class="btn btn-danger">
								{this.state.factor}
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
									<a onClick={() => this.setState({ factor: 'death' })}>Factor: Death</a>
									<a onClick={() => this.setState({ factor: 'positive' })}>Factor: Positive cases</a>
									<a onClick={() => this.setState({ factor: 'negative' })}>Factor: Negative cases</a>
									<a onClick={() => this.setState({ factor: 'hospitalized' })}>
										Factor: Hospitalized cases
									</a>
									<a onClick={() => this.setState({ factor: 'deathIncrease' })}>
										Factor: Death Increase
									</a>
									<a onClick={() => this.setState({ factor: 'positiveIncrease' })}>
										Factor: Positive Increase
									</a>
									<a onClick={() => this.setState({ factor: 'negativeIncrease' })}>
										Factor: Negative Increase
									</a>
									<a onClick={() => this.setState({ factor: 'hospitalizedIncrease' })}>
										Factor: hospitalized Increase
									</a>
									<a onClick={() => this.setState({ factor: 'recovered' })}>
										Factor: Recovered cases
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					{this.state.region === 'Select a region' || this.state.factor === 'Select a factor' ? (
						<Demo3 data={this.state.data['states']} />
					) : (
						<div>
							{this.state.region != 'Select a region' &&
							this.state.factor === 'death' && (
								<Demo2
									region={this.state.region}
									title="death"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'positive' && (
								<Demo2
									region={this.state.region}
									title="positive"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'negative' && (
								<Demo2
									region={this.state.region}
									title="negative"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'recovered' && (
								<Demo2
									region={this.state.region}
									title="recovered"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'hospitalized' && (
								<Demo2
									region={this.state.region}
									title="hospitalized"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'deathIncrease' && (
								<Demo
									region={this.state.region}
									title="deathIncrease"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'positiveIncrease' && (
								<Demo
									region={this.state.region}
									title="positiveIncrease"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'negativeIncrease' && (
								<Demo
									region={this.state.region}
									title="negativeIncrease"
									data={this.state.data[this.state.region]}
								/>
							)}
							{this.state.factor === 'hospitalizedIncrease' && (
								<Demo
									region={this.state.region}
									title="hospitalizedIncrease"
									data={this.state.data[this.state.region]}
								/>
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Drop;
