import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/navbar.component";
class Contact extends React.Component{
  render() {
    return(
        <div>
          <Navbar/>
          <h3 className="mt-5">Author info</h3>
        </div>
    )
  }
}

export default Contact;