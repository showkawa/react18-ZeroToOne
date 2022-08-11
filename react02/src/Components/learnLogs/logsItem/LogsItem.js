import Like from './like/Like';
import LogDate from './logDate/LogDate';
import './LogsItem.css';

const LogsItem = (props) => {

    const removeItem = () => {
        const isDelete = window.confirm('Do you want to delete this item ?');
        if (isDelete) {
            props.onDelLog();
        }
    };

    return <div className="item">
        <LogDate date={props.date} />
        <div className="content">
            <h2 className="desc">
                {props.desc}
            </h2>
            <div className="time">{props.time} mins</div>
        </div>
        <div className="like">
            <Like {...props} />
        </div>
        <button className="btn removeBtn" onClick={removeItem}>X</button>
    </div>;
};

export default LogsItem;