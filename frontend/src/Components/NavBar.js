import React from "react";
import {Link} from "react-router-dom";

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
                {/*<a href="/#" className="navbar-brand">*/}
                {/*  <img alt="Brand"*/}
                {/*       src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png"*/}
                {/*       style={{height: "100%"}}/>*/}
                {/*</a>*/}
                <img className="navbar-brand"
                     alt="Brand"
                     src="https://web.northeastern.edu/sds/CEWS/images/NEUlogo.png"
                />
                <Link className="navbar-brand" id="home" to="/" style={{
                  color: "rgba(240, 248, 255, 0.8)",
                  hover: {
                    color: "white"
                  }
                }}>Covid-19</Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-nav-demo">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/about_us" style={{
                      color: "rgba(240, 248, 255, 0.8)",
                      $nest: {
                        '&:hover': {
                          color: "rgba(240, 248, 255, 1)",
                          borderBottom: "1px solid red",
                          marginBottom: "1px"
                        }
                      }
                    }}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/sign_up" style={{
                      color: "rgba(240, 248, 255, 0.8)",
                      $nest: {
                        '&:hover': {
                          color: "rgba(240, 248, 255, 1)",
                          borderBottom: "1px solid red",
                          marginBottom: "1px"
                        }
                      }
                    }}>Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login" style={{
                      color: "rgba(240, 248, 255, 0.8)",
                      $nest: {
                        '&:hover': {
                          color: "rgba(240, 248, 255, 1)",
                          borderBottom: "1px solid red",
                          marginBottom: "1px"
                        }
                      }
                    }}>Login</Link>
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