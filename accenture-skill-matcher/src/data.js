let invoices = [
	{
		name: 'Santa Monica',
		number: 1995,
		amount: '$10,800',
		due: '12/05/1995'
	},
	{
		name: 'Stankonia',
		number: 2000,
		amount: '$8,000',
		due: '10/31/2000'
	},
	{
		name: 'Ocean Avenue',
		number: 2003,
		amount: '$9,500',
		due: '07/22/2003'
	},
	{
		name: 'Tubthumper',
		number: 1997,
		amount: '$14,000',
		due: '09/01/1997'
	},
	{
		name: 'Wide Open Spaces',
		number: 1998,
		amount: '$4,600',
		due: '01/27/1998'
	}
];

export function getInvoices() {
	return invoices;
}

const stories = [
	{
		title: 'React',
		url: 'https://reactjs.org/',
		author: 'Jordan Walke',
		num_comments: 3,
		points: 4,
		objectID: 0
	},
	{
		title: 'Redux',
		url: 'https://redux.js.org/',
		author: 'Dan Abramov, Andrew Clark',
		num_comments: 2,
		points: 5,
		objectID: 1
	}
];

export function getStories() {
	return stories;
}

const navigation = [
	{
		title: 'Home',
		url: '/',
		objectID: '0'
	},
	{
		title: 'Our Services',
		url: '/invoice',
		objectID: '1'
	},
	{
		title: 'Testimonials',
		url: '/expenses',
		objectID: '2'
	}
];

export function getNavigation() {
	return navigation;
}

const allFeds = [
	{
		acid: 'karan@accenture.com',
		label: 'Karan',
		icon: 'https://i.ibb.co/qBVNYy5/karan.jpg',
		introduction:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		skills: ['scrum', 'agile']
	},
	{
		acid: 'ray@accenture.com',
		label: 'Ray',
		icon: 'https://i.ibb.co/qBVNYy5/karan.jpg',
		introduction:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		skills: ['angular']
	},
	{
		acid: 'shoel@accenture.com',
		label: 'Shoel',
		icon: 'https://i.ibb.co/8KTQ4LL/jessica.jpg',
		introduction:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		skills: ['jquery']
	},
	{
		acid: 'jessica@accenture.com',
		label: 'Jessica',
		icon: 'https://i.ibb.co/8KTQ4LL/jessica.jpg',
		introduction:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		skills: ['react', 'css', 'aem']
	},
	{
		acid: 'liam@accenture.com',
		label: 'Liam',
		icon: 'https://i.ibb.co/VB7xRYT/liam.png',
		introduction:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		skills: ['react', 'css', 'aem']
	},
	{
		acid: 'erin@accenture.com',
		label: 'Erin',
		icon: 'https://i.ibb.co/VB7xRYT/liam.png',
		introduction:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		skills: ['react', 'css', 'aem', 'angular']
	}
];

export function getAllFeds() {
	return allFeds;
}
