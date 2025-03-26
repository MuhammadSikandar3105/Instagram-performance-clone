import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'createModal',
    initialState: {
        createmodal: null, //now active
        modalhistory: [] // save history for back to previous modal
    },
    reducers: {
        iscreatemodal(state, action) {
            const { modalName } = action.payload
            state.createmodal = modalName
            state.modalhistory = modalName
        },
        gopreviousmoda(state) {
            state.createmodal = state.modalhistory
        },
        closecreatemodal(state) {
            state.createmodal = null
            state.modalhistory = []
        }
    }
})

export const { iscreatemodal, gopreviousmoda, closecreatemodal } = slice.actions
export default slice.reducer