import './LogFilter.css';

const LogFilter = (props) => {

    const changeFilter= (event) =>{
            console.log(event.target.value);
            props.onChangeFilter(+event.target.value);
    };
    return <div>
        year: <select className="logFilter" onChange={changeFilter} value={props.year}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>
    </div>;
}

export default LogFilter;