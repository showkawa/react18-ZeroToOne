import Com from './com/Com';
import LogDate from './logDate/LogDate';
import './LogsItem.css';

const LogsItem = (props) => {
    return <div className="item">
        <LogDate date={props.date}/>
        <div className="content">
            <h2 className="desc">
                {props.desc}
            </h2>
            <div className="time">{props.time} mins</div>
        </div>
        <div className="com">
            <Com {...props}/>
        </div>
    </div>;
};

export default LogsItem;