import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'createModal',
    initialState: {
        createmodal: null, //now active
        discardmodal: null,
        modalhistory: [] // save history for back to previous modal
    },
    reducers: {
        iscreatemodal(state, action) {
            const { modalName } = action.payload
            state.createmodal = modalName
            state.modalhistory = modalName
        },
        isdiscardmodal(state, action) {
            const { modalname } = action.payload
            state.discardmodal = modalname
        },
        gopreviousmoda(state) {
            state.createmodal = state.modalhistory
        },
        closediscard(state) {
            state.discardmodal = null
        },
        closecreatemodal(state) {
            state.createmodal = null
            state.modalhistory = []
        }
    }
})

export const { iscreatemodal, isdiscardmodal, gopreviousmoda, closediscard, closecreatemodal } = slice.actions
export default slice.reducer