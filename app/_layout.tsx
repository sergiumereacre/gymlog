import { Stack } from "expo-router";
import { ThemeProvider } from "@/utils/theme";

export default function RootLayout() {
	return (
		<ThemeProvider>
			<Stack />
		</ThemeProvider>
	);
}
