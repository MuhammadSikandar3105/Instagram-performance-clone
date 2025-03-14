import { createSlice } from "@reduxjs/toolkit";

// which route is active for update in icons and List compo
const slice = createSlice({
    name: 'active',
    initialState: { active: '/' },
    reducers: {
        activeRoute(state, action) {
            state.active = action.payload
        }
    }
})

export const { activeRoute, prevActiveRoute } = slice.actions
export default slice.reducer