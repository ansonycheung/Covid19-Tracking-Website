import React from "react";
import './NavBar.css'

function NavBar() {
  return (
      <div>
        <nav className="navbar navbar-default"
             style={{background: "black", border: "none", borderRadius: "0px"}}>
          <div className="container-fluid">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-nav-demo" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="/#" className="navbar-brand">
                  <img alt="Brand"
                       src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png"
                       style={{height: "100%"}}/>
                </a>
                <a href="/#" className="navbar-brand"
                   style={{
                     color: "rgba(240, 248, 255, 0.8)",
                     hover: {
                       color: "white"
                     }
                   }}>Covid-19</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-nav-demo">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/#" style={{
                    color: "rgba(240, 248, 255, 0.8)",
                    $nest: {
                      '&:hover': {
                        color: "rgba(240, 248, 255, 1)",
                        borderBottom: "1px solid red",
                        marginBottom: "1px"
                      }
                    }
                  }}>About Us</a></li>
                  <li><a href="/#" style={{color: "rgba(240, 248, 255, 0.8)"}}>Sign
                    Up</a></li>
                  <li><a href="/#"
                         style={{color: "rgba(240, 248, 255, 0.8)"}}>Login</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </nav>
      </div>

  );
}

export default NavBar;