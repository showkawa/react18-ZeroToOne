import LogsItem from './logsItem/LogsItem';
import './LearnLogs.css';

const LearnLogs = () => {

    const itemList = [
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

    const itemData = itemList.map(item => <LogsItem key={item.id} date={item.date} desc={item.desc} time={item.time} />);
    return itemData;
};

export default LearnLogs;