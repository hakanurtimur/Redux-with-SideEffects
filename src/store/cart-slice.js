import { createSlice } from "@reduxjs/toolkit";


const cartSlicer = createSlice({
    name: 'cart',
    initialState: {items: [], totalQuantity: 0}, 
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;

            const existingCartItem = state.items.find(item => item.id === newItem.id);

            if(!existingCartItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                    
                })
            } else {
                existingCartItem.quantity ++;
                existingCartItem.totalPrice = existingCartItem.totalPrice + newItem.price;
            }
            state.totalQuantity ++
        },
        removeItemFromCart(state, action) {
            const id = action.payload;

            const existingCartItem = state.items.find(item => item.id === id);

            if(existingCartItem.quantity <= 1) {
                state.items = state.items.filter(item => item.id !== id)
            }else {
                existingCartItem.quantity --;
                existingCartItem.totalPrice = existingCartItem.totalPrice - existingCartItem.price;
            }
            state.totalQuantity --
        }
    }
})

export const cartActions = cartSlicer.actions;
export default cartSlicer;