import React, { useState } from 'react';

function NewsItem({ date_time, title, content }) {
	const [ isClipped, setIsClipped ] = useState(false);
	const toggleIsClipped = () => setIsClipped(!isClipped);
	const pattern1 = (
		<div class="card-patten-1">
			<p
				class="title"
				style={{
					fontFamily: 'Rowdies',
					fontSize: '24px',
					display: 'flex',
					textAlign: 'center'
				}}
			>
				{title}
			</p>
			<p
				class="date_time"
				style={{
					fontSize: '13px'
				}}
			>
				{date_time}
			</p>
		</div>
	);

	const pattern2 = (
		<div class="card-patten-2">
			<p class="content-title" style={{ fontFamily: 'Rowdies' }}>
				{title}
			</p>
			<p
				class="content"
				style={{
					textAlign: 'justify'
				}}
			>
				{content}
			</p>
		</div>
	);

	return (
		<div
			class="card"
			onClick={toggleIsClipped}
			style={{
				backgroundColor: 'white',
				float: 'left',
				width: '30%',
				minHeight: '300px',
				margin: '1.25%',
				borderRadius: '7px',
				textAlign: 'center',
				boxShadow: '1px 2px 3px 0px rgba(0, 0, 0, 0.5)',
				display: 'flex',
				flexDirection: 'column',
				padding: '1em 2em',
				justifyContent: 'center'
			}}
		>
			{isClipped ? pattern2 : pattern1}
		</div>
	);
}

export default NewsItem;
