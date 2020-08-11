import React from 'react';
import NewsItem from './NewsItem';

function ShowNews(items) {
  return <div>{items.map(
      (item) => <NewsItem key={item.title} {...item} />)}</div>;
}

class News extends React.Component {
  render() {
    let news = require('../../data_resource/news').slice(0, 90);
    return (
        <div className="News">
          <h2 style={{
            textAlign: 'center',
            fontSize: '50px',
            color: 'white'
          }}>COVID-19 NEWS</h2>
          <h5 style={{textAlign: 'center', color: 'white'}}>Click the card to
            view the content</h5>
          <div className="News">
            {ShowNews(news)}
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: '17px',
            color: 'black'
          }}>
            put news card in border
          </p>
        </div>
    );
  }
}

export default News;