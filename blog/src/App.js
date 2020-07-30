import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import './App.css';


// import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./routes/ind";
import Login from "./component/Login";
import NewPost from "./routes/NewPost";
import LoginForm from "./routes/LoginForm";
import NavBar from "./blogComponent/NavBar";
import Cards from "./blogComponent/Cards";
import BlogJumbortron from "./blogComponent/BlogJumbotron";

import UserStore from "./blogComponent/UserStore";

class App extends React.Component {
  render() {

    return (
        <Router>
          <div className="root">
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/newPost" component={NewPost}/>
            {/*<Route path="/forum" component={Forum}/>*/}
            {/*<Route path="/contact" component={Contact}/>*/}
            {/*<Route path="/news" component={News}/>*/}
          </div>
        </Router>


    );

  }
}
export default App;