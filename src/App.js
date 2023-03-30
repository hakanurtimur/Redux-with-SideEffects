import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendRequest, fetchData } from "./store/cart-actions";

let isInitial = true; // bu tricky !!

function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const notifiaction = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      // bu tricky !!
      isInitial = false;
      return;
    }

    if(cart.changed) {

      dispatch(sendRequest(cart));
    }
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
