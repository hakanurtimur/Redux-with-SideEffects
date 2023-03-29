
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';
import classes from './CartItem.module.css';

const CartItem = (props) => {

  const amount = useSelector(state => state.amount)

  const dispatch = useDispatch()

  const { title, quantity, price, total } = props.item;

  const addItemHandler = () => {

    dispatch(cartActions.addItem())
  }
  const removeItemHandler = () => {

    if(amount > 0) {
    dispatch(cartActions.removeItem())
    }else{
      return;
    }
  }
  
  



  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
