import { configureStore } from '@reduxjs/toolkit'
import sreenReducer from './slices/screensizeslice'
import activeReduceer from './slices/activerouteslice'

export const store = configureStore({
    reducer: {
        screen: sreenReducer,
        active: activeReduceer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

