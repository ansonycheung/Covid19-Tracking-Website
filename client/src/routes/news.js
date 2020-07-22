import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/navbar.component";
import NewsItem from '../components/NewsItem.component';

function ShowNews(items) {
  return <div>{
    items.map((item) => <NewsItem key={item.title} {...item} />)
  }</div>;
}

class News extends React.Component{
  state = {
    news: {}
  };
  componentDidMount() {
    fetch("http://localhost:9000/news")
    .then(res => res.json())
    .then(
        (res) => {this.setState({news: res})},
        (error) => {this.setState({error})});
  }
  render() {
    const arr = [];
    for (let i = 0; i < this.state.news.length; i++){arr.push(this.state.news[i])}
    return (
        <div>
          <Navbar/>
          <div className="News">
            <h1>COVID-19 NEWS</h1>
            <h5>Click the card to view the content</h5>
            <div className="News"><div>{
              arr.map((item) => <NewsItem key={item.title} {...item} />)
            }</div></div>
          </div>
        </div>
    );
  }
}
export default News;