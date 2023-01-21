const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-open-sans)', ...fontFamily.sans],
			},
			spacing: {
				18: '4.5rem',
				112: '28rem',
				120: '30rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('prettier-plugin-tailwindcss'),
		require('@tailwindcss/typography'),
		plugin(({ addVariant }) => addVariant('hocus', ['&:hover', '&:focus'])),
	],
};
