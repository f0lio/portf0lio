module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#040516',
					1: '#eee',

					2: '#064663',
					3: '#ECB365',
				},
				secondary: {
					DEFAULT: '#CCCCCC',
				},
			},
		},
	},
	plugins: [],
};
