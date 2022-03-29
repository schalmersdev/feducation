import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SetPageTitle from '../../Utils';

const NavigationList = (props) => {
	const [currentPageTitle, setCurrentPageTitle] = useState('');
	const updatePageTitle = (event) => {
		setCurrentPageTitle(event.target.innerHTML);
	};
	SetPageTitle(currentPageTitle);
	return (
		<li>
			<Link
				to={props.item.url}
				key={props.item.title}
				onClick={updatePageTitle}
			>
				{props.item.title}
			</Link>
		</li>
	);
};

export default NavigationList;
