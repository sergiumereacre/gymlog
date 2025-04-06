import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { configurationStateStorage } from '@/stores/mmkv'
import * as Notifications from 'expo-notifications'

export interface ConfigurationState {
    isLoading: boolean
    pushToken: Notifications.ExpoPushToken | undefined
    notifications: boolean
    metricSystem: boolean
    theme: 'light' | 'dark'
    setIsLoading(isLoading: boolean): void
    setPushToken(pushToken: Notifications.ExpoPushToken): void
    toggleNotifications(): void
    toggleMetricSystem(): void
    setTheme: (theme: 'light' | 'dark') => void
    toggleTheme: () => void
    resetConfigStore(): void
}

const useConfigurationStore = create<ConfigurationState>()(
    persist(
        (set) => ({
            // Default values.
            isLoading: false,
            pushToken: undefined,
            notifications: false,
            metricSystem: true,
            theme: 'dark',
            // Set Loading to false when the app has finished loading.
            setIsLoading: (isLoading: boolean) => set({ isLoading }),
            // Set the notifications push token after user accepts permissions.
            setPushToken: (pushToken: Notifications.ExpoPushToken) =>
                set({ pushToken }),
            // Toggle Notifications.
            toggleNotifications: () =>
                set((state) => ({ notifications: !state.notifications })),
            // Toggle metrics system.
            toggleMetricSystem: () =>
                set((state) => ({ metricSystem: !state.metricSystem })),
            // Dark mode toggling and setting
            setTheme: (theme) => set({ theme }),
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            })),
            // Reset configuration store.
            resetConfigStore: () =>
                set({
                    isLoading: false,
                    pushToken: undefined,
                    notifications: false,
                    metricSystem: true,
                    theme: 'dark'
                }),
        }),
        {
            name: 'configuration-storage',
            storage: createJSONStorage(() => configurationStateStorage),
        }
    )
)

export default useConfigurationStore