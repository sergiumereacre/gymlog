import { View } from "react-native";
import { themeVariables, themeHex } from "@/constants/colours";
import useConfigurationStore from "@/stores/configurationStore";

// Custom hook for theme access
export const useTheme = () => {
	const { theme } = useConfigurationStore();

	return {
		colors: themeHex[theme],
		isDark: theme === "dark"
	};
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const { theme } = useConfigurationStore();

	return (
		<View className="flex-1" style={themeVariables[theme]}>
			{children}
		</View>
	);
}
