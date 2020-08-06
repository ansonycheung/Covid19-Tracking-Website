import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
//
// import "bootstrap/dist/css/bootstrap.min.css"


import App from "./App";



// class App extends React.Component {
//   render() {
//
//       return (
//
//           <div className="container" id="posts">
//             <NavBar/>
//             <BlogJumbortron/>
//             <Cards/>
//           </div>
//       );
//
//   }
// }









ReactDOM.render(
    // <NavBar />,
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,

    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);