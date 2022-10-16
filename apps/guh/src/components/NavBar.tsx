import * as React from 'react';

const NavBar = (): JSX.Element => {
	return (
		<nav className='bg-guh-orange flex justify-between py-4 px-32'>
			<h1>GUH Logo goes here</h1>
			<ul className='flex flex-row space-x-8 text-lg font-medium'>
				<li>
					<a href='#faqs'>FAQ</a>
				</li>
				<li>About</li>
				<li>Sponsors</li>
				<li>Contact</li>
				<li>Register Now</li>
			</ul>
		</nav>
	);
};

export default NavBar;
