import React from 'react';

import NavBar from '../Components/NavBar';
import Jumbotron from '../Components/Jumbotron';
import Map from '../Components/DataPageComponents/Map';
import Drop from '../Components/DataPageComponents/Drop';

function DataPage() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<div
				className="container"
				style={{
					backgroundColor: 'black',
					color: 'white',
					border: '5px solid white',
					lineHeight: '1.1',
					boxShadow: '7px 10px 12px -5px rgba(255, 255, 255, 0.56)',
					borderRadius: '5px'
				}}
			>
				<Drop />
			</div>
			<div
				className="container"
				style={{
					marginTop: 50,
					marginBottom: 16,
					backgroundColor: 'black',
					color: 'white',
					border: '5px solid white',
					lineHeight: '1.1',
					boxShadow: '7px 10px 12px -5px rgba(255, 255, 255, 0.56)',
					borderRadius: '5px'
				}}
			>
				<Map />
			</div>
		</div>
	);
}

export default DataPage;
