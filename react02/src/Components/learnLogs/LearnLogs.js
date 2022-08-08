import LogsItem from './logsItem/LogsItem';
import './LearnLogs.css';
import { useState } from 'react';

const LearnLogs = () => {

    const initItems = [
        {
            id: 100001,
            date: new Date(2022, 1, 20, 18, 20),
            desc: 'Learn Apache',
            time: '45 mins'
        },
        {
            id: 10002,
            date: new Date(2022, 3, 17, 18, 20),
            desc: 'Learn SpringBoot',
            time: '25 mins'
        },
        {
            id: 100003,
            date: new Date(2022, 4, 22, 18, 20),
            desc: 'Learn Redis',
            time: '75 mins'
        },
        {
            id: 100005,
            date: new Date(2022, 7, 20, 18, 20),
            desc: 'Learn Kafka',
            time: '90 mins'
        }
    ];

    const [items, setItems] = useState(initItems);

    // const addItem = () => {
    //     const newItem = {
    //         id: Math.random()*100000000000+1,
    //         date: new Date(2022, 9, 20, 18, 20),
    //         desc: 'Learn ELFK',
    //         time: '90 mins'
    //     }
    //     items.push(newItem);
    //     const newItems = Object.assign([], items)
    //     setItems(newItems);
    //     console.log("===  addItem  ===");
    //     console.log("items => ", newItems);
    // };

    // const removeItem = () => {
    //     items.pop();
    //     const newItems = Object.assign([], items)
    //     setItems(newItems);
    //     console.log("===  removeItem  ===");
    //     console.log("items => ", newItems);
    // };


    const itemData = items.map(item => <LogsItem key={item.id} date={item.date} desc={item.desc} time={item.time} />);
    return <div>
        {/* <div>
            <button className="btn" onClick={addItem}>Add item</button>
            <button className="btn" onClick={removeItem}>Remove last item</button>
        </div> */}
        {itemData}
    </div>;
};

export default LearnLogs;