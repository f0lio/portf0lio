module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#040516",
					1: "#eee",
					2: "#064663",
					3: "#ECB365",
				},
			},
		},
	},
	plugins: [],
};
