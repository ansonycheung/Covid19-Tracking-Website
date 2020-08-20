import React from 'react';

import NavBar from '../Components/NavBar';
import Jumbotron from '../Components/Jumbotron';
import SignUp from '../Components/LoginComponents/SignUp';

function SignUpPage() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<SignUp />
		</div>
	);
}

export default SignUpPage;
