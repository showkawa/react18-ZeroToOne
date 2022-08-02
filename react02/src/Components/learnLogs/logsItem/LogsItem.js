import Date from './date/Date';
import './LogsItem.css';

const LogsItem = (props) => {
    console.log(props);
    return <div className="item">
        <Date date={props.date}/>
        <div className="content">
            <h2 className="desc">
                {props.desc}
            </h2>
            <div className="time">{props.time}</div>
        </div>
    </div>;
};

export default LogsItem;