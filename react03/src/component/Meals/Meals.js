import Meal from "./Meal/Meal";
import classes from './Meals.module.css';

const Meals = (props) => {
    return (<div className={classes.Meals}>
        {
            props.meals.map(meal => <Meal key={meal.id} meal={meal} onAdd={props.onAdd} onSub={props.onSub}/>)
        }

    </div>);
}

export default Meals;