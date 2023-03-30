import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'My first book',
    price: 10,
    description: 'My first book i ever wrote!'

  },
  {
    id: 'p2',
    title: 'My second book',
    price: 15,
    description: 'My second book i ever wrote!'

  },
]

const Products = (props) => {

  


  const itemList = DUMMY_DATA.map((item) =>  <ProductItem
    id = {item.id}
    title = {item.title}
    price= {item.price}
    description= {item.description}
    key = {item.id}
  />)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {itemList}
      </ul>
    </section>
  );
};

export default Products;
