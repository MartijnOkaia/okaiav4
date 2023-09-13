/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#FBFAF5',
			'grey': '#F1EFED',
			'green': '#C8FB50',
			'pink': '#F2B3F9',
		  },
		fontSize: {
			sm: ['14px', '20px'],
			base: ['18px', '30px'],
			md: ['26px', '33px'],
			lg: ['40px', '26px'],
			xl: ['50px', '56px'],
			xxl: ['80px', '78px'],
		},
		borderRadius: {
			DEFAULT: '10px',
			'lg': '20px'
		},
		extend: {
			
		},
	},
	plugins: [],
	safelist: [
		'bg-white'
	]
}
