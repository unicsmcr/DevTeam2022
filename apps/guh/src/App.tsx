import * as React from 'react';
import FAQs from './components/FAQs';
import NavBar from './components/NavBar';

export default function App() {
	return (
		<div className='bg-white'>
			<div className='flex flex-col min-h-screen'>
				<NavBar />
				<div className='bg-black flex-1 flex text-center text-white items-center flex-col justify-center font-medium'>
					<h1 className='text-white text-5xl'>
						<span className='text-guh-orange'>UniCS</span> presents,
					</h1>
					<h1 className='text-white text-8xl'>GreatUniHack</h1>
					<button className='mt-4 bg-guh-orange text-2xl text-black rounded-md py-3 px-8'>Register Now</button>
				</div>
			</div>
			<FAQs />
		</div>
	);
}
