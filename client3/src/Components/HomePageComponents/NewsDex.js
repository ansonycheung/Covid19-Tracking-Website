import React, {Component} from "react";
import NewsInfo from "./NewsInfo";

class NewsDex extends React.Component {
  state = {
    news: {}
  };
  componentDidMount() {
    fetch("http://localhost:9000/news")
    .then(res => res.json())
    .then(
        (res) => {this.setState({news: res});},
        (error) => {this.setState({error})});
  }

  render() {
    const arr = [];
    for (let i = 0; i < this.state.news.length; i++){
      arr.push(this.state.news[i])
    }
    let short_arr = arr.slice(0, 5);
    return (
        <div className="NewsDex">
          {short_arr.map((item) => <NewsInfo key={item.title} {...item}/>)}
        </div>
    );
  }
}

export default NewsDex;