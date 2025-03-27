import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeslice'
import sreenReducer from './slices/screensizeslice'
import modalReducer from './slices/modalslice'
import activeReduceer from './slices/activerouteslice'
import navbarReducer from './slices/navbarwidthslice'
import createModalReducer from './slices/createmodalslice'
import createformReducer from './slices/createFormslice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        screen: sreenReducer,
        modal: modalReducer,
        active: activeReduceer,
        navWidth: navbarReducer,
        createModal: createModalReducer,
        createForm: createformReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

