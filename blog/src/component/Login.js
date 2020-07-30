import React, {Component} from 'react';

import InputField from "../blogComponent/InputField";
import SubmitButton from "../blogComponent/SubmitButton";
import UserStore from "../blogComponent/UserStore";

class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      username: '',
      password: '',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    },)
    UserStore.props[e.target.value]  = e.target.value;

  }

  submitForm(e) {
    e.preventDefault()
    const { username, password } = this.state
    // login
  }

  render() {
    return (
        <div className="loginForm">
          <h1 className="text-white">Login</h1>
          <form action="/login" method="POST" onSubmit={this.submitForm}>
            {/*value need to send to backend and the state username should be assigned after varification of back end*/}
            <input type="text" name="username" placeholder="username" value = {this.state.username} onChange={this.onChange}/>
              <input type="password" name="password" placeholder="password" value = {this.state.password} onChange={this.onChange}/>
                <button>Login</button>

          </form>
        </div>
    );
  }
}

export default Login;