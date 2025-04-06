import { Text, View, Button, Pressable } from "react-native";
import { Link } from "expo-router";
import useConfigurationStore from "@/stores/configurationStore";

export default function Index() {
  const { theme, toggleTheme } = useConfigurationStore()

  return (
    <View className="bg-background flex-1">
      <Text className="text-text">
        Current theme: {theme === 'light' ? 'light' : 'dark'}
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
