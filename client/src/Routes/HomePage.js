import React from 'react';

import NavBar from '../Components/NavBar';
import Jumbotron from '../Components/Jumbotron';
import Branches from '../Components/HomePageComponents/Branches';
import Contents from '../Components/HomePageComponents/Contents';

function HomePage() {
	return (
		<div className="App">
			<NavBar />
			<Jumbotron />
			<Branches />
			<Contents />
		</div>
	);
}

export default HomePage;
