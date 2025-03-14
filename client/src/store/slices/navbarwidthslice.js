import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'navWidth',
    initialState: { width: 0 },
    reducers: {
        navbarwidth(state, action) {
            state.width = action.payload

        }
    }
})

export const { navbarwidth } = slice.actions

export default slice.reducer