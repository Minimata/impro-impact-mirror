/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  sans: ['Montserrat', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography'),],

	daisyui: {
	  themes: ['pastel'],
	},
}