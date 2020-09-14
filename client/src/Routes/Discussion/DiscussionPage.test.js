import React from 'react';
import ReactDOM from 'react-dom';
import Discussion from './Discussion';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Discussion />, div);
	ReactDOM.unmountComponentAtNode(div);
});
