import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';

const Cart = () => {
    return (<div className={classes.Cart}>
        <div className={classes.Icon}>
            <img src={iconImg} alt="bag" />
            <span className={classes.TotalAmount}>22</span>
        </div>
        <p className={classes.Price}>24</p>
        <button className={classes.Button}>去结算</button>
    </div>);
}

export default Cart;