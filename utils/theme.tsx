import { View } from "react-native";
import { themeVariables } from "@/constants/colours";
import useConfigurationStore from "@/stores/configurationStore";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const { theme } = useConfigurationStore();

	return (
		<View className="flex-1" style={themeVariables[theme]}>
			{children}
		</View>
	);
}
