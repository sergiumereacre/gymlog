import "@/app/global.css";
import { ThemeProvider, useTheme } from "@/utils/theme";
import { useFonts } from "expo-font";
import { useKeepAwake } from "expo-keep-awake";
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Set notifications handler.
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

export default function RootLayout() {
	const { isDark } = useTheme();

	useKeepAwake();

	const [loaded] = useFonts({
		SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<GestureHandlerRootView>
			<ThemeProvider>
				<SafeAreaView className="flex-1">
					<StatusBar style={isDark ? "light" : "dark"} />
					<Stack screenOptions={{ headerShown: false }}>
						<Stack.Screen name="index" />
						<Stack.Screen name="settings" />
					</Stack>
				</SafeAreaView>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
