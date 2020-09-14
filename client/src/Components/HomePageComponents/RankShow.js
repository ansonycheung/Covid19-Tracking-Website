import React, { Component } from 'react';
import RankDex from './RankDex';

class RankShow extends Component {
	render() {
		return (
			<div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<h3 style={{ color: '#e21a2d' }}>Rank</h3>
					<div className="ShowRank">
						<RankDex />
					</div>
				</div>
			</div>
		);
	}
}

export default RankShow;
