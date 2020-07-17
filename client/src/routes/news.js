import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/navbar.component";
// import news from "./news";

class News extends React.Component{
  render() {
    let news = require('./news.json');
    console.log(news.length);
    let obj = [];
    for (let i = 0; i < news.length; i++) {
      obj.push(
          <div>
            <p>{news[i].date_time}</p>
            <p>{news[i].title}</p>
            <p>{news[i].content}</p>
          </div>
      );
    }
    return (
        <div className="App">
          <Navbar/>
          <div className="container mt-5">
            {obj}
          </div>
        </div>
    );
  }
}
export default News;