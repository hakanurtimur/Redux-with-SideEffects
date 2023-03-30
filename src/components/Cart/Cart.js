import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartIsShown = useSelector(state => state.ui.isShown)
  const cartItems = useSelector(state => state.cart.items);

  const itemList = cartItems.map(item => <CartItem
    item={item} key={item.id}
  /> )
  
  return (
    <React.Fragment>
    {cartIsShown && <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemList}
      </ul>
    </Card>}
    </React.Fragment>
  );
};

export default Cart;
