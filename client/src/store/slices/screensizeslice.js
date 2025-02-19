import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ismobile: false,
    isipad: false,
    istablet: false,
    islaptop: false,
    islarg: false
}

const resetState = (state) => {
    state.ismobile = false
    state.isipad = false
    state.istablet = false
    state.islaptop = false
    state.islarg = false
}

const Slice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        ismobile(state) {
            resetState(state)
            state.ismobile = true
        },
        isipad(state) {
            resetState(state)
            state.isipad = true
        },
        istablet(state) {
            resetState(state)
            state.istablet = true
        },
        islaptop(state) {
            resetState(state)
            state.islaptop = true
        },
        islarg(state) {
            resetState(state)
            state.islarg = true
        },
    }
})

export const { ismobile, isipad, islaptop, istablet, islarg } = Slice.actions

export default Slice.reducer