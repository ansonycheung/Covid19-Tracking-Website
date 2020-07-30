import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';


// import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from "../blogComponent/NavBar";
import Cards from "../blogComponent/Cards";
import BlogJumbortron from "../blogComponent/BlogJumbotron";
import UserStore from "../blogComponent/UserStore";
import SubmitButton from "../blogComponent/SubmitButton";




class Home extends React.Component {
  constructor(props) {
    super(props);
    // after backend check, substituted by userstore
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    }
  }

  async componentDidMount() {
    try {
      //TODO: need to connect with backend /isLoggedIn
      let res = await fetch('/isLoggedIn',{
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  // componentWillMount() {
  //
  //   this.setState({
  //     username: this.props.location.state.username,
  //     loggedIn: this.props.location.state.loggedIn
  //   })
  // }

  async doLogout() {
    try {
      //TODO: need to connect with backend /logout
      let res = await fetch('/logout',{
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();
      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    // if (UserStore.loading) {
    //   return (
    //       <div className="text-white">
    //         Loading...Please wait...
    //       </div>
    //   )
    // }

    return (


        <div>
          {/*"success！"*/}
          <NavBar />

          <div className="container" id="posts">

            <BlogJumbortron isLoggedIn={UserStore.isLoggedIn}/>
            {UserStore.isLoggedIn? <SubmitButton className="btn btn-secondary btn-md"  text={'Log Out'}
                                                                                                  disabled = {false}
                                                                                                  onClick = { () => this.doLogout()}/> : ''}
            <Cards user={this.state.username}/>
          </div>
        </div>


    );

  }
}
export default Home;