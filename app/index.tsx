import { Text, View, Button } from "react-native";
import useConfigurationStore from "@/stores/configurationStore";

export default function Index() {
  const { theme, toggleTheme } = useConfigurationStore()

  return (
    <View className="bg-background flex-1">
      <Text className="text-text">
        Current theme: {theme === 'light' ? 'dark' : 'light'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}
