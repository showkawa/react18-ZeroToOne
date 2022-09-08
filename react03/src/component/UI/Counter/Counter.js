import classes from './Counter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/CartContext';
import { useContext } from 'react';

const Counter = (props) => {

    const ctxCart = useContext(CartContext);

    const addButtonHandler = () => {
        ctxCart.addItem(props.meal);
    }

    const subButtonHandler = () => {
        ctxCart.removeItem(props.meal);
    }

    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button className={classes.Sub} onClick={subButtonHandler}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                ) : null
            }
            <button className={classes.Add} onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>);
}

export default Counter;