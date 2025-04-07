// Default Imports.
import { MMKV } from 'react-native-mmkv'
import { StateStorage } from 'zustand/middleware'

// MMKV Storage for User Configuration.
export const configurationStorage = new MMKV({
    id: 'configuration-storage',
})

// MMKV Storage for Workout Data.
export const workoutStorage = new MMKV({
    id: 'workout-storage',
})

// State Storage for Configuration Settings.
export const configurationStateStorage: StateStorage = {
    setItem: (name: string, value: string) => {
        configurationStorage.set(name, value)
    },
    getItem: (name: string) => {
        const value = configurationStorage.getString(name)
        return value ?? null
    },
    removeItem: (name: string) => {
        configurationStorage.delete(name)
    },
}

// State Storage for Workout Data.
export const workoutStateStorage: StateStorage = {
    setItem: (name: string, value: string) => {
        workoutStorage.set(name, value)
    },
    getItem: (name: string) => {
        const value = workoutStorage.getString(name)
        return value ?? null
    },
    removeItem: (name: string) => {
        workoutStorage.delete(name)
    },
}