import useConfigurationStore from "@/stores/configurationStore";
import { themeHex } from "@/constants/colours";

export const useTheme = () => {
	const { theme, toggleTheme } = useConfigurationStore();

	return {
		colors: themeHex[theme],
		isDark: theme === "dark",
		toggleTheme
	};
};