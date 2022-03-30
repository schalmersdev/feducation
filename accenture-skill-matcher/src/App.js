import React from 'react';
import {
	Routes,
	Route
} from "react-router-dom";
import Layout from './routes/layout/layout';
import Home from './routes/home/home';
import Nomatch from './routes/nomatch/nomatch';
//css
import './App.scss';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="*" element={<Nomatch />} />
			</Route>
		</Routes>
	);
}

export default App;


