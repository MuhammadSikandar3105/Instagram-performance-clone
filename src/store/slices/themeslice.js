import { createSlice } from "@reduxjs/toolkit";

// theme slice for update theme dark/light
const slice = createSlice({
    name: 'theme',
    initialState: { darktheme: false },
    reducers: {
        darktheme2(state) {
            state.darktheme = !state.darktheme
        }
    }
})

export const { darktheme2 } = slice.actions

export default slice.reducer