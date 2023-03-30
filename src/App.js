import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui";

let isInitial = true;

function App() {
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notifiaction = useSelector((state) => state.ui.notification);



  useEffect(() => {

    if(isInitial) {
      isInitial = false;
      return;
    }
    
    const putRequest = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending data...'
      }))

      const response = await fetch(
        "https://react-http-3a15e-default-rtdb.firebaseio.com/books.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: { "content-type": "application-js" },
        }
      );

      if (!response.ok) {
        
        throw new Error('A problem occured!')
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Succes",
          message: "Succesfully sended!",
        })
      );
    };

    putRequest().catch( error => {dispatch(
      uiActions.showNotification({
        status: "error",
        title: "Error",
        message: "A problem occured!",
      })
    )}
      
    );
  }, [cart, dispatch]);

  console.log(notifiaction);
  return (
    <React.Fragment>
      {notifiaction && (
        <Notification
          status={notifiaction.status}
          title={notifiaction.title}
          message={notifiaction.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
