import classes from './Backdrop.module.css';
import ReactDOM from 'react-dom';

const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    
   return ReactDOM.createPortal(<div className={classes.Backdrop }></div>, backdropRoot)
}
 
export default Backdrop;