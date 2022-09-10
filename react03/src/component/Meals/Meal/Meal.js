import Counter from '../../UI/Counter/Counter';
import classes from './Meal.module.css';

const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.attributes.img} alt="" />
            </div>
            <div className={classes.DescBox}>
                <h2 className={classes.Title}>{props.meal.attributes.title}</h2>
                {
                    props.noDesc ? null: <p className={classes.Desc}>{props.meal.attributes.desc}</p>
                }
                <div className={classes.PriceWapper}>
                    <span className={classes.Price}>{props.meal.attributes.price}</span>
                    <Counter meal={props.meal} />
                </div>
            </div>
        </div>
    );
}

export default Meal;