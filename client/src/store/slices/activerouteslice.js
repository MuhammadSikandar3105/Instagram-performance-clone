import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'active',
    initialState: { active: 'Home', prevActive: '' },
    reducers: {
        activeRoute(state, action) {
            state.active = action.payload
        },
        prevActiveRoute(state, action) {
            state.prevActive = action.payload
        }
    }
})

export const { activeRoute, prevActiveRoute } = slice.actions
export default slice.reducer