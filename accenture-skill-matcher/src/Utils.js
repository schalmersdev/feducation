import { useEffect } from 'react';

const SetPageTitle = (title) => {
	useEffect(() => {
		// Update the document title using the browser API
		document.title = title;
	});
};

export default SetPageTitle;
