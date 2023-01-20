const px0to10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0to100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0to200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0to1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
const px0to2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ["./src/**/*.{js,ts,jsx,tsx}"],
	content: [],
	theme: {
		extend: {
			borderWidth: px0to10,
			fontSize: px0to100,
			lineHeight: px0to100,
			minWidth: px0to200,
			minHeight: px0to200,
			spacing: px0to200,
			width: px0to2000,
			height: px0to2000,
			left: px0to1000,
			right: px0to1000,
			top: px0to1000,
			bottom: px0to1000,
			borderRadius: px0to100,
		},
	},
	plugins: [],
};
