import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/navbar.component";
class Forum extends React.Component{
  render() {
    return(
        <div>
          <Navbar/>
          <h3 className="mt-5">Forum</h3>
        </div>
    )
  }
}

export default Forum;