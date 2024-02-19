/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				dark: {
					"primary": "#38385f",

					"secondary": "#c23e7e",

					"accent": "#e0a177",

					"neutral": "#2f2f49",

					"base-100": "#620c24",

					"info": "#3c807b",

					"success": "#69a050",

					"warning": "#e18b79",

					"error": "#6f0e1f",
				},
				postcard: {
					"primary": "#ffd093",

					"secondary": "#851539",

					"accent": "#2d0746",

					"neutral": "#a5392f",

					"base-100": "#ff5e48",

					"info": "#3c807b",

					"success": "#69a050",

					"warning": "#e18b79",

					"error": "#6f0e1f",
				}
			}
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables

	},
	plugins: [require("daisyui")],
}
