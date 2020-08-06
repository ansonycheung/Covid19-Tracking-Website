import React, { Component } from 'react';
import SubmitButton from '../blogComponent/SubmitButton';
import UserStore from '../blogComponent/UserStore';
import InputField from '../blogComponent/InputField';
import { observable } from 'mobx';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Home from './ind';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			buttonDisabled: false
		};
	}

	componentDidMount() {
		this.resetForm();
	}

	setInputValue(property, val) {
		val = val.trim();
		if (val.length > 12) {
			return;
		}

		this.setState({
			[property]: val
		});
	}

	resetForm() {
		this.setState({
			username: '',
			password: '',
			buttonDisabled: false
		});
	}

	async doLogin() {
		if (!this.state.username) {
			// this.resetForm();
			// alert("fill the username!")
			return;
		}
		if (!this.state.password) {
			// this.resetForm();
			// alert("fill the password")
			return;
		}

		this.setState({
			buttonDisabled: true
		});
		// UserStore.isLoggedIn = true;
		// UserStore.username = this.state.username;
		//backend login/

		try {
			// axios
			// 	.post('/login', {
			// 		idea: {
			// 			title: 'test',
			// 			body: 'success'
			// 		}
			// 	})
			// 	.then((response) => {
			// 		console.log(response);
			// 	})
			// 	.catch((error) => console.log(error))
			console.log(
				JSON.stringify({
					username: this.state.username,
					password: this.state.password
				})
			);

			//TODO: need to connect with backend /login
			let res = await fetch('/login', {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: 'this.state.username',
					password: 'this.state.password'
				})
			});

			let result = await res.json();
			// TODO: check if the backend can do the redirect or use the line 93-100
			if (result && result.success) {
				UserStore.isLoggedIn = true;
				UserStore.username = result.username;
			} else if (result && result.success === false) {
				this.resetForm();
				//also can let backed return the result.msg
				alert('Login failed');
			}
		} catch (e) {
			console.log(e);
			this.resetForm();
		}
	}

	render() {
		if (UserStore.isLoggedIn) {
			console.log(UserStore.username);
			return (
				<Redirect
					to={{
						pathname: '/'
						// state:{ username: UserStore.username,
						//   loggedIn: UserStore.isLoggedIn }
					}}
				/>
			);
		}

		return (
			<div>
				Login
				<InputField
					type="text"
					placeholder="Username"
					value={this.state.username ? this.state.username : ''}
					onChange={(val) => this.setInputValue('username', val)}
				/>
				<InputField
					type="password"
					placeholder="Password"
					value={this.state.password ? this.state.password : ''}
					onChange={(val) => this.setInputValue('password', val)}
				/>
				<SubmitButton text={'Log In'} disabled={this.state.buttonDisabled} onClick={() => this.doLogin()} />
			</div>
		);
	}
}

export default LoginForm;
