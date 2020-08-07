import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import HomePage from "./Routes/HomePage";
import DataPage from "./Routes/DataPage";
import NewsPage from "./Routes/NewsPage";
import TipsPage from "./Routes/TipsPage";
import DiscussionPage from "./Routes/DiscussionPage";
import AboutUsPage from "./Routes/AboutUsPage";
import SignUpPage from "./Routes/SignUpPage";
import LoginPage from "./Routes/LoginPage";

import './App.css';

function App() {
  return (
    <Router>
      <div className="root">
        <Route exact path="/" component={HomePage}/>
        <Route path="/data" component={DataPage}/>
        <Route path="/news" component={NewsPage}/>
        <Route path="/discussion" component={DiscussionPage}/>
        <Route path="/tips" component={TipsPage}/>
        <Route path="/about_us" component={AboutUsPage}/>
        <Route path="/sign_up" component={SignUpPage}/>
        <Route path="/login" component={LoginPage}/>
      </div>

    </Router>
  );
}

export default App;
