import { useTheme } from "@/hooks/useTheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Index() {
	const { colors, isDark, toggleTheme } = useTheme();

	return (
		<View className="bg-background flex-1">
			<View className="flex flex-row">
				<Text className="text-2xl text-text">GymLog</Text>
				<MaterialIcons name="settings" size={24} color={colors.text} />
			</View>

			<Text className="text-text">
				Current theme: {isDark ? "dark" : "light"}
			</Text>
			<Button title="Toggle Theme" onPress={toggleTheme} />

			<Pressable>
				<Link href={"/settings"}>
					<View className="bg-slate-700 p-5 rounded-lg">
						<Text>Go to Settings</Text>
					</View>
				</Link>
			</Pressable>
		</View>
	);
}
