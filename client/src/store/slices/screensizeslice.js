import { createSlice } from "@reduxjs/toolkit";

// initial state for slice
const initialState = {
    mobile: false,
    ipad: false,
    tablet: false,
    laptop: false,
    largescreen: false
}

// reset function who call one every call to reducer for 
// updated value of screen and update specific istead of updating all
const resetState = (state) => {
    state.mobile = false
    state.ipad = false
    state.tablet = false
    state.laptop = false
    state.largescreen = false
}

const Slice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        ismobile(state) {
            resetState(state)
            state.mobile = true
        },
        isipad(state) {
            resetState(state)
            state.ipad = true
        },
        istablet(state) {
            resetState(state)
            state.tablet = true
        },
        islaptop(state) {
            resetState(state)
            state.laptop = true
        },
        islarg(state) {
            resetState(state)
            state.largescreen = true
        },
    }
})

export const { ismobile, isipad, islaptop, istablet, islarg } = Slice.actions

export default Slice.reducer