import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';

const Cart = () => {

    const ctx = useContext(CartContext);

    return (<div className={classes.Cart}>
        <div className={classes.Icon}>
            <img src={iconImg} alt="bag" />
            {
                ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
            }
        </div>
        {
            ctx.totalPrice === 0 ? <p className={classes.NoMeal}>请选择商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>
        }
        <button className={`${classes.Button} ${ctx.totalPrice === 0 ? classes.Disable : ''}`}>去结算</button>
    </div>);
}

export default Cart;