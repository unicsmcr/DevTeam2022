/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'guh-orange': '#FFAF00',
			},
		},
	},
	plugins: [require('@headlessui/tailwindcss')],
};
