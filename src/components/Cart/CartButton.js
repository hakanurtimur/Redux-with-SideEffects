import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const amount = useSelector((state) => state.amount)


  
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
