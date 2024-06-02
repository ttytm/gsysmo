const colors = require('tailwindcss/colors');
const svelte_ux = require('svelte-ux/plugins/tailwind.cjs');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,svelte}', './node_modules/svelte-ux/**/*.{svelte,js}'],
	ux: {
		themes: {
			dark: {
				primary: 'oklch(65.69% 0.196 275.75)',
				secondary: 'oklch(74.8% 0.26 342.55)',
				accent: 'oklch(74.51% 0.167 183.61)',
				neutral: '#2a323c',
				'neutral-content': '#A6ADBB',
				'surface-100': '#1d232a',
				'surface-200': '#191e24',
				'surface-300': '#15191e',
				'surface-content': '#A6ADBB'
			}
		}
	},
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [svelte_ux]
};

module.exports = config;
