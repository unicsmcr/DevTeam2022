module.exports = {
	extends: ['next/babel', 'next', 'turbo', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
	},
};
