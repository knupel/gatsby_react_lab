// import typographyPlugin from '@tailwindcss/typography'

import { red } from "@mui/material/colors";

// import animatePlugin from 'tailwindcss-animate'
// import radixPlugin from 'tailwindcss-radix'
// import { marketingPreset } from './app/routes/_marketing+/tailwind-preset'
// import { extendedTheme } from './app/utils/extended-theme.ts'


// import { type Config } from 'tailwindcss'

export default {
	prefix: 'tw-',
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {},
		container: {},
		extend: {},
		colors: {
			'rouge': "#FF0000",
			transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
		}
	},
	presets: [],
	plugins: [],
}
