/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				pattern: "url('/pattern.png')",
				"hero-bg": "url('/hero-bg.png')",
			},
			colors: {
				body: "#000",
				"br-light": "#343435",
				"black-100": "#2B2C35",
				"primary-blue": {
					DEFAULT: "#2B59FF",
					100: "#F5F8FF",
				},
				"secondary-orange": "#f79761",
				"light-white": {
					DEFAULT: "rgba(59,60,152,0.03)",
					100: "rgba(59,60,152,0.02)",
				},
				grey: "#747A88",
			},
			boxShadow: {
				100: "0px 2px 5px rgba(0,0,0, 0.3)",
				200: "1px 2px 5px -2px rgba(0,0,0, 0.5)",
			},
			borderRadius: {
				sm: "3px",
			},
			fontFamily: {
				nunito: ["Nunito", "Helvetica", "Arial", "sans-serif"],
				poppins: ["Poppins", "Arial", "sans-serif"],
				barlow: ["Barlow", "sans-serif"],
			},
			fontSize: {
				tiny: "0.65rem",
				sm: "0.8rem",
				base: ["0.9rem", { lineHeight: "1.4" }],
				subtitle: ["clamp(1.2rem, 1vw, 24px)", { lineHeight: "1.2" }],
				secondary: ["clamp(2rem, 3vw, 40px) ", { lineHeight: "1.2" }],
				primary: ["clamp(2.5rem, 5vw, 52px)", { lineHeight: "1.2" }],
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".h-100dvh": {
					height: "100dvh",
				},
				".transition-sm": {
					transition: "all 0.3s linear",
				},
				".clip-circle ": {
					clipPath: "circle()",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
