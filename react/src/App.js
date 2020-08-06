import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";


import HomePage from "./routes/HomePage";
import DataPage from "./routes/DataPage";
import NewsPage from "./routes/NewsPage";
import TipsPage from "./routes/TipsPage";
import DiscussionPage from "./routes/DiscussionPage";
import AboutUsPage from "./routes/AboutUsPage";
import SignUpPage from "./routes/SignUpPage";
import LoginPage from "./routes/LoginPage";

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
