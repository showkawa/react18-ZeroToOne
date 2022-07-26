import classes from './Cart.module.css';
import iconImg from '../../../asset/bag.png';
import CartContext from '../../../store/CartContext';
import { useCallback, useContext, useEffect, useState } from 'react';
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';

const Cart = () => {

    const ctx = useContext(CartContext);

    const [showDetails, setShowDetails] = useState(false);

    const [showCheckout, setShowCheckout] = useState(false);

    const toggleDetailsHandler = (e) => {
        if (ctx.totalAmount === 0) { return }
        setShowDetails(preValue => !preValue);
    }

    const showCheckoutHandler = useCallback(() => {
        if (ctx.totalAmount === 0) { return }
        setShowCheckout(true);
    },[ctx]);


    const hideCheckoutHandler = (e) => {
        e.stopPropagation();
        setShowCheckout(false);
    }

    useEffect(() => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            setShowCheckout(false);
        }
    }, [ctx])



    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
            {showDetails && <CartDetails />}

            <div className={classes.Icon}>
                <img src={iconImg} alt="bag" />
                {
                    ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
                }
            </div>
            {
                ctx.totalPrice === 0 ? <p className={classes.NoMeal}>请选择商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>
            }
            <button className={`${classes.Button} ${ctx.totalPrice === 0 ? classes.Disable : ''}`} onClick={showCheckoutHandler}>去结算</button>
        </div>)
        ;
}

export default Cart;