import React from 'react';
import NewsItem from './NewsItem';

class News extends React.Component {
	state = {
		news: {}
	};
	componentDidMount() {
		fetch('/news').then((res) => res.json()).then(
			(res) => {
				this.setState({ news: res });
			},
			(error) => {
				this.setState({ error });
			}
		);
	}
	render() {
		const arr = [];
		for (let i = 0; i < this.state.news.length; i++) {
			console.log(this.state.news[i]);
			arr.push(this.state.news[i]);
		}
		return (
			<div className="News">
				<h2
					style={{
						textAlign: 'center',
						fontSize: '50px',
						color: 'white'
					}}
				>
					COVID-19 NEWS
				</h2>
				<h5 style={{ textAlign: 'center', color: 'white' }}>Click the card to view the content</h5>
				<div className="News">{arr.map((item) => <NewsItem key={item.title} {...item} />)}</div>
				<p
					style={{
						textAlign: 'center',
						fontSize: '17px',
						color: 'black'
					}}
				>
					put news card in border
				</p>
			</div>
		);
	}
}

export default News;
