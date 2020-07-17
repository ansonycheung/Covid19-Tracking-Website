import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
import Data from "./routes/data";
import Home from "./routes/ind";
import Search from "./routes/search"
import Contact from "./routes/contact"
import Forum from "./routes/forum";
import News from "./routes/news";

class App extends React.Component{
    render() {
      return (
          <Router>
            <div className="root">
              <Route exact path="/" component={Home}/>
              <Route path="/data" component={Data}/>
              <Route path="/search" component={Search}/>
              <Route path="/forum" component={Forum}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/news" component={News}/>
            </div>
          </Router>
      )
  }
}

export default App;
