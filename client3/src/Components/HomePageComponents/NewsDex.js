import React, {Component} from "react";
import NewsInfo from "./NewsInfo";

function ShowNewsList(items) {
  return (
      <div>
        {items.map((item) => <NewsInfo key={item.title} date_time={item.date_time}
                                       title={item.title} content={item.content}/>)}
      </div>
  );
}

class NewsDex extends Component {
  render() {
    let news = require('../../data_resource/news');
    let newsList = news.slice(0, 5);

    return (
        <div className="NewsDex">
          {ShowNewsList(newsList)}
        </div>
    );

  }
}

export default NewsDex;