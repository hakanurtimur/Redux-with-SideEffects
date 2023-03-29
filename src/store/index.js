import { createSlice, configureStore } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {amount: 0, totalAmount: 0},
    reducers: {
        addItem (state) {
            state.amount ++
        },
        removeItem (state) {
            state.amount --
        },
        calculateAmount (state, action) {
            state.totalAmount = state.amount * action.payload.price
        }
    }
})

const store = configureStore({
    reducer: cartSlice.reducer
})
    
export const cartActions = cartSlice.actions

export default store;
