import React from 'react';
import classes from './Bar.module.css';

const Bar = (props) => {

    console.log('--- Bar Component ---', props);
    return (
        <div className={classes.Bar}>
            <div className={classes.TotalPrice}>{props.totalPrice}</div>
            <button className={classes.Button}>去支付</button>
        </div>

    );
}

export default React.memo(Bar);