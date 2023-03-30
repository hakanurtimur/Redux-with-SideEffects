import { createSlice } from "@reduxjs/toolkit";



const uiSlicer = createSlice({
    name: 'ui',
    initialState: {isShown: false, notification: null},
    reducers: {
        toggle(state) {
            state.isShown = !state.isShown
        },

        showNotification (state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

const uiReducer = uiSlicer.reducer
export const uiActions = uiSlicer.actions;
export default uiReducer;
