import LogsItem from './logsItem/LogsItem';
import './LearnLogs.css';
import { useState } from 'react';

const LearnLogs = (props) => {

    return <div>
        {props.items.map((item) => <LogsItem
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time}
            onDelLog={() => props.onDelLog(item.id)} />)}
    </div>;
};

export default LearnLogs;