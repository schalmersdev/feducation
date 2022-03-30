import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Skill matcher heading', () => {
	render(<App />);
	const headingElement = screen.getByText(/Skill matcher/i);
	expect(headingElement).toBeInTheDocument();
});
