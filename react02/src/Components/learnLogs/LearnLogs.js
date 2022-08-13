import LogsItem from './logsItem/LogsItem';
import './LearnLogs.css';
import LogFilter from '../logFilter/LogFilter';
import { useState } from 'react';

const LearnLogs = (props) => {

    const [year, setYear] = useState(2022);

    let filterData = props.items.filter(item => { 
        const filterYear = typeof item.date === "string" ? new Date(item.date).getFullYear() : item.date.getFullYear();
        return filterYear === year
    });

    const changeFilter = (year) => {
        setYear(year);
    };

    return <div>
        <LogFilter onChangeFilter={changeFilter} year={year}></LogFilter>
        {filterData.length ? filterData.map((item) => <LogsItem
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time}
            onDelLog={() => props.onDelLog(item.id)} />) : <div className="emptyLogs">No Learning Record</div>}
    </div>;
};

export default LearnLogs;