import { configureStore } from '@reduxjs/toolkit'
import cartSlicer from './cart-slice';
import uiReducer from './ui'







const store = configureStore ({
    reducer: {
        ui: uiReducer, cart: cartSlicer.reducer
    }
})


export default store;