import React from 'react';
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './ind.css';

class Home extends React.Component{
  render() {
    return (
        <div className="container mt-5">
          <div className="jumbotron">
            <h1 className="display-4">Is COVID dead today?</h1>
            <p className="lead">This site shows the data of COVID-19 in
              different
              styles, you can search for the data around you, post your feelings
              about COVID and also support each other through discussion.</p>
            <hr className="my-4"/>
            <div className="d-flex justify-content-around">
              <Link className="btn btn-primary btn-lg" to="/data">View Data</Link>
              <Link className="btn btn-info btn-lg" to="/search">Search</Link>
              <Link className="btn btn-success btn-lg" to="/forum">Forum</Link>
              <Link className="btn btn-dark btn-lg" to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
    )
  }
}
export default Home;