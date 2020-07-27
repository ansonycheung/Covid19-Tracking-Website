import React, {Component} from "react";
import News from "./News";

function ShowNewsList(items) {
  return (
      <div>
        {items.map((item) => <News key={item.title} date_time={item.date_time}
                                   title={item.title} content={item.content}/>)}
      </div>
  );
}

class NewsDex extends Component {
  render() {
    let news = require('../data_resource/news');
    let newsList = news.slice(0, 5);

    return (
        <div className="NewsDex">
          {ShowNewsList(newsList)}
        </div>
    );

  }
}

export default NewsDex;