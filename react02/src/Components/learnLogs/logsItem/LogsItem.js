import Date from './date/Date';
import './LogsItem.css';

const LogsItem = () => {
    return <div className="item">
        <Date />
        <div className="content">
            <h2 className="desc">
                Learn SpringBoot
            </h2>
            <div className="time">40 mins</div>
        </div>
    </div>;
};

export default LogsItem;