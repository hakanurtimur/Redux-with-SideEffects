import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const amount = useSelector((state) => state.amount);
  const totalAmount = useSelector((state) => state.totalAmount)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ price: 6, title: "Test Item", quantity: amount, total: totalAmount }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
