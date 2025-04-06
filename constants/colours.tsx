import { vars } from "nativewind";

export const themeVariables = {
	light: vars({
		"--color-primary": "#000000",
		"--color-secondary": "#FFFFFF",
		"--color-background": "#FFFFFF",
		"--color-text": "#000000",
	}),
	dark: vars({
		"--color-primary": "#FFFFFF",
		"--color-secondary": "#000000",
		"--color-background": "#000000",
		"--color-text": "#FFFFFF",
	}),
};

export const themeHex = {
	light: {
		primary: "#000000",
		secondary : "#ffffff",
		background: "#ffffff",
		text: "#000000"
	},
	dark: {
		primary: "#ffffff",
		secondary : "#000000",
		background: "#000000",
		text: "#FFFFFF"
	}
} as const;