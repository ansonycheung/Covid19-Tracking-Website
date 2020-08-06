import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "../component/Login";
import {Link} from "react-router-dom";

class BlogJumbortron extends React.Component{


  render() {
    const loggin = this.props.isLoggedIn;
    var link;
    // or use redirect?
    if (!loggin) {
      link = "/login"
    } else {
      link = "/newPost"
    }

    return (

        <div className="jumbotron ">
          <h1 ><i className="fab fa-wpforms"></i> Discussion Board</h1>
          <p>Let the world hear your voice! Feel free to upload a new post.</p>
          {/*<hr className="my-4" />*/}
          <Link className="btn btn-secondary btn-md" to={link} role="button">New Post</Link>
          {/*{loggin? <Link className="btn btn-secondary btn-md" to={link} role="button">Log out</Link>: '' }*/}

        </div>


    )
  }


}

export default BlogJumbortron;