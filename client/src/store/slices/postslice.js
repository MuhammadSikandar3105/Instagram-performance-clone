import { createSlice } from "@reduxjs/toolkit";

const postslice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            console.log('connected')
            state.push(action.payload)
        }
    }
})

export const { addPost } = postslice.actions

export default postslice.reducer