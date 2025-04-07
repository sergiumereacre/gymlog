import { configurationStateStorage } from "@/stores/mmkv";
import type { ExpoPushToken } from "expo-notifications";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Splitting the state and actions into separate interfaces for better organization
// and readability.
interface ConfigurationState {
	pushToken: ExpoPushToken | undefined;
	notifications: boolean;
	metricSystem: boolean;
	theme: "light" | "dark";
}

interface ConfigurationActions {
	setPushToken: (pushToken: ExpoPushToken) => void;
	toggleNotifications: () => void;
	toggleMetricSystem: () => void;
	setTheme: (theme: "light" | "dark") => void;
	toggleTheme: () => void;
	resetConfigStore: () => void;
}

// Zustand store for managing configuration state
const useConfigurationStore = create<
	ConfigurationState & ConfigurationActions
>()(
	persist(
		immer((set) => ({
			// Explicit initial state
			pushToken: undefined,
			notifications: false,
			metricSystem: true,
			theme: "dark",

			// Actions using Immer's mutable draft pattern
			setPushToken: (pushToken) => set({ pushToken }),

			toggleNotifications: () =>
				set((state) => {
					state.notifications = !state.notifications;
				}),

			toggleMetricSystem: () =>
				set((state) => {
					state.metricSystem = !state.metricSystem;
				}),

			setTheme: (theme) => set({ theme }),

			toggleTheme: () =>
				set((state) => {
					state.theme = state.theme === "light" ? "dark" : "light";
				}),

			resetConfigStore: () =>
				set((state) => {
					state.pushToken = undefined;
					state.notifications = false;
					state.metricSystem = true;
					state.theme = "dark";
				}),
		})),
		{
			name: "config-store-v1",
			storage: createJSONStorage(() => configurationStateStorage),
		}
	)
);

export default useConfigurationStore;
