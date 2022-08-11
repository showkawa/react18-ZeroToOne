import { useState } from 'react';
import LearnLogs from './Components/learnLogs/LearnLogs';
import LogForm from './Components/logForm/LogForm';
import './App.css';
import ConfirmModal from './Components/UI/ConfirmModal/ConfirmModal';

const App = () => {

    const [items, setItems] = useState([
        {
            id: 100001,
            date: new Date(2022, 1, 20, 18, 20),
            desc: 'Learn Apache',
            time: '45'
        },
        {
            id: 10002,
            date: new Date(2022, 3, 17, 18, 20),
            desc: 'Learn SpringBoot',
            time: '25'
        },
        {
            id: 100003,
            date: new Date(2022, 4, 22, 18, 20),
            desc: 'Learn Redis',
            time: '75'
        },
        {
            id: 100005,
            date: new Date(2022, 7, 20, 18, 20),
            desc: 'Learn Kafka',
            time: '90'
        }
    ])

    const saveLogForm = (formData) => {
        formData = { ...formData, id: Date.now() + '' }
        // items.push(formData);
        // setItems(items);
        setItems([formData, ...items]);
    }

    const delLogById = (itemId) => {
        const newItems = items.filter(item => item.id !== itemId);
        setItems(newItems);
    }

    return <>
        <ConfirmModal></ConfirmModal>
        <LogForm className="card" onSaveLogForm={saveLogForm}></LogForm>
        <div className="learn-logs">
            {items.length ? <LearnLogs items={items} onDelLog={delLogById} /> : <div className="emptyLogs">No Learning Record</div>}
        </div>
    </>;
};

export default App;