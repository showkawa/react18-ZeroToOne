import './LogDate.css';
    
const LogDate = (props) => {
    const m = typeof props.date === "string" ? new Date(props.date).getMonth() + 1 : props.date.getMonth();
    const d = typeof props.date === "string" ? new Date(props.date).getDate() : props.date.getDate();
    return <div className="date">
        <div className="month">{m}</div>
        <div className="day">{d}</div>
    </div>;
};

export default LogDate;