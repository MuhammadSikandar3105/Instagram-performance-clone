import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'createform',
    initialState: {
        pic: null
    },
    reducers: {
        newdata(state, action) {
            const { pic } = action.payload
            state.pic = pic
        }
    }
})

export const { newdata } = slice.actions
export default slice.reducer