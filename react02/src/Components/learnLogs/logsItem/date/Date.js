import './Date.css';

const Date = (props) => {
    const m = props.date.getMonth();
    const d = props.date.getDate();
    return <div className="date">
        <div className="month">{m}</div>
        <div className="day">{d}</div>
    </div>;
};

export default Date;