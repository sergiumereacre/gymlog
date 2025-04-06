import useConfigurationStore from "@/stores/configurationStore";
import { useRouter } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Settings() {
	const { theme, toggleTheme } = useConfigurationStore();
  const router = useRouter();

	return (
		<View className="bg-background flex-1">
			<Text className="text-text">
				Current theme: {theme === "dark" ? "dark" : "light"}
			</Text>
			<Button title="Toggle Theme" onPress={toggleTheme} />
			<Pressable onPress={() => router.dismissTo('/')}>
					<View className="bg-slate-700 p-5 rounded-lg">
						<Text>Go to Index</Text>
					</View>
			</Pressable>
		</View>
	);
}
