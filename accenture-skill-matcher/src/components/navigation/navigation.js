import React from 'react';
import { getNavigation } from '../../data';
import NavigationList from './navigation-list';
import Logo from '../../img/icon.png';

const Navigation = () => (
	<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
		<div className="container flex flex-wrap justify-between items-center mx-auto">
			<a href="https://www.accenture.com" className="flex items-center">
				<img
					src={Logo}
					className="mr-3 h-6 sm:h-9"
					alt="Accenture Logo"
				/>
				<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
					Accenture Interactive
				</span>
			</a>
			<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
				<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium dark:text-white">
					{getNavigation().map((item) => (
						<NavigationList key={item.objectID} item={item} />
					))}
				</ul>
			</div>
		</div>
	</nav>
);

export default Navigation;
