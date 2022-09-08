
import classes from './Checkout.module.css';
import ReactDOM from 'react-dom';

const checkoutRoot = document.getElementById('checkout-root');

const Checkout = () => {
    return ReactDOM.createPortal( <div className={classes.Checkout}>
        AAAAAAAAAA
    </div> , checkoutRoot);
}
 
export default Checkout;