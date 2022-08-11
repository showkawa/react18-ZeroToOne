import './ConfirmModal.css';

const ConfirmModal = (props) => {
    return <div className="confirmModal">
        <div className="confirmText">
            <p>Do you want to delete this record ?</p>
        </div>
        <div className="confirmButton">
            <button>Sure</button>
            <button>Cancel</button>
        </div>
    </div>
};

export default ConfirmModal;