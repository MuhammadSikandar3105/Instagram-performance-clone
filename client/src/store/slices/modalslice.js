import { createSlice } from "@reduxjs/toolkit";

const modalslice = createSlice({
    name: 'modal',
    initialState: {
        activemodal: null,
        buttonRef: null,
        modalhistory: []

    },
    reducers: {
        isModalOpen(state, action) {
            const { modalName, buttonRef } = action.payload
            state.activemodal = modalName
            if (buttonRef !== undefined) {
                state.buttonRef = buttonRef
            }
            state.modalhistory.push(modalName)
        },
        goPrevious(state) {
            if (state.modalhistory.length > 1) {
                state.modalhistory.pop()
                state.activemodal = state.modalhistory[state.modalhistory.length - 1]
            } else {
                state.activemodal = null
                state.buttonRef = null
                state.modalhistory = []
            }
        },
        closeModal(state) {
            state.activemodal = null
            state.buttonRef = null
            state.modalhistory = []
        }
    }
})

export const { isModalOpen, goPrevious, closeModal } = modalslice.actions

export default modalslice.reducer