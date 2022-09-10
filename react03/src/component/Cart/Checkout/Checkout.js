
import classes from './Checkout.module.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';

const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {
console.log('--- Checkout ---', props);
    const ctx = useContext(CartContext);
    return ReactDOM.createPortal(<div className={classes.Checkout}>
        <div className={classes.Close} >
            <FontAwesomeIcon icon={faXmark} onClick={e => props.onHide(e)} />
        </div>
        <div className={classes.MealsDesc}>
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
            </header>
            <div  className={classes.Meals}>
                {
                    ctx.items.map(item => <CheckoutItem key={item.id} meal={item}/>)
                }
            </div>
            <footer className={classes.Footer}>
                <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
            </footer>
        </div>
        <Bar totalPrice={ctx.totalPrice}/>
    </div>, checkoutRoot);
}

export default Checkout;