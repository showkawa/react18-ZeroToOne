import classes from './CheckoutItem.module.css';
import Counter from '../../../UI/Counter/Counter';
const CheckoutItem = (props) => {
    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.MealImg}>
                <img src={props.meal.attributes.img} alt="" />
            </div>
            <div className={classes.Desc}>
                <h2 className={classes.Title}>{props.meal.attributes.title}</h2>
                <div className={classes.PriceOuter}>
                    <Counter meal={props.meal} />
                    <div  className={classes.Price}>{props.meal.attributes.price * props.meal.attributes.amount}</div>
                </div>
                
            </div>
        </div>
        );
}

export default CheckoutItem;