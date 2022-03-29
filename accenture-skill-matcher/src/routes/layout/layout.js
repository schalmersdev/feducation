import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';

const Layout = () => (
	<div className="flex flex-col justify-between">
		<Navigation />

		<Outlet />

		<Footer />
	</div>
);

export default Layout;
