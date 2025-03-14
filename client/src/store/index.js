import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slices/postslice'
import themeReducer from './slices/themeslice'
import sreenReducer from './slices/screensizeslice'
import modalReducer from './slices/modalslice'
import activeReduceer from './slices/activerouteslice'
import navbarReducer from './slices/navbarwidthslice'
import { authentictionMiddleware } from './middleware/auth'

export const store = configureStore({
    reducer: {
        post: postReducer,
        theme: themeReducer,
        screen: sreenReducer,
        modal: modalReducer,
        active: activeReduceer,
        navWidth: navbarReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authentictionMiddleware)
})

