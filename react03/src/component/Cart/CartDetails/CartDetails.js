import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './CartDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../store/CartContext';
import { useContext } from 'react';
import Meal from '../../Meals/Meal/Meal';
const CartDetails = () => {

    const ctx = useContext(CartContext);


    return (<Backdrop>
        <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
            <header className={classes.Header}>
                <h2 className={classes.Title}>餐品详情</h2>
                <div className={classes.Clear}>
                    <FontAwesomeIcon icon={faTrash} />
                    <span>清空购物车</span>
                </div>
            </header>
            <div className={classes.MealList}>
                {
                    ctx.items.map(item => item.amount >0 && <Meal key={item.id} meal={item} noDesc={true} />)
                }
            </div>
        </div>
    </Backdrop>);
}

export default CartDetails;