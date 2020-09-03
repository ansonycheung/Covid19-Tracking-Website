import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import LoginPage from './containers/auth/LoginPage';
import SignUpPage from './containers/auth/SignUpPage';

import Jumbotron from '../../Components/Jumbotron';
import ProgressBar from './containers/layout/ProgressBar';
import Navbar from './containers/layout/Navbar';
import BlogPage from './containers/BlogPage';
import PrivateRoute from './utils/PrivateRoute';

import ViewPostPage from './containers/posts/ViewPostPage';
import CreatePostPage from './containers/posts/CreatePostPage';
import UpdatePostPage from './containers/posts/UpdatePostPage';
import CreateCommentPage from './containers/posts/CreateCommentPage';

if (localStorage.jwtToken) {
	const token = localStorage.jwtToken;
	setAuthToken(token);
	const decoded = jwt_decode(token);
	store.dispatch(setCurrentUser(decoded));
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		window.location.href = './loginPage';
	}
}

const DiscussionPage = () => {
	return (
			<div>
		<Provider store={store}>
			<BrowserRouter>
				<ProgressBar />
				{/*<Navbar />*/}
				{/*<Jumbotron />*/}
				<Switch>
					<Route exact path="/discussion" component={BlogPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignUpPage} />
					<PrivateRoute exact path="/post/create" component={CreatePostPage} />
					<PrivateRoute exact path="/post/:id/create_comment" component={CreateCommentPage} />
					<PrivateRoute exact path="/post/update/:id" component={UpdatePostPage} />
					<Route exact path="/post/:id" component={ViewPostPage} />
					<Redirect from="*" to="/discussion" />
				</Switch>
			</BrowserRouter>
		</Provider>
			</div>
	);
};

export default DiscussionPage;
