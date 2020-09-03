import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './Routes/HomePage';
import DataPage from './Routes/DataPage';
import NewsPage from './Routes/NewsPage';
import TipsPage from './Routes/TipsPage';
import DiscussionPage from './Routes/Discussion/DiscussionPage';
import AboutUsPage from './Routes/AboutUsPage';
// import SignUpPage from './Routes/SignUpPage';
// import LoginPage from './Routes/LoginPage';

import './App.css';
import LoginPage from './Routes/Discussion/containers/auth/LoginPage';
import SignUpPage from './Routes/Discussion/containers/auth/SignUpPage';
import BlogPage from "./Routes/Discussion/containers/BlogPage";
import PrivateRoute from "./Routes/Discussion/utils/PrivateRoute";
import CreatePostPage
	from "./Routes/Discussion/containers/posts/CreatePostPage";
import CreateCommentPage
	from "./Routes/Discussion/containers/posts/CreateCommentPage";
import UpdatePostPage
	from "./Routes/Discussion/containers/posts/UpdatePostPage";
import ViewPostPage from "./Routes/Discussion/containers/posts/ViewPostPage";
import store from "./Routes/Discussion/store";
import ProgressBar from "./Routes/Discussion/containers/layout/ProgressBar";
import Navbar from "./Routes/Discussion/containers/layout/Navbar";
import Jumbotron from "./Components/Jumbotron";
import {Provider} from "react-redux";

function App() {
	return (
			<Provider store={store}>

		<Router>
			<div className="root">
				<Navbar />
				<Jumbotron />
				<Route exact path="/" component={HomePage} />
				<Route path="/data" component={DataPage} />
				<Route path="/news" component={NewsPage} />
				<Route path="/discussion" component={DiscussionPage} />
				<Route path="/tips" component={TipsPage} />
				<Route path="/about_us" component={AboutUsPage} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/login" component={LoginPage} />

				<PrivateRoute exact path="/post/create" component={CreatePostPage} />
				<PrivateRoute exact path="/post/:id/create_comment" component={CreateCommentPage} />
				<PrivateRoute exact path="/post/update/:id" component={UpdatePostPage} />
				<Route exact path="/post/:id" component={ViewPostPage} />



			</div>
		</Router>
			</Provider>


// 			<Provider store={store}>
// 			<BrowserRouter>
// 			<ProgressBar />
// 			<Navbar />
// 			<Jumbotron />
// 			<Switch>
// 			<Route exact path="/discussion" component={BlogPage} />
// 	<Route path="/login" component={LoginPage} />
// 	<Route path="/signup" component={SignUpPage} />
// 	<PrivateRoute exact path="/post/create" component={CreatePostPage} />
// 	<PrivateRoute exact path="/post/:id/create_comment" component={CreateCommentPage} />
// 	<PrivateRoute exact path="/post/update/:id" component={UpdatePostPage} />
// 	<Route exact path="/post/:id" component={ViewPostPage} />
// 	<Redirect from="*" to="/discussion" />
// 	</Switch>
// </BrowserRouter>
// </Provider>
	);
}

export default App;
