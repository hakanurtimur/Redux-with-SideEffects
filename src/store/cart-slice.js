import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

const cartSlicer = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (!existingCartItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingCartItem.quantity++;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice + newItem.price;
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;

      const existingCartItem = state.items.find((item) => item.id === id);

      if (existingCartItem.quantity <= 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingCartItem.quantity--;
        existingCartItem.totalPrice =
          existingCartItem.totalPrice - existingCartItem.price;
      }
      state.totalQuantity--;
    },
  },
});

export const sendRequest = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending data...",
      })
    );

    const sendRequestFunc = async () => {
      const response = await fetch(
        "https://react-http-3a15e-default-rtdb.firebaseio.com/books.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: { "content-type": "application-js" },
        }
      );
      if (!response.ok) {
        throw new Error("A problem occured!");
      }
    };

    try {
        await sendRequestFunc();
        dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Succes",
              message: "Succesfully sended!",
            })
          );
    }catch(error) {
        dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error",
              message: "A problem occured!",
            })
          )
    }
  };
};



export const cartActions = cartSlicer.actions;
export default cartSlicer;
