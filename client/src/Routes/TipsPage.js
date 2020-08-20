import React from 'react';

import NavBar from '../Components/NavBar';
import Jumbotron from '../Components/Jumbotron';
import Tips from '../Components/TipsPageComponents/Tips';

function TipsPage() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Tips />
		</div>
	);
}

export default TipsPage;
