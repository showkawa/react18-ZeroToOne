import Card from "./card/Card";
import './LogForm.css';

const LogForm = (props) => {

    const saveLogForm = (formData) => {
        props.onSaveLogForm(formData);
    }


    return <Card className="card" onSaveLogForm={saveLogForm}/>
}
export default LogForm;