import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import QuestionData from '../data/faqs.json';

const FAQs = (): JSX.Element => {
	return (
		<div id='faqs' className='text-black mt-16 mx-auto w-full px-4 max-w-screen-2xl lg:px-8'>
			<h1 className='text-5xl text-center font-semibold mb-8'>FAQs</h1>
			<div className='hidden lg:grid grid-cols-3 gap-4 '>
				{QuestionData.map(({ question, answer }, i) => (
					<div className='rounded shadow-md px-6 py-4' key={`faq_desktop_${i}`}>
						<h1 className='text-xl font-bold mb-2 text-gray-900'>{question}</h1>
						<p className='text-lg text-gray-500'>{answer}</p>
					</div>
				))}
			</div>
			<div className='flex flex-col space-y-3 lg:hidden'>
				{QuestionData.map(({ question, answer }, i) => (
					<Disclosure key={`faq_mobile_${i}`}>
						<Disclosure.Button
							className={
								'flex w-full justify-between items-center rounded-lg bg-gray-100 px-4 py-2 text-left text-xl font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75'
							}
						>
							{question}
							<ChevronUpIcon className='ui-open:rotate-180 ui-open:transform h-6 w-6 text-gray-900' />
						</Disclosure.Button>
						<Disclosure.Panel className={'px-4 pt-4 pb-2 text-lg text-gray-500'}>{answer}</Disclosure.Panel>
					</Disclosure>
				))}
			</div>
		</div>
	);
};

export default FAQs;
