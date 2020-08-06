import React from 'react';
import './navbar.css';

function Navbar() {
	return (
		<div>
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="container">
						<div class="navbar-header">
							<button
								type="button"
								class="navbar-toggle collapsed"
								data-toggle="collapse"
								data-target="#bs-nav-demo"
								aria-expanded="false"
							>
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar" />
								<span class="icon-bar" />
								<span class="icon-bar" />
							</button>
							<a class="navbar-brand" href="#">
								<img alt="Brand" src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png" />
							</a>
							<a href="home.html" class="navbar-brand">
								Covid-19
							</a>
						</div>

						<div class="collapse navbar-collapse" id="bs-nav-demo">
							<ul class="nav navbar-nav navbar-right">
								<li>
									<a href="#">About Us</a>
								</li>
								<li>
									<a href="#">Sign Up</a>
								</li>
								<li>
									<a href="#">Login</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
