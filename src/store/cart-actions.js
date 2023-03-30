


import { cartActions } from "./cart-slice";
import { uiActions } from "./ui";




export const fetchData = (cart) => {
  return async (dispatch) => {
    

    const fetchDataFunc = async () => {
      const response = await fetch(
        "https://react-http-3a15e-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("A problem occured!");
      }

      const data = await response.json();
      
      return data;
    };
    
    try {
       const data = await fetchDataFunc();
       dispatch(cartActions.replaceCart({
        items: data.items || [],
        totalQuantity: data.totalQuantity
       }))

    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching failed!",
        })
      );
    }
  };
};

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
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
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
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "A problem occured!",
        })
      );
    }
  };
};
