// import typographyPlugin from '@tailwindcss/typography'

import { red } from "@mui/material/colors";

// import animatePlugin from 'tailwindcss-animate'
// import radixPlugin from 'tailwindcss-radix'
// import { marketingPreset } from './app/routes/_marketing+/tailwind-preset'
// import { extendedTheme } from './app/utils/extended-theme.ts'


// import { type Config } from 'tailwindcss'

export default {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {},
		container: {},
		extend: {},
		colors: {
			'rouge': "#FF0000"
		}
	},
	presets: [],
	plugins: [],
}
