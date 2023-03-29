
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {

  const amount = useSelector(state => state.amount)
  const totalAmount = useSelector(state => state.totalAmount)
  const dispatch = useDispatch();

  const { title, price, description } = props;

  

  const addItemHandler = () => {
    dispatch(cartActions.addItem())
  }

  useEffect(() => {

    const calculate = () => {
      dispatch(cartActions.calculateAmount({price}))
    }
    calculate()
    
  }, [dispatch, price, amount])
  
  
  
  

  


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${totalAmount}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
