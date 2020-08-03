import React from 'react';
import NewsItem from './NewsItem';

function ShowNews(items) {
	return <div>{items.map((item) => <NewsItem key={item.title} {...item} />)}</div>;
}

class News extends React.Component {
	render() {
		let news = require('./news.json');
		return (
			<div className="News">
				<h1 style={{ textAlign: 'center', color: 'white' }}>COVID-19 NEWS</h1>
				<h5 style={{ textAlign: 'center', color: 'white' }}>Click the card to view the content</h5>
				<div className="News">{ShowNews(news)}</div>
			</div>
		);
	}
}

export default News;
