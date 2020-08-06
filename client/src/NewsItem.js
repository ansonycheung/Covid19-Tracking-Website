import React, { useState } from 'react';
import './NewsItem.css';

var colors = [ '#ff0000', '#00ff00', '#0000ff', '#ff3333', '#ffff00', '#ff6600' ];

function NewsItem({ date_time, title, content }) {
	const [ isClipped, setIsClipped ] = useState(false);
	const toggleIsClipped = () => setIsClipped(!isClipped);
	const pattern1 = (
		<div class="card-patten-1">
			<p class="title">{title}</p>
			<p class="date_time">{date_time}</p>
		</div>
	);

	const pattern2 = (
		<div class="card-patten-2">
			<p class="content-title">{title}</p>
			<p class="content">{content}</p>
		</div>
	);

	return (
		<div class="card" onClick={toggleIsClipped}>
			{isClipped ? pattern2 : pattern1}
		</div>
	);
}

export default NewsItem;
