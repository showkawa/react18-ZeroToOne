import { useState } from 'react';
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal';
import Like from './like/Like';
import LogDate from './logDate/LogDate';
import './LogsItem.css';

const LogsItem = (props) => {

    const [showConfirm, setShowConfirm] = useState(false);

    const removeItem = () => {
        setShowConfirm(true);
    };

    const cancelConfirmModal = () => {
        setShowConfirm(false);
    }

    const okConfirmModal = () => {
        props.onDelLog();
    }

    return <div className="item">
        
        {showConfirm && <ConfirmModal confirmText={"Do you want to delete this record ?"} onCancel={cancelConfirmModal} onOk={okConfirmModal}/>}
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