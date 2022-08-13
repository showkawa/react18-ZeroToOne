import ReactDOM from 'react-dom';
import './BackDrop.css';

const backdropRoot = document.getElementById("backdrop-root");

const BackDrop = (props) => {
    return ReactDOM.createPortal(<div className="backDrop">
        {props.children}
    </div>, backdropRoot);
}

export default BackDrop;