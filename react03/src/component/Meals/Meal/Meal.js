import Counter from '../../UI/Counter/Counter';
import classes from './Meal.module.css';

const Meal = () => {
    return (<>
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="../image/meals/1.png" alt="" />
            </div>
            <div>
                <h2 className={classes.Title}>汉堡包</h2>
                <p className={classes.Desc}>新奥尔良烤翅翅根和2块新奥尔良烤翅翅中。热辣香骨鸡桶含16块热辣香骨鸡。大堡口福桶含1个新奥尔良烤鸡腿堡，2块新奥尔良烤翅，2块香辣鸡翅，1块吮指原味鸡，1个红豆派，1份醇香土豆泥，2杯百事可乐（中）</p>
                <div className={classes.PriceWapper}>
                    <span className={classes.Price}>12</span>
                    <Counter amount={1}/>
                </div>
            </div>
        </div>
    </>);
}

export default Meal;